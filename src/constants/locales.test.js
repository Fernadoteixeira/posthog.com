// Node executes this dependency-free CommonJS test directly.
/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('node:assert/strict')
const test = require('node:test')

const {
    LOCALES,
    ROUTE_IDS,
    ROUTE_MANIFEST,
    localeForPath,
    publishedLanguageAlternates,
    publishedRouteMetadata,
    validateLocaleManifest,
} = require('./locales')

const cloneLocales = () => JSON.parse(JSON.stringify(LOCALES))
const cloneManifest = () => JSON.parse(JSON.stringify(ROUTE_MANIFEST))

test('defines the staged locale and route contract', () => {
    assert.deepEqual(LOCALES, {
        en: { code: 'en', prefix: '', htmlLang: 'en', isDefault: true },
        ko: { code: 'ko', prefix: '/ko', htmlLang: 'ko', isDefault: false },
        'pt-BR': { code: 'pt-BR', prefix: '/pt-br', htmlLang: 'pt-BR', isDefault: false },
    })
    assert.deepEqual(Object.keys(ROUTE_MANIFEST), ROUTE_IDS)
    assert.equal(validateLocaleManifest(), true)
    assert.equal(ROUTE_MANIFEST.home['pt-BR'].status, 'published')
    assert.equal(ROUTE_MANIFEST.productAnalytics['pt-BR'].status, 'published')
    assert.ok(
        Object.entries(ROUTE_MANIFEST)
            .filter(([routeId]) => routeId !== 'home' && routeId !== 'productAnalytics')
            .every(([, routes]) => routes['pt-BR'].status === 'planned')
    )
})

test('resolves locale prefixes on path segment boundaries', () => {
    const cases = [
        ['/', 'en'],
        ['/product-analytics', 'en'],
        ['/ko', 'ko'],
        ['/ko/newsletter/foo', 'ko'],
        ['/pt-br', 'pt-BR'],
        ['/pt-br/product-analytics', 'pt-BR'],
        ['/koala', 'en'],
    ]

    for (const [pathname, localeCode] of cases) {
        assert.equal(localeForPath(pathname).code, localeCode)
    }
})

test('returns Brazilian Portuguese alternates only after the route is published', () => {
    assert.deepEqual(publishedLanguageAlternates('home'), [
        { hrefLang: 'en', href: '/' },
        { hrefLang: 'ko', href: '/ko' },
        { hrefLang: 'pt-BR', href: '/pt-br' },
        { hrefLang: 'x-default', href: '/' },
    ])

    const plannedHomeManifest = cloneManifest()
    plannedHomeManifest.home['pt-BR'].status = 'planned'
    assert.deepEqual(publishedLanguageAlternates('home', plannedHomeManifest), [
        { hrefLang: 'en', href: '/' },
        { hrefLang: 'ko', href: '/ko' },
        { hrefLang: 'x-default', href: '/' },
    ])

    assert.deepEqual(publishedLanguageAlternates('productAnalytics'), [
        { hrefLang: 'en', href: '/product-analytics' },
        { hrefLang: 'pt-BR', href: '/pt-br/product-analytics' },
        { hrefLang: 'x-default', href: '/product-analytics' },
    ])

    const plannedProductManifest = cloneManifest()
    plannedProductManifest.productAnalytics['pt-BR'].status = 'planned'
    assert.deepEqual(publishedLanguageAlternates('productAnalytics', plannedProductManifest), [
        { hrefLang: 'en', href: '/product-analytics' },
        { hrefLang: 'x-default', href: '/product-analytics' },
    ])
})

test('provides equivalent manifest metadata for each published home route', () => {
    const expectedAlternates = [
        { hrefLang: 'en', href: '/' },
        { hrefLang: 'ko', href: '/ko' },
        { hrefLang: 'pt-BR', href: '/pt-br' },
        { hrefLang: 'x-default', href: '/' },
    ]

    const rootLocales = [
        ['en', '/', 'en'],
        ['ko', '/ko', 'ko'],
        ['pt-BR', '/pt-br', 'pt-BR'],
    ]

    for (const [localeCode, canonicalUrl, lang] of rootLocales) {
        const metadata = publishedRouteMetadata('home', localeCode)
        assert.equal(metadata.lang, lang)
        assert.equal(metadata.canonicalUrl, canonicalUrl)
        assert.equal(localeForPath(metadata.canonicalUrl).code, localeCode)
        assert.deepEqual(metadata.languageAlternates, expectedAlternates)
    }
})

test('rejects malformed locale prefixes', () => {
    const locales = cloneLocales()
    locales.ko.prefix = 'ko'

    assert.throws(() => validateLocaleManifest(locales, cloneManifest()), /Malformed locale prefix/)
})

test('rejects missing English routes', () => {
    const routeManifest = cloneManifest()
    delete routeManifest.home.en

    assert.throws(() => validateLocaleManifest(cloneLocales(), routeManifest), /Route home is missing an English route/)
})

test('rejects unsupported route locales and statuses', () => {
    const unsupportedLocaleManifest = cloneManifest()
    unsupportedLocaleManifest.home.fr = { path: '/fr', status: 'planned' }

    assert.throws(
        () => validateLocaleManifest(cloneLocales(), unsupportedLocaleManifest),
        /Route home uses unsupported locale: fr/
    )

    const unsupportedStatusManifest = cloneManifest()
    unsupportedStatusManifest.home.ko.status = 'draft'

    assert.throws(
        () => validateLocaleManifest(cloneLocales(), unsupportedStatusManifest),
        /Route home has unsupported status for locale ko: draft/
    )
})

test('rejects duplicate published paths and prefixed default routes', () => {
    const duplicatePathManifest = cloneManifest()
    duplicatePathManifest.productAnalytics.en.path = '/'

    assert.throws(() => validateLocaleManifest(cloneLocales(), duplicatePathManifest), /Duplicate published path/)

    const prefixedDefaultRouteManifest = cloneManifest()
    prefixedDefaultRouteManifest.home.en.path = '/en'

    assert.throws(() => validateLocaleManifest(cloneLocales(), prefixedDefaultRouteManifest), /must be unprefixed/)
})

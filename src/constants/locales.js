const LOCALES = Object.freeze({
    en: Object.freeze({
        code: 'en',
        prefix: '',
        htmlLang: 'en',
        isDefault: true,
    }),
    ko: Object.freeze({
        code: 'ko',
        prefix: '/ko',
        htmlLang: 'ko',
        isDefault: false,
    }),
    'pt-BR': Object.freeze({
        code: 'pt-BR',
        prefix: '/pt-br',
        htmlLang: 'pt-BR',
        isDefault: false,
    }),
})

const ROUTE_IDS = Object.freeze(['home', 'productAnalytics', 'sessionReplay', 'featureFlags', 'experiments'])
const PUBLISHED_STATUS = 'published'
const PLANNED_STATUS = 'planned'
const ROUTE_STATUSES = new Set([PUBLISHED_STATUS, PLANNED_STATUS])

const ROUTE_MANIFEST = Object.freeze({
    home: Object.freeze({
        en: Object.freeze({ path: '/', status: PUBLISHED_STATUS }),
        ko: Object.freeze({ path: '/ko', status: PUBLISHED_STATUS }),
        'pt-BR': Object.freeze({ path: '/pt-br', status: PUBLISHED_STATUS }),
    }),
    productAnalytics: Object.freeze({
        en: Object.freeze({ path: '/product-analytics', status: PUBLISHED_STATUS }),
        'pt-BR': Object.freeze({ path: '/pt-br/product-analytics', status: PLANNED_STATUS }),
    }),
    sessionReplay: Object.freeze({
        en: Object.freeze({ path: '/session-replay', status: PUBLISHED_STATUS }),
        'pt-BR': Object.freeze({ path: '/pt-br/session-replay', status: PLANNED_STATUS }),
    }),
    featureFlags: Object.freeze({
        en: Object.freeze({ path: '/feature-flags', status: PUBLISHED_STATUS }),
        'pt-BR': Object.freeze({ path: '/pt-br/feature-flags', status: PLANNED_STATUS }),
    }),
    experiments: Object.freeze({
        en: Object.freeze({ path: '/experiments', status: PUBLISHED_STATUS }),
        'pt-BR': Object.freeze({ path: '/pt-br/experiments', status: PLANNED_STATUS }),
    }),
})

const isRecord = (value) => value !== null && typeof value === 'object' && !Array.isArray(value)

const hasPathPrefix = (path, prefix) => path === prefix || path.startsWith(`${prefix}/`)

const isRoutePath = (path) =>
    typeof path === 'string' &&
    path.startsWith('/') &&
    !path.includes('//') &&
    !path.includes('?') &&
    !path.includes('#') &&
    (path === '/' || !path.endsWith('/'))

/**
 * Resolves a Gatsby pathname to its locale without treating similarly named
 * English routes (such as /koala) as locale-prefixed routes.
 */
const localeForPath = (pathname, locales = LOCALES) => {
    if (typeof pathname !== 'string' || !pathname.startsWith('/')) {
        throw new TypeError('pathname must be an absolute path')
    }

    const localeList = Object.values(locales)
    const defaultLocale = localeList.find((locale) => locale.isDefault)
    const prefixedLocale = localeList
        .filter((locale) => locale.prefix)
        .sort((left, right) => right.prefix.length - left.prefix.length)
        .find((locale) => hasPathPrefix(pathname, locale.prefix))

    return prefixedLocale || defaultLocale
}

/**
 * Returns SEO-ready alternates for a route. Planned routes are intentionally
 * omitted, so adding them to the manifest cannot publish localization early.
 */
const publishedLanguageAlternates = (routeId, routeManifest = ROUTE_MANIFEST, locales = LOCALES) => {
    const localizedRoutes = routeManifest[routeId]
    if (!localizedRoutes) {
        throw new Error(`Unknown locale route ID: ${routeId}`)
    }

    const localeList = Object.values(locales)
    const alternates = localeList
        .filter((locale) => localizedRoutes[locale.code]?.status === PUBLISHED_STATUS)
        .map((locale) => ({
            hrefLang: locale.htmlLang,
            href: localizedRoutes[locale.code].path,
        }))

    const defaultLocale = localeList.find((locale) => locale.isDefault)
    const defaultRoute = localizedRoutes[defaultLocale?.code]
    if (defaultRoute?.status === PUBLISHED_STATUS) {
        alternates.push({ hrefLang: 'x-default', href: defaultRoute.path })
    }

    return alternates
}

/**
 * Returns manifest-derived SEO data for a published localized route.
 */
const publishedRouteMetadata = (routeId, localeCode, routeManifest = ROUTE_MANIFEST, locales = LOCALES) => {
    const locale = locales[localeCode]
    const route = routeManifest[routeId]?.[localeCode]

    if (!locale) {
        throw new Error(`Unknown locale: ${localeCode}`)
    }
    if (!route || route.status !== PUBLISHED_STATUS) {
        throw new Error(`Route ${routeId} is not published for locale ${localeCode}`)
    }

    return {
        lang: locale.htmlLang,
        canonicalUrl: route.path,
        languageAlternates: publishedLanguageAlternates(routeId, routeManifest, locales),
    }
}

/**
 * Validates the static localization contract before it is consumed by page,
 * build, or SEO code.
 */
const validateLocaleManifest = (locales = LOCALES, routeManifest = ROUTE_MANIFEST) => {
    if (!isRecord(locales)) {
        throw new Error('Locales must be an object keyed by locale code')
    }

    const localeList = Object.values(locales)
    if (localeList.length === 0) {
        throw new Error('At least one locale is required')
    }

    const localesByCode = {}
    const prefixes = new Set()
    let defaultLocale

    for (const locale of localeList) {
        if (!isRecord(locale) || typeof locale.code !== 'string' || !locale.code) {
            throw new Error('Each locale must define a code')
        }
        if (locales[locale.code] !== locale) {
            throw new Error(`Locale key must match locale code: ${locale.code}`)
        }
        if (localesByCode[locale.code]) {
            throw new Error(`Duplicate locale code: ${locale.code}`)
        }
        if (typeof locale.htmlLang !== 'string' || !locale.htmlLang) {
            throw new Error(`Locale ${locale.code} must define an htmlLang`)
        }
        if (typeof locale.prefix !== 'string' || !/^$|^\/[a-z0-9]+(?:-[a-z0-9]+)*$/.test(locale.prefix)) {
            throw new Error(`Malformed locale prefix: ${locale.prefix}`)
        }
        if (prefixes.has(locale.prefix)) {
            throw new Error(`Duplicate locale prefix: ${locale.prefix}`)
        }
        if (typeof locale.isDefault !== 'boolean') {
            throw new Error(`Locale ${locale.code} must declare whether it is the default`)
        }
        if (locale.isDefault) {
            if (defaultLocale) {
                throw new Error('Only one default locale is allowed')
            }
            if (locale.prefix !== '') {
                throw new Error('The default locale must not have a prefix')
            }
            defaultLocale = locale
        } else if (locale.prefix === '') {
            throw new Error(`Non-default locale ${locale.code} must have a prefix`)
        }

        localesByCode[locale.code] = locale
        prefixes.add(locale.prefix)
    }

    if (!defaultLocale || defaultLocale.code !== 'en') {
        throw new Error('English must be the default locale')
    }
    for (const localeCode of ['en', 'ko', 'pt-BR']) {
        if (!localesByCode[localeCode]) {
            throw new Error(`Required locale is missing: ${localeCode}`)
        }
    }

    if (!isRecord(routeManifest)) {
        throw new Error('Route manifest must be an object keyed by route ID')
    }
    for (const routeId of ROUTE_IDS) {
        if (!routeManifest[routeId]) {
            throw new Error(`Required route is missing: ${routeId}`)
        }
    }

    const publishedPaths = new Map()
    for (const [routeId, localizedRoutes] of Object.entries(routeManifest)) {
        if (!isRecord(localizedRoutes)) {
            throw new Error(`Route ${routeId} must define localized routes`)
        }
        if (!localizedRoutes.en) {
            throw new Error(`Route ${routeId} is missing an English route`)
        }

        for (const [localeCode, route] of Object.entries(localizedRoutes)) {
            const locale = localesByCode[localeCode]
            if (!locale) {
                throw new Error(`Route ${routeId} uses unsupported locale: ${localeCode}`)
            }
            if (!isRecord(route) || !isRoutePath(route.path)) {
                throw new Error(`Route ${routeId} has an invalid path for locale ${localeCode}`)
            }
            if (!ROUTE_STATUSES.has(route.status)) {
                throw new Error(`Route ${routeId} has unsupported status for locale ${localeCode}: ${route.status}`)
            }

            if (locale.isDefault) {
                if (route.status !== PUBLISHED_STATUS) {
                    throw new Error(`Default route ${routeId} must be published`)
                }
                if (
                    hasPathPrefix(route.path, `/${locale.code}`) ||
                    Object.values(localesByCode).some(
                        (otherLocale) => !otherLocale.isDefault && hasPathPrefix(route.path, otherLocale.prefix)
                    )
                ) {
                    throw new Error(`Default route ${routeId} must be unprefixed`)
                }
            } else if (!hasPathPrefix(route.path, locale.prefix)) {
                throw new Error(`Route ${routeId} must use the ${localeCode} prefix`)
            }

            if (route.status === PUBLISHED_STATUS) {
                const existingRoute = publishedPaths.get(route.path)
                if (existingRoute) {
                    throw new Error(
                        `Duplicate published path ${route.path} for ${routeId}/${localeCode} and ${existingRoute}`
                    )
                }
                publishedPaths.set(route.path, `${routeId}/${localeCode}`)
            }
        }
    }

    return true
}

module.exports = {
    LOCALES,
    ROUTE_IDS,
    ROUTE_MANIFEST,
    PUBLISHED_STATUS,
    PLANNED_STATUS,
    localeForPath,
    publishedLanguageAlternates,
    publishedRouteMetadata,
    validateLocaleManifest,
}

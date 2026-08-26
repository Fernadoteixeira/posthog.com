// Node executes this CommonJS test directly.
/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('node:assert/strict')
const test = require('node:test')

const {
    isBarePtBrHomepageLocation,
    searchLocalePolicy,
    shouldOfferEnglishSearchFallback,
} = require('./searchLocalePolicy')

const barePtBrHomepage = { pathname: '/pt-br', search: '', hash: '' }

test('scopes only the bare pt-BR homepage to Portuguese Algolia records', () => {
    assert.equal(isBarePtBrHomepageLocation(barePtBrHomepage), true)
    assert.deepEqual(searchLocalePolicy(barePtBrHomepage), {
        isPtBrHomepage: true,
        facetFilters: ['locale:pt-BR'],
        canOfferEnglishFallback: true,
    })

    for (const location of [
        { pathname: '/', search: '', hash: '' },
        { pathname: '/ko', search: '', hash: '' },
        { pathname: '/pt-br/foo', search: '', hash: '' },
        { pathname: '/pt-brasil', search: '', hash: '' },
        { pathname: '/pt-br', search: '?source=x', hash: '' },
        { pathname: '/pt-br', search: '', hash: '#section' },
    ]) {
        assert.deepEqual(searchLocalePolicy(location), {
            isPtBrHomepage: false,
            facetFilters: [],
            canOfferEnglishFallback: false,
        })
    }
})

test('offers an explicit English fallback only after a settled Portuguese zero-result search', () => {
    const portuguesePolicy = searchLocalePolicy(barePtBrHomepage)
    assert.equal(
        shouldOfferEnglishSearchFallback({
            query: 'session replay',
            isLoading: false,
            hasResults: false,
            policy: portuguesePolicy,
        }),
        true
    )

    for (const search of [
        { query: '', isLoading: false, hasResults: false },
        { query: 'session replay', isLoading: true, hasResults: false },
        { query: 'session replay', isLoading: false, hasResults: true },
    ]) {
        assert.equal(shouldOfferEnglishSearchFallback({ ...search, policy: portuguesePolicy }), false)
    }

    const englishFallbackPolicy = searchLocalePolicy(barePtBrHomepage, true)
    assert.deepEqual(englishFallbackPolicy.facetFilters, ['locale:en'])
    assert.equal(
        shouldOfferEnglishSearchFallback({
            query: 'session replay',
            isLoading: false,
            hasResults: false,
            policy: englishFallbackPolicy,
        }),
        false
    )
})

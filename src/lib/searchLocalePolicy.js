const PT_BR_LOCALE = 'pt-BR'
const EN_LOCALE = 'en'

// Reach Router exposes query strings and hashes separately. Desktop translation
// deliberately excludes those variants, so search uses the same strict gate.
const isBarePtBrHomepageLocation = ({ pathname, search, hash }) => pathname === '/pt-br' && search === '' && hash === ''

/**
 * Keeps search locale behavior explicit. English and Korean retain the
 * unfiltered behavior they had before locale records were introduced.
 */
const searchLocalePolicy = (location, useEnglishFallback = false) => {
    const isPtBrHomepage = isBarePtBrHomepageLocation(location)

    if (!isPtBrHomepage) {
        return {
            isPtBrHomepage: false,
            facetFilters: [],
            canOfferEnglishFallback: false,
        }
    }

    const locale = useEnglishFallback ? EN_LOCALE : PT_BR_LOCALE
    return {
        isPtBrHomepage: true,
        facetFilters: [`locale:${locale}`],
        canOfferEnglishFallback: !useEnglishFallback,
    }
}

const shouldOfferEnglishSearchFallback = ({ query, isLoading, hasResults, policy }) =>
    policy.canOfferEnglishFallback && query.trim().length > 0 && !isLoading && !hasResults

module.exports = {
    EN_LOCALE,
    PT_BR_LOCALE,
    isBarePtBrHomepageLocation,
    searchLocalePolicy,
    shouldOfferEnglishSearchFallback,
}

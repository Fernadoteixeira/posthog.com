import { isBarePtBrHomepageLocation } from '../../lib/searchLocalePolicy.js'

interface LocationParts {
    pathname: string
    search: string
    hash: string
}

export const shouldTranslateDesktopToPtBr = ({ pathname, search, hash }: LocationParts): boolean =>
    isBarePtBrHomepageLocation({ pathname, search, hash })

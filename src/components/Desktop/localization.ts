interface LocationParts {
    pathname: string
    search: string
    hash: string
}

export const shouldTranslateDesktopToPtBr = ({ pathname, search, hash }: LocationParts): boolean =>
    pathname === '/pt-br' && search === '' && hash === ''

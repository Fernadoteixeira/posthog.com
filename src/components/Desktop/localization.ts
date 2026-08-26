import { localeForPath } from '../../constants/locales.js'

interface LocationParts {
    pathname: string
    search?: string
    hash?: string
}

export const shouldTranslateDesktopToPtBr = ({ pathname }: LocationParts): boolean => {
    if (!pathname || typeof pathname !== 'string' || !pathname.startsWith('/')) {
        return false
    }
    return localeForPath(pathname).code === 'pt-BR'
}

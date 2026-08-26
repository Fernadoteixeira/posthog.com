import React from 'react'
import ProductReaderView from 'components/Products/ReaderViewProduct'
import { publishedRouteMetadata } from 'constants/locales'

export default function BrazilianPortugueseSessionReplay(): JSX.Element {
    const seo = publishedRouteMetadata('sessionReplay', 'pt-BR')

    return (
        <ProductReaderView
            productHandle="session_replay"
            seoOverrides={{
                title: 'PostHog – Gravação de Sessão e Reprodução de Telas',
                description:
                    'Veja exatamente como os usuários interagem com seu aplicativo, diagnostique erros e reproduza sessões completas com o Session Replay do PostHog.',
                ...seo,
            }}
        />
    )
}

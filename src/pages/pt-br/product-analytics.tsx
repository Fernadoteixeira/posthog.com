import React from 'react'
import ProductReaderView from 'components/Products/ReaderViewProduct'
import { publishedRouteMetadata } from 'constants/locales'

export default function BrazilianPortugueseProductAnalytics(): JSX.Element {
    const seo = publishedRouteMetadata('productAnalytics', 'pt-BR')

    return (
        <ProductReaderView
            productHandle="product_analytics"
            seoOverrides={{
                title: 'PostHog – Análise de Produto de ponta a ponta',
                description:
                    'Entenda seus usuários, rastreie eventos e analise funis, retenção e caminhos de navegação com a suíte completa de Product Analytics do PostHog.',
                ...seo,
            }}
        />
    )
}

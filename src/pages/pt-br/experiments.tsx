import React from 'react'
import ProductReaderView from 'components/Products/ReaderViewProduct'
import { publishedRouteMetadata } from 'constants/locales'

export default function BrazilianPortugueseExperiments(): JSX.Element {
    const seo = publishedRouteMetadata('experiments', 'pt-BR')

    return (
        <ProductReaderView
            productHandle="experiments"
            seoOverrides={{
                title: 'PostHog – Testes A/B e Experimentos de Produto',
                description:
                    'Execute experimentos de produto com significância estatística automática, variantes multivariadas e métricas secundárias integradas no PostHog.',
                ...seo,
            }}
        />
    )
}

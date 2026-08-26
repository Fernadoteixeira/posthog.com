import React from 'react'
import ProductReaderView from 'components/Products/ReaderViewProduct'
import { publishedRouteMetadata } from 'constants/locales'

export default function BrazilianPortugueseFeatureFlags(): JSX.Element {
    const seo = publishedRouteMetadata('featureFlags', 'pt-BR')

    return (
        <ProductReaderView
            productHandle="feature_flags"
            seoOverrides={{
                title: 'PostHog – Feature Flags e Lançamentos Controlados',
                description:
                    'Lance recursos com segurança, ative funcionalidades por segmentos de usuários e faça rollouts graduais com as Feature Flags do PostHog.',
                ...seo,
            }}
        />
    )
}

import React from 'react'
import { CallToAction } from 'components/CallToAction'
import SEO from 'components/seo'
import Home from 'components/Home/Test'
import { publishedRouteMetadata } from 'constants/locales'
import { translatePtBr } from './_translations'

const PortugueseHeroCta = (): JSX.Element => (
    <CallToAction to="https://app.posthog.com/signup" size="lg" state={{ newWindow: true, initialTab: 'signup' }}>
        Comece gratuitamente
    </CallToAction>
)

export default function BrazilianPortugueseHome(): JSX.Element {
    const seo = publishedRouteMetadata('home', 'pt-BR')

    return (
        <>
            <SEO
                title="PostHog – Coloque seu produto no modo autônomo"
                updateWindowTitle={false}
                description="O PostHog diagnostica problemas, corrige bugs e gera pull requests automaticamente — sem que você precise pedir."
                image="/images/og/default.png"
                {...seo}
            />
            <Home translate={translatePtBr} cta={<PortugueseHeroCta />} showCarousel={false} locale="pt-BR" />
        </>
    )
}

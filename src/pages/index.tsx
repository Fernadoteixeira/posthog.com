import React from 'react'
import SEO from 'components/seo'
import { publishedRouteMetadata } from 'constants/locales'
import Test from '../components/Home/Test'

export default function Home() {
    const seo = publishedRouteMetadata('home', 'en')

    return (
        <>
            <SEO
                title="PostHog – We make your product self-driving"
                updateWindowTitle={false}
                description="PostHog automatically diagnoses problems, fixes bugs, and generates pull requests – all without you having to prompt it."
                image="/images/og/default.png"
                {...seo}
            />
            <Test />
        </>
    )
}

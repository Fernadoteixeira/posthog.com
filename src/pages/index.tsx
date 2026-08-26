import React from 'react'
import SEO from 'components/seo'
import { LOCALES, publishedLanguageAlternates } from 'constants/locales'
import Test from '../components/Home/Test'

export default function Home() {
    return (
        <>
            <SEO
                title="PostHog – We make your product self-driving"
                updateWindowTitle={false}
                description="PostHog automatically diagnoses problems, fixes bugs, and generates pull requests – all without you having to prompt it."
                image="/images/og/default.png"
                lang={LOCALES.en.htmlLang}
                languageAlternates={publishedLanguageAlternates('home')}
            />
            <Test />
        </>
    )
}

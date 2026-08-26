export interface CookieBannerContent {
    title: string
    paragraph1: string
    paragraph2: string
    tooltipTrigger?: string
    tooltipText?: string
    actionLabel: string
    imageAlt?: string
    imageSrc?: string
}

export const getCookieBannerContent = (isPtBr: boolean): CookieBannerContent => {
    if (isPtBr) {
        return {
            title: 'Aviso legal de cookies (LGPD)',
            paragraph1: 'O PostHog.com não utiliza cookies de terceiros, apenas um único cookie primário.',
            paragraph2: 'Nenhum dado é enviado a terceiros. Tratamento de dados em conformidade com a LGPD.',
            actionLabel: 'Fechar',
        }
    }

    return {
        title: 'Legally-required cookie banner',
        paragraph1: "PostHog.com doesn't use third-party cookies, only a single in-house cookie.",
        paragraph2: 'No data is sent to a third party.',
        tooltipTrigger: 'Ursula von der Leyen',
        tooltipText:
            'Ursula von der Leyen is the President of the European Commission – NOT to be confused with Hillary Clinton.',
        actionLabel: 'Close',
        imageAlt: 'Ursula von der Leyen, President of the European Commission',
        imageSrc: 'https://res.cloudinary.com/dmukukwp6/image/upload/posthog.com/src/components/EU/images/ursula.png',
    }
}

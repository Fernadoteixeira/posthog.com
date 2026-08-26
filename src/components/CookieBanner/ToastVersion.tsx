import React, { useEffect, useState } from 'react'
import { useLocation } from '@reach/router'
import { useToast } from '../../context/Toast'
import usePostHog from '../../hooks/usePostHog'
import CloudinaryImage from 'components/CloudinaryImage'
import Tooltip from 'components/RadixUI/Tooltip'
import { IconX } from '@posthog/icons'
import { shouldTranslateDesktopToPtBr } from 'components/Desktop/localization'
import { getCookieBannerContent } from './cookieBannerData'

export default function CookieBannerToast(): null {
    const location = useLocation()
    const { addToast } = useToast()
    const posthog = usePostHog()
    const [hasShownBanner, setHasShownBanner] = useState(false)
    const isPtBr = shouldTranslateDesktopToPtBr(location)
    const content = getCookieBannerContent(isPtBr)

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent')

        if (!consent && !hasShownBanner) {
            setHasShownBanner(true)
            addToast({
                title: content.title,
                description: (
                    <>
                        <p className="mt-1">{content.paragraph1}</p>
                        <p className="pr-28">
                            {content.paragraph2}
                            {content.tooltipTrigger && content.tooltipText && (
                                <>
                                    {' '}
                                    (
                                    <Tooltip
                                        trigger={
                                            <span className="border-b border-primary border-dashed">
                                                {content.tooltipTrigger}
                                            </span>
                                        }
                                        delay={0}
                                    >
                                        <div className="max-w-64">
                                            <span className="text-sm">{content.tooltipText}</span>
                                        </div>
                                    </Tooltip>{' '}
                                    would be so proud.)
                                </>
                            )}
                        </p>
                    </>
                ),
                image: content.imageSrc ? (
                    <div className="absolute bottom-0 -right-4 leading-[0]">
                        <CloudinaryImage alt={content.imageAlt || ''} width={180} src={content.imageSrc} />
                    </div>
                ) : undefined,
                onAction: () => {
                    localStorage.setItem('cookie_consent', 'acknowledged')
                    posthog?.set_config({ persistence: 'localStorage+cookie' })
                },
                actionLabel: content.actionLabel,
                actionAsIcon: <IconX className="size-4" />,
                verticalAlign: 'items-start',
                duration: 999999999,
            })
        } else if (consent) {
            // If acknowledgement was already received, ensure PostHog is configured correctly
            posthog?.set_config({ persistence: 'localStorage+cookie' })
        }
    }, [addToast, posthog, hasShownBanner, content])

    return null
}

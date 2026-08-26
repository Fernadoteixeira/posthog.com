import React from 'react'
import Link from 'components/Link'
import Markdown from 'components/Markdown'
import Pricing from 'components/Home/New/Pricing'
import { ImageMoney } from 'components/Home/Decorations'

type TranslateFn = (value: string) => string
const identity: TranslateFn = (value) => value

export const PricingSection = ({
    translate = identity,
    locale = 'en',
}: {
    translate?: TranslateFn
    locale?: string
}) => (
    <div id="pricing">
        <h2>{translate('Usage-based pricing')}</h2>

        <ImageMoney />

        <Markdown>
            {translate(`Our whole philosophy is that you shouldn't have to worry about pricing.

All our paid products are pay-per-use with generous monthly free tiers. In fact, 98% of our customers use PostHog for free.

We aim to match the cheapest option at scale – PostHog should be a no-brainer. You never have to "jump on a quick call" with sales.

Here are some examples of how we charge for most popular products:`)}
        </Markdown>

        <Pricing translate={translate} locale={locale} />

        <Link to="/pricing" state={{ newWindow: true }}>
            {translate('Explore pricing')}
        </Link>
    </div>
)

export default PricingSection

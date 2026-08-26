import React from 'react'
import ShamelessCTA from 'components/Home/ShamelessCTA'

type TranslateFn = (value: string) => string
const identity: TranslateFn = (value) => value

export const ShamelessCTASection = ({ translate = identity }: { translate?: TranslateFn }) => (
    <div id="shameless-cta" className="overflow-x-hidden">
        <h2>{translate('Shameless CTA')}</h2>
        <ShamelessCTA translate={translate} />
    </div>
)

export default ShamelessCTASection

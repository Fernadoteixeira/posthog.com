import React from 'react'
import Link from 'components/Link'
import Markdown from 'components/Markdown'
import { ImageDW, TooltipDW } from 'components/Home/Decorations'

type TranslateFn = (value: string) => string
const identity: TranslateFn = (value) => value

export const DataStackSection = ({ translate = identity }: { translate?: TranslateFn }) => (
    <div id="customer-infrastructure">
        <h2>
            {translate('All your data,')}{' '}
            <span className="bg-blue/10 dark:bg-blue/20 text-blue rounded-md px-1">
                {translate('working together')}
            </span>
        </h2>

        <div className="@lg:float-right text-sm @lg:max-w-xs bg-accent p-4 rounded-sm @lg:ml-6 @lg:mb-2 relative overflow-hidden">
            <p className="my-0 [&_p]:my-0">
                <strong>
                    {translate('Built-in, the context warehouse')}{' '}
                    <span className="bg-blue/10 dark:bg-blue/20 text-blue rounded-md px-1">{translate('ships')}</span>{' '}
                    {translate('with:')}
                </strong>
            </p>
            <span className="[&_ul]:mb-0">
                <ul>
                    <li>
                        {translate('A data warehouse')} <TooltipDW />
                    </li>
                    <li>{translate('120+ sources/destinations')}</li>
                    <li>{translate('SQL editor + BI + data viz')}</li>
                    <li>{translate('User activity feed (CDP-lite)')}</li>
                    <li>API, webhooks</li>
                </ul>
            </span>
            <ImageDW />
        </div>

        <Markdown className="[&_li]:marker:text-primary/50">
            {translate(`Whether you're analyzing customer usage or directing AI, you should be operating with the *full* context.

Combine everything in PostHog's context warehouse so that you, your agents, and your dashboard can query it directly. That includes:

- Data from 120+ external sources like Stripe, Postgres, and HubSpot
- Insights from every other PostHog tool like Session Replays and Experiments

The data your agents need to make good decisions is already here. Ready to turn "tell me what happened" into "here's what to fix next."`)}
        </Markdown>

        <Link to="/context-warehouse/sources" state={{ newWindow: true }}>
            {translate('Connect your first data source')}
        </Link>
    </div>
)

export default DataStackSection

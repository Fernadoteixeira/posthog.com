import React from 'react'
import { IconFilter, IconSearch, IconSparkles } from '@posthog/icons'
import KeyboardShortcut from 'components/KeyboardShortcut'
import type { SpotlightAction } from './actions'
import { configForType } from './categories'
import type { SuggestionItem } from './types'
import SpotlightRow, { spotlightOptionId } from './SpotlightRow'

type SuggestionListProps = {
    items: SuggestionItem[]
    query: string
    selectedIndex: number
    itemRefs: React.MutableRefObject<(HTMLLIElement | null)[]>
    onSelectIndex: (index: number) => void
    onRunAction: (action: SpotlightAction) => void
    onSearchEnglish: () => void
    onAskAI: () => void
    onApplyFilter: (type: string) => void
}

const hintClass = 'ml-auto hidden shrink-0 text-xs text-secondary @md:block'
const alwaysVisibleHintClass = 'ml-auto shrink-0 text-xs text-secondary'

const SuggestionHint = ({
    action,
    preposition = 'to',
    alwaysVisible = false,
}: {
    action: string
    preposition?: string
    alwaysVisible?: boolean
}): JSX.Element => (
    <span className={alwaysVisible ? alwaysVisibleHintClass : hintClass}>
        <KeyboardShortcut text="↵" size="xs" /> {preposition} {action}
    </span>
)

export default function SuggestionList({
    items,
    query,
    selectedIndex,
    itemRefs,
    onSelectIndex,
    onRunAction,
    onSearchEnglish,
    onAskAI,
    onApplyFilter,
}: SuggestionListProps): JSX.Element | null {
    if (items.length === 0) return null

    return (
        <ul role="presentation" className="p-0 m-0 list-none">
            {items.map((item, index) => {
                const rowProps = {
                    id: spotlightOptionId('result', index),
                    ref: (element: HTMLLIElement | null) => (itemRefs.current[index] = element),
                    selected: selectedIndex === index,
                    onActive: () => onSelectIndex(index),
                }

                if (item.kind === 'action') {
                    return (
                        <SpotlightRow
                            key={item.action.id}
                            {...rowProps}
                            icon={item.action.icon}
                            onSelect={() => onRunAction(item.action)}
                            trailing={<SuggestionHint action="run" />}
                        >
                            <p className="m-0 min-w-0 truncate text-[15px] text-primary">{item.action.label}</p>
                        </SpotlightRow>
                    )
                }

                if (item.kind === 'ask-ai') {
                    return (
                        <SpotlightRow
                            key="ask-ai"
                            {...rowProps}
                            icon={<IconSparkles />}
                            onSelect={onAskAI}
                            trailing={<SuggestionHint action="ask" />}
                        >
                            <p className="m-0 min-w-0 truncate text-[15px] text-primary">
                                Ask AI: <span className="font-semibold">&ldquo;{query}&rdquo;</span>
                            </p>
                        </SpotlightRow>
                    )
                }

                if (item.kind === 'english-fallback') {
                    return (
                        <SpotlightRow
                            key="english-fallback"
                            {...rowProps}
                            icon={<IconSearch />}
                            onSelect={onSearchEnglish}
                            trailing={<SuggestionHint action="pesquisar" preposition="para" alwaysVisible />}
                        >
                            <p className="m-0 min-w-0 flex-1 text-[15px] text-primary">
                                Nenhum resultado em português.{' '}
                                <span className="whitespace-nowrap font-semibold">Pesquisar em inglês</span>
                            </p>
                        </SpotlightRow>
                    )
                }

                const config = configForType(item.type)
                return (
                    <SpotlightRow
                        key="filter"
                        {...rowProps}
                        icon={<IconFilter />}
                        onSelect={() => onApplyFilter(item.type)}
                        trailing={<SuggestionHint action="filter" />}
                    >
                        <p className="m-0 flex items-center gap-1.5 text-[15px] text-primary">
                            Filter by category:
                            <span className="flex items-center gap-1 rounded-md border border-primary bg-accent px-1.5 py-0.5 text-sm font-semibold text-secondary [&_svg]:size-3.5">
                                {config.icon}
                                {config.label}
                            </span>
                        </p>
                    </SpotlightRow>
                )
            })}
        </ul>
    )
}

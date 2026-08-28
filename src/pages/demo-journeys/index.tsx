import React, { useMemo, useState } from 'react'
import { navigate } from 'gatsby'
import SEO from 'components/seo'
import HeaderBar from 'components/OSChrome/HeaderBar'

// Carregamento estático dos catálogos de jornadas e atores
import pageViewsData from '../../../templates/demo-page-view-journeys-v1.json'
import actorsData from '../../../templates/demo-users-actors-v1.json'
import negativePathsData from '../../../templates/demo-journeys-negative-paths-v1.json'

interface PageViewItem {
    id: string
    route: string
    title: string
    wave: string
    surface: string
    app_template: string
    primary_actor: string
    supporting_actors?: string[]
    jtbd: string
    expected_outcomes: string[]
    identified_gaps?: string[]
    expected_screenshots: {
        light_wide: string
        light_narrow: string
        dark_wide: string
        dark_narrow: string
    }
    expected_motion: string
}

interface ActorItem {
    id: string
    display_name: string
    role: string
    kind: string
}

interface NegativePathItem {
    id: string
    name: string
    trigger: string
    target_surface: string
    expected_http_status: number
    expected_system_behavior: string
    mitigation_or_safety_rule: string
}

export default function DemoJourneysPage(): JSX.Element {
    const [selectedWave, setSelectedWave] = useState<string>('ALL')
    const [selectedActor, setSelectedActor] = useState<string>('ALL')
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [activeTab, setActiveTab] = useState<'journeys' | 'actors' | 'negative-paths'>('journeys')

    const waves = pageViewsData.waves || []
    const allPageViews = (pageViewsData.page_views || []) as PageViewItem[]
    const allActors = (actorsData.actors || []) as ActorItem[]
    const allNegativePaths = (negativePathsData.negative_paths || []) as NegativePathItem[]

    // Filtragem reativa das jornadas
    const filteredPageViews = useMemo(() => {
        return allPageViews.filter((pv) => {
            const matchesWave = selectedWave === 'ALL' || pv.wave === selectedWave
            const matchesActor =
                selectedActor === 'ALL' ||
                pv.primary_actor === selectedActor ||
                (pv.supporting_actors && pv.supporting_actors.includes(selectedActor))
            const matchesSearch =
                searchQuery === '' ||
                pv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pv.route.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pv.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pv.surface.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pv.jtbd.toLowerCase().includes(searchQuery.toLowerCase())

            return matchesWave && matchesActor && matchesSearch
        })
    }, [allPageViews, selectedWave, selectedActor, searchQuery])

    const handleOpenWindow = (route: string) => {
        navigate(route, { state: { newWindow: true } })
    }

    return (
        <div className="flex flex-col h-full bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark font-sans @container">
            <SEO
                title="Jornadas Demo & Cobertura 360° — PostHog"
                description="Catálogo interativo das jornadas demo, atores de serviço e personas com cobertura Canonical 360° no Desktop OS do PostHog."
            />

            <HeaderBar
                title="PostHog 360° Demo Journeys Explorer"
                menuOptions={[
                    {
                        label: 'Arquivo',
                        children: [
                            {
                                label: 'Exportar Fixtures',
                                onClick: () =>
                                    alert('Fixtures disponíveis em templates/fixtures/demo-fixtures-bundle.json'),
                            },
                            { label: 'Fechar', onClick: () => window.history.back() },
                        ],
                    },
                    {
                        label: 'Visualização',
                        children: [
                            { label: 'Todas as Ondas', onClick: () => setSelectedWave('ALL') },
                            {
                                label: 'Resetar Filtros',
                                onClick: () => {
                                    setSelectedWave('ALL')
                                    setSelectedActor('ALL')
                                    setSearchQuery('')
                                },
                            },
                        ],
                    },
                ]}
            />

            {/* Painel de Controle e Métricas Superiores */}
            <div className="border-b border-border-light dark:border-border-dark p-4 bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-md">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-text-light dark:text-text-dark">
                            PostHog Canonical 360° Journeys Hub
                        </h1>
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-0.5">
                            Verificação end-to-end exaustiva cobrindo 15 personas, 65 Page Views e 8 caminhos
                            adversariais.
                        </p>
                    </div>

                    {/* Badges de Cobertura */}
                    <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="px-2.5 py-1 rounded bg-accent-light/10 dark:bg-accent-dark/20 text-accent-light dark:text-accent-dark border border-accent-light/30">
                            65 Page Views
                        </span>
                        <span className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                            15 Atores
                        </span>
                        <span className="px-2.5 py-1 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30">
                            9 Ondas
                        </span>
                        <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                            260 Estados 4-Grid
                        </span>
                    </div>
                </div>

                {/* Abas Principais */}
                <div className="flex items-center gap-2 border-b border-border-light dark:border-border-dark mb-3 pb-2 text-sm font-medium">
                    <button
                        onClick={() => setActiveTab('journeys')}
                        className={`px-3 py-1 rounded-md transition-colors ${
                            activeTab === 'journeys'
                                ? 'bg-accent-light dark:bg-accent-dark text-white'
                                : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-light'
                        }`}
                    >
                        Jornadas & Page Views ({filteredPageViews.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('actors')}
                        className={`px-3 py-1 rounded-md transition-colors ${
                            activeTab === 'actors'
                                ? 'bg-accent-light dark:bg-accent-dark text-white'
                                : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-light'
                        }`}
                    >
                        Personas & Atores ({allActors.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('negative-paths')}
                        className={`px-3 py-1 rounded-md transition-colors ${
                            activeTab === 'negative-paths'
                                ? 'bg-accent-light dark:bg-accent-dark text-white'
                                : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-light'
                        }`}
                    >
                        Caminhos Negativos & Segurança ({allNegativePaths.length})
                    </button>
                </div>

                {/* Filtros para Jornadas */}
                {activeTab === 'journeys' && (
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                        <input
                            type="text"
                            placeholder="Buscar por rota, título, JTBD..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="px-3 py-1.5 rounded border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark text-xs w-64 focus:outline-none focus:ring-1 focus:ring-accent-light"
                        />

                        <select
                            value={selectedWave}
                            onChange={(e) => setSelectedWave(e.target.value)}
                            className="px-2.5 py-1.5 rounded border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark text-xs focus:outline-none"
                        >
                            <option value="ALL">Todas as Ondas (W0..W8)</option>
                            {waves.map((w) => (
                                <option key={w.id} value={w.id}>
                                    {w.id} — {w.name}
                                </option>
                            ))}
                        </select>

                        <select
                            value={selectedActor}
                            onChange={(e) => setSelectedActor(e.target.value)}
                            className="px-2.5 py-1.5 rounded border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark text-xs focus:outline-none"
                        >
                            <option value="ALL">Todos os Atores (15)</option>
                            {allActors.map((a) => (
                                <option key={a.id} value={a.id}>
                                    {a.display_name} ({a.role})
                                </option>
                            ))}
                        </select>

                        {(selectedWave !== 'ALL' || selectedActor !== 'ALL' || searchQuery !== '') && (
                            <button
                                onClick={() => {
                                    setSelectedWave('ALL')
                                    setSelectedActor('ALL')
                                    setSearchQuery('')
                                }}
                                className="text-accent-light dark:text-accent-dark hover:underline text-xs"
                            >
                                Limpar filtros
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/* Conteúdo Principal Scrollável */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
                {activeTab === 'journeys' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredPageViews.map((pv) => (
                            <div
                                key={pv.id}
                                className="flex flex-col justify-between p-4 rounded-lg border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark/60 hover:border-accent-light/50 dark:hover:border-accent-dark/50 transition-all shadow-sm group"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-muted/20 text-text-secondary-light dark:text-text-secondary-dark border border-border-light dark:border-border-dark">
                                            {pv.id} • {pv.wave.split('-')[0]}
                                        </span>
                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                            {pv.app_template}
                                        </span>
                                    </div>

                                    <h2 className="text-sm font-semibold text-text-light dark:text-text-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors mb-1">
                                        {pv.title}
                                    </h2>

                                    <code className="text-[11px] text-accent-light dark:text-accent-dark font-mono block mb-2">
                                        {pv.route}
                                    </code>

                                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark line-clamp-3 mb-3 leading-relaxed">
                                        <strong className="text-text-light dark:text-text-dark font-medium">
                                            JTBD:
                                        </strong>{' '}
                                        {pv.jtbd}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-border-light dark:border-border-dark flex items-center justify-between gap-2">
                                    <span className="text-[11px] text-text-secondary-light dark:text-text-secondary-dark truncate">
                                        Ator:{' '}
                                        <strong className="text-text-light dark:text-text-dark">
                                            {pv.primary_actor}
                                        </strong>
                                    </span>
                                    <button
                                        onClick={() => handleOpenWindow(pv.route)}
                                        className="px-2.5 py-1 text-xs font-medium rounded bg-accent-light/10 dark:bg-accent-dark/20 text-accent-light dark:text-accent-dark hover:bg-accent-light hover:text-white dark:hover:bg-accent-dark transition-colors"
                                    >
                                        Abrir Janela ↗
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'actors' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {allActors.map((actor) => (
                            <div
                                key={actor.id}
                                className="p-4 rounded-lg border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark/60 shadow-sm flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-muted/20 text-text-secondary-light dark:text-text-secondary-dark">
                                            {actor.kind.toUpperCase()}
                                        </span>
                                        <span className="text-xs font-semibold text-accent-light dark:text-accent-dark">
                                            {actor.role}
                                        </span>
                                    </div>
                                    <h2 className="text-base font-bold text-text-light dark:text-text-dark mb-1">
                                        {actor.display_name}
                                    </h2>
                                    <code className="text-xs text-text-secondary-light dark:text-text-secondary-dark font-mono block mb-2">
                                        {actor.id}
                                    </code>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'negative-paths' && (
                    <div className="space-y-3">
                        {allNegativePaths.map((np) => (
                            <div
                                key={np.id}
                                className="p-4 rounded-lg border border-red-500/20 bg-red-500/5 dark:bg-red-500/10 flex flex-col md:flex-row md:items-center justify-between gap-4"
                            >
                                <div className="space-y-1 flex-1">
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-red-500/20 text-red-600 dark:text-red-400 font-bold">
                                            {np.id} • HTTP {np.expected_http_status}
                                        </span>
                                        <h2 className="text-sm font-bold text-text-light dark:text-text-dark">
                                            {np.name}
                                        </h2>
                                    </div>
                                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                                        <strong>Gatilho:</strong> {np.trigger}
                                    </p>
                                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                                        <strong>Mitigação:</strong> {np.mitigation_or_safety_rule}
                                    </p>
                                </div>
                                <span className="text-xs font-mono px-3 py-1 rounded bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark self-start md:self-center">
                                    Superfície: {np.target_surface}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

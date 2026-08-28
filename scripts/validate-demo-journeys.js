/**
 * Script de Validação e Integridade Canônica 360° — Jornadas Demo do PostHog
 *
 * Execução: node scripts/validate-demo-journeys.js
 */

/* eslint-disable */

const fs = require('fs')
const path = require('path')

const ROOT_DIR = path.resolve(__dirname, '..')

const FILES = {
    actorsJson: path.join(ROOT_DIR, 'templates', 'demo-users-actors-v1.json'),
    pageViewsJson: path.join(ROOT_DIR, 'templates', 'demo-page-view-journeys-v1.json'),
    captureContractJson: path.join(ROOT_DIR, 'templates', 'demo-journey-capture-contract-v1.json'),
    actorsMd: path.join(ROOT_DIR, 'references', 'demo-users-actors-v1.md'),
    pageViewsMd: path.join(ROOT_DIR, 'references', 'demo-page-view-journeys-v1.md'),
    dorDodMd: path.join(ROOT_DIR, 'references', 'demo-journeys-dor-dod-v1.md'),
    coverageMmd: path.join(ROOT_DIR, 'references', 'demo-page-view-coverage-static.mmd'),
}

let errors = []
let warnings = []

console.log('======================================================================')
console.log('    VALIDAÇÃO CANONICAL 360° — JORNADAS DEMO POSTHOG (posthog.com)')
console.log('======================================================================\n')

// 1. Validar existência dos arquivos
for (const [key, filePath] of Object.entries(FILES)) {
    if (!fs.existsSync(filePath)) {
        errors.push(`[ERRO] Arquivo obrigatório não encontrado: ${path.relative(ROOT_DIR, filePath)}`)
    } else {
        const stats = fs.statSync(filePath)
        if (stats.size === 0) {
            errors.push(`[ERRO] Arquivo vazio encontrado: ${path.relative(ROOT_DIR, filePath)}`)
        } else {
            console.log(
                `✓ Arquivo verificado (${(stats.size / 1024).toFixed(1)} KB): ${path.relative(ROOT_DIR, filePath)}`
            )
        }
    }
}

if (errors.length > 0) {
    console.error('\nFalha na verificação estrutural inicial:')
    errors.forEach((err) => console.error(err))
    process.exit(1)
}

// 2. Validar JSON de Atores
let actorsData
try {
    actorsData = JSON.parse(fs.readFileSync(FILES.actorsJson, 'utf-8'))
    if (!actorsData.actors || !Array.isArray(actorsData.actors)) {
        errors.push(`[ERRO] 'actors' não é um array válido em ${FILES.actorsJson}`)
    } else {
        console.log(`\n✓ Catálogo de Atores: ${actorsData.actors.length} atores cadastrados.`)
    }
} catch (e) {
    errors.push(`[ERRO] Falha ao processar JSON de atores: ${e.message}`)
}

const actorIds = new Set()
if (actorsData && actorsData.actors) {
    actorsData.actors.forEach((actor, index) => {
        const prefix = `Ator #${index + 1} (${actor.id || 'sem ID'})`
        if (!actor.id) errors.push(`[ERRO] ${prefix}: campo 'id' ausente.`)
        if (actorIds.has(actor.id)) errors.push(`[ERRO] ${prefix}: 'id' duplicado '${actor.id}'.`)
        actorIds.add(actor.id)

        if (!['human', 'service'].includes(actor.kind)) {
            errors.push(`[ERRO] ${prefix}: campo 'kind' inválido ('${actor.kind}'). Esperado 'human' ou 'service'.`)
        }
        if (!actor.display_name) errors.push(`[ERRO] ${prefix}: campo 'display_name' ausente.`)
        if (!actor.role) errors.push(`[ERRO] ${prefix}: campo 'role' ausente.`)
        if (!actor.scope) errors.push(`[ERRO] ${prefix}: campo 'scope' ausente.`)
        if (!actor.jtbd) errors.push(`[ERRO] ${prefix}: campo 'jtbd' ausente.`)
        if (!Array.isArray(actor.allowed_actions) || actor.allowed_actions.length === 0) {
            errors.push(`[ERRO] ${prefix}: 'allowed_actions' vazio ou inválido.`)
        }
        if (!Array.isArray(actor.forbidden_actions) || actor.forbidden_actions.length === 0) {
            errors.push(`[ERRO] ${prefix}: 'forbidden_actions' vazio ou inválido.`)
        }
        if (!Array.isArray(actor.required_inputs) || actor.required_inputs.length === 0) {
            errors.push(`[ERRO] ${prefix}: 'required_inputs' vazio ou inválido.`)
        }
        if (!Array.isArray(actor.expected_outputs) || actor.expected_outputs.length === 0) {
            errors.push(`[ERRO] ${prefix}: 'expected_outputs' vazio ou inválido.`)
        }
    })
}

// 3. Validar JSON de Page Views
let pageViewsData
try {
    pageViewsData = JSON.parse(fs.readFileSync(FILES.pageViewsJson, 'utf-8'))
    if (!pageViewsData.page_views || !Array.isArray(pageViewsData.page_views)) {
        errors.push(`[ERRO] 'page_views' não é um array válido em ${FILES.pageViewsJson}`)
    } else {
        console.log(`✓ Catálogo de Page Views: ${pageViewsData.page_views.length} page views cadastradas.`)
    }
} catch (e) {
    errors.push(`[ERRO] Falha ao processar JSON de page views: ${e.message}`)
}

const pageViewIds = new Set()
const pageViewRoutes = new Set()

if (pageViewsData && pageViewsData.page_views) {
    pageViewsData.page_views.forEach((pv, index) => {
        const prefix = `PageView #${index + 1} (${pv.id || 'sem ID'})`

        if (!pv.id) errors.push(`[ERRO] ${prefix}: campo 'id' ausente.`)
        if (pageViewIds.has(pv.id)) errors.push(`[ERRO] ${prefix}: 'id' duplicado '${pv.id}'.`)
        pageViewIds.add(pv.id)

        if (!pv.route) errors.push(`[ERRO] ${prefix}: campo 'route' ausente.`)
        if (pageViewRoutes.has(pv.route))
            warnings.push(`[AVISO] ${prefix}: rota '${pv.route}' mapeada mais de uma vez.`)
        pageViewRoutes.add(pv.route)

        if (!pv.title) errors.push(`[ERRO] ${prefix}: campo 'title' ausente.`)
        if (!pv.wave) errors.push(`[ERRO] ${prefix}: campo 'wave' ausente.`)
        if (!pv.surface) errors.push(`[ERRO] ${prefix}: campo 'surface' ausente.`)
        if (!pv.app_template) errors.push(`[ERRO] ${prefix}: campo 'app_template' ausente.`)

        // Validação de Atores
        if (!pv.primary_actor) {
            errors.push(`[ERRO] ${prefix}: campo 'primary_actor' ausente.`)
        } else if (!actorIds.has(pv.primary_actor)) {
            errors.push(`[ERRO] ${prefix}: 'primary_actor' '${pv.primary_actor}' não existe no catálogo de atores!`)
        }

        if (pv.supporting_actors && Array.isArray(pv.supporting_actors)) {
            pv.supporting_actors.forEach((suppActor) => {
                if (!actorIds.has(suppActor)) {
                    errors.push(`[ERRO] ${prefix}: 'supporting_actor' '${suppActor}' não existe no catálogo de atores!`)
                }
            })
        }

        // Validação de JTBD
        if (!pv.jtbd || !pv.jtbd.startsWith('WHEN')) {
            errors.push(
                `[ERRO] ${prefix}: 'jtbd' não segue o padrão canônico 'WHEN ... I WANT TO ... SO I CAN ... WITHOUT ...'`
            )
        }

        if (!Array.isArray(pv.inputs) || pv.inputs.length === 0)
            errors.push(`[ERRO] ${prefix}: 'inputs' vazio ou inválido.`)
        if (!Array.isArray(pv.outputs) || pv.outputs.length === 0)
            errors.push(`[ERRO] ${prefix}: 'outputs' vazio ou inválido.`)
        if (!pv.expected_outcome) errors.push(`[ERRO] ${prefix}: 'expected_outcome' ausente.`)
        if (!Array.isArray(pv.gaps)) errors.push(`[ERRO] ${prefix}: 'gaps' ausente ou não é array.`)

        // Validação do Grid Visual 4-State
        if (!pv.expected_screenshots) {
            errors.push(`[ERRO] ${prefix}: 'expected_screenshots' ausente.`)
        } else {
            const requiredStates = ['light_wide', 'light_narrow', 'dark_wide', 'dark_narrow']
            for (const state of requiredStates) {
                if (!pv.expected_screenshots[state]) {
                    errors.push(`[ERRO] ${prefix}: screenshot de estado '${state}' ausente no grid 4-state.`)
                }
            }
        }

        if (!pv.expected_motion) errors.push(`[ERRO] ${prefix}: campo 'expected_motion' ausente.`)
        if (!pv.execution_status) errors.push(`[ERRO] ${prefix}: campo 'execution_status' ausente.`)
    })
}

// 4. Validar Contrato de Captura
try {
    const contractData = JSON.parse(fs.readFileSync(FILES.captureContractJson, 'utf-8'))
    if (!contractData.visual_specifications || !contractData.visual_specifications.viewports) {
        errors.push(`[ERRO] 'visual_specifications.viewports' ausente em ${FILES.captureContractJson}`)
    } else {
        console.log(`✓ Contrato de Captura Visual verificado com sucesso.`)
    }
} catch (e) {
    errors.push(`[ERRO] Falha ao processar contrato de captura: ${e.message}`)
}

// Relatório Final
console.log('\n----------------------------------------------------------------------')
console.log('                        RELATÓRIO DE VALIDAÇÃO')
console.log('----------------------------------------------------------------------')
console.log(`Total de Atores Verificados:     ${actorIds.size}`)
console.log(`Total de Page Views Verificadas: ${pageViewIds.size}`)
console.log(`Total de Avisos:                 ${warnings.length}`)
console.log(`Total de Erros:                  ${errors.length}`)

if (warnings.length > 0) {
    console.log('\nAvisos:')
    warnings.forEach((w) => console.log(` - ${w}`))
}

if (errors.length > 0) {
    console.error('\nErros encontrados na validação:')
    errors.forEach((err) => console.error(` - ${err}`))
    console.log('\n❌ STATUS: FALHA NA VALIDAÇÃO.')
    process.exit(1)
} else {
    console.log('\n✅ STATUS: SUCESSO ABSOLUTO — Todos os contratos e catálogos são 100% íntegros e consistentes.')
    process.exit(0)
}

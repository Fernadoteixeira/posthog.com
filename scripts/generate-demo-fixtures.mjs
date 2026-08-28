/**
 * Gerador Determinístico de Fixtures Sintéticas — PostHog Demo Journeys
 *
 * Gera fixtures isoladas no namespace demo-ph- sem dados sensíveis.
 *
 * Execução: node scripts/generate-demo-fixtures.mjs
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

const actorsPath = path.join(rootDir, 'templates', 'demo-users-actors-v1.json')
const outputDir = path.join(rootDir, 'templates', 'fixtures')
const outputFile = path.join(outputDir, 'demo-fixtures-bundle.json')

function generateFixtures() {
    console.log('Gerando fixtures sintéticas para o ambiente demo do PostHog...')

    if (!fs.existsSync(actorsPath)) {
        throw new Error(`Catálogo de atores não encontrado em: ${actorsPath}`)
    }

    const actorsData = JSON.parse(fs.readFileSync(actorsPath, 'utf-8'))
    const actors = actorsData.actors || []

    const fixtures = {
        generated_at_utc: new Date().toISOString(),
        namespace: 'demo-ph-',
        organization: {
            id: 'demo-ph-org-001',
            name: 'Hedgehog Corp (Demo)',
            plan: 'enterprise',
            enforce_2fa: true,
        },
        projects: [
            {
                id: 'demo-ph-proj-001',
                name: 'E-commerce Web App',
                api_key: '[REDACTED_PROJECT_API_KEY_SYNTHETIC]',
                timezone: 'UTC',
            },
            {
                id: 'demo-ph-proj-002',
                name: 'Mobile App (iOS/Android)',
                api_key: '[REDACTED_PROJECT_API_KEY_SYNTHETIC]',
                timezone: 'UTC',
            },
        ],
        users: actors
            .filter((a) => a.kind === 'human')
            .map((actor, idx) => ({
                actor_id: actor.id,
                email: `${actor.id}@demo.posthog.internal`,
                name: actor.display_name,
                role: actor.role,
                distinct_id: `demo-ph-user-${String(idx + 1).padStart(3, '0')}`,
            })),
        feature_flags: [
            {
                key: 'demo-ph-flag-instant-checkout',
                name: 'Instant Checkout Flow',
                rollout_percentage: 50,
                active: true,
                variants: [
                    { key: 'control', rollout_percentage: 50 },
                    { key: 'one-click', rollout_percentage: 50 },
                ],
            },
            {
                key: 'demo-ph-flag-ai-assistant',
                name: 'In-app AI Assistant',
                rollout_percentage: 100,
                active: true,
            },
        ],
        sample_events: [
            {
                event: '$pageview',
                distinct_id: 'demo-ph-user-001',
                properties: {
                    $current_url: 'http://localhost:8001/',
                    $browser: 'Chrome',
                    $os: 'Windows',
                },
                timestamp: new Date(Date.now() - 3600000).toISOString(),
            },
            {
                event: 'checkout_completed',
                distinct_id: 'demo-ph-user-002',
                properties: {
                    order_total_usd: 129.99,
                    items_count: 3,
                    payment_method: 'credit_card_masked',
                },
                timestamp: new Date(Date.now() - 1800000).toISOString(),
            },
        ],
    }

    fs.mkdirSync(outputDir, { recursive: true })
    fs.writeFileSync(outputFile, JSON.stringify(fixtures, null, 2))
    console.log(`✓ Fixtures geradas com sucesso em: ${path.relative(rootDir, outputFile)}`)
    console.log(`  - Usuários sintéticos: ${fixtures.users.length}`)
    console.log(`  - Feature Flags sintéticas: ${fixtures.feature_flags.length}`)
    console.log(`  - Eventos de exemplo: ${fixtures.sample_events.length}`)
}

generateFixtures()

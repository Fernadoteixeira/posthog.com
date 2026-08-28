import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

const actorsPath = path.join(rootDir, 'templates', 'demo-users-actors-v1.json')
const pageViewsPath = path.join(rootDir, 'templates', 'demo-page-view-journeys-v1.json')
const captureContractPath = path.join(rootDir, 'templates', 'demo-journey-capture-contract-v1.json')
const ledgerPath = path.join(rootDir, 'reports', 'evidence', 'evidence-ledger.json')

test('templates/demo-users-actors-v1.json conforms to canonical schema and zero-secrets policy', () => {
    assert.ok(fs.existsSync(actorsPath), 'Actors JSON must exist')
    const data = JSON.parse(fs.readFileSync(actorsPath, 'utf-8'))

    assert.equal(data.schema_version, 'demo-users-actors-v1')
    assert.equal(data.project, 'posthog.com')
    assert.equal(data.security_policy.credentials_in_fixture, false)
    assert.equal(data.security_policy.tokens_in_fixture, false)
    assert.equal(data.security_policy.private_keys_in_fixture, false)

    assert.ok(Array.isArray(data.actors), 'Actors must be an array')
    assert.equal(data.actors.length, 15, 'Must have exactly 15 actors defined')

    const humanActors = data.actors.filter((a) => a.kind === 'human')
    const serviceActors = data.actors.filter((a) => a.kind === 'service')

    assert.equal(humanActors.length, 10, 'Must have 10 human personas')
    assert.equal(serviceActors.length, 5, 'Must have 5 service actors')

    for (const actor of data.actors) {
        assert.ok(actor.id, 'Actor must have id')
        assert.ok(actor.display_name, 'Actor must have display_name')
        assert.ok(actor.role, 'Actor must have role')
        assert.ok(actor.scope, 'Actor must have scope')
        assert.ok(actor.jtbd, 'Actor must have jtbd')
        assert.ok(actor.allowed_actions?.length > 0, 'Actor must have allowed_actions')
        assert.ok(actor.forbidden_actions?.length > 0, 'Actor must have forbidden_actions')
        assert.ok(actor.required_inputs?.length > 0, 'Actor must have required_inputs')
        assert.ok(actor.expected_outputs?.length > 0, 'Actor must have expected_outputs')
    }
})

test('templates/demo-page-view-journeys-v1.json contains 65 Page Views across 9 waves with valid JTBDs', () => {
    assert.ok(fs.existsSync(pageViewsPath), 'Page Views JSON must exist')
    const data = JSON.parse(fs.readFileSync(pageViewsPath, 'utf-8'))

    assert.equal(data.schema_version, 'demo-page-view-journeys-v1')
    assert.equal(data.total_page_views, 65)
    assert.equal(data.waves.length, 9)
    assert.equal(data.page_views.length, 65)

    const actorsData = JSON.parse(fs.readFileSync(actorsPath, 'utf-8'))
    const actorIds = new Set(actorsData.actors.map((a) => a.id))

    const seenIds = new Set()
    for (const pv of data.page_views) {
        assert.ok(!seenIds.has(pv.id), `Page view ID must be unique: ${pv.id}`)
        seenIds.add(pv.id)

        assert.ok(pv.route, `Page view ${pv.id} must have route`)
        assert.ok(pv.title, `Page view ${pv.id} must have title`)
        assert.ok(pv.wave, `Page view ${pv.id} must have wave`)
        assert.ok(pv.surface, `Page view ${pv.id} must have surface`)
        assert.ok(pv.app_template, `Page view ${pv.id} must have app_template`)

        // Referential integrity check
        assert.ok(actorIds.has(pv.primary_actor), `Primary actor '${pv.primary_actor}' must exist in actors catalog`)
        if (pv.supporting_actors) {
            for (const supp of pv.supporting_actors) {
                assert.ok(actorIds.has(supp), `Supporting actor '${supp}' must exist in actors catalog`)
            }
        }

        // Canonical JTBD format check
        assert.ok(
            pv.jtbd.startsWith('WHEN') &&
                pv.jtbd.includes('I WANT TO') &&
                pv.jtbd.includes('SO I CAN') &&
                pv.jtbd.includes('WITHOUT'),
            `Page view ${pv.id} JTBD must follow 'WHEN ... I WANT TO ... SO I CAN ... WITHOUT ...'`
        )

        // 4-state visual paths check
        assert.ok(pv.expected_screenshots.light_wide, `PV ${pv.id} must define light_wide screenshot`)
        assert.ok(pv.expected_screenshots.light_narrow, `PV ${pv.id} must define light_narrow screenshot`)
        assert.ok(pv.expected_screenshots.dark_wide, `PV ${pv.id} must define dark_wide screenshot`)
        assert.ok(pv.expected_screenshots.dark_narrow, `PV ${pv.id} must define dark_narrow screenshot`)
        assert.ok(pv.expected_motion, `PV ${pv.id} must define expected_motion`)
    }
})

test('templates/demo-journey-capture-contract-v1.json defines complete visual capture protocol', () => {
    assert.ok(fs.existsSync(captureContractPath), 'Capture contract must exist')
    const contract = JSON.parse(fs.readFileSync(captureContractPath, 'utf-8'))

    assert.equal(contract.schema_version, 'demo-journey-capture-contract-v1')
    assert.equal(contract.visual_specifications.viewports.narrow.width, 640)
    assert.equal(contract.visual_specifications.viewports.wide.width, 1440)
    assert.equal(contract.visual_specifications.color_modes.length, 2)
    assert.equal(contract.visual_specifications.motion_capture_rules.frame_rate_fps, 12)
})

test('reports/evidence/evidence-ledger.json maintains append-only audit trail', () => {
    assert.ok(fs.existsSync(ledgerPath), 'Evidence ledger must exist')
    const ledger = JSON.parse(fs.readFileSync(ledgerPath, 'utf-8'))

    assert.equal(ledger.schema_version, 'evidence-ledger-v1')
    assert.equal(ledger.ledger_policy.immutability, 'append_only')
    assert.ok(ledger.claims.length >= 1, 'Ledger must contain at least baseline initialization claim')
    assert.equal(ledger.claims[0].status, 'PASS')
})

test('src/pages/demo-journeys/index.tsx provides the interactive 360 desktop app hub', () => {
    const hubPagePath = path.join(rootDir, 'src', 'pages', 'demo-journeys', 'index.tsx')
    assert.ok(fs.existsSync(hubPagePath), 'Demo journeys hub page must exist')
    const content = fs.readFileSync(hubPagePath, 'utf-8')
    assert.ok(content.includes('DemoJourneysPage'), 'Hub page must export DemoJourneysPage component')
    assert.ok(content.includes('HeaderBar'), 'Hub page must use HeaderBar component')
})

test('templates/demo-journeys-negative-paths-v1.json defines 8 adversarial quality scenarios', () => {
    const negPathsFile = path.join(rootDir, 'templates', 'demo-journeys-negative-paths-v1.json')
    assert.ok(fs.existsSync(negPathsFile), 'Negative paths JSON must exist')
    const negData = JSON.parse(fs.readFileSync(negPathsFile, 'utf-8'))
    assert.equal(negData.total_negative_paths, 8)
    assert.equal(negData.negative_paths.length, 8)
})

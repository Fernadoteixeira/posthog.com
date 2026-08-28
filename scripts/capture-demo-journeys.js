/**
 * Script Automatizado de Captura Visual 360° — Jornadas Demo do PostHog
 *
 * Executa captura 4-state (light/dark x narrow/wide) e gera evidências auditáveis com SHA-256.
 *
 * Uso:
 *   node scripts/capture-demo-journeys.js --dry-run
 *   node scripts/capture-demo-journeys.js --page PV-001
 *   node scripts/capture-demo-journeys.js --wave W0-DESKTOP-SHELL
 *   node scripts/capture-demo-journeys.js --all --port 8001
 */

/* eslint-disable */

const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const http = require('http')

const ROOT_DIR = path.resolve(__dirname, '..')
const JOURNEYS_JSON = path.join(ROOT_DIR, 'templates', 'demo-page-view-journeys-v1.json')
const LEDGER_JSON = path.join(ROOT_DIR, 'reports', 'evidence', 'evidence-ledger.json')

// Argumentos da linha de comando
const args = process.argv.slice(2)
let isDryRun = args.includes('--dry-run')
let port = 8001
let pageFilter = null
let waveFilter = null
let captureAll = args.includes('--all')

for (let i = 0; i < args.length; i++) {
    if (args[i] === '--port' && args[i + 1]) port = parseInt(args[i + 1], 10)
    if (args[i] === '--page' && args[i + 1]) pageFilter = args[i + 1].toUpperCase()
    if (args[i] === '--wave' && args[i + 1]) waveFilter = args[i + 1].toUpperCase()
}

if (!isDryRun && !pageFilter && !waveFilter && !captureAll) {
    isDryRun = true
    console.log('[INFO] Nenhum filtro fornecido. Executando em modo --dry-run por padrão.\n')
}

// Localizar navegador Chrome / Edge no sistema
function findBrowserExecutable() {
    const candidates = [
        process.env.CHROME_BIN,
        process.env.PUPPETEER_EXECUTABLE_PATH,
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        path.join(process.env.LOCALAPPDATA || '', 'Google', 'Chrome', 'Application', 'chrome.exe'),
        'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
        '/usr/bin/google-chrome',
        '/usr/bin/chromium-browser',
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    ].filter(Boolean)

    for (const c of candidates) {
        if (fs.existsSync(c)) return c
    }
    return null
}

function calculateSha256(filePath) {
    const fileBuffer = fs.readFileSync(filePath)
    return crypto.createHash('sha256').update(fileBuffer).digest('hex')
}

function checkServerAvailable(host, targetPort) {
    return new Promise((resolve) => {
        const req = http.request(
            { host: '127.0.0.1', port: targetPort, path: '/', method: 'GET', timeout: 5000 },
            (res) => {
                resolve(true)
            }
        )
        req.on('error', () => resolve(false))
        req.on('timeout', () => {
            req.destroy()
            resolve(false)
        })
        req.end()
    })
}

async function main() {
    console.log('======================================================================')
    console.log('   RUNNER DE CAPTURA VISUAL 360° — POSTHOG (posthog.com)')
    console.log('======================================================================\n')

    if (!fs.existsSync(JOURNEYS_JSON)) {
        console.error(`[ERRO] Catálogo de jornadas não encontrado em: ${JOURNEYS_JSON}`)
        process.exit(1)
    }

    const journeysData = JSON.parse(fs.readFileSync(JOURNEYS_JSON, 'utf-8'))
    let targets = journeysData.page_views || []

    if (pageFilter) {
        targets = targets.filter((pv) => pv.id === pageFilter)
        if (targets.length === 0) {
            console.error(`[ERRO] Nenhuma Page View encontrada com ID '${pageFilter}'.`)
            process.exit(1)
        }
    } else if (waveFilter) {
        targets = targets.filter((pv) => pv.wave === waveFilter)
        if (targets.length === 0) {
            console.error(`[ERRO] Nenhuma Page View encontrada na onda '${waveFilter}'.`)
            process.exit(1)
        }
    }

    console.log(`Modo:                 ${isDryRun ? 'DRY-RUN (Simulação & Planejamento)' : 'EXECUÇÃO REAL'}`)
    console.log(`Porta Alvo:           ${port}`)
    console.log(`Total de Alvos:       ${targets.length} Page Views`)
    console.log(`Estados por Página:   4 (light-wide, light-narrow, dark-wide, dark-narrow)\n`)

    const browserPath = findBrowserExecutable()
    console.log(`Navegador Detectado:  ${browserPath || 'NENHUM ENCONTRADO'}`)

    const isServerUp = await checkServerAvailable('localhost', port)
    console.log(
        `Status do Dev Server: ${
            isServerUp ? 'ONLINE (http://localhost:' + port + ')' : 'OFFLINE (http://localhost:' + port + ')'
        }\n`
    )

    if (isDryRun) {
        console.log('--- PLANO DE EXECUÇÃO DE CAPTURA 360° ---')
        targets.forEach((pv, idx) => {
            console.log(`[${idx + 1}/${targets.length}] ${pv.id} — ${pv.title} (${pv.route}) [${pv.wave}]`)
            console.log(`    ├─ light-wide:   ${pv.expected_screenshots.light_wide}`)
            console.log(`    ├─ light-narrow: ${pv.expected_screenshots.light_narrow}`)
            console.log(`    ├─ dark-wide:    ${pv.expected_screenshots.dark_wide}`)
            console.log(`    ├─ dark-narrow:  ${pv.expected_screenshots.dark_narrow}`)
            console.log(`    └─ motion:       ${pv.expected_motion}`)
        })

        console.log('\n----------------------------------------------------------------------')
        console.log(`Simulação concluída com sucesso. ${targets.length * 4} screenshots planejados.`)
        console.log('Para executar a captura real:')
        console.log(`  1. Inicie o dev server: pnpm start`)
        console.log(`  2. Execute: node scripts/capture-demo-journeys.js --page PV-001 (ou --wave W0-DESKTOP-SHELL)`)
        console.log('----------------------------------------------------------------------')
        process.exit(0)
    }

    // Execução Real
    if (!isServerUp) {
        console.error(`[ERRO] O dev server não está respondendo em http://localhost:${port}.`)
        console.error(`Inicie o servidor com 'pnpm start' antes de executar a captura real.`)
        process.exit(1)
    }

    if (!browserPath) {
        console.error(`[ERRO] Nenhum binário do Chrome ou Edge foi localizado no sistema.`)
        process.exit(1)
    }

    let puppeteer
    try {
        puppeteer = require('puppeteer-core')
    } catch (e) {
        console.error(`[ERRO] puppeteer-core não pôde ser carregado: ${e.message}`)
        process.exit(1)
    }

    const screenshotsDir = path.join(ROOT_DIR, 'reports', 'evidence', 'journeys', 'screenshots')
    fs.mkdirSync(screenshotsDir, { recursive: true })

    console.log('Iniciando navegador headless...')
    const browser = await puppeteer.launch({
        executablePath: browserPath,
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
    })

    const results = []
    const states = [
        { mode: 'light', viewport: { width: 1440, height: 900 }, key: 'light_wide', suffix: 'light-1440.png' },
        { mode: 'light', viewport: { width: 640, height: 860 }, key: 'light_narrow', suffix: 'light-640.png' },
        { mode: 'dark', viewport: { width: 1440, height: 900 }, key: 'dark_wide', suffix: 'dark-1440.png' },
        { mode: 'dark', viewport: { width: 640, height: 860 }, key: 'dark_narrow', suffix: 'dark-640.png' },
    ]

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    try {
        for (let i = 0; i < targets.length; i++) {
            const pv = targets[i]
            console.log(`\n[${i + 1}/${targets.length}] Capturando ${pv.id}: ${pv.title} (${pv.route})...`)

            for (const state of states) {
                const page = await browser.newPage()
                const errors = []
                page.on('dialog', (d) => d.accept().catch(() => {}))
                page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
                page.on('pageerror', (e) => errors.push(e.message))

                await page.setViewport(state.viewport)

                // Seed de tema no localStorage
                await page.evaluateOnNewDocument((themeMode) => {
                    localStorage.setItem('theme', themeMode)
                    localStorage.setItem('siteSettings', JSON.stringify({ colorMode: themeMode, theme: themeMode }))
                }, state.mode)

                const targetUrl = `http://127.0.0.1:${port}${pv.route}`
                const destFile = path.join(
                    screenshotsDir,
                    `pv-${pv.id.toLowerCase().replace('pv-', '')}-${state.suffix}`
                )

                let captured = false
                let attempts = 0
                const maxAttempts = 3

                while (!captured && attempts < maxAttempts) {
                    attempts++
                    try {
                        await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 30000 })
                        await sleep(2000) // Aguardar hidratação

                        // Dismiss cookie banner se existir
                        await page
                            .evaluate(() => {
                                const banner = document.querySelector('[data-attr="cookie-banner-dismiss"]')
                                if (banner) banner.click()
                            })
                            .catch(() => {})

                        await page.screenshot({ path: destFile, fullPage: false })
                        const sha256 = calculateSha256(destFile)
                        console.log(
                            `  ✓ [${state.mode}-${state.viewport.width}px] Salvo: ${path.basename(
                                destFile
                            )} (SHA: ${sha256.slice(0, 12)}...)`
                        )

                        results.push({
                            page_id: pv.id,
                            state: `${state.mode}-${state.viewport.width}`,
                            file: path.relative(ROOT_DIR, destFile).replace(/\\/g, '/'),
                            sha256,
                            errors_count: errors.length,
                        })
                        captured = true
                    } catch (err) {
                        if (attempts >= maxAttempts) {
                            console.error(
                                `  ✗ Falha na captura (${state.mode}-${state.viewport.width}): ${err.message}`
                            )
                        } else {
                            await sleep(1500)
                        }
                    }
                }

                await page.close().catch(() => {})
            }
        }
    } finally {
        await browser.close()
    }

    // Atualizar Evidence Ledger se houver capturas reais
    if (results.length > 0 && fs.existsSync(LEDGER_JSON)) {
        try {
            const ledger = JSON.parse(fs.readFileSync(LEDGER_JSON, 'utf-8'))
            const newClaim = {
                claim_id: `CLM-${String(ledger.claims.length + 1).padStart(3, '0')}-VISUAL-CAPTURE`,
                timestamp_utc: new Date().toISOString(),
                claim_type: 'VISUAL_CAPTURE_4STATE',
                status: 'PASS',
                target_pages: Array.from(new Set(results.map((r) => r.page_id))),
                total_screenshots: results.length,
                artifacts: results.map((r) => ({
                    page_id: r.page_id,
                    state: r.state,
                    file: r.file,
                    sha256: r.sha256,
                })),
            }
            ledger.claims.push(newClaim)
            ledger.metadata.total_claims = ledger.claims.length
            ledger.metadata.last_updated_utc = newClaim.timestamp_utc
            fs.writeFileSync(LEDGER_JSON, JSON.stringify(ledger, null, 2))
            console.log(`\n✓ Evidence Ledger atualizado: ${LEDGER_JSON} (Claim: ${newClaim.claim_id})`)
        } catch (e) {
            console.warn(`[AVISO] Falha ao atualizar Evidence Ledger: ${e.message}`)
        }
    }

    console.log('\n======================================================================')
    console.log(`Captura concluída! Total de imagens capturadas: ${results.length}`)
    console.log('======================================================================')
}

main().catch((err) => {
    console.error('Erro fatal:', err)
    process.exit(1)
})

# Demo Journeys & Visual Evidence (Canonical 360°)

This guide explains the Canonical 360° Demo Journeys architecture in `posthog.com`, covering the 15 personas/actors, 65 Page Views across 9 waves, and the automated visual evidence capture and validation pipeline.

---

## 1. Overview

PostHog.com uses a windowed desktop OS UI paradigm (`Desktop UI`). To ensure complete and unabbreviated end-to-end verification without shortcuts, the repository contains a formal catalog of:

- **15 Personas & Actors** (10 human personas + 5 technical service actors): [`templates/demo-users-actors-v1.json`](file:///c:/Users/fjuni/.copilot/repos/posthog.com/templates/demo-users-actors-v1.json) and [`references/demo-users-actors-v1.md`](file:///c:/Users/fjuni/.copilot/repos/posthog.com/references/demo-users-actors-v1.md).
- **65 Page Views across 9 Waves**: [`templates/demo-page-view-journeys-v1.json`](file:///c:/Users/fjuni/.copilot/repos/posthog.com/templates/demo-page-view-journeys-v1.json) and [`references/demo-page-view-journeys-v1.md`](file:///c:/Users/fjuni/.copilot/repos/posthog.com/references/demo-page-view-journeys-v1.md).
- **Capture & Evidence Contract**: [`templates/demo-journey-capture-contract-v1.json`](file:///c:/Users/fjuni/.copilot/repos/posthog.com/templates/demo-journey-capture-contract-v1.json).
- **Definition of Ready (DoR) & Definition of Done (DoD)**: [`references/demo-journeys-dor-dod-v1.md`](file:///c:/Users/fjuni/.copilot/repos/posthog.com/references/demo-journeys-dor-dod-v1.md).
- **Evidence Ledger**: [`reports/evidence/evidence-ledger.json`](file:///c:/Users/fjuni/.copilot/repos/posthog.com/reports/evidence/evidence-ledger.json).

---

## 2. The 9 Journey Waves

| Wave | Identifier | Scope & Key Surfaces | Page Views |
|---|---|---|---|
| **Wave 0** | `W0-DESKTOP-SHELL` | Desktop OS core, Window manager, TaskBarMenu, Display Options, Shortcuts, Wallpaper | `PV-001..PV-007` |
| **Wave 1** | `W1-PRODUCT-ANALYTICS` | Product Analytics, Explorer, Funnels, Retention, Paths, Stickiness, Lifecycle, Dashboards, HogQL SQL | `PV-008..PV-016` |
| **Wave 2** | `W2-SESSION-REPLAY` | Session Replay player, Heatmaps, Console inspector, Network inspector, Replay Vision, Sharing | `PV-017..PV-023` |
| **Wave 3** | `W3-FLAGS-EXPERIMENTS` | Feature Flags, Flag creation, JSON Variants, Early Access, A/B Testing, Bayesian results | `PV-024..PV-030` |
| **Wave 4** | `W4-CDP-PIPELINES` | Customer Data Platform, Sources/SDKs, Realtime Destinations, Hog Functions, AI Hog, MCP, Webhooks | `PV-031..PV-038` |
| **Wave 5** | `W5-DATA-WAREHOUSE` | Data Warehouse overview, Context Warehouse, S3/BigQuery/Snowflake connectors, Views, Batch Exports | `PV-039..PV-044` |
| **Wave 6** | `W6-AI-ERROR-TRACKING` | AI Observability, LLM Traces/Spans, Prompt Management, Token Costs, Error Tracking, Issue Detail, Logs | `PV-045..PV-051` |
| **Wave 7** | `W7-SURVEYS-GROWTH` | Surveys (NPS/CSAT), Survey builder, Sentiment analysis, Web Analytics, Workflows, Vibe Check | `PV-052..PV-057` |
| **Wave 8** | `W8-GOVERNANCE-COMMUNITY`| Pricing calculator, Documentation (`/docs`), Handbook, Community, Questions forum, Customers, DPA | `PV-058..PV-065` |

---

## 3. How to Validate Journeys

Run the automated validator to ensure 100% referential integrity and schema compliance:

```bash
# Via Node directly:
node scripts/validate-demo-journeys.js

# Or via pnpm script:
pnpm validate:journeys
```

The script verifies:
1. All JSON and Markdown catalog files exist and are non-empty.
2. Every actor has valid IDs, JTBD, permissions, inputs, and outputs.
3. Every page view references valid actors and follows canonical JTBD formatting (`WHEN ... I WANT TO ... SO I CAN ... WITHOUT ...`).
4. All 4-state screenshot paths (`light-wide`, `light-narrow`, `dark-wide`, `dark-narrow`) and motion paths are defined.

---

## 4. How to Capture Visual Evidence

Ensure the development server is running locally (`pnpm start` on port 8001 or 8000), then execute:

```bash
# 1. Dry-run simulation (no browser launched):
node scripts/capture-demo-journeys.js --dry-run

# 2. Capture a specific page view:
node scripts/capture-demo-journeys.js --page PV-001 --port 8001

# 3. Capture an entire wave:
node scripts/capture-demo-journeys.js --wave W0-DESKTOP-SHELL --port 8001

# 4. Capture all 65 page views:
node scripts/capture-demo-journeys.js --all --port 8001
```

### Visual 4-State Grid Standard

Every Page View produces 4 distinct screenshots:
1. `light-wide` (1440x900, light theme)
2. `light-narrow` (640x860, light theme)
3. `dark-wide` (1440x900, dark theme)
4. `dark-narrow` (640x860, dark theme)

Screenshots are saved with SHA-256 hashes to:
`reports/evidence/journeys/screenshots/pv-{id}-{mode}-{width}.png`

---

## 5. Security & Privacy Rules

- **Zero Credentials**: Never commit real `phc_...` or `phx_...` tokens, passwords, or session cookies.
- **Fixture Namespace**: Use the `demo-ph-` prefix for all demonstration fixtures.
- **Redaction**: Ensure email addresses, private keys, and sensitive tokens are masked in captured visuals.

# Checklist DoR e DoD — Jornadas Demo e Evidências Visuais 360° no PostHog

Este documento estabelece as diretrizes de governança, prontidão (*Definition of Ready - DoR*) e conclusão (*Definition of Done - DoD*) para a execução e coleta de evidências das jornadas de demonstração no PostHog (`posthog.com`).

---

## 1. Definition of Ready (DoR)

Uma jornada de demonstração ou page view somente está pronta para ser executada e gravada quando satisfizer integralmente os seguintes critérios:

| Dimensão | Critério de Prontidão Canônica |
|---|---|
| **Escopo & Superfície** | A page view possui ID unívoco (`PV-001..PV-065`), rota explícita e template de app identificado (`<Reader />`, `<Editor />`, `<Presentation />`, `<Explorer />`, `<Inbox />`, `<Wizard />`, `<MediaPlayer />`, Desktop OS). |
| **Atores & Papéis** | Ator principal e atores de apoio estão mapeados no catálogo `templates/demo-users-actors-v1.json` com menor privilégio. |
| **JTBD Estruturado** | O Job To Be Done está redigido no padrão canônico: `WHEN <situação> I WANT TO <motivação> SO I CAN <resultado> WITHOUT <tradeoff>`. |
| **Inputs e Outputs** | As entradas requeridas do ator e as saídas esperadas do sistema estão formalmente especificadas. |
| **Gaps Conhecidos** | Gaps de interface, dados mock, comportamento responsivo ou limitações conhecidas estão documentados. |
| **Sanitização Prévia** | O ambiente de teste está configurado para não exibir tokens reais de API, senhas ou PII. |
| **Infraestrutura de Captura** | Script de automação preparado com viewports padrão (640x860 e 1440x900), sementes de tema (light/dark) e rotina de hidratação (~9s). |

---

## 2. Definition of Done (DoD)

Uma jornada de demonstração somente pode ser classificada como **DONE** (concluída) quando todas as seguintes condições forem satisfeitas com comprovação auditável:

| Dimensão | Critério de Conclusão Canônica |
|---|---|
| **Execução Real** | A página foi navegada no navegador real com o servidor dev (`pnpm start`) em execução. Nenhuma evidência foi simulada. |
| **Grid Visual 4-State** | Screenshots capturados nos quatro estados obrigatórios: `light-wide`, `light-narrow`, `dark-wide`, `dark-narrow`. |
| **Evidência de Movimento** | GIF/vídeo de movimento capturado para elementos interativos (transições de abas, arrasto de janelas, submenus, carrosséis). |
| **Integridade Criptográfica** | Cada artefato visual possui caminho normalizado, resolução anotada, timestamp UTC e hash SHA-256 gerado. |
| **Zero Erros Novos no Console** | O console do navegador foi verificado antes e depois da jornada, confirmando ausência de novos erros de JavaScript. |
| **Sanitização de Dados** | Nenhum segredo, chave de API ou dado pessoal vazou nas imagens ou logs gerados. |
| **Validação de Catálogo** | Os arquivos JSON e Markdown foram validados pelo script `node scripts/validate-demo-journeys.js` com exit code 0. |

---

## 3. Classificação Epistemológica de Evidências

Todo status registrado no Evidence Ledger e nos relatórios de jornada deve seguir estritamente as tags epistemológicas:

- `[FACT]`: Ação executada com sucesso, log inspecionado, arquivo PNG/GIF existente com hash SHA-256 confirmado.
- `[INFERENCE]`: Deduzido logicamente de fatos confirmados na codebase ou schemas.
- `[HYPOTHESIS]`: Suposição de comportamento aguardando validação visual em runtime.
- `[NOT_EXECUTED]`: Item planejado no catálogo estático, aguardando sessão ativa de gravação.
- `[BLOCKED]`: Dependência externa ou bloqueio técnico impedindo a captura da evidência.

> [!CAUTION]
> **Regra de Ouro**: É expressamente proibido promover um status de `NOT_EXECUTED` para `PASS` ou `DONE` sem que a captura visual real tenha ocorrido.

---

## 4. Estado Atual do Repositório

| Controle | Estado Atual | Detalhes |
|---|---|---|
| Catálogo de Atores | `DEFINED` | 15 atores (10 humanos + 5 técnicos) formalizados em JSON e Markdown. |
| Catálogo de Page Views | `DEFINED` | 65 page views cobrindo todas as 9 ondas de produtos do PostHog. |
| Contrato de Captura | `DEFINED` | Regras de resolução, 4-state grid, GIFs e sanitização estabelecidas. |
| Screenshots Reais | `NOT_EXECUTED` | 0 capturados — aguarda execução do pipeline de captura com o dev server ativo. |
| Vídeos Reais | `NOT_EXECUTED` | 0 capturados — aguarda execução interativa ou headless puppeteer. |
| Validador Automatizado | `READY` | Script `scripts/validate-demo-journeys.js` implementado para atestar integridade. |

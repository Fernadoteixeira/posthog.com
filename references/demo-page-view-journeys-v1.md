# Catálogo Canônico de Jornadas e Page Views — PostHog 360°

> **Status Epistemológico**: Este catálogo é um contrato estático e canônico cobrindo 100% das superfícies de aplicação e produtos do PostHog (`posthog.com`), dividido em 9 ondas funcionais (`W0` a `W8`) totalizando 65 Page Views. Todas as capturas visuais estão registradas como `NOT_EXECUTED` aguardando execução real no browser com dev server ativo.

---

## Sumário Executivo de Cobertura

| Métrica | Valor |
|---|---|
| **Page Views Catalogadas** | 65 |
| **Ondas de Jornada Cobertas** | 9 (`W0` a `W8`) |
| **Personas Humanas Mapeadas** | 10 |
| **Atores Técnicos Mapeados** | 5 |
| **Templates de App Mapeados** | `<Reader />`, `<Editor />`, `<Presentation />`, `<Explorer />`, `<Inbox />`, `<Wizard />`, `<MediaPlayer />`, Desktop OS |
| **Grid Visual Obrigatório** | 4 estados por Page View (`light-wide`, `light-narrow`, `dark-wide`, `dark-narrow`) |
| **Evidência de Movimento** | 1 GIF/vídeo por Page View para transições e microinterações |
| **Estado de Execução Atual** | `NOT_EXECUTED` (Nenhum artefato visual fabricado ou inferido) |

---

## Catálogo Detalhado das 65 Page Views

### Onda 0: Desktop OS & Core Shell (PV-001..PV-007)

---

#### PV-001 — Desktop OS Homepage
- **Rota**: `/`
- **Superfície**: Desktop OS Core
- **Template**: Desktop Window Manager
- **Ator Principal**: `anonymous-visitor`
- **Atores de Apoio**: `demo-product-engineer`, `demo-executive-sponsor`
- **JTBD**: `WHEN visito a página inicial do PostHog I WANT TO interagir com o ambiente de desktop OS e explorar os produtos disponíveis SO I CAN compreender o valor da plataforma integrada de produto WITHOUT ser bombardeado por páginas de marketing genéricas e prolixas.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Navegador desktop ou mobile; preferência de tema; interação com ícones da área de trabalho | Desktop OS renderizado; janelas empilháveis; barra de tarefas inferior com TaskBarMenu; ícones de aplicativos | O usuário visualiza uma interface limpa, rápida e responsiva que transmite densidade de informação e poder computacional. |

- **Gaps Identificados**: 1. Hidratação inicial requer ~9s para montagem completa de componentes no Puppeteer. 2. Detecção de layout mobile requer ajuste de zoom.
- **Screenshots Esperados**:
  - `light-wide` (1440x900): `reports/evidence/journeys/screenshots/pv-001-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow` (640x860): `reports/evidence/journeys/screenshots/pv-001-light-640.png` — `NOT_EXECUTED`
  - `dark-wide` (1440x900): `reports/evidence/journeys/screenshots/pv-001-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow` (640x860): `reports/evidence/journeys/screenshots/pv-001-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-001-motion.gif` — `NOT_EXECUTED`

---

#### PV-002 — Painel de Opções de Exibição
- **Rota**: `/display-options`
- **Superfície**: Preferências do Sistema
- **Template**: `<Editor />`
- **Ator Principal**: `anonymous-visitor`
- **Atores de Apoio**: `demo-platform-admin`
- **JTBD**: `WHEN quero personalizar a aparência do desktop I WANT TO alternar entre temas claro/escuro, escala e preferências visuais SO I CAN ter uma experiência ergonômica de trabalho WITHOUT perder o estado das janelas abertas.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Atalho de teclado ',' ou clique no menu; seleção de modo de cor | Janela de opções de exibição aberta; controles de rádio de tema; preview de cores | As alterações de tema são aplicadas instantaneamente em todas as janelas ativas e salvas no localStorage. |

- **Gaps Identificados**: 1. Sincronização entre theme e siteSettings no localStorage exige set duplo.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-002-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-002-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-002-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-002-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-002-motion.gif` — `NOT_EXECUTED`

---

#### PV-003 — Painel de Atalhos de Teclado
- **Rota**: `/kbd`
- **Superfície**: Produtividade do Sistema
- **Template**: Custom Modal
- **Ator Principal**: `demo-product-engineer`
- **Atores de Apoio**: `anonymous-visitor`
- **JTBD**: `WHEN navego pelo PostHog I WANT TO consultar todos os atalhos de teclado disponíveis SO I CAN operar o sistema na velocidade do pensamento WITHOUT precisar do mouse.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Atalho de teclado '.'; filtro de busca de atalhos | Tabela visual de combinações de teclas; ações mapeadas; atalhos globais e de janela | O usuário encontra o atalho desejado e pode fechar o modal com a tecla Escape. |

- **Gaps Identificados**: 1. Modal customizado não segue o template padrão `<Editor />` por design de UX.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-003-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-003-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-003-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-003-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-003-motion.gif` — `NOT_EXECUTED`

---

#### PV-004 — Gerenciamento de Wallpapers
- **Rota**: `/wallpaper`
- **Superfície**: Personalização do Desktop
- **Template**: Desktop Context
- **Ator Principal**: `anonymous-visitor`
- **Atores de Apoio**: `demo-community-contributor`
- **JTBD**: `WHEN quero alterar a estética de fundo do desktop I WANT TO ciclar entre wallpapers temáticos do Hedgehog SO I CAN personalizar meu ambiente de trabalho WITHOUT interromper fluxos em andamento.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Atalho de teclado '\' | Plano de fundo atualizado; feedback visual suave de transição | O wallpaper é atualizado no canvas de fundo mantendo nitidez em alta resolução. |

- **Gaps Identificados**: 1. Imagens de wallpaper pesadas podem demandar pré-carregamento.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-004-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-004-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-004-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-004-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-004-motion.gif` — `NOT_EXECUTED`

---

#### PV-005 — Menu Iniciar e Navegação Global
- **Rota**: `/taskbar-menu`
- **Superfície**: Navegação Global
- **Template**: TaskBarMenu
- **Ator Principal**: `anonymous-visitor`
- **Atores de Apoio**: `demo-product-engineer`, `demo-growth-lead`
- **JTBD**: `WHEN procuro qualquer produto, documentação ou recurso I WANT TO abrir o menu iniciar da barra de tarefas SO I CAN acessar qualquer seção do site em no máximo dois cliques WITHOUT me perder na hierarquia.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Clique no logo PostHog na barra de tarefas; hover em submenus | Menu cascata renderizado com ícones e cores por produto; submenus aninhados | Os menus abrem com alinhamento perfeito e animação suave de microinteração. |

- **Gaps Identificados**: 1. Submenus aninhados requerem hover no Chrome real para pintura correta.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-005-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-005-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-005-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-005-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-005-motion.gif` — `NOT_EXECUTED`

---

#### PV-006 — Gerenciamento de Múltiplas Janelas
- **Rota**: `/window-manager`
- **Superfície**: Desktop OS Core
- **Template**: App Context
- **Ator Principal**: `demo-product-engineer`
- **Atores de Apoio**: `demo-data-engineer`
- **JTBD**: `WHEN realizo tarefas multicontexto I WANT TO abrir múltiplas janelas, redimensioná-las e alternar foco entre elas SO I CAN comparar insights, documentações e logs simultaneamente WITHOUT perder o contexto anterior.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Arrasto pelo cabeçalho da janela; clique nos controles de maximizar/minimizar/fechar | Janelas posicionadas com Z-Index atualizado; snap lateral ativado | O usuário organiza seu workspace livremente com persistência de coordenadas. |

- **Gaps Identificados**: 1. Gerenciamento de Z-Index requer cuidado ao abrir muitas janelas simultâneas.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-006-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-006-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-006-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-006-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-006-motion.gif` — `NOT_EXECUTED`

---

#### PV-007 — Recursos que Despertam Alegria (Sparks Joy)
- **Rota**: `/sparks-joy`
- **Superfície**: Cultura & Easter Eggs
- **Template**: `<Editor />`
- **Ator Principal**: `demo-community-contributor`
- **Atores de Apoio**: `anonymous-visitor`
- **JTBD**: `WHEN exploro as nuances da experiência PostHog I WANT TO descobrir recursos divertidos e easter eggs como Hedgehog Mode e Photobooth SO I CAN me engajar com a cultura do produto WITHOUT frieza corporativa.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Clique no menu Sparks Joy; interação com minigames e stickers | Animações de confete; Hedgehog mascote interativo; galeria de artes | Sensação de autenticidade, humor e cuidado artesanal no produto. |

- **Gaps Identificados**: 1. Animações de partículas requerem validação de impacto em dispositivos com baixo poder gráfico.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-007-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-007-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-007-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-007-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-007-motion.gif` — `NOT_EXECUTED`

---

### Onda 1: Product Analytics & Visualização (PV-008..PV-016)

---

#### PV-008 — Visão Geral de Product Analytics
- **Rota**: `/product-analytics`
- **Superfície**: Product Analytics
- **Template**: `<Presentation />`
- **Ator Principal**: `demo-growth-lead`
- **Atores de Apoio**: `demo-product-engineer`, `demo-executive-sponsor`
- **JTBD**: `WHEN quero entender os recursos de Product Analytics I WANT TO navegar pela apresentação interativa de slides de produto SO I CAN ver como trends, funis e caminhos funcionam na prática WITHOUT ler manuais extensos.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Navegação por setas de slide ou teclado; clique em chamadas de ação interativas | Slides diagramados com gráficos reais; exemplos de consultas; métricas de caso de uso | O usuário compreende com clareza como o PostHog substitui ferramentas tradicionais de analytics. |

- **Gaps Identificados**: 1. Breakpoint @2xl alterna layout entre formato paisagem e retrato em mobile.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-008-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-008-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-008-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-008-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-008-motion.gif` — `NOT_EXECUTED`

---

#### PV-009 — Explorador de Insights Analíticos
- **Rota**: `/product-analytics-explorer`
- **Superfície**: Product Analytics
- **Template**: `<Explorer />`
- **Ator Principal**: `demo-growth-lead`
- **Atores de Apoio**: `demo-product-engineer`
- **JTBD**: `WHEN quero explorar métricas de uso I WANT TO filtrar eventos, selecionar agregações matemáticas e visualizar tendências temporais SO I CAN identificar variações de tráfego e comportamento WITHOUT escrever código SQL manual.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Seleção de eventos no dropdown; filtro de propriedades; seleção de intervalo de datas | Gráfico de linhas/barras atualizado; tabela de dados detalhada; média e percentis calculados | Visualização imediata dos dados com legenda clara e capacidade de exportação. |

- **Gaps Identificados**: 1. Renderização de múltiplos gráficos pesados pode exigir debounce em filtros.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-009-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-009-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-009-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-009-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-009-motion.gif` — `NOT_EXECUTED`

---

#### PV-010 — Análise de Funis de Conversão
- **Rota**: `/funnels`
- **Superfície**: Product Analytics
- **Template**: `<Reader />`
- **Ator Principal**: `demo-growth-lead`
- **Atores de Apoio**: `demo-executive-sponsor`
- **JTBD**: `WHEN analiso o fluxo de onboarding dos usuários I WANT TO configurar etapas sequenciais de funil e medir a taxa de abandono entre cada passo SO I CAN otimizar etapas com alto atrito WITHOUT adivinhações.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Etapas de eventos ordenadas; definição de janela de conversão; quebra por propriedade de usuário | Gráfico de funil com percentuais de conversão; tempo médio entre etapas; lista de usuários que abandonaram | Identificação precisa da etapa com maior queda de usuários para priorização de produto. |

- **Gaps Identificados**: 1. Funis com muitas etapas exigem rolagem horizontal em viewports estreitos.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-010-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-010-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-010-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-010-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-010-motion.gif` — `NOT_EXECUTED`

---

#### PV-011 — Gráficos de Retenção de Cohorts
- **Rota**: `/retention`
- **Superfície**: Product Analytics
- **Template**: `<Reader />`
- **Ator Principal**: `demo-growth-lead`
- **Atores de Apoio**: `demo-executive-sponsor`
- **JTBD**: `WHEN avalio a sustentabilidade do produto I WANT TO analisar a curva de retenção de usuários ao longo de dias, semanas ou meses SO I CAN comprovar o product-market fit WITHOUT depender de métricas de vaidade.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Evento inicial de ativação; evento de retorno recorrente; granularidade temporal | Tabela matricial de cohort N-Day; curva de retenção agregada; destaque de retenção estável | Compreensão exata de qual porcentagem de usuários continua ativa após períodos determinados. |

- **Gaps Identificados**: 1. Matriz de retenção volumosa pode requerer zoom out em telas pequenas.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-011-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-011-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-011-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-011-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-011-motion.gif` — `NOT_EXECUTED`

---

#### PV-012 — Mapeamento de Caminhos de Usuários (User Paths)
- **Rota**: `/user-paths`
- **Superfície**: Product Analytics
- **Template**: `<Reader />`
- **Ator Principal**: `demo-product-engineer`
- **Atores de Apoio**: `demo-growth-lead`
- **JTBD**: `WHEN investigo rotas inesperadas tomadas pelos usuários I WANT TO gerar diagramas de Sankey mostrando caminhos antes e depois de eventos-chave SO I CAN descobrir jornadas não documentadas WITHOUT suposições.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Evento de partida ou chegada; número de etapas de profundidade; exclusão de eventos de ruído | Diagrama de fluxo Sankey interativo; distribuição percentual de caminhos; nós de navegação navegáveis | Visualização dos fluxos predominantes e pontos de desvio na aplicação. |

- **Gaps Identificados**: 1. Diagramas Sankey complexos demandam renderização vetorial otimizada.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-012-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-012-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-012-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-012-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-012-motion.gif` — `NOT_EXECUTED`

---

#### PV-013 — Análise de Aderência e Frequência (Stickiness)
- **Rota**: `/stickiness`
- **Superfície**: Product Analytics
- **Template**: `<Reader />`
- **Ator Principal**: `demo-growth-lead`
- **Atores de Apoio**: `demo-executive-sponsor`
- **JTBD**: `WHEN quero medir a fidelidade do usuário I WANT TO analisar a distribuição de quantos dias em um período o usuário realizou uma ação SO I CAN identificar usuários 'power users' e comportamentos habituais WITHOUT métricas agregadas confusas.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Evento crítico de engajamento; janela de observação; critério de repetição | Histograma de stickiness por dias ativos; percentual de engajamento diário; cohorts de alta fidelidade | Clareza sobre a frequência com que recursos-chave são consumidos pelo público. |

- **Gaps Identificados**: 1. Nenhum gap crítico identificado.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-013-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-013-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-013-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-013-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-013-motion.gif` — `NOT_EXECUTED`

---

#### PV-014 — Análise de Ciclo de Vida do Usuário (Lifecycle)
- **Rota**: `/lifecycle`
- **Superfície**: Product Analytics
- **Template**: `<Reader />`
- **Ator Principal**: `demo-growth-lead`
- **Atores de Apoio**: `demo-executive-sponsor`
- **JTBD**: `WHEN acompanho o crescimento da base de usuários I WANT TO decompor o tráfego em categorias de ciclo de vida (novos, retornando, ressuscitados e dormentes) SO I CAN agir preventivamente contra o churn WITHOUT analisar bases brutas.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Evento principal de ativação; intervalo de recorrência | Gráfico de barras empilhadas com saldo líquido de usuários; evolução temporal das categorias | Visão imediata do balanço entre aquisição, retenção e atrito de usuários. |

- **Gaps Identificados**: 1. Nenhum gap crítico identificado.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-014-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-014-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-014-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-014-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-014-motion.gif` — `NOT_EXECUTED`

---

#### PV-015 — Galeria e Gerenciamento de Dashboards
- **Rota**: `/dashboards`
- **Superfície**: Product Analytics
- **Template**: `<Explorer />`
- **Ator Principal**: `demo-growth-lead`
- **Atores de Apoio**: `demo-executive-sponsor`, `demo-platform-admin`
- **JTBD**: `WHEN consolido relatórios para minha equipe I WANT TO agrupar múltiplos insights em dashboards customizados com filtros sincronizados SO I CAN apresentar um painel executivo unificado WITHOUT duplicar consultas.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Lista de insights salvos; disposição dos cards em grid; filtro global de data e cohort | Dashboard renderizado com grid responsivo; opções de compartilhamento seguro; atualização em tempo real | Painel completo pronto para apresentações e acompanhamento operacional diário. |

- **Gaps Identificados**: 1. Grid de dashboard deve se reorganizar automaticamente em janelas estreitas.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-015-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-015-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-015-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-015-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-015-motion.gif` — `NOT_EXECUTED`

---

#### PV-016 — HogQL SQL Explorer
- **Rota**: `/sql`
- **Superfície**: Product Analytics & Data
- **Template**: `<Editor />`
- **Ator Principal**: `demo-data-engineer`
- **Atores de Apoio**: `demo-product-engineer`
- **JTBD**: `WHEN preciso de análises customizadas não suportadas por interfaces gráficas I WANT TO escrever consultas SQL diretas usando HogQL sobre a tabela de eventos e tabelas do warehouse SO I CAN extrair respostas granulares WITHOUT exportar dados para ferramentas externas.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Instrução SQL HogQL; execução com atalho Ctrl+Enter | Tabela de resultados com tipos de dados; tempo de execução e bytes lidos; gráfico derivado opcional | Execução rápida e segura com autocomplete inteligente de propriedades e eventos. |

- **Gaps Identificados**: 1. Autocomplete deve respeitar o schema do projeto sem latência perceptível.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-016-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-016-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-016-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-016-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-016-motion.gif` — `NOT_EXECUTED`

---

### Onda 2: Session Replay & Replay Vision (PV-017..PV-023)

---

#### PV-017 — Visão Geral de Session Replay
- **Rota**: `/session-replay`
- **Superfície**: Session Replay
- **Template**: `<Reader />`
- **Ator Principal**: `demo-support-specialist`
- **Atores de Apoio**: `demo-product-engineer`, `demo-security-reviewer`
- **JTBD**: `WHEN quero entender a proposta do Session Replay I WANT TO explorar a visão geral com carrossel interativo de casos de uso SO I CAN visualizar como gravações com mascaramento de PII ajudam no diagnóstico de bugs WITHOUT comprometer privacidade.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Navegação pelos tópicos do menu lateral; interação com o carrossel de slides | Apresentação de recursos de gravação de tela; exemplos visuais de mascaramento; depoimentos e métricas | Compreensão total dos diferenciais de performance e segurança do player do PostHog. |

- **Gaps Identificados**: 1. Carrossel usa `CarouselSlide` com layout stack/float documentado em README.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-017-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-017-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-017-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-017-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-017-motion.gif` — `NOT_EXECUTED`

---

#### PV-018 — Player de Gravação de Sessão e Timeline
- **Rota**: `/session-replay/player`
- **Superfície**: Session Replay
- **Template**: `<MediaPlayer />`
- **Ator Principal**: `demo-support-specialist`
- **Atores de Apoio**: `demo-product-engineer`
- **JTBD**: `WHEN reproduzo uma sessão de usuário I WANT TO assistir ao replay em canvas interativo com velocidade variável e pular inatividade SO I CAN ver exatamente o que o usuário vivenciou no momento do erro WITHOUT perder tempo com pausas ociosas.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Play/Pause; ajuste de velocidade; toggle 'Pular Inatividade' | Reconstituição fiel do DOM em iframe protegido; timeline com marcadores de cliques e erros | Reprodução suave do comportamento do usuário com privacidade preservada. |

- **Gaps Identificados**: 1. Iframe do player exige isolamento estrito de sandbox para evitar execução de scripts reais.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-018-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-018-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-018-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-018-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-018-motion.gif` — `NOT_EXECUTED`

---

#### PV-019 — Mapas de Calor (Heatmaps)
- **Rota**: `/heatmaps`
- **Superfície**: Session Replay & Web
- **Template**: `<Reader />`
- **Ator Principal**: `demo-growth-lead`
- **Atores de Apoio**: `demo-product-engineer`
- **JTBD**: `WHEN analiso a usabilidade de uma página I WANT TO sobrepor mapas de calor de cliques, rolagem e movimento do mouse diretamente sobre a interface SO I CAN saber quais elementos chamam mais atenção WITHOUT precisar assistir a centenas de replays individuais.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| URL da página alvo; filtro de período e dispositivo; tipo de heatmap | Sobreposição visual de mapa de calor colorido; percentual de profundidade de scroll; contagem de cliques | Diagnóstico imediato de elementos ignorados ou pontos de distração visual. |

- **Gaps Identificados**: 1. Compatibilidade com layouts dinâmicos e SPAs requer sincronização de seletores DOM.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-019-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-019-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-019-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-019-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-019-motion.gif` — `NOT_EXECUTED`

---

#### PV-020 — Inspetor de Console da Sessão
- **Rota**: `/session-replay/console`
- **Superfície**: Session Replay
- **Template**: Session Drawer
- **Ator Principal**: `demo-product-engineer`
- **Atores de Apoio**: `demo-support-specialist`
- **JTBD**: `WHEN investigo um erro durante o replay I WANT TO abrir a gaveta de logs do console sincronizada com o vídeo SO I CAN correlacionar a ação visual com mensagens de erro, avisos e logs de depuração do JavaScript WITHOUT abrir ferramentas externas.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Clique na aba 'Console' no player; filtro por severidade | Lista de logs com timestamp sincronizado; stacktrace expansível; destaque no momento exato do erro | Localização precisa do erro no código fonte associado ao momento da reprodução. |

- **Gaps Identificados**: 1. Logs volumosos devem possuir virtualização para evitar consumo excessivo de memória.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-020-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-020-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-020-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-020-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-020-motion.gif` — `NOT_EXECUTED`

---

#### PV-021 — Inspetor de Rede e Requisições HTTP
- **Rota**: `/session-replay/network`
- **Superfície**: Session Replay
- **Template**: Session Drawer
- **Ator Principal**: `demo-product-engineer`
- **Atores de Apoio**: `demo-support-specialist`
- **JTBD**: `WHEN depuro uma falha de API durante o replay I WANT TO inspecionar a cascata de requisições de rede (método, status HTTP, duração) SO I CAN verificar se uma resposta 500 ou timeout causou o problema do usuário WITHOUT pedir logs ao cliente.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Clique na aba 'Network' no player; filtro por código de status | Cascata de requisições (waterfall); cabeçalhos sanitizados; tempo de resposta em ms | Comprovação inequívoca se o erro partiu do backend ou do frontend. |

- **Gaps Identificados**: 1. Payloads sensíveis de request/response devem ser redigidos por padrão.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-021-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-021-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-021-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-021-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-021-motion.gif` — `NOT_EXECUTED`

---

#### PV-022 — Replay Vision e Detecção Inteligente de Frustração
- **Rota**: `/replay-vision`
- **Superfície**: Session Replay & AI
- **Template**: `<Presentation />`
- **Ator Principal**: `demo-product-engineer`
- **Atores de Apoio**: `demo-growth-lead`
- **JTBD**: `WHEN quero encontrar sessões com problemas automaticamente I WANT TO utilizar modelos de visão computacional e heurísticas que detectam rage clicks, dead clicks e loops de frustração SO I CAN priorizar os piores gargalos WITHOUT assistir a gravações aleatórias.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Filtro de flag 'Rage Clicks' ou 'Frustrated Users'; seleção de severidade | Lista de gravações pontuadas por nível de frustração; clips destacados com o momento do atrito | Foco imediato nas sessões que realmente demandam correção de produto. |

- **Gaps Identificados**: 1. Modelos de IA requerem amostragem balanceada para evitar falsos positivos.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-022-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-022-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-022-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-022-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-022-motion.gif` — `NOT_EXECUTED`

---

#### PV-023 — Compartilhamento Seguro de Gravações
- **Rota**: `/session-replay/sharing`
- **Superfície**: Session Replay & Colaboração
- **Template**: Share Modal
- **Ator Principal**: `demo-support-specialist`
- **Atores de Apoio**: `demo-product-engineer`, `demo-security-reviewer`
- **JTBD**: `WHEN compartilho uma evidência com o time de engenharia I WANT TO gerar um link protegido por autenticação com timestamp exato do incidente SO I CAN acelerar o ciclo de correção WITHOUT vazar dados para pessoas não autorizadas.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Clique em 'Share'; opção de incluir timestamp; definição de expiração | URL segura gerada para a área de transferência; confirmação visual de cópia | O colega de equipe abre o link e cai exatamente no segundo do vídeo onde o bug acontece. |

- **Gaps Identificados**: 1. Links públicos devem ser desabilitados por padrão em organizações corporativas.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-023-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-023-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-023-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-023-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-023-motion.gif` — `NOT_EXECUTED`

---

### Onda 3: Feature Flags, Rollouts & Experiments (PV-024..PV-030)

---

#### PV-024 — Visão Geral e Catálogo de Feature Flags
- **Rota**: `/feature-flags`
- **Superfície**: Feature Flags
- **Template**: `<Explorer />`
- **Ator Principal**: `demo-product-engineer`
- **Atores de Apoio**: `demo-growth-lead`
- **JTBD**: `WHEN gerencio lançamentos de novas funcionalidades I WANT TO visualizar a lista de todas as Feature Flags, seu estado ativo/inativo e percentual de liberação SO I CAN manter governança sobre o código em produção WITHOUT deploys arriscados.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Busca por chave de flag; filtro por status | Tabela com chaves de flags, criador, taxa de rollout e data de atualização | Visão transparente de todas as ramificações de features ativas no sistema. |

- **Gaps Identificados**: 1. Flags obsoletas devem exibir aviso de sugestão de arquivamento.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-024-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-024-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-024-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-024-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-024-motion.gif` — `NOT_EXECUTED`

---

#### PV-025 — Criação e Configuração de Feature Flag
- **Rota**: `/feature-flags/create`
- **Superfície**: Feature Flags
- **Template**: `<Editor />`
- **Ator Principal**: `demo-product-engineer`
- **Atores de Apoio**: `demo-growth-lead`
- **JTBD**: `WHEN crio uma nova flag no PostHog I WANT TO definir regras de segmentação por propriedade de usuário, cohort e porcentagem de liberação gradual SO I CAN fazer canary releases controlados WITHOUT expor 100% dos usuários a código novo.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Chave única; descrição; critérios de rollout | Flag criada e propagada para o endpoint /decide/; snippet de código gerado | A flag entra em vigor imediatamente e começa a avaliar requisições de clientes. |

- **Gaps Identificados**: 1. Validação de sintaxe da chave para evitar caracteres inválidos.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-025-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-025-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-025-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-025-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-025-motion.gif` — `NOT_EXECUTED`

---

#### PV-026 — Configuração de Variantes e Payloads JSON
- **Rota**: `/feature-flags/variants`
- **Superfície**: Feature Flags
- **Template**: `<Editor />`
- **Ator Principal**: `demo-product-engineer`
- **Atores de Apoio**: `demo-growth-lead`
- **JTBD**: `WHEN implemento múltiplas opções de uma mesma feature I WANT TO cadastrar variantes nomeadas com pesos percentuais e payloads JSON customizados SO I CAN parametrizar o comportamento da interface pelo servidor WITHOUT novo deploy.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Nome das variantes; pesos relativos; payload JSON | Matriz de variantes configurada; validação sintática do JSON em tempo real | SDK recebe a variante avaliada juntamente com o payload JSON parseado. |

- **Gaps Identificados**: 1. Editor de JSON deve acusar erros de sintaxe antes de salvar.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-026-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-026-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-026-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-026-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-026-motion.gif` — `NOT_EXECUTED`

---

#### PV-027 — Gerenciamento de Recursos em Acesso Antecipado
- **Rota**: `/early-access-features`
- **Superfície**: Feature Flags & Growth
- **Template**: `<Explorer />`
- **Ator Principal**: `demo-growth-lead`
- **Atores de Apoio**: `demo-product-engineer`
- **JTBD**: `WHEN quero que usuários escolham participar de testes beta I WANT TO expor flags como programas de 'Early Access' com opt-in na UI SO I CAN coletar feedback de early adopters WITHOUT gerenciar listas manuais de e-mails.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Seleção de flag existente; título público e descrição; regra de opt-in | Card de recurso em Early Access publicado; contagem de inscritos | Usuários podem ativar/desativar o recurso diretamente nas preferências da aplicação. |

- **Gaps Identificados**: 1. Sincronização com componentes de UI clientes via SDK.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-027-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-027-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-027-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-027-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-027-motion.gif` — `NOT_EXECUTED`

---

#### PV-028 — Visão Geral de Experimentos e Testes A/B
- **Rota**: `/experiments`
- **Superfície**: Experiments
- **Template**: `<Explorer />`
- **Ator Principal**: `demo-growth-lead`
- **Atores de Apoio**: `demo-executive-sponsor`
- **JTBD**: `WHEN quero validar hipóteses de melhoria de produto I WANT TO consultar todos os testes A/B ativos, pausados e concluídos SO I CAN acompanhar o progresso de validação estatística WITHOUT ferramentas desconectadas de experimentação.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Busca de experimentos; filtro por status | Grid de experimentos com métrica principal, participantes e probabilidade | Visão consolidada do programa de experimentação da empresa. |

- **Gaps Identificados**: 1. Indicação visual clara de significância estatística alcançada.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-028-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-028-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-028-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-028-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-028-motion.gif` — `NOT_EXECUTED`

---

#### PV-029 — Configuração de Experimento e Métrica Primária
- **Rota**: `/experiments/create`
- **Superfície**: Experiments
- **Template**: `<Editor />`
- **Ator Principal**: `demo-growth-lead`
- **Atores de Apoio**: `demo-product-engineer`
- **JTBD**: `WHEN estruturo um novo teste A/B I WANT TO definir variantes, meta primária de conversão, métricas secundárias e tamanho amostral recomendado SO I CAN executar um teste metodologicamente rigoroso WITHOUT viés estatístico.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Nome do teste e hipótese; métrica de conversão; MDE | Calculadora amostral integrada; feature flag subjacente criada | Experimento lançado com distribuição uniforme e rastreamento rigoroso. |

- **Gaps Identificados**: 1. Calculadora de tamanho de amostra deve considerar o tráfego histórico do evento.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-029-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-029-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-029-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-029-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-029-motion.gif` — `NOT_EXECUTED`

---

#### PV-030 — Relatório de Resultados e Significância Bayesiana
- **Rota**: `/experiments/results`
- **Superfície**: Experiments
- **Template**: `<Reader />`
- **Ator Principal**: `demo-growth-lead`
- **Atores de Apoio**: `demo-executive-sponsor`, `demo-product-engineer`
- **JTBD**: `WHEN avalio o desfecho de um experimento I WANT TO analisar a probabilidade de vitória de cada variante, intervalo de credibilidade e impacto percentual SO I CAN tomar uma decisão segura de lançar ou cancelar a variante WITHOUT dúvidas estatísticas.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Seleção do experimento concluído; quebra por segmento | Gráfico de probabilidade Bayesiana; tabela de conversão; botão 'Rollout 100%' | Decisão de produto fundamentada em evidências quantitativas com 1 clique para implementação. |

- **Gaps Identificados**: 1. Aviso de 'amostra insuficiente' caso a significância não atinja o limiar seguro.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-030-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-030-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-030-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-030-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-030-motion.gif` — `NOT_EXECUTED`

---

### Onda 4: Customer Data Platform & Pipelines (PV-031..PV-038)

---

#### PV-031 — Visão Geral de Customer Data Platform (CDP)
- **Rota**: `/cdp`
- **Superfície**: Customer Data Platform
- **Template**: `<Reader />`
- **Ator Principal**: `demo-data-engineer`
- **Atores de Apoio**: `demo-product-engineer`
- **JTBD**: `WHEN preciso conectar dados de ponta a ponta I WANT TO explorar a arquitetura da Customer Data Platform do PostHog SO I CAN entender como fontes, transformações e destinos se conectam em tempo real WITHOUT pipelines frágeis de terceiros.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Navegação pelas seções do CDP; consulta de fluxos de dados | Diagrama visual da esteira de dados; lista de integrações; docs de Hog Functions | Visão unificada da esteira de dados de eventos do PostHog. |

- **Gaps Identificados**: 1. Nenhum gap crítico identificado.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-031-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-031-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-031-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-031-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-031-motion.gif` — `NOT_EXECUTED`

---

#### PV-032 — Catálogo de Fontes de Dados e SDKs
- **Rota**: `/docs/cdp/sources`
- **Superfície**: CDP Sources
- **Template**: `<Reader />`
- **Ator Principal**: `demo-product-engineer`
- **Atores de Apoio**: `demo-data-engineer`
- **JTBD**: `WHEN vou instrumentar uma nova aplicação I WANT TO consultar o catálogo de SDKs oficiais (JavaScript, Python, Node, iOS, Android, React Native, Go) SO I CAN instalar a biblioteca correta com configuração recomendada WITHOUT erros de inicialização.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Seleção da linguagem/framework; cópia do comando de instalação | Instruções passo a passo de instalação; snippets com chave pública; exemplos | SDK integrado e primeiro evento disparado em menos de 5 minutos. |

- **Gaps Identificados**: 1. Snippets devem conter placeholders claros para `[PROJECT_API_KEY]`.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-032-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-032-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-032-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-032-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-032-motion.gif` — `NOT_EXECUTED`

---

#### PV-033 — Gerenciamento de Destinos em Tempo Real
- **Rota**: `/docs/cdp/destinations`
- **Superfície**: CDP Destinations
- **Template**: `<Reader />`
- **Ator Principal**: `demo-data-engineer`
- **Atores de Apoio**: `demo-growth-lead`, `demo-cdp-webhook-sink`
- **JTBD**: `WHEN eventos acontecem na aplicação I WANT TO encaminhar dados filtrados instantaneamente para sistemas externos como Slack, HubSpot, Customer.io ou webhooks HTTP SO I CAN manter ferramentas de marketing sincronizadas WITHOUT criar integrações proprietárias.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Seleção do destino; configuração de filtros; URL de webhook | Destino ativo; painel de métricas de entrega em tempo real; logs de eventos | Eventos entregues com latência submétrica e garantia de retry com backoff. |

- **Gaps Identificados**: 1. Segredos de webhook não devem ser exibidos após salvos na interface.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-033-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-033-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-033-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-033-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-033-motion.gif` — `NOT_EXECUTED`

---

#### PV-034 — Editor de Transformações Hog Functions
- **Rota**: `/docs/cdp/hog-functions`
- **Superfície**: CDP Transformations
- **Template**: `<Editor />`
- **Ator Principal**: `demo-data-engineer`
- **Atores de Apoio**: `demo-product-engineer`, `demo-hog-function-runtime`
- **JTBD**: `WHEN preciso transformar ou enriquecer eventos no fluxo de ingestão I WANT TO escrever pequenas funções em código Hog com tipagem e testes integrados SO I CAN limpar dados e anonimizar IPs antes da persistência WITHOUT manter serviços serverless externos.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Código fonte Hog; payload de evento de teste | Console com logs de depuração; validação sintática; evento transformado | Função compilada para bytecode e executada em sandbox isolado. |

- **Gaps Identificados**: 1. Erros de sintaxe em tempo de edição devem apontar número de linha exato.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-034-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-034-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-034-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-034-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-034-motion.gif` — `NOT_EXECUTED`

---

#### PV-035 — Criação de Hog Functions com PostHog AI
- **Rota**: `/docs/cdp/hog-functions-ai`
- **Superfície**: CDP & AI
- **Template**: `<Reader />`
- **Ator Principal**: `demo-product-engineer`
- **Atores de Apoio**: `demo-ai-engineer`
- **JTBD**: `WHEN quero automatizar a criação de transformações I WANT TO descrever a regra em linguagem natural para o PostHog AI gerar o código Hog pronto SO I CAN economizar tempo de desenvolvimento WITHOUT consultar a gramática da linguagem manualmente.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Prompt em linguagem natural; clique em 'Gerar Função' | Código Hog gerado com comentários; casos de teste sintéticos | Código gerado com precisão e pronto para teste em sandbox. |

- **Gaps Identificados**: 1. Exigência de revisão humana antes da ativação em produção.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-035-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-035-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-035-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-035-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-035-motion.gif` — `NOT_EXECUTED`

---

#### PV-036 — Configuração de Webhooks de Entrada
- **Rota**: `/docs/cdp/sources/incoming-webhooks`
- **Superfície**: CDP Sources
- **Template**: `<Reader />`
- **Ator Principal**: `demo-data-engineer`
- **Atores de Apoio**: `demo-product-engineer`
- **JTBD**: `WHEN recebo eventos de servidores de terceiros (Stripe, GitHub, Shopify) I WANT TO configurar uma URL HTTPS de webhook no PostHog que valida e ingere os payloads automaticamente SO I CAN correlacionar eventos de backend com o comportamento do frontend WITHOUT criar proxies intermediários.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Nome do webhook; mapeamento de propriedades; segredo de validação | Endpoint HTTPS gerado exclusivo; log das últimas requisições | Ingestão imediata com conversão do payload JSON em eventos estruturados. |

- **Gaps Identificados**: 1. Rate limiting agressivo deve ser configurável para picos legítimos.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-036-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-036-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-036-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-036-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-036-motion.gif` — `NOT_EXECUTED`

---

#### PV-037 — Integração com Servidor Model Context Protocol (MCP)
- **Rota**: `/docs/cdp/surfaces/mcp`
- **Superfície**: CDP & AI Surfaces
- **Template**: `<Reader />`
- **Ator Principal**: `demo-ai-engineer`
- **Atores de Apoio**: `demo-product-engineer`, `demo-mcp-agent`
- **JTBD**: `WHEN utilizo assistentes de IA (Claude, Cursor, Antigravity) no meu fluxo de desenvolvimento I WANT TO conectar meu ambiente ao servidor MCP do PostHog SO I CAN consultar dados de produto, rodar queries HogQL e verificar documentações diretamente pelo editor WITHOUT trocar de contexto.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Configuração do `mcp_config.json`; token pessoal | Ferramentas MCP registradas no cliente de IA; logs de chamadas | Interação fluida com o PostHog a partir da IDE com validação de escopo. |

- **Gaps Identificados**: 1. Tokens devem possuir escopos granulares de leitura/escrita.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-037-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-037-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-037-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-037-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-037-motion.gif` — `NOT_EXECUTED`

---

#### PV-038 — Integração e Telemetria via PostHog Desktop
- **Rota**: `/docs/cdp/surfaces/desktop`
- **Superfície**: CDP Surfaces
- **Template**: `<Reader />`
- **Ator Principal**: `demo-product-engineer`
- **Atores de Apoio**: `demo-platform-admin`
- **JTBD**: `WHEN opero aplicativos de desktop ou arquiteturas locais I WANT TO utilizar o client PostHog Desktop com suporte a buffer local e comunicação IPC segura SO I CAN coletar telemetria confiável em aplicações offline-first WITHOUT perda de eventos em reinicializações.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Instalação de `@posthog/desktop`; configuração de persistência local | Guia arquitetural de implementação; instruções de IPC | Telemetria robusta em ambientes desktop (Electron, Tauri, React Native). |

- **Gaps Identificados**: 1. Nenhum gap crítico identificado.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-038-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-038-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-038-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-038-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-038-motion.gif` — `NOT_EXECUTED`

---

### Onda 5: Data Warehouse & Context (PV-039..PV-044)

---

#### PV-039 — Visão Geral de Data Warehouse Unificado
- **Rota**: `/data-warehouse`
- **Superfície**: Data Warehouse
- **Template**: `<Presentation />`
- **Ator Principal**: `demo-data-engineer`
- **Atores de Apoio**: `demo-growth-lead`, `demo-executive-sponsor`
- **JTBD**: `WHEN preciso unir dados analíticos com dados de negócio I WANT TO entender a capacidade do Data Warehouse do PostHog de consultar dados internos e externos em uma única camada SQL SO I CAN dispensar a manutenção de data warehouses caros e complexos WITHOUT perder flexibilidade analítica.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Navegação pelos slides; consulta de diagramas | Apresentação visual da arquitetura; exemplos de queries cruzadas | Compreensão da economia de custos e simplificação da stack de dados. |

- **Gaps Identificados**: 1. Nenhum gap crítico identificado.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-039-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-039-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-039-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-039-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-039-motion.gif` — `NOT_EXECUTED`

---

#### PV-040 — Context Warehouse e Modelagem Semântica
- **Rota**: `/context-warehouse`
- **Superfície**: Data Warehouse
- **Template**: `<Reader />`
- **Ator Principal**: `demo-data-engineer`
- **Atores de Apoio**: `demo-ai-engineer`
- **JTBD**: `WHEN preparo dados para agentes de IA e analistas I WANT TO navegar pela documentação e tabelas do Context Warehouse usando TreeMenu lateral SO I CAN enriquecer dados de eventos com entidades semânticas de clientes WITHOUT retrabalho de modelagem.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Navegação pela árvore de menu lateral; consulta de definições | Documentação técnica com exemplos de relacionamentos; estrutura de tabelas | Modelo semântico claro para consumo por humanos e agentes de IA. |

- **Gaps Identificados**: 1. LeftSidebarContent preenchido via `<TreeMenu />`.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-040-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-040-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-040-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-040-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-040-motion.gif` — `NOT_EXECUTED`

---

#### PV-041 — Configuração de Conectores Externos (S3, BigQuery, Snowflake, Stripe)
- **Rota**: `/data-warehouse/connectors`
- **Superfície**: Data Warehouse
- **Template**: `<Editor />`
- **Ator Principal**: `demo-data-engineer`
- **Atores de Apoio**: `demo-data-warehouse-connector`
- **JTBD**: `WHEN quero cruzar dados de receita ou produção I WANT TO conectar meu bucket S3, Snowflake, BigQuery ou conta Stripe diretamente no PostHog SO I CAN sincronizar tabelas externas automaticamente WITHOUT escrever scripts ETL customizados.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Credenciais da fonte externa (sanitizadas); filtro de tabelas | Conexão testada com sucesso; mapeamento de colunas e tipos | Fonte externa conectada e agendamento de sincronização ativado. |

- **Gaps Identificados**: 1. Credenciais devem ser testadas em dry-run antes da ativação.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-041-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-041-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-041-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-041-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-041-motion.gif` — `NOT_EXECUTED`

---

#### PV-042 — Modelagem de Visões e Joins de Eventos
- **Rota**: `/data-warehouse/views`
- **Superfície**: Data Warehouse
- **Template**: `<Editor />`
- **Ator Principal**: `demo-data-engineer`
- **Atores de Apoio**: `demo-growth-lead`
- **JTBD**: `WHEN crio métricas avançadas I WANT TO salvar consultas SQL como Visões Virtuais e realizar JOINs entre tabelas externas e a tabela de eventos do PostHog SO I CAN disponibilizar essas entidades calculadas para uso em funis e insights gráficos WITHOUT duplicação de dados.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Definição SQL da visão com JOINs; nome da visão | Visão virtual salva e disponível no construtor de insights | Analistas podem usar a visão no construtor de insights visual sem tocar em SQL. |

- **Gaps Identificados**: 1. Validação de desempenho de JOINs para alertar sobre escaneamento excessivo.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-042-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-042-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-042-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-042-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-042-motion.gif` — `NOT_EXECUTED`

---

#### PV-043 — Histórico de Sincronizações e Logs de Ingestão
- **Rota**: `/data-warehouse/sync-history`
- **Superfície**: Data Warehouse
- **Template**: `<Explorer />`
- **Ator Principal**: `demo-data-engineer`
- **Atores de Apoio**: `demo-platform-admin`
- **JTBD**: `WHEN monitoro a saúde dos pipelines de dados I WANT TO auditar o histórico de sincronização de cada conector com contagem de linhas, bytes transferidos e duração SO I CAN agir rapidamente em caso de falhas de schema ou timeout WITHOUT impacto nos relatórios.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Filtro por conector; filtro por status de execução | Tabela com execuções históricas; logs detalhados de erros | Visibilidade total do estado de atualização dos dados externos. |

- **Gaps Identificados**: 1. Logs de erro devem indicar a linha/coluna exata do dado com falha.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-043-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-043-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-043-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-043-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-043-motion.gif` — `NOT_EXECUTED`

---

#### PV-044 — Exportações em Batch (Batch Exports)
- **Rota**: `/data-warehouse/batch-exports`
- **Superfície**: Data Warehouse
- **Template**: `<Editor />`
- **Ator Principal**: `demo-data-engineer`
- **Atores de Apoio**: `demo-security-reviewer`
- **JTBD**: `WHEN mantenho cópias de segurança ou arquivos históricos I WANT TO configurar exportações em lote periódicas de todos os eventos para S3 ou GCS em formato Parquet particionado SO I CAN garantir retenção de longo prazo e alimentar data lakes corporativos WITHOUT sobrecarregar a infraestrutura.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Destino de armazenamento; intervalo de exportação; compressão | Pipeline de batch export ativo com métricas de bytes enviados | Exportação contínua, idempotente e particionada por data. |

- **Gaps Identificados**: 1. Políticas de criptografia em repouso (SSE-KMS) devem ser validadas.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-044-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-044-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-044-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-044-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-044-motion.gif` — `NOT_EXECUTED`

---

### Onda 6: AI Observability & Error Tracking (PV-045..PV-051)

---

#### PV-045 — Visão Geral de AI Observability & LLM Analytics
- **Rota**: `/ai-observability`
- **Superfície**: AI Observability
- **Template**: `<Presentation />`
- **Ator Principal**: `demo-ai-engineer`
- **Atores de Apoio**: `demo-product-engineer`, `demo-executive-sponsor`
- **JTBD**: `WHEN desenvolvo produtos baseados em IA generativa I WANT TO entender a suite de observabilidade de LLMs do PostHog SO I CAN rastrear custos de tokens, latência de inferência, qualidade de prompts e falhas de agentes WITHOUT integrar ferramentas separadas de LLM monitoring.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Navegação pelos slides; exemplos de traces OpenAI e Anthropic | Apresentação interativa com métricas de IA; visão geral de spans | Clareza sobre o monitoramento unificado de telemetria de produto e IA. |

- **Gaps Identificados**: 1. Nenhum gap crítico identificado.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-045-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-045-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-045-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-045-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-045-motion.gif` — `NOT_EXECUTED`

---

#### PV-046 — Visualização de Traces e Spans de Chamadas LLM
- **Rota**: `/ai-observability/traces`
- **Superfície**: AI Observability
- **Template**: `<Reader />`
- **Ator Principal**: `demo-ai-engineer`
- **Atores de Apoio**: `demo-product-engineer`
- **JTBD**: `WHEN depuro uma cadeia complexa de agentes ou chamadas RAG I WANT TO visualizar a árvore hierárquica de spans de execução com tempo de resposta, parâmetros e tokens de cada etapa SO I CAN identificar gargalos de latência e alucinações WITHOUT inserir logs manuais de depuração.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| ID do trace de inferência; filtro por modelo | Visualização em árvore de spans de execução; payload de entrada/saída | Depuração ponta a ponta da execução do agente de IA com contexto total. |

- **Gaps Identificados**: 1. Traces muito profundos devem possuir recolhimento automático de nós secundários.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-046-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-046-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-046-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-046-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-046-motion.gif` — `NOT_EXECUTED`

---

#### PV-047 — Prompt Management e Versionamento de Templates
- **Rota**: `/ai-observability/prompts`
- **Superfície**: AI Observability
- **Template**: `<Editor />`
- **Ator Principal**: `demo-ai-engineer`
- **Atores de Apoio**: `demo-growth-lead`
- **JTBD**: `WHEN itero sobre instruções de modelos de IA I WANT TO versionar templates de prompt na interface, testar variantes e disparar rollouts controlados SO I CAN melhorar a qualidade das respostas WITHOUT alterar o código fonte da aplicação.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Template de prompt com variáveis; modelo e temperatura | Versão do prompt salva para o SDK; histórico de alterações com diff | Governança ágil de prompts com capacidade de rollback imediato. |

- **Gaps Identificados**: 1. Suporte a testes A/B de prompts integrado ao módulo de experimentos.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-047-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-047-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-047-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-047-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-047-motion.gif` — `NOT_EXECUTED`

---

#### PV-048 — Análise de Custos e Consumo de Tokens
- **Rota**: `/ai-observability/costs`
- **Superfície**: AI Observability
- **Template**: `<Explorer />`
- **Ator Principal**: `demo-ai-engineer`
- **Atores de Apoio**: `demo-executive-sponsor`, `demo-platform-admin`
- **JTBD**: `WHEN monitoro as despesas de infraestrutura de IA I WANT TO visualizar o consumo acumulado de tokens de entrada e saída discriminado por modelo, usuário e funcionalidade SO I CAN evitar custos descontrolados de API WITHOUT limitar o crescimento do produto.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Intervalo temporal; quebra por modelo e usuário | Gráfico de custos em dólares; média de custo por sessão; alertas | Previsibilidade financeira total sobre a operação de IA. |

- **Gaps Identificados**: 1. Tabela de preços de tokens deve ser atualizada conforme os anúncios dos provedores.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-048-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-048-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-048-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-048-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-048-motion.gif` — `NOT_EXECUTED`

---

#### PV-049 — Visão Geral e Painel de Rastreamento de Erros
- **Rota**: `/error-tracking`
- **Superfície**: Error Tracking
- **Template**: `<Explorer />`
- **Ator Principal**: `demo-product-engineer`
- **Atores de Apoio**: `demo-support-specialist`
- **JTBD**: `WHEN monitoro a estabilidade da aplicação I WANT TO visualizar erros agrupados por impressão digital única com contagem de ocorrências e usuários afetados SO I CAN priorizar os bugs mais críticos WITHOUT ser inundado por alertas duplicados.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Filtro por ambiente; ordenação por 'Usuários Afetados' | Lista agregada de erros com status; gráfico de frequência | Fila de erros priorizada com visibilidade do impacto real em clientes. |

- **Gaps Identificados**: 1. Agrupamento inteligente de stacktraces semelhantes.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-049-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-049-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-049-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-049-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-049-motion.gif` — `NOT_EXECUTED`

---

#### PV-050 — Detalhe de Exceção com Stacktrace e Source Maps
- **Rota**: `/error-tracking/issue-detail`
- **Superfície**: Error Tracking
- **Template**: `<Editor />`
- **Ator Principal**: `demo-product-engineer`
- **Atores de Apoio**: `demo-support-specialist`
- **JTBD**: `WHEN analiso um erro específico I WANT TO visualizar o stacktrace desofuscado com source maps, variáveis de contexto e link direto para o Session Replay da ocorrência SO I CAN identificar a linha exata do código com defeito WITHOUT reproduzir o bug manualmente.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Clique no erro; upload de source maps | Código desofuscado em destaque; link para Session Replay; device info | Causa raiz identificada em segundos com contexto visual completo. |

- **Gaps Identificados**: 1. Upload de source maps requer chave de release compatível.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-050-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-050-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-050-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-050-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-050-motion.gif` — `NOT_EXECUTED`

---

#### PV-051 — Painel de Logs em Tempo Real
- **Rota**: `/logs`
- **Superfície**: Logs & Observability
- **Template**: `<Explorer />`
- **Ator Principal**: `demo-platform-admin`
- **Atores de Apoio**: `demo-product-engineer`
- **JTBD**: `WHEN investigo um incidente em produção I WANT TO consultar o streaming de logs estruturados em tempo real com filtros por serviço, severidade e consulta HogQL SO I CAN entender a sequência exata de eventos de sistema WITHOUT acessar servidores via SSH.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Consulta de busca; seleção de janela temporal e severidade | Tabela de logs com streaming em tempo real; visualização JSON | Diagnóstico rápido de problemas de infraestrutura e aplicação. |

- **Gaps Identificados**: 1. Virtualização de linhas no streaming para evitar consumo excessivo de CPU.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-051-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-051-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-051-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-051-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-051-motion.gif` — `NOT_EXECUTED`

---

### Onda 7: Surveys, Web Analytics & Growth Workflows (PV-052..PV-057)

---

#### PV-052 — Visão Geral de Pesquisas na Aplicação (Surveys)
- **Rota**: `/surveys`
- **Superfície**: Surveys
- **Template**: `<Presentation />`
- **Ator Principal**: `demo-growth-lead`
- **Atores de Apoio**: `demo-support-specialist`
- **JTBD**: `WHEN planejo coletar feedback de usuários I WANT TO conhecer os formatos de pesquisas in-app suportados (NPS, CSAT, formulários abertos) SO I CAN engajar usuários no momento certo WITHOUT ferramentas externas intrusivas.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Navegação pela apresentação; exemplos de layouts de popups | Apresentação de capacidades de pesquisas; exemplos de gatilhos | Compreensão de como disparar pesquisas baseadas em eventos e cohorts. |

- **Gaps Identificados**: 1. Nenhum gap crítico identificado.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-052-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-052-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-052-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-052-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-052-motion.gif` — `NOT_EXECUTED`

---

#### PV-053 — Configuração e Criação de Pesquisa In-App
- **Rota**: `/surveys/create`
- **Superfície**: Surveys
- **Template**: `<Editor />`
- **Ator Principal**: `demo-growth-lead`
- **Atores de Apoio**: `demo-product-engineer`
- **JTBD**: `WHEN crio uma nova pesquisa I WANT TO customizar o texto das perguntas, opções de resposta, posicionamento visual na tela e condições de disparo (ex: após 3 visualizações de página) SO I CAN coletar feedback contextualizado WITHOUT irritar o usuário.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Tipo de pesquisa; texto da pergunta; segmentação de público | Preview interativo da pesquisa na tela; pesquisa pronta para SDK | Pesquisa publicada que se integra organicamente ao design da aplicação cliente. |

- **Gaps Identificados**: 1. Preview em tempo real deve refletir o tema claro/escuro do cliente.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-053-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-053-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-053-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-053-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-053-motion.gif` — `NOT_EXECUTED`

---

#### PV-054 — Análise de Respostas de Pesquisa e Sentimento
- **Rota**: `/surveys/results`
- **Superfície**: Surveys
- **Template**: `<Reader />`
- **Ator Principal**: `demo-growth-lead`
- **Atores de Apoio**: `demo-support-specialist`, `demo-executive-sponsor`
- **JTBD**: `WHEN avalio o feedback coletado I WANT TO ver a pontuação calculada de NPS/CSAT, distribuição de notas e análise de sentimento em respostas de texto SO I CAN identificar temas recorrentes de satisfação e insatisfação WITHOUT ler manualmente centenas de respostas.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Seleção da pesquisa; filtro de notas (Promotores, Detratores) | Score consolidado de NPS; resumo de sentimentos com IA; tabela | Diagnóstico qualitativo e quantitativo imediato da satisfação do cliente. |

- **Gaps Identificados**: 1. Análise de sentimento requer IA configurada no projeto.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-054-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-054-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-054-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-054-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-054-motion.gif` — `NOT_EXECUTED`

---

#### PV-055 — Web Analytics Otimizado para Performance
- **Rota**: `/web-analytics`
- **Superfície**: Web Analytics
- **Template**: `<Reader />`
- **Ator Principal**: `demo-growth-lead`
- **Atores de Apoio**: `demo-executive-sponsor`
- **JTBD**: `WHEN acompanho métricas essenciais do site público I WANT TO utilizar um painel direto e ultra-rápido de Web Analytics (visitantes únicos, páginas mais vistas, canais de aquisição, países) SO I CAN ter visão instantânea do tráfego WITHOUT a lentidão e complexidade do Google Analytics.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Filtro de período; filtro por canal de marketing ou país | Cards de visitantes únicos, sessões e bounce rate; tabelas de páginas | Carregamento instantâneo das métricas de tráfego com privacidade por padrão. |

- **Gaps Identificados**: 1. Nenhum gap crítico identificado.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-055-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-055-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-055-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-055-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-055-motion.gif` — `NOT_EXECUTED`

---

#### PV-056 — Workflows e Automações de Eventos
- **Rota**: `/workflows`
- **Superfície**: Workflows & Automations
- **Template**: `<Reader />`
- **Ator Principal**: `demo-growth-lead`
- **Atores de Apoio**: `demo-product-engineer`
- **JTBD**: `WHEN ocorrem gatilhos de comportamento do usuário I WANT TO disparar sequências de automação (e-mails, mensagens in-app, webhooks) com regras condicionais SO I CAN reengajar usuários inativos automaticamente WITHOUT ferramentas separadas de automação de marketing.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Gatilho inicial de evento; passos sequenciais de ação | Fluxograma visual do workflow; status de execução em cada etapa | Automações orientadas a eventos operando com confiabilidade. |

- **Gaps Identificados**: 1. Editor visual de automações baseado em ReactFlow.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-056-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-056-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-056-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-056-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-056-motion.gif` — `NOT_EXECUTED`

---

#### PV-057 — Wizard Interativo de Vibe Check e Recomendação
- **Rota**: `/vibe-check`
- **Superfície**: Interactive Tools
- **Template**: `<Wizard />`
- **Ator Principal**: `anonymous-visitor`
- **Atores de Apoio**: `demo-product-engineer`
- **JTBD**: `WHEN avalio quais ferramentas da stack PostHog fazem sentido para meu projeto I WANT TO responder a um quiz interativo de perguntas curtas SO I CAN receber uma recomendação personalizada de produtos e estimativa de esforço WITHOUT navegar por dezenas de páginas.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Respostas de múltipla escolha nos passos; clique em 'Avançar' | Tela final com plano recomendado; lista de produtos ideais | Recomendação assertiva e lúdica que acelera o processo de decisão do usuário. |

- **Gaps Identificados**: 1. Wizard implementado em `src/pages/vibe-check/index.tsx` com navegação de slides.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-057-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-057-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-057-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-057-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-057-motion.gif` — `NOT_EXECUTED`

---

### Onda 8: Governança, Billing, Comunidade & Docs (PV-058..PV-065)

---

#### PV-058 — Calculadora Interativa de Faturamento e Preços
- **Rota**: `/pricing`
- **Superfície**: Billing & Pricing
- **Template**: Pricing Calculator
- **Ator Principal**: `anonymous-visitor`
- **Atores de Apoio**: `demo-executive-sponsor`, `demo-platform-admin`
- **JTBD**: `WHEN planejo o orçamento para contratação do PostHog I WANT TO ajustar controles deslizantes de volume para cada produto (eventos, replays, traces de IA) SO I CAN prever o custo exato mensal com tier gratuito aplicado WITHOUT surpresas de cobrança.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Sliders de volume de eventos e gravações; seleção de add-ons | Custo total mensal; detalhamento por produto; limite gratuito | Transparência radical de preços com cálculo determinístico em tempo real. |

- **Gaps Identificados**: 1. Cálculos de preço usam `pricingSliderLogic` sincronizado com dados GraphQL.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-058-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-058-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-058-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-058-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-058-motion.gif` — `NOT_EXECUTED`

---

#### PV-059 — Hub Central de Documentação Técnica
- **Rota**: `/docs`
- **Superfície**: Documentation
- **Template**: `<Reader />`
- **Ator Principal**: `demo-product-engineer`
- **Atores de Apoio**: `anonymous-visitor`, `demo-data-engineer`
- **JTBD**: `WHEN busco guias de implementação técnica e referências de API I WANT TO navegar pela documentação estruturada com busca instantânea, navegação de 3 colunas e exemplos de código SO I CAN resolver dúvidas de integração rapidamente WITHOUT bloqueios no desenvolvimento.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Busca por palavra-chave; seleção de artigo técnico | Artigo técnico formatado em Markdown; índice na coluna direita | Experiência de leitura densa, rápida e altamente informativa. |

- **Gaps Identificados**: 1. Navegação de 3 colunas gerenciada por `<ReaderView />`.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-059-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-059-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-059-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-059-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-059-motion.gif` — `NOT_EXECUTED`

---

#### PV-060 — Handbook da Empresa e Cultura Open Core
- **Rota**: `/handbook`
- **Superfície**: Handbook
- **Template**: `<Reader />`
- **Ator Principal**: `anonymous-visitor`
- **Atores de Apoio**: `demo-community-contributor`, `demo-executive-sponsor`
- **JTBD**: `WHEN quero entender como a PostHog opera internamente I WANT TO ler o handbook público que documenta estratégia, engenharia, cultura e compensação SO I CAN compreender a visão transparente de negócio WITHOUT segredos corporativos.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Navegação pelos capítulos do Handbook; consulta de páginas técnicas | Documentação organizacional aberta e auditável | Transparência radical sobre processos e padrões técnicos da organização. |

- **Gaps Identificados**: 1. Nenhum gap crítico identificado.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-060-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-060-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-060-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-060-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-060-motion.gif` — `NOT_EXECUTED`

---

#### PV-061 — Portal da Comunidade PostHog
- **Rota**: `/community`
- **Superfície**: Community
- **Template**: `<Explorer />`
- **Ator Principal**: `demo-community-contributor`
- **Atores de Apoio**: `anonymous-visitor`, `demo-product-engineer`
- **JTBD**: `WHEN quero interagir com outros usuários e engenheiros do PostHog I WANT TO acessar o hub da comunidade com perguntas em destaque, perfis de colaboradores e discussões ativas SO I CAN compartilhar conhecimento e aprender com o ecossistema WITHOUT isolamento.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Filtro de tópicos de discussão; busca de membros | Feed da comunidade com votos e respostas; badges de colaboradores | Engajamento colaborativo com a comunidade global de engenheiros de produto. |

- **Gaps Identificados**: 1. Nenhum gap crítico identificado.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-061-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-061-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-061-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-061-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-061-motion.gif` — `NOT_EXECUTED`

---

#### PV-062 — Fórum de Perguntas e Respostas Técnicas
- **Rota**: `/questions`
- **Superfície**: Community & Support
- **Template**: `<Inbox />`
- **Ator Principal**: `demo-community-contributor`
- **Atores de Apoio**: `demo-product-engineer`, `demo-support-specialist`
- **JTBD**: `WHEN encontro uma dúvida de implementação I WANT TO navegar pelas perguntas em um layout estilo Outlook com lista e painel de leitura SO I CAN encontrar respostas validadas ou publicar minha própria pergunta com código SO I CAN desbloquear meu trabalho WITHOUT esperar dias por suporte.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Navegação pela lista à esquerda; leitura no painel direito | Interface dividida em painéis; respostas com 'Solução Oficial' | Resolução rápida de problemas técnicos através do acervo comunitário. |

- **Gaps Identificados**: 1. Layout estilo Outlook construído sobre `<Inbox />`.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-062-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-062-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-062-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-062-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-062-motion.gif` — `NOT_EXECUTED`

---

#### PV-063 — Estudos de Caso e Histórias de Clientes
- **Rota**: `/customers`
- **Superfície**: Customers & Social Proof
- **Template**: `<Editor />`
- **Ator Principal**: `demo-executive-sponsor`
- **Atores de Apoio**: `anonymous-visitor`, `demo-growth-lead`
- **JTBD**: `WHEN avalio o sucesso do PostHog em empresas de tecnologia I WANT TO ler histórias detalhadas de migração (ex: Y Combinator, Airbus, Phantom) no formato de documento limpo SO I CAN comprovar a confiabilidade técnica da plataforma para a diretoria WITHOUT apresentações de vendas exageradas.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Seleção de estudo de caso; filtro por tamanho | Artigo em formato Google Docs com dados reais e depoimentos | Comprovação de autoridade técnica e sucesso em escala. |

- **Gaps Identificados**: 1. Páginas usam `<Editor />` com `<MDXEditor />` interno.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-063-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-063-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-063-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-063-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-063-motion.gif` — `NOT_EXECUTED`

---

#### PV-064 — Termos de Processamento de Dados (DPA) e Conformidade
- **Rota**: `/dpa`
- **Superfície**: Legal & Compliance
- **Template**: `<Editor />`
- **Ator Principal**: `demo-security-reviewer`
- **Atores de Apoio**: `demo-platform-admin`
- **JTBD**: `WHEN valido os requisitos de privacidade e proteção de dados da minha empresa I WANT TO revisar o Adendo de Processamento de Dados (DPA), cláusulas padrão da UE e lista de subprocessadores auditados SO I CAN assinar a conformidade jurídica com GDPR e LGPD WITHOUT atritos regulatórios.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| Leitura das cláusulas; consulta de subprocessadores | Documento legal completo formatado em Markdown denso | Conformidade jurídica comprovada para empresas globais. |

- **Gaps Identificados**: 1. Página densa em texto com renderização de contratos.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-064-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-064-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-064-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-064-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-064-motion.gif` — `NOT_EXECUTED`

---

#### PV-065 — Canal Direto com Especialistas (Talk to a Human)
- **Rota**: `/talk-to-a-human`
- **Superfície**: Support & Sales
- **Template**: Modal
- **Ator Principal**: `demo-executive-sponsor`
- **Atores de Apoio**: `demo-platform-admin`, `anonymous-visitor`
- **JTBD**: `WHEN preciso de atendimento humano especializado para migração ou negociação corporativa I WANT TO preencher um formulário simples e direto no modal 'Talk to a Human' SO I CAN agendar uma conversa com um engenheiro do time da PostHog WITHOUT passar por bots lentos ou formulários burocráticos.`

| Entradas do Usuário/Ator | Saídas do Sistema | Outcome Esperado |
|---|---|---|
| E-mail corporativo; estimativa de volume; mensagem opcional | Formulário modal focado; confirmação de recebimento | Contato estabelecido de forma ágil e humanizada. |

- **Gaps Identificados**: 1. Modal atua como exceção 'app-less' documentada em `agents/apps.md`.
- **Screenshots Esperados**:
  - `light-wide`: `reports/evidence/journeys/screenshots/pv-065-light-1440.png` — `NOT_EXECUTED`
  - `light-narrow`: `reports/evidence/journeys/screenshots/pv-065-light-640.png` — `NOT_EXECUTED`
  - `dark-wide`: `reports/evidence/journeys/screenshots/pv-065-dark-1440.png` — `NOT_EXECUTED`
  - `dark-narrow`: `reports/evidence/journeys/screenshots/pv-065-dark-640.png` — `NOT_EXECUTED`
- **Vídeo/GIF de Movimento**: `reports/evidence/journeys/videos/pv-065-motion.gif` — `NOT_EXECUTED`

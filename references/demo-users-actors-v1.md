# Catálogo Canônico de Usuários Demo e Atores Técnicos — PostHog 360°

Este catálogo define as personas humanas e atores técnicos de serviço necessários para demonstrar a cobertura Canonical 360° em um ambiente de demonstração isolado do PostHog (`posthog.com`). Os identificadores são neutros e nenhum arquivo contém credenciais, tokens de API, chaves secretas, senhas ou dados pessoais (PII). O catálogo é estático e estabelece os limites operacionais e de segurança.

---

## 1. Regras Fundamentais de Segurança e Governança

| Regra | Critério Canônico |
|---|---|
| **Isolamento de Fixture** | Todas as fixtures, projetos e flags de demonstração utilizam o prefixo `demo-ph-` e operam em organização demo isolada. |
| **Menor Privilégio** | Cada persona recebe estritamente as permissões necessárias para cumprir seu Job To Be Done (JTBD). |
| **Zero Segredos no Repositório** | Chaves de API de projeto (`phc_...`), chaves pessoais (`phx_...`), tokens de ingestão e senhas permanecem estritamente fora do código e do Git. |
| **Redaction e Mascaramento** | Toda evidência visual (screenshots/vídeos) e logs devem mascarar dados sensíveis conforme as regras de redaction. |
| **Auditoria e Linheagem** | Toda mutação em recursos é correlacionada a um identificador de ator com timestamp UTC imutável. |
| **Encerramento Controlado** | Atores, sessões e recursos de demonstração devem possuir rotina de limpeza (*cleanup*) após a conclusão das jornadas. |

---

## 2. Matriz de Personas Humanas

| Identificador | Papel Funcional | JTBD Principal | Limite de Acesso e Escopo |
|---|---|---|---|
| `anonymous-visitor` | Visitante Anônimo / Explorador | Compreender o posicionamento de mercado do PostHog, explorar produtos e capacidades, simular faturamento e iniciar jornada de onboarding sem atrito. | Apenas páginas públicas, documentação aberta, handbook e calculadora de preços. Sem acesso a projetos privados. |
| `demo-product-engineer` | Engenheiro de Produto / Full-stack | Instrumentar eventos no código, gerenciar feature flags para entregas seguras, analisar exceções e correlacionar erros com replays de sessão. | Projetos de desenvolvimento e homologação. Criação de flags, insights, visualização de stacktraces e replays mascarados. |
| `demo-growth-lead` | Líder de Growth / Product Manager | Compreender conversão e retenção de cohorts, criar testes A/B estatisticamente fundamentados e disparar pesquisas na aplicação. | Visualização de analytics, funis, criação de experimentos e pesquisas in-app. Sem acesso a chaves secretas de infraestrutura. |
| `demo-data-engineer` | Engenheiro de Dados / Analytics | Integrar bancos de dados externos ao Data Warehouse, escrever queries SQL analíticas com HogQL e gerenciar transformações e pipelines de dados. | Conexões de Data Warehouse, schemas de eventos, modelagem de tabelas virtuais e pipelines CDP. Sem comandos DDL destrutivos em produção. |
| `demo-platform-admin` | Administrador de Organização / SRE | Gerenciar governança da organização, usuários, permissões RBAC, autenticação SAML/SSO corporativa e limites de faturamento por produto. | Painel de configurações da organização, faturamento, gerenciamento de membros e trilhas de auditoria. |
| `demo-security-reviewer` | Auditor de Segurança & DPO | Validar conformidade de privacidade (DPA, GDPR, LGPD), auditar trilhas imutáveis e garantir regras rigorosas de mascaramento no Session Replay. | Relatórios de auditoria, subprocessadores, regras de mascaramento e execução de exclusão de dados de titulares. Sem acesso desmascarado a PII. |
| `demo-ai-engineer` | Engenheiro de IA / LLM Developer | Rastrear traces de modelos de linguagem, monitorar consumo e custos de tokens, versionar prompts e conectar agentes via PostHog MCP. | AI Observability, Prompt Management, LLM Traces e ferramentas MCP. Sem exposição de chaves privadas de provedores LLM no cliente. |
| `demo-support-specialist` | Especialista de Suporte / CS | Reproduzir com fidelidade bugs relatados por usuários finais assistindo replays de sessão com erros de JavaScript e chamadas de rede com falha. | Busca e reprodução de Session Replays, inspeção de console e histórico de feedback de pesquisas. Sem permissão de edição de código. |
| `demo-executive-sponsor` | Executivo / Founder / VP Eng | Acompanhar indicadores consolidados de negócio, prever despesas com analytics e avaliar o retorno sobre investimento da plataforma all-in-one. | Dashboards executivos, relatórios consolidados e simulador de faturamento. Sem alteração de configurações técnicas. |
| `demo-community-contributor` | Colaborador da Comunidade | Fazer perguntas técnicas, compartilhar tutoriais, propor melhorias em documentações públicas e interagir no fórum aberto. | Fórum da comunidade (`/community`), fórum de perguntas (`/questions`) e repositório aberto. Sem acesso a instâncias privadas. |

---

## 3. Matriz de Atores Técnicos e de Serviço

| Identificador | Sistema / Serviço | JTBD Principal | Controle Crítico de Segurança |
|---|---|---|---|
| `demo-client-sdk` | SDK Cliente (JS/React/Mobile) | Ingerir eventos de clique/navegação, capturar mutações do DOM para Session Replay e avaliar Feature Flags com baixa latência e resiliência offline. | Project API Key pública com rate limit e compressão gzip; sanitização automática de inputs sensíveis. |
| `demo-cdp-webhook-sink` | Receptor de Destinos CDP | Receber payloads de eventos do PostHog em tempo real via HTTP POST assinado e integrar sistemas terceiros (Slack, HubSpot, Webhooks). | Validação mandatória de assinatura HMAC; endpoints restritos a HTTPS; segredos compartilhados fora do repositório. |
| `demo-hog-function-runtime` | Motor de Execução Hog VM | Executar transformações em milissegundos sobre eventos ingeridos, filtrar propriedades e acionar destinos sem expor infraestrutura de host. | Sandbox isolado com budget estrito de CPU/memória; proibição de chamadas a IPs de rede interna/loopback. |
| `demo-data-warehouse-connector` | Conector de Sincronização Batch | Sincronizar dados de tabelas externas (Postgres, Snowflake, S3, BigQuery) de forma incremental e disponibilizá-las no HogQL Explorer. | Permissões de leitura somente na fonte; conexões criptografadas com TLS; credenciais fora do controle de versão. |
| `demo-mcp-agent` | Servidor PostHog AI & MCP | Permitir que IDEs e agentes de IA realizem consultas analíticas, gerem queries HogQL e explorem a documentação em linguagem natural. | Escopo restrito de API por token; exigência de aprovação humana (HITL) para qualquer mutação de dados. |

---

## 4. Diretrizes para Execução e Coleta de Evidências

A ativação operacional dessas personas ocorre durante as sessões de teste e captura de evidências no ambiente de desenvolvimento (`pnpm start`). Cada jornada executada por um ator deve:
1. Utilizar os identificadores canônicos acima em todos os relatórios e logs.
2. Registrar o resultado de cada ação na matriz de page views.
3. Garantir que nenhuma chave real ou dado confidencial seja exposto nas capturas visuais.

> A fonte estruturada em JSON deste catálogo reside em `templates/demo-users-actors-v1.json`, servindo como fonte única da verdade (*SSOT*) para scripts de validação e automação.

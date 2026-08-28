# Matriz Canônica de Caminhos Negativos e Negações de Autorização — PostHog 360°

Em conformidade com as diretrizes da Superpower `senior-engineer-360` (Fase 9: Matriz de Qualidade 360° e Fase 10: Revisão Adversarial), este documento detalha o comportamento esperado do sistema frente a condições de erro, negação de permissões, limites de quota, entradas inválidas e salvaguardas de IA e privacidade.

---

## 1. Matriz de Cenários Adversariais

| ID | Cenário | Gatilho / Causa | Superfície Afetada | Status HTTP | Comportamento Esperado do Sistema | Salvaguarda de Segurança / Mitigação |
|---|---|---|---|---|---|---|
| `NP-001` | **401 Unauthorized** | Acesso a rota de projeto privado sem sessão ativa por `anonymous-visitor` | Projetos Privados & Dashboards | `401` | Redirecionamento seguro para a tela de autenticação com preservation do redirect URI. | Zero dados privados ou sensíveis renderizados antes da validação. |
| `NP-002` | **403 Forbidden (RBAC)** | Tentativa de alteração de faturamento ou exclusão por membro sem papel de Admin | Configurações de Faturamento & Membros | `403` | Mensagem de acesso negado clara; botões desabilitados com tooltip explicativo. | Validação estrita de autorização no servidor (RBAC) com log de auditoria. |
| `NP-003` | **429 Rate Limited** | Disparo de eventos em burst pelo SDK acima da taxa contratada | Ingestão de Eventos (`/e/`) | `429` | Resposta `429` com cabeçalho `Retry-After`; SDK enfileira no buffer local com backoff exponencial. | Proteção do cluster ClickHouse contra sobrecarga e DoS. |
| `NP-004` | **400 Bad Request** | Query HogQL com erro de sintaxe ou tipo incompatível | HogQL SQL Explorer (`/sql`) | `400` | Destaque do erro com número de linha e coluna exatos no editor. | Feedback imediato ao usuário sem falha no worker ClickHouse. |
| `NP-005` | **504 Gateway Timeout** | Consulta a banco externo no Data Warehouse com tempo > 30s | Data Warehouse Conectores | `504` | Card de erro amigável na UI com botão de 'Tentar Novamente'. | Circuit breaker ativo para evitar exaustão de conexões no pool. |
| `NP-006` | **PII Redaction Interception** | Detecção de cartão de crédito ou senha em formulário | Session Replay & Ingestão | `200` | Mascaramento automático no cliente antes da transmissão (`***`). | Conformidade mandatória com GDPR, LGPD e PCI-DSS. |
| `NP-007` | **Feature Flag Fallback** | Indisponibilidade de rede temporária no endpoint `/decide/` | SDK Cliente / Flags | `0` (Net Err) | SDK adota o valor padrão (fallback) seguro configurado no código. | Resiliência total da UI sem travamento ou tela em branco. |
| `NP-008` | **MCP HITL Interception** | Tentativa de ação destrutiva por agente MCP sem aprovação | Servidor PostHog MCP | `403` | Bloqueio da ferramenta e emissão de pedido de aprovação humana explícita. | Prevenção contra ações autônomas destrutivas ou alucinações. |

---

## 2. Rastreabilidade com o Contrato de Captura

Todos os cenários acima estão registrados no contrato `templates/demo-journeys-negative-paths-v1.json` e devem ser acompanhados de evidências visuais no estado `NOT_EXECUTED` até que os testes de negação sejam gravados em ambiente de teste seguro.

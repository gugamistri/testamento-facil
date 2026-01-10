Testamento Digital - Especificação Completa do Projeto
Elevator Pitch
O Testamento Digital democratiza o planejamento sucessório no Brasil, reduzindo custos de R$ 8.000 para R$ 1.500 (inicial) + R$ 1.000/ano. Combinamos tecnologia forense (criptografia militar + blockchain) com inteligência de APIs de óbito para garantir a transmissão automática e segura de bens físicos e digitais (incluindo criptomoedas) aos herdeiros, eliminando anos de burocracia e transformando inventário em processo imediato.
Problem Statement
Para quem: 52 milhões de brasileiros acima de 50 anos, detentores de criptomoedas e classe média que busca planejamento sucessório acessível.
Dores principais:
Custo proibitivo: Cartórios cobram até R$ 8.000, tornando o testamento inacessível para 90% da população
Complexidade jurídica: Processo burocrático exige conhecimento técnico que a maioria não possui
Perda de ativos digitais: Criptomoedas, senhas e contas digitais são perdidas para sempre quando não há planejamento
Tempo de inventário: Processos tradicionais levam anos, gerando custos adicionais e desgaste familiar
Falta de atualização: Testamentos em papel ficam desatualizados e não acompanham mudanças patrimoniais
Impacto: Famílias perdem patrimônio, enfrentam disputas judiciais custosas e sofrem com a burocracia em momento de luto.
Target Audience
Primário:
Público 50+ (52M no Brasil): Pessoas com patrimônio consolidado sem planejamento sucessório
Crypto holders (3-5M no Brasil): Detentores de criptomoedas preocupados com perda irreversível de ativos
Classe média profissional (Renda R$ 5k-20k): Empresários, profissionais liberais buscando proteção patrimonial
Secundário:
Famílias jovens com bens digitais significativos
Expatriados com ativos em múltiplas jurisdições
Escritórios de advocacia (via white-label B2B)
Características comportamentais:
Alfabetização digital média/alta
Preocupados com segurança e privacidade
Dispostos a pagar por conveniência e tecnologia
Buscam soluções modernas para problemas tradicionais
USP (Unique Selling Proposition)
Redução de 80% no custo vs. cartórios tradicionais (R$ 1.500 vs R$ 8.000)
Distribuição automática via API de óbito + smart contracts (anos → dias)
Único no Brasil com custódia de ativos digitais (criptos, senhas, NFTs)
Segurança militar (AES-256 + blockchain + Secret Sharing de Shamir)
Validade jurídica (ICP-Brasil + gravação forense + assessoria incluída)
SaaS vivo (atualizável a qualquer momento, diferente de papel engavetado)
Target Platforms
MVP (Fase 1-2):
Web App Responsivo (Desktop + Mobile Web)
Foco em desktop para processo de criação (complexidade do formulário)
Mobile-friendly para dashboards de manutenção
Futuro (Fase 3+):
App iOS/Android nativo (para "prova de vida" biométrica)
WhatsApp Business API (notificações e check-ins)
Integrações críticas:
ICP-Brasil (Gov.br + Certificadoras)
APIs de Óbito (CRC/SERPRO/Bureaus de crédito)
Videoconferência (Zoom/Google Meet + gravação forense)
Blockchain (Ethereum/Polygon para registro de hash)
Payment Gateway (Stripe/Pagar.me)
Features List
1. Landing Page e Conversão
User Stories:
[ ] Como visitante interessado, quero entender o problema e a solução em até 30 segundos, para decidir se o produto é para mim
[ ] Como usuário preocupado com segurança, quero ver provas sociais (selos, depoimentos, mídia), para confiar na plataforma
[ ] Como lead qualificado, quero agendar uma consultoria gratuita, para tirar dúvidas específicas antes de contratar
Acceptance Criteria:
[ ] Hero section com comparativo visual: "R$ 8.000 (Cartório) vs R$ 1.500 (Digital)"
[ ] Vídeo explicativo de 90 segundos mostrando o processo end-to-end
[ ] Selos de segurança: ICP-Brasil, OAB, AWS/Google Cloud, ISO 27001 (futuro)
[ ] FAQ jurídico: "É válido?", "E se contestarem?", "Como funcionam as criptos?"
[ ] CTA principal: "Agendar Consultoria Gratuita" (calendário integrado - Calendly/Cal.com)
[ ] Calculadora de economia: "Quanto você economizaria vs. cartório?" (lead magnet)
[ ] Blog educativo (SEO): "Como funciona inventário no Brasil", "O que acontece com Bitcoin quando você morre?"
2. Agendamento e Consultoria
User Stories:
[ ] Como prospect, quero escolher horário de consultoria em agenda disponível, para conversar com especialista
[ ] Como consultor, quero ter contexto prévio do lead (questionário pré-call), para personalizar atendimento
[ ] Como lead após consultoria, quero receber proposta comercial clara, para decidir pela contratação
Acceptance Criteria:
[ ] Integração com Calendly/Cal.com (sincroniza com Google Calendar dos consultores)
[ ] Formulário pré-consultoria: Nome, idade, tipo de patrimônio (imóveis, empresas, criptos), urgência
[ ] Email automático de confirmação com link Zoom/Meet + checklist "O que trazer"
[ ] CRM básico (Notion/Airtable no MVP) para tracking de leads
[ ] Após call: envio automático de proposta + link de checkout
[ ] Follow-up automatizado: D+1, D+3, D+7 se não converter
3. Onboarding e Elaboração Digital
User Stories:
[ ] Como cliente contratado, quero preencher formulário intuitivo de inventário, sem precisar de conhecimento jurídico
[ ] Como testador, quero gravar vídeo declarando minha vontade, para garantir validade jurídica
[ ] Como usuário, quero assinar digitalmente via ICP-Brasil, para dar validade ao documento
Acceptance Criteria:
3.1 Módulo de Inventário de Ativos
[ ] Wizard multi-step (progresso visual: "Passo 2 de 7")
[ ] Seção 1 - Bens Imóveis: Endereço, matrícula, percentual de propriedade, documentos (escritura PDF)
[ ] Seção 2 - Veículos: Placa, Renavam, modelo, upload de CRLV
[ ] Seção 3 - Contas Bancárias: Banco, agência, conta, tipo (não guarda senha)
[ ] Seção 4 - Investimentos: Corretora, tipo (ações, FIIs, CDBs), saldo aproximado
[ ] Seção 5 - Empresas: CNPJ, participação societária, contrato social
[ ] Seção 6 - Ativos Digitais:
[ ] Criptomoedas: Exchange ou carteira não-custodial? Se non-custodial → instruções de multisig (não guarda seed)
[ ] NFTs: Marketplace, wallet
[ ] Domínios: Registrar.br, GoDaddy
[ ] Redes sociais: Instagram, Facebook (instrução: memorializar ou deletar?)
[ ] Cloud storage: Google Drive, iCloud (instruções de acesso para herdeiros)
[ ] Seção 7 - Beneficiários e Distribuição:
[ ] Nome completo, CPF, parentesco, percentual ou item específico
[ ] Validação: respeito à legítima (50% herdeiros necessários - alerta automático se violar)
[ ] Herdeiros substitutos (se beneficiário morrer antes)
[ ] Auto-save a cada 30 segundos (evitar perda de dados)
[ ] Upload de documentos: aceita PDF, JPG, PNG (máx 10MB por arquivo)
[ ] Sugestão inteligente: "Você mencionou criptomoedas. Recomendamos configurar carteira multisig - quer ajuda?"
3.2 Validação por Vídeo (Prova Forense)
[ ] Agendamento de sessão de videoconferência com advogado da plataforma
[ ] Checklist pré-gravação: documento com foto, ambiente iluminado, sem terceiros
[ ] Roteiro de declaração (lido pelo advogado, confirmado pelo testador):
"Eu, [nome], CPF [xxx], declaro estar em pleno gozo de minhas faculdades mentais..."
"Confirmo que as informações prestadas são verdadeiras..."
"Compreendo que este documento tem validade jurídica e distribui meus bens conforme minha vontade..."
[ ] Gravação em HD, armazenada criptografada (AES-256)
[ ] Registro de timestamp + hash SHA-256 da gravação no blockchain (Polygon - custo baixo)
[ ] Advogado emite Declaração de Capacidade Jurídica (assinada digitalmente)
3.3 Assinatura Qualificada ICP-Brasil
[ ] Integração com Certificadoras (Soluti, Valid, Serpro)
[ ] Fluxo: usuário escolhe certificadora → redirecionado → assina PDF do testamento
[ ] Validação de integridade: hash do documento assinado = hash registrado no blockchain
[ ] Cópia assinada enviada ao email do cliente + armazenada no cofre
4. Custódia e Segurança (Envelopamento Digital)
User Stories:
[ ] Como testador, quero garantia matemática que meu documento não será alterado, para ter segurança jurídica
[ ] Como cliente preocupado, quero saber que mesmo se a empresa fechar, meus herdeiros terão acesso, para ter paz de espírito
[ ] Como beneficiário futuro, quero confiança que o documento é autêntico, para aceitar a herança sem contestação
Acceptance Criteria:
4.1 Criptografia de Dupla Chave (Secret Sharing de Shamir)
[ ] Documento testamento.pdf é criptografado com AES-256
[ ] Chave mestra é fragmentada em 3 partes (n=3, k=2 - Shamir's Secret Sharing):
Parte 1: Cofre AWS KMS (Hardware Security Module)
Parte 2: Advogado master da plataforma (chave criptografada com senha dele)
Parte 3: Sistema de monitoramento de óbito (acionada automaticamente via API)
[ ] Reconstituição: necessárias 2 de 3 partes (ex: Parte 1 + Parte 3 ao detectar óbito)
[ ] Backup geográfico: réplicas em AWS us-east-1 (N. Virginia) + sa-east-1 (São Paulo)
4.2 Registro Imutável em Blockchain
[ ] Hash SHA-256 do documento assinado registrado em blockchain público (Polygon)
[ ] Metadados registrados: timestamp, CPF (hash), advogado responsável (ID hash)
[ ] Smart contract emite evento "TestamentoCriado" com ID único
[ ] Explorer público: cliente pode verificar autenticidade via link (ex: polygonscan.com/tx/0x...)
[ ] Custo de gas: ~$0.01 por transação (absorvido pela plataforma)
4.3 Plano de Continuidade (Escrow)
[ ] Contrato de Fiel Depositário com escritório de advocacia terceirizado (OAB registrado)
[ ] Parte 2 (chave do advogado) é depositada em cofre físico + digital do depositário
[ ] Cláusula de acionamento: falência, encerramento, 90 dias de inadimplência do cliente
[ ] SLA: depositário tem 48h para liberar acesso aos beneficiários validados
5. Monitoramento Ativo e Gatilhos
User Stories:
[ ] Como plataforma, quero monitorar continuamente APIs de óbito, para disparar abertura automática
[ ] Como testador vivo, quero confirmar periodicamente que estou ativo, para evitar falso positivo
[ ] Como beneficiário, quero ser notificado imediatamente após validação do óbito, para acessar ativos rapidamente
Acceptance Criteria:
5.1 Integração com APIs de Óbito
[ ] MVP: Integração com agregador de dados (ex: Serasa, Boa Vista) via API REST
[ ] Futuro: Convênio direto com ARPEN/CRC Nacional para dados em tempo real
[ ] Polling automatizado: consulta CPF do cliente a cada 24h
[ ] Webhook: se API retornar status "óbito confirmado" → dispara fluxo de validação
[ ] Latência esperada: 24-48h após registro em cartório
[ ] Fallback: se API indisponível por >72h → alerta para equipe manual
5.2 Dead Man's Switch (Prova de Vida)
[ ] Notificação a cada 6 meses via email + SMS: "Clique aqui para confirmar que está ativo"
[ ] Se não confirmar em 7 dias → segundo alerta
[ ] Se não confirmar em 14 dias → tentativa de contato telefônico (operação manual)
[ ] Se não confirmar em 30 dias + API de óbito retornar "sem registro" → marca como "atenção" (não dispara abertura)
[ ] Cliente pode fazer check-in a qualquer momento no dashboard (reseta contador)
5.3 Validação em Camadas (Evitar Falso Positivo)
[ ] Layer 1: API de óbito retorna "confirmado"
[ ] Layer 2: Tentativa de contato (email + SMS + telefone) sem resposta em 48h
[ ] Layer 3: Verificação cruzada em segunda fonte (SIM/SEADE ou segunda API)
[ ] Layer 4: Aprovação manual do advogado master (revisa certidão de óbito digitalizada)
[ ] Só após 4 layers → dispara abertura definitiva
5.4 Dashboard de Beneficiários (Cliente)
[ ] Cadastro de beneficiários: Nome, CPF, email, telefone, parentesco, percentual/item
[ ] Status visual: "Ativo", "Aguardando validação", "Validado"
[ ] Envio de carta-convite: "Você foi indicado como beneficiário. Confirme seus dados aqui"
[ ] Beneficiário confirma: aceita ciência, fornece comprovante de endereço e identidade
[ ] Cliente pode adicionar/remover/editar beneficiários a qualquer momento
[ ] Alteração gera novo hash blockchain + re-assinatura via ICP
6. Abertura e Distribuição (Pós-Óbito)
User Stories:
[ ] Como beneficiário validado, quero receber notificação clara sobre como acessar meus direitos, imediatamente após confirmação do óbito
[ ] Como advogado executor, quero ter painel com checklist de distribuição, para executar o testamento sem erros
[ ] Como herdeiro, quero ter acesso às instruções de ativos digitais (senhas, criptos), sem exposição prévia
Acceptance Criteria:
6.1 Notificação Automática
[ ] Email + SMS para todos beneficiários cadastrados: "Lamentamos informar o falecimento de [nome]. Você foi indicado como beneficiário."
[ ] Link seguro (token único, expira em 7 dias): acessa portal do beneficiário
[ ] Portal exibe: seus direitos (% ou itens específicos), próximos passos, contato do advogado executor
6.2 Abertura do Envelope (Reconstituição de Chave)
[ ] Sistema automaticamente combina Parte 1 (KMS) + Parte 3 (API trigger)
[ ] Advogado master confirma manualmente (Parte 2) via autenticação multifator
[ ] Documento descriptografado e disponibilizado em área segura (acesso via 2FA)
[ ] Geração de Relatório de Abertura: timestamp, quem acessou, IP, hash do documento aberto
6.3 Distribuição de Ativos Digitais
[ ] Cofre de Instruções Descriptografado:
Senhas de contas (exibidas via "revelar por 30 segundos" - não exportáveis)
Instruções de carteiras cripto (ex: "Acesse Metamask com seed phrase: [revelado]")
Links de documentos compartilhados (Google Drive, Notion)
[ ] Criptomoedas (Modelo Multisig - Fase 3):
Smart contract libera fundos para wallet dos beneficiários
Beneficiário conecta wallet → assina transação → recebe ativos
[ ] NFTs: Instrução de transfer ownership via OpenSea/Rarible
6.4 Suporte Jurídico Pós-Abertura
[ ] Advogado da plataforma emite Certidão de Autenticidade do Testamento (documento assinado)
[ ] Acompanhamento: abertura de inventário judicial (se necessário) ou extrajudicial
[ ] Suporte por 90 dias incluído na anuidade (email + 2 consultorias de 30min)
7. Gestão de Ciclo de Vida (SaaS Recorrente)
User Stories:
[ ] Como cliente ativo, quero atualizar meu testamento facilmente quando houver mudanças patrimoniais, sem burocracia
[ ] Como plataforma, quero manter receita recorrente via renovação anual, garantindo sustentabilidade do serviço
[ ] Como usuário inadimplente, quero entender consequências claras e ter período de carência, antes de perder o serviço
Acceptance Criteria:
7.1 Painel de Manutenção (Dashboard do Cliente)
[ ] Visão geral: status do testamento (ativo, pendente renovação, expirado)
[ ] Editar inventário: mesma interface do onboarding, atualização incremental
[ ] Gerenciar beneficiários: adicionar, remover, alterar percentuais
[ ] Histórico de versões: "Testamento v1 (01/2024), v2 (06/2024)" - diff visual
[ ] Upload de novos documentos: "Adicionei um imóvel, preciso anexar escritura"
[ ] Prova de vida manual: botão "Confirmar que estou ativo" (reseta Dead Man's Switch)
[ ] Central de ajuda: chat com advogado (horário comercial), FAQ, tutoriais em vídeo
7.2 Re-assinatura e Re-registro
[ ] Qualquer alteração → gera nova versão do testamento
[ ] Opção 1 (alterações menores): Re-assinatura digital via ICP (sem vídeo)
[ ] Opção 2 (alterações substanciais): Nova validação por vídeo agendada
[ ] Novo hash registrado em blockchain com referência à versão anterior (chain of custody)
[ ] Versão antiga arquivada (não deletada) - auditoria completa
7.3 Checkout de Renovação Anual
[ ] Email 60 dias antes do vencimento: "Sua renovação vence em 01/03/2025"
[ ] Email 30 dias: "Renove agora e garanta 10% de desconto" (early bird)
[ ] Email 7 dias: "Última chance - sem renovação, monitoramento será suspenso"
[ ] Pagamento: cartão de crédito recorrente (Stripe), boleto, PIX
[ ] Opção de upgrade: "Adicione seguro de vida por +R$ 500/ano"
7.4 Inadimplência e Suspensão
[ ] D+0 (vencimento): acesso ao painel mantido, mas com banner vermelho
[ ] D+30: monitoramento de API suspenso (não consulta mais óbito)
[ ] D+60: acesso ao painel bloqueado (somente leitura)
[ ] D+90: email final: "Seu testamento será arquivado. Dados deletados em 30 dias"
[ ] D+120: documento criptografado mantido em cold storage por 1 ano (possibilidade de reativação)
[ ] D+485 (1 ano + 120 dias): exclusão definitiva (LGPD - direito ao esquecimento)

UX/UI Considerations
8.1 Design System e Identidade Visual
Screens e Estados:
[ ] Homepage:


Estado padrão: Hero + vídeo + comparativo de preços
Estado pós-scroll: barra flutuante com CTA "Agendar Consultoria"
Mobile: menu hamburger, vídeo reduzido, CTA fixo no rodapé
[ ] Dashboard do Cliente:


Estado "Testamento Ativo": card verde com status, próximos passos
Estado "Renovação Pendente": banner amarelo com urgência, botão de pagamento
Estado "Suspenso": overlay vermelho bloqueando ações, apenas "Renovar" habilitado
Empty state: "Você ainda não adicionou beneficiários. Clique aqui para começar"
[ ] Formulário de Inventário:


Progresso linear: barra de 7 steps (30% completado)
Validação em tempo real: "CPF inválido" (vermelho), "✓ Salvo" (verde)
Estado de loading: skeleton screens ao carregar dados salvos
Confirmação de saída: "Você tem alterações não salvas. Deseja sair?"
Animações e Microinterações:
[ ] Transições suaves entre steps do wizard (slide-in 300ms ease-out)
[ ] Checkbox de beneficiário: animação de "check" verde ao validar CPF
[ ] Upload de documentos: barra de progresso + preview do arquivo
[ ] Hover em cards de ativos: leve elevação (shadow) + border highlight
[ ] Loading states: spinner discreto em ações assíncronas (salvar, validar)
[ ] Success feedback: toast notification verde "✓ Testamento atualizado com sucesso"
Arquitetura de Informação:
[ ] Navegação principal: Home, Como Funciona, Segurança, Preços, Blog, Login
[ ] Dashboard sidebar: Visão Geral, Meu Testamento, Beneficiários, Documentos, Assinatura, Configurações
[ ] Breadcrumbs: "Dashboard > Meu Testamento > Editar Imóveis"
[ ] Ajuda contextual: ícone "?" ao lado de campos complexos (tooltip on hover)
Progressive Disclosure:
[ ] Campos avançados colapsados por padrão: "Tenho bens no exterior" (accordion)
[ ] Criptomoedas: "Custodial ou Non-Custodial?" → Se Non-Custodial, expande "Instruções de Multisig"
[ ] Beneficiários: mostra 3 primeiros, botão "Ver todos (7)" expande lista completa
Visual Hierarchy:
[ ] CTAs primários: botão azul sólido, fonte bold, espaçamento generoso
[ ] CTAs secundários: botão outline, cor neutra
[ ] Alertas críticos: vermelho com ícone de atenção, texto em negrito
[ ] Informações de segurança: badge "Criptografado AES-256" com ícone de cadeado
Acessibilidade (WCAG 2.1 AA):
[ ] Contraste mínimo 4.5:1 para textos
[ ] Todos os botões e links navegáveis via teclado (Tab + Enter)
[ ] Labels em todos os inputs (não apenas placeholders)
[ ] Mensagens de erro descritivas: "CPF inválido. Formato esperado: 000.000.000-00"
[ ] Alt text em todas as imagens
[ ] Formulários com validação server-side (não só client-side)
Responsividade:
[ ] Breakpoints: Mobile (<640px), Tablet (641-1024px), Desktop (>1024px)
[ ] Dashboard em mobile: navegação bottom tab bar (iOS-style)
[ ] Formulário em mobile: um campo por tela (wizard stepped)
[ ] Tabelas responsivas: scroll horizontal ou card-based layout em mobile
Non-Functional Requirements
9.1 Performance
[ ] Tempo de carregamento: Homepage < 2s (Google PageSpeed > 90)
[ ] Dashboard: Primeira renderização < 1s, interações < 200ms
[ ] Upload de documentos: Suporta arquivos até 10MB, com chunked upload para >5MB
[ ] API de óbito: Timeout de 5s, retry 3x com exponential backoff
[ ] Criptografia: Operação de encrypt/decrypt < 500ms para documentos até 5MB
9.2 Scalability
[ ] Arquitetura: Serverless (AWS Lambda + API Gateway) para auto-scaling
[ ] Database: PostgreSQL (RDS) com read replicas para queries pesadas
[ ] Storage: S3 para documentos, com lifecycle policy (Standard → Glacier após 2 anos)
[ ] CDN: CloudFront para assets estáticos (imagens, CSS, JS)
[ ] Estimativa MVP: 1.000 clientes ativos = ~50 RPS, $500/mês AWS
9.3 Security
[ ] Certificações alvo: SOC 2 Type II (Fase 2), ISO 27001 (Fase 3)
[ ] Criptografia: TLS 1.3 em trânsito, AES-256 em repouso
[ ] Autenticação: Auth0 ou AWS Cognito com MFA obrigatório para ações críticas
[ ] RBAC: Cliente (read/write próprio testamento), Advogado (read-only todos), Admin (full access)
[ ] Auditoria: Log de todas as ações (CloudTrail), retenção de 7 anos
[ ] Backup: Snapshots diários (RDS), retenção de 30 dias, restore testado mensalmente
[ ] Disaster Recovery: RTO < 4h, RPO < 1h
[ ] Penetration Testing: Anual (contratado com empresa terceirizada)
[ ] LGPD Compliance:
Consentimento explícito para processamento de dados sensíveis
DPO nomeado (pode ser terceirizado no MVP)
Direito de portabilidade: exportação de dados em JSON
Direito ao esquecimento: deleção em 30 dias após solicitação (exceto obrigações legais de 5 anos)
9.4 Accessibility
[ ] WCAG 2.1 Level AA em todas as páginas públicas e dashboard
[ ] Screen reader: Testado com NVDA (Windows) e VoiceOver (macOS/iOS)
[ ] Keyboard navigation: Todos os fluxos completáveis sem mouse
[ ] Formulários: Validação client-side + server-side, mensagens claras
[ ] Cores: Não usar apenas cor para transmitir informação crítica (adicionar ícones)
Monetization
Modelo de Receita:
1. Criação de Testamento (One-time): R$ 1.500
Inclui: consultoria inicial, elaboração, validação por vídeo, assinatura ICP, registro blockchain, primeiro ano de monitoramento
2. Anuidade de Manutenção (Recorrente): R$ 1.000/ano
Inclui: monitoramento contínuo via API de óbito, armazenamento seguro, atualizações ilimitadas, suporte jurídico (email + 2 calls/ano)
3. Add-ons (Opcional):
Testamento empresarial (holding familiar): +R$ 3.000 (one-time) + R$ 2.000/ano
Seguro de vida integrado (parceria com seguradora): +R$ 500-2.000/ano (comissão 20-30%)
Consultoria presencial: R$ 500/hora
4. B2B (White-label para escritórios de advocacia):
Setup: R$ 10.000
Licença mensal: R$ 500 + R$ 50/cliente ativo
Escritório mantém relacionamento, plataforma fornece tech + compliance
Projeção de Receita (Cenário Base - Ano 1):
Meta: 500 testamentos criados
MRR final: R$ 41.666 (500 clientes × R$ 1.000/ano ÷ 12)
ARR: R$ 500.000
One-time (criação): R$ 750.000 (500 × R$ 1.500)
Total Ano 1: R$ 1.250.000
Unidade Econômica:
CAC estimado: R$ 300 (Google Ads + consultoria)
LTV (5 anos): R$ 6.500 (R$ 1.500 + R$ 1.000 × 5)
LTV/CAC: 21.6x (excelente)
Payback: <4 meses
Estratégia de Pricing:
Ancoragem: "R$ 8.000 no cartório → R$ 1.500 aqui = 81% de economia"
Freemium futuro (Fase 3): Testamento básico gratuito (sem criptos, sem vídeo), upgrade para Premium
Anual pré-pago com desconto: R$ 900/ano (vs. R$ 1.000 mensal)
Critical Questions or Clarifications
Questões Estratégicas Restantes:
Roadmap de Lançamento:


Vocês planejam MVP fechado (beta privado) ou lançamento público direto?
Qual a meta de clientes nos primeiros 6 meses? (Isso define infra e equipe)
Equipe e Operações:


Quantos advogados próprios vs. parcerias com escritórios terceirizados?
Qual o SLA de resposta para consultoria? (24h? 48h?)
Vocês terão CS dedicado ou é self-service + suporte reativo?
Aspectos Técnicos Pendentes:


Blockchain: Polygon confirmado ou avaliar Ethereum L2 mais barato (Optimism/Arbitrum)?
Videoconferência: Zoom vs. solução própria (Jitsi embarcado)?
ICP-Brasil: Vocês já conversaram com certificadoras? Custo por assinatura?
Go-to-Market Tático:


Primeiro canal de aquisição: Google Ads (Search: "como fazer testamento") ou LinkedIn (B2B advogados)?
Conteúdo: vocês têm capacidade interna de produzir blog/SEO ou terceirizam?
Parcerias: já mapearam seguradoras/bancos para co-branding?
Compliance e Risco:


Vocês já têm parecer de algum escritório grande (Machado Meyer, TozziniFreire) validando o modelo?
LGPD: DPO será interno ou terceirizado (ex: OneTrust)?
Seguro de E&O (Errors & Omissions) para advogados da plataforma: já cotaram?
Experiência Pós-Óbito (Detalhamento):


Como beneficiários que não são tech-savvy acessarão criptos? Haverá tutorial em vídeo?
Se houver disputa judicial (herdeiro contestando), vocês cobram extra pelo advogado participar do processo?

Sugestões de Novas Features (Backlog Futuro):
Fase 2 (6-12 meses pós-MVP):
[ ] Testamento em Vida (Diretiva Antecipada de Vontade): Especificar tratamentos médicos desejados em caso de incapacidade
[ ] Procuração Digital: Nomear procurador para gerenciar finanças se ficar incapacitado
[ ] Pet Trust: Instrução legal para cuidado de animais de estimação (nicho crescente)
[ ] Carta de Últimos Desejos: Mensagens em vídeo/texto para familiares (liberadas pós-óbito)
Fase 3 (12-24 meses):
[ ] Marketplace de Serviços: Conectar herdeiros com despachantes, contadores, avaliadores de imóveis
[ ] Integração com Cartórios Digitais: Registro automático de testamento público via e-Notariado
[ ] API Pública: Permitir que fintechs/exchanges integrem (ex: "Crie testamento de cripto em 1 clique")
[ ] IA para Revisão: GPT-4 analisa testamento e sugere otimizações fiscais legais


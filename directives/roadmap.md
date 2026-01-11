# Product Roadmap & Incremental Build

## Phase 0: Foundation (Project Scaffolding) ✅
- [x] Initialize `pnpm` workspace and folders.
- [x] Configure `Biome` for linting.
- [x] Setup `docker-compose.yml` for Local Dev (Postgres + Redis).
- [x] Install Core Dependencies (Next.js, Node, Prisma).


## Phase 1: Auth & Identity (Clerk/NextAuth) ✅
- [x] Implementation of Login/Sign-up flows.
- [x] Database Schema for User Profile.
- [x] Middleware for route protection.


## Phase 2: RBAC & Permissions (Admin Control) ✅
- [x] Define Roles: `CLIENT`, `LAWYER`, `ADMIN`, `PARTNER`.
- [x] Admin-only API protection.
- [x] Role-based UI components (Conditional rendering).


## Phase 3: Public Presence (Landing Page)
1. Landing Page e Conversão
Feature 1.1: Hero Section & Value Proposition
User Stories:
[ ] Como visitante cético, quero ver a economia imediata em números concretos, para avaliar se vale a pena explorar
[ ] Como pessoa preocupada com tecnologia, quero entender visualmente como funciona, sem jargão jurídico
[ ] Como usuário consciente de segurança, quero provas imediatas de confiabilidade, antes de investir tempo
UX/UI Considerations
Core Experience:
[ ] Estado Inicial (Above the fold):


Hero visual split-screen: lado esquerdo mostra processo tradicional em preto/branco (cartório, pilhas de papel, R$ 8.000), lado direito mostra interface digital em cores vibrantes (R$ 1.500)
Headline emocional: "Seu patrimônio não precisa se perder quando você partir"
Sub-headline racional: "Testamento válido juridicamente, 80% mais barato, atualizado quando você quiser"
Dois CTAs distintos com hierarquia clara:
Primário (verde, destaque): "Criar Meu Testamento Agora" → leva direto ao wizard
Secundário (outline, menor): "Agendar Consultoria Gratuita" → para indecisos
[ ] Barra de Trust Indicators (sticky header):


Selos: ICP-Brasil (oficial), OAB (parceria), AWS Shield (segurança), "3.247 testamentos protegidos"
Ao scroll, barra compacta mantém apenas logos + CTA primário
[ ] Vídeo Explicativo (90s):


Player embutido com thumbnail personalizado (rosto humano do fundador/advogado, não stock photo)
Transcrição expansível abaixo para acessibilidade/SEO
Timeline visual: "0:00-0:15 O problema | 0:15-0:45 Como funciona | 0:45-1:30 Segurança garantida"
Advanced Users & Edge Cases:
[ ] Estado: Usuário já tem testamento tradicional:


Banner contextual (aparece após 10s ou ao scroll): "Já tem testamento em cartório? Migre para digital mantendo validade jurídica"
Modal explicativo: comparativo lado-a-lado (atualização em cartório vs plataforma)
[ ] Estado: Mobile (60% do tráfego esperado):


Hero empilhado verticalmente, vídeo autoplay muted com legenda "Toque para assistir"
CTAs fixos no bottom sheet (sempre visível ao scroll)
Calculadora de economia em accordion (não ocupa altura inicial)

Feature 1.2: Calculadora de Economia Interativa (Lead Magnet)
User Stories:
[ ] Como visitante analítico, quero simular minha economia específica, para justificar a contratação
[ ] Como pessoa com patrimônio complexo, quero entender se o preço fixo realmente compensa, independente do valor dos bens
UX/UI Considerations
Core Experience:
[ ] Wizard de 3 Passos (inline na landing page):
Passo 1 - Patrimônio Estimado:
Slider visual com marcos: "Até R$ 500k | R$ 500k-2M | R$ 2M-5M | Acima de R$ 5M"
Texto dinâmico: "Patrimônio similar ao de 68% dos nossos clientes"
Passo 2 - Tipos de Ativos (seleção múltipla):
Cards visuais com ícones: 🏠 Imóveis | 💰 Investimentos | 🔐 Criptomoedas | 🏢 Empresas
Badge de complexidade aparece ao selecionar: "Complexidade: Média" (amarelo) ou "Alta - Recomendamos consultoria" (laranja)
Passo 3 - Resultado:
Comparativo animado (contador crescente):
"Cartório tradicional: R$ 8.500" (base 1% do patrimônio + R$ 3k fixo)
"Testamento Digital: R$ 1.500 + R$ 1.000/ano"
"Economia no 1º ano: R$ 6.000" (destaque verde)
Breakdown transparente: "Como calculamos?" (tooltip explicativo)
CTA contextual: "Garantir Essa Economia" → lead para checkout ou consultoria
Advanced Users & Edge Cases:
[ ] Edge Case: Patrimônio muito alto (>R$ 10M):


Mensagem customizada: "Para patrimônios acima de R$ 10M, recomendamos consultoria especializada para estruturação tributária"
CTA muda para "Falar com Especialista" (prioriza consultoria)
[ ] Captura de Lead (Progressive):


Após Passo 2, toast sutil: "Quer salvar essa simulação? Deixe seu email" (campo inline, opcional)
Se fornecido → envia PDF com breakdown + link de conversão com 10% de desconto

Feature 1.3: FAQ Jurídico & Objeções
User Stories:
[ ] Como pessoa leiga em direito, quero ter certeza de que é juridicamente válido, antes de pagar
[ ] Como usuário tech, quero entender como a tecnologia garante segurança, sem ser enganado por buzzwords
[ ] Como herdeiro potencial, quero saber se familiares podem contestar, para avaliar risco
UX/UI Considerations
Core Experience:
[ ] Accordion com Categorização Visual:


3 abas: "⚖️ Validade Jurídica | 🔒 Segurança Técnica | 👨‍👩‍👧 Para Famílias"
Perguntas mais clicadas com badge "MAIS PERGUNTADO"
Respostas em linguagem simples (máx 100 palavras) + link "Ver resposta técnica completa" (modal)
[ ] Perguntas Críticas (sempre visíveis):


"É juridicamente válido?"
Resposta: "Sim. Seu testamento é particular qualificado (Art. 1.876 do Código Civil), com assinatura ICP-Brasil (mesma do e-CPF) + validação por advogado registrado na OAB. Tem a mesma validade de um testamento público."
Prova social: Botão "Ver exemplo de testamento aprovado em inventário" (PDF anonimizado)
"E se minha família contestar?"
Resposta: "A gravação forense + registro em blockchain cria prova técnica de sua capacidade mental e vontade autêntica. Em 3 anos de operação, zero contestações bem-sucedidas."
Reassurance: Badge "Garantia de Suporte Jurídico Incluído"
"Como funciona se a empresa fechar?"
Resposta visual (diagrama): Mostra o esquema de Shamir (3 partes da chave) com ícone de cofre terceirizado
CTA: "Entender o Plano de Continuidade" → página dedicada
Advanced Users & Edge Cases:
[ ] Estado: FAQ vazio após scroll (usuário não encontrou resposta):


Call-to-action proativo: "Não encontrou sua dúvida? Fale agora com um advogado" (chat ao vivo em horário comercial)
Fallback fora de horário: "Deixe sua pergunta, respondemos em até 4 horas úteis"
[ ] Animações de Confiança:


Ao abrir resposta sobre "Segurança", subtle animation mostra ícone de cadeado se fechando
Ao mencionar "blockchain", link inline para explorador público (Polygonscan) com tx real (exemplo)

## Phase 4. Agendamento e Consultoria
Feature 2.1: Calendário de Consultoria Gratuita
User Stories:
[ ] Como prospect inseguro, quero escolher horário sem compromisso, para tirar dúvidas antes de decidir
[ ] Como consultor, quero contexto prévio do lead, para personalizar pitch e não perder tempo com desqualificados
[ ] Como visitante com urgência, quero slot imediato se disponível, para não esfriar interesse
UX/UI Considerations
Core Experience:
[ ] Seleção de Horário (Integração Calendly/Cal.com):


Interface embarcada (não redirect externo)
Visualização semanal com slots disponíveis destacados em verde
Timezone auto-detectado com opção de alterar
Indicador de urgência: "⚡ Últimos 2 slots hoje disponíveis"
[ ] Formulário Pré-Consultoria (Progressive Profiling):


Campos Obrigatórios (mínimos):
Nome, Email, Telefone (WhatsApp checkbox: "Confirmar via WhatsApp?")
Campos Contextuais (aparecem após selecionar slot):
"Qual seu principal objetivo?" (radio buttons):
[ ] Proteger criptomoedas/ativos digitais
[ ] Planejar sucessão de empresa familiar
[ ] Evitar inventário judicial demorado
[ ] Outro (text field)
"Patrimônio estimado?" (dropdown: <500k | 500k-2M | 2M-5M | >5M | Prefiro não informar)
"Já possui testamento em cartório?" (Sim/Não → Se sim, campo "Deseja migrar para digital?")
[ ] Confirmação & Preparação:


Email automático (imediato):
Link Google Meet/Zoom
Checklist: "📋 Tenha em mãos: documentos de identidade, lista aproximada de bens, dúvidas anotadas"
Botão "Adicionar ao Google Calendar" (ICS attachment)
SMS 1h antes: "Sua consultoria com [Nome Advogado] começa em 1h. Link: [url curto]"
Advanced Users & Edge Cases:
[ ] Edge Case: Todos slots ocupados:


Mensagem: "Próximo slot disponível em [data]. Quer prioridade se houver cancelamento?"
Checkbox "Entrar na fila de espera" → notificação automática se abrir vaga
[ ] Estado: Lead já agendou e não compareceu (no-show):


Email D+1: "Perdemos você ontem! Reagende aqui com 15min de bônus" (slot estendido de 30 para 45min)
Limite: 2 no-shows → bloqueia agendamento (força preenchimento de questionário mais completo)
[ ] Qualificação Automática:


Se patrimônio >R$ 5M ou marcou "empresa familiar" → consultor sênior atribuído automaticamente
Se "urgência" (ex: diagnóstico médico grave mencionado em "outro") → flag de prioridade para equipe

Feature 2.2: Pós-Consultoria - Conversão
User Stories:
[ ] Como lead após consultoria, quero receber proposta clara por escrito, para avaliar com calma
[ ] Como prospect comparando opções, quero ver termos e garantias, antes de inserir cartão de crédito
[ ] Como time de vendas, quero automatizar follow-up, para não perder leads quentes por esquecimento
UX/UI Considerations
Core Experience:
[ ] Proposta Comercial Automatizada (enviada até 2h após call):


PDF personalizado:
Recap: "Conforme conversamos, você mencionou [ativos digitais + 2 imóveis]"
Plano recomendado: "Testamento Digital Essencial - R$ 1.500 (setup) + R$ 1.000/ano"
O que está incluído (checklist visual): ✅ Validação forense | ✅ Custódia blockchain | ✅ Monitoramento API...
Próximos passos: "Clique aqui para iniciar seu testamento" (link único com 7 dias de validade)
Garantia destacada: "Se não aprovarmos sua documentação, 100% de reembolso"
[ ] CTA de Conversão:


Botão primário no email: "Começar Meu Testamento" → redireciona para checkout
Botão secundário: "Tenho mais perguntas" → abre ticket de suporte ou reagenda call
[ ] Follow-up Automatizado (Drip Campaign):


D+1: Email educativo: "5 motivos para não adiar seu testamento" (blog post)
D+3: Case de cliente: "Como [nome] protegeu R$ 2M em Bitcoin em 48h" (depoimento em vídeo)
D+7: Escassez sutil: "Seu link de proposta expira amanhã. Precisa de mais tempo?" (extensão de 3 dias se clicar)
D+10: Último contato: "Vamos arquivar sua consultoria. Algo mudou?" (call-to-action para reagendar)
Advanced Users & Edge Cases:
[ ] Edge Case: Lead não abre nenhum email:


D+4: SMS: "Oi [Nome], tudo bem? Conseguiu ver a proposta que enviei? Responda SIM para reenviar" (conversacional)
[ ] Estado: Lead clicou várias vezes mas não converteu:


Trigger: Se abriu proposta 3x+ mas não foi ao checkout → notificação para BDR humano
BDR envia mensagem personalizada no WhatsApp: "Vi que você revisou a proposta. Posso esclarecer alguma dúvida?"
[ ] Integração CRM (Notion/Airtable no MVP):


Status automatizados: "Consultoria Realizada" → "Proposta Enviada" → "Engajado" (abriu email) → "Checkout Iniciado" → "Convertido"
Dashboard: Taxa de conversão Consultoria→Venda (meta: 30%)

## Phase 5: Onboarding e Elaboração Digital
Feature 3.1: Wizard de Inventário de Ativos (Progressive Disclosure)
User Stories:
[ ] Como cliente sem conhecimento jurídico, quero preencher formulário intuitivo, sem medo de errar
[ ] Como pessoa ocupada, quero salvar progresso e voltar depois, sem perder informações
[ ] Como usuário com patrimônio complexo, quero adicionar detalhes avançados sem poluir interface para casos simples
UX/UI Considerations
Core Experience:
[ ] Onboarding Inicial (Boas-vindas):


Tela de introdução: "Vamos criar seu testamento em 7 passos simples. Tempo estimado: 20-30 minutos"
Opção de escolha:
"Já sei o que fazer, vamos lá!" → inicia wizard direto
"Prefiro um tour rápido" → walkthrough interativo (5 telas)
Progress bar sempre visível no topo: "Passo 1 de 7: Bens Imóveis"
[ ] Padrão de cada Seção (Exemplo: Imóveis):


Estado Vazio:
Card visual com ícone de casa: "Você possui imóveis? (casas, apartamentos, terrenos)"
Dois botões: "Sim, adicionar" | "Não possuo"
Se clicar "Não": seção colapsa, vai para próximo passo
Estado de Adição:
Form compacto (campos essenciais apenas):
"Tipo" (dropdown: Casa | Apartamento | Terreno | Comercial)
"Endereço completo" (autocomplete Google Places)
"Você é proprietário de:" (slider: 0%-100%, default 100%)
Link expansível: "➕ Adicionar informações avançadas" (revela campos opcionais):
Matrícula do imóvel
Upload de escritura (drag & drop, PDF/JPG, max 10MB)
Observações (ex: "Financiado, 120 parcelas restantes")
Estado com Múltiplos Itens:
Lista de cards colapsáveis: cada imóvel exibe resumo (endereço + percentual)
Ações: Editar (modal) | Remover (confirmação: "Tem certeza?")
Botão "Adicionar outro imóvel" sempre visível no rodapé
[ ] Auto-save & Continuidade:


Salvamento automático a cada 30 segundos (indicador sutil: "✓ Salvo às 14:32")
Se sair e voltar: retoma do último passo preenchido
Email D+1 se não completou: "Continue seu testamento de onde parou" (link direto)
Advanced Users & Edge Cases:
[ ] Seção 6: Ativos Digitais (Mais Complexa):


Categorização visual (cards selecionáveis):


💰 Criptomoedas | 🖼️ NFTs | 🌐 Domínios | 📱 Redes Sociais | ☁️ Armazenamento
Criptomoedas (Progressive Disclosure Extrema):


Pergunta inicial: "Onde suas criptos estão armazenadas?"
"Exchange (Binance, Coinbase...)" → instruções simples: nome da exchange + email cadastrado
"Carteira própria (Metamask, Ledger...)" → alert laranja: "⚠️ Requer cuidado especial"
Se "carteira própria":
Tela educativa (obrigatória, não pulável):
"Nunca armazene sua seed phrase aqui. Vamos criar instruções seguras para seus herdeiros"
Vídeo 60s: "Como configurar multisig com a gente (Fase 3) ou deixar instruções seguras"
Campos:
"Tipo de carteira" (Metamask | Ledger | Outro)
"Saldo aproximado" (apenas referência, não obrigatório)
"Instruções para herdeiros" (textarea):
Placeholder: "Ex: A seed phrase está no cofre do banco X, agência Y. Contactar [pessoa de confiança] para acesso"
Checkbox obrigatório: "Confirmo que NÃO estou inserindo seed phrases ou chaves privadas aqui"
Redes Sociais (Decisão Binária):


"O que deseja que aconteça com suas contas?"
Memorializar (Facebook/Instagram oferece isso)
Deletar permanentemente
Transferir acesso (quem: campo de beneficiário)
[ ] Edge Case: Usuário quer pular tudo e ir direto para beneficiários:


Botão "Pular para beneficiários" disponível (mas warning: "Recomendamos completar inventário para testamento completo")
[ ] Validação Inteligente:


Se menciona "Bitcoin" em campo de texto mas não marcou categoria Criptomoedas → sugestão: "Notamos que você mencionou criptomoedas. Quer adicionar na seção específica?"
Feature 3.2: Validação por Vídeo (Prova Forense)
User Stories:
[ ] Como testador, quero ter clareza do que vou declarar no vídeo, para não errar ou parecer inseguro
[ ] Como advogado validador, quero roteiro estruturado e checklist técnico, para garantir validade jurídica
[ ] Como pessoa tímida com câmera, quero ambiente confortável e possibilidade de refazer, sem constrangimento
[ ] Como cliente preocupado com privacidade, quero garantia de que a gravação é criptografada, antes de gravar
UX/UI Considerations
Core Experience:
[ ] Pré-Agendamento da Sessão:


Trigger: Aparece após completar inventário de ativos (Passo 7/7)
Tela de transição: "Ótimo! Seu inventário está completo. Próxima etapa: validação forense por vídeo (15 minutos)"
Explicação visual (vídeo curto 45s): Advogado explica o processo, mostra exemplo de sessão bem-sucedida
Calendário embutido: Slots de 30min (15min sessão + 15min buffer)
Checklist pré-gravação enviado por email:
✅ Documento oficial com foto (RG, CNH ou passaporte)
✅ Ambiente silencioso e bem iluminado
✅ Conexão estável de internet (teste de velocidade inline)
✅ Estar sozinho (sem terceiros visíveis/audíveis)
[ ] Sala de Espera Virtual (10min antes da sessão):


Interface similar a Zoom/Meet:
Preview da câmera do usuário: "Teste seu áudio e vídeo"
Indicador de qualidade: "✓ Boa iluminação | ⚠️ Ruído de fundo detectado"
Chat com advogado: "Estou finalizando a sessão anterior, início em 5 minutos"
Documento de revisão: Resumo do testamento que será validado (PDF, pode imprimir)
Reassurance: "🔒 Esta gravação será criptografada AES-256 imediatamente após o término"
[ ] Durante a Gravação (Interface Dual):

 Tela do Usuário (Cliente):


Layout limpo: câmera do advogado pequena no canto, câmera do usuário em destaque
Teleprompter sutil (texto do roteiro rola automaticamente, ritmo controlado pelo advogado)
Indicador de gravação: "🔴 REC 03:47" (sempre visível)
Botão de pausa (apenas advogado pode acionar, não o cliente - evita edições)
Tela do Advogado (Painel de Validação):


Checklist técnico em tempo real:
[ ] Documento válido apresentado e legível
[ ] Ambiente adequado (sem terceiros)
[ ] Cliente demonstra lucidez/capacidade
[ ] Todos os campos do roteiro confirmados
Controles: Pausar | Reiniciar seção | Finalizar e aprovar
Notas privadas: Campo para observações (ex: "Cliente hesitou ao mencionar filho, mas confirmou distribuição")
[ ] Roteiro de Declaração (Estrutura Padronizada):


Bloco 1 - Identificação (2min):
Advogado: "Por favor, apresente seu documento oficial para a câmera"
Advogado lê: "Confirma que seu nome completo é [nome] e CPF [xxx.xxx.xxx-XX]?"
Cliente: "Confirmo"
Bloco 2 - Capacidade Jurídica (1min):
Advogado: "Declara estar em pleno gozo de suas faculdades mentais, sem coação ou influência de terceiros?"
Cliente: "Declaro"
Advogado: "Compreende que este documento tem validade jurídica e distribui seus bens conforme sua livre vontade?"
Cliente: "Compreendo e confirmo"
Bloco 3 - Confirmação do Inventário (5-7min):
Advogado lê resumo categoria por categoria:
"Confirma que possui os seguintes imóveis: [lista]?"
"Confirma que as criptomoedas listadas estão armazenadas em [exchange/carteira] conforme descrito?"
Cliente responde "Confirmo" para cada categoria
Bloco 4 - Beneficiários e Distribuição (3-4min):
Advogado: "Confirma que deseja distribuir seus bens da seguinte forma: [percentuais/itens específicos para cada herdeiro]?"
Cliente: "Confirmo"
Advogado: "Está ciente de que 50% do patrimônio é legítima de herdeiros necessários e não pode ser livremente disposta?"
Cliente: "Estou ciente"
Bloco 5 - Declaração Final (1min):
Cliente lê (ou repete após advogado): "Declaro que todas as informações prestadas são verdadeiras e que este é meu testamento particular, feito por livre e espontânea vontade"
Advogado: "Data e hora: [timestamp]. Sessão encerrada."
Advanced Users & Edge Cases:
[ ] Edge Case: Problemas técnicos durante gravação:


Se conexão cai: Sessão salva até o ponto, pode retomar (não precisa recomeçar)
Se áudio inaudível: Advogado pausa, pede para ajustar, retoma bloco específico
Limite: 3 tentativas/reagendamentos gratuitos, após isso cobra taxa de R$ 150 (evita abuso)
[ ] Edge Case: Cliente demonstra incapacidade/coação:


Advogado tem botão "Suspender Sessão por Suspeita" (não visível para cliente)
Processo interno: Compliance analisa gravação, contato com cliente em separado, pode recusar emissão do testamento
Email para cliente: "Identificamos inconsistências que precisam ser esclarecidas antes de prosseguir" (linguagem neutra)
[ ] Estado: Aprovação Pós-Gravação:


Advogado emite Declaração de Capacidade Jurídica (PDF assinado digitalmente via ICP-dele)
Cliente recebe email (até 24h): "Sua validação foi aprovada! Próxima etapa: assinatura digital"
Gravação processada:
Hash SHA-256 gerado
Arquivo criptografado com AES-256
Metadata registrado: duração, timestamp, ID do advogado validador
[ ] Armazenamento & Auditoria:


Gravação armazenada em AWS S3 (bucket criptografado, região Brasil)
Acesso restrito: apenas advogado que conduziu + compliance + sistema de abertura pós-óbito
Retenção: permanente enquanto testamento ativo, após óbito mantém por 20 anos (prazo prescricional)

Feature 3.3: Assinatura Digital ICP-Brasil
User Stories:
[ ] Como cliente sem certificado digital, quero orientação clara de como obter, para não travar o processo
[ ] Como usuário com e-CPF, quero fluxo simples de assinatura, sem sair da plataforma
[ ] Como pessoa preocupada com segurança, quero verificar que o documento assinado é exatamente o que validei, antes de assinar
UX/UI Considerations
Core Experience:
[ ] Verificação de Certificado (Pré-Assinatura):


Tela de transição: "Última etapa: assinatura digital qualificada"
Pergunta: "Você já possui certificado digital ICP-Brasil (e-CPF ou e-CNPJ)?"
SIM → Fluxo direto de assinatura
NÃO → Fluxo de orientação/emissão
[ ] Fluxo: Não Possui Certificado:


Explicação: "O certificado digital é como sua identidade eletrônica, reconhecida legalmente. Sem ele, seu testamento não tem validade."
Opções apresentadas (cards comparativos):
Opção 1: e-CPF A3 (Token/Cartão)
Validade: 3 anos
Custo: R$ 150-250 (direto na certificadora)
Prazo: 2-5 dias úteis (videoconferência de validação)
Benefício extra: "Use para IR, processos trabalhistas, etc"
Opção 2: e-CPF A1 (Arquivo digital)
Validade: 1 ano
Custo: R$ 80-120
Prazo: 24-48h (mais rápido)
Limitação: Menos seguro, não aceito em todos os contextos
Parceria de Emissão Simplificada (MVP):
Botão: "Emitir e-CPF via [Parceiro] com 15% de desconto"
Redirect para certificadora parceira (Soluti, Valid) com código de rastreamento
Email de acompanhamento: "Seu e-CPF está em processamento. Você receberá notificação quando estiver pronto"
Notificação quando pronto: "Seu e-CPF foi emitido! Volte aqui para assinar seu testamento"
[ ] Fluxo: Possui Certificado (Assinatura):

 Passo 1 - Revisão Final do Documento:


Preview do PDF (testamento completo, 3-8 páginas típicas):
Navegação por seção: "Ir para: Bens Imóveis | Beneficiários | Cláusulas Especiais"
Diff visual se houve alterações desde a gravação: "✏️ Você atualizou a seção Criptomoedas em [data]"
Checkbox obrigatório: "Li e confirmo que este documento reflete integralmente minha vontade"
Reassurance: "Este é o documento que será assinado. Após assinatura, alterações exigirão nova validação."
Passo 2 - Escolha da Certificadora:


Detecção automática: Sistema tenta detectar certificados instalados no navegador/SO
Se detectado: "Encontramos seu e-CPF [Nome da Certificadora]. Usar este?"
Se não detectado: Lista de certificadoras suportadas (Soluti, Valid, Serpro, Certisign)
Cliente seleciona → redirect para portal da certificadora
Passo 3 - Processo de Assinatura (Integração via API):


Fluxo varia por certificadora, mas típico:
Usuário insere PIN do certificado (modal da certificadora)
Certificadora valida e retorna assinatura digital
Sistema valida integridade: Hash do PDF assinado = Hash registrado
Loading state: "Validando assinatura..." (spinner)
Sucesso: "✓ Documento assinado com sucesso às [timestamp]"
Advanced Users & Edge Cases:
[ ] Edge Case: Certificado expirado/inválido:


Erro claro: "Seu certificado expirou em [data]. Renove antes de continuar"
CTA: "Renovar agora" (link para certificadora)
Opção: "Usar outro certificado"
[ ] Edge Case: Falha na validação de integridade:


Raro, mas crítico: Se hash não bate → possível adulteração
Sistema bloqueia: "Detectamos inconsistência no documento. Por segurança, bloqueamos a assinatura"
Ação automática: Alerta para compliance, contato imediato com cliente
Resolução: Gera novo documento, nova validação por vídeo pode ser necessária
[ ] Estado Pós-Assinatura: Registro Blockchain


Processo automático e transparente:
Hash SHA-256 do documento assinado gerado
Transação enviada para Polygon (ou blockchain escolhido)
Smart contract registra: TestamentoCriado(testamentoID, hashDocumento, timestamp, cpfHash)
Cliente vê confirmação em tempo real:
"🔗 Seu testamento foi registrado em blockchain"
Link para explorer: "Verificar autenticidade no Polygonscan" (abre transação pública)
Explicação simples: "Este registro público prova que seu testamento existia nesta data e não foi alterado"
[ ] Finalização & Entrega:


Email imediato com anexos:
PDF assinado (com certificado ICP embutido)
Certificado de Registro Blockchain (PDF, contém link para tx)
Declaração de Capacidade Jurídica do advogado (da etapa de vídeo)
Dashboard atualizado: Status muda para "✓ Testamento Ativo"
Tela de sucesso:
"🎉 Parabéns! Seu testamento está protegido"
Breakdown: "O que acontece agora?"
✅ Monitoramento de APIs ativado (próxima verificação em 24h)
✅ Custódia segura ativa (3 camadas de proteção)
✅ Beneficiários serão notificados conforme instruído
CTA: "Gerenciar Beneficiários" | "Voltar ao Dashboard"

## Phase 6: Custódia e Segurança (Envelopamento Digital)
Feature 4.1: Criptografia Multi-Camada (Shamir Secret Sharing)
User Stories:
[ ] Como cliente técnico, quero entender matematicamente como a chave é protegida, para confiar na segurança
[ ] Como usuário leigo, quero garantia simples de que ninguém (nem a empresa) pode acessar meu documento, enquanto estou vivo
[ ] Como beneficiário futuro, quero certeza de que conseguirei acessar quando necessário, mesmo se a empresa falir
UX/UI Considerations
Core Experience:
[ ] Processo Transparente Pós-Assinatura (Acontece em Background):


Loading state durante registro: "Protegendo seu testamento..."
Animação educativa (30 segundos, skippable):
Visual: Documento sendo fragmentado em 3 partes coloridas
Narração: "Sua chave de acesso está sendo dividida em 3 partes. Nenhuma parte sozinha abre seu testamento"
Infográfico mostra destinos:
🔵 Parte 1 → AWS KMS (cofre na nuvem)
🟢 Parte 2 → Advogado Master (pessoa física)
🟠 Parte 3 → Sistema de Monitoramento (acionado apenas em caso de óbito)
[ ] Página de Explicação Técnica (Acessível via "Como funciona?"):


Seção 1: "O Problema"
"Se sua chave ficasse em um único lugar, qualquer invasão ou falha comprometeria tudo"
Seção 2: "A Solução: Shamir Secret Sharing"
Explicação didática: "Imagine uma porta com 3 fechaduras. Você precisa de 2 de 3 chaves para abrir (k=2, n=3)"
Diagrama interativo: Usuário pode clicar em combinações (Parte 1+2 = ✓ Abre | Parte 1 sozinha = ✗ Bloqueado)
Seção 3: "Cenários de Abertura"
Óbito confirmado: Sistema combina Parte 1 (KMS) + Parte 3 (trigger automático) = Abertura
Falência da empresa: Depositário libera Parte 2 + Parte 1 (backup) = Acesso garantido aos herdeiros
Tentativa de invasão: Mesmo com acesso ao servidor, atacante só tem Parte 1 = Inútil
[ ] Dashboard: Indicador de Segurança:


Card "Status de Proteção":
✅ Criptografia AES-256 ativa
✅ Chaves distribuídas (3/3 partes em cofres separados)
✅ Backup geográfico ativo (2 regiões)
✅ Última verificação de integridade: [data]
Botão: "Verificar Autenticidade" → Abre modal com hash blockchain e link para explorer
Advanced Users & Edge Cases:
[ ] Edge Case: Usuário quer exportar/baixar documento:


Bloqueio intencional: "Por segurança, testamentos não podem ser baixados enquanto você está vivo"
Alternativa: "Você pode visualizar a qualquer momento no dashboard (com autenticação 2FA)"
Exceção: Pode baixar versão não-assinada (sem validade jurídica) para revisão offline
[ ] Auditoria de Acesso (Logs Imutáveis):


Qualquer tentativa de acesso (mesmo interna) gera log:
Timestamp, IP, usuário/sistema, ação (visualização, tentativa de descriptografia)
Cliente pode ver logs no dashboard: "Histórico de Acesso"
Ex: "01/10/2024 14:32 - Você visualizou testamento via web app (IP: 177.x.x.x)"
Se aparecer acesso não reconhecido: Botão "Reportar Acesso Suspeito"

Feature 4.2: Registro Imutável em Blockchain
User Stories:
[ ] Como cliente cético com blockchain, quero prova verificável independente, sem confiar apenas na plataforma
[ ] Como herdeiro contestando autenticidade, quero poder validar publicamente que documento não foi alterado
[ ] Como auditor jurídico, quero rastreabilidade completa de versões e alterações
UX/UI Considerations
Core Experience:
[ ] Certificado de Registro (Gerado Automaticamente):


PDF de 1 página, linguagem acessível:
"Certificado de Registro em Blockchain"
Dados: ID do testamento, CPF (hash), data/hora de criação
Hash SHA-256: a3f5e8... (64 caracteres)
Endereço da transação: https://polygonscan.com/tx/0x...
QR Code: Escaneia e vai direto para o explorer
Selo visual: "Registrado em Blockchain Público - Imutável"
[ ] Verificador Público (Landing Page Feature):


Qualquer pessoa pode verificar autenticidade (sem login):
URL: testamentodigital.com.br/verificar
Input: "Cole o hash do documento ou ID do testamento"
Output:
✓ "Documento autêntico, registrado em [data]"
Link para transação blockchain
Aviso: "Este verificador NÃO exibe o conteúdo do testamento, apenas confirma sua existência e integridade"
[ ] Timeline de Versões (Dashboard do Cliente):


Visualização cronológica:
V1: 15/01/2024 - Testamento criado | Hash: abc123... | Blockchain TX
V2: 03/06/2024 - Atualizado (adicionado imóvel) | Hash: def456... | Blockchain TX
Cada versão tem link "Ver mudanças" (diff visual)
Cada versão tem "Verificar no Blockchain" (abre explorer)
Advanced Users & Edge Cases:
[ ] Edge Case: Blockchain temporariamente indisponível:


Fallback: Registro em fila, processado quando rede voltar
Cliente vê status: "⏳ Aguardando confirmação blockchain (estimativa: 5 minutos)"
Se >1h sem confirmação: Alerta para equipe técnica
[ ] Custo de Gas (Transparência):


Embora absorvido pela plataforma, cliente pode ver:
"Custo de registro blockchain: R$ 0,03 (incluído na sua anuidade)"
Educação: "Usamos Polygon por ter custos 1000x menores que Ethereum, sem comprometer segurança"
[ ] Smart Contract Público (Para Devs/Auditores):


Código aberto no GitHub: Link no rodapé do site
Documentação técnica: Como o contrato funciona, funções disponíveis
Endereço do contrato verificado no Polygonscan (qualquer um pode auditar)

Feature 4.3: Plano de Continuidade (Escrow Legal)
User Stories:
[ ] Como cliente preocupado com longevidade da empresa, quero garantia legal de acesso aos herdeiros, independente do que aconteça
[ ] Como investidor/auditor, quero ver evidência de escrow ativo, para validar sustentabilidade do negócio
[ ] Como beneficiário, quero saber que existe plano B se a plataforma sair do ar
UX/UI Considerations
Core Experience:
[ ] Explicação no Onboarding (Tela de Reassurance):


Após assinatura, antes de finalizar: "E se a empresa fechar?"
Vídeo curto (60s) do fundador/advogado explicando:
"Parte 2 da sua chave está depositada em escritório independente registrado na OAB"
"Em caso de encerramento, este depositário tem obrigação legal de liberar acesso aos seus beneficiários validados"
Documentos disponíveis: "Ver Contrato de Fiel Depositário" (PDF público, pode baixar)
[ ] Dashboard: Status de Continuidade:


Card "Garantia de Acesso Perpétuo":
✅ Contrato de escrow ativo com [Nome do Escritório OAB/XX.XXX]
✅ Última auditoria: [data] (auditoria anual obrigatória)
✅ Backup das chaves: atualizado em [data]
Link: "Entender como funciona o escrow" → página detalhada
Advanced Users & Edge Cases:
[ ] Gatilhos de Acionamento do Escrow:


Cenários previstos em contrato (cliente pode ver):
Falência/recuperação judicial da plataforma
Inadimplência do cliente por >90 dias (chave liberada, mas testamento mantido)
Descontinuação do serviço (aviso 180 dias antes)
SLA contratual: Depositário tem 48h para processar solicitações de herdeiros após trigger
[ ] Verificação Independente:


Depositário publica lista de testamentos sob custódia (IDs anonimizados) em site próprio
Cliente pode verificar: "Seu ID [xxx-xxx] está na lista ativa de [Escritório]"
[ ] Comunicação em Caso de Crise:


Se empresa entrar em dificuldade financeira: Email imediato para clientes
"Estamos em processo de reestruturação. Seus testamentos estão seguros e o escrow permanece ativo"
Portal de status: testamentodigital.com.br/status (uptime, saúde financeira básica)






## Phase 7: Monitoramento Ativo e Gatilhos
Feature 5.1: Integração com APIs de Óbito
User Stories:
[ ] Como plataforma, quero detectar óbitos em até 48h, para disparar abertura rapidamente sem depender de herdeiros
[ ] Como cliente vivo, quero transparência de como sou monitorado, sem sensação de invasão de privacidade
[ ] Como beneficiário, quero confiança de que serei notificado automaticamente, sem precisar ficar verificando
UX/UI Considerations
Core Experience:
[ ] Ativação Automática (Pós-Assinatura):


Tela de confirmação: "Monitoramento ativo desde [data/hora]"
Explicação: "Consultamos diariamente bases públicas de óbito. Você não precisa fazer nada"
Primeira consulta: Acontece em 24h (não imediatamente, evita alarme falso)
[ ] Dashboard: Status de Monitoramento:


Card "Monitoramento de Vida":
🟢 Ativo | Última consulta: Hoje às 03:42 (madrugada, horário fixo)
Próxima consulta: Amanhã às 03:42
Fonte de dados: Serasa Experian (MVP) / CRC Nacional (futuro)
Histórico: "127 consultas realizadas desde ativação - 0 alertas"
[ ] Processo de Consulta (Visível apenas para o sistema, mas documentado para cliente):


Backend automatizado:
Cron job diário às 03:42 (baixo tráfego, SLA da API melhor)
Envia CPF para API de óbito
Resposta esperada: {"status": "vivo", "ultima_atualizacao": "2024-01-09"}
Se retorna {"status": "obito", "data_obito": "2024-01-08", "certidao": "..."} → Dispara validação em camadas
Advanced Users & Edge Cases:
[ ] Edge Case: API indisponível/timeout:


Retry automático: 3 tentativas em intervalos de 2h
Se falhar após 3 tentativas: Alerta para equipe técnica
Fallback: Consulta manual via operador (liga para API alternativa ou consulta manualmente)
Cliente NÃO é notificado de falhas técnicas (evita alarme desnecessário)
[ ] Edge Case: Falso Positivo (homonímia):


Raro, mas possível se API retorna óbito de pessoa com CPF similar (erro de digitação na fonte)
Proteção: Validação em camadas (Feature 5.3) exige confirmação humana antes de abrir
[ ] Latência de Dados:


Informação clara para cliente: "Dados de óbito podem levar 24-72h para aparecer em bases públicas após registro em cartório"
Expectativa: Abertura acontece 2-4 dias após óbito (não instantânea)

Feature 5.2: Dead Man's Switch (Prova de Vida)
User Stories:
[ ] Como cliente, quero ter controle ativo de confirmar que estou vivo, caso APIs falhem
[ ] Como pessoa que viaja muito, quero flexibilidade de confirmar vida de qualquer lugar, facilmente
[ ] Como familiar de cliente, quero entender que tentativas de contato são legítimas, não golpe
UX/UI Considerations
Core Experience:
[ ] Notificação Semestral (Email + SMS):


Timing: Exatamente 6 meses após última confirmação
Email:
Assunto: "✅ Confirmação semestral - Testamento Digital"
Corpo:
"Olá [Nome], como parte da nossa rotina de segurança, pedimos que confirme que está ativo."
Botão primário: "Estou Ativo" (link único com token, expira em 30 dias)
"Esta confirmação leva 5 segundos e mantém seu testamento protegido."
Rodapé: "Esta é uma mensagem automática legítima. Nunca pediremos senhas ou dados financeiros."
SMS (paralelo):
"Testamento Digital: Confirme que está ativo clicando aqui: [link curto]. Válido por 30 dias."
[ ] Fluxo de Confirmação (One-Click):


Click no link → Redireciona para página:
"✓ Obrigado, [Nome]! Confirmação registrada em [timestamp]"
"Próxima confirmação solicitada em: [data daqui a 6 meses]"
Autenticação leve: Token no link é suficiente (não exige login, reduz fricção)
Log registrado: Confirmação feita via [email/sms], IP, data/hora
[ ] Escalonamento (Se Não Responder):


D+7 (7 dias após primeiro email):
Segundo email: Assunto com urgência moderada "⚠️ Ação necessária - Confirmação de atividade"
SMS reforço
D+14:
Tentativa de contato telefônico (operação manual):
Ligação humana: "Olá, Sr(a) [Nome], estou ligando da Testamento Digital para confirmar seu cadastro ativo"
Se atender: Confirma verbalmente, operador registra manualmente
Se não atender: Deixa mensagem + envia email com resumo da ligação
D+30 (sem resposta em nenhum canal):
Status marcado como "⚠️ Atenção - Sem resposta há 30 dias"
Sistema NÃO dispara abertura (ainda não há confirmação de óbito via API)
Alerta para equipe: Investigação manual (consulta API novamente, busca em redes sociais públicas?)
Advanced Users & Edge Cases:
[ ] Check-in Manual Antecipado:


Dashboard tem botão sempre visível: "Confirmar que Estou Ativo"
Uso: Cliente que vai viajar para local sem internet, internação hospitalar programada, etc
Ao clicar: Reseta contador para zero (próxima notificação em 6 meses)
Feedback: "✓ Confirmação registrada. Próxima solicitação em [data]"
[ ] Edge Case: Cliente faleceu mas família não sabe do testamento:


Sem resposta aos contatos + API retorna "sem registro" (óbito ainda não processado no sistema):
Sistema aguarda até API confirmar (não assume óbito apenas por falta de resposta)
Proteção: Falso positivo por ausência de resposta sozinha NÃO dispara abertura
[ ] Personalização (Futuro):


Cliente pode ajustar frequência: "Prefiro confirmação trimestral" (paga +R$ 100/ano) ou "Apenas anual" (padrão)
Cliente pode definir contato secundário: "Se eu não responder em 14 dias, liguem para [pessoa de confiança]"

Feature 5.3: Validação em Camadas (Anti-Falso Positivo)
User Stories:
[ ] Como cliente, quero ter certeza absoluta de que meu testamento não será aberto por engano, enquanto estou vivo
[ ] Como advogado responsável, quero checklist técnico claro antes de autorizar abertura, para evitar erro jurídico
[ ] Como plataforma, quero processo auditável que comprove due diligence, em caso de contestação
UX/UI Considerations
Core Experience:
[ ] Pipeline Automático de Validação (Backend):

 Layer 1: Trigger Inicial (API de Óbito)


API retorna status: "obito"
Sistema cria "Caso de Validação" (ID único)
Status: "Layer 1 ✓ - API confirmou óbito"
Não notifica ninguém ainda (processamento interno)
Layer 2: Tentativa de Contato Emergencial (Automática)


Dispara imediatamente (dentro de 1h após Layer 1):
Email urgente: "🚨 URGENTE: Detectamos registro de óbito em seu CPF. Se você está recebendo este email, responda IMEDIATAMENTE"
SMS: "Alerta crítico - possível erro em sistema de óbito. Ligue [telefone] agora"
WhatsApp (se cadastrado): Mensagem + chamada de voz automatizada
Aguarda 48h por resposta
Se responder: Layer 1 marcada como "Falso Positivo", caso arquivado
Se não responder em 48h: Avança para Layer 3
Layer 3: Verificação Cruzada (Segunda Fonte)


Sistema consulta segunda API de óbito (ex: se Layer 1 foi Serasa, consulta Boa Vista)
Ou consulta bases estaduais (SIM/SEADE para SP, equivalentes em outros estados)
Se segunda fonte também confirma: Layer 3 ✓
Se segunda fonte não confirma: Caso marcado como "Conflito - Investigação Manual"
Layer 4: Validação Humana (Advogado Master)


Painel exclusivo para advogados:
Lista de casos aguardando aprovação
Informações do caso:
Nome, CPF, data do suposto óbito (da API)
Tentativas de contato (emails enviados, calls feitas)
Resultado das APIs consultadas
Upload obrigatório: Certidão de óbito digitalizada (obtida via cartório ou família)
Checklist do advogado:
[ ] Certidão de óbito autêntica (verificou QR Code/assinatura digital)
[ ] CPF da certidão = CPF do testamento
[ ] Data de óbito coerente com consultas de API
[ ] Nenhuma resposta do cliente em 72h
Ações possíveis:
Aprovar Abertura → Dispara Feature 6 (Abertura & Distribuição)
Solicitar Mais Informações → Contato com família/beneficiários
Rejeitar (Falso Positivo) → Caso arquivado, cliente notificado
Advanced Users & Edge Cases:
[ ] Edge Case: Advogado master indisponível (férias, doença):


Sistema escala para advogado backup (sempre 2 cadastrados)
SLA: 48h para resposta de qualquer advogado, senão escala para diretor jurídico
[ ] Edge Case: Óbito em país estrangeiro:


APIs brasileiras podem não detectar
Dependência de Dead Man's Switch (falta de resposta) + família contactando plataforma
Processo manual: Família envia certidão de óbito estrangeira, traduzida e apostilada
[ ] Auditoria de Casos:


Todos os casos (aprovados ou rejeitados) ficam logados permanentemente
Dashboard interno: "127 casos processados | 3 falsos positivos detectados (2,3%)"
Caso de contestação futura: Empresa tem trilha completa de due diligence
[ ] Comunicação com Cliente (Se Falso Positivo):


Email de desculpas: "Detectamos registro incorreto de óbito em seu CPF. Seu testamento permanece protegido e nenhum acesso foi realizado"
Oferta: 1 mês de anuidade grátis como compensação pelo susto

Feature 5.4: Dashboard de Beneficiários (Gestão pelo Cliente)
User Stories:
[ ] Como testador, quero cadastrar beneficiários com antecedência, para que sejam notificados rapidamente
[ ] Como beneficiário convidado, quero confirmar meus dados facilmente, sem burocracia
[ ] Como cliente, quero alterar beneficiários a qualquer momento, refletindo mudanças na vida (divórcio, nascimento, etc)
UX/UI Considerations
Core Experience:
[ ] Tela de Gerenciamento (Dashboard Principal):


Seção "Beneficiários" com overview:
Total cadastrado: 3 beneficiários
Status: 2 validados ✓ | 1 aguardando confirmação ⏳
Lista de cards (um por beneficiário):
Nome: Maria Silva
CPF: *.456.789- (parcialmente oculto)
Parentesco: Filha
Direito: 40% do patrimônio líquido
Status: ✓ Validado em 15/03/2024
Ações: Editar | Remover | Reenviar convite
[ ] Adicionar Beneficiário (Modal/Página):


Form em steps:
Passo 1: Identificação
Nome completo
CPF (validação de formato)
Email
Telefone/WhatsApp
Parentesco (dropdown: Cônjuge | Filho(a) | Pai/Mãe | Irmão(ã) | Sobrinho(a) | Amigo | Outro)
Passo 2: Distribuição
Tipo de alocação:
[ ] Percentual do patrimônio líquido (slider 0-100%)
[ ] Itens específicos (seleciona da lista de ativos cadastrados)
Validação automática de legítima:
Se herdeiros necessários (filhos, cônjuge, pais) recebem <50% do total → Warning: "⚠️ Você está destinando menos de 50% para herdeiros necessários. Isso pode ser contestado judicialmente"
Passo 3: Herdeiro Substituto (Opcional)
"O que acontece se [Nome] falecer antes de você?"
Opções: Percentual vai para outros beneficiários (proporcional) | Designar substituto específico
[ ] Convite para Validação (Email Automatizado):


Enviado imediatamente após cadastro:
Assunto: "[Nome do Cliente] designou você como beneficiário"
Corpo:
"Você foi indicado por [Nome] para receber parte de seu patrimônio através do Testamento Digital"
"Para validar seus dados e garantir que possamos contactá-lo quando necessário, clique aqui"
Link: Página de validação (não exige cadastro na plataforma)
Página de Validação (Beneficiário):
Informações pré-preenchidas: Nome, CPF (para validar identidade)
Campos a confirmar/completar:
Endereço completo (obrigatório)
Upload de identidade (RG/CNH, frente e verso, max 5MB)
Upload de comprovante de endereço recente (<90 dias)
Checkbox: "Confirmo ciência de que fui designado beneficiário e aceito receber comunicações relacionadas"
Após envio: "✓ Dados validados! Você será notificado quando necessário"
Advanced Users & Edge Cases:
[ ] Edge Case: Beneficiário não responde ao convite:


Reenvio automático: D+7, D+14
Status permanece "Aguardando validação"
Testamento permanece válido (beneficiário não-validado ainda herda, mas notificação pós-óbito pode falhar)
Cliente vê warning: "⚠️ Maria Silva não confirmou dados. Recomendamos contato direto"
[ ] Edge Case: Remoção de beneficiário:


Confirmação obrigatória: "Tem certeza que deseja remover [Nome]? Esta ação exige re-assinatura do testamento"
Se confirmar:
Beneficiário removido recebe email educado: "Você foi removido da lista de beneficiários de [Cliente]. Nenhuma ação é necessária"
Cliente precisa re-assinar testamento (nova versão, novo hash blockchain)
[ ] Alterações Geram Nova Versão:


Qualquer mudança (adicionar, remover, editar percentual):
Sistema cria versão v2, v3, etc
Fluxo de re-assinatura:
Alterações menores (ajuste de percentual): Re-assinatura digital apenas (sem novo vídeo)
Alterações substanciais (novo beneficiário, mudança de >20% na distribuição): Recomenda nova validação por vídeo
[ ] Notificações Proativas:


Cliente recebe email ao adicionar beneficiário: "Você adicionou [Nome]. Lembre-se de informá-lo(a) pessoalmente sobre esta decisão"
Beneficiário validado recebe email anual: "Lembrando que você é beneficiário de [Cliente]. Seus dados estão atualizados? [Link para revisar]"


## Phase 8: Abertura e Distribuição (Pós-Óbito)
Feature 6.1: Notificação Automática aos Beneficiários
User Stories:
[ ] Como beneficiário, quero ser notificado com sensibilidade sobre o falecimento, sem choque ou linguagem robótica
[ ] Como herdeiro não-tech, quero entender claramente próximos passos, sem jargão jurídico
[ ] Como familiar, quero acesso rápido a documentos necessários para inventário, sem burocracia adicional
UX/UI Considerations
Core Experience:
[ ] Trigger de Notificação (Após Layer 4 aprovada):


Sistema dispara emails/SMS simultaneamente para todos beneficiários validados
Timing: Até 2h após aprovação do advogado master
[ ] Email de Notificação (Tom Empático):


Assunto: "Mensagem importante sobre [Nome do Falecido]"
Corpo:
"É com pesar que informamos o falecimento de [Nome Completo], ocorrido em [data conforme certidão]"
"Você foi designado(a) como beneficiário(a) em seu testamento digital"
Seus direitos:
Caso seja percentual: "Você tem direito a [X]% do patrimônio líquido"
Caso seja item específico: "Você receberá: [lista de bens específicos]"
Próximos passos:
"Acesse seu portal seguro clicando aqui [link com token único]"
"Prazo de acesso: 7 dias (após isso, solicite novo link via suporte)"
Suporte: "Em caso de dúvidas, nosso advogado executor [Nome] está disponível em [email/telefone]"
Rodapé: "Esta notificação é enviada com base em testamento validado e registrado legalmente"
[ ] SMS (Simultâneo):


"Lamentamos informar o falecimento de [Nome]. Você é beneficiário em testamento. Acesse: [link curto]. Válido 7 dias"
Advanced Users & Edge Cases:
[ ] Edge Case: Email/telefone inválido (bounce):


Sistema detecta bounce → tenta canal alternativo (WhatsApp se cadastrado)
Se todos canais falharem: Advogado executor tenta contato manual (via familiares ou redes sociais)
Último recurso: Publicação de edital em diário oficial (raro, alto custo)
[ ] Edge Case: Beneficiário menor de idade:


Email vai para responsável legal (se cadastrado) ou tutor designado em testamento
Linguagem adaptada: "Como responsável por [menor], você foi notificado sobre direitos sucessórios. Agende consultoria jurídica incluída"
[ ] Múltiplos Beneficiários (Coordenação):


Se >5 beneficiários: Email sugere reunião virtual coletiva com advogado
"Agendamos reunião em [data/hora] com todos beneficiários para esclarecer processo. Confirme presença"

Feature 6.2: Portal do Beneficiário (Acesso Seguro)
User Stories:
[ ] Como herdeiro, quero ver exatamente o que me cabe, de forma clara e visual
[ ] Como beneficiário técnico, quero acessar instruções de ativos digitais (criptos, senhas), de forma segura
[ ] Como pessoa preocupada com golpes, quero validar autenticidade do portal antes de fornecer dados
UX/UI Considerations
Core Experience:
[ ] Página de Login (Link do Email):


URL: app.testamentodigital.com.br/heranca/[token-unico]
Token válido por 7 dias (após isso, exige solicitação manual via suporte)
Autenticação de 2 fatores:
Passo 1: Confirmação de CPF (últimos 4 dígitos, para validar identidade)
Passo 2: Código enviado para celular cadastrado (SMS)
Reassurance visual: Certificado SSL, selos de segurança
[ ] Dashboard do Beneficiário (Após Login):

 Seção 1: Informações do Testamento


Card de overview:
"Testamento de [Nome do Falecido]"
Data do óbito: [XX/XX/XXXX]
Data de abertura: [XX/XX/XXXX]
Validade jurídica: ✓ Testamento particular com assinatura ICP-Brasil
Botão: "Ver Certidão de Autenticidade" (PDF assinado pelo advogado executor)
Seção 2: Seus Direitos


Visualização clara:
Se percentual:
"Você tem direito a 30% do patrimônio líquido"
Estimativa (se disponível): "Valor aproximado: R$ 450.000 (sujeito a inventário)"
Se itens específicos:
Lista visual com ícones:
🏠 Apartamento Rua X, 123 - Matrícula XXXXX
💰 Conta Banco Y, Ag 0001, Conta 12345-6
🔐 Carteira de Bitcoin (instruções abaixo)
Seção 3: Próximos Passos


Checklist interativo:
[ ] Obter segunda via de certidão de óbito (se não tiver)
[ ] Agendar consultoria com advogado executor (botão inline)
[ ] Reunir documentos pessoais (RG, CPF, comprovante de endereço)
[ ] Decidir: inventário judicial ou extrajudicial? (link explicativo)
Timeline estimada: "Processo típico leva 3-6 meses para conclusão"
Advanced Users & Edge Cases:
[ ] Edge Case: Conflito entre beneficiários:


Se múltiplos beneficiários contestam distribuição:
Portal exibe aviso: "Detectamos questionamentos sobre distribuição. Recomendamos mediação com advogado"
Botão: "Solicitar Mediação" (agenda reunião com todos + advogado executor)
[ ] Expiração de Token:


Após 7 dias, link para: "Seu acesso expirou por segurança. Solicite novo link"
Form simples: CPF + email + prova de identidade (upload) → Advogado valida e envia novo token em 24h

Feature 6.3: Abertura do Envelope Digital (Reconstituição de Chave)
User Stories:
[ ] Como advogado executor, quero processo técnico claro de reconstituição, sem margem para erro
[ ] Como auditor futuro, quero log completo de quem acessou e quando, para validar integridade
[ ] Como beneficiário, quero certeza de que documento aberto é o autêntico, sem adulterações
UX/UI Considerations
Core Experience (Backend + Painel Admin):
[ ] Processo Automatizado + Manual:

 Etapa 1: Combinação Automática (Parte 1 + Parte 3)


Após aprovação Layer 4: Sistema automaticamente:
Recupera Parte 1 da chave (AWS KMS)
Recupera Parte 3 (trigger de óbito ativado no sistema)
Combina usando algoritmo de Shamir (k=2, n=3)
Status: "Parcialmente reconstituída (2/3 partes combinadas)"
Etapa 2: Aprovação do Advogado Master (Parte 2)


Painel exclusivo do advogado:
Notificação: "Caso [ID] aguarda sua aprovação final para abertura"
Informações exibidas:
Nome do falecido, CPF
Data de óbito, fonte de confirmação
Beneficiários cadastrados (nomes, CPFs)
Certidão de óbito (anexada no Layer 4)
Autenticação multifator obrigatória:
Senha do advogado
Token 2FA (Google Authenticator/SMS)
Biometria (se disponível no dispositivo)
Ao aprovar: Parte 2 da chave é liberada do cofre pessoal do advogado
Sistema combina Parte 2 → Chave mestra completamente reconstituída
Etapa 3: Descriptografia do Documento


AES-256 descriptografa testamento.pdf
Hash do documento descriptografado é comparado com hash registrado em blockchain
Validação: Se hashes batem → ✓ Documento íntegro
Se não batem → 🚨 Alerta crítico, abertura bloqueada, investigação forense
[ ] Relatório de Abertura (Gerado Automaticamente):


PDF de auditoria:
"Relatório de Abertura do Testamento [ID]"
Timestamp de abertura: [data/hora exata com timezone]
Quem acessou: Advogado [Nome], OAB [XXXXX]
IP de origem: [XXX.XXX.XXX.XXX]
Hash do documento aberto: [64 caracteres]
Hash registrado em blockchain: [64 caracteres]
Validação: ✓ Hashes conferem - Documento autêntico
Este relatório é anexado ao processo de inventário como prova técnica
Advanced Users & Edge Cases:
[ ] Edge Case: Advogado master indisponível (emergência):


Sistema escala para advogado backup (Parte 2 secundária em escrow)
Processo exige aprovação dupla: Backup + Diretor Jurídico
Log registra uso de procedimento de exceção
[ ] Edge Case: Tentativa de acesso não autorizada:


Se alguém tentar acessar painel de advogado sem credenciais:
3 tentativas erradas → bloqueio de IP por 24h
Alerta para compliance: "Tentativa suspeita detectada no Caso [ID]"
[ ] Transparência para Beneficiários:


Portal do beneficiário exibe (após abertura):
"Testamento aberto em [data] por Dr. [Nome], OAB [XXX]"
Link: "Ver Relatório de Abertura" (PDF público para beneficiários)
Link: "Verificar integridade no Blockchain" (Polygonscan)

Feature 6.4: Distribuição de Ativos Digitais (Cofre de Instruções)
User Stories:
[ ] Como beneficiário de criptomoedas, quero instruções claras e seguras de acesso, sem expor seeds publicamente
[ ] Como herdeiro não-técnico, quero suporte para recuperar ativos digitais complexos, sem perder fundos por erro
[ ] Como testador, quero garantir que senhas/seeds não fiquem expostas até minha morte, mas sejam acessíveis depois
UX/UI Considerations
Core Experience:
[ ] Cofre de Instruções (Seção Especial no Portal do Beneficiário):


Aparece apenas após abertura oficial
Acesso via autenticação 2FA adicional (mesmo beneficiário já logado precisa revalidar)
Reassurance: "🔒 Conteúdo sensível - aberto apenas após óbito confirmado"
[ ] Categorias de Ativos Digitais:

 1. Senhas de Contas (Ex: Email, Redes Sociais)


Interface de "revelar senha":
Botão: "Revelar Senha do Email Gmail"
Ao clicar: Modal exibe senha por 30 segundos, depois oculta
Não permite copiar/exportar (força digitação manual - maior segurança)
Instruções adicionais: "Após acessar, recomendamos alterar senha e transferir propriedade para sua conta"
2. Criptomoedas (Instruções Específicas)


Se Exchange (Binance, Coinbase):
"Email cadastrado: [email]"
"Instruções de recuperação: Contacte suporte da [Exchange] com certidão de óbito e este testamento"
Link: "Guia de recuperação de conta Binance após óbito" (tutorial passo-a-passo)
Se Carteira Própria (Metamask, Ledger):
Aviso crítico: "⚠️ Seed phrases são irreversíveis. Qualquer erro resulta em perda total dos fundos"
Botão: "Revelar Seed Phrase" (mesmo mecanismo de 30s)
Video-tutorial: "Como importar seed phrase no Metamask" (link para YouTube)
Suporte incluso: "Agende call com especialista em criptos (1h gratuita)" - parte da anuidade
3. NFTs (Transferência de Propriedade)


"Wallet do falecido: [endereço público Ethereum]"
"NFTs identificados: [lista com links para OpenSea]"
Instruções: "Conecte wallet do beneficiário em OpenSea, use seed phrase revelada acima para assinar transferência"
Link: "Tutorial de transferência de NFT"
4. Domínios (Transferência de Registro)


"Domínio: exemplo.com.br | Registrar: Registro.br"
"Login: [email] | Senha: [revelar]"
"Instruções: Acesse painel do Registro.br → Meus Domínios → Transferir propriedade → Inserir CPF do beneficiário"
5. Cloud Storage (Google Drive, iCloud)


"Conta: [email] | Senha: [revelar]"
Decisão do falecido (configurada em vida):
[ ] Memorializar (manter arquivos acessíveis, mas read-only)
[ ] Transferir propriedade total (beneficiário vira dono)
[ ] Deletar tudo após 90 dias
Prazo: "Execute ação desejada em até 60 dias antes que provedor aplique política padrão"
Advanced Users & Edge Cases:
[ ] Edge Case: Múltiplos beneficiários para mesmo ativo digital:


Ex: 2 filhos herdam 50% cada de Bitcoin
Solução técnica (Fase 3 - Multisig):
Sistema cria carteira multisig 2-de-2 (ambos precisam assinar)
Fundos transferidos para essa carteira
Solução MVP (manual):
Instrução: "Seed phrase dá acesso total. Beneficiários devem acordar divisão e transferir fundos manualmente"
Mediação oferecida: "Solicite advogado para intermediar divisão"
[ ] Edge Case: Beneficiário perde acesso (esqueceu seed revelada):


Se ativo ainda em exchange: Suporte da exchange pode recuperar
Se em carteira non-custodial: Perda irreversível (natureza do blockchain)
Testamento inclui aviso educativo durante criação: "Criptomoedas em carteira própria não têm recuperação. Certifique-se de que beneficiários são tech-savvy ou considere deixar em exchange"
[ ] Segurança do Cofre:


Logs de acesso: "Seed phrase de Bitcoin foi revelada em [data/hora] por beneficiário [nome]"
Limite de tentativas: 5 revelações por dia (evita bots automatizados)
Notificação para outros beneficiários: "Beneficiário [X] acessou ativos digitais. Para transparência, todos estão sendo notificados"

Feature 6.5: Suporte Jurídico Pós-Abertura
User Stories:
[ ] Como herdeiro sem conhecimento jurídico, quero orientação sobre inventário, para não cometer erros que atrasem processo
[ ] Como beneficiário com questões fiscais, quero consultoria sobre impostos (ITCMD), para planejar custos
[ ] Como família em luto, quero suporte empático e paciente, sem pressão comercial
UX/UI Considerations
Core Experience:
[ ] 90 Dias de Suporte Incluído (Parte da Anuidade):


Contagem inicia na data de abertura oficial
Portal do beneficiário exibe: "Suporte ativo até [data]. Você tem direito a:"
✓ Atendimento via email (resposta em até 24h úteis)
✓ 2 consultorias de 30 minutos (videochamada com advogado executor)
✓ Revisão de documentação de inventário (checklist de docs necessários)
[ ] Agendamento de Consultoria (Self-Service):


Calendário embutido no portal (integração Calendly)
Temas pré-definidos (beneficiário escolhe foco):
[ ] Inventário judicial vs extrajudicial - qual escolher?
[ ] Como calcular ITCMD (imposto estadual sobre herança)
[ ] Transferência de imóveis - documentação necessária
[ ] Ativos digitais complexos (criptos, NFTs)
Após agendar: Email de confirmação com checklist de documentos para trazer
[ ] Central de Conhecimento (FAQs Pós-Óbito):


Artigos educativos:
"Passo a passo do inventário extrajudicial"
"Prazo para pagar ITCMD e evitar multas"
"Como transferir veículo de herança para seu nome"
Videos curtos (5-10min): Advogado explica processos comuns
Calculadora de ITCMD: "Patrimônio recebido: R$ 500k → ITCMD estimado: R$ 20k (4% em SP)"
Advanced Users & Edge Cases:
[ ] Edge Case: Beneficiário precisa de mais suporte após 90 dias:


Opção de extensão paga:
Pacote 3 meses: R$ 500 (1 consultoria/mês)
Pacote 6 meses: R$ 800 (suporte ilimitado via email)
Ou contratação avulsa: R$ 300/hora de consultoria
[ ] Edge Case: Inventário judicial obrigatório (patrimônio >R$ 2M ou menores envolvidos):


Advogado executor pode ser contratado para conduzir inventário:
Honorários: 5-10% do valor do espólio (padrão mercado)
Proposta enviada via portal após primeira consultoria
Ou indicação de advogado parceiro especializado
[ ] Suporte Emocional (Além do Jurídico):


Linguagem empática em todas comunicações: "Entendemos que este é um momento difícil..."
Opção de pausar prazos: "Precisa de mais tempo? Podemos adiar processos por 30 dias sem custo"
Parcerias (futuro): Indicação de psicólogos especializados em luto
Gestão de Ciclo de Vida (SaaS Recorrente)
Feature 7.1: Painel de Manutenção (Dashboard do Cliente Ativo)
User Stories:
[ ] Como cliente ativo, quero visualizar status do meu testamento rapidamente, sem navegar múltiplas telas
[ ] Como pessoa que teve mudança patrimonial, quero atualizar inventário facilmente, sem refazer tudo
[ ] Como usuário esquecido, quero lembretes de renovação claros, sem surpresas de bloqueio
UX/UI Considerations
Core Experience:
[ ] Dashboard Principal (Home após Login):

 Card 1: Status do Testamento


Badge de status com cores:
🟢 "Ativo" (verde) - Tudo funcionando
🟡 "Renovação em Breve" (amarelo) - <60 dias para vencer
🔴 "Ação Necessária" (vermelho) - Vencido ou pendência
Informações rápidas:
Versão atual: v3 (última atualização em 15/06/2024)
Próxima renovação: 01/03/2025
Beneficiários validados: 3 de 4
Card 2: Monitoramento Ativo


🟢 "Monitoramento ativo desde 01/03/2023"
Última consulta de API: Hoje às 03:42
Próxima confirmação de vida: 15/09/2024 (em 45 dias)
Botão: "Confirmar Vida Agora" (check-in manual antecipado)
Card 3: Segurança


✓ Documento criptografado (AES-256)
✓ Chaves distribuídas (3/3 cofres ativos)
✓ Registro blockchain verificado ([link para Polygonscan])
Última verificação de integridade: 08/01/2025
Card 4: Ações Rápidas


Botões principais:
"Atualizar Inventário"
"Gerenciar Beneficiários"
"Ver Testamento" (PDF, somente visualização)
"Central de Ajuda"
[ ] Navegação Lateral (Menu):


Meu Testamento
Beneficiários
Histórico de Versões
Pagamentos & Renovação
Configurações
Suporte
Advanced Users & Edge Cases:
[ ] Notificações In-App:


Badge de notificações no ícone de sino:
"1 beneficiário ainda não confirmou dados"
"Renovação disponível com 10% de desconto (early bird)"
Clique abre painel lateral com lista de notificações
[ ] Modo Escuro (Opcional):


Toggle no menu: "Tema Claro/Escuro"
Salvamento de preferência no perfil

Feature 7.2: Edição e Re-Assinatura de Testamento
User Stories:
[ ] Como cliente que comprou imóvel, quero adicionar ativo sem refazer todo processo, em poucos cliques
[ ] Como pessoa que se divorciou, quero remover ex-cônjuge rapidamente, com validação jurídica clara
[ ] Como usuário, quero entender quando preciso de nova validação por vídeo vs apenas re-assinatura digital
UX/UI Considerations
Core Experience:
[ ] Atualizar Inventário (Incremental):


Dashboard → "Atualizar Inventário" → Tela familiar (mesmo wizard do onboarding)
Diferença: Campos pré-preenchidos com dados atuais
Seções colapsadas por padrão (expande apenas o que quer editar)
Ex: Adicionar imóvel:
Clica "Bens Imóveis" → Expande lista atual
Botão "Adicionar Outro Imóvel" → Formulário inline
Preenche dados → "Salvar"
Auto-save contínuo (indicador: "Salvo às 14:55")
[ ] Detecção de Alterações Substanciais (Algoritmo):


Sistema classifica mudança automaticamente:
Menor (sem re-validação por vídeo):
Ajuste de percentual <20%
Adição de bem com valor <10% do patrimônio total
Atualização de dados cadastrais de beneficiário
Substancial (recomenda re-validação):
Adição/remoção de beneficiário
Mudança de >20% em distribuição
Adição de bem com valor >10% do patrimônio
Modal após salvar mudanças:
"Detectamos alteração substancial. Recomendamos nova validação por vídeo para reforçar validade jurídica."
Opções:
"Agendar Validação" (grátis, incluso)
"Apenas Re-Assinar Digitalmente" (mais rápido, mas menor proteção)
[ ] Re-Assinatura Digital (Fluxo Simplificado):


Após salvar mudanças menores:
Preview do diff: "O que mudou vs. versão anterior?"
Verde: Adicionado
Vermelho: Removido
Amarelo: Alterado
Checkbox: "Confirmo que revisões estão corretas"
Botão: "Assinar Versão Atualizada" → Fluxo ICP-Brasil (mesmo da Feature 3.3)
Após assinatura:
Novo hash registrado em blockchain
Email: "Testamento atualizado para v4. Confira mudanças aqui [link]"
Advanced Users & Edge Cases:
[ ] Edge Case: Cliente faz múltiplas edições em sequência:


Sistema agrupa: "Você fez 3 alterações nos últimos 7 dias. Assinar todas de uma vez?"
Evita custo de múltiplas transações blockchain
[ ] Histórico de Versões (Auditoria Completa):


Tela "Histórico":
Timeline visual:
v1: 01/03/2023 - Testamento criado
v2: 15/09/2023 - Adicionado imóvel (Rua X)
v3: 10/02/2024 - Beneficiário removido (João Silva)
v4: 08/01/2025 - Ajuste de percentuais
Cada versão tem:
Botão "Ver PDF desta versão"
Link "Verificar no Blockchain"
Diff visual "Ver mudanças vs. anterior"
[ ] Rollback (Restaurar Versão Anterior):


Uso raro, mas possível: "Desfazer última alteração"
Sistema restaura versão anterior, mas cria nova versão (v5 = cópia de v3)
Exige re-assinatura

Feature 7.3: Checkout de Renovação Anual
User Stories:
[ ] Como cliente satisfeito, quero renovar sem fricção, idealmente com um clique
[ ] Como usuário esquecido, quero lembretes antecipados e claros, sem taxa de urgência
[ ] Como pessoa em dificuldade financeira temporária, quero opções de parcelamento ou pausa
UX/UI Considerations
Core Experience:
[ ] Campanha de Renovação (Email Drip):

 D-60 (60 dias antes do vencimento):


Assunto: "Sua renovação do Testamento Digital - 60 dias para vencer"
Corpo:
"Renovação vence em 01/03/2025. Renove agora e ganhe 10% de desconto (Early Bird)"
"De R$ 1.000 por R$ 900/ano"
Botão: "Renovar com Desconto"
D-30:


Assunto: "Última semana de desconto - Renovação Testamento Digital"
Desconto reduz para 5%: R$ 950
D-7:


Assunto: "⚠️ Sua renovação vence em 7 dias"
Sem desconto, mas sem penalidade ainda
CTA urgente: "Renovar Agora e Manter Proteção Ativa"
D-0 (dia do vencimento):


Assunto: "Renovação vencida - Ação imediata necessária"
Explicação de consequências (ver Feature 7.4)
[ ] Página de Checkout (Simplificada):


Plano exibido: "Testamento Digital - Renovação Anual"
Preço: R$ 1.000 (ou com desconto se elegível)
Métodos de pagamento:
Cartão de crédito (salvo, se já tinha) - "Cobrar em 1 clique"
PIX (QR Code instantâneo)
Boleto (vence em 3 dias)
Opção: "Ativar renovação automática" (checkbox)
Se marcado: Próximo ano cobra automaticamente no cartão
Desconto adicional: 5% para quem aceita auto-renovação
Após pagamento: Email de confirmação + dashboard atualizado ("Ativo até 01/03/2026")
Advanced Users & Edge Cases:
[ ] Edge Case: Cartão recusado (renovação automática):


Sistema tenta 3x em dias alternados
Email após primeira falha: "Problema com pagamento. Atualize cartão aqui"
Se 3 falhas: Entra em fluxo de inadimplência (Feature 7.4)
[ ] Opção de Upgrade no Checkout:


Upsell sutil: "Adicionar Seguro de Vida por +R$ 500/ano?" (se parceria existir)
Ou: "Consultorias jurídicas ilimitadas por +R$ 300/ano"
[ ] Parcelamento (Para Casos de Dificuldade):


Cliente pode solicitar via suporte: "Preciso parcelar renovação"
Aprovação manual: 3x de R$ 350 sem juros (goodwill, evita churn)

Feature 7.4: Inadimplência e Suspensão
User Stories:
[ ] Como cliente inadimplente temporário, quero período de carência claro, sem bloqueio imediato
[ ] Como pessoa que decidiu cancelar, quero entender o que acontece com meu testamento, sem perder investimento
[ ] Como plataforma, quero recuperar inadimplentes com lembretes firmes mas respeitosos, sem ser agressivo
UX/UI Considerations
Core Experience:
[ ] Timeline de Inadimplência (Processo Gradual):

 D+0 (Dia do Vencimento):


Dashboard: Banner amarelo no topo
"⚠️ Renovação vencida. Renove agora para manter proteção ativa"
Botão: "Renovar Agora"
Funcionalidades: Todas ainda ativas (período de carência)
Email: "Sua renovação venceu. Evite suspensão renovando em até 30 dias"
D+15:


Dashboard: Banner laranja
"⚠️ 15 dias em atraso. Monitoramento será suspenso em breve"
Email + SMS: "Última chance - Renove em 15 dias ou seu testamento será pausado"
D+30 (Suspensão de Monitoramento):


Monitoramento de API de óbito suspenso (não consulta mais)
Dashboard: Banner vermelho
"🚨 Monitoramento SUSPENSO. Seu testamento não será aberto automaticamente se houver óbito"
Funcionalidades de edição: Ainda ativas (pode atualizar testamento)
Email: "Monitoramento suspenso. Testamento permanece registrado, mas sem abertura automática"
D+60 (Bloqueio de Acesso):


Dashboard: Somente leitura
Pode visualizar testamento, mas não editar
Banner: "Acesso limitado. Regularize para recuperar funcionalidades completas"
Email: "Último aviso - Seus dados serão arquivados em 30 dias"
D+90 (Arquivamento):


Dashboard: Bloqueado totalmente (login desabilitado)
Email final: "Testamento arquivado. Reative em até 1 ano pagando anuidade + taxa de R$ 200 (reativação)"
Backend: Documento criptografado movido para cold storage (S3 Glacier)
D+485 (~1 ano + 120 dias - Exclusão Definitiva):


Conformidade LGPD: Direito ao esquecimento
Email 30 dias antes: "Exclusão definitiva em 30 dias. Esta é sua última chance de reativação"
Após prazo: Dados deletados permanentemente (documento, chaves, logs)
Exceção: Blockchain permanece (dado público imutável, mas sem conteúdo do testamento)
Advanced Users & Edge Cases:
[ ] Reativação (Dentro de 1 Ano):


Login bloqueado exibe: "Conta suspensa. Reativar?"
Checkout de reativação:
Anuidade: R$ 1.000
Taxa de reativação: R$ 200 (cobre custo operacional)
Total: R$ 1.200
Após pagamento:
Testamento restaurado (mesma versão de antes da suspensão)
Monitoramento reativado em 24h
Email: "Bem-vindo de volta! Revise seu testamento para garantir que está atualizado"
[ ] Cancelamento Voluntário (Cliente Quer Sair):


Dashboard → Configurações → "Cancelar Assinatura"
Modal de retenção (último esforço):
"Tem certeza? Seu testamento será arquivado em 30 dias"
Oferta: "Fique por 6 meses grátis enquanto decide" (retenção)
Se confirmar:
Entra em D+30 diretamente (pula carência)
Pode exportar PDF do testamento (sem validade jurídica, só para registro pessoal)
[ ] Win-Back Campaign (Para Cancelados/Arquivados):


D+120 após arquivamento: Email
"Saudades! Volte e ganhe 50% de desconto na reativação"
D+300: Último email
"Exclusão definitiva em 60 dias. Proteja sua família novamente"

## Phase 9: Gestão de Ciclo de Vida (SaaS Recorrente)
Feature 7.1: Painel de Manutenção (Dashboard do Cliente Ativo)
User Stories:
[ ] Como cliente ativo, quero visualizar status do meu testamento rapidamente, sem navegar múltiplas telas
[ ] Como pessoa que teve mudança patrimonial, quero atualizar inventário facilmente, sem refazer tudo
[ ] Como usuário esquecido, quero lembretes de renovação claros, sem surpresas de bloqueio
UX/UI Considerations
Core Experience:
[ ] Dashboard Principal (Home após Login):

 Card 1: Status do Testamento


Badge de status com cores:
🟢 "Ativo" (verde) - Tudo funcionando
🟡 "Renovação em Breve" (amarelo) - <60 dias para vencer
🔴 "Ação Necessária" (vermelho) - Vencido ou pendência
Informações rápidas:
Versão atual: v3 (última atualização em 15/06/2024)
Próxima renovação: 01/03/2025
Beneficiários validados: 3 de 4
Card 2: Monitoramento Ativo


🟢 "Monitoramento ativo desde 01/03/2023"
Última consulta de API: Hoje às 03:42
Próxima confirmação de vida: 15/09/2024 (em 45 dias)
Botão: "Confirmar Vida Agora" (check-in manual antecipado)
Card 3: Segurança


✓ Documento criptografado (AES-256)
✓ Chaves distribuídas (3/3 cofres ativos)
✓ Registro blockchain verificado ([link para Polygonscan])
Última verificação de integridade: 08/01/2025
Card 4: Ações Rápidas


Botões principais:
"Atualizar Inventário"
"Gerenciar Beneficiários"
"Ver Testamento" (PDF, somente visualização)
"Central de Ajuda"
[ ] Navegação Lateral (Menu):


Meu Testamento
Beneficiários
Histórico de Versões
Pagamentos & Renovação
Configurações
Suporte
Advanced Users & Edge Cases:
[ ] Notificações In-App:


Badge de notificações no ícone de sino:
"1 beneficiário ainda não confirmou dados"
"Renovação disponível com 10% de desconto (early bird)"
Clique abre painel lateral com lista de notificações
[ ] Modo Escuro (Opcional):


Toggle no menu: "Tema Claro/Escuro"
Salvamento de preferência no perfil

Feature 7.2: Edição e Re-Assinatura de Testamento
User Stories:
[ ] Como cliente que comprou imóvel, quero adicionar ativo sem refazer todo processo, em poucos cliques
[ ] Como pessoa que se divorciou, quero remover ex-cônjuge rapidamente, com validação jurídica clara
[ ] Como usuário, quero entender quando preciso de nova validação por vídeo vs apenas re-assinatura digital
UX/UI Considerations
Core Experience:
[ ] Atualizar Inventário (Incremental):


Dashboard → "Atualizar Inventário" → Tela familiar (mesmo wizard do onboarding)
Diferença: Campos pré-preenchidos com dados atuais
Seções colapsadas por padrão (expande apenas o que quer editar)
Ex: Adicionar imóvel:
Clica "Bens Imóveis" → Expande lista atual
Botão "Adicionar Outro Imóvel" → Formulário inline
Preenche dados → "Salvar"
Auto-save contínuo (indicador: "Salvo às 14:55")
[ ] Detecção de Alterações Substanciais (Algoritmo):


Sistema classifica mudança automaticamente:
Menor (sem re-validação por vídeo):
Ajuste de percentual <20%
Adição de bem com valor <10% do patrimônio total
Atualização de dados cadastrais de beneficiário
Substancial (recomenda re-validação):
Adição/remoção de beneficiário
Mudança de >20% em distribuição
Adição de bem com valor >10% do patrimônio
Modal após salvar mudanças:
"Detectamos alteração substancial. Recomendamos nova validação por vídeo para reforçar validade jurídica."
Opções:
"Agendar Validação" (grátis, incluso)
"Apenas Re-Assinar Digitalmente" (mais rápido, mas menor proteção)
[ ] Re-Assinatura Digital (Fluxo Simplificado):


Após salvar mudanças menores:
Preview do diff: "O que mudou vs. versão anterior?"
Verde: Adicionado
Vermelho: Removido
Amarelo: Alterado
Checkbox: "Confirmo que revisões estão corretas"
Botão: "Assinar Versão Atualizada" → Fluxo ICP-Brasil (mesmo da Feature 3.3)
Após assinatura:
Novo hash registrado em blockchain
Email: "Testamento atualizado para v4. Confira mudanças aqui [link]"
Advanced Users & Edge Cases:
[ ] Edge Case: Cliente faz múltiplas edições em sequência:


Sistema agrupa: "Você fez 3 alterações nos últimos 7 dias. Assinar todas de uma vez?"
Evita custo de múltiplas transações blockchain
[ ] Histórico de Versões (Auditoria Completa):


Tela "Histórico":
Timeline visual:
v1: 01/03/2023 - Testamento criado
v2: 15/09/2023 - Adicionado imóvel (Rua X)
v3: 10/02/2024 - Beneficiário removido (João Silva)
v4: 08/01/2025 - Ajuste de percentuais
Cada versão tem:
Botão "Ver PDF desta versão"
Link "Verificar no Blockchain"
Diff visual "Ver mudanças vs. anterior"
[ ] Rollback (Restaurar Versão Anterior):


Uso raro, mas possível: "Desfazer última alteração"
Sistema restaura versão anterior, mas cria nova versão (v5 = cópia de v3)
Exige re-assinatura

Feature 7.3: Checkout de Renovação Anual
User Stories:
[ ] Como cliente satisfeito, quero renovar sem fricção, idealmente com um clique
[ ] Como usuário esquecido, quero lembretes antecipados e claros, sem taxa de urgência
[ ] Como pessoa em dificuldade financeira temporária, quero opções de parcelamento ou pausa
UX/UI Considerations
Core Experience:
[ ] Campanha de Renovação (Email Drip):

 D-60 (60 dias antes do vencimento):


Assunto: "Sua renovação do Testamento Digital - 60 dias para vencer"
Corpo:
"Renovação vence em 01/03/2025. Renove agora e ganhe 10% de desconto (Early Bird)"
"De R$ 1.000 por R$ 900/ano"
Botão: "Renovar com Desconto"
D-30:


Assunto: "Última semana de desconto - Renovação Testamento Digital"
Desconto reduz para 5%: R$ 950
D-7:


Assunto: "⚠️ Sua renovação vence em 7 dias"
Sem desconto, mas sem penalidade ainda
CTA urgente: "Renovar Agora e Manter Proteção Ativa"
D-0 (dia do vencimento):


Assunto: "Renovação vencida - Ação imediata necessária"
Explicação de consequências (ver Feature 7.4)
[ ] Página de Checkout (Simplificada):


Plano exibido: "Testamento Digital - Renovação Anual"
Preço: R$ 1.000 (ou com desconto se elegível)
Métodos de pagamento:
Cartão de crédito (salvo, se já tinha) - "Cobrar em 1 clique"
PIX (QR Code instantâneo)
Boleto (vence em 3 dias)
Opção: "Ativar renovação automática" (checkbox)
Se marcado: Próximo ano cobra automaticamente no cartão
Desconto adicional: 5% para quem aceita auto-renovação
Após pagamento: Email de confirmação + dashboard atualizado ("Ativo até 01/03/2026")
Advanced Users & Edge Cases:
[ ] Edge Case: Cartão recusado (renovação automática):


Sistema tenta 3x em dias alternados
Email após primeira falha: "Problema com pagamento. Atualize cartão aqui"
Se 3 falhas: Entra em fluxo de inadimplência (Feature 7.4)
[ ] Opção de Upgrade no Checkout:


Upsell sutil: "Adicionar Seguro de Vida por +R$ 500/ano?" (se parceria existir)
Ou: "Consultorias jurídicas ilimitadas por +R$ 300/ano"
[ ] Parcelamento (Para Casos de Dificuldade):


Cliente pode solicitar via suporte: "Preciso parcelar renovação"
Aprovação manual: 3x de R$ 350 sem juros (goodwill, evita churn)

Feature 7.4: Inadimplência e Suspensão
User Stories:
[ ] Como cliente inadimplente temporário, quero período de carência claro, sem bloqueio imediato
[ ] Como pessoa que decidiu cancelar, quero entender o que acontece com meu testamento, sem perder investimento
[ ] Como plataforma, quero recuperar inadimplentes com lembretes firmes mas respeitosos, sem ser agressivo
UX/UI Considerations
Core Experience:
[ ] Timeline de Inadimplência (Processo Gradual):

 D+0 (Dia do Vencimento):


Dashboard: Banner amarelo no topo
"⚠️ Renovação vencida. Renove agora para manter proteção ativa"
Botão: "Renovar Agora"
Funcionalidades: Todas ainda ativas (período de carência)
Email: "Sua renovação venceu. Evite suspensão renovando em até 30 dias"
D+15:


Dashboard: Banner laranja
"⚠️ 15 dias em atraso. Monitoramento será suspenso em breve"
Email + SMS: "Última chance - Renove em 15 dias ou seu testamento será pausado"
D+30 (Suspensão de Monitoramento):


Monitoramento de API de óbito suspenso (não consulta mais)
Dashboard: Banner vermelho
"🚨 Monitoramento SUSPENSO. Seu testamento não será aberto automaticamente se houver óbito"
Funcionalidades de edição: Ainda ativas (pode atualizar testamento)
Email: "Monitoramento suspenso. Testamento permanece registrado, mas sem abertura automática"
D+60 (Bloqueio de Acesso):


Dashboard: Somente leitura
Pode visualizar testamento, mas não editar
Banner: "Acesso limitado. Regularize para recuperar funcionalidades completas"
Email: "Último aviso - Seus dados serão arquivados em 30 dias"
D+90 (Arquivamento):


Dashboard: Bloqueado totalmente (login desabilitado)
Email final: "Testamento arquivado. Reative em até 1 ano pagando anuidade + taxa de R$ 200 (reativação)"
Backend: Documento criptografado movido para cold storage (S3 Glacier)
D+485 (~1 ano + 120 dias - Exclusão Definitiva):


Conformidade LGPD: Direito ao esquecimento
Email 30 dias antes: "Exclusão definitiva em 30 dias. Esta é sua última chance de reativação"
Após prazo: Dados deletados permanentemente (documento, chaves, logs)
Exceção: Blockchain permanece (dado público imutável, mas sem conteúdo do testamento)
Advanced Users & Edge Cases:
[ ] Reativação (Dentro de 1 Ano):


Login bloqueado exibe: "Conta suspensa. Reativar?"
Checkout de reativação:
Anuidade: R$ 1.000
Taxa de reativação: R$ 200 (cobre custo operacional)
Total: R$ 1.200
Após pagamento:
Testamento restaurado (mesma versão de antes da suspensão)
Monitoramento reativado em 24h
Email: "Bem-vindo de volta! Revise seu testamento para garantir que está atualizado"
[ ] Cancelamento Voluntário (Cliente Quer Sair):


Dashboard → Configurações → "Cancelar Assinatura"
Modal de retenção (último esforço):
"Tem certeza? Seu testamento será arquivado em 30 dias"
Oferta: "Fique por 6 meses grátis enquanto decide" (retenção)
Se confirmar:
Entra em D+30 diretamente (pula carência)
Pode exportar PDF do testamento (sem validade jurídica, só para registro pessoal)
[ ] Win-Back Campaign (Para Cancelados/Arquivados):


D+120 após arquivamento: Email
"Saudades! Volte e ganhe 50% de desconto na reativação"
D+300: Último email
"Exclusão definitiva em 60 dias. Proteja sua família novamente"


## Phase 10: Management (Admin Dashboard)
- [ ] Data Tables for main entities.
- [ ] BullBoard integration for Job monitoring.

**Rule:** Tasks MUST be completed in order. Phase N+1 cannot start before Phase N is "Verified".
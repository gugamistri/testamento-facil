I'll analyze the uploaded images to understand the visual design inspiration, then create comprehensive design briefs for each feature of O Testamento Digital.
The images show three distinct design approaches:
Image 1: Modern Web3/Crypto aesthetic with dark gradients (purple to black), floating 3D glass-morphism elements, and iridescent accents
Image 2: Clean insurance platform with soft backgrounds, rounded elements, clear CTAs, and mobile-first responsive design
Image 3: Sophisticated law firm site with serif typography, accordion FAQs, and professional photography
Now I'll create the design briefs for O Testamento Digital, synthesizing these inspirations with the brand's style guide.

O Testamento Digital - Feature Design Briefs
Feature 1.1: Hero Section & Value Proposition
Screen: Landing Page Hero
State 1: Initial Load (Above the Fold)
Layout: Split-screen composition (60/40 left-to-right on desktop, stacked on mobile)


Left Panel - Traditional Process:


Monochromatic treatment: desaturated image showing traditional cartório setting (stacks of paper, stamps, bureaucratic environment)
Overlaid text in Neutral Dark (#37474F) with red "strike-through" price: "~~R$ 8.000~~"
Small caption in Crimson Pro: "Processo tradicional: meses de espera"
Subtle vignette darkening edges to create dated feeling
Right Panel - Digital Solution:


Vibrant gradient background: Primary Deep Blue (#1A237E) transitioning to Accent Purple (#6A1B9A) at 135° angle
Floating UI mockup of platform dashboard with soft shadow (Y-offset 8dp, Blur 32dp, Opacity 20%)
Highlighted price in Primary Gold (#C9A054): "R$ 1.500" in H2 size (26px/34px Bold)
Subtle animated particles (gold dots) floating upward, 3000ms loop, opacity fade 0.3 to 0
Center Divider:


Vertical gradient line (4dp wide) transitioning from Neutral Light to Primary Gold
Animated pulse every 2000ms (glow effect, 240ms duration)
Headline Block:


Positioned top-center, floating above split panels with 32dp margin
Background: White (#FFFFFF) card with 24dp padding, 16dp corner radius, subtle shadow
Primary headline (H1): "Seu patrimônio não precisa se perder quando você partir"
Color: Neutral Dark (#37474F)
Weight: Extra Bold (800)
Max-width: 680px, center-aligned
Sub-headline (Body Large): "Testamento válido juridicamente, 80% mais barato, atualizado quando você quiser"
Color: Neutral Medium (#78909C)
Margin-top: 16dp
CTA Block:


Positioned 48dp below headline
Horizontal layout (stacked on mobile <768px)
Primary CTA:
Text: "Criar Meu Testamento Agora"
Style: Premium/Gold Button with subtle pulsing animation (scale 1.0 to 1.03, 1200ms loop)
Icon: Right-aligned arrow (20dp), animates 4dp right on hover
Secondary CTA:
Text: "Agendar Consultoria Gratuita"
Style: Secondary Button
Margin-left: 16dp (on desktop)
Micro-copy below CTAs (Body Micro): "Sem compromisso • Aprovação em 48h" with checkmark icons
Animation on Load:


Split panels slide in from sides (left panel from -100px, right from +100px, 600ms, deceleration curve)
Headline fades in with 200ms delay after panels settle
CTAs fade + slide up 24dp, 280ms, 400ms delay
State 2: Scroll Engaged (Sticky Trust Bar Appears)
Sticky Header:
Triggers when hero scrolls 50% out of viewport
Height: 64dp, Background: White with 95% opacity backdrop blur
Box shadow: Y-offset 2dp, Blur 12dp, Opacity 8%
Slide down animation from -64dp, 280ms, deceleration
Trust Indicators Layout:
Horizontal auto-scroll carousel (manual controls hidden, auto-advances every 4000ms)
Each indicator:
Logo/seal image (32dp height, auto-width, grayscale filter except on active)
Text label below (Caption style): certification name
Spacing: 48dp between indicators
Indicators shown:
ICP-Brasil official seal + "Certificação ICP-Brasil"
OAB logo + "Parceria OAB"
AWS Shield icon + "Segurança AWS"
Social proof counter: "3.247 testamentos protegidos" (numbers animate count-up on first view)
Mini CTA (right-aligned in sticky bar):
Compact Primary Button (height 44dp): "Começar Agora"
Only visible on desktop (>1024px), hidden on mobile to reduce clutter
State 3: Video Player Interaction
Video Container:


Positioned 48dp below CTA block, center-aligned
Max-width: 920px, aspect ratio 16:9
Border-radius: 16dp
Box shadow: Y-offset 4dp, Blur 24dp, Opacity 12%
Thumbnail State (Before Play):


Custom thumbnail: professional photo of founder/advogado (human face builds trust, no stock photos)
Overlay gradient: linear from transparent to rgba(Primary Deep Blue, 0.4) bottom-to-top
Play button:
Center-positioned circular button (72dp diameter)
Background: White with 90% opacity
Icon: Play triangle (Primary Deep Blue, 28dp)
Hover: Scale to 1.1, background to 100% opacity, 240ms
Pulsing ring animation (expands from button, fades out, 2000ms loop)
Duration badge: Bottom-right corner, pill shape (Background: rgba(Black, 0.7), text white)
Text: "90 segundos" (Body Small)
Playing State:


Native video controls (browser default, ensures accessibility)
Scrubber shows timeline markers:
0:15 - "O problema" (red dot)
0:45 - "Como funciona" (blue dot)
1:30 - "Segurança garantida" (green dot)
Closed captions enabled by default (accessibility + SEO)
Below Video - Expandable Transcript:


Collapsed state:
Link (Body Small, Primary Deep Blue): "Ler transcrição completa"
Chevron-down icon (16dp)
Expanded state:
Background: Secondary Blue Pale (#E8EAF6)
Padding: 24dp
Border-radius: 12dp
Text: Body style, max 2 columns on desktop
Smooth height expansion, 350ms, ease-out
State 4: Contextual Banner (Existing Testament Detected)
Trigger: Appears after 10 seconds of page load OR when user scrolls past 30% of page


Banner Style:


Background: Secondary Gold Light (#E4D4B4) with subtle texture pattern
Border-top: 4dp Primary Gold (#C9A054)
Padding: 20dp
Border-radius: 12dp (if floating), 0dp if full-width sticky
Content:


Icon: Document with checkmark (24dp, Primary Gold)
Headline (H4): "Já tem testamento em cartório?"
Body text (Body): "Migre para digital mantendo validade jurídica"
CTA: Secondary Button (compact, height 44dp): "Entenda Como Migrar"
Dismiss button: X icon (20dp, Neutral Medium) top-right corner
Modal on CTA Click:


Overlay: rgba(Neutral Dark, 0.6) backdrop blur
Modal card:
Max-width: 780px
Background: White
Border-radius: 16dp
Padding: 40dp
Content: Side-by-side comparison table
Left column: "Atualização em Cartório" (pain points in Error Red)
Right column: "Atualização Digital" (benefits in Success Green)
Visual divider: 2dp dashed line (Neutral Light)
Modal close: Slide down + fade out, 220ms
State 5: Mobile Optimization (<768px)
Hero Stacking:


Vertical layout, split panels become full-width stacked sections
Traditional process section: Height 280dp
Digital solution section: Height 380dp (more prominent)
Headline card: Full-width, 16dp side margins
Video Adjustments:


Autoplay muted with large "Unmute" button overlay
Subtitles always visible (not optional on mobile)
Thumbnail shows mobile-optimized crop (face more prominent)
Fixed Bottom CTA Sheet:


Primary CTA becomes sticky bottom bar on mobile
Height: 72dp
Background: White with top shadow
Button spans 90% width, centered
Stays visible during scroll (z-index above content)
Collapses to mini FAB (56dp diameter, bottom-right) after 3 seconds, shows on tap

Feature 1.2: Calculadora de Economia Interativa
Screen: Inline Calculator Section (Landing Page)
State 1: Initial View (Collapsed Overview)
Section Container:


Background: White (#FFFFFF) card
Max-width: 1080px, centered
Margin-top: 64dp from previous section
Border-radius: 16dp
Box shadow: Y-offset 2dp, Blur 20dp, Opacity 8%
Padding: 48dp (32dp on mobile)
Header:


Eyebrow text (Caption): "CALCULADORA INTERATIVA" in Primary Deep Blue
Headline (H2): "Descubra Sua Economia Real"
Subheadline (Body): "Simule em 3 passos e veja quanto você economiza vs. cartório tradicional"
Margin-bottom: 32dp
Visual Teaser:


Illustration: Calculator icon (48dp) + Money savings icon with animated coins
Coins drop animation on section enter viewport (800ms, bounce curve)
Entry CTA:


Primary Button: "Calcular Minha Economia"
On click: Smooth scroll down 48dp to reveal wizard, 400ms
State 2: Wizard Passo 1 - Patrimônio Estimado
Progress Indicator (top of wizard):


3 horizontal steps visualization
Active step: Primary Deep Blue circle (32dp diameter) with white "1"
Inactive steps: Neutral Light circles (24dp)
Connecting lines: 2dp, Neutral Light (active segments become Primary Deep Blue)
Labels below: Body Small, active step in Bold
Passo 1 Content:


Question (H3): "Qual o valor aproximado do seu patrimônio?"
Helper text (Body Small, Neutral Medium): "Inclua imóveis, investimentos, empresas e ativos digitais"
Slider Component:


Track: Full-width, 8dp height, Background: Neutral Light
Filled track: Primary Deep Blue gradient to Primary Gold (left to right)
Thumb: 44dp diameter circle, White with Primary Deep Blue 3dp border
Shadow: Y-offset 2dp, Blur 8dp, Opacity 20%
Hover: Scale 1.15, shadow increases
Markers (vertical ticks at intervals):
"< R$ 500k" (left)
"R$ 500k - 2M"
"R$ 2M - 5M"
"> R$ 5M" (right)
Value display: Large numeral (H2 size) above slider, updates in real-time
Color transitions: Neutral Dark (low values) to Primary Gold (high values)
Counter animation when dragging, easing function
Social Proof Micro-Copy:


Below slider: Body Micro in Neutral Medium
Text: "Patrimônio similar ao de 68% dos nossos clientes"
Icon: Small chart/graph icon (16dp)
Updates dynamically based on slider position
Navigation:


Primary Button: "Próximo Passo" (right-aligned)
Disabled state (gray) if no selection, becomes active with animation (fade + scale from 0.95)
State 3: Wizard Passo 2 - Tipos de Ativos
Progress Update: Step 2 circle activates (animation: scale pulse 1.0 to 1.2 back to 1.0)


Question (H3): "Que tipos de ativos você possui?"


Helper Text: "Selecione todos que se aplicam. Isso nos ajuda a calcular a complexidade"


Asset Type Cards Grid:


Layout: 2x2 grid on desktop (2x4 stacked on mobile)
Gap: 16dp between cards
Individual Card Design:


Dimensions: Square aspect ratio, min 180dp width
Background: White
Border: 2dp Neutral Light
Border-radius: 12dp
Padding: 24dp
Hover: Border becomes Primary Deep Blue, lift with shadow (Y-offset 4dp), 240ms
Selected state:
Border: 3dp Primary Deep Blue
Background: Secondary Blue Pale (#E8EAF6)
Checkmark badge: Top-right corner, 28dp circle, Success Green background, white checkmark
Animation on select: Checkmark draws with 300ms stroke animation
Card Content (Each):


Icon: 48dp, centered at top
🏠 Imóveis (house icon, Accent Emerald)
💰 Investimentos (chart icon, Info Blue)
🔐 Criptomoedas (crypto icon, Accent Purple)
🏢 Empresas (building icon, Primary Deep Blue)
Label (H4): Asset type name, centered, margin-top 12dp
Hover: Icon scales 1.1, gentle bounce
Complexity Badge (appears dynamically):


Triggers after 2+ selections
Position: Below grid, centered
Style: Pill badge, padding 8dp horizontal
Colors based on complexity:
Low (1 selection): Success Green background, "Complexidade: Baixa"
Medium (2-3): Warning Orange, "Complexidade: Média"
High (4+): Error Red, "Complexidade: Alta - Recomendamos consultoria"
Appears with slide-up + fade animation, 280ms
Navigation:


"Voltar" Ghost Button (left)
"Ver Resultado" Premium/Gold Button (right, disabled until ≥1 selection)
State 4: Wizard Passo 3 - Resultado (Dramatic Reveal)
Progress: Step 3 activates, confetti micro-animation (gold particles, 1500ms)


Comparison Section:


Layout: Two columns, side-by-side on desktop (stacked on mobile)
Gap: 24dp
Each column in card format
Left Card - Cartório Tradicional:


Background: Linear gradient from Neutral Light to Background Subtle
Border-left: 4dp Error Red
Padding: 32dp
Header (H4): "Cartório Tradicional"
Price display:
Strikethrough text: "~~R$ 8.500~~" (H2 size, Neutral Medium)
Breakdown icon (info circle, 20dp): On hover/tap, tooltip shows calculation formula
Tooltip: "Base: 1% do patrimônio (R$ 5.000) + Taxa fixa (R$ 3.500)"
Pain points list (Body Small, Error Red bullets):
"Processo presencial obrigatório"
"Alterações custam novo testamento"
"Sem monitoramento ativo"
Right Card - Testamento Digital (Emphasized):


Background: Linear gradient from White to very subtle Gold tint


Border-left: 4dp Success Green


Border: 2dp Primary Gold (entire card)


Padding: 32dp


Slight elevation: Box shadow Y-offset 6dp, Blur 28dp


Header (H4): "Testamento Digital" with gold sparkle icon


Price Display (Animated Counter):


"R$ 1.500" in H1 size, Primary Deep Blue
Counter animates from R$ 8.500 down to R$ 1.500 over 1200ms, deceleration
"+ R$ 1.000/ano" (Body, Neutral Medium) below
Savings Highlight (Most Prominent):


Background: Success Green with 10% opacity
Border-radius: 8dp
Padding: 16dp
Text: "Economia no 1º ano: R$ 6.000" (H3, Success Green)
Percentage badge: "80% mais barato" in pill badge (Success Green background)
Animated entry: Scale from 0.9 to 1.0, 350ms, spring curve
Benefits list (Body Small, Success Green checkmarks):


"Atualização ilimitada incluída"
"Monitoramento automático 24/7"
"Suporte jurídico incluso"
Breakdown Transparency Link:


Below comparison cards, centered
Link text (Body Small): "Como calculamos?" with question icon
On click: Modal opens (same style as Feature 1.1 State 4)
Modal shows detailed formula + assumptions
Final CTA Section:


Margin-top: 32dp
Premium/Gold Button: "Garantir Essa Economia"
On click: Redirects to checkout or opens lead capture modal (see State 5)
Secondary link below: "Agendar consultoria antes" (Ghost button style)
State 5: Lead Capture Modal (Progressive Profiling)
Trigger: After Passo 2 completion (appears subtly, not blocking)


Toast Notification Style:


Position: Bottom-right corner (bottom-center on mobile)
Background: White card with shadow
Max-width: 420px
Border-radius: 12dp
Padding: 20dp
Slide-up animation from +100dp, 300ms
Content:


Icon: Save/bookmark icon (24dp, Primary Deep Blue)
Text (Body): "Quer salvar essa simulação?"
Input field: Inline email input (height 48dp, simplified design)
Placeholder: "seu@email.com"
Style: Minimal border-bottom only (2dp Neutral Light)
Submit button: Compact Primary Button (height 40dp): "Enviar"
Post-Submission:


Toast transforms: Success checkmark icon appears
Text: "✓ Enviamos o PDF com sua simulação para [email]"
Link: "Baixar agora" (opens PDF in new tab)
Auto-dismisses after 5 seconds, fade-out
PDF Content (Auto-Generated):


Branded header with logo
Simulation results (visual matching web version)
CTA section: "Começar meu testamento" with unique tracking link
10% discount code displayed (converts email into qualified lead)
State 6: Edge Case - Very High Patrimony (>R$ 10M)
Detection: Triggers when slider reaches > R$ 10M


Custom Message Card (replaces standard result):


Background: Secondary Gold Light with subtle texture
Border-left: 4dp Primary Gold
Icon: Briefcase with sparkle (32dp)
Headline (H4): "Patrimônio Alto Requer Consultoria Especializada"
Body text (Body):
"Para patrimônios acima de R$ 10M, recomendamos estruturação tributária personalizada"
"Nossa equipe de advogados especialistas pode criar plano sob medida"
CTA: Primary Button: "Falar com Especialista"
Links directly to calendar scheduling (bypasses standard checkout)
Note (Body Small, Neutral Medium): "Testamento digital ainda aplicável, com planejamento adicional"

Feature 1.3: FAQ Jurídico & Objeções
Screen: FAQ Section (Landing Page)
State 1: Section Overview (Categorized Tabs)
Section Container:


Background: Background Subtle (#F5F7FA)
Full-width section
Padding: 64dp vertical, 48dp horizontal (16dp on mobile)
Header:


Eyebrow (Caption): "PERGUNTAS FREQUENTES" centered
Headline (H2): "Suas Dúvidas Respondidas" centered
Subheadline (Body): "Transparência total sobre validade jurídica e segurança"
Margin-bottom: 48dp
Tab Navigation:


Horizontal tabs, centered


Each tab:


Height: 52dp
Padding: 24dp horizontal
Background: Transparent (inactive), White (active)
Border-radius: 10dp 10dp 0 0 (top corners only)
Text: H4 size with icon prefix (24dp)
Active indicator: 4dp Primary Deep Blue bottom border
Hover (inactive): Background transitions to rgba(White, 0.5), 240ms
Three Tabs:


"⚖️ Validade Jurídica" (Primary Deep Blue icon when active)
"🔒 Segurança Técnica" (Accent Emerald icon when active)
"👨‍👩‍👧 Para Famílias" (Primary Gold icon when active)
Active Tab Content Area:


Background: White
Border-radius: 0 0 16dp 16dp (bottom corners)
Padding: 40dp
Box shadow: Y-offset 2dp, Blur 16dp, Opacity 6%
Tab Content Transition:


Cross-fade between tabs, 280ms
Content slides up 24dp during fade-in (subtle movement)
State 2: Accordion Questions (Within Active Tab)
Question List Layout:


Vertical stack
Gap: 12dp between items
Individual Accordion Item (Collapsed):


Background: Background Pure (#FFFFFF)


Border: 1.5dp Neutral Light


Border-radius: 12dp


Padding: 20dp


Cursor: pointer


Hover:


Border color transitions to Primary Deep Blue, 240ms
Subtle lift: Y-offset 2dp shadow appears
Question Display:


Layout: Flex row, space-between alignment
Left side:
Badge (if applicable): "MAIS PERGUNTADO" pill
Background: Warning Orange with 15% opacity
Text: Caption style, Warning Orange
Margin-right: 12dp
Question text (H4, Neutral Dark): "É juridicamente válido?"
Right side:
Chevron-down icon (24dp, Neutral Medium)
Rotates 180° when expanded, 240ms ease-out
Individual Accordion Item (Expanded):


Border color: Primary Deep Blue (stays active)


Chevron rotated up


Height expands smoothly, 350ms ease-out


Answer Content:


Padding-top: 20dp (creates separation from question)
Border-top: 1dp Neutral Light (subtle divider)
Text:
Primary answer: Body style, max 100 words, Neutral Dark
Key phrases in Bold (e.g., legal article numbers)
Action Links (if applicable):
"Ver resposta técnica completa" link (Body Small, Primary Deep Blue)
Opens modal (see State 4) with detailed legal explanation
Auto-Scroll Behavior:


When user expands accordion, page smoothly scrolls to bring question to top of viewport (240ms)
Prevents disorienting jumps on mobile
State 3: Critical Questions (Always Visible Section)
Position: Top of FAQ tab content, before general accordion


Layout: Grid of 3 cards (1 column on mobile)


Critical Question Card Design:


Background: White
Border-left: 4dp Accent Emerald (security/trust color)
Border-radius: 12dp
Padding: 24dp
Box shadow: Y-offset 2dp, Blur 12dp, Opacity 5%
Card 1: "É juridicamente válido?"


Icon: Gavel/judge icon (32dp, Primary Deep Blue) top-left
Question (H4): "É juridicamente válido?"
Answer (Body):
"Sim. Seu testamento é particular qualificado (Art. 1.876 do Código Civil), com assinatura ICP-Brasil (mesma do e-CPF) + validação por advogado registrado na OAB."
Bold emphasis: "mesma validade de um testamento público"
Social Proof CTA:
Secondary Button: "Ver Exemplo Aprovado em Inventário"
On click: Opens PDF modal with anonymized successful case
Badge: "Caso Real" pill (Success Green)
Card 2: "E se minha família contestar?"


Icon: Shield with checkmark (32dp, Accent Emerald)
Question (H4): "E se minha família contestar?"
Answer (Body):
"A gravação forense + registro blockchain cria prova técnica de sua capacidade mental e vontade autêntica."
Statistic highlight: "Em 3 anos de operação, zero contestações bem-sucedidas" (Bold, Success Green)
Reassurance Badge:
Pill badge at bottom: "Garantia de Suporte Jurídico Incluído"
Background: Success Green with 15% opacity
Icon: Checkmark (16dp)
Card 3: "Como funciona se a empresa fechar?"


Icon: Lock with key (32dp, Accent Emerald)
Question (H4): "Como funciona se a empresa fechar?"
Answer (Body):
"Seu testamento está protegido por escrow legal. Parte da chave fica com depositário independente registrado na OAB."
Diagram Visual:
Simplified illustration of Shamir Secret Sharing (3 cofres)
Cofre icons (24dp each) with lines connecting
Labels: "AWS" | "Advogado OAB" | "Sistema"
Deep-Dive CTA:
Link: "Entender o Plano de Continuidade" (Body, Primary Deep Blue)
Arrow icon right-aligned (16dp)
Links to dedicated page (or expands accordion with full technical detail)
State 4: Modal - Technical Answer Detail
Trigger: Click "Ver resposta técnica completa" in any accordion


Modal Overlay:


Background: rgba(Neutral Dark, 0.7) with backdrop blur
Click outside to close
Modal Card:


Max-width: 780px
Background: White
Border-radius: 16dp
Padding: 48dp (32dp on mobile)
Max-height: 80vh, vertical scroll if needed
Content Structure:


Header:
Question repeated (H3, Neutral Dark)
Close button: X icon (24dp, Neutral Medium) top-right, outside padding
Body:
Detailed explanation: Body style, rich formatting allowed
Legal citations in Crimson Pro font: "Art. 1.876 do Código Civil"
Bullet points for multi-part answers
Embedded images/diagrams if relevant (e.g., blockchain verification flow)
Footer:
Related questions links: "Você também pode se interessar por:"
2-3 question links (Body Small, Primary Deep Blue)
On click: Modal content cross-fades to new question, 280ms
State 5: Empty FAQ State (User Didn't Find Answer)
Trigger: User scrolls to bottom of accordion list without expanding any, or collapses all after opening


Proactive Support Card (appears at bottom):


Background: Info Blue with 10% opacity
Border-left: 4dp Info Blue
Border-radius: 12dp
Padding: 32dp
Icon: Headset/support icon (48dp, Info Blue)
Content:


Headline (H4): "Não encontrou sua dúvida?"
Body text: "Fale agora com um advogado especializado. Estamos aqui para ajudar."
Operating Hours Logic:
Durante horário comercial (9h-18h, dias úteis):
Primary Button: "Iniciar Chat ao Vivo"
Badge: "🟢 Online agora"
Fora de horário:
Secondary Button: "Deixar Mensagem"
Text: "Respondemos em até 4 horas úteis"
Alternative: Phone number displayed (Body, with phone icon)
WhatsApp link (if available): Green WhatsApp button with icon
State 6: Animation - Security Question Trust Signals
Enhanced Answer for Security Questions:


When user expands "Como a criptografia funciona?" or similar:
Animated Icon Sequence:


Padlock icon (32dp) animates:
Starts unlocked (open shackle)
Smoothly closes over 400ms
Subtle glow pulse (Accent Emerald) appears around locked icon
Checkmark appears inside lock (fade in, 200ms delay)
Blockchain Verification Link:


Within answer text, inline link: "verificar em blockchain público"
On click: Opens new tab to Polygonscan with example transaction
Icon: External link (16dp) to indicate new tab
Link includes tooltip on hover: "Exemplo de registro real (dados anonimizados)"

Feature 2.1: Calendário de Consultoria Gratuita
Screen: Consultoria Scheduling Page
State 1: Calendar Interface (Embedded Calendly/Cal.com)
Page Layout:


Full-width container, max-width 1200px centered
Background: Background Subtle
Padding: 48dp vertical
Left Panel (40% width on desktop, full-width on mobile):


Background: White card


Border-radius: 16dp 0 0 16dp (right side open)


Padding: 40dp


Sticky position (stays visible while scrolling calendar on desktop)


Header:


Eyebrow (Caption): "CONSULTORIA GRATUITA"
Headline (H2): "Agende Sua Consultoria"
Body text: "30 minutos com advogado especializado. Sem compromisso, sem custo."
Benefits List (Checkmarks with Success Green):


"✓ Esclareça todas as dúvidas jurídicas"
"✓ Avalie se o testamento digital é para você"
"✓ Receba proposta personalizada"
Icon: 20dp checkmark circles, margin-right 12dp
Trust Signals:


Advisor photo (circular, 80dp diameter)
Name (H4): "Dr. [Nome do Advogado]"
Credentials (Body Small): "OAB/SP XXXXX | 15 anos de experiência"
Stars rating: 5 stars (16dp each, Primary Gold)
Review count: "(247 avaliações)" Body Micro
Reassurance Note:


Background: Secondary Blue Pale
Border-radius: 8dp
Padding: 16dp
Icon: Info circle (20dp, Info Blue)
Text (Body Small): "🔒 Esta consulta é confidencial e gravada apenas com seu consentimento"
Right Panel (60% width, full-height on mobile):


Background: White


Border-radius: 0 16dp 16dp 0 (left side open)


Padding: 40dp


Embedded Calendly/Cal.com iframe


Styling matches brand (Primary Deep Blue accents via Calendly customization)
Calendar view: Week view default (shows 7 days ahead)
Calendar Features:


Available Slots:


Displayed as pills: Background Secondary Blue Pale, text Primary Deep Blue
Hover: Background transitions to Primary Deep Blue, text to White, 240ms
Each slot shows: "14:00 - 14:30" format
Urgency Indicator (conditional):


If <3 slots remaining for current day:
Badge appears top-right: "⚡ Últimos 2 slots hoje"
Background: Warning Orange with 20% opacity
Pulses gently (scale 1.0 to 1.05, 1200ms loop)
Timezone Auto-Detection:


Detected timezone shown in dropdown (top-right of calendar)
Dropdown styled to match brand
Icon: Globe (20dp, Neutral Medium)
Text: "GMT-3 São Paulo" (Body Small)
Click to change: Modal list of common Brazilian timezones
State 2: Slot Selected - Pre-Consultation Form
Transition: Calendar panel slides left 24dp + fades out (300ms), form slides in from right


Form Container:


Same white panel as calendar
Progress indicator at top:
"Passo 2 de 3: Suas Informações"
Progress bar: 66% filled (Primary Deep Blue)
Required Fields Section:


Section title (H4): "Informações de Contato"


Input Fields (Standard Input style from design system):


Nome Completo
Label: "Nome Completo"
Placeholder: "João Silva"
Validation: Min 3 characters
Error state: "Por favor, insira seu nome completo"
Email
Label: "Email"
Placeholder: "joao@email.com"
Validation: Email format regex
Success indicator: Green checkmark icon right-aligned when valid
Telefone/WhatsApp
Label: "Telefone (WhatsApp)"
Placeholder: "(11) 98765-4321"
Input mask: Automatically formats as user types
Checkbox below (inline):
"Confirmar horário via WhatsApp?" (checked by default)
Icon: WhatsApp logo (16dp, WhatsApp green)
Contextual Fields Section (Progressive Disclosure):


Appears with slide-down animation (280ms) after user fills name + email


Section title (H4): "Conte-nos Mais" with subtext "(Opcional, mas nos ajuda a personalizar)"


Field 1: Objetivo Principal


Label: "Qual seu principal objetivo?"
Radio button group (vertical stack, 8dp gap):
Each option:
Height: 48dp
Background: White
Border: 2dp Neutral Light
Border-radius: 10dp
Padding: 12dp 16dp
Icon left-aligned (24dp, Primary Deep Blue when selected)
Hover: Border becomes Primary Deep Blue
Options:
"🔐 Proteger criptomoedas/ativos digitais"
"🏢 Planejar sucessão de empresa familiar"
"⚖️ Evitar inventário judicial demorado"
"✏️ Outro" (expands text field below when selected)
If "Outro" selected:
Text area appears below (height 100dp)
Placeholder: "Descreva sua situação brevemente..."
Field 2: Patrimônio Estimado


Label: "Patrimônio estimado?"
Dropdown (Select component from design system)
Options:
"< R$ 500 mil"
"R$ 500 mil - 2 milhões"
"R$ 2 milhões - 5 milhões"
"> R$ 5 milhões"
"Prefiro não informar"
Icon: Dollar sign (20dp, Neutral Medium)
Field 3: Testamento Existente


Label: "Já possui testamento em cartório?"
Toggle switch component:
Width: 60dp, height: 32dp
Off state: Neutral Light background
On state: Primary Deep Blue background
Thumb: 28dp circle, White, smooth slide animation 240ms
If toggled ON:
Follow-up question appears below:
"Deseja migrar para digital?" (Yes/No radio buttons)
Navigation Buttons:


Bottom-fixed on mobile (above keyboard when typing)
Flex row: space-between
"Voltar" Ghost Button (left)
"Confirmar Agendamento" Primary Button (right)
Disabled (gray) until required fields filled
Enabled: Transitions to active color with scale pulse (1.0 to 1.03)
State 3: Confirmation & Preparation
Transition: Form fades out, confirmation screen fades in (300ms)


Success Visual:


Large checkmark icon (80dp) center-top
Animated draw: Stroke animation 500ms, Success Green
Background circle pulse (expands and fades, 800ms)
Confirmation Card:


Max-width: 620px, centered
Background: White with subtle Success Green tint (3% opacity)
Border: 2dp Success Green
Border-radius: 16dp
Padding: 48dp
Content:


Headline (H3): "Consultoria Agendada! 🎉"


Confirmation details (Body):


Icon row layout (icon + text for each):
📅 Data: "Terça, 15 de Jan, 2025"
🕐 Horário: "14:00 - 14:30 (GMT-3)"
👤 Com: "Dr. [Nome do Advogado], OAB/SP XXXXX"
💻 Link: "[URL Google Meet/Zoom]" (Copy button inline)
Preparation Checklist:


Title (H4): "Prepare-se para a Consultoria"
List (Body Small, checkboxes UI but not interactive):
"📋 Tenha em mãos: documentos de identidade"
"📝 Liste aproximadamente seus bens"
"❓ Anote suas dúvidas principais"
Calendar Export:


Primary Button: "Adicionar ao Google Calendar"
Icon: Calendar + (20dp, left-aligned)
Generates .ics file download on click
Alternative links below: "Outlook" | "Apple Calendar" (Body Small links)
Email Confirmation (Sent Immediately):


Automated email preview shown in expandable accordion:
"📧 Email de confirmação enviado para [user-email]"
Expand to see email preview (styled HTML in iframe)
SMS Reminder (Information Banner):


Background: Info Blue with 10% opacity
Border-left: 4dp Info Blue
Icon: Phone (20dp)
Text (Body Small): "Você receberá SMS 1 hora antes: 'Sua consultoria com [Nome] começa em 1h. Link: [url]'"
Bottom Actions:


"Voltar ao Site" Ghost Button
"Acessar Dashboard" Secondary Button (if user has account)
State 4: Edge Case - All Slots Occupied
Detection: When Calendly returns no available slots for next 7 days


Calendar Panel Replacement:


Same white panel layout
Centered content
Visual:


Illustration: Calendar with "X" marks or full booking icon (120dp)
Color: Neutral Medium (not alarming, just informational)
Message:


Headline (H3): "Agenda Temporariamente Cheia"
Body text: "Próximo slot disponível em [data detectada automaticamente]"
Suggestion (Body): "Quer entrar na fila de espera para cancelamentos?"
Waitlist Form:


Compact form (name + email only)
Checkbox: "Entrar na fila de espera"
Explanation (Body Small): "Notificaremos por email/SMS se abrir vaga antes de [data]"
Submit button: Secondary Button "Entrar na Fila"
Post-Submission:


Success toast: "✓ Você está na fila. Avisaremos se houver vaga!"
Auto-dismiss 5 seconds
State 5: Edge Case - No-Show Prevention
Context: User already scheduled and no-showed once before (detected via email/CPF)


Warning Banner (appears above calendar):


Background: Warning Orange with 15% opacity
Border: 2dp Warning Orange
Border-radius: 10dp
Padding: 16dp
Icon: Alert triangle (24dp, Warning Orange)
Message:


Text (Body Small, Bold): "Notamos que você não compareceu à última consultoria agendada"
Explanation: "Por favor, confirme sua presença. Após 2 faltas, será necessário preencher questionário mais detalhado"
Checkbox (required): "Confirmo que vou comparecer" (must check to proceed)
System Logic:


First no-show: Email D+1 "Perdemos você ontem! Reagende com 15min de bônus"
Second no-show: Booking blocked, forces longer qualification form (more friction)
State 6: Auto-Qualification (High-Value Lead Detection)
Trigger: Form detects:


Patrimônio > R$ 5M OR
Objective: "Sucessão de empresa familiar"
Consultant Assignment Logic (Background, user doesn't see):


System auto-assigns senior consultant (not junior)
Meeting duration auto-extends to 45 minutes (not 30)
Internal CRM flag: "High-priority lead - requires partner involvement"
User-Visible Changes:


Consultant photo switches to senior advisor
Credentials update: "Especialista em Sucessão Empresarial | 20+ anos OAB"
Duration shown: "45 minutos" instead of 30
No additional friction for user, just better resource allocation

Feature 2.2: Pós-Consultoria - Conversão
Screen: Email Drip Campaign & Follow-Up Flow
State 1: Automated Proposal Email (Sent ≤2h Post-Call)
Email Design (HTML, mobile-responsive):


Header:


Logo (left-aligned)
Tagline: "Seu Testamento Digital em 48h"
Hero Section:


Background: Subtle Primary Gold gradient
Headline (H3): "Proposta Personalizada - [Nome do Cliente]"
Subheadline: "Conforme nossa conversa de hoje"
Recap Section:


Background: Secondary Blue Pale
Border-left: 4dp Primary Deep Blue
Icon: Clipboard checklist (32dp)
Text (Body): "Você mencionou: [ativos digitais listados] + [2 imóveis]"
Purpose: Prove consultant was listening, build trust
Plan Recommendation Box:


Background: White with Primary Gold border (3dp)
Padding: 32dp
Title (H4): "Testamento Digital Essencial"
Pricing:
"R$ 1.500 (setup único)" in H3, Primary Deep Blue
"+ R$ 1.000/ano (manutenção)" in Body
Discount badge (if applicable): "10% desconto se iniciar em 7 dias"
Inclusions Checklist:


Visual checkmarks (Success Green)
List (Body Small):
"✅ Validação forense por vídeo"
"✅ Custódia blockchain AES-256"
"✅ Monitoramento automático 24/7"
"✅ Atualizações ilimitadas"
"✅ Suporte jurídico incluso (90 dias pós-óbito)"
Primary CTA:


Premium/Gold Button: "Começar Meu Testamento Agora"
Link: Unique tracking URL with 7-day expiration token
Expires in: "Link válido até [data + 7 dias]" (Body Micro, Neutral Medium)
Secondary CTA:


Ghost Button: "Tenho Mais Perguntas"
Opens support ticket OR link to schedule follow-up call
Guarantee Badge:


Bottom section, centered
Shield icon (48dp, Success Green)
Text (Body Small): "Se não aprovarmos sua documentação, 100% de reembolso"
Footer:


Consultant signature: Photo + name + OAB credentials
Contact: Direct email + phone
Unsubscribe link (legal requirement)
PDF Attachment (Auto-Generated):


Filename: "Proposta_TestamentoDigital_[Nome].pdf"
Content mirrors email structure
Branded header/footer
Legally valid quote (valid for 30 days, not 7 like email link)
State 2: Follow-Up Drip Campaign (Automated Emails)
D+1 Email - Educational Content:


Subject: "5 Motivos Para Não Adiar Seu Testamento"
Content:
Brief intro: "Olá [Nome], após nossa conversa, separei este artigo que pode interessar"
Blog post excerpt (first 150 words)
CTA: "Ler Artigo Completo" (links to blog on site)
Soft sell footer: "Lembrete: Sua proposta expira em 6 dias [Link]"
No aggressive sales - pure value-add to nurture relationship
D+3 Email - Social Proof (Case Study):


Subject: "Como [Nome Real] Protegeu R$ 2M em Bitcoin em 48h"
Content:
Video thumbnail (clickable, links to YouTube/Vimeo)
Customer testimonial quote (Body style, italic):
""Estava preocupado com minhas criptos. O processo foi surpreendentemente simples""
Customer photo (circular, 60dp)
Name + profession (e.g., "Carlos Silva, Empresário")
Brief case study text (3-4 paragraphs, Body style)
CTA: "Proteger Meu Patrimônio Também" (Primary Button)
Reminder: "Proposta expira em 4 dias"
D+7 Email - Scarcity/Urgency (Gentle):


Subject: "⏰ Seu Link de Proposta Expira Amanhã, [Nome]"
Content:
Headline (H4): "Última Chamada - Link Expira em 24h"
Body text (not manipulative, just factual):
"Por questões de segurança, links personalizados expiram após 7 dias"
"Se ainda está considerando, podemos estender por mais 3 dias"
Two CTAs:
Primary: "Começar Agora" (original link)
Secondary: "Preciso de Mais Tempo" (button that extends link + replies with new link)
Alternative: "Prefere reagendar uma call? [Calendar link]"
D+10 Email - Last Contact (Archiving Notice):


Subject: "Vamos Arquivar Sua Consultoria - Algo Mudou?"
Tone: Respectful closure, not pushy
Content:
"Olá [Nome], como não tivemos retorno, entendemos que agora não é o momento ideal"
"Vamos arquivar sua consultoria. Você pode retomar a qualquer momento"
Gentle probing:
"Se algo mudou ou tem dúvidas, estamos aqui para ajudar"
List of common objections (clickable links):
"Preço está fora do orçamento?" (links to financing options page)
"Não entendi a tecnologia?" (links to explainer video)
"Preciso de mais tempo para decidir?" (offers to schedule new call in 30/60/90 days)
Final CTA: "Manter Contato Ativo" (reopens lead, consultant reaches out personally)
State 3: Lead Behavior Tracking (System Dashboard for Sales Team)
CRM Integration (Notion/Airtable in MVP, Salesforce in scale):


Lead Status Pipeline:


"Consultoria Realizada" →
"Proposta Enviada" →
"Engajado" (opened email 1+ time) →
"Muito Engajado" (opened 3+ times) →
"Checkout Iniciado" →
"Convertido" ✓
Engagement Metrics Tracked:


Email opens (count + timestamps)
Link clicks (which CTA clicked)
Proposal PDF downloads
Time spent on checkout page (via analytics)
Scroll depth on checkout page
Alert Triggers for Human Intervention:


Trigger 1: Lead opened proposal 3+ times but never clicked CTA


Alert: Slack notification to BDR
Message: "[Nome] revisou proposta 3x mas não converteu - possível objeção de preço ou dúvida técnica"
Action: BDR sends personalized WhatsApp message (see State 4)
Trigger 2: Lead clicked "Começar Testamento" but abandoned checkout (didn't complete form)


Alert: Email D+1 - "Vimos que você começou. Tudo certo?"
Offer help: "Encontrou alguma dificuldade? Podemos ajudar via call ou chat"
Trigger 3: Lead extended deadline 2+ times


Alert: High intent signal, assign to senior closer
Action: Personal phone call from partner: "Vi que você está avaliando. Posso esclarecer algo específico?"
State 4: Human Follow-Up (WhatsApp Outreach)
Timing: Triggered by behavioral signals (State 3 alerts)


WhatsApp Message Template (Conversational, Not Robotic):


"Oi [Nome], tudo bem?"
"Aqui é [Nome do BDR/Consultor] da Testamento Digital"
"Vi que você revisou nossa proposta algumas vezes"
"Ficou com alguma dúvida que eu possa esclarecer?"
"Responda SIM se quiser conversar, ou NÃO se preferir que eu não insista 😊"
If User Responds "SIM":


BDR engages in conversation
Common objections handled:
"Preço alto" → Explain ROI, offer payment plan
"Não entendi tecnologia" → Schedule screen-share walkthrough
"Preciso convencer cônjuge" → Offer joint call
Goal: Book follow-up call or close sale via chat
If User Responds "NÃO":


"Sem problemas! Qualquer coisa, estamos aqui"
Lead marked "Nurture - Low Priority" in CRM
Receives only quarterly newsletter (not sales emails)
State 5: Checkout Abandonment Recovery
Trigger: User clicks "Começar Testamento" but exits before completing payment


Immediate Action: Exit-intent popup (if on web, not mobile)


Overlay: rgba(Neutral Dark, 0.8)
Modal: Max-width 520px, White background
Headline (H4): "Antes de Ir..."
Text (Body): "Notamos que você não finalizou. Algo te impediu?"
Quick Poll (single-select radio buttons):
"Preço está alto"
"Não entendi o processo"
"Preciso de mais tempo"
"Problema técnico no site"
"Outro" (text field)
Submit button: "Enviar Feedback" (helps team understand friction points)
CTA: "Continuar de Onde Parei" (saves progress, reloads checkout)
Email D+1 (if abandoned without completing poll):


Subject: "Seu Testamento Está Quase Pronto, [Nome]"
Content:
Friendly tone: "Notamos que você começou mas não finalizou"
Offer: "Salvamos seu progresso. Continue de onde parou: [Link]"
Incentive: "10% de desconto se completar nas próximas 48h" (urgency + value)
Support: "Encontrou dificuldade? Chat conosco [Link]"
SMS D+2 (if still not converted):


"Oi [Nome], tudo bem? Seu testamento está 90% pronto. Finalize aqui: [link curto]"

Feature 3.1: Wizard de Inventário de Ativos
Screen: Onboarding Wizard (Multi-Step Form)
State 1: Welcome Screen (Boas-Vindas)
Full-Screen Layout:


Background: Subtle radial gradient from Background Pure (center) to Background Subtle (edges)
Center-aligned content, max-width 680px
Hero Visual:


Illustration: Stylized checklist/document icon (120dp) with animated checkmarks appearing sequentially (800ms total)
Color: Primary Deep Blue with Primary Gold accents
Welcome Message:


Headline (H1): "Vamos Criar Seu Testamento"
Subheadline (Body Large): "7 passos simples. Tempo estimado: 20-30 minutos"
Reassurance (Body Small, Neutral Medium): "Você pode pausar e voltar a qualquer momento"
Entry Options (Two Cards, Horizontal Layout):


Card 1: Direct Start


Background: White
Border: 2dp Primary Deep Blue
Border-radius: 12dp
Padding: 32dp
Hover: Lift with shadow, scale 1.02
Icon: Rocket (48dp, Primary Deep Blue)
Title (H4): "Já Sei o Que Fazer"
Description (Body Small): "Vamos direto ao ponto"
Button: Primary Button "Começar Agora"
On click: Jumps directly to Step 1
Card 2: Guided Tour


Background: Secondary Blue Pale
Border: None
Border-radius: 12dp
Padding: 32dp
Hover: Border appears (2dp Info Blue), scale 1.02
Icon: Info/guide icon (48dp, Info Blue)
Title (H4): "Prefiro um Tour Rápido"
Description (Body Small): "5 telas explicativas"
Button: Secondary Button "Ver Tour"
On click: Launches overlay walkthrough (tooltips on key UI elements)
Progress Indicator (Top of Screen):


Horizontal stepper: 7 circles representing steps
Currently at "0/7" (before starting)
All circles: Neutral Light
Text below: "Passo 1 de 7: Bens Imóveis" (Body Small, Neutral Medium)
State 2: Guided Tour (Interactive Walkthrough)
Overlay UI:


Semi-transparent backdrop: rgba(Neutral Dark, 0.85)
Spotlight effect: Circle cutout (300dp diameter) highlighting current element
Animated transition between spotlights (smooth move + fade, 400ms)
Tour Steps (5 screens):


Progress Bar highlight
Tooltip position: Below element
Text: "Sempre saiba onde está no processo. Cada etapa salva automaticamente"
Section Card highlight (mock Imóveis card)
Tooltip: "Adicione seus bens por categoria. Expanda para detalhes avançados"
Auto-Save Indicator highlight
Tooltip: "Salvamento automático a cada 30 segundos. Sem riscos de perder dados"
Help Button highlight (? icon, top-right)
Tooltip: "Dúvidas? Clique aqui para ajuda contextual em qualquer etapa"
Final Message (center screen, no spotlight)
Text: "Pronto! Vamos começar?"
Primary Button: "Iniciar Testamento"
Navigation:


"Pular Tour" link (top-right, Ghost Button style)
Bottom controls: "Anterior" | "Próximo" (1/5, 2/5, etc.)
State 3: Step Pattern (Example - Bens Imóveis)
Overall Step Layout:
Header (Sticky Top):


Progress bar: "Passo 1 de 7: Bens Imóveis" (Active step: Primary Deep Blue circle)
Auto-save status: "✓ Salvo às 14:32" (Body Micro, Success Green) - updates in real-time
Main Content Area:


Max-width: 920px, centered
Padding: 48dp vertical, 24dp horizontal
Background: Background Subtle (distinguishes from cards)
Empty State (User Hasn't Added Assets Yet):
Card Layout:


Background: White
Border-radius: 16dp
Padding: 48dp
Center-aligned content
Box shadow: Y-offset 2dp, Blur 16dp, Opacity 6%
Icon: House/home (80dp, Primary Deep Blue)


Question (H3): "Você possui imóveis?"


Subtext (Body Small): "(Casas, apartamentos, terrenos, propriedades comerciais)"


Action Buttons:


Two buttons, horizontal layout, centered
"Sim, Adicionar Imóvel" (Primary Button)
"Não Possuo" (Secondary Button)
"Não Possuo" Behavior:


Card collapses smoothly (height animates to 0, 300ms)
Progress bar auto-advances to Step 2 (auto-navigation after 800ms)
Toast notification: "Seção de imóveis marcada como vazia ✓"
Addition Form State (User Clicked "Sim, Adicionar"):
Form Expansion Animation:


Card height expands smoothly (350ms, ease-out)
Form fields fade in with stagger (each field 100ms after previous)
Essential Fields (Always Visible):


Tipo de Imóvel (Dropdown)
Options: Casa | Apartamento | Terreno | Comercial
Icon prefix changes based on selection (house, building, etc.)
Endereço Completo (Autocomplete Input)
Integration: Google Places API
As user types, dropdown suggestions appear
Selected address auto-fills: street, number, city, state, ZIP
Icon: Location pin (20dp, Primary Deep Blue)
Percentual de Propriedade (Slider)
Range: 0% - 100%
Default: 100% (full ownership)
Visual: Similar to Feature 1.2 calculator slider
Label dynamically updates: "Você é proprietário de 75%"
Use case: Joint ownership, partial inheritance
Advanced Fields (Progressive Disclosure):


Collapsed state:
Link button: "➕ Adicionar Informações Avançadas" (Ghost Button style)
Icon: Plus in circle (20dp)
Expanded state (smooth accordion, 280ms):
Reveals 3 additional fields:


Matrícula do Imóvel (Text Input)
Placeholder: "XXXXX.XXXXX.XXXXX"
Helper text: "Encontrada na escritura do imóvel"
Upload de Escritura (File Upload)
Drag & drop zone:
Background: Secondary Blue Pale
Border: 2dp dashed Primary Deep Blue
Height: 120dp
Text: "Arraste o PDF da escritura ou clique para selecionar"
Icon: Upload cloud (48dp, Primary Deep Blue)
Accepted formats: PDF, JPG (max 10MB)
On file select:
File name appears with checkmark
Thumbnail preview (if image)
Remove button (X icon)
Observações (Textarea)
Placeholder: "Ex: Financiado, 120 parcelas restantes no Banco X"
Max height: 200dp
Character count: 0/500 (bottom-right)
Action Buttons (Bottom of Form):


"Cancelar" Ghost Button (left) - discards form, collapses card
"Salvar Imóvel" Primary Button (right)
Disabled until essential fields filled
On save: Success animation (checkmark draw), form collapses to summary card (see Multi-Item State)
Multi-Item State (User Has Added 1+ Properties):
Summary Cards Layout:


Vertical stack, 12dp gap between cards
Each property: Collapsible card (accordion style)
Collapsed Summary Card:


Background: White


Border: 1.5dp Neutral Light


Border-radius: 12dp


Padding: 20dp


Hover: Border becomes Primary Deep Blue, cursor pointer


Content Layout (Horizontal flex):


Left: Property icon (32dp) + Type badge (Body Small, pill)
Center: Address text (Body, Bold)
Right: Ownership percentage badge ("100% proprietário")
Far right: Chevron-down icon (20dp) + Action dots (see below)
Action Menu (Three Dots):


Click: Dropdown menu appears
Options:
"Editar" (pencil icon) - expands card to form, pre-filled
"Remover" (trash icon) - confirmation modal (see below)
Expanded Summary Card:


Shows all details in read-only format (2-column layout)
Left column: Address, Type, Ownership
Right column: Matrícula (if added), Observações (if added)
Escritura file: Download link with PDF icon
"Editar" button at bottom to re-open form
Remove Confirmation Modal:


Overlay: rgba(Neutral Dark, 0.7)
Modal card: Max-width 460px, White, centered
Icon: Warning triangle (48dp, Error Red)
Headline (H4): "Remover Imóvel?"
Text (Body): "Esta ação não pode ser desfeita. O imóvel '[Endereço]' será removido do seu testamento"
Buttons:
"Cancelar" Secondary Button
"Sim, Remover" Destructive Button (Error Red)
On confirm: Card animates out (slide left + fade, 300ms), removed from list
"Add Another" Button:


Always visible below last card
Secondary Button: "Adicionar Outro Imóvel"
Icon: Plus (20dp)
On click: New empty form appears below existing summaries
Navigation to Next Step:


Bottom-fixed bar (sticky on scroll)
Background: White with top shadow
Padding: 16dp
Layout:
Left: "Voltar" Ghost Button (goes to previous step)
Center: Progress indicator (compact version)
Right: "Próximo Passo" Primary Button
Enabled always (even if section empty - user chose "não possuo")
State 4: Auto-Save & Continuity UX
Auto-Save Mechanism:


Triggers: Every 30 seconds OR on field blur (user leaves input)
Visual indicator:
Top-right corner: Small sync icon (20dp)
States:
Syncing: Animated rotation, Neutral Medium
Saved: Checkmark, Success Green, "✓ Salvo às 14:32"
Error: Warning icon, Error Red, "Erro ao salvar. Tentando novamente..."
Toast on error: "Conexão instável. Seus dados estão salvos localmente e serão sincronizados"
Exit & Return Flow:


If user closes tab mid-wizard:


No warning modal (trust auto-save)
Last state saved in database with timestamp
On return (next login):


Redirect directly to wizard at last incomplete step
Welcome banner (dismissible):
Background: Info Blue with 10% opacity
Text: "Bem-vindo de volta! Continue de onde parou no Passo [N] de 7"
Button: "Continuar" (Primary) | "Recomeçar" (Ghost)
Email Reminder D+1 (if not completed):


Subject: "Continue Seu Testamento - 5 Passos Restantes"
Content:
"Olá [Nome], notamos que você começou mas não finalizou"
Progress bar visual: "3 de 7 passos completos"
CTA: "Continuar de Onde Parei" (direct link to wizard at current step)
Reassurance: "Suas informações estão salvas e seguras"

Screen: Digital Assets Section (Step 6 - Most Complex)
State 1: Digital Assets Overview (Category Selection)
Section Introduction:


Headline (H3): "Ativos Digitais e Senhas"
Subheadline (Body): "Proteja tudo o que existe no mundo digital: criptomoedas, NFTs, contas online, domínios"
Warning banner (if user selected crypto in Feature 1.2):
Background: Accent Purple with 10% opacity
Border-left: 4dp Accent Purple
Icon: Shield (24dp)
Text (Body Small): "⚠️ Atenção especial necessária para criptomoedas - nunca insira seed phrases aqui"
Category Cards Grid:


Layout: 2x3 grid on desktop (1 column stacked on mobile)
Gap: 16dp
Each card: Selectable (similar to Feature 3.1 State 3 asset type cards)
Category Cards:


💰 Criptomoedas
Icon: Bitcoin symbol stylized (48dp, Accent Purple)
Badge: "Requer Cuidado Especial" (Warning Orange pill)
Description (Body Small): "Bitcoin, Ethereum, altcoins"
🖼️ NFTs
Icon: Gallery/art frame (48dp, Accent Purple)
Description: "Colecionáveis digitais, arte NFT"
🌐 Domínios
Icon: Globe/domain (48dp, Info Blue)
Description: "Sites, URLs registrados"
📱 Redes Sociais
Icon: Share/network nodes (48dp, Info Blue)
Description: "Instagram, Facebook, LinkedIn"
☁️ Armazenamento
Icon: Cloud (48dp, Info Blue)
Description: "Google Drive, iCloud, Dropbox"
✉️ Email & Outros
Icon: Envelope (48dp, Info Blue)
Description: "Contas de email, outros serviços"
Selection Behavior:


Click card → Border becomes active (Primary Deep Blue)
Expands dedicated form below (accordion style, 350ms)
Multiple categories can be active simultaneously
Progress indicator: "X de 6 categorias configuradas"
State 2: Criptomoedas Form (Highest Security UX)
Education-First Approach (Cannot Skip):
Mandatory Education Screen:


Triggers immediately on category selection (before form)
Full-screen overlay (cannot dismiss without watching/reading)
Background: Gradient from Accent Purple to Primary Deep Blue
Content:


Icon: Shield with warning (80dp, Warning Orange)
Headline (H2): "Criptomoedas Requerem Cuidado Especial"
Key warnings (Body Large, white text):
"🚫 NUNCA armazene sua seed phrase aqui ou em qualquer plataforma online"
"✓ Vamos criar instruções SEGURAS para seus herdeiros"
"🔒 Seed phrases devem ficar em cofre físico ou papel guardado"
Video Component:


Embedded player (16:9, max-width 780px)
Video title: "Como Proteger Suas Criptos Corretamente" (60 segundos)
Content: Advogado explains proper inheritance methods
Closed captions: Always on
Must play at least 50% to proceed (progress tracked)
Proceed Button:


Disabled until video 50% watched
Checkbox required: "Entendi os riscos e NÃO vou inserir dados sensíveis"
Primary Button: "Continuar para Formulário"
Transition: Overlay fades out, form slides up from bottom (400ms)
Crypto Form Fields:
Question 1: Storage Location (Radio Buttons, Vertical Stack)
Layout: Large clickable cards (not compact radios)


Each option: 160dp height, full-width, 16dp gap


Option A: "Exchange (Binance, Coinbase, Kraken...)"


Icon: Building/bank (32dp, Info Blue)
Description (Body Small): "Suas criptos estão em uma corretora"
Badge: "Mais Simples" (Success Green)
On select: Reveals simple fields below (see Exchange Path)
Option B: "Carteira Própria (Metamask, Ledger, Trust Wallet...)"


Icon: Wallet (32dp, Warning Orange)
Description (Body Small): "Você controla as chaves privadas"
Badge: "Requer Atenção Extra" (Warning Orange)
Alert appears below (see below):
Background: Error Red with 10% opacity
Border: 2dp Error Red
Icon: Warning triangle
Text (Body Small, Bold): "⚠️ Método avançado - requer instruções detalhadas para herdeiros"
On select: Reveals advanced fields (see Wallet Path)
Exchange Path (Simple):
Fields Revealed:


Nome da Exchange (Dropdown)
Options: Binance | Coinbase | Kraken | Mercado Bitcoin | Outro (text field)
Icon: Exchange logo appears dynamically based on selection
Email Cadastrado (Email Input)
Placeholder: "email@usado.na.exchange"
Helper text: "Email usado para login na exchange"
Validation: Email format
Saldo Aproximado (Number Input, Optional)
Prefix: "R$" or "US$" toggle
Placeholder: "Ex: 50.000"
Helper text (Body Micro): "(Apenas referência, não obrigatório)"
Icon: Eye-off (20dp) - suggests privacy
Instruções para Herdeiros (Textarea)
Height: 120dp
Placeholder: "Ex: Contactar suporte da Binance com certidão de óbito e este testamento. Apresentar documento pessoal."
Pre-filled suggestion button: "Usar Texto Padrão" (Ghost Button)
On click: Fills with template text optimized for exchange recovery
Character count: 0/500
Help Section (Expandable Accordion):


Link: "📚 Guia: Como Recuperar Conta de Exchange Após Óbito"
Expands inline showing:
Step-by-step for each major exchange
Links to official exchange inheritance policies
Download PDF guide button
Wallet Path (Advanced):
Security Warning Reinforcement:


Persistent banner at top of form:
Background: Error Red with 15% opacity
Text (Body Small, Bold): "Lembrete: Seed phrases NÃO devem ser digitadas aqui. Apenas instruções de ONDE estão guardadas."
Icon: Lock (20dp, Error Red)
Fields Revealed:


Tipo de Carteira (Dropdown)


Options: Metamask | Ledger (Hardware) | Trezor (Hardware) | Trust Wallet | Outro
Icon changes based on selection
Saldo Aproximado (Same as Exchange Path, optional)


Instruções de Localização da Seed Phrase (Textarea - CRITICAL)


Height: 180dp (larger to encourage detail)
Placeholder text (extensive):
 Ex: A seed phrase de 12 palavras está escrita em papel dentro de um envelope lacrado, guardado no cofre do Banco Santander, agência 0123, caixa de segurança #456.Para acessar: Contactar [nome de pessoa de confiança], telefone [XXX], que tem cópia da chave do cofre.NUNCA digite a seed phrase aqui.


Character limit: 1000 (more space than exchange)
Required field: Cannot save without filling
Pessoa de Confiança (Text Input, Optional)


Label: "Quem pode ajudar herdeiros a localizar? (opcional)"
Placeholder: "Nome e contato de familiar/advogado/contador"
Multisig Configuration (Future Feature Toggle)


Toggle switch: "Configurar Multisig com Testamento Digital (Recomendado)"
Description: "Parte da chave fica conosco, parte com você. Requer ambos para acesso"
Badge: "Em Breve - Fase 3" (Neutral Light)
Disabled for MVP, visible to educate users
Mandatory Confirmation Checkbox:


Large checkbox (32dp × 32dp for emphasis)
Text (Body, Bold): "☑️ Confirmo que NÃO estou inserindo seed phrases ou chaves privadas aqui"
Required to save: Save button disabled until checked
Border: 2dp Error Red when unchecked, Success Green when checked
Save Behavior (Both Paths):
Validation Before Save:


If wallet path AND instructions textarea is < 50 characters:
Warning modal: "Instruções muito curtas. Herdeiros precisam de detalhes para acessar seus fundos. Continuar mesmo assim?"
Options: "Adicionar Mais Detalhes" (returns to form) | "Salvar Assim Mesmo" (proceeds)
On Successful Save:


Card collapses to summary (similar to imóveis pattern)
Summary shows:
Crypto icon + "Criptomoedas"
Storage type: "Exchange: Binance" or "Carteira: Metamask"
Saldo (if provided): "≈ R$ 50.000"
Status badge: "✓ Instruções Completas" (Success Green)
"Adicionar Outra Crypto" button appears below
State 3: Redes Sociais Form (Decision Tree)
Introduction Text:


"O que deseja que aconteça com suas contas após seu falecimento?"
Helper (Body Small): "Cada plataforma tem políticas diferentes. Configuraremos conforme possível."
Per-Platform Configuration:


Layout: Accordion list of major platforms
Platforms: Facebook | Instagram | LinkedIn | Twitter/X | TikTok
Individual Platform Accordion (Example: Facebook):


Header (Collapsed):
Facebook logo (32dp) + "Facebook & Instagram"
Status badge: "Não configurado" (Neutral Light) or "✓ Configurado"
Expanded Content:
Decision Radio Buttons (Vertical, large cards):


Memorializar
Icon: Flower/memorial (24dp, Primary Deep Blue)
Description: "Conta vira memorial. Amigos podem postar tributos. Você escolhe quem gerencia."
Badge: "Recomendado pelo Facebook"
Fields revealed on select:
"Escolher Contato Herdeiro" (Search user by email/name input)
Helper link: "Como funciona conta memorializada?" (opens modal with Facebook's policy)
Deletar Permanentemente
Icon: Trash (24dp, Error Red)
Description: "Conta e todo conteúdo serão deletados. Irreversível."
Confirmation checkbox: "Entendo que fotos/mensagens serão perdidas"
Transferir Acesso
Icon: Key handover (24dp, Primary Gold)
Description: "Dar acesso completo a beneficiário específico"
Warning: "Requer senha da conta. Recomendamos memorialização em vez de transferência"
Fields revealed:
"Beneficiário" (Dropdown populated from beneficiários cadastrados)
"Instruções de Login" (Textarea)
Placeholder: "Email: xxx | Senha: [NUNCA digite aqui, informe onde está guardada]"
Platform-Specific Notes (Info box):


Background: Info Blue with 10% opacity
Icon: Info circle
Text: "Nota: Facebook/Instagram suportam memorialização oficial. Para outras plataformas, apenas documentaremos instruções para beneficiários."
Platforms Without Official Policy (Twitter, TikTok):


Only option: "Documentar Instruções para Beneficiários"
Textarea: "Como beneficiários devem proceder?"
Pre-filled suggestion: "Contactar suporte da [plataforma] com certidão de óbito"
State 4: Validation & Smart Suggestions
Trigger: System detects potentially missing information based on user's earlier inputs


Example Scenario: User mentioned "Bitcoin" in consultoria notes (Feature 2.1 form) but didn't add crypto category in digital assets


Smart Suggestion Modal:


Appears when user clicks "Próximo Passo" from Digital Assets section
Cannot dismiss without acknowledging
Background: White card, max-width 620px, centered
Border: 3dp Warning Orange
Content:


Icon: Lightbulb (48dp, Warning Orange)
Headline (H4): "Detectamos Possível Ativo Não Cadastrado"
Body text: "Notamos que você mencionou 'Bitcoin' durante a consultoria, mas não adicionou criptomoedas na seção Ativos Digitais."
Question: "Deseja adicionar agora?"
Buttons:
"Sim, Adicionar Cripto" (Primary Button) - returns to crypto form
"Não, Continuar" (Ghost Button) - proceeds to next step
"Já Adicionei" (Ghost Button) - user confirms it's already there
Other Smart Suggestions:


Email provider detected from user's login email → Suggests adding "Email & Outros" category
Multiple imóveis with high value → Suggests consulting on ITCMD tax planning (upsell)
User is 65+ years old → Suggests shorter review cycles (semi-annual vs annual)

Feature 3.2: Validação por Vídeo (Prova Forense)
Screen: Video Validation Scheduling
State 1: Post-Inventory Transition Screen
Full-Screen Milestone Celebration:


Background: Gradient from Primary Deep Blue to Accent Emerald
Center-aligned content
Success Animation:


Checkmark circle (120dp) with stroke draw animation (600ms)
Confetti particle burst (gold particles, 1500ms)
Sound effect (optional, subtle "success" chime if user has audio on)
Congratulations Message:


Headline (H1, White): "Ótimo Trabalho!"
Subheadline (Body Large, White, 90% opacity): "Seu inventário está completo"
Progress visualization: "7 de 7 etapas concluídas" with filled progress bar
Next Step Introduction Card:


Background: White card on gradient


Max-width: 780px, centered


Border-radius: 16dp


Padding: 48dp


Content:


Eyebrow (Caption): "PRÓXIMA ETAPA"


Headline (H3): "Validação Forense por Vídeo"


Duration badge: "⏱ 15 minutos" (pill badge)


Explanation (Body):


"Para garantir validade jurídica, faremos uma videochamada com advogado onde você confirmará suas decisões."
"Isso cria prova técnica de sua capacidade mental e vontade livre."
Explainer Video (Inline Player):


Thumbnail: Advogado em sala profissional, sorrindo (humanize the process)
Duration: 45 segundos
Title overlay: "Como Funciona a Validação"
Play button: White with Primary Deep Blue icon
Content preview bullets:
"Sessão privada e confidencial"
"Roteiro estruturado e simples"
"Gravação criptografada imediatamente"
Primary CTA:


Premium/Gold Button: "Agendar Minha Validação"
Icon: Calendar (20dp, left-aligned)
On click: Transitions to calendar interface
State 2: Calendar Scheduling Interface
Layout: Similar to Feature 2.1 calendar, adapted for video session


Left Panel - Session Details:


Background: Secondary Blue Pale


Border-radius: 16dp


Padding: 32dp


Session Info Card:


Icon: Video camera (48dp, Primary Deep Blue)
Title (H4): "Sessão de Validação Forense"
Details list (Body Small):
"✓ Duração: 15 minutos"
"✓ Via videochamada (Google Meet/Zoom)"
"✓ Advogado validador: Dr. [Nome]"
"✓ Gravação criptografada (AES-256)"
Pre-Session Checklist (Expandable Accordion):


Collapsed: "📋 Checklist de Preparação (4 itens)"
Expanded shows:
"✅ Documento oficial com foto (RG, CNH, Passaporte)"
"✅ Ambiente silencioso e bem iluminado"
"✅ Conexão estável de internet"
"✅ Estar sozinho (sem terceiros visíveis/audíveis)"
Each item has info icon (16dp) with tooltip explaining why it's needed
Security Reassurance:


Background: Accent Emerald with 10% opacity
Border-left: 4dp Accent Emerald
Icon: Shield with checkmark (24dp)
Text (Body Small): "🔒 Esta gravação será criptografada AES-256 imediatamente após o término e armazenada em servidor seguro no Brasil"
Right Panel - Calendar Grid:


Embedded Cal.com/Calendly iframe
Customized brand colors (Primary Deep Blue accents)
Shows available 30-minute slots (15min session + 15min buffer)
Timezone: Auto-detected, shown at top with edit option
Slot Selection Behavior:


Click slot → Border highlights (Primary Deep Blue)
Confirmation card slides up from bottom (mobile) or appears below calendar (desktop)
State 3: Confirmation & Pre-Call Preparation
Confirmation Screen Layout:


Max-width: 720px, centered
Background: White card
Border: 2dp Success Green
Border-radius: 16dp
Padding: 40dp
Success Indicator:


Icon: Calendar with checkmark (64dp, Success Green)
Headline (H3): "Validação Agendada! ✓"
Session Details Summary:


Info boxes (horizontal layout on desktop, stacked on mobile):


Data & Hora
Icon: Calendar (24dp)
Text: "Segunda, 13 de Janeiro, 2025"
Time: "14:00 - 14:15 (GMT-3 São Paulo)"
Advogado Validador
Photo: Circular (48dp)
Name: "Dr. [Nome Completo]"
Credentials: "OAB/SP XXXXX"
Link da Chamada
Icon: Video (24dp)
Text: "[Google Meet/Zoom URL]"
Copy button (inline): On click, tooltip "Link copiado!"
Preparation Section:


Headline (H4): "Prepare-se para a Validação"
Checklist (large, interactive checkboxes for user to mark):
Each item: 48dp height, full-width
Background: Background Subtle
Border-radius: 10dp
Margin: 8dp between items
Checkbox: 24dp, animated checkmark when clicked
Items:
"Separar documento oficial com foto"
"Testar câmera e microfone" (link: "Testar Agora" opens diagnostic tool)
"Revisar testamento" (link: "Ver Meu Inventário" opens preview modal)
"Estar em ambiente apropriado (silencioso, privado)"
Reminder Settings:


Toggle switches (Body Small labels):
"Email 24h antes" (checked by default)
"SMS 1h antes" (checked by default)
"Notificação push 10min antes" (if app installed, checked)
Calendar Export:


Button row:
"Adicionar ao Google Calendar" (Primary Button, Google colors)
"Baixar ICS" (Secondary Button)
"Outlook" | "Apple Calendar" (Ghost Button links)
Document Download Section:


Headline (H4): "Documentos de Revisão"
Card:
Icon: PDF (32dp, Error Red for PDF color)
Text: "Resumo do Seu Testamento"
Subtext: "Revise antes da validação"
Download button (inline): "Baixar PDF"
Note (Body Micro): "Arquivo de 4 páginas com inventário completo e distribuição"
State 4: Virtual Waiting Room (10min Before Session)
Access Control:


Link active only 10 minutes before scheduled time
If accessed early:
Message: "Sua sessão inicia em [tempo]. Você poderá entrar 10 minutos antes."
Countdown timer (large, H2 size)
Waiting Room Interface:


Split-screen layout (60/40)
Left Panel - Video Preview:


User Camera Feed:


Live preview: 640×480dp viewport
Border: 3dp Primary Deep Blue
Border-radius: 12dp
Overlay controls:
Mute/unmute button (bottom-left)
Camera on/off button (bottom-right)
Settings gear (top-right) → opens quality settings
Quality Indicators (Below Camera):


Real-time diagnostic cards:


Iluminação
Icon: Lightbulb (20dp)
Status: "✓ Boa iluminação" (Success Green) or "⚠️ Rosto muito escuro" (Warning Orange)
Meter: Visual brightness indicator (color bar)
Qualidade de Áudio
Icon: Microphone (20dp)
Status: "✓ Áudio claro" or "⚠️ Ruído de fundo detectado"
Suggestion: "Tente local mais silencioso"
Test button: "Dizer algo e ouvir" (playback test)
Conexão
Icon: WiFi signal (20dp)
Status: "✓ Conexão estável" or "⚠️ Conexão fraca"
Speed: "Download: 15 Mbps | Upload: 8 Mbps"
Recommendation: "Mínimo 3 Mbps para vídeo HD"
Right Panel - Chat & Instructions:


Chat Interface (Top Section):


Header: "Chat com Dr. [Nome]"
Status: "🟢 Online" or "🟡 Finalizando sessão anterior, início em 3 minutos"
Message area: 300dp height, scrollable
Input: "Enviar mensagem..." (disabled if advisor not ready)
Example automated message:
"Olá [Nome], Dr. [Advogado] aqui. Estou terminando a validação anterior. Estarei com você em 5 minutos."
Review Section (Bottom):


Headline (H4): "Documento de Revisão"
Card with PDF thumbnail
Text: "Resumo do Testamento - 4 páginas"
Button: "Visualizar" (opens in modal overlay, not new tab)
Recommendation (Body Small): "Revise uma última vez enquanto aguarda"
Advisor Enters Ready State:


Chat message: "Pronto para começar! Clique em 'Iniciar Validação'"
Primary Button appears: "Iniciar Validação"
Button pulses gently (scale 1.0 to 1.05, 1200ms loop)
On click: Transitions to validation session interface
State 5: During Validation Session (Dual Interface)
CLIENT VIEW (User's Screen):
Layout: Full-screen video interface


Background: Neutral Dark (#37474F) to reduce distraction
Video Layout:


Advisor Video (Primary):
Large window: 70% of screen width
Position: Center
Border: 2dp Primary Deep Blue
Overlay: Name tag bottom "Dr. [Nome] - OAB/SP XXXXX"
Self Video (Picture-in-Picture):
Small window: 240×180dp
Position: Top-right corner
Border: 1.5dp Neutral Light
Can be dragged to different corners
Minimize button (collapses to tiny icon)
Recording Indicator (Always Visible):


Position: Top-left corner
Background: rgba(Error Red, 0.9)
Border-radius: 20dp (pill shape)
Padding: 8dp 16dp
Icon: Red dot (pulsing animation, 1000ms loop)
Text: "🔴 REC 03:47" (white text, timer counts up)
Teleprompter Display (Subtle Guidance):


Position: Bottom 20% of screen, semi-transparent overlay
Background: rgba(Neutral Dark, 0.85) with blur
Border-radius: 12dp top corners
Padding: 24dp
Content:
Current prompt text (Body Large, White, 90% opacity)
Auto-scroll: Controlled by advisor (user cannot control)
Example text: "Confirmo que possuo os seguintes imóveis: [lista]"
Emphasis: Key words in Bold (e.g., "Confirmo")
Can be toggled off: Settings button if user prefers not to read
Controls Bar (Bottom of Screen):


Background: rgba(Neutral Dark, 0.9)
Height: 64dp
Centered controls:
Mute/unmute (icon button, 44dp)
Camera on/off (icon button, 44dp)
Settings (gear icon, 44dp)
Leave call (Error Red, text "Sair" - confirmation required)
Note: No "Pause" button for client (advisor controls recording flow)
ADVISOR VIEW (Validation Panel):
Layout: Desktop-optimized dashboard


Three-panel layout: Video (60%) | Checklist (25%) | Notes (15%)
Video Panel:


Client video: Large, center
Self video: Small PIP top-right
Recording controls:
Pause/Resume (for technical issues only)
Restart Section (if client misspoke, redo current block)
Finalize and Approve (ends session)
Validation Checklist Panel (Real-Time):


Headline: "Checklist de Validação"


Interactive checkboxes (advisor marks as session progresses):


[ ] Documento Válido Apresentado
Subtext: "Cliente mostrou [RG/CNH/Passaporte] na câmera"
Timestamp auto-filled on check: "03:21"
[ ] Ambiente Adequado
Subtext: "Sem terceiros visíveis ou audíveis"
If unchecked at end: Blocks finalization
[ ] Cliente Demonstra Lucidez
Subtext: "Respostas coerentes, sem sinais de coação"
Red flag button: "Suspender por Suspeita" (see Edge Case State 7)
[ ] Todos os Campos Confirmados
Expands to show sub-list:
[ ] Imóveis confirmados
[ ] Beneficiários confirmados
[ ] Distribuição percentual confirmada
[ ] Ativos digitais confirmados
Auto-checks as advisor progresses through script
Notes Panel (Private, Not Visible to Client):


Textarea: Free-form notes
Placeholder: "Observações sobre a sessão..."
Examples:
"Cliente hesitou ao mencionar filho João, mas confirmou distribuição após reflexão"
"Conexão caiu aos 8min, retomamos do Bloco 3"
Auto-saves every 15 seconds
Stored in database, accessible only by compliance team
Script Panel (Collapsed by Default):


Accordion: Click to expand full legal script
Structured blocks (advisor clicks "Next" to advance):
Bloco 1: Identificação (2min)
Bloco 2: Capacidade Jurídica (1min)
Bloco 3: Confirmação de Inventário (5-7min)
Bloco 4: Beneficiários e Distribuição (3-4min)
Bloco 5: Declaração Final (1min)
Each block shows:
Advisor text (what to say)
Expected client response
Teleprompter sync (what client sees)
State 6: Script Execution (Block-by-Block)
Block 1 - Identificação (2min):
Advisor Script:


"Boa tarde, [Nome]. Vou iniciar a gravação agora."
[Clicks record]
"Por favor, apresente seu documento oficial com foto para a câmera"
[Client holds up document]
"Aproxime um pouco mais, obrigado"
[Advisor verifies visually + checks checklist item]
"Confirma que seu nome completo é [Nome Completo do Cadastro] e CPF [XXX.XXX.XXX-XX]?"
Client Teleprompter (after advisor asks):


Text: "Confirmo" (Bold, large)
Or: Client responds verbally without reading (more natural)
Advisor Validation:


If doc looks suspicious (blurry, edited):
Advisor can request better angle or second document
Notes: "Requested clearer document view"
Once satisfied: Checks "✓ Documento Válido Apresentado"
Block 2 - Capacidade Jurídica (1min):
Advisor Script:


"Declara estar em pleno gozo de suas faculdades mentais, livre de coação ou influência de terceiros?"
[Client: "Declaro"]
"Compreende que este documento tem validade jurídica e distribui seus bens conforme sua livre vontade?"
[Client: "Compreendo e confirmo"]
"Há alguma dúvida ou algo que deseje esclarecer antes de prosseguirmos?"
[Client: "Não" or asks question]
Red Flag Detection (Advisor Training):


If client seems confused, coerced, or impaired:
Advisor uses "Suspender por Suspeita" button (see State 7)
Normal hesitation is OK, but persistent confusion is flag
Block 3 - Confirmação de Inventário (5-7min, Longest Block):
Advisor Script (Category by Category):


Imóveis:
"Confirma que possui os seguintes imóveis:"
[Reads list from screen]:
"Imóvel 1: Apartamento na [Endereço Completo], do qual é proprietário de 100%"
"Imóvel 2: Casa na [Endereço], proprietário de 50%"
"Confirma?"
[Client: "Confirmo"]
Investimentos:
"Confirma que possui investimentos conforme listado: [resumo de contas bancárias, corretoras]?"
[Client: "Confirmo"]
Criptomoedas (Special Attention):
"Confirma que as criptomoedas listadas estão armazenadas em [Exchange XYZ / Carteira Metamask] conforme descrito nas instruções?"
[Client: "Confirmo"]
"E confirma que as instruções de acesso estão guardadas conforme você especificou, sem que tenha inserido dados sensíveis nesta plataforma?"
[Client: "Confirmo"]
Empresas (if applicable):
"Confirma participação societária em [Nome da Empresa], CNPJ [XXX], com [X]% das quotas?"
[Client: "Confirmo"]
Dynamic Checklist:


As advisor progresses, sub-items in checklist auto-check
If client says "Wait, I need to correct something":
Advisor pauses, makes note
Post-session: Flags need to update inventory, re-validation may be needed
Block 4 - Beneficiários e Distribuição (3-4min):
Advisor Script:
"Confirma que deseja distribuir seus bens da seguinte forma:"


[Reads beneficiário list]:


"Maria Silva, sua filha: 40% do patrimônio líquido"
"João Silva, seu filho: 40% do patrimônio líquido"
"Instituto XYZ (doação): 20% do patrimônio líquido"
"Confirma esta distribuição?"


[Client: "Confirmo"]


Legal Warning (Required):


"Está ciente de que 50% do patrimônio é legítima de herdeiros necessários (filhos, cônjuge, pais) e não pode ser livremente disposta, conforme Código Civil Brasileiro?"
[Client: "Estou ciente"]
Substitutes (if configured):


"Confirma que, caso [Beneficiário] faleça antes de você, sua parte será distribuída para [Substituto]?"
[Client: "Confirmo"]
Block 5 - Declaração Final (1min):
Advisor Script:


"Agora, por favor, leia a seguinte declaração:"
[Teleprompter shows full text, client reads aloud]:
"Declaro que todas as informações prestadas são verdadeiras e que este é meu testamento particular, feito por livre e espontânea vontade, sem qualquer vício de consentimento."
Advisor Closing:


"Obrigado, [Nome]. Validação concluída."
"Data e hora: [Timestamp exato com timezone]"
"Sessão encerrada."
[Recording stops]
Post-Recording Actions (Automated):


Video file saved to temp storage (S3)
Processing job triggered:
Generate SHA-256 hash
Encrypt with AES-256
Move to secure vault (S3 Glacier or equivalent)
Delete temp file
Advisor generates Declaração de Capacidade Jurídica (PDF, ICP-signed)
State 7: Edge Case - Technical Issues During Recording
Connection Drop:


Client Side:
Reconnection modal appears immediately
Message: "Conexão perdida. Reconectando..."
Automatic reconnection attempts (3x with exponential backoff)
If reconnected: "Conexão restabelecida. Aguarde orientação do advogado"
Advisor Side:
System flags: "Client connection lost at 08:23"
Advisor sees: "Client disconnected. Recording paused"
Options:
"Wait for reconnection" (up to 2 minutes)
"Resume from last block" (if client returns)
"Reschedule session" (if connection doesn't restore)
Audio Inaudible:


Advisor hears garbled audio
Advisor clicks "Pause" button
Speaks to client: "Seu áudio está cortando. Pode verificar o microfone?"
Wait for client to fix
Advisor: "Vou retomar do Bloco [X]. Pronto?"
Resumes recording, retakes affected section
State 8: Edge Case - Suspender por Suspeita de Incapacidade/Coação
Trigger: Advisor clicks "Suspender Sessão por Suspeita" button


Immediate Actions:


Recording stops (not deleted, flagged for compliance review)
Client sees: "Sessão pausada. Um momento, por favor"
Advisor screen: Private modal opens
Advisor Modal:


Headline: "Suspensão de Validação"
Text: "Explique o motivo da suspensão (visível apenas para compliance)"
Textarea: Required field
Options:
"Cliente demonstra sinais de coação (terceiro presente/pressionando)"
"Cliente demonstra confusão/incapacidade mental"
"Cliente está visivelmente sob efeito de substâncias"
"Outro" (text field)
Action buttons:
"Suspender Sessão" (Error Red)
"Cancelar e Retomar" (if advisor reconsidered)
Post-Suspension Flow:


Client sees: "Identificamos necessidade de esclarecimentos adicionais antes de prosseguir. Entraremos em contato em breve"
Call ends gracefully (not abrupt)
Internal Process:
Compliance team reviews recording within 24h
Compliance contacts client separately (phone call, not email)
Questions asked neutrally: "Como está se sentindo? Alguém o ajudou a preencher o testamento?"
Outcomes:
If concerns cleared: Reschedule validation
If concerns persist: Refuse to issue testamento, offer 100% refund
Client Communication:


Email (24h later): "Identificamos algumas inconsistências que precisam ser esclarecidas. Nossa equipe entrará em contato"
Tone: Neutral, not accusatory (might be false positive)
State 9: Aprovação Pós-Gravação
Advisor Actions (Immediately Post-Session):


Reviews checklist: All items must be checked
Clicks "Aprovar e Gerar Declaração"
System generates:
Declaração de Capacidade Jurídica (PDF):
Header: Advogado letterhead, OAB registration
Body (Formal Language):
"Declaro, para os devidos fins, que em sessão de validação realizada em [data/hora], via videoconferência registrada, validei a capacidade jurídica e livre vontade do(a) Sr(a). [Nome Completo], CPF [XXX], para elaboração de testamento particular."
"O(a) declarante apresentou-se lúcido(a), sem sinais de coação, e confirmou autenticidade das informações prestadas."
"Sessão gravada e armazenada conforme protocolo de segurança [ID da gravação]."
Footer: Advisor digital signature (ICP-Brasil), date, OAB seal
Client Notification (Email Sent Within 24h):


Subject: "✓ Sua Validação Foi Aprovada"
Content:
"Boa notícia! Sua validação forense foi aprovada pelo Dr. [Nome]"
"Próxima etapa: Assinatura Digital com Certificado ICP-Brasil"
Attachments:
Declaração de Capacidade Jurídica (PDF)
CTA: "Prosseguir para Assinatura" (Primary Button)
Dashboard Update:


Status changes: "Inventário Completo" → "Validação Aprovada ✓"
Progress bar: 8 de 9 (Assinatura is step 9)
New card appears: "Assinar Digitalmente" (active, clickable)
Video Processing (Backend, Automated):


SHA-256 hash generated from raw video file
AES-256 encryption applied (key stored via Shamir sharing)
Metadata logged:
Duration: 14min 32sec
Timestamp: 2025-01-13T14:00:00-03:00
Advisor ID: OAB/SP XXXXX
Client CPF: Hashed (privacy)
Checklist: All items approved
Hash: abc123def456... (64 characters)
Encrypted file moved to AWS S3 (Glacier, long-term cold storage)
Access log: "Accessible only by [Advisor], [Compliance], [Abertura System]"

Feature 3.3: Assinatura Digital ICP-Brasil
Screen: Digital Signature Flow
State 1: Certificate Verification (Pre-Signature)
Page Layout:


Max-width: 920px, centered
Background: Background Subtle
Padding: 48dp vertical
Header Section:


Progress indicator: "Passo 9 de 9: Assinatura Digital" (nearly complete!)
Headline (H2): "Última Etapa: Assinatura Qualificada"
Subheadline (Body): "Seu testamento será assinado digitalmente com certificado ICP-Brasil, garantindo validade jurídica"
Explainer Card (Before Form):


Background: Info Blue with 10% opacity
Border-left: 4dp Info Blue
Border-radius: 12dp
Padding: 24dp
Icon: Certificate with seal (48dp, Primary Deep Blue)
Content:
Headline (H4): "O Que é Certificado Digital ICP-Brasil?"
Text (Body Small):
"É como sua identidade eletrônica, reconhecida legalmente no Brasil"
"Mesma tecnologia usada para declarar Imposto de Renda e assinar contratos"
"Sem ele, seu testamento não tem validade jurídica perante cartórios"
Learn more link: "Saiba mais sobre ICP-Brasil" (opens modal or external link)
Verification Question Card:


Background: White


Border-radius: 16dp


Padding: 40dp


Center-aligned content


Question (H3): "Você já possui certificado digital ICP-Brasil?"


Helper Text (Body Small, Neutral Medium): "(Também chamado de e-CPF ou e-CNPJ)"


Two Option Cards (Horizontal on desktop, stacked on mobile):


SIM - Já Possuo
Background: Success Green with 10% opacity
Border: 2dp Success Green (when selected)
Padding: 32dp
Icon: Checkmark in shield (48dp, Success Green)
Text (H4): "Sim, Já Tenho"
Description (Body Small): "Vou assinar com meu certificado"
Hover: Lift + shadow, scale 1.02
Selected state: Border solid, background intensifies slightly
NÃO - Preciso Obter
Background: Secondary Blue Pale
Border: 2dp Primary Deep Blue (when selected)
Padding: 32dp
Icon: Document with "+" (48dp, Primary Deep Blue)
Text (H4): "Não, Preciso Obter"
Description (Body Small): "Vou providenciar agora"
Hover: Same as option 1
Selected state: Border solid
Navigation:


Bottom-right: "Continuar" Primary Button
Disabled until one option selected
On click: Routes to appropriate flow (State 2 or State 3)
State 2: Flow - Não Possui Certificado (Emissão Guiada)
Transition: Verification card slides up and out, education section slides in from bottom (400ms)


Education Section:


Headline (H3): "Vamos Providenciar Seu Certificado Digital"
Subheadline (Body): "Processo simples, feito online, leva de 24h a 5 dias úteis"
Comparison Table (Two Certificates Side-by-Side):


Layout: Two cards, horizontal (stacked on mobile)


Background: White cards with subtle shadows


Card 1: e-CPF A3 (Token/Cartão)


Badge: "Recomendado" (Success Green pill, top-right)
Icon: USB token illustration (64dp)
Specs table (Body Small):
Validade: "3 anos"
Custo: "R$ 150 - 250" (link: "Varia por certificadora")
Prazo: "2-5 dias úteis"
Formato: "Token USB ou cartão + leitora"
Benefits (Body Small, Success Green checkmarks):
"✓ Maior segurança (chave em hardware)"
"✓ Aceito para IR, processos, etc"
"✓ Não expira rapidamente"
CTA: Secondary Button "Escolher A3"
Card 2: e-CPF A1 (Arquivo Digital)


Badge: "Mais Rápido" (Info Blue pill, top-right)
Icon: Computer with file (64dp)
Specs table:
Validade: "1 ano"
Custo: "R$ 80 - 120"
Prazo: "24-48 horas"
Formato: "Arquivo instalado no PC/Mac"
Limitations (Body Small, Warning Orange):
"⚠️ Menos seguro (arquivo pode ser copiado)"
"⚠️ Não aceito em todos os contextos"
CTA: Ghost Button "Escolher A1"
Partner Issuance Section (After User Selects Type):


Headline (H4): "Emissão Simplificada com Parceiro"
Partner logo carousel (Soluti, Valid, Certisign - actual partners in prod)
Benefits (Body Small):
"✓ 15% de desconto exclusivo"
"✓ Acompanhamento do processo"
"✓ Integração automática ao testamento"
Partner Card:
Background: Secondary Gold Light (premium feel)
Border: 2dp Primary Gold
Border-radius: 12dp
Padding: 32dp
Logo: Partner certificadora (120dp width)
Price: "R$ 212,50" (strikethrough: "~~R$ 250~~") for A3 example
Discount code: "TESTAMENT15" (copy button inline)
Premium Button: "Emitir e-CPF via [Parceiro]"
On click: Opens partner site in new tab with tracking code
Tracking & Notification:


Info box below button:
"Quando seu certificado estiver pronto, você receberá:"
"📧 Email com instruções"
"📱 SMS de notificação"
"🔔 Notificação para voltar e assinar"
Tracking Link:
Text: "Status da sua emissão: [Link para Parceiro]"
Opens partner's tracking page
Alternative Path (Manual Issuance):


Collapsed accordion: "Prefiro emitir por conta própria?"
Expands to show:
List of approved certificadoras (links to official sites)
Instructions PDF download: "Guia: Como Emitir e-CPF Passo a Passo"
Important note: "Após emitir, volte aqui para completar assinatura"
Save Progress & Exit:


Dashboard status updates to: "Aguardando Certificado Digital"
User can safely exit, will be notified when certificate ready
Email sent: "Estamos aguardando seu certificado. Você pode concluir a assinatura quando estiver pronto"
State 3: Flow - Possui Certificado (Assinatura Direta)
Sub-State 3A: Final Document Review:
Page Header:


Headline (H3): "Revisão Final do Testamento"
Subheadline (Body): "Leia atentamente. Após assinatura, alterações exigirão nova validação"
PDF Preview Component:


Layout: Full-width viewer, max-height 700dp


Border: 2dp Neutral Light


Border-radius: 12dp


Toolbar (top of viewer):


Left: "Página 1 de 6" with prev/next arrows
Center: Zoom controls (-, 100%, +)
Right: "Baixar para Revisão" (download button - unsigned version)
PDF Content (Generated Document):


Cover page:
Title: "TESTAMENTO PARTICULAR" (Crimson Pro font, H1)
Subtitle: "Elaborado Digitalmente"
Client info: Nome completo, CPF (partially masked)
Date: "Lavrado em [data da validação]"
Pages 2-5: Inventory by category, beneficiary distribution
Page 6: Legal clauses, signatures section (to be filled after ICP signature)
Section Navigation (Left sidebar):


Clickable chapter links (jump to section):
"Identificação"
"Bens Imóveis"
"Investimentos"
"Ativos Digitais"
"Beneficiários"
"Cláusulas Especiais"
"Assinaturas"
Active section highlights (Primary Deep Blue background)
Change Indicator (If User Updated Post-Validation):


Yellow highlight boxes around sections modified after video
Margin note: "✏️ Atualizado em 08/01/2025"
Ensures user reviews changes
Mandatory Confirmation Checkbox:


Position: Below PDF viewer, prominent
Large checkbox (32dp, Required)
Text (Body, Bold): "☑️ Li e confirmo que este documento reflete integralmente minha vontade"
Disabled state: Red border, "Marque para prosseguir"
Enabled: Success Green border when checked
Reassurance Note:


Background: Secondary Blue Pale
Border-radius: 8dp
Padding: 16dp
Icon: Info circle (20dp)
Text (Body Small): "Este é o documento exato que será assinado. Hash SHA-256 será gerado para garantir que nada seja alterado após sua assinatura."
Navigation:


"Voltar" Ghost Button (left)
"Prosseguir para Assinatura" Primary Button (right)
Disabled until checkbox checked
Enabled: Transitions to active state with pulse animation
Sub-State 3B: Certificate Detection & Selection:
Automatic Detection Attempt:


System tries to detect installed certificates (browser/OS integration)
Loading indicator: "Buscando certificados instalados..."
Duration: ~5 seconds
Detection Success:


Green success banner: "✓ Certificado encontrado"
Card displays detected certificate:
Icon: Certificate with checkmark (48dp)
Details:
Nome: "[Nome no certificado]"
CPF: "XXX.XXX.XXX-XX"
Certificadora: "Soluti / Valid / Certisign"
Validade: "Válido até 15/03/2026"
Verification badge: "✓ Certificado Válido" (Success Green)
Question (H4): "Usar este certificado?"
Buttons:
"Sim, Usar Este" (Primary Button)
"Tenho Outro Certificado" (Ghost Button)
Detection Failed / Multiple Certificates:


Message: "Não detectamos certificados automaticamente"
Dropdown: "Selecionar Certificadora"
Options: Soluti | Valid | Serpro | Certisign | Outra
Info text: "Você será redirecionado para o portal da certificadora escolhida"
Button: "Continuar com [Certificadora]"
Sub-State 3C: Signing Process (Certificadora Integration):
Redirect Preparation Screen:


Overlay modal (cannot dismiss)
Background: White card, centered, max-width 560px
Icon: Certificate with arrows (48dp, Primary Deep Blue)
Headline (H4): "Conectando com Certificadora"
Text (Body):
"Você será redirecionado para assinar com certificado ICP-Brasil"
"Mantenha seu token conectado ou certificado A1 instalado"
Loading spinner: Animated (1000ms loop)
Progress text: "Preparando documento para assinatura..."
Certificadora Portal (External, Opens in New Tab):


Process varies by certificadora, but typical flow:
User inserts PIN/senha do certificado (modal da certificadora)
Certificadora validates PIN
Document hash displayed for confirmation
User clicks "Assinar" on certificadora portal
Certificadora returns signed document to Testamento Digital
Return to Platform (After Signature):


User automatically redirected back OR closes tab and refreshes
Platform detects signature completion via webhook/polling
Sub-State 3D: Signature Validation:
Processing Screen:


Full-screen overlay (cannot dismiss)
Background: Primary Deep Blue gradient
Center content, white text
Icon: Animated checkmark drawing (80dp, Primary Gold)
Headline (H2, White): "Validando Assinatura..."
Progress steps (Body, White, 80% opacity):
"✓ Assinatura recebida"
"⏳ Verificando integridade..."
"⏳ Registrando em blockchain..."
Validation Logic (Backend):


Extract digital signature from PDF
Verify signature with ICP-Brasil CA (Certificate Authority)
Compare document hash:
Hash do PDF assinado = Hash do documento original
If match: ✓ Integrity confirmed
If not: 🚨 Adulteração detectada → Block + alert compliance
Success State:


Progress updates:
"✓ Assinatura verificada"
"✓ Integridade confirmada"
"✓ Registrando em blockchain..."
Transition to State 4 (Blockchain Registration)
State 4: Blockchain Registration (Automatic & Transparent)
Processing Overlay Continues:


Text updates: "Registrando em Blockchain Público..."
Animated blockchain icon (chain links connecting, 1200ms loop)
Backend Process (Polygon Blockchain Example):


Generate SHA-256 hash of signed PDF
Construct transaction:
Smart contract: TestamentoRegistry.sol
Function: registrarTestamento(bytes32 hashDocumento, bytes32 cpfHash)
Params:
hashDocumento: SHA-256 of signed PDF
cpfHash: Hashed CPF (privacy-preserving, one-way)
Send transaction to Polygon network
Wait for confirmation (~2-5 seconds on Polygon)
Confirmation Received:


Transaction hash returned: 0xabc123def456...
Block number: #42891056
Timestamp: Unix timestamp stored in blockchain
User Notification (Real-Time Update):


Progress text updates: "✓ Registrado em Blockchain"
Success animation: Chain completes linking, glows gold
Confetti burst (gold particles, 1500ms)
State 5: Finalization & Delivery
Success Screen:


Full-screen celebration layout
Background: Subtle gradient from Background Pure to Secondary Gold Light
Center content
Hero Visual:


Large animated checkmark (120dp, Success Green)
Stroke draw animation (800ms)
Background circle pulse (expands and fades)
Confetti animation (continuous for 3 seconds)
Congratulations Message:


Headline (H1): "🎉 Parabéns! Seu Testamento Está Protegido"
Subheadline (Body Large): "Assinado digitalmente e registrado em blockchain"
Completion Summary Card:


Background: White


Border: 2dp Success Green


Border-radius: 16dp


Padding: 40dp


Max-width: 780px, centered


Status Badges (Horizontal row):


"✓ Assinado ICP-Brasil" (Success Green pill)
"✓ Registrado Blockchain" (Accent Emerald pill)
"✓ Monitoramento Ativo" (Info Blue pill)
What Happens Now Section:


Headline (H4): "O Que Acontece Agora?"
Checklist (visual, Body Small):
"✅ Monitoramento de APIs ativado (próxima verificação em 24h)"
"✅ Custódia segura ativa (3 camadas de proteção)"
"✅ Beneficiários serão notificados conforme instruído"
"✅ Você pode atualizar a qualquer momento (sem custo adicional)"
Document Access:


Section title (H4): "Seus Documentos"


Document cards (horizontal layout):


Testamento Assinado
Icon: PDF (32dp, Error Red)
Text: "Testamento_Assinado_[Nome].pdf"
Size: "847 KB"
Button: "Baixar" (Secondary Button, 40dp height)
Certificado Blockchain
Icon: Chain link (32dp, Accent Emerald)
Text: "Certificado_Blockchain.pdf"
Size: "124 KB"
Description (Body Micro): "Prova de registro público"
Button: "Baixar"
Declaração de Capacidade
Icon: Certificate (32dp, Primary Deep Blue)
Text: "Declaracao_Advogado_OAB.pdf"
Size: "210 KB"
Description: "Dr. [Nome], OAB/SP XXXXX"
Button: "Baixar"
Blockchain Verification Section:


Background: Accent Emerald with 10% opacity
Border-left: 4dp Accent Emerald
Border-radius: 8dp
Padding: 20dp
Icon: Link (24dp, Accent Emerald)
Headline (H4): "Verificar Autenticidade Pública"
Text (Body Small): "Seu testamento foi registrado em blockchain público. Qualquer pessoa pode verificar sua existência (mas não o conteúdo)"
Link: "🔗 Verificar no Polygonscan" (External link, opens in new tab)
URL: https://polygonscan.com/tx/[transaction-hash]
Explanation (Body Micro): "Este link mostra o registro público, sem expor dados pessoais ou conteúdo do testamento"
Primary CTAs:


Two buttons, horizontal (center-aligned):
"Gerenciar Beneficiários" (Primary Button)
Links to beneficiary management dashboard
"Voltar ao Dashboard" (Secondary Button)
Returns to main dashboard overview
Email Confirmation (Sent Immediately):


Subject: "✓ Seu Testamento Foi Finalizado e Ativado"
Attachments: All 3 PDFs (signed testament, blockchain cert, lawyer declaration)
Body:
"Parabéns, [Nome]! Seu testamento está oficialmente ativo"
Summary of what was accomplished
Next steps reminder: "Lembre-se de revisar anualmente"
Support: "Dúvidas? Responda este email ou acesse [link de suporte]"
State 6: Edge Case - Certificado Expirado/Inválido
Detection: During Sub-State 3C validation, certificadora returns error


Error Screen:


Overlay modal (blocks progress)
Background: White card
Border: 3dp Error Red
Icon: Warning triangle (64dp, Error Red)
Headline (H4): "Certificado Inválido ou Expirado"
Error Details:


Text (Body): "Detectamos um problema com seu certificado digital:"
Error message (Mono font, Error Red background with 10% opacity):
"Certificado expirou em 12/11/2024"
OR "Certificado não é ICP-Brasil válido"
OR "CPF do certificado não corresponde ao cadastro"
Resolution Options:


If expired:
Primary Button: "Renovar Certificado"
Links to certificadora renewal page
Info: "Renovação leva 24-48h. Você será notificado quando estiver pronto"
If wrong certificate:
Secondary Button: "Usar Outro Certificado"
Returns to certificate selection (Sub-State 3B)
Ghost Button: "Preciso de Ajuda"
Opens chat or schedules call with support
Save Progress:


User can exit safely
Document remains in "Aguardando Assinatura" status
Can return anytime with valid certificate
State 7: Edge Case - Falha na Validação de Integridade
Critical Error (Rare, Serious):


Detected during Sub-State 3D validation
Hash do PDF assinado ≠ Hash do documento original
Indicates potential tampering or corruption
Immediate Actions:


Signature process blocked
Compliance team alerted automatically (Slack/email)
User sees error screen:
Error Screen:


Overlay: Full-screen, cannot dismiss
Background: Error Red gradient
Icon: Shield with X (80dp, White)
Headline (H2, White): "Problema de Segurança Detectado"
Text (Body Large, White, 90% opacity):
"Detectamos inconsistência no documento durante validação"
"Por segurança, bloqueamos a assinatura"
"Nossa equipe foi notificada e entrará em contato em até 1 hora"
User Actions:


Only button: "Entendido" (White outlined button)
On click: Returns to dashboard, cannot retry signature
Resolution Process (Internal):


Compliance investigates:
Was document modified between review and signature?
Was there network error during transmission?
Malicious activity?
Actions:
Generate fresh document from database
Schedule new validation if needed
Inform client transparently about what happened
Typical resolution time: 24-48h

Feature 4.1: Criptografia Multi-Camada (Shamir Secret Sharing)
Screen: Post-Signature Encryption Process (Background + Transparency UX)
State 1: Encryption in Progress (Loading State)
Trigger: Immediately after successful ICP signature (Feature 3.3 State 5)


Full-Screen Processing Overlay:


Background: Primary Deep Blue gradient to Accent Emerald
Cannot be dismissed (process must complete)
Center-aligned content, white elements
Animation Sequence:


Phase 1: Document Securing (0-5 seconds):


Icon: Document with lock animating (lock closes over document)
Text (H3, White): "Protegendo Seu Testamento..."
Subtext (Body, White 80% opacity): "Aplicando criptografia AES-256"
Progress bar: 0-33% (Animated, smooth fill)
Phase 2: Key Fragmentation (5-10 seconds):


Icon transitions: Lock splits into 3 colored fragments
Fragment 1: Blue (AWS KMS)
Fragment 2: Green (Advogado Master)
Fragment 3: Orange (Sistema de Monitoramento)
Text updates: "Dividindo Chave de Acesso..."
Subtext: "Nenhuma parte sozinha pode abrir seu testamento"
Progress bar: 33-66%
Phase 3: Vault Distribution (10-15 seconds):


Animation: Fragments fly to 3 different vault icons
Each vault locks with animated padlock
Text: "Distribuindo para Cofres Seguros..."
Subtext: "AWS Cloud | Depositário OAB | Sistema Monitoramento"
Progress bar: 66-100%
Skip Option (Appears After 5 Seconds):


Small link at bottom: "Entendi, pular animação" (Ghost button style)
On click: Jumps directly to completion state
Note: Process continues in background, doesn't actually skip encryption
State 2: Educational Modal (Optional Deep Dive)
Trigger: Appears after encryption completes, before returning to dashboard


Modal Design:


Semi-transparent overlay: rgba(Neutral Dark, 0.85)
Modal card: Max-width 880px, centered
Background: White
Border-radius: 16dp
Padding: 48dp
Content Structure:


Header:


Eyebrow (Caption): "COMO FUNCIONA A PROTEÇÃO"
Headline (H2): "Seu Testamento Está Protegido por 3 Camadas"
Close button (X icon, top-right)
Section 1: O Problema:


Icon: Unlocked vault with X (48dp, Error Red)
Text (Body):
"Se sua chave ficasse em um único lugar, qualquer invasão ou falha comprometeria tudo"
"Por isso, usamos fragmentação matemática"
Section 2: A Solução - Shamir Secret Sharing:


Interactive diagram (SVG):
Visual: Door with 3 lock positions
Each lock has a key fragment icon
Interactive Elements:
User can hover over combinations:
Hover "Key 1 + Key 2": Door opens (green glow), text "✓ Abre o testamento"
Hover "Key 1 only": Door stays locked (red), text "✗ Bloqueado"
Hover "Key 2 + Key 3": Door opens (green), text "✓ Abre o testamento"
Explanation (Body):
"Imagine uma porta com 3 fechaduras"
"Você precisa de 2 de 3 chaves para abrir (k=2, n=3)"
"Nenhuma chave sozinha funciona"
Section 3: Cenários de Abertura:


Layout: 3 cards, horizontal (stacked on mobile)


Each card: Scenario illustration + explanation


Óbito Confirmado
Icon: API check + Key combination (32dp, Success Green)
Text (Body Small):
"Sistema combina:"
"Parte 1 (KMS) + Parte 3 (trigger automático)"
"= Abertura para beneficiários"
Falência da Empresa
Icon: Building with shield (32dp, Warning Orange)
Text:
"Depositário OAB libera:"
"Parte 2 (escrow) + Parte 1 (backup)"
"= Acesso garantido aos herdeiros"
Tentativa de Invasão
Icon: Hacker with X (32dp, Error Red)
Text:
"Mesmo com acesso ao servidor:"
"Atacante só tem Parte 1"
"= Completamente inútil"
Footer CTA:


Primary Button: "Entendi, Prosseguir"
Link: "Ler documentação técnica completa" (opens new tab to security whitepaper)
State 3: Dashboard Security Indicator
Location: Main dashboard, Security card (Feature 7.1 State 1)


Card Design:


Background: White
Border-left: 4dp Accent Emerald
Border-radius: 12dp
Padding: 24dp
Box shadow: Y-offset 2dp, Blur 12dp, Opacity 5%
Header:


Icon: Shield with checkmark (32dp, Accent Emerald)
Title (H4): "Status de Proteção"
Status Indicators (Vertical List):


Each indicator: Icon (20dp) + Text (Body Small) + Status badge


Criptografia Ativa
Icon: Lock (Accent Emerald)
Text: "Criptografia AES-256 ativa"
Badge: "✓ Ativo" (Success Green pill)
Chaves Distribuídas
Icon: Key fragments (Accent Emerald)
Text: "Chaves distribuídas (3/3 partes em cofres separados)"
Badge: "✓ Ativo"
Backup Geográfico
Icon: Globe with pin (Accent Emerald)
Text: "Backup geográfico ativo (2 regiões)"
Badge: "✓ Ativo"
Última Verificação
Icon: Checkmark in circle (Accent Emerald)
Text: "Última verificação de integridade: 08/01/2025 às 03:42"
Badge: "✓ Aprovado" (Success Green)
Verification CTA:


Link button (Body Small, Primary Deep Blue): "🔗 Verificar Autenticidade"
On click: Opens modal (see State 4)
State 4: Authenticity Verification Modal
Modal Layout:


Max-width: 720px, centered
Background: White
Border-radius: 16dp
Padding: 40dp
Header:


Icon: Blockchain with magnifying glass (64dp, Accent Emerald)
Headline (H3): "Verificação de Autenticidade"
Subheadline (Body): "Confirme que seu testamento está inalterado desde a assinatura"
Hash Display Section:


Label (Body Small, Bold): "Hash SHA-256 do Documento"
Hash value:
Font: JetBrains Mono (monospace)
Size: 13px
Color: Neutral Dark
Background: Background Subtle
Padding: 12dp
Border-radius: 6dp
Text: a3f5e829...bc4d761f (64 characters, truncated with ellipsis, expandable)
Copy button (inline, right-aligned): On click, tooltip "Hash copiado!"
Blockchain Link Section:


Label (Body Small, Bold): "Transação Blockchain"
Link card:
Background: Accent Emerald with 10% opacity
Border: 2dp Accent Emerald
Border-radius: 8dp
Padding: 16dp
Icon: External link (20dp, Accent Emerald)
Text: "Ver no Polygonscan"
URL shown: polygonscan.com/tx/0xabc123... (truncated)
Button: "Abrir" (Secondary Button, 40dp height)
On click: Opens blockchain explorer in new tab
QR Code Section:


Label (Body Small, Bold): "QR Code para Verificação"
QR code image: 200×200dp
Caption: "Escaneie para verificar no celular"
Data encoded: Link to blockchain transaction
Explanation Section:


Background: Info Blue with 10% opacity
Border-radius: 8dp
Padding: 16dp
Icon: Info circle (20dp, Info Blue)
Text (Body Small):
"Este registro público prova que seu testamento existia nesta data e não foi alterado"
"O hash é uma impressão digital única do documento"
"Se o documento mudar em 1 caractere, o hash muda completamente"
State 5: Edge Case - User Attempts Download
Trigger: User clicks "Baixar Testamento" on dashboard


Block Modal:


Cannot dismiss without acknowledging
Background: Warning Orange with 10% opacity
Border: 3dp Warning Orange
Icon: Download with slash (48dp, Warning Orange)
Content:


Headline (H4): "Download Restrito por Segurança"


Text (Body):


"Por segurança, testamentos assinados não podem ser baixados enquanto você está vivo"
"Esta medida previne cópias não autorizadas e garante controle total"
Alternative Offered:


Text (Body Small): "Você pode:"
Options (Body Small, with icons):
"✓ Visualizar no dashboard a qualquer momento (com autenticação 2FA)"
"✓ Baixar versão não-assinada para revisão offline (sem validade jurídica)"
Exception Note:


Background: Info Blue with 10% opacity
Text (Body Micro): "Após seu falecimento, beneficiários receberão cópia automaticamente"
Actions:


"Visualizar Online" Primary Button
"Baixar Versão Não-Assinada" Ghost Button
"Entendido" Ghost Button (closes modal)
State 6: Access Logs (Audit Trail)
Location: Settings > Segurança > Histórico de Acesso


Page Layout:


Headline (H3): "Histórico de Acesso ao Testamento"
Subheadline (Body): "Todo acesso (visualização ou tentativa de abertura) é registrado"
Log Table:


Layout: Responsive table (cards on mobile)
Columns:
Data/Hora (Timestamp)
Format: "08/01/2025 14:32:15 GMT-3"
Font: Monospace for precision
Ação (Action)
Examples:
"Visualização via dashboard"
"Tentativa de descriptografia"
"Verificação de integridade"
Usuário/Sistema (Actor)
"Você (IP: 177.xxx.xxx.xxx)"
"Sistema de Verificação Automática"
Status (Outcome)
"✓ Sucesso" (Success Green)
"✗ Bloqueado - credenciais inválidas" (Error Red)
Ações (Actions)
"Ver Detalhes" link (opens detailed log modal)
"Reportar Suspeito" button (if user doesn't recognize)
Suspicious Access Report:


If user clicks "Reportar Suspeito":
Modal: "Acesso Não Autorizado?"
Text: "Descreva o que você considera suspeito"
Textarea: Free-form description
Actions:
"Reportar à Equipe de Segurança" (Error Red button)
Auto-triggers compliance review
User receives: "Investigação iniciada, responderemos em 4h"

Feature 4.2: Registro Imutável em Blockchain
Screen: Blockchain Verification & Public Trust
State 1: Automated Blockchain Certificate Generation
Trigger: Immediately after digital signature completion (Feature 3.3 State 5)


Backend Process (Parallel to Encryption):


Smart contract interaction on Polygon network
Function: registrarTestamento(bytes32 hashDocumento, bytes32 cpfHash, uint256 timestamp)
Gas fee: Platform absorbs cost (~$0.03 USD equivalent)
Confirmation time: 2-5 seconds on Polygon
Certificate PDF Generation (Automated):


Template: 1-page professional document
Branding: Testamento Digital header with logo
Certificate Content Structure:


Header Section:


Title (H2, Crimson Pro): "Certificado de Registro em Blockchain"
Subtitle (Body Small): "Prova Pública de Existência e Integridade"
Document Information Box:


Background: Secondary Blue Pale
Border: 2dp Primary Deep Blue
Border-radius: 8dp
Padding: 24dp
Fields (Body Small, label + value layout):
ID do Testamento: TEST-2025-001234
CPF (hash): 0x7a9f3e... (truncated for privacy)
Data/Hora de Criação: 13/01/2025 às 14:23:45 GMT-3
Hash SHA-256: a3f5e829bc4d761f... (full 64 characters)
Blockchain Transaction Details:


Background: Accent Emerald with 10% opacity
Border-left: 4dp Accent Emerald
Fields:
Rede: "Polygon (Matic Network)"
Endereço da Transação: 0xabc123def456... (full transaction hash)
Bloco: #42891056
Confirmações: 1,247+
Status: "✓ Confirmado Permanentemente"
QR Code Section (Right-aligned):


QR code: 150×150dp
Data encoded: Direct link to Polygonscan transaction
Caption (Body Micro): "Escaneie para verificar"
Visual Seal:


Bottom-right corner: "Registrado em Blockchain Público - Imutável"
Icon: Blockchain seal/stamp graphic (80dp)
Color: Accent Emerald gradient
Legal Notice (Footer):


Font: Body Micro
Text: "Este certificado comprova o registro público do testamento na data indicada. O conteúdo do testamento não é exposto publicamente. Qualquer pessoa pode verificar a autenticidade através do link blockchain acima."
Delivery to User:


Automatically attached to completion email (Feature 3.3 State 5)
Available for download on dashboard
Stored permanently in user's document vault
State 2: Public Verification Tool (Landing Page Feature)
Location: Public-facing page, no login required


URL: testamentodigital.com.br/verificar


Page Layout:


Header: Standard site navigation
Hero section: Verification tool
Max-width: 780px, centered
Background: Background Subtle
Hero Section:


Headline (H2): "Verificar Autenticidade de Testamento"
Subheadline (Body): "Confirme publicamente que um testamento existe e está inalterado"
Icon: Magnifying glass over blockchain (80dp, Primary Deep Blue)
Verification Form:


Background: White card


Border-radius: 16dp


Padding: 40dp


Box shadow: Y-offset 2dp, Blur 16dp, Opacity 8%


Input Section:


Label (H4): "Insira o Hash do Documento ou ID do Testamento"
Input field:
Height: 56dp
Placeholder: "Ex: a3f5e829bc4d761f... ou TEST-2025-001234"
Font: Monospace when typing hash
Border: 2dp Neutral Light (active: Primary Deep Blue)
Helper text (Body Small): "O hash está no Certificado de Registro ou no email de confirmação"
Submit Button:


Primary Button: "Verificar Autenticidade"
Full-width
Icon: Checkmark (20dp)
Privacy Notice (Below Form):


Background: Info Blue with 10% opacity
Border-radius: 8dp
Padding: 16dp
Icon: Shield (20dp, Info Blue)
Text (Body Small): "Esta verificação NÃO exibe o conteúdo do testamento. Apenas confirma sua existência, data de criação e integridade."
State 3: Verification Results (Success)
Result Card (Replaces Form):


Animated entrance: Slides up from bottom + fade in (400ms)
Background: Success Green with 10% opacity
Border: 3dp Success Green
Border-radius: 16dp
Padding: 40dp
Success Indicator:


Icon: Large checkmark in circle (80dp, Success Green)
Animated draw: Stroke animation 600ms
Headline (H3): "✓ Documento Autêntico"
Verification Details:


Section title (H4): "Informações do Registro"


Details grid (2 columns on desktop):


Left Column:
Status: "✓ Registrado e Verificado"
Data de Registro: "13 de Janeiro de 2025 às 14:23 GMT-3"
Tempo Decorrido: "Há 5 dias" (calculated dynamically)
Right Column:
Hash Verificado: a3f5e8... (truncated, expand button)
Blockchain: "Polygon (Matic Network)"
Confirmações: "1,247+ blocos"
Blockchain Link Section:


Headline (H4): "Verificar no Explorador Público"
Link card:
Background: Accent Emerald with 10% opacity
Icon: External link (24dp, Accent Emerald)
Text: "Ver Transação no Polygonscan"
URL displayed: polygonscan.com/tx/0x...
Button: "Abrir" (Secondary Button)
Opens in new tab
What This Proves Section:


Background: Secondary Blue Pale
Border-radius: 8dp
Padding: 20dp
Icon: Info circle (24dp, Info Blue)
Text (Body Small):
"✓ Este testamento existia na data registrada"
"✓ O documento não foi alterado desde então (hash inalterado)"
"✓ O registro é público e permanente"
"✗ O conteúdo do testamento não é visível publicamente"
Actions:


"Verificar Outro Documento" Ghost Button (returns to form)
"Criar Meu Testamento" Primary Button (CTA for conversion)
State 4: Verification Results (Not Found)
Result Card:


Background: Warning Orange with 10% opacity
Border: 3dp Warning Orange
Padding: 40dp
Warning Indicator:


Icon: Question mark in circle (80dp, Warning Orange)
Headline (H3): "Documento Não Encontrado"
Explanation:


Text (Body):
"Não encontramos registro blockchain correspondente a este hash ou ID"
"Possíveis motivos:"
List (Body Small):
"Hash ou ID foi digitado incorretamente (verifique espaços ou caracteres)"
"Testamento ainda está em processo de registro (aguarde alguns minutos)"
"Documento não foi registrado em blockchain público"
Troubleshooting Section:


Background: Info Blue with 10% opacity
Padding: 20dp
Icon: Lightbulb (24dp, Info Blue)
Text (Body Small): "Dicas:"
List:
"Copie e cole o hash diretamente (não digite manualmente)"
"Aguarde 5-10 minutos após criação do testamento"
"Verifique se o hash veio de fonte oficial (email ou certificado PDF)"
Actions:


"Tentar Novamente" Primary Button (returns to form with input cleared)
"Falar com Suporte" Secondary Button (opens support chat/form)
State 5: Verification Results (Tampered/Invalid)
Rare Case: Hash exists but document hash doesn't match current document


Result Card:


Background: Error Red with 10% opacity
Border: 3dp Error Red
Padding: 40dp
Error Indicator:


Icon: Shield with X (80dp, Error Red)
Headline (H3): "⚠️ Aviso de Segurança"
Critical Message:


Text (Body, Bold): "O hash fornecido foi encontrado, mas indica possível adulteração"
Explanation (Body):
"O documento atual não corresponde ao hash registrado originalmente"
"Isso pode indicar:"
List:
"Documento foi modificado após registro"
"Você está verificando versão incorreta do documento"
"Possível tentativa de fraude"
Recommended Actions:


Background: Error Red with 15% opacity
Border: 2dp Error Red
Padding: 20dp
Icon: Warning triangle (24dp, Error Red)
Text (Body Small, Bold): "Ação Recomendada:"
List:
"NÃO aceite este documento como válido"
"Solicite versão original diretamente da plataforma Testamento Digital"
"Reporte este incidente para investigação"
Actions:


"Reportar Problema" Primary Button (Error Red, opens report form)
"Verificar Outro" Ghost Button
State 6: Timeline de Versões (User Dashboard)
Location: Dashboard > Meu Testamento > Histórico de Versões


Page Layout:


Headline (H3): "Histórico de Versões do Testamento"
Subheadline (Body): "Todas as versões e alterações registradas em blockchain"
Timeline Visualization:


Vertical timeline (left-side line on desktop, centered on mobile)
Timeline line: 4dp, Primary Deep Blue
Timeline dots: 32dp circles at each version
Version Entry Components (Repeated for Each Version):


Version Card:


Background: White
Border: 2dp Neutral Light (active version: 2dp Primary Gold)
Border-radius: 12dp
Padding: 24dp
Connected to timeline dot
Hover: Lift with shadow
Card Header:


Version badge: "v3" (H4, Primary Deep Blue)
Active badge (if current): "Versão Atual" (Success Green pill)
Date: "15 de Setembro de 2024" (Body Small, Neutral Medium)
Time: "às 16:42 GMT-3"
Changes Summary:


Icon: Edit/pencil (24dp, Info Blue)
Text (Body Small): "Alterações: Adicionado imóvel (Rua Aurora, 123)"
If multiple changes: "3 alterações realizadas" (expandable)
Blockchain Data:


Hash: def456abc... (truncated, monospace font)
Transaction link: "Ver no Blockchain" (Body Small, Primary Deep Blue)
Icon: External link (16dp)
Actions Row:


"Ver PDF desta Versão" Secondary Button (40dp height)
Downloads/opens archived version PDF
"Ver Mudanças" Ghost Button
Opens diff modal (see State 7)
"Restaurar Esta Versão" Ghost Button (if not current)
Only for versions older than current
Timeline Example (Visual Flow):

 ●━━━ v4: 08/01/2025 - Ajuste de percentuais (Atual)
│
●━━━ v3: 15/09/2024 - Adicionado imóvel
│
●━━━ v2: 03/06/2024 - Beneficiário removido
│
●━━━ v1: 01/03/2024 - Testamento criado


State 7: Version Diff Viewer (Changes Modal)
Trigger: User clicks "Ver Mudanças" on timeline


Modal Design:


Full-screen overlay on mobile, large modal on desktop
Max-width: 1200px
Background: White
Padding: 48dp
Header:


Eyebrow (Caption): "COMPARAÇÃO DE VERSÕES"
Headline (H3): "Mudanças: v2 → v3"
Close button (X icon, top-right)
Split-View Layout:


Two columns: "Versão Anterior" | "Versão Atual"
Gap: 24dp
Synchronized scrolling
Visual Diff Styling:


Deleted Content (Left Column Only):
Background: Error Red with 10% opacity
Text: Strikethrough style
Border-left: 4dp Error Red
Example: "~~Beneficiário: João Silva - 25%~~"
Added Content (Right Column Only):
Background: Success Green with 10% opacity
Text: Normal weight, Bold for emphasis
Border-left: 4dp Success Green
Example: "Imóvel: Rua Aurora, 123 - Apartamento"
Modified Content (Both Columns):
Background: Warning Orange with 10% opacity
Changed words: Bold + underlined
Example: Left: "Maria: 40%" → Right: "Maria: 50%"
Unchanged Content:
Normal styling, muted color (Neutral Medium)
Collapsed by default (expand button to show all)
Section Navigation (Left Sidebar):


Jump links to modified sections:
"Bens Imóveis (1 adição)"
"Beneficiários (1 alteração)"
Click to scroll to section
Blockchain Verification (Bottom Section):


Background: Accent Emerald with 10% opacity
Text (Body Small):
"Ambas as versões verificadas em blockchain:"
"v2: Hash abc123... | Tx: 0x789..."
"v3: Hash def456... | Tx: 0xabc..."
Links to blockchain explorer for each
Actions:


"Fechar" Ghost Button
"Baixar Comparação" (PDF) Secondary Button (if user wants record)
State 8: Smart Contract Public Audit
Location: Footer link on site + dedicated page


URL: testamentodigital.com.br/transparencia-blockchain


Page Purpose: Demonstrate technical transparency for tech-savvy users


Content Structure:


Hero Section:


Headline (H2): "Transparência Blockchain"
Subheadline (Body Large): "Nosso código é aberto para auditoria pública"
Smart Contract Card:


Background: White


Border: 2dp Accent Emerald


Padding: 40dp


Icon: Code brackets (48dp, Accent Emerald)


Contract details:


Nome: "TestamentoRegistry.sol"
Rede: "Polygon (Matic Network)"
Endereço: 0x1234567890abcdef... (full address, copyable)
Status: "✓ Verificado no Polygonscan"
Primary Button: "Ver Contrato no Polygonscan"


Opens verified contract on blockchain explorer
Secondary Button: "Ver Código no GitHub"


Opens public repository
Technical Documentation Section:


Accordion with technical details:


Como Funciona o Registro
Explanation of registerTestament() function
Code snippet (syntax highlighted)
Gas costs breakdown
Estrutura de Dados
Struct TestamentRecord schema
Fields: testamentId, documentHash, cpfHash, timestamp, version
Eventos Emitidos
TestamentCreated event specification
How to query events
Audit Reports (if available):


Links to third-party security audits
PDF downloads of audit reports

Feature 4.3: Plano de Continuidade (Escrow Legal)
Screen: Escrow Transparency & Continuity Assurance
State 1: Onboarding Reassurance Screen
Timing: Appears once after ICP signature completion, before final dashboard


Full-Screen Layout:


Background: Subtle gradient from Background Pure to Secondary Blue Pale
Max-width: 880px, centered content
Header:


Eyebrow (Caption): "GARANTIA DE CONTINUIDADE"
Headline (H2): "E Se a Empresa Fechar?"
Subheadline (Body): "Seu testamento está protegido independentemente do futuro da plataforma"
Explainer Video Section:


Video player: 16:9 aspect ratio, max-width 720px
Thumbnail: Founder/CEO or senior lawyer in professional setting
Duration: 60 seconds
Play button overlay: Large, centered, Primary Gold
Video Content Structure (Narration Script):


0:00-0:15: "Entendemos sua preocupação. Por isso, criamos um plano de continuidade certificado"
0:15-0:35: "Parte 2 da sua chave está depositada em escritório independente, registrado na OAB"
0:35-0:50: "Em caso de encerramento, este depositário tem obrigação legal de liberar acesso aos seus beneficiários validados"
0:50-1:00: "É como um cofre de segurança em banco: mesmo se o banco fechar, seus bens estão protegidos"
Trust Documents Section:


Headline (H4): "Documentos Oficiais"


Cards (horizontal layout):


Contrato de Fiel Depositário
Icon: Legal document (32dp, Primary Deep Blue)
Text: "Contrato de Escrow Registrado"
Details: "Escritório: [Nome OAB/SP XXXXX]"
Button: "Ver Contrato" (PDF download/view)
Badge: "Documento Público" (Info Blue pill)
Termo de Compromisso OAB
Icon: OAB seal (32dp)
Text: "Compromisso Registrado na OAB"
Details: "Protocolo: [Número]"
Button: "Ver Termo"
Apólice de Seguro E&O (if available)
Icon: Shield (32dp, Success Green)
Text: "Seguro de Responsabilidade Civil"
Details: "Cobertura: R$ 5MM"
Button: "Ver Apólice"
How It Works Diagram:


Visual flowchart (SVG, interactive):
Three scenarios side-by-side:


Operação Normal (Success Green):
Icon: Building operational
Text: "Empresa ativa → Abertura normal"
Falência (Warning Orange):
Icon: Building with alert
Text: "Empresa encerra → Depositário assume"
Arrow: "Chave 2 + Chave 1 backup = Acesso"
Inadimplência 90+ dias (Info Blue):
Icon: Calendar
Text: "Cliente inadimplente → Chave liberada, testamento mantido"
Bottom CTA:


Primary Button: "Entendi, Prosseguir"
Link: "Ler Mais Sobre Continuidade" (opens detailed page)
State 2: Dashboard Continuity Status Card
Location: Main dashboard, Security section


Card Design:


Background: White
Border-left: 4dp Primary Gold (premium feature indicator)
Border-radius: 12dp
Padding: 24dp
Header:


Icon: Shield with infinity symbol (32dp, Primary Gold)
Title (H4): "Garantia de Acesso Perpétuo"
Status Indicators (Vertical List):


Contrato de Escrow Ativo
Icon: Checkmark (20dp, Success Green)
Text (Body Small): "Contrato ativo com [Nome do Escritório, OAB/SP XXXXX]"
Status: "✓ Ativo" (Success Green pill)
Última Auditoria
Icon: Calendar with checkmark (20dp, Success Green)
Text: "Última auditoria: 15/12/2024"
Note: "(Auditoria anual obrigatória)"
Status: "✓ Aprovado"
Backup de Chaves
Icon: Key in vault (20dp, Accent Emerald)
Text: "Backup das chaves atualizado"
Timestamp: "Última sincronização: 08/01/2025"
Status: "✓ Sincronizado"
Learn More Link:


Ghost Button: "Entender Como Funciona o Escrow"
Icon: Info circle (16dp)
On click: Opens detailed modal or navigates to dedicated page
State 3: Detailed Escrow Explanation Page
URL: /seguranca/plano-continuidade


Access: Public page, also linked from dashboard


Page Structure:


Hero Section:


Headline (H1): "Plano de Continuidade e Escrow Legal"
Subheadline (Body Large): "Como garantimos acesso ao seu testamento, aconteça o que acontecer"
Section 1: O Que é Escrow?


Explanation (Body):
"Escrow é um mecanismo legal onde terceiro neutro guarda ativos em confiança"
"No nosso caso: advogado registrado na OAB guarda Parte 2 da chave de descriptografia"
"Ele tem obrigação legal de liberá-la apenas em cenários específicos e documentados"
Analogy card:
Background: Info Blue with 10% opacity
Icon: Bank vault (48dp)
Text: "Pense como cofre de banco: se o banco fechar, caixa de segurança permanece acessível através de processo legal"
Section 2: Cenários de Acionamento


Three expandable accordions:


Falência/Recuperação Judicial da Plataforma
Trigger: Processo judicial iniciado
Ação: Depositário notificado automaticamente
Timeline: 48 horas para processar solicitações de herdeiros
Procedimento: Herdeiro apresenta certidão de óbito + documento de identificação → Depositário libera Chave 2 + instrui sobre Chave 1 (backup em AWS)
Descontinuação do Serviço
Trigger: Empresa decide encerrar operações voluntariamente
Aviso prévio: 180 dias para clientes
Opções oferecidas:
Migração para plataforma parceira (sem custo)
Download de todos documentos + instruções de auto-custódia
Ativação do escrow para continuidade independente
Inadimplência do Cliente (90+ dias)
Trigger: Falta de pagamento por 90 dias
Ação: Depositário libera chave, mas testamento não é deletado
Nota: "Cliente pode reativar pagando débitos + taxa de R$ 200"
Section 3: Quem é o Depositário?


Card with depositário information:
Photo: Professional photo of lawyer/firm
Name: "Dr. [Nome Completo]" or "[Nome do Escritório]"
Credentials: "OAB/SP XXXXX | 25 anos de atuação"
Specialty: "Direito Sucessório e Compliance"
Independence statement: "Depositário independente, sem vínculo societário com Testamento Digital"
Verification:
Link: "Verificar Registro na OAB" (opens OAB public database)
Link: "Ver Contrato de Depositário" (PDF download)
Section 4: Auditoria e Verificação


Explanation (Body):
"Anualmente, auditoria independente verifica:"
Checklist:
"✓ Depositário possui Parte 2 das chaves em custódia segura"
"✓ Chaves correspondem aos testamentos ativos"
"✓ Procedimentos de emergência funcionais"
"✓ Contato com clientes selecionados aleatoriamente para validação"
Latest audit card:
Background: Success Green with 10% opacity
Icon: Checkmark in shield (48dp)
Text: "Última Auditoria: Dezembro 2024"
Status: "✓ 100% de conformidade"
Link: "Ver Relatório de Auditoria" (PDF, anonymized data)
Section 5: SLA de Atendimento


Table format:
Cenário
Prazo de Resposta
Custo para Herdeiro
Falência da empresa
48h para processar
R$ 0 (já pago)
Cliente falecido (escrow acionado)
48h após documentação
R$ 0
Consulta sobre processo
24h (dias úteis)
R$ 0


Section 6: Verificação Independente


Public verification tool:
Headline (H4): "Verificação Pública de Testamentos em Escrow"
Description: "Depositário publica lista de IDs (anonimizados) sob custódia"
Link: "Ver Lista Pública no Site do Depositário"
Instruction: "Localize seu ID de testamento na lista para confirmar que está registrado"
State 4: Client Communication in Crisis
Scenario: Company enters financial difficulty (pre-bankruptcy)


Proactive Communication Strategy:


Email to All Clients (Immediate):


Subject: "Atualização Importante Sobre Testamento Digital"
Tone: Transparent, reassuring, not alarmist
Content:
"Estamos passando por um processo de reestruturação financeira"
"Seus testamentos estão seguros e o escrow permanece ativo"
"Não há ação necessária de sua parte neste momento"
"Manteremos você informado de todos os desenvolvimentos"
CTA: "Acessar Status Page" (link to dedicated page)
Status Page (/status):


Real-time updates on company situation
Reassurance messages:
"✓ Escrow com [Depositário] ativo e verificado"
"✓ Todos os testamentos acessíveis via depositário se necessário"
"✓ Backup de todos os dados atualizado"
FAQ: "O que acontece com meu testamento?"
Contact: Direct line to support team
Dashboard Banner:


Persistent top banner (cannot dismiss for 7 days)
Background: Warning Orange with 15% opacity
Icon: Info circle (24dp)
Text: "Estamos em processo de reestruturação. Seus testamentos permanecem protegidos. [Saiba Mais]"
State 5: Herdeiro Contacta Depositário (Post-Óbito em Crise)
Scenario: Company failed, client deceased, herdeiro needs access


Depositário Contact Page:


Hosted on depositário's independent website (not Testamento Digital domain)
URL: [depositario-nome].com.br/testamento-digital-heirs
Page Layout:


Headline (H2): "Acesso a Testamento Digital - Herdeiros"
Subheadline (Body): "Se você é beneficiário de testamento custodiado, siga o processo abaixo"
Step-by-Step Process:


Verificação de Elegibilidade
Form fields:
Nome completo do falecido
CPF do falecido (or ID do testamento, if known)
Seu nome completo (herdeiro)
Seu CPF
Relação com falecido: [Dropdown: Filho(a) | Cônjuge | Pai/Mãe | Outro]
Email de contato
Telefone
Submit: "Verificar Elegibilidade"
Upload de Documentos (after initial verification):
Required documents list:
Certidão de óbito (PDF/JPG, max 5MB)
Seu documento de identidade (RG/CNH)
Comprovante de parentesco (se aplicável)
Drag-and-drop upload zones
Security note: "Documentos são verificados e deletados após 30 dias"
Agendamento de Validação
Videochamada com depositário (30 minutos)
Purpose: Verify identity, explain process, answer questions
Calendar integration (similar to Feature 2.1)
Liberação de Chave
After depositário validates:
Chave 2 (depositário's fragment) provided
Instructions to access Chave 1 (AWS backup with special procedure)
Combined: Herdeiro can decrypt testament
Timeline: 48h from document submission to key release
SLA Commitment:


Displayed prominently on page
"Comprometemos-nos a processar solicitações em até 48 horas úteis após recebimento de documentação completa"
Support Contact:


Phone: Direct line to depositário office
Email: Dedicated email for heir support
Office hours: Monday-Friday, 9am-6pm

Feature 5.1: Integração com APIs de Óbito
Screen: Monitoring Dashboard & Status
State 1: Activation Confirmation (Post-Signature)
Timing: Shown on completion screen (Feature 3.3 State 5)


Activation Card:


Background: Info Blue with 10% opacity
Border-left: 4dp Info Blue
Border-radius: 12dp
Padding: 24dp
Icon: Heartbeat/monitor (32dp, Info Blue)
Content:


Headline (H4): "Monitoramento Ativado"
Timestamp: "Ativo desde 13/01/2025 às 14:30"
Explanation (Body Small):
"Consultamos diariamente bases públicas de óbito"
"Você não precisa fazer nada - é totalmente automático"
"Primeira consulta acontecerá em 24 horas"
How It Works Section (Expandable):


Collapsed: Link "Como funciona o monitoramento?" (with chevron)
Expanded:
Text (Body Small):
"Todos os dias às 03:42 (madrugada, menos tráfego), consultamos APIs públicas de óbito"
"Fontes: Serasa Experian (MVP) | CRC Nacional (futuro)"
"Se detectado óbito, ativamos validação em camadas antes de abrir testamento"
Reassurance: "Suas informações são consultadas, nunca compartilhadas"
State 2: Monitoring Status (Dashboard Card)
Location: Main dashboard, prominence similar to Security card


Card Design:


Background: White
Border-left: 4dp Info Blue
Border-radius: 12dp
Padding: 24dp
Header:


Icon: Heartbeat with checkmark (32dp, Success Green when active)
Title (H4): "Monitoramento de Vida"
Status badge: "🟢 Ativo" (Success Green pill)
Status Details (Vertical List):


Última Consulta
Icon: Calendar with clock (20dp, Info Blue)
Text (Body Small): "Última consulta: Hoje às 03:42"
Relative time: "(há 11 horas)" (calculated dynamically)
Próxima Consulta
Icon: Calendar with arrow (20dp, Info Blue)
Text: "Próxima consulta: Amanhã às 03:42"
Countdown (if <24h): "em 13 horas"
Fonte de Dados
Icon: Database (20dp, Info Blue)
Text: "Fonte: Serasa Experian"
Note (Body Micro): "(Base nacional de óbitos)"
Histórico
Icon: List (20dp, Info Blue)
Text: "127 consultas realizadas desde ativação"
Status: "0 alertas" (Success Green)
Link: "Ver Histórico Completo" (opens modal)
Learn More Link:


Ghost Button: "Como Funciona o Monitoramento?"
Opens educational modal (see State 3)
State 3: Educational Modal - Monitoring Process
Modal Design:


Max-width: 820px
Background: White
Padding: 48dp
Border-radius: 16dp
Header:


Headline (H3): "Como Funciona o Monitoramento Automático"
Close button (X icon, top-right)
Content Sections:


Section 1: Processo Diário


Icon: Clock (48dp, Primary Deep Blue)
Text (Body):
"Todos os dias às 03:42 (horário de Brasília), nosso sistema automaticamente:"
Numbered list:
"Envia seu CPF para API de óbito (Serasa Experian)"
"Recebe resposta: 'vivo' ou 'óbito' + data (se aplicável)"
"Se 'vivo': Registra consulta, nada mais acontece"
"Se 'óbito': Inicia validação em camadas (Feature 5.3)"
Timeline visual (horizontal steps):
03:42 → Consulta API → Resposta → Registro → (se óbito) Validação
Section 2: Latência de Dados


Icon: Warning triangle (48dp, Warning Orange)
Text (Body):
"Importante: Dados de óbito podem levar 24-72 horas para aparecer em bases públicas após registro em cartório"
"Isso significa: abertura do testamento acontece 2-4 dias após óbito (não instantânea)"
"Essa latência é característica de todos os sistemas de monitoramento no Brasil"
Section 3: Privacidade


Icon: Shield with eye (48dp, Accent Emerald)
Text (Body):
"Suas informações são apenas consultadas, nunca compartilhadas"
"API recebe: CPF"
"API retorna: Status (vivo/óbito) + data"
"Nenhuma informação adicional é solicitada ou armazenada pela API"
Section 4: O Que Você Precisa Fazer


Icon: Checkmark in circle (48dp, Success Green)
Text (Body, Bold): "Nada!"
Explanation: "O monitoramento é totalmente automático. Você não precisa confirmar vida regularmente, a menos que seja notificado (Dead Man's Switch, Feature 5.2)"
Bottom CTA:


Primary Button: "Entendi"
Link: "Ver Documentação Técnica" (for tech users, opens API documentation)
State 4: Monitoring History Modal
Trigger: User clicks "Ver Histórico Completo" in dashboard card


Modal Design:


Full-screen on mobile, large modal on desktop
Max-width: 1000px
Background: White
Padding: 40dp
Header:


Headline (H3): "Histórico de Consultas de Óbito"
Date range selector: "Últimos 30 dias" [Dropdown: 7 dias | 30 dias | 90 dias | Tudo]
Close button
Table Layout:


Responsive table (cards on mobile)


Columns:


Data/Hora
Format: "08/01/2025 03:42:15"
Sort: Descending (most recent first)
Status Retornado
"✓ Vivo" (Success Green)
Or "⚠️ Óbito" (Error Red) - should never appear for live user
Fonte
"Serasa Experian"
Icon: Database (16dp)
Tempo de Resposta
"1.2s" (API response time)
Performance metric
Detalhes
"Ver Detalhes" link (opens row expansion with technical data)
Pagination:


Bottom of table: "Mostrando 1-50 de 127" with prev/next buttons
Export Option:


Button: "Exportar CSV" (Ghost Button, top-right)
Downloads full history as CSV file
State 5: Edge Case - API Unavailable/Timeout
Backend Behavior:


Cron job runs at 03:42 daily
Sends CPF to API endpoint
Timeout threshold: 10 seconds
If timeout or HTTP error (500, 503):
Retry #1: 2 hours later (05:42)
Retry #2: 2 hours later (07:42)
Retry #3: 2 hours later (09:42)
User Dashboard Impact:


If Retries Succeed:
No notification to user
Dashboard shows: "Última consulta: Hoje às 09:42" (time of successful retry)
Internal log: "Consulta realizada com atraso (3 tentativas)"
If All Retries Fail:
Internal alert to tech team (Slack/PagerDuty)
Dashboard shows:
Status badge: "🟡 Atenção" (Warning Orange)
Text: "Última consulta: Ontem às 03:42"
Warning message: "⚠️ Monitoramento temporariamente indisponível. Nossa equipe foi notificada."
User NOT alerted unless issue persists >48h
Fallback Procedure (If API Down >24h):


Manual consultation: Operator manually queries alternative API source
User receives email (only if issue >48h):
Subject: "Atualização sobre Monitoramento"
Content: "Estamos enfrentando instabilidade temporária com nossa API principal. Ativamos consulta manual de backup. Não há ação necessária de sua parte."
State 6: False Positive Prevention (Homonímia)
Problem: API returns óbito for CPF similar to user's (rare data error at source)


Detection Mechanism:


Feature 5.3 Layer 2 (second API source) catches discrepancy
Layer 4 (advogado) requires certidão de óbito before approval
If False Positive Reaches User:


Emergency contact email/SMS sent (Feature 5.3 Layer 2)
User responds "I'm alive"
System flags as false positive
Case logged for analysis
Email to user (24h later):
Subject: "Falso Alerta de Óbito - Desculpas"
Content:
"Detectamos registro incorreto de óbito em base pública (erro de homonímia)"
"Seu testamento permanece protegido e nenhum acesso foi realizado"
"Compensação: 1 mês de anuidade grátis"
Tone: Apologetic, transparent about what happened
State 7: Data Privacy & LGPD Compliance
Privacy Page Section (/privacidade#monitoramento):


What Data We Process:


Text (Body):
"Para monitoramento de óbito, processamos:"
List:
"Seu CPF (enviado para API de óbito)"
"Status retornado pela API (vivo/óbito + data)"
"Histórico de consultas (timestamps e resultados)"
Legal basis (LGPD):
"Base legal: Execução de contrato (Art. 7º, V da LGPD)"
"Finalidade: Cumprir obrigação contratual de abertura automática pós-óbito"
Data Retention:


"Histórico de consultas: Mantido enquanto contrato ativo"
"Após encerramento: Dados anonimizados ou deletados em 90 dias"
Your Rights:


"Você pode:"
List:
"Visualizar histórico de consultas a qualquer momento"
"Exportar dados (CSV)"
"Solicitar exclusão (implica cancelamento do monitoramento)"
CTA: "Exercer Meus Direitos" (opens support form)

Feature 5.2: Dead Man's Switch (Prova de Vida)
Screen: Life Confirmation Flow
State 1: Semestral Email Notification
Timing: Exactly 6 months (182 days) after last confirmation or account creation


Email Design:


Subject: "✅ Confirmação Semestral - Testamento Digital"
Preview text: "Ação simples de 5 segundos para manter seu testamento protegido"
Email Body (HTML, Mobile-Responsive):


Header Section:
Logo: Testamento Digital
Headline (H3): "Olá [Nome], Confirmação de Atividade"
Main Content:
Icon: Checkmark in circle (64dp, Success Green)
Text (Body):
"Como parte da nossa rotina de segurança semestral, pedimos que confirme que está ativo"
"Esta confirmação leva 5 segundos e mantém seu testamento protegido"
Primary CTA:
Button: Premium/Gold style
Text: "Estou Ativo"
Link: Unique token URL (expires in 30 days)
Format: https://app.testamentodigital.com.br/confirm-life?token=abc123xyz789
One-click confirmation (no login required)
Timeline Reminder:
Text (Body Small): "Válido por 30 dias. Lembretes serão enviados se não responder."
Reassurance Section:
Background: Secondary Blue Pale
Text (Body Small):
"Por que pedimos isso?"
"Esta confirmação periódica garante que testamentos não sejam abertos prematuramente por falha técnica"
"É uma camada extra de segurança para você"
Footer:
Standard footer with unsubscribe (cannot unsubscribe from this type of notification)
Security notice: "Esta é uma mensagem automática legítima. Nunca pediremos senhas ou dados financeiros"
Parallel SMS (Sent Simultaneously):


Message: "Testamento Digital: Confirme que está ativo clicando aqui: [short link]. Válido por 30 dias."
Short link: URL shortener (bit.ly or custom domain) pointing to same token URL
Character count: <160 (single SMS)
State 2: One-Click Confirmation Landing Page
URL: /confirm-life?token=...


No Login Required: Token authenticates user


Page Design:


Full-screen centered content
Background: Subtle gradient from Background Pure to Success Green (5% opacity)
Max-width: 620px
Success Animation (On Page Load):


Large checkmark (120dp, Success Green)
Stroke draw animation (800ms)
Confetti burst (brief, 1 second)
Confirmation Message:


Headline (H2): "✓ Obrigado, [Nome]!"
Subheadline (Body Large): "Confirmação registrada em [timestamp]"
Additional info (Body):
"Próxima confirmação solicitada em: [data daqui a 6 meses]"
"Você receberá lembrete por email e SMS"
What Happened (Collapsible Info Box):


Collapsed: "O que foi registrado?" (link)
Expanded:
"Confirmação feita via: Link de email"
"IP de origem: 177.xxx.xxx.xxx (São Paulo, Brasil)"
"Data/hora: 08/01/2025 14:32:15 GMT-3"
"Método: Token único (não exigiu login)"
Actions:


"Voltar ao Dashboard" Primary Button
"Fechar" Ghost Button (if user just wanted to confirm and leave)
Backend Logging:


Database update: last_life_confirmation = NOW()
Log entry: Method=email, IP, User-Agent, Timestamp
Reset escalation timers (see State 4)
State 3: Manual Early Check-In (Dashboard)
Location: Dashboard, Monitoring card (Feature 5.1 State 2)


Additional Action Button:


Ghost Button: "Confirmar que Estou Ativo"
Icon: Checkmark in hand (20dp)
Use case: User traveling without reliable internet, planned surgery, etc.
On Click:


Immediate confirmation modal:
Icon: Checkmark animation
Text: "✓ Confirmação Registrada"
Explanation: "Próxima solicitação resetada para daqui a 6 meses"
Timestamp: "Confirmado em [data/hora]"
Auto-closes after 3 seconds
Backend Effect:


Same as responding to email: Reset 6-month timer
Log: "Manual check-in via dashboard"
State 4: Escalation Sequence (No Response)
Timeline Overview:


D+0: Email + SMS sent
D+7: Second attempt (email + SMS)
D+14: Phone call attempt
D+30: Status marked "No response" (but NOT assumed dead)
D+7 (7 Days After First Email):


Second Email:
Subject: "⚠️ Ação Necessária - Confirmação de Atividade"
Urgency: Moderate (not alarmist)
Content:
"Enviamos solicitação há 7 dias e não recebemos resposta"
"Por favor, confirme sua atividade clicando no link abaixo"
"Se não confirmar em 23 dias, seu caso será revisado manualmente"
Button: "Confirmar Agora" (same token URL, still valid)
SMS Reinforcement:
Message: "Lembrete Testamento Digital: Confirme atividade aqui [link]. Expira em 23 dias."
D+14 (14 Days After First Email):


Phone Call Attempt:
Manual process: Operator calls user's registered phone
Script:
"Olá, Sr(a). [Nome], aqui é [Operator Name] da Testamento Digital"
"Estou ligando para confirmar seu cadastro ativo. É uma rotina de segurança"
If user answers: "Ótimo! Posso confirmar sua atividade agora mesmo. Nenhuma ação adicional necessária"
If voicemail: "Deixe mensagem: 'Por favor, ligue de volta para [number] ou confirme via email enviado. Obrigado!'"
Post-Call:
If spoke with user: Operator manually registers confirmation in system
Email sent to user: "Confirmamos sua ligação. Próxima verificação em 6 meses"
If no answer: Log attempt, prepare final email
D+21 (21 Days, 7 Days Before Expiration):


Final Email Attempt:
Subject: "Última Oportunidade - Confirmação de Atividade Expira em 7 Dias"
Content:
"Tentamos contato por email (2x), SMS (2x) e telefone (1x)"
"Se não confirmar em 7 dias, marcaremos como 'sem resposta' para investigação manual"
"Isso NÃO abrirá seu testamento automaticamente, mas iniciará verificação"
Button: "Confirmar Agora" (same token)
Alternative: "Preciso de Ajuda" button (opens support chat)
D+30 (30 Days After First Email - No Response):


System Status Update:
Dashboard status: "⚠️ Atenção - Sem resposta há 30 dias"
Internal alert: Compliance team notified
Flag: "Requires manual investigation"
Manual Investigation Process:
Compliance checks:
Re-query API de óbito (is user actually deceased and API didn't catch before?)
Search public social media (LinkedIn, Facebook - last activity?)
Check if user logged into platform recently (strong sign of life)
Decision:
If clear signs of life (logged in recently): Wait another 30 days, send new sequence
If no signs but no óbito: Keep monitoring, do NOT open testamento
If API now shows óbito: Trigger Layer 3 validation (Feature 5.3)
State 5: User Responses After Deadline
Scenario: User confirms at D+35 (5 days past "deadline")


System Behavior:


Token still valid (technical expiration is 60 days, not 30)
Confirmation accepted normally
Status reverts from "⚠️ Atenção" to "🟢 Ativo"
Email to User:


Subject: "Confirmação Recebida - Obrigado"
Content:
"Recebemos sua confirmação"
"Notamos que respondeu após prazo recomendado. Tudo bem!"
"Apenas lembre-se: respostas rápidas evitam investigações desnecessárias"
"Próxima confirmação em: [data]"
No Penalty: Late response is fine, no fees or restrictions


State 6: Customization Options (Future/MVP+)
Location: Settings > Notificações


Frequency Adjustment:


Current: "Confirmação Semestral (a cada 6 meses)"
Dropdown options:
"Trimestral (a cada 3 meses)" - Additional cost: +R$ 100/ano
"Anual (a cada 12 meses)" - Default for some plans
Explanation: "Confirmações mais frequentes aumentam segurança mas requerem mais atenção sua"
Secondary Contact (Backup):


Field: "Contato Secundário"
Placeholder: "Email ou telefone de pessoa de confiança"
Use case: "Se não responder em 14 dias, contactaremos esta pessoa"
Privacy note: "Pessoa será informada apenas que você possui testamento conosco, sem detalhes"
State 7: Edge Cases
Edge Case 1: User is Temporarily Unreachable (Hospital, Travel):
Proactive Solution: Manual early check-in (State 3)
Reactive Solution: Support can extend deadline
User calls/emails support: "I'm traveling, can't confirm now"
Support: Extends deadline by 30-90 days
System note: "Extension granted: travel"
Edge Case 2: User Deceased but Family Doesn't Know About Platform:
Detection:
No response to Dead Man's Switch + API óbito returns "sem registro"
Possible: Death not yet in system, or happened abroad
After 90 days no response:
Maintain status quo: Testamento stays protected, not opened
Eventual API catch when death is registered
Family can proactively contact platform if they discover it
Edge Case 3: User Deliberately Ignoring (Testing System):
System Patience:
No automatic assumption of death from lack of response alone
Continues monitoring via API (primary method)
Dead Man's Switch is backup, not trigger

Feature 5.3: Validação em Camadas (Anti-Falso Positivo)
Screen: Multi-Layer Validation Pipeline
State 1: Layer 1 - API Trigger (Backend, Not User-Facing)
Automatic Detection:


Daily API query (Feature 5.1) returns: {"status": "obito", "data_obito": "2025-01-08"}
System immediately creates "Validation Case"
Case Record Structure (Internal Database):

 Case ID: VAL-2025-001234
Client: [Nome], CPF [XXX.XXX.XXX-XX]
Trigger: API Óbito - Serasa Experian
Data Óbito Reportada: 08/01/2025
Status: Layer 1 ✓ - API Confirmed
Created: 09/01/2025 03:42:15


No User/Beneficiary Notification Yet:


Processing is silent at this stage
Compliance dashboard shows new case
Automated progression to Layer 2
State 2: Layer 2 - Emergency Contact Attempt (1 Hour After Layer 1)
Automated Actions:


Within 1 hour of Layer 1 trigger
System sends emergency communications
Email (Highest Priority, Red Alert Style):


Subject: "🚨 URGENTE: Detectamos Registro de Óbito em Seu CPF"


Preview: "Se você está recebendo este email, responda IMEDIATAMENTE"


Body:


Background: Error Red with 10% opacity
Icon: Large warning triangle (80dp)
Text (Body, Bold):
"ATENÇÃO: Detectamos registro de óbito vinculado ao seu CPF em base pública"
"SE VOCÊ ESTÁ LENDO ISSO, SIGNIFICA QUE VOCÊ ESTÁ VIVO E HOUVE UM ERRO"
"RESPONDA A ESTE EMAIL IMEDIATAMENTE ou clique no botão abaixo"
Button: Error Red style, "ESTOU VIVO - CONFIRMAR"
Links to emergency confirmation page (see State 2B)
Urgency: "Você tem 48 horas para responder antes de prosseguirmos com validações"
SMS (Parallel):


Message: "ALERTA CRÍTICO Testamento Digital: Detectamos registro de óbito no seu CPF. Se recebeu esta mensagem, responda ou ligue [phone] AGORA. Possível erro nos dados."
Character count: <280 (2 SMS segments acceptable for urgency)
WhatsApp (if registered):


Message template: Similar to SMS
Advantage: Read receipts help determine if user saw message
Voice Call (Automated, Using Twilio or Similar):


Triggers 2 hours after email/SMS if no response
Pre-recorded message:
"Alerta importante da Testamento Digital para [Nome]"
"Detectamos registro de óbito em seu CPF. Se você está ouvindo isso, houve um erro"
"Pressione 1 para confirmar que está vivo, ou ligue para [número]"
If press 1: Triggers confirmation (same as clicking email button)
Wait Period: 48 hours


If user responds: Case marked "FALSE POSITIVE" → Archived, notifications stop
If no response: Auto-advance to Layer 3
State 2B: Emergency Confirmation Page
URL: /emergency-confirm-life?case=[case-id]&token=[secure-token]


Page Design:


Full-screen, high-contrast (red accents for urgency)
Cannot be ignored or dismissed
Content:


Icon: Large red warning triangle (120dp)
Headline (H1, Error Red): "Confirmação de Emergência"
Text (Body Large):
"Detectamos registro de óbito em bases públicas"
"Se você está vendo esta tela, houve um erro nos dados oficiais"
"Confirme sua vida para evitar abertura prematura do testamento"
Confirmation Form:


Single button: "CONFIRMO QUE ESTOU VIVO"
Style: Large (height 64dp), Error Red, full-width
Icon: Checkmark (28dp)
Additional verification (optional but recommended):
"Descreva brevemente o que você fez hoje" (textarea)
Purpose: Prove it's actually the user, not automated response
Placeholder: "Ex: Acordei, tomei café, estou trabalhando de casa"
Post-Confirmation:


Success screen:
Icon: Large checkmark (Success Green)
Text: "Confirmação Registrada. Caso arquivado como FALSO POSITIVO"
Explanation: "Vamos investigar o erro na base de dados oficial"
Compensation: "Como desculpas pelo susto, oferecemos 1 mês grátis"
Backend:
Case status: "FALSE POSITIVE - User confirmed alive"
Email to compliance: "Investigate data source error for CPF [XXX]"
Flag API provider: Report false positive (helps improve data quality)
State 3: Layer 3 - Cross-Reference Verification (If No Layer 2 Response)
Trigger: 48 hours after Layer 2 with no user response


Automated Second Source Query:


If Layer 1 used Serasa → Layer 3 queries Boa Vista (or vice versa)
Or: Query state-level databases (SIM/SEADE for São Paulo, etc.)
Goal: Confirm óbito with independent source
Possible Outcomes:


Both Sources Confirm Óbito:
System confidence: High
Status: "Layer 3 ✓ - Cross-verified"
Auto-advance to Layer 4
Sources Conflict (API 1: óbito, API 2: vivo):
System confidence: Low
Status: "Layer 3 ⚠️ - Conflict Detected"
Manual investigation triggered
Case paused, does NOT advance to Layer 4 until resolved
Second Source Unavailable:
Fallback: Query alternative source or proceed with Layer 4 (requires human validation anyway)
Note logged: "Single-source verification only"
Conflict Resolution Process (If Outcome 2):


Compliance team manually:
Checks user's last platform login (recent login = clearly alive)
Searches public obituaries online (newspapers, funeral homes)
Attempts phone call to user (last-ditch effort)
Resolution:
If signs of life: False positive, case closed
If signs of death: Proceed to Layer 4 with caution flag
State 4: Layer 4 - Advogado Master Validation (Human Decision Point)
Trigger: Layer 3 completed successfully (óbito cross-verified)


Advogado Dashboard (Exclusive Interface):


URL: /admin/validation-queue (role-restricted)
Layout: Table of pending cases
Case Card in Queue:


Card style: White background, yellow left border (pending validation)
Header:
Case ID: VAL-2025-001234
Client: [Nome] (last 3 digits CPF shown: XXX.XXX.XXX-89)
Days pending: "Aguardando há 3 dias"
Quick info:
Óbito reported: 08/01/2025
Layer 1: ✓ Serasa confirmed
Layer 2: ✗ No user response (3 attempts)
Layer 3: ✓ Boa Vista confirmed
CTA: "Revisar Caso" button
Detailed Case Review Panel (On Click "Revisar"):


Full-screen modal or dedicated page
Left panel (60%): Case details
Right panel (40%): Actions and checklist
Left Panel - Case Information:


Client Profile Section:
Name, CPF (full), Date of Birth
Age at alleged death: "68 anos"
Testamento created: "01/03/2024"
Last platform login: "05/01/2025" ← If recent, major red flag!
Detection Timeline:
Visual timeline (horizontal):
08/01: Óbito registered in official database
09/01: Our API detected
09/01: Emergency contact sent (no response)
11/01: Cross-verification confirmed
12/01: Case escalated to you
Verification Attempts Log:
Table:
09/01 14:00 - Email sent (not opened)
09/01 14:01 - SMS sent (delivered)
09/01 16:00 - Automated call (no answer)
10/01 09:00 - Second email (not opened)
10/01 09:01 - Second SMS (delivered)
API Source Data:
Primary source: Serasa Experian
Response: {"status": "obito", "data": "2025-01-08", "certidao": null}
Confidence: "Alta"
Secondary source: Boa Vista
Response: {"status": "obito", "data": "2025-01-08"}
Conflict: None
Beneficiários Cadastrados:
List (masked for privacy at this stage):
Maria S. (Filha) - 40%
João S. (Filho) - 40%
Instituto XYZ - 20%
Purpose: Advogado knows who will be notified if approved
Right Panel - Validation Checklist:


Required Actions (Interactive Checkboxes):


Certidão de Óbito Verificada
[ ] Certidão uploaded and authentic
Upload zone: Drag-and-drop PDF/JPG
Once uploaded:
System OCR extracts: Nome, CPF, Data de Óbito
Auto-checks if matches case data
Advogado visually confirms QR code/digital signature on certidão
If match: ✓ Auto-check
If mismatch: Warning shown, checkbox disabled
CPF da Certidão = CPF do Testamento
[ ] CPF numbers match exactly
Auto-verified once certidão uploaded
If mismatch: "⚠️ CPFs NÃO CONFEREM - Case bloqueado"
Data de Óbito Coerente com APIs
[ ] Dates within reasonable range (APIs lag)
Comparison shown:
Certidão: 08/01/2025
API 1: 08/01/2025
API 2: 08/01/2025
If >7 days difference: Flag for review
Nenhuma Resposta do Cliente (72h)
[ ] 72 hours passed since Layer 2, no user contact
Countdown shown: "Última tentativa: há 73 horas"
Sem Sinais de Vida Recentes
[ ] No recent logins or platform activity
Last login displayed: "05/01/2025" (3 days before óbito - OK)
If login AFTER óbito date: BLOCK case, major red flag
Decision Actions:


Three buttons, vertical stack:


"Aprovar Abertura" (Success Green, Primary Button)
Enabled only when all checkboxes checked
Confirmation modal: "Tem certeza? Esta ação iniciará abertura do testamento"
Requires 2FA: Advogado re-enters password + 2FA code
On confirm: Triggers Feature 6 (Abertura & Distribuição)
"Solicitar Mais Informações" (Secondary Button, Warning Orange)
Opens form: "O que precisa?"
Options:
"Contactar família/beneficiários para confirmar"
"Aguardar mais tempo (extended deadline)"
"Solicitar certidão atualizada de cartório"
Textarea: Free-form notes
Action: Pauses case, sends task to BDR/compliance
"Rejeitar (Falso Positivo)" (Ghost Button, Error Red)
Use case: Evidence user is alive despite APIs
Confirmation modal: "Explique por que é falso positivo"
Textarea: Required explanation
On confirm:
Case archived as "FALSE POSITIVE - Advogado rejected"
User notified (email): "Detectamos erro. Tudo OK. Desculpe o transtorno."
Compensation: Credit applied
Audit Trail (Bottom of Panel):


All actions logged with timestamp + actor:
"09/01 14:35 - Case created by System (API trigger)"
"11/01 10:00 - Cross-verified by System (Boa Vista)"
"12/01 09:15 - Dr. [Nome] opened case for review"
"12/01 10:42 - Dr. [Nome] uploaded certidão de óbito"
"12/01 10:50 - Dr. [Nome] approved opening"
State 5: Advogado Master Indisponível (Emergency Backup)
Problem: Primary advogado on vacation, sick, or otherwise unreachable


Automatic Escalation:


SLA: 48 hours for advogado response
If no action after 48h: System alerts backup advogado #2
Email to backup: "Case VAL-[ID] pending your review (primary advogado unavailable)"
If Both Unavailable:


Escalate to director jurídico (company founder or legal partner)
Flag as "URGENT - NO ADVOGADO AVAILABLE"
Manual phone call to director
Maximum SLA: 96 hours (4 days) from Layer 3 to Layer 4 decision


If exceeded: Compliance breach, case reviewed post-facto
State 6: Óbito in Foreign Country
Problem: Brazilian citizen dies abroad, óbito not in Brazilian databases


Detection Failure:


APIs won't detect foreign death
Dead Man's Switch (Feature 5.2) also fails (no response)
Family-Initiated Process:


Family member finds out about Testamento Digital (from user's records)
Contacts platform: "My [relation] passed away abroad. They had testament with you"
Support: "We'll need foreign death certificate + apostille"
Manual Validation:


Family uploads:
Certified death certificate (foreign country)
Apostille or consular authentication
Translation (sworn translator if not Spanish)
Compliance validates documents
Advogado Master reviews (same Layer 4 process)
Timeline: 7-15 days (longer due to document verification)

Feature 5.4: Dashboard de Beneficiários (Gestão pelo Cliente)
Screen: Beneficiary Management Dashboard
State 1: Overview Page (Main Beneficiary Dashboard)
Location: Dashboard > Beneficiários (main navigation)


Page Layout:


Max-width: 1200px, centered
Background: Background Subtle
Padding: 48dp vertical, 24dp horizontal
Header Section:


Breadcrumb: Dashboard > Beneficiários
Headline (H2): "Seus Beneficiários"
Subheadline (Body): "Gerencie quem receberá seu patrimônio e como eles serão notificados"
Overview Statistics Card:


Background: White


Border-radius: 16dp


Padding: 32dp


Box shadow: Y-offset 2dp, Blur 16dp, Opacity 6%


Layout: Horizontal stats (3 columns on desktop, stacked on mobile)


Stat 1: Total Cadastrado


Large number (H1 size): "3"
Label (Body Small): "Beneficiários cadastrados"
Icon: People/users (32dp, Primary Deep Blue)
Stat 2: Status de Validação


Split display:
"2" (H2, Success Green) + "Validados ✓"
"1" (H2, Warning Orange) + "Aguardando confirmação ⏳"
Icon: Checkmark in shield (32dp)
Stat 3: Distribuição Total


Circular progress chart (donut chart):
100% completion shown (all patrimony allocated)
Color: Success Green if 100%, Warning Orange if <100% or >100%
Text: "100% alocado"
Icon: Pie chart (32dp)
Warning Banner (Conditional):


Only appears if issues detected
Background: Warning Orange with 15% opacity
Border: 2dp Warning Orange
Padding: 16dp
Icon: Warning triangle (24dp)
Examples:
"⚠️ 1 beneficiário ainda não confirmou dados. Recomendamos contato direto"
"⚠️ Distribuição total: 95%. Você possui 5% não alocado"
"⚠️ Herdeiros necessários recebem <50% (legítima). Isso pode ser contestado"
State 2: Beneficiary List View
Section Header:


Title (H3): "Lista de Beneficiários"
Action: Primary Button "Adicionar Beneficiário" (top-right)
List Layout:


Cards layout (not table on mobile, better UX)
Gap: 16dp between cards
Sorted by: Percentage descending (largest inheritor first)
Individual Beneficiary Card:


Background: White
Border: 2dp Neutral Light (validated) or 2dp Warning Orange (pending)
Border-radius: 12dp
Padding: 24dp
Hover: Lift with shadow, border becomes Primary Deep Blue
Card Content Layout (Horizontal Flex):


Left Section (60%):


Photo/Avatar:
Circular, 64dp diameter
If photo uploaded: Display photo
If no photo: Initials on colored background (auto-generated color per user)
Border: 2dp Success Green (validated) or Warning Orange (pending)
Name & Relationship (Next to Avatar):
Name (H4, Bold): "Maria Silva"
Relationship badge (Body Small, pill):
Background: Secondary Blue Pale
Text: "Filha" (or Cônjuge, Pai/Mãe, Amigo, etc.)
Icon prefix: Small relationship icon (16dp)
Contact Info (Below Name):
CPF: "XXX.XXX.XXX-45" (partially masked for privacy)
Email: "maria.silva@email.com" (clickable mailto link)
Phone: "(11) 98765-4321"
If missing: "⚠️ Faltam dados" (Warning Orange)
Validation Status Badge:
Validated:
Badge: "✓ Validado em 15/03/2024" (Success Green pill)
Icon: Checkmark in circle (20dp)
Pending:
Badge: "⏳ Aguardando Confirmação" (Warning Orange pill)
Icon: Clock (20dp)
Sub-text: "Convite enviado há 12 dias"
Right Section (40%):


Allocation Display (Prominent):
Large percentage (H2 size): "40%"
Description (Body Small): "do patrimônio líquido"
Or if specific items: "3 itens específicos" with expand icon
Background: Secondary Blue Pale (subtle highlight)
Border-radius: 8dp
Padding: 16dp
Herdeiro Substituto (If Configured):
Icon: Two people with arrow (20dp)
Text (Body Small): "Substituto: João Silva"
Tooltip on hover: "Se Maria falecer antes, herança vai para João"
Actions Menu (Three Dots):
Dropdown trigger: Three vertical dots icon (24dp)
Hover: Background circle appears (Neutral Light)
Dropdown menu (appears below):
"✏️ Editar" (opens edit modal)
"📧 Reenviar Convite" (only if pending validation)
"🗑️ Remover" (Error Red text)
Menu background: White with shadow
Border-radius: 8dp
State 3: Add Beneficiary Flow (Modal)
Trigger: Click "Adicionar Beneficiário" button


Modal Design:


Overlay: rgba(Neutral Dark, 0.7) with backdrop blur
Modal card: Max-width 780px, centered
Background: White
Border-radius: 16dp
Padding: 48dp (32dp on mobile)
Close button: X icon (top-right, outside padding)
Modal Header:


Eyebrow (Caption): "NOVO BENEFICIÁRIO"
Headline (H3): "Adicionar Beneficiário"
Progress indicator: "Passo 1 de 3" (Body Small, Neutral Medium)
Step 1: Identificação


Form layout: Vertical stack, 16dp gap between fields


Field 1: Nome Completo


Label: "Nome Completo" (Body Small, Bold)
Input: Standard Input (height 56dp)
Placeholder: "Ex: Maria Silva Santos"
Validation: Min 3 characters, required
Error state: "Nome completo é obrigatório"
Field 2: CPF


Label: "CPF"
Input: Masked input (auto-formats as user types)
Placeholder: "000.000.000-00"
Validation:
Valid CPF format
Unique (cannot duplicate existing beneficiary)
Real-time validation: Checkmark appears when valid
Error: "CPF inválido" or "CPF já cadastrado"
Field 3: Email


Label: "Email"
Input: Email type (keyboard optimization on mobile)
Placeholder: "maria@email.com"
Validation: Email format
Helper text: "Usaremos para enviar convite de validação"
Field 4: Telefone/WhatsApp


Label: "Telefone (WhatsApp)"
Input: Masked phone input
Placeholder: "(11) 98765-4321"
Checkbox below (inline):
"✓ Este número tem WhatsApp" (checked by default)
Icon: WhatsApp logo (16dp)
Field 5: Parentesco


Label: "Relação com Você"
Dropdown (Select component)
Options:
Cônjuge
Filho(a)
Pai/Mãe
Irmão(ã)
Sobrinho(a)
Neto(a)
Amigo(a)
Instituição/ONG
Outro (opens text field)
Icon: Changes based on selection (heart for Cônjuge, etc.)
Navigation:


"Cancelar" Ghost Button (left)
"Próximo Passo" Primary Button (right)
Disabled until all required fields valid
Validation feedback: Border flashes Primary Deep Blue when all valid
Step 2: Distribuição


Progress updates: "Passo 2 de 3"


Headline: "Como [Nome] Receberá?"


Allocation Type Selection (Radio Cards):


Two large radio button cards, vertical stack


Percentual do Patrimônio
Card: 200dp height, full-width
Icon: Percentage symbol (48dp, Primary Deep Blue)
Title (H4): "Percentual do Patrimônio Líquido"
Description (Body Small): "Beneficiário recebe % de todos os bens após dívidas"
Selected state: Border 3dp Primary Deep Blue, background Secondary Blue Pale
Radio button: Large (24dp), top-right
Itens Específicos
Icon: List with checkmarks (48dp, Primary Gold)
Title: "Itens Específicos"
Description: "Beneficiário recebe bens específicos (ex: imóvel X, conta Y)"
Badge: "Avançado" (Warning Orange pill)
If Option 1 Selected (Percentual):


Slider component appears below (smooth height expansion, 280ms)
Label: "Percentual para [Nome]"
Slider:
Range: 0-100%
Current allocation shown dynamically
Track: Gradient from Neutral Light to Primary Deep Blue
Thumb: 44dp diameter, white with Primary Deep Blue border
Live calculation display:
Large number (H2): "35%" (updates as slider moves)
Helper text: "Patrimônio restante não alocado: 25%"
Warning (if over 100%): "⚠️ Você está alocando mais de 100% do total"
If Option 2 Selected (Itens Específicos):


Multi-select list appears
Layout: Checkboxes list of all user's assets
Grouped by category:
Imóveis (expandable accordion)
[ ] Apartamento Rua X, 123
[ ] Casa Rua Y, 456
Investimentos
[ ] Conta Banco ABC, Ag 0001
[ ] Ações Empresa XYZ
Ativos Digitais
[ ] Criptomoedas (Exchange Binance)
[ ] NFT Collection OpenSea
Each checkbox: 48dp height, full-width
Selected items: Background Secondary Blue Pale
Count shown: "3 itens selecionados"
Legítima Validation (Real-Time):


System tracks if user has herdeiros necessários (cônjuge, filhos, pais)
If so, calculates if they receive ≥50% total
Warning box (appears if <50%):
Background: Warning Orange with 15% opacity
Icon: Gavel (24dp, Warning Orange)
Text (Body Small):
"⚠️ Você está destinando menos de 50% para herdeiros necessários (legítima)"
"Isso pode ser contestado judicialmente. Recomendamos ajustar ou consultar advogado"
Link: "Entender Legítima" (opens explainer modal)
Step 3: Herdeiro Substituto (Optional)


Progress: "Passo 3 de 3"


Headline: "E Se [Nome] Falecer Antes de Você?"


Explanation (Body Small): "Configure o que acontece com a herança se o beneficiário não estiver vivo quando você falecer"


Options (Radio Buttons):


Distribuir Proporcionalmente
Radio card
Icon: People with arrows spreading (48dp)
Text: "Dividir entre outros beneficiários proporcionalmente"
Example: "Se Maria tinha 40%, esse valor será redistribuído entre João (40%) e Instituto (20%) proporcionalmente"
Designar Substituto Específico
Radio card
Icon: Person with arrow to another person (48dp)
Text: "Escolher substituto específico"
Dropdown appears (if selected):
"Escolher Substituto" dropdown
Options: List of other beneficiaries + "Adicionar Novo Substituto"
If "Adicionar Novo": Opens mini-form (name, relationship only, full data later)
Skip Option:


Link: "Pular (configurar depois)" (Ghost Button style)
Default: Option 1 selected if user skips
Final Review Section:


Summary card:
Background: Secondary Blue Pale
Border-radius: 8dp
Padding: 24dp
Title (H4): "Resumo"
Details:
"Nome: Maria Silva Santos"
"Relação: Filha"
"Receberá: 35% do patrimônio líquido"
"Substituto: Distribuição proporcional"
Submit Actions:


"Voltar" Ghost Button (left)
"Salvar Beneficiário" Premium/Gold Button (right)
On click: Closes modal, beneficiary added to list
Triggers invitation email (see State 4)
State 4: Invitation Email (Sent to Beneficiary)
Timing: Immediately after beneficiary saved


Email Design:


Subject: "[Nome do Cliente] Designou Você Como Beneficiário"
Preview text: "Valide seus dados para garantir que possamos contactá-lo quando necessário"
Email Body (HTML, Mobile-Responsive):


Header:
Logo: Testamento Digital
Headline (H3): "Você Foi Designado Como Beneficiário"
Main Content:
Icon: Gift/inheritance (64dp, Primary Gold)
Text (Body):
"Olá [Nome do Beneficiário],"
"[Nome do Cliente] designou você como beneficiário para receber parte de seu patrimônio através do Testamento Digital"
"Para garantir que possamos contactá-lo quando necessário, pedimos que valide seus dados"
What You'll Receive (if appropriate to disclose):
Text: "Você foi designado para receber: [35% do patrimônio] ou [Apartamento Rua X]"
Note: User can configure in settings whether to disclose allocation in invitation
Primary CTA:
Button: Primary Deep Blue style
Text: "Validar Meus Dados"
Link: Unique validation URL with token
Format: https://app.testamentodigital.com.br/beneficiary-validate?token=abc123xyz
What Happens Next:
Text (Body Small):
"Ao clicar, você será direcionado a confirmar:"
"• Seu endereço completo"
"• Documento de identidade (upload)"
"• Comprovante de endereço"
"Não há custo ou compromisso para você"
Privacy Reassurance:
Background: Info Blue with 10% opacity
Icon: Shield (20dp, Info Blue)
Text (Body Small): "Suas informações são confidenciais e serão usadas apenas para contactá-lo após falecimento de [Nome do Cliente]"
Footer:
"Não reconhece este email? Ignore-o com segurança"
Standard unsubscribe (cannot fully unsubscribe from critical notifications, but can opt-out of reminders)
State 5: Beneficiary Validation Page (Beneficiary-Facing)
URL: /beneficiary-validate?token=...


No Login Required: Token authenticates beneficiary


Page Layout:


Full-screen centered form
Background: Background Subtle
Max-width: 720px
Header:


Logo: Testamento Digital
Headline (H2): "Validação de Beneficiário"
Context (Body): "Você foi designado por [Nome do Cliente] como beneficiário"
Pre-Filled Information Card:


Background: Secondary Blue Pale
Padding: 24dp
Border-radius: 12dp
Icon: Info circle (24dp, Info Blue)
Text (Body Small): "Informações já fornecidas por [Cliente]:"
List:
Nome: [Pre-filled, read-only]
CPF: [Pre-filled, partially masked, read-only]
Email: [Pre-filled, editable if incorrect]
Telefone: [Pre-filled, editable]
Additional Information Form:


Section title (H4): "Complete Seus Dados"


Field 1: Endereço Completo


Label: "Endereço Completo"
Multi-line address form:
CEP (auto-fills other fields via API)
Rua (auto-filled)
Número
Complemento (optional)
Bairro (auto-filled)
Cidade (auto-filled)
Estado (auto-filled)
Helper: "Usaremos para enviar notificações físicas se necessário"
Field 2: Upload de Identidade


Label: "Documento de Identidade (RG, CNH ou Passaporte)"
Upload zone:
Drag & drop area
Background: Secondary Blue Pale
Border: 2dp dashed Primary Deep Blue
Icon: Upload cloud (48dp)
Text: "Arraste frente e verso ou clique para selecionar"
Accepted: JPG, PNG, PDF (max 5MB each)
Preview: Thumbnails appear after upload with remove button
Field 3: Comprovante de Endereço


Label: "Comprovante de Endereço (últimos 90 dias)"
Same upload zone style
Accepted documents: Conta de luz, água, telefone, extrato bancário
Helper: "Deve estar em seu nome ou de familiar no mesmo endereço"
Confirmation Checkbox (Required):


Large checkbox (32dp)
Text (Body):
"☑️ Confirmo ciência de que fui designado beneficiário e aceito receber comunicações relacionadas ao testamento de [Nome do Cliente]"
Submit Action:


Primary Button: "Enviar Validação"
Full-width
Disabled until:
Address complete
Both documents uploaded
Checkbox checked
Post-Submission:


Success screen:
Icon: Large checkmark (80dp, Success Green)
Headline (H3): "✓ Dados Validados!"
Text (Body): "Você será notificado quando necessário. Nenhuma ação adicional é necessária agora"
Info (Body Small): "[Nome do Cliente] foi informado que você completou a validação"
Email to Client (After Beneficiary Validates):


Subject: "Maria Silva Validou Dados Como Beneficiária"
Content:
"Boa notícia! Maria Silva completou a validação de dados"
"Status: ✓ Validado em [data]"
CTA: "Ver Beneficiários" (link to dashboard)
State 6: Resend Invitation (Pending Beneficiary)
Trigger: User clicks "Reenviar Convite" in actions menu (State 2)


Confirmation Modal:


Small modal, 420dp width
Headline (H4): "Reenviar Convite para [Nome]?"
Text (Body Small): "Enviaremos novo email e SMS com link de validação"
Actions:
"Cancelar" Ghost Button
"Reenviar" Primary Button
Post-Resend:


Toast notification (bottom-right):
Background: Success Green
Icon: Checkmark (20dp, white)
Text: "Convite reenviado para Maria Silva"
Dashboard updates:
"Convite enviado há 12 dias" → "Convite enviado há 2 minutos"
Limit: Maximum 5 resends per beneficiary (prevents spam)


If limit reached: "Limite de reenvios atingido. Contacte o beneficiário diretamente"
State 7: Remove Beneficiary Flow
Trigger: User clicks "Remover" in actions menu


Confirmation Modal (Critical Action):


Width: 520dp
Background: White
Border: 3dp Error Red (high-severity indicator)
Icon: Warning triangle (64dp, Error Red)
Content:


Headline (H4, Error Red): "Remover [Nome] Como Beneficiário?"
Text (Body):
"Esta ação exige re-assinatura do testamento"
"O beneficiário receberá email informando a remoção"
"A distribuição será recalculada automaticamente"
Impact Preview:
Background: Error Red with 10% opacity
Padding: 16dp
Text (Body Small):
"Distribuição atual: Maria (35%) | João (35%) | Instituto (30%)"
"→ Após remoção: João (50%) | Instituto (50%)"
Or: "→ Após remoção: 35% não alocado (você precisará redistribuir)"
Final Confirmation Input:


To prevent accidental deletion:
Label: "Digite 'REMOVER' para confirmar"
Input field: Text input
Validation: Exact match required (case-insensitive)
Submit button disabled until correct text entered
Actions:


"Cancelar" Ghost Button
"Sim, Remover Beneficiário" Destructive Button (Error Red)
Enabled only after validation
Post-Removal:


Beneficiary removed from list (animated slide-out, 300ms)
Email to removed beneficiary:
Subject: "Atualização sobre Testamento"
Tone: Neutral, respectful
Content: "Você foi removido da lista de beneficiários de [Nome do Cliente]. Nenhuma ação é necessária de sua parte"
Banner appears on dashboard:
"Beneficiário removido. Seu testamento requer re-assinatura para esta alteração ter validade jurídica"
CTA: "Re-Assinar Testamento" (links to Feature 7.2 flow)
State 8: Alteration Triggers New Version
Any Change to Beneficiaries:


Add new: Creates version N+1
Remove existing: Creates version N+1
Edit allocation percentage: Creates version N+1 if change >5%
Version Creation Process:


System generates new draft version
Status: "Rascunho - Aguardando Assinatura"
User sees banner: "Você tem alterações não assinadas. Re-assine para validar"
Re-Signature Decision Tree:


Minor changes (percentage adjustment <20%, add beneficiary):
Re-assinatura digital apenas (Feature 7.2)
No need for new video validation
Substantial changes (remove beneficiary, change >20%):
System recommends new video validation
User can opt for digital-only (but lower legal protection)

Feature 6.1: Notificação Automática aos Beneficiários
Screen: Post-Death Notification System
State 1: Automated Notification Trigger
Prerequisite: Feature 5.3 Layer 4 completed - Advogado approved opening


Immediate Backend Actions (Within 2 Hours):


System retrieves all validated beneficiaries from database
Generates unique access tokens for each beneficiary
Prepares personalized notification content per beneficiary
Queues emails and SMS for simultaneous delivery
Delivery Sequence:


Email: Sent first (highest information density)
SMS: Sent 2 minutes after email (backup channel)
WhatsApp: Sent 5 minutes after SMS (if phone registered with WhatsApp)
Phone call: Manual, if beneficiary doesn't respond in 48h
State 2: Email Notification (Empathetic Design)
Email Design Principles:


Tone: Empathetic, professional, clear
Color palette: Muted (not bright or celebratory)
Layout: Clean, readable, mobile-optimized
Email Structure:


Subject Line: "Mensagem Importante sobre [Nome do Falecido]"


Neutral, not shocking
No mention of "herança" or "testamento" in subject (reduces phishing risk perception)
Header Section:


Logo: Testamento Digital (grayscale or muted color)
Background: Very subtle gray (#FAFBFC)
No hero image (respectful)
Opening Section:


Icon: Simple memorial icon (candle or flower, 48dp, Neutral Dark)
Text (Body, careful phrasing):
 Prezado(a) [Nome do Beneficiário],É com pesar que informamos o falecimento de [Nome Completo do Falecido], ocorrido em [data conforme certidão de óbito].Você foi designado(a) como beneficiário(a) em seu testamento digital, registrado e validado legalmente através de nossa plataforma.


Font: Crimson Pro for formality, or Inter for readability
Line height: 1.7 (very readable)
Your Rights Section:


Background: Secondary Blue Pale (subtle visual separation)


Border-radius: 8dp


Padding: 24dp


Icon: Document with seal (32dp, Primary Deep Blue)


If Percentage Allocation:


Text (Body):
 Seus Direitos:Você tem direito a [X]% do patrimônio líquido de [Nome].Valor estimado*: R$ [XXX.XXX] (sujeito a inventário e quitação de dívidas)


Footnote (Body Micro): "*Valor aproximado baseado em último inventário declarado. Valor final depende de inventário oficial"
If Specific Items:


Text:
 Você receberá os seguintes bens:• Apartamento na Rua [Endereço], matrícula [XXXXX]• Conta bancária Banco [XXX], Ag [XXXX], C/C [XXXXX-X]• [Outros itens]


Note: "Transferência oficial dependerá de conclusão de inventário"
Next Steps Section:


Headline (H4): "Próximos Passos"
Numbered list (Body Small):
 1. Acesse seu portal seguro clicando no botão abaixo2. Revise seus direitos e documentação disponível3. Agende consultoria com advogado executor (incluída no serviço)4. Decida sobre tipo de inventário (judicial ou extrajudicial)


Primary CTA:


Button: Primary Deep Blue (not celebratory gold)
Text: "Acessar Portal do Beneficiário"
Link: Unique token URL (valid for 7 days initially)
Format: https://app.testamentodigital.com.br/heranca/[unique-token]
Icon: Lock (16dp) to emphasize security
Access Validity Notice:


Text (Body Small, Neutral Medium):
"Este link é válido por 7 dias. Após esse período, você pode solicitar novo acesso através do suporte"
"Por segurança, o link é de uso único e pessoal"
Support Section:


Background: Info Blue with 10% opacity
Icon: Headset (24dp, Info Blue)
Text (Body Small):
 Dúvidas ou Suporte:Em caso de dúvidas, nosso advogado executor [Nome], OAB/SP [XXXXX], está disponível em:📧 Email: [email]📞 Telefone: [phone] (seg-sex, 9h-18h)


Footer Section:


Legal notice (Body Micro):
"Esta notificação é enviada com base em testamento validado e registrado legalmente. Protocolo: [ID-do-Testamento]"
"Testamento Digital | [Endereço] | CNPJ [XX.XXX.XXX/XXXX-XX]"
Privacy: "Seus dados são tratados conforme LGPD. Política de Privacidade"
State 3: SMS Notification (Concise Backup)
Message Structure (Max 160 characters):

 Testamento Digital: Lamentamos informar o falecimento de [Nome]. 
Você é beneficiário. Acesse: [short-link]. Válido 7 dias.


Short Link:


URL shortener: Custom domain or bit.ly
Example: tdig.br/h/abc123
Redirects to same portal as email link
Tracking: System logs if SMS link was clicked (useful for follow-up)
Delivery Timing:


Sent 2 minutes after email (gives user time to check email first)
If email bounces: SMS becomes primary notification
State 4: WhatsApp Notification (If Registered)
Message Template (WhatsApp Business API):


Similar structure to SMS but can be slightly longer
Includes: Name of deceased, your status as beneficiary, link, validity
Advantage: Read receipts help confirm delivery
Follow-Up Capability:


If beneficiary responds to WhatsApp: Can connect to human support agent
Automated response: "Obrigado por confirmar. Um advogado entrará em contato em até 24h"
State 5: Edge Case - Email/Phone Invalid (Bounce)
Detection:


Email bounce-back received within hours
SMS delivery failure status returned
Automatic Fallback Actions:


Try Alternative Channels:
If email bounced: SMS becomes primary
If SMS failed: Try WhatsApp (if registered)
If all digital channels fail: Flag for manual intervention
Manual Outreach (48h After Detection):
Compliance team attempts:
Search social media (LinkedIn, Facebook) for beneficiary
Contact other beneficiaries to ask if they know how to reach this person
Check if beneficiary has relative mentioned in testament (secondary contact)
Last Resort (7 Days After All Failures):
Physical letter sent via registered mail (AR - Aviso de Recebimento)
Content: Similar to email, formal letter format
Address: From validation data (Feature 5.4 State 5)
Tracking: Correios AR provides proof of delivery
If All Methods Fail (30 Days):


Beneficiary is still entitled to inheritance (legal right)
Publication of edital in official gazette (Diário Oficial)
Legal requirement: Public notice for 30 days
Costly but ensures due diligence
Content: "Convoca-se [Nome], CPF [XXX], beneficiário no testamento de [Falecido], a comparecer em [endereço] para receber informações sobre herança"
State 6: Multiple Beneficiaries Coordination
Scenario: Testament has 5+ beneficiaries


Group Meeting Suggestion (In Email):


Text added to email notification:
 Reunião Coletiva:Agendamos reunião virtual com todos os beneficiários para esclarecer o processo de inventário.Data: [data sugerida, 7 dias após óbito]Horário: [14:00-15:30]Link: [Google Meet/Zoom]Confirme presença: [Botão "Confirmarei Presença"]


Meeting Agenda:


Advogado executor presents:
Overview of testament and distribution
Inventário process (judicial vs extrajudicial)
Timeline expectations (3-12 months)
Required documents from each beneficiary
Q&A session
Recording:


Meeting recorded (with consent)
Recording made available to all beneficiaries afterward
Purpose: Transparency, those who couldn't attend can watch later
State 7: Notification to Non-Beneficiaries (Transparency)
Scenario: Close family member (e.g., child) is NOT a beneficiary, but might expect to be


Ethical Consideration:


Platform does not proactively notify non-beneficiaries
BUT: If non-beneficiary contacts platform claiming rights:
Support validates identity
Informs: "According to our records, you are not listed as beneficiary"
Explains: "You have the legal right to contest. Here's how [process explanation]"
Offers: "Would you like contact info of the advogado executor to discuss?"
Avoiding Conflicts:


During client onboarding (Feature 3.1), recommend client inform family of decisions
FAQ educates: "Should I tell my family about my testament?" → "Yes, transparency prevents conflicts"

Feature 6.2: Portal do Beneficiário (Acesso Seguro)
Screen: Beneficiary Portal Interface
State 1: Login/Authentication Page
URL: /heranca/[unique-token]


First-Time Access:


Page Layout:


Full-screen centered content
Background: Subtle gradient from Background Pure to Secondary Blue Pale
Max-width: 520px
Header:


Logo: Testamento Digital
Headline (H3): "Portal do Beneficiário"
Subheadline (Body): "Acesso seguro às informações do testamento de [Nome do Falecido]"
Two-Factor Authentication Flow:


Step 1: CPF Confirmation


Label (H4): "Confirme Sua Identidade"
Text (Body Small): "Para sua segurança, confirme os últimos 4 dígitos do seu CPF"
Input: 4-digit masked input
Placeholder: "● ● ● ●"
Type: Number (numeric keyboard on mobile)
Max length: 4
Validation: Must match CPF on file
Error state: "CPF não confere. Verifique e tente novamente (2 tentativas restantes)"
Lockout: After 3 failed attempts, account locked for 1 hour
Step 2: SMS Code Verification


Triggered after CPF confirmed
Text: "Código enviado para (11) 9876-●●●●"
Input: 6-digit code
Auto-focuses
Auto-submits when 6 digits entered (no button click needed)
Countdown timer: "Código válido por 5:00" (counts down)
Resend option: "Não recebeu? Reenviar código" (enabled after 60 seconds)
Reassurance Elements:


SSL badge: "Conexão Segura" icon (small padlock, bottom-right)
Privacy notice (Body Micro): "Seus dados são protegidos por criptografia AES-256"
Successful Authentication:


Brief loading screen: "Carregando portal..."
Transition: Fade out auth page, fade in dashboard (400ms)
State 2: Beneficiary Dashboard (Main Portal)
Layout:


Header: Sticky navigation bar
Content: 3-column grid on desktop (stacked on mobile)
Background: Background Subtle
Header Navigation:


Logo (left): Testamento Digital
Title (center): "Testamento de [Nome do Falecido]"
User menu (right):
Avatar with initials
Dropdown:
"Perfil"
"Ajuda"
"Sair"
Main Dashboard Cards:


Card 1: Informações do Testamento (Full-width, top position)


Background: White


Border-radius: 16dp


Padding: 32dp


Icon: Document with seal (48dp, Primary Deep Blue)


Header Section:


Eyebrow (Caption): "TESTAMENTO VALIDADO"
Title (H3): "Testamento de [Nome Completo do Falecido]"
Metadata (Body Small, Neutral Medium):
Data do óbito: [XX/XX/XXXX]
Data de abertura: [XX/XX/XXXX]
Testamento criado em: [XX/XX/XXXX]
Validation Badges (Horizontal row):


"✓ Testamento Particular Qualificado" (Success Green pill)
"✓ Assinatura ICP-Brasil" (Success Green pill)
"✓ Registro Blockchain" (Accent Emerald pill)
Authenticity Verification Section:


Button: "Ver Certidão de Autenticidade" (Secondary Button)
On click: Downloads PDF (advogado's signed declaration + blockchain cert)
Link: "🔗 Verificar no Blockchain" (opens Polygonscan in new tab)
Card 2: Seus Direitos (Left column, prominent)


Background: Gradient from White to very subtle Primary Gold tint


Border: 2dp Primary Gold


Padding: 32dp


Header:


Icon: Gift/inheritance (48dp, Primary Gold)
Title (H3): "Seus Direitos Sucessórios"
Allocation Display (Dynamic based on type):


If Percentage:


Large number (H1 size, Primary Gold): "30%"
Description (Body): "do patrimônio líquido"
Estimated value card:
Background: Primary Gold with 10% opacity
Padding: 16dp
Border-radius: 8dp
Text (Body, Bold): "Valor Estimado: R$ 450.000*"
Footnote (Body Micro): "*Sujeito a inventário, impostos e quitação de dívidas"
Breakdown link: "Ver Composição do Patrimônio" (expands list below)
If Specific Items:


List (visual cards, each item):
Icon: Appropriate for asset type (home, bank, crypto)
Item details:
"🏠 Apartamento Rua Aurora, 123"
" Matrícula: XXXXX | Metragem: 85m²"
Value estimate (if available): "Valor estimado: R$ 280.000"
Total items: "3 bens específicos"
Tax Information (Expandable):


Link: "Impostos e Custos" (chevron down)
Expands to show:
ITCMD (Imposto estadual): "4% em SP = R$ 18.000 estimado"
Custos de inventário: "R$ 3.000 - R$ 8.000 (depende do tipo)"
Total líquido estimado: "R$ 424.000"
Link: "Calculadora de ITCMD" (tool to simulate different scenarios)
Card 3: Próximos Passos (Right column)


Background: White


Padding: 32dp


Icon: Checklist (48dp, Info Blue)


Title (H4): "Próximos Passos"


Interactive Checklist:


Each item: 48dp height card


Checkbox: 24dp (not clickable, just visual status)


Tasks:


Obter Segunda Via de Certidão de Óbito
Status: [ ] Não iniciado
Description: "Obtenha no cartório onde foi registrado o óbito"
Action: "Onde Obter?" (link to guide)
Agendar Consultoria com Advogado
Status: [ ] Pendente
Button inline: "Agendar Agora" (opens calendar, like Feature 2.1)
Shows: "Próximo slot disponível: [data]"
Reunir Documentos Pessoais
Status: [ ] Pendente
Documents needed: RG, CPF, Comprovante de endereço, Certidão de nascimento/casamento
Link: "Lista Completa de Documentos" (PDF download)
Decidir Tipo de Inventário
Status: [ ] Pendente
Description: "Judicial ou extrajudicial? Saiba mais"
Link: "Comparar Opções" (opens modal with comparison table)
Timeline Estimate:


Background: Info Blue with 10% opacity
Icon: Calendar (20dp, Info Blue)
Text (Body Small): "Processo típico: 3-6 meses para inventário extrajudicial, 12-24 meses para judicial"
Card 4: Documentos Disponíveis (Below Card 1, full-width)


Background: White


Padding: 32dp


Title (H4): "Documentação do Testamento"


Document List (Each as downloadable card):


Testamento Completo (PDF)
Icon: PDF (32dp, Error Red)
Details: "Testamento_[Nome]_Completo.pdf | 847 KB"
Description: "Documento completo com inventário e distribuição"
Button: "Baixar" (Secondary Button)
Certidão de Autenticidade
Icon: Certificate (32dp, Primary Deep Blue)
Details: "Certificado_Advogado_OAB.pdf | 210 KB"
Description: "Declaração de validade jurídica pelo advogado executor"
Button: "Baixar"
Registro Blockchain
Icon: Chain (32dp, Accent Emerald)
Details: "Certificado_Blockchain.pdf | 124 KB"
Description: "Prova de registro público e imutável"
Button: "Baixar"
Guia do Beneficiário (Educational)
Icon: Book (32dp, Info Blue)
Details: "Guia_Processo_Sucessorio.pdf | 1.2 MB"
Description: "Passo a passo completo do processo de inventário"
Button: "Baixar"
State 3: Digital Assets Access (Special Section)
Trigger: User clicks "Ativos Digitais" in navigation or sees in dashboard


Page Layout:


Warning banner at top (persistent)
Content cards with sensitive data reveals
Warning Banner:


Background: Warning Orange with 15% opacity
Border: 2dp Warning Orange
Icon: Warning triangle (32dp, Warning Orange)
Text (Body, Bold):
"⚠️ Conteúdo Sensível - Aberto Apenas Após Óbito Confirmado"
"As informações abaixo contêm dados sensíveis. Trate com máximo cuidado"
Checkbox: "Li e entendo os riscos" (must check to view content below)
Additional 2FA Required:


Even though user already logged in, digital assets require re-authentication
SMS code sent again: "Por segurança adicional, confirme com código SMS"
After confirmed: Content becomes visible
Digital Assets Categories (Accordion Structure):


Each category is collapsible card


Only opens on user click (no auto-expand)


Category 1: Senhas de Contas (Emails, Redes Sociais)


Card Design:
Background: Secondary Blue Pale
Border-left: 4dp Primary Deep Blue
Padding: 24dp
Item Structure (Example: Gmail Account):
Header: "Gmail - [email@gmail.com]"
Instruction text (Body Small):
"Decisão do falecido: Memorializar conta"
"Instruções: Seguir processo Google para conta memorializada"
Link: "📚 Tutorial: Como Memorializar Conta Google"
Reveal Password Section (If needed for other accounts):
Button: "Revelar Senha do Email" (Error Red, cautionary)
On click: Modal opens with countdown
Modal content:
Password shown in monospace font: P@ssw0rd123!
Countdown: "Senha visível por 30 segundos: 29... 28..."
After 30s: Password auto-hides again
Cannot copy/export (forces manual typing - higher security)
Recommendation text: "Após acessar, recomendamos alterar senha e transferir propriedade para sua conta pessoal"
Category 2: Criptomoedas (Critical)


Highest Security Section:


Background: Gradient from White to Accent Purple (5% opacity)
Border: 3dp Accent Purple
Icon: Bitcoin symbol (48dp, Accent Purple)
Critical Warning (Always visible):


Background: Error Red with 15% opacity
Text (Body Small, Bold):
"⚠️ ATENÇÃO: Seed phrases são irreversíveis"
"Qualquer erro resulta em perda total dos fundos"
"Se não tem conhecimento técnico, agende consultoria com especialista (inclusa)"
Exchange Path (If crypto on exchange):


Instructions card:
"Exchange: Binance"
"Email cadastrado: [revealed]"
"Instruções de recuperação:"
Step-by-step:
"Contacte suporte da Binance via [link oficial]"
"Apresente certidão de óbito + este testamento + sua identidade"
"Siga processo de recuperação de conta falecido"
Link: "📚 Guia Completo: Recuperação Binance Após Óbito"
Support CTA: "Preciso de Ajuda" (schedules call with crypto specialist, 1h free)
Wallet Path (Self-custody):


Even more critical
Instructions card:
"Tipo: Metamask (carteira própria)"
"Saldo aproximado: R$ 87.000 (0.5 BTC + 2 ETH)"
Seed Phrase Location Instructions (NOT seed itself):
Text (Body Small, careful wording):
 Localização da Seed Phrase:[Instruções deixadas pelo falecido]Ex: "A seed phrase de 12 palavras está escrita em papel dentro de envelope lacrado, guardado no cofre do Banco Santander, agência 0123,caixa de segurança #456.Para acessar: Contactar [nome de pessoa de confiança], telefone [XXX],que tem cópia da chave do cofre."


Button: "Revelar Instruções Completas" (same 30-second modal pattern)
Video tutorial: "Como Importar Seed Phrase no Metamask" (embedded YouTube)
Mandatory Specialist Consultation:
Text: "Devido ao valor, recomendamos OBRIGATORIAMENTE agendar consultoria antes de tentar acesso"
Primary Button: "Agendar Consultoria Crypto (Gratuita)"
Consultant: "Especialista em criptomoedas e custódia"
Security Logs:


At bottom of crypto section
Text (Body Micro): "Log de Acesso:"
Table:
"Seed phrase revelada em [data/hora] por você (IP: 177.xxx)"
Purpose: Transparency if multiple beneficiaries have crypto access
Category 3: NFTs, Domínios, Cloud Storage


Similar structure to above categories
Each with specific instructions
Links to provider-specific recovery guides
State 4: Edge Case - Beneficiary Loses Access (Forgot Password/Lost Phone)
Recovery Process:


User Action:


Clicks "Esqueci Minha Senha" or "Perdi Acesso"
Redirected to recovery page
Identity Verification (Higher Bar):


Cannot be as simple as "email reset link" (too sensitive)
Multi-step verification:
Full CPF entry (not just last 4 digits)
Answer security question (set during first login): "Nome do falecido?"
Photo of identity document upload (selfie + document)
Wait for manual verification by compliance (24-48h)
New Token Issued:


After verification approved: New access token sent via email/SMS
Old token invalidated (security measure)
User can access portal again with new token
State 5: Portal Expiration & Reactivation
Token Expiration:


Initial token: 7 days validity
After 7 days: Link becomes invalid
User sees: "Seu link expirou. Solicite novo acesso"
Request New Access:


Form: Name + CPF + Email
Verification: System validates matches beneficiary on file
New token sent within 15 minutes (automated)
Security note: "Por segurança, links expiram. Solicite sempre novo acesso"
Permanent Access (After First Login):


After beneficiary sets password (optional, on first login)
Can login directly with email + password (no token needed)
2FA still required (SMS code)

Feature 6.3: Abertura do Envelope Digital (Reconstituição de Chave)
Screen: Technical Decryption Process (Backend + Admin Panel)
State 1: Automated Key Reconstruction (Post-Layer 4 Approval)
Trigger: Advogado clicks "Aprovar Abertura" (Feature 5.3 State 4)


Backend Process (Transparent Logging):


Step 1: Retrieve Key Fragment 1 (AWS KMS)


System authenticates to AWS KMS with service credentials
Requests: keyFragment1 = KMS.decrypt(encryptedFragment1)
Response: Fragment 1 data (binary, 32 bytes)
Logged: "Fragment 1 retrieved from AWS KMS at [timestamp]"
Step 2: Retrieve Key Fragment 3 (Automated Trigger System)


Fragment 3 automatically released when death validated
Located: Internal secure database, encrypted at rest
Decryption: keyFragment3 = decrypt(encryptedFragment3, systemMasterKey)
Logged: "Fragment 3 retrieved from internal vault at [timestamp]"
Step 3: Combine Fragments (Shamir Reconstruction)


Algorithm: Shamir Secret Sharing library (threshold k=2, total n=3)
Combination: partialMasterKey = shamir.combine([fragment1, fragment3])
Output: Partial reconstruction (2 of 3 fragments)
Status: "Partial key reconstructed - awaiting Fragment 2 (Advogado approval)"
Logged: "Fragments 1 and 3 combined successfully"
Status Display (Admin Dashboard for Tech Team):


Real-time status panel:
"🟢 Fragment 1: Retrieved (AWS KMS)"
"🟢 Fragment 3: Retrieved (Auto-trigger)"
"🟡 Fragment 2: Awaiting advogado release"
State 2: Advogado Master Releases Fragment 2
Advogado Panel (Secure Interface):


After clicking "Aprovar Abertura" in Feature 5.3 State 4
Additional authentication required (even if already logged in)
Multi-Factor Authentication (Extra Layer):


Step 1: Password Re-Entry
Prompt: "Digite sua senha para confirmar"
Input: Password field
Validation: Must match advogado's account password
Step 2: 2FA Code
SMS sent to advogado's registered phone
Prompt: "Digite código de 6 dígitos enviado para (11) 9XXX-XXXX"
Timeout: 5 minutes
Step 3: Biometric (If Available on Device):
FaceID/TouchID prompt (iOS)
Fingerprint prompt (Android)
Fallback: Skip if biometric not available
Final Confirmation Screen:


Background: Error Red with 10% opacity (indicates critical action)
Icon: Key with warning triangle (64dp, Error Red)
Text (H4): "Liberar Chave Mestra - Ação Irreversível"
Details:
Cliente: [Nome], CPF [XXX]
Caso: VAL-2025-001234
Data do óbito: [XX/XX/XXXX]
Warning (Body, Bold):
"Ao liberar esta chave, o testamento será descriptografado e acessível aos beneficiários"
"Esta ação não pode ser desfeita"
"Certifique-se de que todos os checklist items foram validados"
Final Action Button:
Destructive Button style (Error Red)
Text: "Liberar Chave e Abrir Testamento"
Icon: Unlock (20dp)
Disabled until all authentications passed
Post-Release:


Loading screen: "Liberando chave..."
Spinner animation: 3-5 seconds
Backend retrieves Fragment 2 from advogado's secure vault
Success confirmation: "✓ Chave liberada com sucesso"
State 3: Master Key Reconstruction & Document Decryption
Backend Process (Immediate After Fragment 2 Release):


Combine All Three Fragments:


masterKey = shamir.combine([fragment1, fragment2, fragment3])
Validation: Check if reconstruction successful (key integrity)
If successful: "Master key fully reconstructed"
Logged: "All 3 fragments combined | Master key reconstructed at [timestamp]"
Decrypt Testament Document:


Retrieve encrypted PDF from cold storage (AWS S3 Glacier)
Algorithm: AES-256 decryption
Process: decryptedPDF = AES256.decrypt(encryptedPDF, masterKey)
Output: Plain-text PDF file
Logged: "Testament decrypted successfully | File size: 847 KB"
Integrity Verification (Critical):


Calculate hash of decrypted PDF: actualHash = SHA256(decryptedPDF)
Retrieve original hash from blockchain: expectedHash = blockchain.getHash(testamentID)
Compare: if (actualHash === expectedHash)
✓ Match: Document is authentic, unaltered
✗ Mismatch: 🚨 CRITICAL ERROR - Document compromised
Logged: "Hash verification: [PASS/FAIL] | Expected: [hash] | Actual: [hash]"
If Integrity Check PASSES:


System proceeds to State 4 (Generate Report)
Decrypted PDF moved to beneficiary-accessible storage
If Integrity Check FAILS:


🚨 CRITICAL SECURITY INCIDENT
Immediate actions:
Abort opening process
Lock all beneficiary access
Alert compliance team (Slack + email + SMS)
Notify advogado: "Inconsistência detectada - abertura bloqueada"
Investigation initiated:
Forensic analysis: When was file last modified?
Was encryption compromised?
Malicious activity?
Resolution: Manual review by CTO + compliance before proceeding
State 4: Opening Report Generation (Audit Document)
Automated Report Creation:


PDF generated with complete audit trail
Template: Professional legal document
Report Structure ("Relatório de Abertura do Testamento"):


Header:


Title (H2, Crimson Pro): "RELATÓRIO DE ABERTURA DO TESTAMENTO"
Logo: Testamento Digital
Report ID: REL-2025-001234
Generated: [Date/Time]
Section 1: Testament Information


Client: [Nome Completo], CPF [XXX.XXX.XXX-XX]
Testament ID: TEST-2025-001234
Creation date: [XX/XX/XXXX]
Version: v3 (if updated)
Section 2: Opening Authorization


Authorized by: Dr. [Nome do Advogado], OAB/SP [XXXXX]
Date/Time of authorization: [XX/XX/XXXX às HH:MM:SS GMT-3]
IP address of authorization: [XXX.XXX.XXX.XXX]
Authentication methods used: Password + 2FA + Biometric
Section 3: Technical Process


Key reconstruction process:
"Fragment 1 retrieved from AWS KMS at [timestamp]"
"Fragment 2 released by advogado at [timestamp]"
"Fragment 3 retrieved from system vault at [timestamp]"
"Master key successfully reconstructed at [timestamp]"
Decryption process:
"Testament document decrypted with AES-256 at [timestamp]"
"File size: 847 KB"
"Decryption duration: 1.23 seconds"
Integrity verification:
"Hash SHA-256 do documento aberto: [64-character hash]"
"Hash registrado em blockchain: [64-character hash]"
"Validação: ✓ Hashes conferem - Documento autêntico"
"Blockchain transaction: [Polygonscan link]"
Section 4: Legal Declaration


Text (formal language):

 Declaro, para os devidos fins legais, que o testamento de [Nome Completo do Cliente],
CPF [XXX.XXX.XXX-XX], foi aberto em [data] às [hora], conforme processo técnico e 
jurídico descrito neste relatório.

A abertura foi autorizada após validação em 4 camadas (API de óbito, tentativa de 
contato emergencial, verificação cruzada, e análise jurídica com certidão de óbito).

O documento aberto foi verificado contra registro blockchain público, confirmando 
sua integridade e autenticidade.

Este relatório serve como prova técnica e jurídica do processo de abertura do testamento.


Signature:


Digital signature: Dr. [Nome], OAB/SP [XXXXX]
Date/Time: [XX/XX/XXXX HH:MM]
ICP-Brasil certificate: [Certificate ID]
Section 5: Attachments References


List of documents attached to process:
Certidão de óbito (Anexo A)
Declaração de validação do advogado (Anexo B)
Certificado de registro blockchain (Anexo C)
Screenshots of validation checklist (Anexo D)
Report Distribution:


Stored in case file (permanent record)
Accessible to:
Advogado executor
Compliance team
Beneficiaries (via portal)
Can be used as legal evidence if testament contested
State 5: Advogado Backup Process (Emergency)
Scenario: Primary advogado unavailable (vacation, medical emergency)


Escalation Process:


Fragment 2 has backup copy in escrow (Feature 4.3)
Backup advogado + Director jurídico BOTH must approve
Dual authentication required:
Backup advogado: Password + 2FA + Biometric
Director jurídico: Same authentication
Both approvals logged separately
Higher Scrutiny:


System flags: "Exception process used - Backup advogado release"
Post-facto review: Compliance reviews case within 7 days
Ensures backup process not abused
State 6: Transparency for Beneficiaries (Post-Opening)
In Beneficiary Portal (Feature 6.2):


New card appears: "Processo de Abertura"
Content:
Text: "Testamento aberto em [data] às [hora]"
Authorized by: "Dr. [Nome], OAB/SP [XXXXX]"
CTA: "Ver Relatório de Abertura" (downloads PDF)
Link: "🔗 Verificar Integridade no Blockchain" (opens Polygonscan)
What Beneficiaries See:


Timestamp of opening (proves timeliness)
Who authorized (advogado credentials)
Hash verification (technical proof of authenticity)
Full audit trail (if they want to review)
Purpose:


Transparency builds trust
Legal defensibility if anyone challenges process
Demonstrates due diligence

Feature 6.4: Distribuição de Ativos Digitais (Cofre de Instruções)
Screen: Secure Digital Assets Vault
State 1: Access Control & Security Layer
Location: Within Beneficiary Portal (Feature 6.2), dedicated section


Additional Authentication Required:


Even though beneficiary already logged into portal
Accessing digital assets requires re-authentication
Rationale: Highest sensitivity content (passwords, seed phrases)
Re-Authentication Flow:


Modal appears: "Conteúdo Sensível - Autenticação Adicional"
SMS code sent to beneficiary's registered phone
Input: 6-digit code
Timeout: 5 minutes
Attempts: 3 max, then 30-minute lockout
Security Warnings (Persistent Banner):


Background: Error Red with 15% opacity
Border-top: 4dp Error Red
Icon: Shield with warning triangle (32dp, Error Red)
Text (Body, Bold):
"🔒 Conteúdo Sensível - Aberto Apenas Após Óbito Confirmado"
"As informações abaixo contêm dados altamente sensíveis (senhas, chaves privadas)"
"NUNCA compartilhe essas informações com terceiros não autorizados"
"Trate com máximo sigilo e segurança"
State 2: Category 1 - Account Passwords (Email, Social Media)
Section Layout:


Accordion-style cards (collapsed by default)
Each account = separate card
Visual hierarchy: Most critical accounts first (email, banking)
Individual Account Card Design:


Background: White
Border: 2dp Neutral Light
Border-radius: 12dp
Padding: 24dp
Hover: Border becomes Primary Deep Blue
Card Header (Always Visible):


Icon: Service logo (32dp) - Gmail, Facebook, etc.
Account name (H4): "Gmail - joao@gmail.com"
Status badge: "Decisão: Memorializar" or "Transferir Acesso" or "Deletar"
Expand/collapse chevron (right-aligned)
Expanded Content (On Click):


Decision Section:
Text (Body Small, Bold): "Decisão do falecido:"
Badge with icon:
Memorializar: "🕯️ Memorializar Conta" (Info Blue pill)
Transferir: "🔑 Transferir Acesso" (Primary Gold pill)
Deletar: "🗑️ Deletar Permanentemente" (Error Red pill)
Instructions Section:
Background: Secondary Blue Pale
Border-radius: 8dp
Padding: 16dp
Text (Body Small):
Custom instructions from deceased
Example: "Contactar suporte do Gmail com certidão de óbito. Solicitar memorialização conforme processo Google. Adicionar Maria como gerente memorial"
Password Reveal Section (If Applicable):
Warning text (Body Small, Warning Orange):
"⚠️ A senha abaixo é sensível. Será visível por apenas 30 segundos"
Button: "Revelar Senha" (Error Red, indicates caution)
Disabled initially, requires checkbox confirmation:
Checkbox: "Estou em ambiente seguro e sem terceiros presentes"
On click:
Modal overlay appears (cannot dismiss until timeout)
Background: rgba(Neutral Dark, 0.95) - very opaque
Password displayed:
Font: JetBrains Mono (monospace), 20px
Text: White on dark background for high contrast
Format: P@ssw0rd123!ExampleSenha
Countdown timer (prominent):
Large display (H2 size): "30... 29... 28..."
Color: Warning Orange, pulses every second
Copy button: DISABLED (forces manual typing for security)
After 30 seconds: Modal auto-closes, password hidden
Re-reveal: Can click "Revelar Senha" again (logged)
Action Guides Section:
Links to step-by-step tutorials:
"📚 Tutorial: Como Memorializar Conta Google"
"📚 Tutorial: Transferir Propriedade de Email"
Each link opens in new tab (PDF or web guide)
Recommendation (Body Small): "Após acessar, recomendamos alterar senha e transferir propriedade para sua conta pessoal"
Account Examples (Each as Separate Card):


Gmail
Decision: Memorializar
Instructions: "Seguir processo Google Inactive Account Manager. Designar Maria como contato herdeiro"
Tutorial link: Google's official process
Facebook
Decision: Memorializar
Instructions: "Conta vira memorial. Maria é contato herdeiro já configurado pelo falecido"
Note: "Facebook suporta memorialização oficial - processo simplificado"
LinkedIn
Decision: Deletar
Instructions: "Contactar suporte LinkedIn com certidão. Solicitar remoção permanente"
Password: [Reveal button]
State 3: Category 2 - Criptomoedas (Highest Security)
Section Header:


Background: Gradient from White to Accent Purple (10% opacity)
Border: 3dp Accent Purple
Padding: 32dp
Icon: Bitcoin + Ethereum symbols (48dp, Accent Purple)
Title (H3): "Criptomoedas e Ativos Blockchain"
Critical Warnings Banner (Always Visible, Non-Dismissible):


Background: Error Red with 20% opacity
Border: 3dp Error Red
Padding: 20dp
Icon: Warning triangle with exclamation (48dp, Error Red)
Text (Body, Bold):
"⚠️ ATENÇÃO CRÍTICA: Seed Phrases São Irreversíveis"
"• Um único erro ao digitar uma palavra = Perda total dos fundos (sem recuperação)"
"• Nunca compartilhe seed phrases com terceiros"
"• Se não tem conhecimento técnico, PARE e agende consultoria"
CTA Button: "Agendar Consultoria Crypto Gratuita" (Primary Button, prominent)
Two Paths Based on Storage Type:


Path A: Exchange (Simpler):


Card background: Success Green with 10% opacity (less risky)


Icon: Building/bank (48dp, Success Green)


Title (H4): "Criptomoedas em Exchange: Binance"


Account Details:


Exchange name: "Binance"
Email cadastrado: [revealed immediately, no countdown]
Saldo aproximado: "R$ 87.000 (≈ 0.5 BTC + 2 ETH)"
Note: "Valor aproximado, sujeito a variação de mercado"
Recovery Instructions:


Numbered steps (Body Small):
"Acesse suporte oficial da Binance: [link direto]"
"Abra ticket categoria: 'Conta de Usuário Falecido'"
"Anexe documentos: Certidão de óbito + Este testamento + Sua identidade"
"Aguarde validação (prazo típico: 15-30 dias úteis)"
"Siga instruções do suporte para transferência ou retirada"
Support Resources:


Link: "📚 Guia Completo: Recuperação Binance Após Óbito" (PDF, detailed walkthrough)
Video: "🎥 Passo a Passo em Vídeo" (embedded YouTube, 10min)
CTA: "Preciso de Ajuda" (schedules 1:1 call with crypto specialist, 1h included free)
Timeline Expectation:


Background: Info Blue with 10% opacity
Icon: Calendar (20dp)
Text (Body Small): "Processo típico de recuperação via exchange: 15-45 dias"
Path B: Carteira Própria (Self-Custody) - COMPLEX:


Card background: Warning Orange with 10% opacity (high risk)


Icon: Wallet with key (48dp, Warning Orange)


Title (H4): "Criptomoedas em Carteira Própria: Metamask"


MANDATORY Pre-Qualification:


Before showing any instructions, user must answer quiz:
Modal: "Teste de Conhecimento Técnico"
Questions (must get 3/3 correct to proceed):
"O que é uma seed phrase?" (Multiple choice)
"Se você digitar 11 palavras corretas e 1 errada, o que acontece?" (Answer: Perda total)
"Seed phrases podem ser recuperadas se perdidas?" (Answer: Não)
If fail: "Você não passou no teste de conhecimento. OBRIGATORIAMENTE agende consultoria antes de continuar"
CTA: "Agendar Consultoria" (cannot bypass)
If pass: "Aprovado. Prossiga com EXTREMO cuidado"
Wallet Details:


Tipo: "Metamask (Self-Custody Wallet)"
Saldo aproximado: "R$ 143.000 (≈ 0.8 BTC + 5 ETH + 20.000 USDC)"
Warning (Body Small, Error Red): "Você é 100% responsável. Não há suporte da exchange para erros"
Seed Phrase Location Instructions (NOT the seed itself):


Section title (H4): "Localização da Seed Phrase"
Explanation: "O falecido deixou instruções de ONDE a seed phrase está guardada (não a seed em si)"
Background: Secondary Blue Pale
Border-radius: 8dp
Padding: 20dp
Instructions text (revealed on button click, same 30-second pattern):
Example content:
 LOCALIZAÇÃO DA SEED PHRASE:A seed phrase de 12 palavras está escrita à mão em papel, dentro de envelope lacrado de cor azul.O envelope está guardado no cofre físico do Banco Santander, agência 0123 (Rua Augusta, 456 - São Paulo/SP), caixa de segurança número #456.Para acessar o cofre:- Contactar Maria Silva (irmã), telefone (11) 98765-4321- Maria tem cópia da chave física do cofre- Apresentar sua identidade + certidão de óbito do falecido- Banco liberará acesso à caixa de segurançaIMPORTANTE: A seed phrase NUNCA foi digitada online. Está APENAS no papel.


Button: "Revelar Instruções de Localização" (30-second countdown modal)
Recovery Tutorial:


Video embedded: "Como Importar Seed Phrase no Metamask" (YouTube)
Duration: 8 minutes
Key points covered:
How to download Metamask
Import vs. Create new wallet
Where to enter seed phrase (security tips)
How to verify wallet address matches
How to transfer funds to exchange (safer custody)
Must watch at least 80% to unlock "Next Steps" section
Next Steps (Unlocked After Video):


Checklist (Body Small):
[ ] Obtenha seed phrase do local físico
[ ] Instale Metamask em computador seguro (não público)
[ ] Importe wallet com seed phrase
[ ] Verifique endereço corresponde ao esperado
[ ] Transfira fundos para exchange (ex: Binance) para custódia mais segura
[ ] Converta para Real e retire conforme necessidade
MANDATORY Specialist Support Offer:


Background: Primary Gold with 10% opacity
Border: 2dp Primary Gold
Icon: Headset (32dp, Primary Gold)
Text (Body, Bold): "Suporte Especializado INCLUÍDO"
Description: "Devido ao valor e complexidade, oferecemos:"
List:
"✓ 1 hora de consultoria com especialista crypto (gratuito)"
"✓ Acompanhamento guiado via videochamada durante recuperação"
"✓ Suporte técnico via chat durante 30 dias"
CTA: "Agendar Consultoria Agora" (Premium/Gold Button)
Opens calendar (Feature 2.1 style)
Specialist: "João Silva, Especialista em Custódia Cripto | 10 anos experiência"
State 4: Category 3 - NFTs (Transfer Instructions)
Section Design:


Background: Gradient from White to Accent Purple (5% opacity)
Icon: Gallery/art frame (48dp, Accent Purple)
Title (H4): "NFTs e Colecionáveis Digitais"
Collection Overview:


Card showing wallet address:
"Wallet do falecido: 0x1234...5678" (truncated)
"Blockchain: Ethereum"
Button: "Ver Wallet no Etherscan" (opens blockchain explorer)
Shows: NFTs detected in wallet with thumbnails (if API accessible)
NFT List (If Identifiable):


Each NFT as mini-card:
Thumbnail image (if available)
Collection: "Bored Ape Yacht Club #1234"
Estimated value: "Floor price: 15 ETH (~R$ 240.000)" (from OpenSea API)
Status: "Confirmado no wallet"
Transfer Instructions:


Text (Body Small):
"Para transferir NFTs para sua propriedade:"
Steps:
"Obtenha seed phrase conforme instruções na seção Criptomoedas acima"
"Conecte wallet do falecido no OpenSea.io"
"Transfira cada NFT para seu próprio wallet (seu endereço)"
"Gas fees (taxas de rede) serão necessárias - reserve ~R$ 200 em ETH"
Tutorial link: "📚 Guia: Como Transferir NFTs"
Video: "🎥 Passo a Passo de Transferência"
Alternative Path (Sell NFTs):


Instructions for selling instead of keeping:
"Se preferir vender ao invés de manter:"
Steps to list on OpenSea
How to convert ETH proceeds to Real
Tax implications note: "Consulte contador sobre tributação de ganho de capital"
State 5: Category 4 - Domínios (DNS Transfer)
Section Design:


Icon: Globe/domain (48dp, Info Blue)
Title (H4): "Domínios Registrados"
Domain List:


Each domain as card:
Domain: "exemplo.com.br"
Registrar: "Registro.br"
Expiration: "Expira em 15/08/2025"
Status: "Ativo"
Transfer Instructions:


Login Credentials:
Registrar: "Registro.br"
Email/Login: [revealed]
Password: [Reveal button, 30-second pattern]
Transfer Steps:
Text (Body Small):
"Acesse painel do Registro.br: [link]"
"Faça login com credenciais acima"
"Menu: Meus Domínios → Selecione domínio"
"Opção: Transferir Propriedade"
"Insira seu CPF como novo proprietário"
"Pague taxa de transferência (R$ 40)"
"Aguarde confirmação (1-2 dias úteis)"
Tutorial: "📚 Guia: Transferência de Domínio .com.br"
Renewal Urgency (If Expiring Soon):


Warning banner (if domain expires <90 days):
Background: Warning Orange with 15% opacity
Text: "⚠️ Domínio expira em 45 dias. Renove ou transfira urgentemente para não perder"
State 6: Category 5 - Cloud Storage (Google Drive, iCloud)
Section Design:


Icon: Cloud (48dp, Info Blue)
Title (H4): "Armazenamento em Nuvem"
Service Cards (Each Service):


Google Drive Example:
Icon: Google Drive logo (32dp)


Account: "joao@gmail.com"


Storage used: "12 GB de 15 GB"


Decision badge: "Decisão: Transferir Propriedade"


Credentials:


Email: [pre-filled]
Password: [Reveal button]
Action Options (As Decided by Deceased):


If "Transferir":
Steps:
"Acesse Google Drive com credenciais acima"
"Selecione todos arquivos importantes"
"Compartilhe com seu email pessoal"
"Faça download local (backup)"
"Transfira propriedade dos arquivos para sua conta"
Link: "📚 Tutorial Google: Transferir Arquivos"
If "Memorializar":
"Conta Google pode ser configurada para acesso read-only memorial"
Link: Google Inactive Account Manager
If "Deletar Após 90 Dias":
"Conforme decisão do falecido, conta será deletada automaticamente em 90 dias"
"Se quiser preservar algum arquivo, faça download antes"
Countdown: "Tempo restante: 85 dias"
State 7: Security Logs & Transparency
Access Logging (Backend, Visible to Beneficiary):


Every password reveal, seed phrase view logged
Beneficiary can see own access log
Log Table (At Bottom of Digital Assets Page):


Section title (H4): "Histórico de Acesso aos Ativos Digitais"
Table columns:
Data/Hora: "08/01/2025 14:32:15"
Ação: "Senha do Gmail revelada"
Usuário: "Você (IP: 177.xxx.xxx.xxx)"
Duração: "30 segundos"
Purpose:
Transparency for beneficiary
Audit trail if multiple beneficiaries
Security monitoring (detect unauthorized access)
Multiple Beneficiaries with Same Access:


If >1 beneficiary has access to same digital asset:
Warning shown: "⚠️ Este ativo é compartilhado com outro beneficiário. Coordenem-se para evitar conflitos"
List of co-beneficiaries: "Maria Silva também tem acesso"
Suggestion: "Recomendamos entrar em contato antes de realizar ações irreversíveis"
State 8: Specialist Support Scheduling
Dedicated Crypto Specialist Support:


Included in service (1 hour free, can purchase more)
Scheduling: Same calendar interface as Feature 2.1
Specialist profile:
Photo: Professional headshot
Name: "João Silva"
Credentials: "Especialista em Custódia de Criptomoedas | 10 anos experiência | Formação: Ciência da Computação"
Languages: "Português, Inglês"
Session types:
"Consultoria Inicial" (30min): Overview and planning
"Acompanhamento Guiado" (1h): Screen-share while you recover wallet
"Suporte Avançado" (2h): Complex multi-sig or smart contract interactions
Post-Session:


Recording provided (if beneficiary consented)
Written summary sent via email
Follow-up: 7 days later, "How did recovery go?"

Feature 7.1: Painel de Manutenção (Dashboard do Cliente Ativo)
Screen: Main Dashboard (Post-Testament Creation)
State 1: Dashboard Overview (Home After Login)
Page Layout:


Full-width responsive layout
Max-width: 1400px, centered
Background: Background Subtle
Padding: 48dp vertical, 24dp horizontal
Header Section:


Breadcrumb: Dashboard (if in nested page, shows trail)
Welcome message (H2): "Bem-vindo, [Nome]"
Date display (Body Small, Neutral Medium): "Hoje é sexta, 10 de janeiro de 2026"
Dashboard Grid Layout:


Desktop: 3-column grid (primary content 2 cols, sidebar 1 col)
Tablet: 2-column grid
Mobile: Single column stack
Gap: 24dp between cards
State 2: Card 1 - Status do Testamento (Primary Position)
Card Design:


Background: White
Border-radius: 16dp
Padding: 32dp
Box shadow: Y-offset 2dp, Blur 16dp, Opacity 6%
Position: Top-left, spans 2 columns on desktop
Header Section:


Icon: Document with checkmark (48dp, Primary Deep Blue)
Title (H3): "Status do Seu Testamento"
Status badge (top-right):
Active State: "🟢 Ativo" (Success Green pill)
Warning State: "🟡 Renovação em Breve" (Warning Orange pill, <60 days)
Critical State: "🔴 Ação Necessária" (Error Red pill, expired or incomplete)
Quick Info Grid (2 columns):


Left Column:
Versão Atual:
Label (Body Small, Bold): "Versão"
Value (H4): "v3"
Link: "Ver Histórico" (Ghost Button, opens Feature 4.2 State 6)
Última Atualização:
Label: "Última alteração"
Value: "15/06/2024"
Relative time: "(7 meses atrás)"
Right Column:
Próxima Renovação:
Label: "Renovação"
Value: "01/03/2025"
Countdown: "em 50 dias" (dynamic)
If <30 days: Color changes to Warning Orange
Beneficiários Validados:
Label: "Beneficiários"
Value: "3 de 4 validados"
Icon: People (20dp)
Warning if <100%: "⚠️ 1 pendente"
Quick Actions (Button Row):


Layout: Horizontal flex, wrap on mobile
Buttons:
"Ver Testamento" (Primary Button)
Opens PDF preview modal (read-only)
"Atualizar Inventário" (Secondary Button)
Goes to Feature 7.2 edit flow
"Gerenciar Beneficiários" (Secondary Button)
Goes to Feature 5.4 dashboard
Spacing: 12dp gap between buttons
State 3: Card 2 - Monitoramento Ativo
Card Design: Same styling as Card 1


Position: Left column, below Card 1


Header:


Icon: Heartbeat with checkmark (48dp, Success Green if active)
Title (H4): "Monitoramento de Vida"
Status indicator: "🟢 Ativo"
Monitoring Details:


Last Query:
Icon: Calendar with clock (20dp)
Text (Body Small): "Última consulta:"
Value: "Hoje às 03:42"
Relative: "(há 11 horas)"
Next Query:
Icon: Calendar with arrow (20dp)
Text: "Próxima consulta:"
Value: "Amanhã às 03:42"
Countdown: "em 13 horas"
Source:
Icon: Database (20dp)
Text: "Fonte: Serasa Experian"
Note (Body Micro): "(Base nacional de óbitos)"
History Stats:
Text (Body Small): "127 consultas desde ativação"
Status: "0 alertas" (Success Green)
Link: "Ver Histórico Completo" (opens Feature 5.1 State 4 modal)
Life Confirmation Section:


Next confirmation (Body Small): "Próxima confirmação manual: 15/07/2025"
Button: "Confirmar Vida Agora" (Ghost Button)
Use case: Early manual check-in (Feature 5.2 State 3)
State 4: Card 3 - Segurança (Right Column, Top)
Card Design: Same styling, border-left: 4dp Accent Emerald


Header:


Icon: Shield with checkmark (48dp, Accent Emerald)
Title (H4): "Proteção e Segurança"
Security Indicators (Vertical list with icons):


Criptografia:
Icon: Lock (20dp, Accent Emerald)
Text (Body Small): "Criptografia AES-256 ativa"
Badge: "✓ Ativo" (Success Green pill)
Chaves Distribuídas:
Icon: Key fragments (20dp, Accent Emerald)
Text: "Chaves distribuídas (3/3 partes)"
Badge: "✓ Ativo"
Backup Geográfico:
Icon: Globe with pins (20dp, Accent Emerald)
Text: "Backup em 2 regiões (BR-SP, BR-RJ)"
Badge: "✓ Ativo"
Última Verificação:
Icon: Checkmark in circle (20dp, Accent Emerald)
Text: "Integridade verificada"
Timestamp: "08/01/2025 03:42"
Badge: "✓ Aprovado"
Action Link:


Link button (Body Small, Primary Deep Blue): "🔗 Verificar Autenticidade"
On click: Opens Feature 4.1 State 4 modal (hash + blockchain verification)
State 5: Card 4 - Garantia de Continuidade (Right Column, Below Security)
Card Design: Border-left: 4dp Primary Gold (premium indicator)


Header:


Icon: Shield with infinity (48dp, Primary Gold)
Title (H4): "Garantia de Acesso Perpétuo"
Status Indicators:


Escrow Ativo:
Icon: Checkmark (20dp, Success Green)
Text (Body Small): "Contrato ativo com [Depositário], OAB/SP [XXXXX]"
Badge: "✓ Ativo"
Última Auditoria:
Icon: Calendar with checkmark (20dp, Success Green)
Text: "Última auditoria: 15/12/2024"
Note: "(Auditoria anual obrigatória)"
Badge: "✓ Aprovado"
Backup de Chaves:
Icon: Key in vault (20dp, Accent Emerald)
Text: "Backup atualizado em 08/01/2025"
Badge: "✓ Sincronizado"
Learn More:


Ghost Button: "Como Funciona o Plano de Continuidade?"
Opens Feature 4.3 State 3 (detailed page)
State 6: Card 5 - Ações Rápidas (Below Grid, Full-Width)
Card Design: Background Secondary Blue Pale, lighter than others


Header:


Icon: Zap/lightning (32dp, Primary Deep Blue)
Title (H4): "Ações Rápidas"
Action Grid (4 columns on desktop, 2 on tablet, 1 on mobile):


Atualizar Inventário:
Icon: Edit/pencil (40dp, Primary Deep Blue)
Text (Body Small): "Adicionar ou remover bens"
Button: "Atualizar"
Goes to: Feature 7.2
Gerenciar Beneficiários:
Icon: People (40dp, Primary Gold)
Text: "Adicionar, editar ou remover"
Button: "Gerenciar"
Goes to: Feature 5.4
Ver Testamento:
Icon: Document (40dp, Primary Deep Blue)
Text: "Visualizar PDF completo"
Button: "Visualizar"
Opens: PDF modal preview
Central de Ajuda:
Icon: Question mark in circle (40dp, Info Blue)
Text: "FAQs, tutoriais, suporte"
Button: "Ajuda"
Goes to: Support center
State 7: Notification Center (Bell Icon, Top-Right)
Trigger: User clicks bell icon in header


Dropdown Panel:


Max-width: 420dp
Max-height: 600dp (scrollable)
Background: White
Box shadow: Y-offset 4dp, Blur 20dp
Border-radius: 12dp
Header:


Title (H4): "Notificações"
Badge: Unread count (Error Red circle) if >0
Action: "Marcar Todas Lidas" (link, right-aligned)
Notification Types (Examples):


Pending Beneficiary Validation:
Icon: Warning triangle (24dp, Warning Orange)
Text (Body Small): "Maria Silva ainda não validou dados"
Action: "Reenviar Convite"
Timestamp: "há 2 dias"
Renewal Reminder:
Icon: Calendar (24dp, Info Blue)
Text: "Renovação em 45 dias. Renove com desconto"
Action: "Renovar Agora"
Timestamp: "há 1 semana"
System Update:
Icon: Info circle (24dp, Success Green)
Text: "Nova funcionalidade: Multisig para criptos"
Action: "Saiba Mais"
Timestamp: "há 3 dias"
Empty State (If No Notifications):


Icon: Bell with checkmark (64dp, Neutral Light)
Text (Body): "Nenhuma notificação pendente"
State 8: User Settings Menu (Avatar, Top-Right)
Trigger: User clicks avatar/initials circle


Dropdown Menu:


Background: White
Box shadow: Similar to notifications
Width: 280dp
User Info Section (Top):


Avatar: Large (64dp)
Name (H4): "[Nome Completo]"
Email (Body Small, Neutral Medium): "[email]"
Plan badge: "Plano Essencial" (pill)
Menu Items:


Meu Testamento:
Icon: Document (20dp)
Goes to: Testament overview
Beneficiários:
Icon: People (20dp)
Badge: "1 pendente" (if applicable)
Goes to: Feature 5.4
Histórico de Versões:
Icon: Clock (20dp)
Goes to: Feature 4.2 State 6
Pagamentos & Renovação:
Icon: Credit card (20dp)
Goes to: Feature 7.3
Configurações:
Icon: Gear (20dp)
Goes to: Settings page
Suporte:
Icon: Headset (20dp)
Opens: Support chat or email form
Sair:
Icon: Logout (20dp, Error Red)
Action: Logout confirmation modal

Feature 7.2: Edição e Re-Assinatura de Testamento
Screen: Testament Update Flow
State 1: Update Entry Point (From Dashboard)
Trigger: User clicks "Atualizar Inventário" button


Loading Transition:


Brief loading state: "Carregando seu testamento..."
Spinner: 1-2 seconds
Purpose: Retrieve current data from database
Landing on Wizard (Same as Feature 3.1):


Returns to familiar multi-step wizard interface
Key difference: All fields pre-filled with existing data
Header shows: "Atualizar Testamento" (not "Criar")
State 2: Incremental Editing Mode
UI Differences from Initial Creation:


Section Cards Pre-Filled:
All sections show current data
Example: "Bens Imóveis" section shows "2 imóveis cadastrados"
Cards are collapsed by default (expand to edit)
Visual Indicators:
Edited sections: Yellow highlight or badge "Editado ✏️"
Unchanged sections: Normal styling
New additions: Green badge "Novo +"
Deletions: Red strikethrough "Removido 🗑️"
Example: Add New Property:


Navigate to "Bens Imóveis" section
Existing properties shown as summary cards
Button: "Adicionar Outro Imóvel"
Clicks → Form expands (same as Feature 3.1 State 3)
Fills new property details
Saves → Added to list
Section badge updates: "3 imóveis cadastrados" (was 2)
Example: Remove Beneficiary:


Navigate to "Beneficiários" section
Sees: Maria (40%), João (40%), Instituto (20%)
Clicks "Remover" on João's card
Confirmation modal (Feature 5.4 State 7)
Confirms → João removed
Distribution recalculates: Maria (50%), Instituto (50%) OR shows "40% não alocado"
State 3: Change Detection Algorithm (Backend)
System Automatically Classifies Changes:


Minor Changes (No re-validation needed):
Percentage adjustment <20%
Update contact info of beneficiary (email, phone)
Correction of typo in property address
Add asset <10% of total patrimony value
Substantial Changes (Recommends re-validation):
Add/remove beneficiary
Change distribution >20%
Add asset >10% of total patrimony
Change to digital assets (crypto, passwords)
Detection Modal (After User Saves Changes):


Appears after user clicks final "Salvar Alterações"


Modal cannot be dismissed (must choose path)


If Minor Changes Detected:


Icon: Checkmark in circle (64dp, Success Green)
Headline (H3): "Alterações Detectadas"
Text (Body):
"Você fez as seguintes alterações:"
List (Body Small):
"• Ajustou distribuição de Maria de 35% para 40%"
"• Atualizou endereço do imóvel Rua X"
Classification: "Alterações: Menores"
Recommendation (Body Small):
"Para essas alterações, basta re-assinar digitalmente"
"Nova validação por vídeo não é necessária"
CTA: Primary Button "Prosseguir para Assinatura Digital"
If Substantial Changes Detected:


Icon: Warning triangle (64dp, Warning Orange)
Headline (H3): "Alteração Substancial Detectada"
Text (Body):
"Você fez alterações significativas:"
List:
"• Removeu beneficiário: João Silva"
"• Redistribuiu 40% do patrimônio"
Classification: "Alterações: Substanciais"
Recommendation (Body, Bold):
"⚠️ Recomendamos fortemente nova validação por vídeo para reforçar validade jurídica"
"Embora não obrigatória, oferece maior proteção legal contra contestações"
Two Options:
"Agendar Nova Validação" (Primary Button, recommended path)
Goes to: Feature 3.2 scheduling
"Apenas Re-Assinar Digitalmente" (Secondary Button, less protection)
Warning text: "Menor proteção jurídica. Prosseguir mesmo assim?"
Confirmation required
State 4: Digital Re-Signature Flow (Minor Changes Path)
Identical to Feature 3.3 (Digital Signature), with differences:


Review Screen Shows Diff:
Instead of full document review
Shows: "O Que Mudou vs. Versão Anterior?"
Split view:
Left: "Versão v3 (anterior)"
Right: "Versão v4 (nova)"
Visual diff styling (Feature 4.2 State 7 pattern):
Deleted: Red strikethrough
Added: Green highlight
Changed: Yellow highlight
Confirmation Checkbox:
Text: "Revisei as mudanças e confirmo que estão corretas"
Signature Process:
Same ICP-Brasil flow
Certificate detection → PIN entry → Signature
New hash generated
New blockchain registration (creates v4 transaction)
Post-Signature:


Email sent:
Subject: "Testamento Atualizado - Versão 4"
Attachments: New signed PDF + new blockchain certificate
Changelog: "Confira o que mudou: [link]"
Dashboard updates: "Última atualização: Hoje"
State 5: Full Re-Validation Path (Substantial Changes)
User Chooses "Agendar Nova Validação":


Returns to Feature 3.2 (Video Validation)
Scheduling calendar shown
Same process as initial validation
Video Session Differences:


Advogado script adapted:
"Confirma que está atualizando seu testamento?"
"Mudanças incluem: Remoção de beneficiário João"
"Confirma que esta é sua vontade livre?"
Focuses on confirming NEW elements, not re-reading entire inventory
After Video + Signature:


Full cycle complete: Video validated + digitally signed + blockchain registered
Version increments: v3 → v4
Email: "Testamento Atualizado e Validado"
State 6: Version History Tracking
Every Change Creates New Version:


Versions: v1, v2, v3, v4...
Each version:
Has own PDF (archived)
Has own blockchain transaction
Has own timestamp
Has changelog
Accessing History (Dashboard):


Card: "Histórico de Versões" (or link in menu)
Opens: Feature 4.2 State 6 (Timeline visualization)
User can:
View any past version PDF
See diff between any two versions
Verify each version in blockchain
State 7: Rollback Functionality (Restore Previous Version)
Use Case: User regrets recent change, wants to go back


Trigger: In version history, user clicks "Restaurar Esta Versão"


Confirmation Modal:


Icon: History/clock with arrow (64dp, Warning Orange)
Headline (H4): "Restaurar Versão Anterior?"
Text (Body):
"Você está prestes a restaurar a versão v2 (de 03/06/2024)"
"Isso criará uma nova versão v5 idêntica à v2"
"As alterações da v3 e v4 serão descartadas"
Warning: "Esta ação exige re-assinatura"
Actions:
"Cancelar" Ghost Button
"Confirmar Restauração" Primary Button
Post-Rollback:


System creates new version (v5) with content of v2
Requires: Digital re-signature (or full validation if substantial)
Timeline shows: v1 → v2 → v3 → v4 → v5 (copy of v2)
Changelog: "Versão restaurada de v2"
State 8: Auto-Save During Editing
Continuous Saving (Like Feature 3.1):


Every 30 seconds OR on field blur
Status indicator: "Salvo às 14:42" (top-right)
Draft status: Changes saved but not finalized
Draft State:


If user exits mid-edit without completing signature:
Dashboard shows: "Rascunho Pendente" badge
Warning: "Você tem alterações não assinadas"
CTA: "Finalizar Atualização"
User can resume from where left off

Feature 7.3: Checkout de Renovação Anual
Screen: Renewal Payment Flow
State 1: Renewal Campaign (Email Drip)
D-60 Email (60 Days Before Expiration):


Subject: "Sua Renovação do Testamento Digital - 60 Dias"
Content:
"Sua renovação vence em 01/03/2025"
"Renove agora e ganhe 10% de desconto (Early Bird)"
Pricing:
Normal: "R$ 1.000/ano"
With discount: "R$ 900/ano"
CTA: "Renovar com Desconto" (Primary Button)
Countdown: "Oferta válida por 30 dias"
D-30 Email (30 Days Before):


Subject: "Última Semana de Desconto - Testamento Digital"
Discount reduced: "5% OFF = R$ 950/ano"
Urgency: "Desconto expira em 7 dias"
D-7 Email (7 Days Before Expiration):


Subject: "⚠️ Renovação Vence em 7 Dias"
No discount
Warning: "Após vencimento, monitoramento será suspenso"
CTA: "Renovar Agora"
D-0 Email (Expiration Day):


Subject: "Renovação Vencida - Ação Imediata Necessária"
Consequences explained (Feature 7.4 State 1)
CTA: "Renovar Urgente"
State 2: Renewal Checkout Page
URL: /renovar or /checkout/renewal


Access: Direct link from email OR dashboard "Renovar" button


Page Layout:


Max-width: 880px, centered
Background: Background Subtle
Two-column layout on desktop (left: details, right: payment)
Left Column - Plan Summary:


Card: Renewal Details:
Background: White


Padding: 32dp


Border-radius: 16dp


Header:


Icon: Renewal/refresh (48dp, Primary Deep Blue)
Title (H3): "Renovação Anual"
Plan Info:


Plan name (H4): "Testamento Digital - Plano Essencial"
Period: "Renovação para: 01/03/2025 - 01/03/2026"
Status: "Testamento atual: Ativo (v4)"
What's Included (Checklist):


Body Small, Success Green checkmarks:
"✓ Monitoramento 24/7 de APIs de óbito"
"✓ Custódia segura com criptografia AES-256"
"✓ Backup em 3 camadas (Shamir)"
"✓ Atualizações ilimitadas ao testamento"
"✓ Suporte jurídico (90 dias pós-óbito)"
"✓ Consultoria anual de revisão"
Discount Display (If Applicable):


Background: Success Green with 10% opacity
Padding: 16dp
Border-radius: 8dp
Text (Body, Bold): "Desconto Early Bird: 10% OFF"
Original price strikethrough: "~~R$ 1.000~~"
Final price (H2, Success Green): "R$ 900"
Savings: "Você economiza: R$ 100"
Right Column - Payment Section:


Card: Payment Methods:
Background: White


Padding: 32dp


Tabs (Payment Method Selection):


Three tabs: "Cartão de Crédito" | "PIX" | "Boleto"
Active tab: Border-bottom 4dp Primary Deep Blue
Tab 1: Credit Card:


Saved Card (If User Has One):
Card display:
Icon: Card brand logo (32dp) - Visa, Mastercard
Text: "Visa •••• 1234"
Expiry: "Válido até 08/2026"
Radio button: "Usar este cartão"
Option: "Usar outro cartão" (expands new card form)
New Card Form (If No Saved Card):
Fields:
Card number (masked input, brand auto-detection)
Cardholder name
Expiry date (MM/YY)
CVV (3-4 digits, secure input)
Checkbox: "Salvar para próximas renovações"
Installments (If >R$ 500):
Dropdown: "Parcelamento"
Options: 1x R$ 900 | 2x R$ 450 | 3x R$ 300
Note: "Sem juros em até 3x"
Auto-Renewal Option:
Checkbox: "Ativar renovação automática"
Description (Body Small):
"Cobrança automática no próximo ano"
"Ganhe 5% desconto adicional = R$ 855"
"Cancele a qualquer momento"
Discount badge: "-5% Extra" (Success Green pill)
Tab 2: PIX:


Instant payment option
Instructions:
"Clique em 'Gerar QR Code'"
"Escaneie com app do banco"
"Confirme pagamento"
"Renovação ativa em até 5 minutos"
Button: "Gerar QR Code PIX"
On click:
QR code appears (200×200dp)
PIX key displayed: "Copy code" button
Countdown: "QR Code expira em 30:00"
Polling: System checks payment status every 5 seconds
Tab 3: Boleto:


Traditional bank slip
Warning: "Vence em 3 dias úteis"
Instructions:
"Clique em 'Gerar Boleto'"
"Pague em banco, lotérica ou app bancário"
"Renovação ativa em até 2 dias úteis após confirmação"
Button: "Gerar Boleto"
On click: PDF downloads, barcode displayed
Submit Button (Bottom of Payment Card):


Primary Button: "Confirmar Renovação - R$ 900"
Full-width
Icon: Lock (20dp) - security indicator
Disabled until: Payment method selected and valid
Security Badges (Below Button):


Icons: SSL, PCI Compliance, encryption
Text (Body Micro): "Pagamento 100% seguro"
State 3: Payment Processing & Confirmation
Processing Screen (After Submit):


Full-screen overlay
Background: Primary Deep Blue gradient
Icon: Animated spinner (80dp, white)
Text (H3, white): "Processando Pagamento..."
Subtext (Body, white 80% opacity):
"Aguarde enquanto validamos seu pagamento"
"Não feche esta janela"
Credit Card Processing:


Integration: Stripe, PagSeguro, or local gateway
Steps:
Tokenize card (client-side, PCI compliant)
Send to payment processor
Await approval/decline
Duration: 5-15 seconds
Success State:


Transition: Spinner fades out, checkmark draws in (800ms)
Icon: Large checkmark (120dp, Success Green)
Confetti animation (gold particles, 2 seconds)
Headline (H2, white): "Renovação Confirmada!"
Text (Body Large, white): "Seu testamento está ativo até 01/03/2026"
Success Details Card:


Background: White card on colored background


Max-width: 620px, centered


Padding: 40dp


Receipt Info:


Transaction ID: "TXN-2025-001234"
Amount paid: "R$ 900,00"
Payment method: "Visa •••• 1234"
Date: "10/01/2025 às 14:32"
Next renewal: "01/03/2026"
Email Confirmation:


Text: "Recibo enviado para [email]"
Icon: Email (20dp)
CTA:


Primary Button: "Voltar ao Dashboard"
Secondary link: "Baixar Recibo (PDF)"
Email Confirmation (Sent Immediately):


Subject: "Renovação Confirmada - Testamento Digital"
Attachment: Recibo.pdf (fiscal receipt)
Content:
"Obrigado por renovar!"
Payment details (amount, method, date)
"Seu testamento permanece protegido até 01/03/2026"
CTA: "Acessar Dashboard"
State 4: Edge Case - Card Declined
Detection: Payment processor returns decline code


Error Screen:


Icon: Warning triangle (80dp, Error Red)
Headline (H3): "Pagamento Recusado"
Text (Body): "Não conseguimos processar o pagamento"
Reason displayed (if provided by processor):
"Saldo insuficiente"
"Cartão expirado"
"Transação bloqueada pelo banco"
Resolution Options:
Primary Button: "Tentar Outro Cartão"
Returns to payment form
Secondary Button: "Pagar com PIX"
Switches to PIX tab
Link: "Contactar Suporte" (if repeated failures)
Auto-Retry Logic (Backend):


If decline due to temporary issue (network error):
Automatic retry: 3 attempts with 5-second intervals
User sees: "Tentando novamente... (2/3)"
If persistent decline:
Shows error screen above
State 5: Auto-Renewal Activation
User Opts Into Auto-Renewal (Checkbox on payment page):


After successful payment:
System stores: Card token (encrypted), user consent, next charge date
Dashboard shows: "Renovação Automática Ativa ✓"
Next Year (D-30 Before Auto-Charge):


Email sent:
Subject: "Renovação Automática em 30 Dias"
Content:
"Sua renovação será cobrada automaticamente em R$ 950 (com desconto de fidelidade)"
"Cartão: Visa •••• 1234"
"Data da cobrança: 01/03/2026"
"Não quer renovar? Cancele até 01/03 sem custo"
CTA: "Gerenciar Renovação Automática" (link to settings)
D-0 (Auto-Charge Date):


Backend job runs at 03:00 (low-traffic time)
Attempts charge on saved card
If Successful:
Email: "Renovação Automática Concluída"
Dashboard: "Ativo até 01/03/2027"
Receipt attached
If Failed (Feature 7.4 State 1):
System tries 3x over 3 days
User notified: "Problema com renovação automática"
Link to update card
State 6: Payment History Page
Location: Dashboard > Pagamentos & Renovação


Page Layout:


Table of past payments
Columns:
Data: "10/01/2025"
Descrição: "Renovação Anual 2025-2026"
Método: "Visa •••• 1234"
Valor: "R$ 900,00"
Status: "✓ Pago" (Success Green)
Ações: "Ver Recibo" (download PDF)
Filters:


Date range selector
Status filter: Todos | Pagos | Pendentes | Cancelados
Summary Card (Top of Page):


Total paid lifetime: "R$ 3.600 desde 01/03/2023"
Payments made: "4 pagamentos"
Next payment: "01/03/2026 (Automático)"

Feature 7.4: Inadimplência e Suspensão
Screen: Non-Payment Handling Flow
State 1: Grace Period & Escalation Timeline
D+0 (Expiration Day):


Dashboard: Yellow banner appears (top of page)


Background: Warning Orange with 15% opacity
Icon: Warning triangle (24dp, Warning Orange)
Text (Body, Bold): "⚠️ Renovação vencida. Renove agora para manter proteção ativa"
CTA: "Renovar Agora" (Primary Button)
All Features Still Active:


Monitoring: Still running
Can still update testament
Can view all content
Grace period: 30 days
Email Sent:


Subject: "Renovação Vencida - Evite Suspensão"
Content:
"Sua renovação venceu em 01/03/2025"
"Você tem 30 dias de carência para renovar sem perder proteção"
"Após 30 dias, monitoramento será suspenso"
CTA: "Renovar" (link to Feature 7.3)
D+15 (15 Days Overdue):


Dashboard: Banner turns orange (more prominent)
Text: "⚠️ 15 dias em atraso. Monitoramento será suspenso em 15 dias"
Email + SMS:
Subject: "Última Chance - Renovação em Atraso"
Content:
"Você está 15 dias em atraso"
"Em mais 15 dias seu testamento será pausado"
Consequences explained:
"Monitoramento de óbito suspenso"
"Testamento não será aberto automaticamente"
"Você precisará pagar + taxa de reativação"
CTA: "Renovar Agora" (urgent tone)
SMS:
"Testamento Digital: Renovação 15 dias vencida. Renove em 15 dias ou sofrerá suspensão. Link: [short-url]"
D+30 (Monitoring Suspension):


Monitoring Halted:
Backend: Cron job stops querying API de óbito for this user
System flag: monitoring_status = 'suspended'
Dashboard Changes:
Banner: Red (Error Red with 20% opacity)
Icon: Stop sign (32dp, Error Red)
Text (Body, Bold): "🚨 Monitoramento SUSPENSO"
Explanation:
"Seu testamento não será aberto automaticamente se houver óbito"
"Testamento permanece registrado e válido"
"Renove para reativar monitoramento"
CTA: "Renovar e Reativar"
Monitoring Card (Feature 7.1 State 3):
Status changes: "🔴 Suspenso"
Text: "Monitoramento suspenso em 01/04/2025"
Last query: "Última consulta: 01/03/2025" (frozen date)
Features Still Available (Limited):
✓ Can view testament (read-only)
✓ Can view beneficiaries (read-only)
✗ Cannot update testament
✗ Cannot add/remove beneficiaries
✗ No monitoring active
Email Sent:
Subject: "Monitoramento Suspenso - Ação Necessária"
Content:
"Seu monitoramento foi suspenso por falta de pagamento"
"Seu testamento permanece registrado, mas não será aberto automaticamente"
"Para reativar: Renove agora"
CTA: "Renovar e Reativar"
D+60 (Access Restriction - Read-Only):


Dashboard: Read-Only Mode:
All edit buttons disabled/hidden
Banner: Still red
Text updated: "Acesso limitado. Regularize para recuperar funcionalidades"
Login Still Works:
User can login and view
Modal on login:
"Sua conta está em modo read-only"
"Renove para recuperar acesso completo"
Email Sent:
Subject: "Último Aviso - Conta em Risco de Arquivamento"
Content:
"Em 30 dias seus dados serão arquivados"
"Para reativar após arquivamento: Taxa de R$ 200"
CTA: "Renovar Agora" (avoid extra fee)
D+90 (Archival - Cold Storage):


Account Archived:
Backend actions:
Encrypted testament moved to AWS S3 Glacier (cold storage)
User credentials disabled (cannot login)
Monitoring: Permanently stopped (until reactivation)
Database: User marked as archived
Login Attempt:
User tries to login → Error page
Message: "Conta Arquivada"
Text (Body):
"Sua conta foi arquivada por falta de pagamento"
"Seus dados estão seguros mas inacessíveis"
"Para reativar: Renovação + Taxa de Reativação"
CTA: "Solicitar Reativação"
Email Sent (Final):
Subject: "Conta Arquivada - Reative em Até 1 Ano"
Content:
"Sua conta foi arquivada"
"Testamento permanece seguro, mas inacessível"
"Você tem 1 ano para reativar pagando:"
"Anuidade: R$ 1.000"
"Taxa de reativação: R$ 200"
"Total: R$ 1.200"
"Após 1 ano + 120 dias: Exclusão permanente (LGPD)"
CTA: "Reativar Conta"
D+485 (~1 Year + 120 Days - Permanent Deletion):


30 Days Before Deletion:
Email sent: "Exclusão Definitiva em 30 Dias"
Content:
"Esta é sua última chance"
"Em 30 dias seus dados serão permanentemente deletados"
"Esta ação é irreversível"
CTA: "Reativar Urgente"
D+515 (Permanent Deletion - LGPD Right to Erasure):
Backend actions:
Testament document: Permanently deleted (cannot recover)
Key fragments: Deleted from all vaults
User data: Anonymized or deleted
Beneficiary contacts: Deleted
Logs: Anonymized (retain for legal compliance, no PII)
Exception: Blockchain record remains (public, immutable, but contains no document content - only hash)
No Email (User data deleted, no way to contact)
State 2: Reactivation Process (Within 1 Year)
Trigger: User clicks "Reativar Conta" in archived state email


Reactivation Checkout Page:


Similar to Feature 7.3 checkout, but with additional fee


Pricing Card:


Item 1: "Anuidade 2025-2026" - R$ 1.000
Item 2: "Taxa de Reativação" - R$ 200
Explanation (Body Small): "Cobre custo operacional de restauração"
Subtotal: R$ 1.200
Discount (if paying upfront): None (no early bird for reactivation)
Payment: Same methods as renewal (card, PIX, boleto)


Post-Payment (Immediate Reactivation):


Backend:
Retrieve testament from cold storage (Glacier retrieval: 3-5 hours)
Move back to hot storage (S3 standard)
Re-enable user credentials
Restart monitoring (next day's cron job)
Email Sent:
Subject: "Conta Reativada com Sucesso"
Content:
"Bem-vindo de volta!"
"Testamento restaurado (versão original preservada)"
"Monitoramento será reativado em 24 horas"
"Recomendação: Revise seu testamento para garantir que está atualizado"
CTA: "Acessar Dashboard"
Dashboard Access:
User can login immediately
Welcome banner:
"✓ Conta reativada"
"Revise seu testamento - pode haver mudanças na sua vida desde arquivamento"
CTA: "Revisar Testamento"
State 3: Voluntary Cancellation (User Wants to Quit)
Trigger: Dashboard > Settings > "Cancelar Assinatura"


Cancellation Modal (Retention Attempt):


Icon: Question mark (64dp, Warning Orange)
Headline (H3): "Tem Certeza Que Deseja Cancelar?"
Text (Body):
"Seu testamento será arquivado em 30 dias"
"Você perderá:"
List (Body Small, Error Red):
"✗ Monitoramento automático de óbito"
"✗ Abertura automática para beneficiários"
"✗ Atualizações ao testamento"
"✗ Suporte jurídico incluso"
Retention Offer:
Background: Primary Gold with 10% opacity
Border: 2dp Primary Gold
Icon: Gift (32dp, Primary Gold)
Text (H4): "Oferta Especial: Fique por 6 Meses Grátis"
Description (Body Small):
"Pause sua assinatura sem perder proteção"
"6 meses gratuitos enquanto decide"
"Cancele a qualquer momento se mudar de ideia"
CTA: "Aceitar 6 Meses Grátis" (Primary Button)
Confirm Cancellation:
Text field: "Digite 'CANCELAR' para confirmar"
Validation: Must type exact word
Button: "Sim, Cancelar Assinatura" (Error Red, Destructive)
Enabled only after validation
Post-Cancellation:


Enters D+30 timeline immediately (skips grace period)
Email:
Subject: "Assinatura Cancelada"
Content:
"Sua assinatura foi cancelada"
"Testamento será arquivado em 30 dias"
"Você pode exportar PDF do testamento (versão não-assinada) como backup pessoal"
CTA: "Baixar Testamento PDF"
Export Option:
User can download unsigned PDF
Watermark: "CÓPIA NÃO-ASSINADA - SEM VALIDADE JURÍDICA"
Purpose: Personal record only
State 4: Win-Back Campaign (For Cancelled/Archived Users)
D+120 After Archival:


Email: "Saudades! Volte com 50% OFF"
Content:
"Notamos sua falta"
"Oferta especial de retorno:"
"Reativação: R$ 100 (normal R$ 200)"
"Primeiro ano: R$ 500 (normal R$ 1.000)"
"Total: R$ 600 (economia de R$ 600)"
"Válido por 30 dias"
CTA: "Reativar com Desconto"
D+300 (Final Win-Back Attempt):


Email: "Exclusão Definitiva em 60 Dias"
Content:
"Esta é sua última oportunidade"
"Em 60 dias, seus dados serão permanentemente deletados"
"Proteja sua família novamente"
"Oferta final: 40% OFF no primeiro ano"
CTA: "Última Chance de Reativar"

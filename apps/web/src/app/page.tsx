'use client'

import { FAQSection } from '@/components/landing/faq-section'
import { HeroSection } from '@/components/landing/hero-section'
import { LegalJourneySection } from '@/components/landing/legal-journey-section'
import { ProblemSection } from '@/components/landing/problem-section'
import { TechFeaturesSection } from '@/components/landing/tech-features-section'
import { PreviewSection } from '@/components/landing/preview-section'
import { SavingsCalculator } from '@/components/landing/savings-calculator'
import { TestimonialsSection } from '@/components/landing/testimonials-section'
import { TrustBadges } from '@/components/landing/trust-badges'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X, Shield, Lock, Radio, Check } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState, Suspense } from 'react'


import { useSearchParams } from 'next/navigation'


// Logic for handling the main landing page content
function HomeContent() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)

    // Referral Tracking Logic
    const refCode = searchParams.get('ref')
    if (refCode) {
      // Set cookie for 30 days
      const d = new Date()
      d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000))
      document.cookie = `referral_code=${refCode};expires=${d.toUTCString()};path=/`
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [searchParams])

  return (
    <main className="min-h-screen bg-background-pure dark text-text-primary">
      {/* Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ${isScrolled
          ? 'bg-background-pure/40 backdrop-blur-3xl border-b border-white/5 py-md shadow-2xl'
          : 'bg-transparent py-lg'
          }`}
      >
        <div className="max-w-7xl mx-auto px-lg sm:px-xl lg:px-2xl">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-xs group">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform">
                <Shield className="w-4 h-4 text-background-pure" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tighter uppercase">
                Testamento<span className="text-brand-primary">Fácil</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-xl">
              <Link
                href="#tech"
                className="text-[13px] font-black uppercase tracking-widest text-white/40 hover:text-brand-primary transition-all"
              >
                Cofre Forense
              </Link>
              <Link
                href="#pricing"
                className="text-[13px] font-black uppercase tracking-widest text-white/40 hover:text-brand-primary transition-all"
              >
                Planos
              </Link>

              <div className="h-4 w-px bg-white/10" />

              <span className="text-[10px] uppercase font-black tracking-widest text-white/30 cursor-default">
                Profissional:
              </span>
              <div className="flex gap-lg">
                <Link
                  href="/sign-in"
                  className="text-[13px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-all flex items-center gap-1"
                >
                  <Lock className="w-3 h-3" />
                  Advogados
                </Link>
                <Link
                  href="/partner"
                  className="text-[13px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-all"
                >
                  Parceiros
                </Link>
              </div>

              <div className="h-4 w-px bg-white/10" />

              <SignedOut>
                <SignInButton mode="modal">
                  <button
                    type="button"
                    className="text-[13px] font-black uppercase tracking-widest text-brand-primary hover:text-brand-hover transition-all"
                  >
                    Entrar
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button type="button" className="btn-primary !h-[44px] !px-lg !text-[11px] font-black uppercase tracking-[0.1em]">
                    Criar Testamento
                  </button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <Link
                  href="/dashboard"
                  className="text-[13px] font-black uppercase tracking-widest text-brand-primary hover:text-brand-hover"
                >
                  Dashboard Ativo
                </Link>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </nav>

            {/* Mobile Toggle */}
            <button
              type="button"
              className="md:hidden p-xs text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[70px] bg-background-pure/95 backdrop-blur-2xl border-b border-white/10 z-50 p-xl shadow-2xl md:hidden"
          >
            <nav className="flex flex-col gap-lg">
              <Link
                onClick={() => setMobileMenuOpen(false)}
                href="#tech"
                className="text-[14px] font-black uppercase tracking-widest text-white/60 py-sm border-b border-white/5"
              >
                Cofre Forense
              </Link>
              <Link
                onClick={() => setMobileMenuOpen(false)}
                href="/sign-in"
                className="text-[14px] font-black uppercase tracking-widest text-accent-purple py-sm border-b border-white/5 flex items-center gap-2"
              >
                <Lock className="w-4 h-4" />
                Área do Advogado
              </Link>
              <Link
                onClick={() => setMobileMenuOpen(false)}
                href="/partner"
                className="text-[14px] font-black uppercase tracking-widest text-brand-gold py-sm border-b border-white/5"
              >
                Seja Parceiro
              </Link>

              <SignedOut>
                <SignInButton mode="modal">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    type="button"
                    className="w-full text-center py-sm font-black uppercase tracking-widest text-white/60"
                  >
                    Entrar na Conta
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    type="button"
                    className="btn-primary w-full h-14 font-black uppercase tracking-widest text-xs"
                  >
                    Criar Testamento
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/dashboard"
                  className="w-full bg-brand-pale text-brand-primary py-lg rounded-button font-bold text-center"
                >
                  Acessar Painel
                </Link>
              </SignedIn>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <HeroSection />
      <TrustBadges />
      <ProblemSection />
      <TechFeaturesSection />
      <PreviewSection />
      <LegalJourneySection />

      {/* Pricing Section */}
      <section id="pricing" className="py-3xl bg-background-pure">
        <div className="max-w-7xl mx-auto px-lg sm:px-xl lg:px-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3xl"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-primary mb-md block">
              Investimento no seu Legado
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-dark tracking-tight mb-lg">
              Um plano para cada necessidade.
            </h2>
            <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
              Escolha o plano ideal de acordo com a complexidade do seu patrimônio e número de beneficiários.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-6xl mx-auto">
            {/* Plano Pessoal */}
            <div className="glass-panel text-left hover:border-brand-primary/50 transition-all group">
              <h3 className="text-xl font-bold text-neutral-dark mb-xs">Pessoal</h3>
              <p className="text-sm text-neutral-medium mb-lg">Ideal para quem possui poucos bens e até 3 beneficiários.</p>
              <div className="flex items-baseline gap-xs mb-lg">
                <span className="text-4xl font-black text-brand-primary">R$ 800</span>
                <span className="text-neutral-medium text-sm">/ano</span>
              </div>
              <ul className="space-y-sm mb-xl">
                {[
                  'Até 3 beneficiários',
                  'Cofre de senhas e documentos',
                  'Monitoramento automático',
                  'Suporte por e-mail'
                ].map(item => (
                  <li key={item} className="flex items-center gap-sm text-sm text-neutral-dark/80">
                    <Check className="w-4 h-4 text-functional-success shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <SignUpButton mode="modal">
                <button className="btn-secondary w-full">Começar</button>
              </SignUpButton>
            </div>

            {/* Plano Patrimonial - Destacado */}
            <div className="bg-brand-primary rounded-[32px] p-xl text-left text-background-pure shadow-2xl relative overflow-hidden transform scale-105 z-10 border border-brand-goldLight/20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              <div className="bg-white/90 text-brand-primary text-[10px] font-black uppercase px-md py-1 rounded-full w-fit mb-sm relative z-10">
                Mais Popular
              </div>
              <h3 className="text-xl font-bold mb-xs relative z-10">Patrimonial</h3>
              <p className="text-sm text-background-pure/70 mb-lg relative z-10">Para quem possui imóveis, investimentos e múltiplos beneficiários.</p>
              <div className="flex items-baseline gap-xs mb-lg relative z-10">
                <span className="text-4xl font-black text-white">R$ 1.500</span>
                <span className="text-background-pure/70 text-sm">/ano</span>
              </div>
              <ul className="space-y-sm mb-xl relative z-10">
                {[
                  'Até 10 beneficiários',
                  'Inventário completo de bens',
                  'Vídeo de validação forense',
                  'Suporte jurídico mensal',
                  'Notificação via WhatsApp'
                ].map(item => (
                  <li key={item} className="flex items-center gap-sm text-sm text-background-pure/90">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <SignUpButton mode="modal">
                <button className="bg-white text-brand-primary w-full py-md rounded-button font-bold hover:brightness-110 transition-all shadow-xl">Escolher Plano</button>
              </SignUpButton>
            </div>

            {/* Plano Empresarial */}
            <div className="glass-panel text-left hover:border-accent-purple/50 transition-all group">
              <h3 className="text-xl font-bold text-neutral-dark mb-xs">Empresarial</h3>
              <p className="text-sm text-neutral-medium mb-lg">Para holdings, quotas societárias e sucessão empresarial.</p>
              <div className="flex items-baseline gap-xs mb-lg">
                <span className="text-4xl font-black text-accent-purple">R$ 3.000</span>
                <span className="text-neutral-medium text-sm">/ano</span>
              </div>
              <ul className="space-y-sm mb-xl">
                {[
                  'Beneficiários ilimitados',
                  'Assessoria jurídica dedicada',
                  'Gestão de quotas e ações',
                  'Integração com contador',
                  'SLA de atendimento prioritário'
                ].map(item => (
                  <li key={item} className="flex items-center gap-sm text-sm text-neutral-dark/80">
                    <Check className="w-4 h-4 text-accent-purple shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <SignUpButton mode="modal">
                <button className="btn-premium w-full">Falar com Consultor</button>
              </SignUpButton>
            </div>
          </div>

          <p className="text-sm text-neutral-medium mt-xl">
            Todos os planos incluem taxa de configuração inicial de <strong>R$ 500 a R$ 2.000</strong>, dependendo da complexidade.
          </p>
        </div>
      </section>

      {/* Sticky Bottom Bar (Mobile) */}
      <div className="md:hidden fixed bottom-xl inset-x-lg z-50 pointer-events-none">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="pointer-events-auto bg-background-dark text-white p-xs rounded-card shadow-elevation flex items-center justify-between"
        >
          <div className="pl-lg">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-light/60">
              Economia estimada
            </p>
            <p className="text-[20px] font-black leading-tight text-accent-emerald">80%</p>
          </div>
          <SignUpButton mode="modal">
            <button type="button" className="btn-premium !h-[48px] !px-xl">
              Garantir Legado
              <ArrowRight className="w-4 h-4 ml-xs" />
            </button>
          </SignUpButton>
        </motion.div>
      </div>

      <TestimonialsSection />
      <SavingsCalculator />
      <FAQSection />

      {/* Footer */}
      <footer className="bg-background-dark/80 backdrop-blur-xl border-t border-white/5 py-4xl">
        <div className="max-w-7xl mx-auto px-lg sm:px-xl lg:px-2xl text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2xl mb-3xl">
            <div className="md:col-span-2">
              <div className="flex items-center gap-xs mb-xl">
                <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-background-pure" />
                </div>
                <span className="text-xl font-extrabold text-white tracking-tighter uppercase">
                  Testamento<span className="text-brand-primary">Fácil</span>
                </span>
              </div>
              <p className="max-w-xs text-[13px] leading-relaxed text-white/40 font-medium">
                Soberania Digital e Custódia Forense. Protegendo legados com infraestrutura de nível bancário e validade jurídica absoluta através de protocolos Testamento Fácil™.
              </p>
            </div>
            <div>
              <h4 className="text-white font-black mb-lg uppercase text-[10px] tracking-widest opacity-60">
                Protocolos
              </h4>
              <ul className="space-y-md text-[13px] font-bold">
                <li>
                  <Link href="#calculator" className="text-white/40 hover:text-brand-primary transition-colors">
                    Simulador Forense
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-white/40 hover:text-brand-primary transition-colors">
                    Segurança de Custódia
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-white/40 hover:text-brand-primary transition-colors">
                    Planos de Soberania
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black mb-lg uppercase text-[10px] tracking-widest opacity-60">
                Infraestrutura
              </h4>
              <ul className="space-y-md text-[13px] font-bold">
                <li>
                  <Link href="#faq" className="text-white/40 hover:text-brand-primary transition-colors">
                    Central de Helpdesk
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/40 hover:text-brand-primary transition-colors">
                    Documentação Legal
                  </Link>
                </li>
                <li>
                  <Link href="/sign-in" className="text-white/40 hover:text-accent-purple transition-colors">
                    Acesso do Advogado
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-xl border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-lg text-[10px] text-white/20 font-black uppercase tracking-widest">
            <p>© 2026 TESTAMENTO FÁCIL. REGISTRADO NA OAB/SP E EM CONFORMIDADE COM LGPD & ISO 27001.</p>
            <div className="flex gap-xl">
              <Link href="#" className="hover:text-white transition-colors">
                Termos Operacionais
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Privacidade de Dados
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  )
}

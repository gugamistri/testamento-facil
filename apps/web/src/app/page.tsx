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
import { useEffect, useState } from 'react'


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background-pure">
      {/* Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${isScrolled
          ? 'bg-background-pure/80 backdrop-blur-md border-b border-neutral-light/30 py-md shadow-card'
          : 'bg-transparent py-lg'
          }`}
      >
        <div className="max-w-7xl mx-auto px-lg sm:px-xl lg:px-2xl">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center group">
              <img
                src="/images/logo_testamento-facil.png"
                alt="Testamento Fácil"
                className="h-10 w-auto group-hover:scale-105 transition-transform"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-xl">
              <Link
                href="#tech"
                className="text-[15px] font-medium text-neutral-medium hover:text-brand-primary transition-colors"
              >
                Tecnologia
              </Link>
              <Link
                href="#calculator"
                className="text-[15px] font-medium text-neutral-medium hover:text-brand-primary transition-colors"
              >
                Economia
              </Link>
              <Link
                href="#pricing"
                className="text-[15px] font-medium text-neutral-medium hover:text-brand-primary transition-colors"
              >
                Planos
              </Link>
              <div className="h-xs w-px bg-neutral-light" />

              <SignedOut>
                <SignInButton mode="modal">
                  <button
                    type="button"
                    className="text-[15px] font-semibold text-neutral-dark hover:text-brand-primary transition-colors"
                  >
                    Entrar
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button type="button" className="btn-primary !h-[44px] !px-lg !text-[14px]">
                    Começar Gratuitamente
                  </button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <Link
                  href="/dashboard"
                  className="text-[15px] font-bold text-brand-primary hover:text-brand-hover"
                >
                  Meu Painel
                </Link>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </nav>

            {/* Mobile Toggle */}
            <button
              type="button"
              className="md:hidden p-xs text-neutral-dark"
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
            className="fixed inset-x-0 top-[70px] bg-background-pure border-b border-neutral-light z-50 p-xl shadow-elevation md:hidden"
          >
            <nav className="flex flex-col gap-lg">
              <Link
                onClick={() => setMobileMenuOpen(false)}
                href="#tech"
                className="text-[18px] font-medium text-neutral-dark py-sm border-b border-background-subtle"
              >
                Tecnologia
              </Link>
              <Link
                onClick={() => setMobileMenuOpen(false)}
                href="#calculator"
                className="text-[18px] font-medium text-neutral-dark py-sm border-b border-background-subtle"
              >
                Economia
              </Link>
              <Link
                onClick={() => setMobileMenuOpen(false)}
                href="#pricing"
                className="text-[18px] font-medium text-neutral-dark py-sm border-b border-background-subtle"
              >
                Planos
              </Link>
              <SignedOut>
                <SignInButton mode="modal">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    type="button"
                    className="w-full text-center py-sm font-semibold text-neutral-dark"
                  >
                    Entrar
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    type="button"
                    className="btn-primary w-full"
                  >
                    Começar Gratuitamente
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/dashboard"
                  className="w-full bg-brand-pale text-brand-primary py-lg rounded-button font-bold text-center"
                >
                  Meu Painel
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
            <div className="bg-background rounded-[32px] border border-neutral-light/30 p-xl text-left hover:border-brand-primary/50 transition-all shadow-sm">
              <h3 className="text-lg font-bold text-neutral-dark mb-xs">Pessoal</h3>
              <p className="text-xs text-neutral-medium mb-lg">Ideal para quem possui poucos bens e até 3 beneficiários.</p>
              <div className="flex items-baseline gap-xs mb-lg">
                <span className="text-3xl font-black text-brand-primary">R$ 800</span>
                <span className="text-neutral-medium text-sm">/ano</span>
              </div>
              <ul className="space-y-sm mb-xl">
                {[
                  'Até 3 beneficiários',
                  'Cofre de senhas e documentos',
                  'Monitoramento automático',
                  'Suporte por e-mail'
                ].map(item => (
                  <li key={item} className="flex items-center gap-sm text-sm text-neutral-dark">
                    <Check className="w-4 h-4 text-functional-success shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <SignUpButton mode="modal">
                <button className="btn-secondary w-full !h-[44px]">Começar</button>
              </SignUpButton>
            </div>

            {/* Plano Patrimonial - Destacado */}
            <div className="bg-brand-primary rounded-[32px] p-xl text-left text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <div className="bg-brand-gold text-neutral-dark text-[10px] font-black uppercase px-md py-1 rounded-full w-fit mb-sm relative z-10">
                Mais Popular
              </div>
              <h3 className="text-lg font-bold mb-xs relative z-10 text-white">Patrimonial</h3>
              <p className="text-xs text-white/70 mb-lg relative z-10">Para quem possui imóveis, investimentos e múltiplos beneficiários.</p>
              <div className="flex items-baseline gap-xs mb-lg relative z-10">
                <span className="text-3xl font-black text-brand-goldLight">R$ 1.500</span>
                <span className="text-white/70 text-sm">/ano</span>
              </div>
              <ul className="space-y-sm mb-xl relative z-10">
                {[
                  'Até 10 beneficiários',
                  'Inventário completo de bens',
                  'Vídeo de validação forense',
                  'Suporte jurídico mensal',
                  'Notificação via WhatsApp'
                ].map(item => (
                  <li key={item} className="flex items-center gap-sm text-sm text-white/90">
                    <Check className="w-4 h-4 text-brand-goldLight shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <SignUpButton mode="modal">
                <button className="bg-white text-brand-primary w-full py-md rounded-button font-bold hover:bg-neutral-light transition-all">Escolher Plano</button>
              </SignUpButton>
            </div>

            {/* Plano Empresarial */}
            <div className="bg-neutral-dark rounded-[32px] p-xl text-left text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-primary/10 to-transparent pointer-events-none" />
              <h3 className="text-lg font-bold mb-xs relative z-10 text-white">Empresarial</h3>
              <p className="text-xs text-white/60 mb-lg relative z-10">Para holdings, quotas societárias e sucessão empresarial complexa.</p>
              <div className="flex items-baseline gap-xs mb-lg relative z-10">
                <span className="text-3xl font-black text-brand-gold">R$ 3.000</span>
                <span className="text-white/60 text-sm">/ano</span>
              </div>
              <ul className="space-y-sm mb-xl relative z-10">
                {[
                  'Beneficiários ilimitados',
                  'Assessoria jurídica dedicada',
                  'Gestão de quotas e ações',
                  'Integração com contador',
                  'SLA de atendimento prioritário'
                ].map(item => (
                  <li key={item} className="flex items-center gap-sm text-sm text-white/80">
                    <Check className="w-4 h-4 text-brand-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <SignUpButton mode="modal">
                <button className="bg-brand-gold text-neutral-dark w-full py-md rounded-button font-bold hover:brightness-110 transition-all">Falar com Consultor</button>
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
      <footer className="bg-background-dark text-neutral-light py-3xl px-lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2xl mb-2xl">
            <div className="md:col-span-2">
              <div className="mb-lg">
                <img
                  src="/images/logo_testamento-facil.png"
                  alt="Testamento Fácil"
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <p className="max-w-xs text-[14px] leading-relaxed text-neutral-medium">
                Transformando o planejamento sucessório em algo simples, seguro e acessível para
                todos os brasileiros através da tecnologia.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-lg uppercase text-[12px] tracking-widest">
                Produto
              </h4>
              <ul className="space-y-md text-[14px]">
                <li>
                  <Link href="#calculator" className="hover:text-brand-gold transition-colors">
                    Calculadora
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-brand-gold transition-colors">
                    Segurança
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-brand-gold transition-colors">
                    Preços
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-lg uppercase text-[12px] tracking-widest">
                Suporte
              </h4>
              <ul className="space-y-md text-[14px]">
                <li>
                  <Link href="#faq" className="hover:text-brand-gold transition-colors">
                    Dúvidas Frequentes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-brand-gold transition-colors">
                    Consultoria
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-brand-gold transition-colors">
                    Fale Conosco
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-lg uppercase text-[12px] tracking-widest">
                Para Profissionais
              </h4>
              <ul className="space-y-md text-[14px]">
                <li>
                  <Link href="/sign-in" className="hover:text-brand-gold transition-colors">
                    Área do Advogado
                  </Link>
                </li>
                <li>
                  <Link href="/sign-in" className="hover:text-brand-gold transition-colors">
                    Portal de Parceiros
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-xl border-t border-neutral-dark flex flex-col md:flex-row justify-between items-center gap-lg text-[12px] text-neutral-medium">
            <p>© 2026 Testamento Fácil. Registrado na OAB/SP e em conformidade com a LGPD.</p>
            <div className="flex gap-xl">
              <Link href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

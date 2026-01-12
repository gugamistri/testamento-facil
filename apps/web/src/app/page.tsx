'use client'

import { FAQSection } from '@/components/landing/faq-section'
import { HeroSection } from '@/components/landing/hero-section'
import { SavingsCalculator } from '@/components/landing/savings-calculator'
import { TestimonialsSection } from '@/components/landing/testimonials-section'
import { TrustBadges } from '@/components/landing/trust-badges'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
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
            <Link href="/" className="flex items-center gap-sm group">
              <div className="w-10 h-10 bg-brand-primary rounded-badge flex items-center justify-center shadow-button group-hover:scale-105 transition-transform">
                <span className="text-white font-black text-xl leading-none">T</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-neutral-dark">
                Testamento <span className="text-brand-primary">Fácil</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-xl">
              <Link
                href="#calculator"
                className="text-[15px] font-medium text-neutral-medium hover:text-brand-primary transition-colors"
              >
                Calculadora
              </Link>
              <Link
                href="#faq"
                className="text-[15px] font-medium text-neutral-medium hover:text-brand-primary transition-colors"
              >
                Dúvidas
              </Link>
              <Link
                href="/sign-in"
                className="text-[15px] font-medium text-neutral-medium hover:text-brand-primary transition-colors"
              >
                Acesso Profissional
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
                    Começar Agora
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
                href="#calculator"
                className="text-[18px] font-medium text-neutral-dark py-sm border-b border-background-subtle"
              >
                Calculadora
              </Link>
              <Link
                onClick={() => setMobileMenuOpen(false)}
                href="#faq"
                className="text-[18px] font-medium text-neutral-dark py-sm border-b border-background-subtle"
              >
                Dúvidas
              </Link>
              <Link
                onClick={() => setMobileMenuOpen(false)}
                href="/sign-in"
                className="text-[18px] font-medium text-neutral-dark py-sm border-b border-background-subtle"
              >
                Acesso Profissional
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
                    Começar Agora
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
              Criar Testamento
              <ArrowRight className="w-4 h-4 ml-xs" />
            </button>
          </SignUpButton>
        </motion.div>
      </div>

      <SavingsCalculator />
      <TestimonialsSection />
      <FAQSection />

      {/* Footer */}
      <footer className="bg-background-dark text-neutral-light py-3xl px-lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2xl mb-2xl">
            <div className="md:col-span-2">
              <div className="flex items-center gap-sm mb-lg">
                <div className="w-8 h-8 bg-brand-primary rounded-badge flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="text-xl font-bold text-white">Testamento Fácil</span>
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

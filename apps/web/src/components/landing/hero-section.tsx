'use client'

import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Lock, Shield, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const trustLogos = [
  { name: 'ICP-Brasil', icon: Shield, label: 'Validade Oficial' },
  { name: 'OAB Parceira', icon: Award, label: 'Suporte Jurídico' },
  { name: 'AWS Shield', icon: Lock, label: 'Segurança Total' },
  { name: '3k+ Protegidos', icon: Users, label: 'Clientes Ativos' },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background-pure">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-brand-pale/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-lg sm:px-xl lg:px-2xl relative z-10">
        <div className="pt-3xl pb-2xl lg:pt-[120px] lg:pb-3xl grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
          {/* Content Side */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-[32px] leading-[40px] font-extrabold text-neutral-dark sm:text-[48px] sm:leading-[56px] lg:text-[60px] lg:leading-[68px] tracking-tight">
                <span className="block">Seu patrimônio não precisa</span>
                <span className="text-brand-primary">se perder com você</span>
              </h1>
              <p className="mt-lg text-[17px] leading-[28px] text-neutral-medium sm:text-[20px] sm:leading-[32px] max-w-2xl mx-auto lg:mx-0">
                A forma mais moderna, segura e econômica de planejar sua sucessão. Validade jurídica
                total com 80% menos burocracia.
              </p>

              <div className="mt-xl flex flex-col sm:flex-row gap-md justify-center lg:justify-start">
                <SignedOut>
                  <SignUpButton mode="modal">
                    <button type="button" className="btn-premium group">
                      Começar Agora
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </SignUpButton>
                  <Link href="/schedule" className="btn-secondary">
                    Agendar Consultoria Gratuita
                  </Link>
                </SignedOut>
                <SignedIn>
                  <Link href="/wizard" className="btn-primary">
                    Acessar meu Painel
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/schedule" className="btn-secondary">
                    Agendar Consultoria
                  </Link>
                </SignedIn>
              </div>

              {/* Trust Indicators */}
              <motion.div
                className="mt-2xl flex flex-wrap justify-center lg:justify-start gap-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {trustLogos.map((logo) => (
                  <div key={logo.label} className="flex flex-col items-center lg:items-start group">
                    <div className="flex items-center gap-xs text-brand-primary mb-2xs">
                      <logo.icon className="w-5 h-5" />
                      <span className="text-[12px] font-bold uppercase tracking-widest text-neutral-medium/70">
                        {logo.name}
                      </span>
                    </div>
                    <p className="text-[14px] font-semibold text-neutral-dark">{logo.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Visual Side */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Main Visual Container */}
            <div className="relative z-20 aspect-video rounded-card overflow-hidden shadow-elevation border border-brand-goldLight bg-background">
              <div className="absolute inset-0 grid grid-cols-2">
                {/* Traditional Side */}
                <div className="relative group overflow-hidden border-r border-neutral-light/30">
                  <div className="absolute inset-0 bg-neutral-dark/40 z-10 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white font-bold text-sm tracking-widest uppercase">
                      Tradicional
                    </span>
                  </div>
                  <Image
                    src="/images/hero-traditional.png"
                    alt="Processo tradicional burocrático"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                {/* Digital Side */}
                <div className="relative group overflow-hidden">
                  <div className="absolute inset-0 bg-brand-primary/20 z-10 flex items-center justify-center backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="bg-brand-primary px-xl py-2xs rounded-full text-white font-bold text-xs tracking-widest uppercase shadow-lg">
                      Inovação Digital
                    </span>
                  </div>
                  <Image
                    src="/images/hero-digital.png"
                    alt="Processo digital moderno"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-xl -right-xl w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-xl -left-xl w-48 h-48 bg-brand-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

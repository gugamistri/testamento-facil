'use client'

import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background-pure pt-3xl pb-2xl lg:pt-[120px] lg:pb-3xl">
      {/* Background Decorative Emitters */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-lg sm:px-xl lg:px-2xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
          {/* Content Side */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-sm px-md py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-xl">
                <Shield className="w-4 h-4 text-brand-primary" />
                <span className="text-[12px] font-bold text-neutral-dark/60 tracking-widest uppercase">
                  O Ecossistema Completo de Sucessão Digital
                </span>
              </div>
              <h1 className="text-[36px] leading-[44px] font-black text-neutral-dark sm:text-[54px] sm:leading-[62px] lg:text-[72px] lg:leading-[80px] tracking-tight">
                <span className="block">Seu Legado,</span>
                <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">Juridicamente Blindado.</span>
              </h1>
              <p className="mt-lg text-[18px] leading-[30px] text-neutral-medium sm:text-[21px] sm:leading-[34px] max-w-2xl mx-auto lg:mx-0">
                A plataforma que une segurança tecnológica e validade jurídica. Conecte-se com advogados especializados e garanta que sua vontade seja lei.
              </p>

              <div className="mt-xl flex flex-col sm:flex-row items-center gap-lg justify-center lg:justify-start">
                <SignedOut>
                  <SignUpButton mode="modal">
                    <button type="button" className="btn-primary group w-full sm:w-auto">
                      Criar Meu Testamento
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </SignUpButton>
                  <div className="flex gap-4">
                    <Link href="/sign-in" className="text-sm font-bold text-neutral-dark hover:text-brand-primary transition-colors border-b border-transparent hover:border-brand-primary pb-0.5">
                      Sou Advogado
                    </Link>
                    <Link href="/sign-in" className="text-sm font-bold text-neutral-dark hover:text-brand-primary transition-colors border-b border-transparent hover:border-brand-primary pb-0.5">
                      Sou Parceiro
                    </Link>
                  </div>
                </SignedOut>
                <SignedIn>
                  <Link href="/dashboard" className="btn-primary">
                    Acessar Meu Painel
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </SignedIn>
              </div>
            </motion.div>
          </div>

          {/* Visual Side - Security Vault Concept */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-20 aspect-video rounded-[32px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 bg-background-subtle p-px group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="relative h-full w-full rounded-[31px] overflow-hidden bg-background-pure flex items-center justify-center p-xl">
                <div className="text-center">
                  <div className="relative mb-xl inline-block">
                    <div className="absolute inset-0 bg-brand-primary/20 blur-2xl rounded-full animate-pulse" />
                    <Shield className="w-24 h-24 text-brand-primary relative z-10" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-md">Privacidade e Sigilo Garantidos</h3>
                  <div className="flex justify-center gap-sm">
                    {['CONFIÁVEL', 'SEGURO', 'PRIVADO'].map(tag => (
                      <span key={tag} className="tech-mono px-md py-1 bg-white/5 rounded-md text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floaties */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-xl -right-md z-30 bg-background-subtle/80 backdrop-blur-xl border border-white/10 p-lg rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-md">
                <div className="w-8 h-8 rounded-full bg-functional-success/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-functional-success" />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Proteção Ativa</p>
                  <p className="text-[14px] text-white font-bold">Monitorado 24/7</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

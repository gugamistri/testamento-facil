'use client'

import { useWizardStore } from '@/store/useWizardStore'
import { motion } from 'framer-motion'
import { ChevronRight, Home, Lock, Shield, User, Video } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const steps = [
  { id: 1, label: 'Dados Pessoais', icon: User },
  { id: 2, label: 'Imóveis', icon: Home },
  { id: 3, label: 'Financeiro', icon: Shield },
  { id: 4, label: 'Ativos Digitais', icon: Lock },
  { id: 5, label: 'Beneficiários', icon: Shield },
  { id: 6, label: 'Revisão', icon: Shield },
  { id: 7, label: 'Agendamento', icon: Video },
]

export function WizardLayout({ children }: { children: React.ReactNode }) {
  const { currentStep } = useWizardStore()

  return (
    <div className="min-h-screen bg-background-subtle">
      {/* Header */}
      <header className="bg-background-pure border-b border-neutral-light/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-lg sm:px-xl lg:px-2xl h-2xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-sm group">
            <div className="w-8 h-8 bg-brand-primary rounded-badge flex items-center justify-center shadow-button group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-sm leading-none">T</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-neutral-dark">
              Testamento <span className="text-brand-primary">Fácil</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-md text-neutral-medium text-[14px]">
            <span>
              Passo {currentStep} de {steps.length}
            </span>
            <div className="w-48 h-xs bg-neutral-light/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-brand-primary"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <div className="flex items-center gap-md">
            <button
              type="button"
              className="text-[14px] font-medium text-neutral-medium hover:text-neutral-dark transition-colors"
            >
              Salvar e Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-lg sm:px-xl lg:px-2xl py-xl lg:py-2xl">
        <div className="flex flex-col lg:flex-row gap-xl">
          {/* Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block w-72 shrink-0">
            <nav className="space-y-sm">
              {steps.map((step) => {
                const isActive = step.id === currentStep
                const isCompleted = step.id < currentStep

                return (
                  <div
                    key={step.id}
                    className={`flex items-center gap-md p-md rounded-button transition-all ${isActive
                      ? 'bg-brand-primary text-white shadow-button'
                      : isCompleted
                        ? 'text-brand-primary bg-brand-pale/50'
                        : 'text-neutral-medium hover:bg-neutral-light/10'
                      }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-badge flex items-center justify-center ${isActive
                        ? 'bg-background/20'
                        : isCompleted
                          ? 'bg-brand-primary/10'
                          : 'bg-neutral-light/20'
                        }`}
                    >
                      <step.icon className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-sm">{step.label}</span>
                    {isCompleted && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-brand-primary" />
                    )}
                  </div>
                )
              })}
            </nav>

            <div className="mt-2xl p-lg bg-background-pure rounded-card border border-neutral-light/30 shadow-card">
              <h4 className="text-[14px] font-bold text-neutral-dark mb-sm uppercase tracking-widest flex items-center gap-sm">
                <Shield className="w-4 h-4 text-brand-primary" />
                Segurança Ativa
              </h4>
              <p className="text-[12px] text-neutral-medium leading-relaxed">
                Seus dados estão sendo salvos localmente e protegidos por criptografia de ponta a
                ponta.
              </p>
            </div>
          </aside>

          {/* Step Content Area */}
          <div className="flex-1">
            <div className="bg-background-pure rounded-card shadow-card border border-neutral-light/30 min-h-[600px] flex flex-col">
              {children}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Step Indicator Footer */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background-pure border-t border-neutral-light/30 p-md flex items-center justify-between z-50">
        <div className="flex items-center gap-sm text-neutral-dark font-bold text-sm">
          <span className="flex items-center justify-center w-6 h-6 bg-brand-primary text-white text-[10px] rounded-full">
            {currentStep}
          </span>
          {steps[currentStep - 1].label}
        </div>
        <div className="text-[12px] text-neutral-medium">
          Passo {currentStep} de {steps.length}
        </div>
      </div>
    </div>
  )
}

'use client'

import { useWizardStore } from '@/store/useWizardStore'
import { motion } from 'framer-motion'
import { ChevronRight, Home, Lock, Shield, User, Video, Check, PenTool } from 'lucide-react'
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
  { id: 8, label: 'Conclusão', icon: Check },
  { id: 9, label: 'Assinatura', icon: PenTool },
]

export function WizardLayout({ children }: { children: React.ReactNode }) {
  const { currentStep, setStep } = useWizardStore()

  return (
    <div className="h-full w-full">
      {/* Header */}
      {/* Header Removed for Dashboard Integration */}

      <main className="max-w-7xl mx-auto px-lg sm:px-xl lg:px-2xl py-xl lg:py-2xl">
        <div className="flex flex-col lg:flex-row gap-xl">
          {/* Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block w-72 shrink-0">
            <nav className="space-y-sm">
              {steps.map((step) => {
                const isActive = step.id === currentStep
                const isCompleted = step.id < currentStep
                // Allow navigation to any previous step or current step
                const isClickable = step.id <= currentStep

                return (
                  <button
                    key={step.id}
                    onClick={() => isClickable && setStep(step.id)}
                    type="button"
                    disabled={!isClickable}
                    className={`flex items-center gap-md p-md rounded-button transition-all w-full text-left ${isActive
                      ? 'bg-brand-primary text-white shadow-button'
                      : isCompleted
                        ? 'text-brand-primary bg-brand-pale/50 hover:bg-brand-pale/70 cursor-pointer'
                        : 'text-neutral-medium opacity-60 cursor-not-allowed'
                      }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-badge flex items-center justify-center shrink-0 ${isActive
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
                  </button>
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

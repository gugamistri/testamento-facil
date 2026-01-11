'use client'

import { WizardLayout } from '@/components/wizard/WizardLayout'
import { Step1PersonalData } from '@/components/wizard/steps/Step1PersonalData'
import { Step2RealEstate } from '@/components/wizard/steps/Step2RealEstate'
import { Step3FinancialAssets } from '@/components/wizard/steps/Step3FinancialAssets'
import { Step4DigitalAssets } from '@/components/wizard/steps/Step4DigitalAssets'
import { Step5Beneficiaries } from '@/components/wizard/steps/Step5Beneficiaries'
import { Step6Review } from '@/components/wizard/steps/Step6Review'
import { Step7VideoScheduling } from '@/components/wizard/steps/Step7VideoScheduling'
import { Step9DigitalSignature } from '@/components/wizard/steps/Step9DigitalSignature'
import { useWizardStore } from '@/store/useWizardStore'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, Home, Lock, Shield, User, Video, Edit3 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function WizardDashboardPage() {
    const { currentStep } = useWizardStore()

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1PersonalData />
            case 2:
                return <Step2RealEstate />
            case 3:
                return <Step3FinancialAssets />
            case 4:
                return <Step4DigitalAssets />
            case 5:
                return <Step5Beneficiaries />
            case 6:
                return <Step6Review />
            case 7:
                return <Step7VideoScheduling />
            case 8:
                return (
                    <div className="flex flex-col items-center justify-center h-full text-center p-xl">
                        <div className="w-20 h-20 bg-functional-success/10 text-functional-success rounded-full flex items-center justify-center mb-xl">
                            <Check className="w-10 h-10" />
                        </div>
                        <h2 className="text-[28px] font-bold text-neutral-dark mb-md">Agendamento Realizado!</h2>
                        <p className="text-neutral-medium max-w-md mx-auto mb-2xl">
                            Tudo pronto para a sua validação forense. Enviamos uma confirmação para o seu e-mail com os próximos passos.
                        </p>
                        <div className="flex flex-col gap-md">
                            <Link href="/wizard/session">
                                <button className="btn-primary" type="button">
                                    Iniciar Validação por Vídeo Agora (DEMO)
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <button
                                onClick={() => useWizardStore.getState().setStep(9)}
                                className="text-sm font-semibold text-brand-primary hover:underline"
                            >
                                Pular para Assinatura (Apenas para Teste)
                            </button>
                        </div>
                    </div>
                )
            case 9:
                return <Step9DigitalSignature />
            default:
                return <div className="p-xl text-center text-neutral-medium">Em breve: Passo {currentStep}</div>
        }
    }

    return (
        <WizardLayout>
            <div className="flex-1 p-4 sm:p-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                    >
                        {renderStep()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </WizardLayout>
    )
}

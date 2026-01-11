'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, Heart, Calendar, Clock, ArrowRight, Lock, CheckCircle2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useWizardStore } from '@/store/useWizardStore'
import { useParams, useRouter } from 'next/navigation'

type CheckInStep = 'VERIFY' | 'SUCCESS'

export default function CheckInPage() {
    const params = useParams()
    const router = useRouter()
    const [step, setStep] = useState<CheckInStep>('VERIFY')
    const [loading, setLoading] = useState(false)

    const handleConfirm = () => {
        setLoading(true)
        // Simulate API call
        setTimeout(() => {
            setLoading(false)
            setStep('SUCCESS')
        }, 2000)
    }

    return (
        <div className="min-h-screen bg-background-subtle flex items-center justify-center p-xl font-sans">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--brand-primary)_0%,_transparent_50%)] opacity-5" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-lg bg-background rounded-[40px] p-2xl border border-neutral-light/20 shadow-premium relative z-10"
            >
                <div className="flex justify-center mb-xl">
                    <div className="w-16 h-16 bg-brand-primary rounded-badge flex items-center justify-center text-white shadow-lg">
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {step === 'VERIFY' ? (
                        <motion.div
                            key="verify"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="text-center space-y-xl"
                        >
                            <div className="space-y-sm">
                                <h1 className="text-3xl font-bold text-neutral-dark tracking-tighter">Prova de Vida</h1>
                                <p className="text-neutral-medium leading-relaxed">
                                    Detector de atividade periódico para o seu <span className="text-brand-primary font-bold">Testamento Fácil</span>.
                                    Sua segurança é nossa prioridade.
                                </p>
                            </div>

                            <div className="p-xl bg-background-subtle rounded-3xl border border-neutral-light/20 text-left space-y-md">
                                <div className="flex items-center gap-md">
                                    <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center border border-neutral-light/20">
                                        <Lock className="w-5 h-5 text-neutral-medium" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-neutral-medium uppercase tracking-widest">Token de Segurança</p>
                                        <p className="text-sm font-mono text-neutral-dark truncate">{params.token}</p>
                                    </div>
                                </div>
                                <div className="h-px bg-neutral-light/20" />
                                <p className="text-[13px] text-neutral-medium italic">
                                    Ao clicar no botão abaixo, você registra sua atividade no sistema e reseta o cronômetro para os próximos 6 meses.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={handleConfirm}
                                disabled={loading}
                                className="w-full h-16 bg-brand-primary text-white rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-button hover:bg-brand-gold active:scale-95 transition-all flex items-center justify-center gap-md"
                            >
                                {loading ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.div>
                                ) : (
                                    <>
                                        Estou Ativo & Operacional
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center space-y-xl"
                        >
                            <div className="flex justify-center">
                                <div className="relative">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-24 h-24 bg-functional-success rounded-full flex items-center justify-center text-white"
                                    >
                                        <CheckCircle2 className="w-12 h-12" />
                                    </motion.div>
                                    <motion.div
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute inset-0 bg-functional-success rounded-full -z-10"
                                    />
                                </div>
                            </div>

                            <div className="space-y-sm">
                                <h2 className="text-2xl font-bold text-neutral-dark">Atividade Registrada!</h2>
                                <p className="text-neutral-medium">
                                    Sua proteção permanece ativa e seu testamento garantido.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-md py-lg">
                                <div className="text-center p-md bg-neutral-light/10 rounded-2xl">
                                    <p className="text-[10px] font-black text-neutral-medium uppercase tracking-widest mb-1">Último Registro</p>
                                    <p className="text-sm font-bold text-neutral-dark">Agora pouco</p>
                                </div>
                                <div className="text-center p-md bg-neutral-light/10 rounded-2xl">
                                    <p className="text-[10px] font-black text-neutral-medium uppercase tracking-widest mb-1">Próximo Check-in</p>
                                    <p className="text-sm font-bold text-neutral-dark">15/07/2026</p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => router.push('/dashboard')}
                                className="w-full h-14 bg-neutral-dark text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-neutral-dark/90 transition-all"
                            >
                                Voltar para o Dashboard
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                <p className="text-center text-[10px] text-neutral-medium mt-2xl font-black uppercase tracking-[0.3em]">
                    Protocolo TD-LS-2024
                </p>
            </motion.div>
        </div>
    )
}

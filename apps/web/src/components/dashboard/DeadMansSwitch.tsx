'use client'

import { motion } from 'framer-motion'
import { Calendar, ShieldCheck, AlertCircle, ArrowRight, RefreshCw, Bell } from 'lucide-react'
import { useWizardStore } from '@/store/useWizardStore'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function DeadMansSwitch() {
    const { monitoring } = useWizardStore()
    const [isChecking, setIsChecking] = useState(false)
    const [done, setDone] = useState(false)

    if (!monitoring) return null

    const handleManualCheckIn = () => {
        setIsChecking(true)
        setTimeout(() => {
            setIsChecking(false)
            setDone(true)
            setTimeout(() => setDone(false), 3000)
        }, 2000)
    }

    const daysRemaining = 45 // Mocked for demo

    return (
        <div className="bg-neutral-dark rounded-[32px] p-2xl text-white relative overflow-hidden shadow-premium group">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/10 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-2xl items-center">
                <div className="flex-1 space-y-lg">
                    <div className="flex items-center gap-sm">
                        <div className="w-10 h-10 bg-background/10 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/10">
                            <ShieldCheck className="w-5 h-5 text-brand-gold" />
                        </div>
                        <h3 className="text-xl font-bold italic tracking-tight">Círculo de Confiança (Dead Man's Switch)</h3>
                    </div>

                    <p className="text-white/60 text-sm leading-relaxed max-w-md">
                        Como contingência adicional, solicitamos uma confirmação manual a cada 6 meses.
                        Isso garante que seu testamento permaneça sob seu controle total.
                    </p>

                    <div className="flex flex-wrap gap-md pt-sm">
                        <div className="px-xl py-md bg-background/5 border border-white/10 rounded-2xl">
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Status do Ciclo</p>
                            <div className="flex items-center gap-xs">
                                <p className="text-lg font-bold">45 dias</p>
                                <span className="text-[10px] text-brand-gold font-bold">Restantes</span>
                            </div>
                        </div>

                        <div className="px-xl py-md bg-background/5 border border-white/10 rounded-2xl">
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Próxima Notificação</p>
                            <p className="text-lg font-bold">15/09/2024</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-md shrink-0 w-full md:w-auto">
                    <button
                        type="button"
                        onClick={handleManualCheckIn}
                        disabled={isChecking || done}
                        className={cn(
                            "h-14 px-xl rounded-full font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-md shadow-lg",
                            done
                                ? "bg-functional-success text-white"
                                : "bg-brand-primary text-white hover:bg-brand-gold hover:scale-105 active:scale-95"
                        )}
                    >
                        {isChecking ? (
                            <>
                                <RefreshCw className="w-4 h-4 animate-spin" />
                                Registrando...
                            </>
                        ) : done ? (
                            <>
                                <ShieldCheck className="w-4 h-4" />
                                Vida Confirmada
                            </>
                        ) : (
                            <>
                                Confirmar Vida Agora
                                <ArrowRight className="w-4 h-4" />
                            </>
                        )}
                    </button>

                    <button type="button" className="h-14 px-xl bg-background/10 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-background/20 transition-all border border-white/10 flex items-center justify-center gap-md">
                        <Bell className="w-4 h-4" />
                        Gerenciar Lembretes
                    </button>
                </div>
            </div>

            {/* Background Decorative Radial Gradient */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-brand-primary/30 transition-all duration-700" />
        </div>
    )
}

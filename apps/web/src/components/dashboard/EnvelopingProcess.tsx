'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Lock, Share2, Binary, Database, Cpu, Globe, Key, FileCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

interface EnvelopingProcessProps {
    onComplete: () => void
}

export function EnvelopingProcess({ onComplete }: EnvelopingProcessProps) {
    const [stage, setStage] = useState(0)
    const stages = [
        { icon: <FileCheck />, label: 'Consolidando Documento Assinado', sub: 'Verificação completa' },
        { icon: <Cpu />, label: 'Criando Selo de Autenticidade', sub: 'Integridade garantida' },
        { icon: <Key />, label: 'Ativando Proteção Dividida', sub: 'Dividindo em 3 partes seguras' },
        { icon: <Globe />, label: 'Distribuindo para Custódia', sub: 'Cofre + Advocacia + Monitor' },
        { icon: <Database />, label: 'Finalizando Registro Permanente', sub: 'Registro imutável ativado' },
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setStage((prev) => {
                if (prev >= stages.length - 1) {
                    clearInterval(timer)
                    setTimeout(onComplete, 1000)
                    return prev
                }
                return prev + 1
            })
        }, 2000)

        return () => clearInterval(timer)
    }, [onComplete, stages.length])

    return (
        <div className="fixed inset-0 z-[100] bg-neutral-dark flex flex-col items-center justify-center p-xl overflow-hidden text-white font-sans">
            {/* Background Grid/Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--brand-primary)_0%,_transparent_70%)]" />
                <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            </div>

            <div className="relative w-full max-w-lg">
                {/* Central Orb Animation */}
                <div className="flex justify-center mb-4xl relative">
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: 360
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                        className="w-48 h-48 rounded-full border-2 border-dashed border-brand-primary/30 flex items-center justify-center"
                    >
                        <motion.div
                            animate={{ scale: [0.9, 1.05, 0.9] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="w-32 h-32 bg-brand-primary/20 rounded-full blur-3xl absolute"
                        />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={stage}
                                initial={{ scale: 0, opacity: 0, rotate: -45 }}
                                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                exit={{ scale: 1.5, opacity: 0, rotate: 45 }}
                                className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-gold rounded-badge shadow-2xl flex items-center justify-center relative z-10"
                            >
                                {React.cloneElement(stages[stage].icon as React.ReactElement<any>, { className: 'w-10 h-10 text-white' })}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Orbital Fragments */}
                    {stage >= 2 && (
                        <div className="absolute inset-0 flex items-center justify-center scale-125">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0, x: 0 }}
                                    animate={{ scale: 1, x: i === 0 ? -120 : i === 1 ? 120 : 0, y: i === 2 ? 120 : 0 }}
                                    className="absolute w-10 h-10 bg-background/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center shadow-lg"
                                >
                                    <Share2 className="w-5 h-5 text-brand-gold" />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Text Flow */}
                <div className="text-center space-y-md">
                    <h2 className="text-2xl font-black uppercase tracking-[0.2em] italic">
                        Ativando Proteção
                    </h2>

                    <div className="h-20 flex flex-col items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={stage}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-center"
                            >
                                <p className="text-brand-gold font-bold text-lg mb-1">{stages[stage].label}</p>
                                <p className="text-white/40 text-[12px] font-black uppercase tracking-widest">{stages[stage].sub}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-background/5 rounded-full overflow-hidden mt-xl relative">
                        <motion.div
                            initial={{ width: '0%' }}
                            animate={{ width: `${((stage + 1) / stages.length) * 100}%` }}
                            className="h-full bg-gradient-to-r from-brand-primary to-brand-gold relative z-10"
                        />
                        <div className="absolute inset-0 bg-background/5" />
                    </div>
                </div>

                <p className="text-center text-[10px] text-white/20 mt-2xl font-black uppercase tracking-[0.3em]">
                    Segurança de Nível Bancário Ativa
                </p>
            </div>
        </div>
    )
}

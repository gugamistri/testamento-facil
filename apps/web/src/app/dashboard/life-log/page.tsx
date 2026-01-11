'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Activity, Check, Clock, Calendar, Bell, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface LifeLogEntry {
    id: string
    date: string
    time: string
    method: 'email' | 'sms' | 'manual' | 'automatic'
    status: 'confirmed' | 'pending' | 'expired'
    ip?: string
}

const mockEntries: LifeLogEntry[] = [
    { id: '1', date: '11/01/2026', time: '03:42', method: 'automatic', status: 'confirmed' },
    { id: '2', date: '10/01/2026', time: '03:42', method: 'automatic', status: 'confirmed' },
    { id: '3', date: '09/01/2026', time: '03:42', method: 'automatic', status: 'confirmed' },
    { id: '4', date: '15/07/2025', time: '14:32', method: 'email', status: 'confirmed', ip: '177.xxx.xxx.xxx' },
    { id: '5', date: '15/01/2025', time: '10:15', method: 'manual', status: 'confirmed', ip: '177.xxx.xxx.xxx' },
]

const methodLabels = {
    email: { label: 'Via Email', icon: Bell },
    sms: { label: 'Via SMS', icon: Bell },
    manual: { label: 'Check-in Manual', icon: RefreshCw },
    automatic: { label: 'Consulta API', icon: Activity },
}

export default function LifeLogPage() {
    const [entries] = useState<LifeLogEntry[]>(mockEntries)
    const [isChecking, setIsChecking] = useState(false)
    const [done, setDone] = useState(false)

    const nextCheckIn = new Date()
    nextCheckIn.setMonth(nextCheckIn.getMonth() + 6)

    const handleManualCheckIn = () => {
        setIsChecking(true)
        setTimeout(() => {
            setIsChecking(false)
            setDone(true)
            setTimeout(() => setDone(false), 3000)
        }, 2000)
    }

    return (
        <div className="min-h-screen bg-background-subtle p-lg sm:p-2xl">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-2xl">
                    <div className="flex items-center gap-lg">
                        <Link href="/dashboard" className="p-sm bg-background rounded-xl border border-neutral-light/20 hover:border-brand-primary transition-colors">
                            <ArrowLeft className="w-5 h-5 text-neutral-medium" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-neutral-dark">Histórico de Vida</h1>
                            <p className="text-sm text-neutral-medium">Registro de todas as confirmações de atividade</p>
                        </div>
                    </div>
                </div>

                {/* Status Card */}
                <div className="bg-background rounded-[32px] border border-neutral-light/20 p-xl mb-2xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-xl">
                        <div className="flex items-center gap-lg">
                            <div className="w-16 h-16 bg-functional-success/10 rounded-2xl flex items-center justify-center">
                                <Activity className="w-8 h-8 text-functional-success" />
                            </div>
                            <div>
                                <div className="flex items-center gap-sm mb-xs">
                                    <span className="w-3 h-3 bg-functional-success rounded-full animate-pulse" />
                                    <span className="text-sm font-bold text-functional-success uppercase tracking-widest">Ativo</span>
                                </div>
                                <p className="text-neutral-dark font-semibold">Monitoramento funcionando normalmente</p>
                                <p className="text-sm text-neutral-medium">Última verificação: Hoje às 03:42</p>
                            </div>
                        </div>
                        <div className="sm:text-right">
                            <p className="text-xs font-black uppercase tracking-widest text-neutral-medium mb-xs">Próxima Confirmação</p>
                            <p className="text-lg font-bold text-brand-primary flex items-center gap-sm sm:justify-end">
                                <Calendar className="w-5 h-5" />
                                {nextCheckIn.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                            </p>
                        </div>
                    </div>

                    <div className="mt-xl pt-xl border-t border-neutral-light/20">
                        <button
                            type="button"
                            onClick={handleManualCheckIn}
                            disabled={isChecking || done}
                            className={cn(
                                "w-full sm:w-auto px-xl py-md rounded-2xl font-bold transition-all flex items-center justify-center gap-sm",
                                done
                                    ? "bg-functional-success text-white"
                                    : "bg-brand-primary text-white hover:bg-brand-hover"
                            )}
                        >
                            {isChecking ? (
                                <>
                                    <RefreshCw className="w-5 h-5 animate-spin" />
                                    Registrando...
                                </>
                            ) : done ? (
                                <>
                                    <Check className="w-5 h-5" />
                                    Vida Confirmada!
                                </>
                            ) : (
                                <>
                                    <RefreshCw className="w-5 h-5" />
                                    Confirmar Vida Agora
                                </>
                            )}
                        </button>
                        <p className="text-xs text-neutral-medium mt-sm">
                            Use quando for viajar ou ficar sem acesso à internet por longos períodos.
                        </p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="bg-background rounded-[32px] border border-neutral-light/20 p-xl">
                    <h2 className="text-lg font-bold text-neutral-dark mb-xl">Histórico de Confirmações</h2>

                    <div className="space-y-md">
                        {entries.map((entry, index) => {
                            const MethodIcon = methodLabels[entry.method].icon
                            return (
                                <motion.div
                                    key={entry.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-start gap-lg"
                                >
                                    <div className="flex flex-col items-center">
                                        <div className={cn(
                                            "w-10 h-10 rounded-xl flex items-center justify-center",
                                            entry.status === 'confirmed' ? "bg-functional-success/10" : "bg-neutral-light/20"
                                        )}>
                                            {entry.status === 'confirmed' ? (
                                                <Check className="w-5 h-5 text-functional-success" />
                                            ) : (
                                                <Clock className="w-5 h-5 text-neutral-medium" />
                                            )}
                                        </div>
                                        {index < entries.length - 1 && (
                                            <div className="w-px h-8 bg-neutral-light/30 mt-sm" />
                                        )}
                                    </div>
                                    <div className="flex-1 pb-lg">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-semibold text-neutral-dark">{entry.date}</p>
                                                <p className="text-sm text-neutral-medium flex items-center gap-xs">
                                                    <MethodIcon className="w-3 h-3" />
                                                    {methodLabels[entry.method].label} às {entry.time}
                                                </p>
                                            </div>
                                            <span className="px-md py-xs bg-functional-success/10 text-functional-success text-xs font-bold rounded-full">
                                                ✓ Confirmado
                                            </span>
                                        </div>
                                        {entry.ip && (
                                            <p className="text-xs text-neutral-light mt-xs">IP: {entry.ip}</p>
                                        )}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    <div className="mt-xl pt-xl border-t border-neutral-light/20 text-center">
                        <p className="text-sm text-neutral-medium">
                            Total de {entries.length} verificações desde a ativação • 0 alertas
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

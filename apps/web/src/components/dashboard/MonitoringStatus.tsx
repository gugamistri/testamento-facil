'use client'

import { motion } from 'framer-motion'
import { Activity, Shield, CheckCircle2, Search, Clock, Smartphone, Mail, Globe } from 'lucide-react'
import { useWizardStore } from '@/store/useWizardStore'
import { cn } from '@/lib/utils'

export function MonitoringStatus() {
    const { monitoring } = useWizardStore()

    if (!monitoring) return null

    const logs = [
        { source: 'CRC Nacional', time: 'Hoje, 03:42', status: 'OK', color: 'text-functional-success' },
        { source: 'Serasa Experian', time: 'Hoje, 03:41', status: 'OK', color: 'text-functional-success' },
        { source: 'Portal Transparência', time: 'Ontem, 03:45', status: 'OK', color: 'text-functional-success' },
    ]

    return (
        <div className="bg-background rounded-[32px] p-2xl border border-neutral-light/20 shadow-premium overflow-hidden relative">
            <div className="flex flex-col md:flex-row gap-2xl">
                <div className="flex-1 space-y-xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-md">
                            <div className="w-12 h-12 bg-functional-success/10 rounded-xl flex items-center justify-center">
                                <Activity className="w-6 h-6 text-functional-success" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-dark">Monitoramento de Vida</h3>
                                <div className="flex items-center gap-xs mt-1">
                                    <span className="flex h-2 w-2 rounded-full bg-functional-success animate-pulse" />
                                    <span className="text-[11px] font-black text-functional-success uppercase tracking-widest">Ativo e Protegido</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-neutral-medium text-sm leading-relaxed max-w-md">
                        Consultamos diariamente as bases nacionais de óbito para garantir que seu testamento seja
                        aberto no momento certo, sem depender de ação humana imediata.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
                        <div className="p-xl bg-neutral-light/10 rounded-[20px] border border-neutral-light/20">
                            <div className="flex items-center gap-sm mb-xs text-neutral-medium">
                                <Clock className="w-4 h-4" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Última Checagem</span>
                            </div>
                            <p className="text-lg font-bold text-neutral-dark">Hoje, 03:42</p>
                        </div>
                        <div className="p-xl bg-neutral-light/10 rounded-[20px] border border-neutral-light/20">
                            <div className="flex items-center gap-sm mb-xs text-neutral-medium">
                                <Globe className="w-4 h-4" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Fontes Ativas</span>
                            </div>
                            <p className="text-lg font-bold text-neutral-dark">3 Bases Oficiais</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-80 space-y-md">
                    <h4 className="text-[12px] font-black text-neutral-medium uppercase tracking-[0.2em] mb-md">Log de Consultas</h4>
                    <div className="space-y-sm">
                        {logs.map((log, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-md bg-background border border-neutral-light/20 rounded-xl flex items-center justify-between group hover:border-brand-primary/20 transition-all"
                            >
                                <div className="flex items-center gap-md">
                                    <div className="w-8 h-8 rounded-lg bg-neutral-light/10 flex items-center justify-center text-neutral-medium group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-all">
                                        <Search className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-neutral-dark">{log.source}</p>
                                        <p className="text-[10px] text-neutral-medium">{log.time}</p>
                                    </div>
                                </div>
                                <div className={cn("text-[10px] font-black uppercase", log.color)}>
                                    {log.status}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <button type="button" className="w-full py-md text-[11px] font-black text-brand-primary uppercase tracking-widest hover:bg-brand-primary/5 rounded-xl transition-all border border-dashed border-brand-primary/20">
                        Ver Relatório Detalhado
                    </button>
                </div>
            </div>

            {/* Grid Pattern Background */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none">
                <Activity className="w-full h-full text-neutral-dark" />
            </div>
        </div>
    )
}

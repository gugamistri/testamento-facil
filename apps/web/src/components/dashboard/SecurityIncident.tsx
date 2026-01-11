'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldAlert, Mail, Smartphone, Globe, UserCheck, FileSearch, XCircle, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export function SecurityIncident() {
    const [active, setActive] = useState(false)

    const layers = [
        { title: 'Trigger de Óbito', desc: 'API Serasa retornou status: Óbito', status: 'completed', icon: <ShieldAlert /> },
        { title: 'Contato de Emergência', desc: 'Email e SMS enviados. Sem resposta em 48h.', status: 'completed', icon: <Mail /> },
        { title: 'Segunda Fonte', desc: 'Sincronização com CRC Nacional confirmada.', status: 'completed', icon: <Globe /> },
        { title: 'Validação Humana', desc: 'Aguardando aprovação do Advogado Master.', status: 'pending', icon: <UserCheck /> },
    ]

    if (!active) {
        return (
            <button
                type="button"
                onClick={() => setActive(true)}
                className="w-full p-xl bg-functional-warning/5 border border-dashed border-functional-warning/20 rounded-[28px] flex items-center justify-between group hover:bg-functional-warning/10 transition-all font-sans"
            >
                <div className="flex items-center gap-md">
                    <div className="w-10 h-10 bg-functional-warning/20 rounded-full flex items-center justify-center text-functional-warning">
                        <ShieldAlert className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                        <p className="text-sm font-bold text-neutral-dark">Simular Incidente de Segurança</p>
                        <p className="text-[12px] text-neutral-medium">Veja como o sistema reage a um trigger de óbito</p>
                    </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-neutral-light group-hover:text-functional-warning transition-colors" />
            </button>
        )
    }

    return (
        <div className="bg-background rounded-[32px] p-2xl border-2 border-functional-warning shadow-2xl relative overflow-hidden font-sans">
            <div className="absolute top-0 right-0 p-lg">
                <button type="button" onClick={() => setActive(false)} className="text-neutral-medium hover:text-neutral-dark">
                    <XCircle className="w-6 h-6" />
                </button>
            </div>

            <div className="flex items-center gap-md mb-2xl">
                <div className="w-14 h-14 bg-functional-warning/10 rounded-2xl flex items-center justify-center text-functional-warning animate-pulse">
                    <ShieldAlert className="w-7 h-7" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-neutral-dark tracking-tight">Protocolo de Validação em Camadas</h3>
                    <p className="text-functional-warning text-[10px] font-black uppercase tracking-[0.2em]">Incidente ID: #TD-9821 - Em Curso</p>
                </div>
            </div>

            <div className="space-y-md relative">
                {/* Vertical line connecting steps */}
                <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-neutral-light/20" />

                {layers.map((layer, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex gap-xl relative z-10"
                    >
                        <div className={cn(
                            "w-14 h-14 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-sm transition-all",
                            layer.status === 'completed' ? "bg-functional-success text-white" : "bg-background-subtle text-neutral-medium animate-pulse"
                        )}>
                            {React.cloneElement(layer.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
                        </div>
                        <div className="pt-2">
                            <h4 className={cn("font-bold text-base", layer.status === 'completed' ? "text-neutral-dark" : "text-neutral-medium")}>
                                {layer.title}
                            </h4>
                            <p className="text-sm text-neutral-medium">{layer.desc}</p>
                        </div>
                        {layer.status === 'completed' && (
                            <div className="ml-auto pt-3">
                                <CheckCircle2 className="w-5 h-5 text-functional-success" />
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            <div className="mt-2xl p-xl bg-background-subtle rounded-2xl border border-neutral-light/20">
                <div className="flex items-start gap-md">
                    <div className="w-10 h-10 bg-functional-warning/10 rounded-xl flex items-center justify-center shrink-0">
                        <FileSearch className="w-5 h-5 text-functional-warning" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-neutral-dark">Ação do Advogado Requerida</p>
                        <p className="text-[13px] text-neutral-medium leading-relaxed">
                            Layer 4 pendente. O advogado master deve anexar a Certidão de Óbito oficial e validar
                            os hashes de integridade antes da abertura do envelope.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

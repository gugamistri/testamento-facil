'use client'

import { Shield, Lock, Share2, Binary, Database, ScrollText, CheckCircle2, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SecurityLayerProps {
    icon: React.ReactNode
    title: string
    description: string
    status: 'active' | 'pending' | 'warning'
    fragments?: number
}

function SecurityLayerCard({ icon, title, description, status, fragments }: SecurityLayerProps) {
    return (
        <div className="bg-background rounded-[24px] p-xl border border-neutral-light/20 shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
            <div className="flex gap-lg items-start relative z-10">
                <div className={cn(
                    "w-14 h-14 rounded-badge flex items-center justify-center shrink-0 transition-transform group-hover:scale-110",
                    status === 'active' ? "bg-functional-success/10 text-functional-success" : "bg-neutral-light/20 text-neutral-medium"
                )}>
                    {icon}
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-xs">
                        <h4 className="text-[17px] font-bold text-neutral-dark">{title}</h4>
                        {status === 'active' && <CheckCircle2 className="w-5 h-5 text-functional-success" />}
                    </div>
                    <p className="text-[13px] text-neutral-medium leading-relaxed mb-md">
                        {description}
                    </p>

                    {fragments !== undefined && (
                        <div className="flex gap-2 mt-sm">
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "h-1.5 flex-1 rounded-full",
                                        i < fragments ? "bg-functional-success" : "bg-neutral-light/30"
                                    )}
                                />
                            ))}
                            <span className="text-[10px] font-black text-neutral-medium ml-2 uppercase tracking-tighter">
                                {fragments}/3 FRAGMENTOS
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 text-neutral-light/5 opacity-50 group-hover:text-brand-primary/5 transition-colors">
                {icon}
            </div>
        </div>
    )
}

export function DigitalVault() {
    return (
        <section className="space-y-xl">
            <div className="flex items-end justify-between items-center mb-xl">
                <div>
                    <div className="flex items-center gap-sm mb-xs">
                        <span className="px-md py-xs bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                            Custódia Ativa
                        </span>
                        <div className="flex items-center gap-xs px-md py-xs bg-functional-success/10 text-functional-success text-[10px] font-black uppercase tracking-widest rounded-full">
                            <Shield className="w-3 h-3" />
                            100% Protegido
                        </div>
                    </div>
                    <h2 className="text-[28px] font-bold text-neutral-dark">Cofre Digital de Segurança</h2>
                    <p className="text-neutral-medium text-[15px]">Seu patrimônio está protegido por camadas de criptografia e validade jurídica descentralizada.</p>
                </div>
                <button type="button" className="text-sm font-bold text-brand-primary hover:underline flex items-center gap-xs">
                    Como funciona a segurança?
                    <Info className="w-4 h-4" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
                <SecurityLayerCard
                    icon={<Share2 className="w-7 h-7" />}
                    title="Shamir Secret Sharing"
                    description="Sua chave privada foi fragmentada em 3 partes e distribuída geograficamente. 2 partes são necessárias para acesso."
                    status="active"
                    fragments={3}
                />
                <SecurityLayerCard
                    icon={<Binary className="w-7 h-7" />}
                    title="Registro em Blockchain"
                    description="O hash do seu documento está eternizado na rede Polygon. Qualquer alteração invalidará o registro público."
                    status="active"
                />
                <SecurityLayerCard
                    icon={<ScrollText className="w-7 h-7" />}
                    title="Escrow Jurídico"
                    description="Registro oficial em fiel depositário (OAB). Garante acesso aos herdeiros mesmo em caso de falência da plataforma."
                    status="active"
                />
            </div>

            <div className="bg-neutral-dark rounded-[32px] p-2xl text-white relative overflow-hidden shadow-premium">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/10 to-transparent pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row gap-2xl items-center">
                    <div className="flex-1 space-y-lg">
                        <div className="flex items-center gap-sm">
                            <div className="w-10 h-10 bg-background/10 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/10">
                                <Lock className="w-5 h-5 text-brand-gold" />
                            </div>
                            <h3 className="text-xl font-bold italic tracking-tight">Status do Envelopamento</h3>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed max-w-md">
                            Seus arquivos (PDF assinado e Prova Forense) foram envelopados com criptografia <strong>AES-256-GCM</strong>.
                            O monitoramento de óbito agora consultará as bases do governo a cada 24h.
                        </p>
                        <div className="flex gap-md pt-md">
                            <button type="button" className="px-xl h-12 bg-background text-neutral-dark rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all shadow-lg shadow-black/20">
                                Verificar Integridade
                            </button>
                            <button type="button" className="px-xl h-12 bg-background/10 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-background/20 transition-all border border-white/10">
                                Histórico de Acesso
                            </button>
                        </div>
                    </div>
                    <div className="w-48 h-48 relative flex items-center justify-center shrink-0">
                        {/* Visual representation of the data envelope */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="w-32 h-32 bg-brand-primary/20 rounded-full blur-3xl absolute"
                        />
                        <div className="w-24 h-24 bg-gradient-to-br from-brand-gold to-brand-primary rounded-badge shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform cursor-help">
                            <Database className="w-10 h-10 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

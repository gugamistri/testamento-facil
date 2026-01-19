'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Shield, Activity, Users } from 'lucide-react'

export function PreviewSection() {
    return (
        <section className="py-3xl bg-background-section text-left">
            <div className="max-w-7xl mx-auto px-lg sm:px-xl lg:px-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-3xl text-center"
                >
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-accent-purple mb-md block">
                        Segurança Visível
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-dark tracking-tight mb-lg">
                        O Painel da Tranquilidade.
                    </h2>
                    <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
                        Veja sempre que tudo está funcionando. Um painel simples para acompanhar a proteção do seu legado.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative max-w-5xl mx-auto bg-background-dark/40 backdrop-blur-3xl rounded-[40px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden p-md sm:p-xl lg:p-2xl"
                >
                    {/* Fake Header */}
                    <div className="flex items-center justify-between mb-2xl">
                        <div className="flex items-center gap-md">
                            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                                <Shield className="w-5 h-5 text-background-pure" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-bold text-white">Cofre de Continuidade Operacional</h3>
                                <p className="text-[10px] text-functional-success flex items-center gap-xs font-black uppercase tracking-widest">
                                    <span className="w-2 h-2 bg-functional-success rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
                                    Ativo e Criptografado
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Fake Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-2xl">
                        {[
                            { icon: Activity, label: 'Integridade', value: 'Monitorado', sub: 'Hash: 0x8a2...f32', color: 'text-functional-success', bg: 'bg-functional-success/20' },
                            { icon: Users, label: 'Acesso', value: '03 Herdeiros', sub: 'Protocolo Multi-Sig', color: 'text-brand-primary', bg: 'bg-brand-primary/20' },
                            { icon: CheckCircle2, label: 'Soberania', value: 'Protegido', sub: 'Certificado ICP-Brasil', color: 'text-brand-gold', bg: 'bg-brand-gold/20' }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 border border-white/5 rounded-3xl p-lg text-left hover:bg-white/10 transition-colors group">
                                <div className="flex items-center justify-between mb-md">
                                    <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                    </div>
                                    <span className={`px-sm py-2xs ${stat.bg} ${stat.color} rounded-full text-[10px] font-black uppercase border border-white/5`}>
                                        Sincronizado
                                    </span>
                                </div>
                                <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                                <div className="text-[10px] text-white/40 uppercase tracking-widest font-black mt-xs">{stat.sub}</div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white/5 border border-white/5 rounded-[32px] p-2xl text-left text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent pointer-events-none" />
                        <h4 className="text-xl font-bold mb-md text-white tracking-tight">Status de Custódia Forense</h4>
                        <p className="text-white/40 text-sm max-w-xl leading-relaxed">
                            Todos os ativos digitais e cláusulas do seu testamento foram validados criptograficamente.
                            Sua assinatura digital (x509) está vinculada à infraestrutura de chave pública brasileira.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

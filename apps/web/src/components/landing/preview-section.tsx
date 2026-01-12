'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Shield, Activity, Users } from 'lucide-react'

export function PreviewSection() {
    return (
        <section className="py-3xl bg-background-subtle">
            <div className="max-w-7xl mx-auto px-lg sm:px-xl lg:px-2xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-3xl"
                >
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-primary mb-md block">
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
                    className="relative max-w-5xl mx-auto bg-background-pure rounded-[40px] border border-neutral-light/30 shadow-2xl overflow-hidden p-md sm:p-xl lg:p-2xl"
                >
                    {/* Fake Header */}
                    <div className="flex items-center justify-between mb-2xl">
                        <div className="flex items-center gap-md">
                            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-bold text-neutral-dark">Protocolo de Continuidade Pronto</h3>
                                <p className="text-xs text-functional-success flex items-center gap-xs">
                                    <span className="w-2 h-2 bg-functional-success rounded-full animate-pulse" />
                                    Ativo e Monitorando
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Fake Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-2xl">
                        <div className="bg-background-subtle rounded-3xl p-lg text-left">
                            <div className="flex items-center justify-between mb-md">
                                <div className="w-10 h-10 bg-functional-success/10 rounded-xl flex items-center justify-center">
                                    <Activity className="w-5 h-5 text-functional-success" />
                                </div>
                                <span className="px-sm py-2xs bg-functional-success/10 text-functional-success rounded-full text-[10px] font-black uppercase">
                                    OK
                                </span>
                            </div>
                            <div className="text-2xl font-bold text-neutral-dark">Monitorado</div>
                            <div className="text-[10px] text-neutral-medium uppercase tracking-widest font-black mt-xs">Sincronizado: Agora mesmo</div>
                        </div>

                        <div className="bg-background-subtle rounded-3xl p-lg text-left">
                            <div className="flex items-center justify-between mb-md">
                                <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                                    <Users className="w-5 h-5 text-brand-primary" />
                                </div>
                            </div>
                            <div className="text-2xl font-bold text-neutral-dark">03 Herdeiros</div>
                            <div className="text-[10px] text-neutral-medium uppercase tracking-widest font-black mt-xs">Acessos Configurados</div>
                        </div>

                        <div className="bg-background-subtle rounded-3xl p-lg text-left">
                            <div className="flex items-center justify-between mb-md">
                                <div className="w-10 h-10 bg-brand-gold/10 rounded-xl flex items-center justify-center">
                                    <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                </div>
                                <span className="px-sm py-2xs bg-brand-gold/10 text-brand-gold rounded-full text-[10px] font-black uppercase">
                                    PROTEGIDO
                                </span>
                            </div>
                            <div className="text-2xl font-bold text-neutral-dark">Protegido</div>
                            <div className="text-[10px] text-neutral-medium uppercase tracking-widest font-black mt-xs">Segurança do Cofre</div>
                        </div>
                    </div>

                    <div className="bg-neutral-dark rounded-[32px] p-2xl text-left text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/10 to-transparent pointer-events-none" />
                        <h4 className="text-xl font-bold mb-md text-white">Última Verificação de Segurança</h4>
                        <p className="text-white/60 text-sm max-w-xl">
                            Verificamos que seu testamento está seguro e não foi alterado.
                            Qualquer mudança dispara um alerta imediato.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

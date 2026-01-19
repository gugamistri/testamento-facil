'use client'

import { motion } from 'framer-motion'
import { Shield, Radio, Share2, Binary, Database } from 'lucide-react'

const features = [
    {
        icon: Radio,
        title: 'Ação Automática no Momento Certo',
        description: 'Verificamos regularmente registros oficiais. Quando identificamos seu falecimento, iniciamos automaticamente o processo de entrega aos seus herdeiros.',
        highlight: 'Funciona Sempre'
    },
    {
        icon: Share2,
        title: 'Acesso Dividido e Seguro',
        description: 'Nenhuma pessoa sozinha pode abrir seu cofre. Seus herdeiros precisam se reunir para acessar, garantindo que tudo aconteça da forma correta.',
        highlight: 'Nível Máximo de Proteção'
    },
    {
        icon: Shield,
        title: 'Privacidade Total, Mesmo Para Nós',
        description: 'Nem nossa equipe consegue ver o que você guardou. Tudo é protegido por uma senha que só você conhece.',
        highlight: 'Privacidade Garantida'
    },
    {
        icon: Binary,
        title: 'Registro Permanente e À Prova de Fraudes',
        description: 'Seu testamento é registrado de forma que ninguém pode alterar ou apagar. É como um cartório digital eterno.',
        highlight: 'Registro Eterno'
    }
]

export function TechFeaturesSection() {
    return (
        <section id="tech" className="py-3xl bg-background-pure overflow-hidden">
            <div className="max-w-7xl mx-auto px-lg sm:px-xl lg:px-2xl relative">
                {/* Decorative glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

                <div className="flex flex-col lg:flex-row gap-2xl items-center relative z-10">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-accent-purple mb-md block">
                                Criptografia e Ativos Vivos
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-dark tracking-tight mb-lg">
                                A proteção de um <br />
                                cofre suíço digital.
                            </h2>
                            <p className="text-lg text-neutral-medium mb-2xl max-w-xl">
                                Não somos apenas armazenamento; somos uma infraestrutura de soberania que garante a execução da sua vontade.
                            </p>

                            <div className="space-y-xl">
                                {features.map((feat, idx) => (
                                    <div key={feat.title} className="flex gap-lg group">
                                        <div className="w-14 h-14 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-500">
                                            <feat.icon className="w-7 h-7 text-brand-primary group-hover:text-background-pure transition-colors" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-sm mb-xs">
                                                <h3 className="text-xl font-bold text-neutral-dark">{feat.title}</h3>
                                                <span className="px-2 py-0.5 bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase rounded-full border border-brand-primary/20">
                                                    {feat.highlight}
                                                </span>
                                            </div>
                                            <p className="text-neutral-medium leading-relaxed text-sm">
                                                {feat.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <div className="bg-background-dark/80 backdrop-blur-3xl border border-white/10 rounded-[40px] p-2xl aspect-square flex flex-col justify-center items-center text-white relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-primary/10 to-transparent pointer-events-none" />

                                <div className="w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl absolute animate-pulse" />

                                <div className="relative z-10 p-xl rounded-[32px] bg-white/5 border border-white/5 shadow-2xl">
                                    <Database className="w-24 h-24 text-brand-primary" />
                                </div>
                                <h3 className="text-2xl font-black mt-xl mb-md relative z-10 text-white tracking-tight">Custódia Imutável</h3>
                                <p className="text-center text-white/40 text-sm max-w-xs relative z-10 uppercase font-black tracking-widest">
                                    SOC2 • GDPR • LGPD • ISO 27001
                                </p>
                            </div>

                            {/* Decorative elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-xl -right-lg bg-background-subtle border border-white/10 p-lg rounded-2xl shadow-2xl flex items-center gap-md backdrop-blur-xl"
                            >
                                <div className="w-10 h-10 bg-functional-success/20 rounded-full flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-functional-success" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Sistema Ativo</p>
                                    <p className="text-sm font-bold text-white">Consul Forense v4.2</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

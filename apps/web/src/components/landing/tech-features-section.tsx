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
            <div className="max-w-7xl mx-auto px-lg sm:px-xl lg:px-2xl">
                <div className="flex flex-col lg:flex-row gap-2xl items-center">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-primary mb-md block">
                                Segurança e Tranquilidade
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-dark tracking-tight mb-lg">
                                A proteção que você merece, <br />
                                sem complicação.
                            </h2>
                            <p className="text-lg text-neutral-medium mb-2xl max-w-xl">
                                Um sistema confiável que cuida de tudo para você, com a segurança que seu patrimônio merece.
                            </p>

                            <div className="space-y-xl">
                                {features.map((feat, idx) => (
                                    <div key={feat.title} className="flex gap-lg group">
                                        <div className="w-14 h-14 bg-brand-pale rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all">
                                            <feat.icon className="w-7 h-7 text-brand-primary group-hover:text-white" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-sm mb-xs">
                                                <h3 className="text-xl font-bold text-neutral-dark">{feat.title}</h3>
                                                <span className="px-2 py-0.5 bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase rounded-full">
                                                    {feat.highlight}
                                                </span>
                                            </div>
                                            <p className="text-neutral-medium leading-relaxed">
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
                            <div className="bg-neutral-dark rounded-[40px] p-2xl aspect-square flex flex-col justify-center items-center text-white relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-primary/20 to-transparent pointer-events-none" />

                                <div className="w-32 h-32 bg-brand-primary/20 rounded-full blur-3xl absolute animate-pulse" />

                                <Database className="w-24 h-24 text-brand-gold mb-xl relative z-10" />
                                <h3 className="text-2xl font-bold mb-md relative z-10 italic text-white">Seu Cofre Pessoal Protegido</h3>
                                <p className="text-center text-white/60 text-sm max-w-xs relative z-10">
                                    Proteção de nível bancário • Acesso exclusivo • Privacidade total
                                </p>
                            </div>

                            {/* Decorative badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-xl -right-lg bg-white p-lg rounded-2xl shadow-xl flex items-center gap-md border border-neutral-light/20"
                            >
                                <div className="w-10 h-10 bg-functional-success/10 rounded-full flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-functional-success" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-neutral-medium uppercase">Verificação Oficial</p>
                                    <p className="text-sm font-bold text-neutral-dark">Conectado aos Cartórios</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

'use client'

import { motion } from 'framer-motion'
import { Shield, Radio, Share2, Binary, Database } from 'lucide-react'

const features = [
    {
        icon: Radio,
        title: 'Gestão Ativa (Dead Man’s Switch)',
        description: 'Monitoramos em tempo real as APIs de cartórios (Arpen) e registros civis. O sistema age proativamente no momento da confirmação.',
        highlight: 'Monitoramento 24/7'
    },
    {
        icon: Share2,
        title: 'Protocolo Shamir (Secret Sharing)',
        description: 'Sua chave de acesso é fragmentada e distribuída entre herdeiros. Ela só pode ser recomposta após a validação do óbito.',
        highlight: 'Segurança Militar'
    },
    {
        icon: Shield,
        title: 'Privacidade Zero-Knowledge',
        description: 'Nem nós podemos ver o conteúdo do seu legado. Tudo é criptografado localmente antes de ser enviado ao cofre.',
        highlight: 'Anonimato em Vida'
    },
    {
        icon: Binary,
        title: 'Escritura Digital em Blockchain',
        description: 'O registro do seu testamento é imutável e descentralizado na rede Polygon, garantindo validade jurídica eterna.',
        highlight: 'Polygon Network'
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
                                Tecnologia de Ponta
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-dark tracking-tight mb-lg">
                                Protocolos de segurança que <br />
                                protegem gerações.
                            </h2>
                            <p className="text-lg text-neutral-medium mb-2xl max-w-xl">
                                Não somos apenas um documento jurídico digital. Somos um sistema de execução robusto que utiliza o que há de mais moderno em criptografia e monitoramento de dados.
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
                                <h3 className="text-2xl font-bold mb-md relative z-10 italic text-white">O Cofre de Ativos Invisíveis</h3>
                                <p className="text-center text-white/60 text-sm max-w-xs relative z-10">
                                    AES-256-GCM Encryption • Poly1305 Auth • Zero-Knowledge Architecture
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
                                    <p className="text-[10px] font-black text-neutral-medium uppercase">API Arpen</p>
                                    <p className="text-sm font-bold text-neutral-dark">Monitor Conectado</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

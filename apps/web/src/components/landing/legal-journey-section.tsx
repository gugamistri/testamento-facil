'use client'

import { motion } from 'framer-motion'
import { FileCheck, ShieldCheck, Scale, Fingerprint } from 'lucide-react'

const steps = [
    {
        icon: Fingerprint,
        step: '01',
        title: 'Manifestação Simples',
        description: 'Em poucos minutos, você registra sua vontade de forma clara e consciente. Sem filas ou burocracia desnecessária.',
        highlight: 'Fácil e Rápido'
    },
    {
        icon: FileCheck,
        step: '02',
        title: 'Validação por Especialista',
        description: 'Um advogado parceiro valida sua identidade e vontade através de uma conversa curta e segura, garantindo que tudo esteja correto.',
        highlight: 'Segurança Jurídica'
    },
    {
        icon: ShieldCheck,
        step: '03',
        title: 'Proteção Permanente',
        description: 'Sua vontade é guardada em um ambiente seguro e monitorado, onde cada detalhe é protegido contra qualquer alteração.',
        highlight: 'Sigilo Absoluto'
    },
    {
        icon: Scale,
        step: '04',
        title: 'Cuidado com a Família',
        description: 'Quando for necessário, sua família terá acesso a tudo de maneira organizada e sem conflitos, respeitando seu desejo.',
        highlight: 'Paz de Espírito'
    }
]

export function LegalJourneySection() {
    return (
        <section className="py-3xl bg-background-section">
            <div className="max-w-7xl mx-auto px-lg sm:px-xl lg:px-2xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-3xl"
                >
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-accent-purple mb-md block">
                        Cuidado em Cada Detalhe
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-dark tracking-tight mb-lg">
                        Sua vontade respeitada. <br className="hidden md:block" />
                        Com total segurança.
                    </h2>
                    <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
                        Criamos um caminho simples para que suas decisões sejam incontestáveis e sua família esteja sempre protegida.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
                    {steps.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 backdrop-blur-xl rounded-card p-xl border border-white/5 relative group hover:border-brand-primary/30 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute top-xl right-xl text-6xl font-black text-white/5 group-hover:text-brand-primary/20 transition-colors">
                                {item.step}
                            </div>
                            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-lg group-hover:bg-brand-primary group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all">
                                <item.icon className="w-7 h-7 text-brand-primary group-hover:text-background-pure" />
                            </div>
                            <span className="px-2 py-0.5 bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase rounded-full mb-md inline-block border border-brand-primary/20">
                                {item.highlight}
                            </span>
                            <h3 className="text-xl font-bold text-neutral-dark mb-md group-hover:translate-x-1 transition-transform">{item.title}</h3>
                            <p className="text-neutral-medium text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-2xl glass-panel flex flex-col md:flex-row items-center gap-lg border-brand-primary/10"
                >
                    <div className="w-16 h-16 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl flex items-center justify-center shrink-0">
                        <Scale className="w-8 h-8 text-brand-primary" />
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="font-bold text-neutral-dark mb-xs tracking-tight">Segurança Jurídica Integral</h4>
                        <p className="text-[13px] text-neutral-medium leading-relaxed">
                            Nosso processo foi desenhado por especialistas para garantir total conformidade com a legislação brasileira.
                            Combinamos tecnologia e acompanhamento jurídico para que seu desejo seja cumprido exatamente como você planejou.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

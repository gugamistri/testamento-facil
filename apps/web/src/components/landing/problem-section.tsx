'use client'

import { motion } from 'framer-motion'
import { Clock, Banknote, Users, FileStack, ShieldCheck } from 'lucide-react'

const problems = [
    {
        icon: Clock,
        title: '2 a 5 Anos de Espera',
        description: 'Esse é o tempo médio de um inventário no Brasil. Enquanto isso, sua família fica sem acesso aos bens.',
        stat: '2-5 anos',
        color: 'text-brand-primary',
        bg: 'bg-brand-pale'
    },
    {
        icon: Banknote,
        title: '15% do Patrimônio',
        description: 'É quanto vai embora em taxas, honorários e custas judiciais. Dinheiro que poderia ficar com quem você ama.',
        stat: 'R$ 50mil+',
        color: 'text-brand-gold',
        bg: 'bg-brand-gold/10'
    },
    {
        icon: Users,
        title: '60% das Famílias',
        description: 'Enfrentam conflitos durante o processo de inventário. Brigas que poderiam ser evitadas com clareza.',
        stat: '6 em 10',
        color: 'text-functional-error',
        bg: 'bg-functional-error/10'
    },
    {
        icon: FileStack,
        title: 'Dezenas de Documentos',
        description: 'Filas em cartórios, audiências intermináveis, burocracia que não acaba. Tudo isso em um momento difícil.',
        stat: '30+ docs',
        color: 'text-accent-purple',
        bg: 'bg-accent-purple/10'
    },
    {
        icon: ShieldCheck,
        title: 'Senhas Perdidas',
        description: 'Contas bancárias, fotos, investimentos... Sem as senhas certas, tudo pode se perder para sempre.',
        stat: '∞ perdido',
        color: 'text-functional-success',
        bg: 'bg-functional-success/10'
    }
]

export function ProblemSection() {
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
                        Por que existimos?
                    </span >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-dark tracking-tight mb-lg">
                        O sistema tradicional de inventário <br className="hidden md:block" />
                        está quebrado.
                    </h2>
                    <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
                        Organizamos tudo agora, enquanto você está no controle, para que seus entes queridos tenham um caminho claro quando precisarem.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
                    {problems.map((prob, idx) => (
                        <motion.div
                            key={prob.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-background-pure rounded-card p-xl border border-neutral-light/20 shadow-sm hover:shadow-md transition-all text-left group"
                        >
                            <div className={`w-14 h-14 ${prob.bg} ${prob.color} rounded-2xl flex items-center justify-center mb-lg group-hover:scale-110 transition-transform`}>
                                <prob.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-dark mb-md">{prob.title}</h3>
                            <p className="text-neutral-medium leading-relaxed">
                                {prob.description}
                            </p>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-brand-primary rounded-card p-xl flex flex-col justify-center items-center text-center text-white"
                    >
                        <h3 className="text-2xl font-bold mb-md text-white">Pronto para mudar isso?</h3>
                        <p className="text-white/80 mb-xl">Sua paz de espírito começa com um clique.</p>
                        <button className="bg-white text-brand-primary px-xl py-md rounded-button font-bold hover:bg-neutral-light transition-colors">
                            Começar Agora
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

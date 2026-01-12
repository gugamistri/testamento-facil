'use client'

import { motion } from 'framer-motion'
import { Award, Database, Lock, Scale, Shield } from 'lucide-react'

const badges = [
    {
        id: 1,
        label: 'Assinatura',
        name: 'Digital Oficial',
        icon: Award,
        iconColor: 'text-brand-gold',
    },
    {
        id: 2,
        label: 'Registro',
        name: 'Permanente',
        icon: Database,
        iconColor: 'text-accent-emerald',
    },
    {
        id: 3,
        label: 'Proteção',
        name: 'Nível Bancário',
        icon: Lock,
        iconColor: 'text-accent-emerald',
    },
    {
        id: 4,
        label: 'Privacidade',
        name: 'Garantida por Lei',
        icon: Scale,
        iconColor: 'text-brand-primary',
    },
    {
        id: 5,
        label: 'Cofre',
        name: 'Seguro 24/7',
        icon: Shield,
        iconColor: 'text-functional-warning',
    },
]

export function TrustBadges() {
    return (
        <section className="py-xl px-lg bg-background-pure border-y border-neutral-light">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-between gap-xl"
                >
                    {badges.map((badge) => (
                        <div key={badge.id} className="flex flex-col items-center text-center">
                            <p className="text-xs font-medium text-neutral-medium uppercase tracking-wider mb-xs">
                                {badge.label}
                            </p>
                            <div className="flex items-center gap-xs">
                                <badge.icon className={`w-5 h-5 ${badge.iconColor}`} />
                                <span className="text-sm font-bold text-neutral-dark">{badge.name}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

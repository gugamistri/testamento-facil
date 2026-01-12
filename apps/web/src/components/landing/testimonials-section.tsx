'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
    {
        id: 1,
        name: 'Roberto Mendes',
        role: 'Empresário',
        location: 'São Paulo',
        quote:
            'O processo foi surpreendentemente simples. Em 48 horas meu testamento estava pronto e registrado em blockchain. A equipe foi extremamente profissional.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        initials: 'RM',
        rating: 5,
    },
    {
        id: 2,
        name: 'Marina Costa',
        role: 'Investidora',
        location: 'Rio de Janeiro',
        quote:
            'Finalmente consegui incluir minhas criptomoedas no testamento de forma legal. O suporte para ativos digitais é excepcional.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
        initials: 'MC',
        rating: 5,
    },
    {
        id: 3,
        name: 'Carlos Ferreira',
        role: 'Médico',
        location: 'Brasília',
        quote:
            'A segurança é impressionante. Saber que meu testamento está protegido por blockchain me dá total tranquilidade.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        initials: 'CF',
        rating: 5,
    },
]

export function TestimonialsSection() {
    return (
        <section className="py-3xl px-lg bg-muted">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-2xl"
                >
                    <span className="inline-flex items-center gap-xs px-md py-xs bg-brand-gold/10 text-brand-gold rounded-full text-sm font-semibold mb-lg">
                        <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
                        Avaliação 4.9/5
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-md">
                        O Que Nossos Clientes Dizem
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Depoimentos reais de pessoas que protegeram seu legado
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card rounded-card p-xl border border-border hover:shadow-card transition-shadow"
                        >
                            {/* Rating */}
                            <div className="flex gap-2xs mb-lg">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={`star-${testimonial.id}-${i}`}
                                        className="w-5 h-5 fill-brand-gold text-brand-gold"
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-foreground leading-relaxed mb-xl">"{testimonial.quote}"</p>

                            {/* Author */}
                            <div className="flex items-center gap-md">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold/20"
                                />
                                <div>
                                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {testimonial.role}, {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

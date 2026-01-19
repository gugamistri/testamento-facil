'use client'

import { motion } from 'framer-motion'
import { Star, Check } from 'lucide-react'

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
        <section className="py-3xl px-lg bg-background-section relative">
            {/* Decorative glow */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-primary/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-2xl"
                >
                    <span className="inline-flex items-center gap-xs px-md py-xs bg-brand-primary/10 text-brand-primary rounded-full text-xs font-black uppercase tracking-widest border border-brand-primary/20 mb-lg">
                        <Star className="w-3 h-3 fill-brand-primary text-brand-primary" />
                        Confiança Certificada 4.9/5
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-dark tracking-tight mb-md">
                        Relatos de Soberania
                    </h2>
                    <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
                        Pessoas reais que transformaram burocracia em tranquilidade digital.
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
                            className="bg-white/5 backdrop-blur-md rounded-card p-xl border border-white/5 hover:border-brand-primary/30 transition-all duration-500 group"
                        >
                            {/* Rating */}
                            <div className="flex gap-2xs mb-lg">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={`star-${testimonial.id}-${i}`}
                                        className="w-4 h-4 fill-brand-primary text-brand-primary"
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-neutral-dark leading-relaxed mb-xl italic font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-md">
                                <div className="relative">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-brand-primary/20"
                                    />
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-background-pure border-2 border-brand-primary/20 rounded-full flex items-center justify-center">
                                        <Check className="w-3 h-3 text-brand-primary" />
                                    </div>
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-white text-sm">{testimonial.name}</p>
                                    <p className="text-[11px] text-white/40 font-black uppercase tracking-tighter">
                                        {testimonial.role} • {testimonial.location}
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

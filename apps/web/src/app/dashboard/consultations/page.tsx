'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Star, Check, Shield, Video, Calendar as CalendarIcon, ArrowRight, Gavel } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'

// Mock Data for Lawyers
const MOCK_LAWYERS = [
    {
        id: 'law-001',
        name: 'Dra. Ana Silva',
        oab: 'OAB/SP 123.456',
        specialties: ['Planejamento Sucessório', 'Holdings'],
        price: 'R$ 450,00',
        priceCents: 45000,
        rating: 4.9,
        reviews: 124,
        image: '/images/avatars/lawyer-1.png', // Placeholder
        bio: 'Especialista em proteção patrimonial e arquitetura sucessória para famílias empresárias. Mais de 15 anos de experiência.',
        nextSlot: 'Amanhã, 14:00'
    },
    {
        id: 'law-002',
        name: 'Dr. Carlos Oliveira',
        oab: 'OAB/RJ 98.765',
        specialties: ['Inventário Digital', 'Testamentos'],
        price: 'R$ 380,00',
        priceCents: 38000,
        rating: 4.8,
        reviews: 89,
        image: '/images/avatars/lawyer-2.png',
        bio: 'Foco em agilidade e desburocratização. Realizo todo o processo de validação de testamento de forma 100% remota e segura.',
        nextSlot: 'Hoje, 16:30'
    },
    {
        id: 'law-003',
        name: 'Dra. Mariana Santos',
        oab: 'OAB/MG 45.678',
        specialties: ['Direito de Família', 'Mediação'],
        price: 'R$ 420,00',
        priceCents: 42000,
        rating: 5.0,
        reviews: 42,
        image: '/images/avatars/lawyer-3.png',
        bio: 'Atendimento humanizado para momentos delicados. Especialista em mediação de conflitos familiares e sucessão harmônica.',
        nextSlot: 'Quinta, 09:00'
    }
]

// Main Content Component
function ConsultationsContent() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const isSuccess = searchParams.get('success') === 'true'

    // State
    const [selectedLawyer, setSelectedLawyer] = useState<typeof MOCK_LAWYERS[0] | null>(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null)

    // Filter Logic
    const filteredLawyers = MOCK_LAWYERS.filter(lawyer => {
        const matchesSearch = lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lawyer.bio.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesSpecialty = selectedSpecialty ? lawyer.specialties.includes(selectedSpecialty) : true
        return matchesSearch && matchesSpecialty
    })

    // Checkout Logic
    const handleBooking = async (lawyer: typeof MOCK_LAWYERS[0]) => {
        try {
            const response = await fetch('/api/checkout/create-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    priceId: 'price_dummy_id', // In production, map lawyer.priceCents to a Stripe Price ID
                    lawyerId: lawyer.id
                })
            })

            const { url } = await response.json()
            if (url) window.location.href = url
        } catch (error) {
            console.error('Booking Error:', error)
            alert('Erro ao iniciar pagamento via Stripe. (Verifique console)')
        }
    }

    // Success State (Post-Payment)
    if (isSuccess) {
        return (
            <div className="max-w-3xl mx-auto space-y-xl py-lg">
                <div className="bg-functional-success/10 border border-functional-success/20 p-lg rounded-card flex items-center gap-md">
                    <div className="w-12 h-12 bg-functional-success rounded-full flex items-center justify-center shrink-0">
                        <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-neutral-dark">Pagamento Confirmado!</h2>
                        <p className="text-neutral-medium">Seu crédito para a sessão jurídica foi liberado. Agora, escolha o melhor horário.</p>
                    </div>
                </div>

                {/* Placeholder for Calendar - In real app, this would be the BookingCalendar logic */}
                <div className="bg-white border border-neutral-light/20 rounded-card p-2xl text-center space-y-lg shadow-sm">
                    <div className="inline-block p-lg bg-brand-primary/10 rounded-full mb-md">
                        <CalendarIcon className="w-10 h-10 text-brand-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-dark">Agendar Horário</h3>
                    <p className="text-neutral-medium max-w-md mx-auto">
                        A agenda da <strong>Dra. Ana Silva</strong> (exemplo) está aberta. Selecione abaixo:
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-md max-w-2xl mx-auto">
                        {['09:00', '10:00', '14:00', '15:30'].map(time => (
                            <button key={time} className="p-md rounded-xl border border-neutral-light/30 hover:border-brand-primary hover:bg-brand-primary/5 transition-all text-neutral-dark font-bold">
                                {time}
                            </button>
                        ))}
                    </div>

                    <p className="text-xs text-neutral-light pt-lg">
                        *Placeholder do Calendário Real (fase seguinte)*
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
                <div>
                    <h1 className="text-3xl font-black text-neutral-dark tracking-tight">Especialistas Jurídicos</h1>
                    <p className="text-neutral-medium">Encontre um advogado certificado para validar seu testamento.</p>
                </div>

                {/* Search & Filter */}
                <div className="flex gap-sm">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-medium" />
                        <input
                            type="text"
                            placeholder="Buscar por nome..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="h-10 pl-9 pr-4 rounded-lg border border-neutral-light/30 bg-white text-sm focus:border-brand-primary outline-none w-full md:w-64"
                        />
                    </div>
                    <button className="h-10 w-10 flex items-center justify-center rounded-lg border border-neutral-light/30 bg-white text-neutral-medium hover:text-brand-primary transition-colors">
                        <Filter className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Lawyer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-lg">
                {filteredLawyers.map(lawyer => (
                    <motion.div
                        key={lawyer.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-card border border-neutral-light/20 p-xl hover:border-brand-primary/30 hover:shadow-lg transition-all group group-hover:scale-[1.01]"
                    >
                        <div className="flex items-start justify-between mb-lg">
                            <div className="flex gap-md">
                                <div className="w-12 h-12 rounded-full bg-neutral-light/20 overflow-hidden relative">
                                    {/* Placeholder Avatar */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-brand-primary/10 text-brand-primary font-bold">
                                        {lawyer.name.charAt(4)}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral-dark">{lawyer.name}</h3>
                                    <p className="text-xs text-neutral-medium font-medium">{lawyer.oab}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 bg-brand-gold/10 px-2 py-1 rounded-md">
                                <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
                                <span className="text-xs font-bold text-brand-gold">{lawyer.rating}</span>
                                <span className="text-[10px] text-brand-gold/60">({lawyer.reviews})</span>
                            </div>
                        </div>

                        <p className="text-sm text-neutral-medium mb-lg line-clamp-2 h-10">
                            {lawyer.bio}
                        </p>

                        <div className="flex flex-wrap gap-xs mb-lg">
                            {lawyer.specialties.map(tag => (
                                <span key={tag} className="px-2 py-0.5 bg-background-subtle text-neutral-dark text-[10px] font-bold rounded-full border border-neutral-light/10">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-sm text-xs text-neutral-medium mb-xl bg-background-subtle p-sm rounded-lg">
                            <CalendarIcon className="w-3 h-3" />
                            Próximo horário: <span className="text-brand-primary font-bold">{lawyer.nextSlot}</span>
                        </div>

                        <div className="flex items-center justify-between pt-lg border-t border-neutral-light/10">
                            <div>
                                <p className="text-[10px] uppercase font-bold text-neutral-medium">Honorários</p>
                                <p className="text-lg font-black text-neutral-dark">{lawyer.price}</p>
                            </div>
                            <button
                                onClick={() => handleBooking(lawyer)}
                                className="btn-primary py-2 px-md h-auto text-sm shadow-button group-hover:bg-brand-primary group-hover:text-white"
                            >
                                Contratar
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Empty State */}
            {filteredLawyers.length === 0 && (
                <div className="text-center py-2xl">
                    <p className="text-neutral-medium">Nenhum especialista encontrado para sua busca.</p>
                </div>
            )}
        </div>
    )
}

export default function ConsultationsPage() {
    return (
        <React.Suspense fallback={<div className="p-8 text-center text-neutral-medium">Carregando especialistas...</div>}>
            <ConsultationsContent />
        </React.Suspense>
    )
}

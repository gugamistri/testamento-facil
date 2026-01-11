'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, ChevronLeft, ChevronRight, User, Mail, Phone, Target, Briefcase, Home, Bitcoin, HelpCircle, Check, ArrowRight, Video, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'

type ScheduleStep = 'SELECT_DATE' | 'SELECT_TIME' | 'FILL_FORM' | 'CONFIRM'

interface TimeSlot {
    time: string
    available: boolean
    urgency?: boolean
}

interface FormData {
    name: string
    email: string
    phone: string
    whatsapp: boolean
    objective: string
    otherObjective: string
    patrimony: string
    hasTestament: string
    wantsMigration: string
}

const OBJECTIVES = [
    { id: 'crypto', label: 'Proteger criptomoedas/ativos digitais', icon: Bitcoin },
    { id: 'business', label: 'Planejar sucessão de empresa familiar', icon: Briefcase },
    { id: 'inventory', label: 'Evitar inventário judicial demorado', icon: Home },
    { id: 'other', label: 'Outro motivo', icon: HelpCircle },
]

const PATRIMONY_OPTIONS = [
    { value: '<500k', label: 'Até R$ 500 mil' },
    { value: '500k-2M', label: 'R$ 500 mil a R$ 2 milhões' },
    { value: '2M-5M', label: 'R$ 2 a 5 milhões' },
    { value: '>5M', label: 'Acima de R$ 5 milhões' },
    { value: 'prefer-not', label: 'Prefiro não informar' },
]

export default function SchedulePage() {
    const [step, setStep] = useState<ScheduleStep>('SELECT_DATE')
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        whatsapp: true,
        objective: '',
        otherObjective: '',
        patrimony: '',
        hasTestament: '',
        wantsMigration: '',
    })

    // Generate calendar days
    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const days: (Date | null)[] = []

        // Add empty slots for days before the first day of month
        for (let i = 0; i < firstDay.getDay(); i++) {
            days.push(null)
        }

        // Add all days of the month
        for (let i = 1; i <= lastDay.getDate(); i++) {
            days.push(new Date(year, month, i))
        }

        return days
    }

    const isDateAvailable = (date: Date) => {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const dayOfWeek = date.getDay()
        return date >= today && dayOfWeek !== 0 && dayOfWeek !== 6 // Weekdays only
    }

    const getTimeSlotsForDate = (date: Date): TimeSlot[] => {
        const slots: TimeSlot[] = []
        const today = new Date()
        const isToday = date.toDateString() === today.toDateString()

        for (let hour = 9; hour <= 17; hour++) {
            if (isToday && hour <= today.getHours()) continue
            const available = Math.random() > 0.3 // Simulate availability
            slots.push({
                time: `${hour.toString().padStart(2, '0')}:00`,
                available,
                urgency: available && hour <= 11 && isToday,
            })
        }
        return slots
    }

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('pt-BR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
        })
    }

    const handleSubmit = () => {
        // Simulate submission
        setStep('CONFIRM')
    }

    const days = getDaysInMonth(currentMonth)
    const timeSlots = selectedDate ? getTimeSlotsForDate(selectedDate) : []

    return (
        <div className="min-h-screen bg-background-subtle">
            {/* Header */}
            <header className="bg-background border-b border-neutral-light/20 py-lg px-lg sm:px-2xl">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-sm">
                        <div className="w-8 h-8 bg-brand-primary rounded-badge flex items-center justify-center">
                            <span className="text-white font-black text-sm">T</span>
                        </div>
                        <span className="font-bold text-neutral-dark">Testamento <span className="text-brand-primary">Fácil</span></span>
                    </Link>
                    <Link href="/" className="text-sm font-semibold text-neutral-medium hover:text-brand-primary transition-colors">
                        Voltar ao site
                    </Link>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-lg sm:px-2xl py-2xl">
                {/* Progress */}
                <div className="mb-2xl">
                    <div className="flex items-center justify-between mb-md">
                        <span className="text-xs font-black uppercase tracking-widest text-brand-primary">Consultoria Gratuita</span>
                        <span className="text-xs text-neutral-medium">
                            {step === 'SELECT_DATE' && 'Passo 1 de 3'}
                            {step === 'SELECT_TIME' && 'Passo 1 de 3'}
                            {step === 'FILL_FORM' && 'Passo 2 de 3'}
                            {step === 'CONFIRM' && 'Concluído!'}
                        </span>
                    </div>
                    <div className="h-1 bg-neutral-light/30 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-brand-primary"
                            initial={{ width: '0%' }}
                            animate={{
                                width: step === 'SELECT_DATE' || step === 'SELECT_TIME' ? '33%' : step === 'FILL_FORM' ? '66%' : '100%'
                            }}
                        />
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {(step === 'SELECT_DATE' || step === 'SELECT_TIME') && (
                        <motion.div
                            key="calendar"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-xl"
                        >
                            {/* Calendar */}
                            <div className="bg-background rounded-[32px] border border-neutral-light/20 p-xl">
                                <div className="flex items-center justify-between mb-xl">
                                    <h2 className="text-xl font-bold text-neutral-dark">Escolha uma Data</h2>
                                    <div className="flex items-center gap-sm">
                                        <button
                                            type="button"
                                            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                                            className="p-sm hover:bg-background-subtle rounded-xl transition-colors"
                                        >
                                            <ChevronLeft className="w-5 h-5 text-neutral-medium" />
                                        </button>
                                        <span className="font-semibold text-neutral-dark min-w-[140px] text-center">
                                            {currentMonth.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                                            className="p-sm hover:bg-background-subtle rounded-xl transition-colors"
                                        >
                                            <ChevronRight className="w-5 h-5 text-neutral-medium" />
                                        </button>
                                    </div>
                                </div>

                                {/* Weekday headers */}
                                <div className="grid grid-cols-7 gap-xs mb-sm">
                                    {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
                                        <div key={day} className="text-center text-xs font-bold text-neutral-medium uppercase py-sm">
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                {/* Calendar grid */}
                                <div className="grid grid-cols-7 gap-xs">
                                    {days.map((day, index) => {
                                        if (!day) {
                                            return <div key={`empty-${index}`} className="aspect-square" />
                                        }
                                        const available = isDateAvailable(day)
                                        const isSelected = selectedDate?.toDateString() === day.toDateString()

                                        return (
                                            <button
                                                key={day.toISOString()}
                                                type="button"
                                                disabled={!available}
                                                onClick={() => {
                                                    setSelectedDate(day)
                                                    setSelectedTime(null)
                                                    setStep('SELECT_TIME')
                                                }}
                                                className={cn(
                                                    "aspect-square rounded-xl flex items-center justify-center text-sm font-semibold transition-all",
                                                    available
                                                        ? isSelected
                                                            ? "bg-brand-primary text-white shadow-button"
                                                            : "hover:bg-brand-pale text-neutral-dark"
                                                        : "text-neutral-light cursor-not-allowed"
                                                )}
                                            >
                                                {day.getDate()}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Time slots */}
                            <div className="bg-background rounded-[32px] border border-neutral-light/20 p-xl">
                                <h2 className="text-xl font-bold text-neutral-dark mb-xl flex items-center gap-sm">
                                    <Clock className="w-5 h-5 text-brand-primary" />
                                    {selectedDate ? formatDate(selectedDate) : 'Selecione uma data'}
                                </h2>

                                {selectedDate ? (
                                    <div className="space-y-sm">
                                        {timeSlots.length > 0 ? (
                                            timeSlots.map((slot) => (
                                                <button
                                                    key={slot.time}
                                                    type="button"
                                                    disabled={!slot.available}
                                                    onClick={() => {
                                                        setSelectedTime(slot.time)
                                                        setStep('FILL_FORM')
                                                    }}
                                                    className={cn(
                                                        "w-full p-lg rounded-2xl flex items-center justify-between transition-all",
                                                        slot.available
                                                            ? selectedTime === slot.time
                                                                ? "bg-brand-primary text-white"
                                                                : "bg-background-subtle hover:bg-brand-pale text-neutral-dark border border-transparent hover:border-brand-primary"
                                                            : "bg-neutral-light/10 text-neutral-light cursor-not-allowed"
                                                    )}
                                                >
                                                    <span className="font-bold">{slot.time}</span>
                                                    {slot.urgency && slot.available && (
                                                        <span className="text-xs bg-brand-gold/20 text-brand-gold px-sm py-xs rounded-full font-bold flex items-center gap-xs">
                                                            <AlertCircle className="w-3 h-3" />
                                                            Último horário!
                                                        </span>
                                                    )}
                                                    {!slot.available && (
                                                        <span className="text-xs text-neutral-light">Indisponível</span>
                                                    )}
                                                </button>
                                            ))
                                        ) : (
                                            <div className="text-center py-xl text-neutral-medium">
                                                <Calendar className="w-12 h-12 mx-auto mb-md text-neutral-light" />
                                                <p>Não há horários disponíveis para esta data.</p>
                                                <p className="text-sm mt-sm">Selecione outra data.</p>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="text-center py-xl text-neutral-medium">
                                        <Calendar className="w-12 h-12 mx-auto mb-md text-neutral-light" />
                                        <p>Selecione uma data no calendário</p>
                                        <p className="text-sm mt-sm">para ver os horários disponíveis</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {step === 'FILL_FORM' && (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-background rounded-[32px] border border-neutral-light/20 p-xl sm:p-2xl"
                        >
                            <button
                                type="button"
                                onClick={() => setStep('SELECT_TIME')}
                                className="flex items-center gap-xs text-sm text-neutral-medium hover:text-brand-primary mb-xl"
                            >
                                <ChevronLeft className="w-4 h-4" />
                                Voltar para horários
                            </button>

                            <div className="mb-xl">
                                <h2 className="text-2xl font-bold text-neutral-dark mb-sm">Seus Dados</h2>
                                <p className="text-neutral-medium">
                                    Agendamento para <span className="font-bold text-brand-primary">{selectedDate && formatDate(selectedDate)}</span> às <span className="font-bold text-brand-primary">{selectedTime}</span>
                                </p>
                            </div>

                            <div className="space-y-xl">
                                {/* Basic Info */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-sm">
                                            Nome Completo *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-lg top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-light" />
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full h-14 pl-[52px] pr-lg bg-background-subtle border border-neutral-light/30 rounded-2xl text-neutral-dark placeholder:text-neutral-light focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                                                placeholder="Seu nome"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-sm">
                                            Email *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-lg top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-light" />
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full h-14 pl-[52px] pr-lg bg-background-subtle border border-neutral-light/30 rounded-2xl text-neutral-dark placeholder:text-neutral-light focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                                                placeholder="seu@email.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-sm">
                                        Telefone / WhatsApp *
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-lg top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-light" />
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full h-14 pl-[52px] pr-lg bg-background-subtle border border-neutral-light/30 rounded-2xl text-neutral-dark placeholder:text-neutral-light focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                                            placeholder="(11) 99999-9999"
                                        />
                                    </div>
                                    <label className="flex items-center gap-sm mt-sm cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.whatsapp}
                                            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.checked })}
                                            className="w-5 h-5 rounded border-neutral-light text-brand-primary focus:ring-brand-primary"
                                        />
                                        <span className="text-sm text-neutral-medium">Confirmar via WhatsApp</span>
                                    </label>
                                </div>

                                {/* Objective */}
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-md">
                                        Qual seu principal objetivo?
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
                                        {OBJECTIVES.map((obj) => {
                                            const Icon = obj.icon
                                            return (
                                                <button
                                                    key={obj.id}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, objective: obj.id })}
                                                    className={cn(
                                                        "p-lg rounded-2xl text-left flex items-start gap-md transition-all border",
                                                        formData.objective === obj.id
                                                            ? "bg-brand-pale border-brand-primary"
                                                            : "bg-background-subtle border-transparent hover:border-neutral-light"
                                                    )}
                                                >
                                                    <Icon className={cn("w-5 h-5 mt-0.5", formData.objective === obj.id ? "text-brand-primary" : "text-neutral-medium")} />
                                                    <span className={cn("text-sm font-semibold", formData.objective === obj.id ? "text-brand-primary" : "text-neutral-dark")}>
                                                        {obj.label}
                                                    </span>
                                                </button>
                                            )
                                        })}
                                    </div>
                                    {formData.objective === 'other' && (
                                        <input
                                            type="text"
                                            value={formData.otherObjective}
                                            onChange={(e) => setFormData({ ...formData, otherObjective: e.target.value })}
                                            className="w-full h-14 px-lg bg-background-subtle border border-neutral-light/30 rounded-2xl text-neutral-dark placeholder:text-neutral-light focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all mt-md"
                                            placeholder="Descreva seu objetivo..."
                                        />
                                    )}
                                </div>

                                {/* Patrimony */}
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-md">
                                        Patrimônio estimado
                                    </label>
                                    <select
                                        value={formData.patrimony}
                                        onChange={(e) => setFormData({ ...formData, patrimony: e.target.value })}
                                        className="w-full h-14 px-lg bg-background-subtle border border-neutral-light/30 rounded-2xl text-neutral-dark focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Selecione uma opção</option>
                                        {PATRIMONY_OPTIONS.map((opt) => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Existing testament */}
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-md">
                                        Já possui testamento em cartório?
                                    </label>
                                    <div className="flex gap-md">
                                        {['Sim', 'Não'].map((opt) => (
                                            <button
                                                key={opt}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, hasTestament: opt })}
                                                className={cn(
                                                    "flex-1 h-14 rounded-2xl font-semibold transition-all border",
                                                    formData.hasTestament === opt
                                                        ? "bg-brand-primary text-white border-brand-primary"
                                                        : "bg-background-subtle text-neutral-dark border-neutral-light/30 hover:border-brand-primary"
                                                )}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                    {formData.hasTestament === 'Sim' && (
                                        <div className="mt-md p-lg bg-brand-pale rounded-2xl">
                                            <p className="text-sm text-brand-primary font-semibold mb-sm">Deseja migrar para o digital?</p>
                                            <div className="flex gap-sm">
                                                {['Sim, gostaria', 'Apenas entender'].map((opt) => (
                                                    <button
                                                        key={opt}
                                                        type="button"
                                                        onClick={() => setFormData({ ...formData, wantsMigration: opt })}
                                                        className={cn(
                                                            "flex-1 py-sm px-md rounded-xl text-sm font-semibold transition-all",
                                                            formData.wantsMigration === opt
                                                                ? "bg-brand-primary text-white"
                                                                : "bg-white text-brand-primary hover:bg-brand-primary/10"
                                                        )}
                                                    >
                                                        {opt}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={!formData.name || !formData.email || !formData.phone}
                                    className="btn-primary w-full !h-16 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Confirmar Agendamento
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 'CONFIRM' && (
                        <motion.div
                            key="confirm"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-background rounded-[32px] border border-neutral-light/20 p-xl sm:p-2xl text-center"
                        >
                            <div className="w-20 h-20 bg-functional-success rounded-full flex items-center justify-center mx-auto mb-xl">
                                <Check className="w-10 h-10 text-white" />
                            </div>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-sm">Consultoria Agendada!</h2>
                            <p className="text-neutral-medium mb-2xl max-w-md mx-auto">
                                Você receberá um email de confirmação com o link da videochamada e instruções de preparação.
                            </p>

                            <div className="bg-background-subtle rounded-2xl p-xl mb-2xl inline-block">
                                <div className="flex items-center gap-lg text-left">
                                    <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center">
                                        <Video className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-neutral-medium mb-xs">Sua consultoria</p>
                                        <p className="text-lg font-bold text-neutral-dark">{selectedDate && formatDate(selectedDate)}</p>
                                        <p className="text-brand-primary font-bold">{selectedTime} (Horário de Brasília)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-brand-pale rounded-2xl p-lg mb-xl">
                                <p className="text-sm font-bold text-brand-primary mb-sm">📋 Prepare-se:</p>
                                <ul className="text-sm text-neutral-dark space-y-xs text-left max-w-sm mx-auto">
                                    <li>✓ Documento oficial com foto</li>
                                    <li>✓ Lista aproximada de bens</li>
                                    <li>✓ Suas dúvidas anotadas</li>
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-md justify-center">
                                <Link href="/dashboard" className="btn-primary">
                                    Ir para o Painel
                                </Link>
                                <Link href="/" className="btn-secondary">
                                    Voltar ao Site
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    )
}

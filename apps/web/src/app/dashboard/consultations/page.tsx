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

export default function ConsultationsPage() {
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
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-neutral-dark">Agendar Consultoria</h1>
                    <p className="text-neutral-medium">Escolha o melhor horário para falar com nossos especialistas</p>
                </div>
            </div>

            <main className="max-w-4xl mx-auto py-8">
                {/* Progress */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
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
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                        >
                            {/* Calendar */}
                            <div className="bg-background rounded-[32px] border border-neutral-light/20 p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-xl font-bold text-neutral-dark">Escolha uma Data</h2>
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                                            className="p-2 hover:bg-background-subtle rounded-xl transition-colors"
                                        >
                                            <ChevronLeft className="w-5 h-5 text-neutral-medium" />
                                        </button>
                                        <span className="font-semibold text-neutral-dark min-w-[140px] text-center">
                                            {currentMonth.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                                            className="p-2 hover:bg-background-subtle rounded-xl transition-colors"
                                        >
                                            <ChevronRight className="w-5 h-5 text-neutral-medium" />
                                        </button>
                                    </div>
                                </div>

                                {/* Weekday headers */}
                                <div className="grid grid-cols-7 gap-1 mb-2">
                                    {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
                                        <div key={day} className="text-center text-xs font-bold text-neutral-medium uppercase py-2">
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                {/* Calendar grid */}
                                <div className="grid grid-cols-7 gap-1">
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
                            <div className="bg-background rounded-[32px] border border-neutral-light/20 p-8">
                                <h2 className="text-xl font-bold text-neutral-dark mb-8 flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-brand-primary" />
                                    {selectedDate ? formatDate(selectedDate) : 'Selecione uma data'}
                                </h2>

                                {selectedDate ? (
                                    <div className="space-y-2">
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
                                                        "w-full p-4 rounded-2xl flex items-center justify-between transition-all",
                                                        slot.available
                                                            ? selectedTime === slot.time
                                                                ? "bg-brand-primary text-white"
                                                                : "bg-background-subtle hover:bg-brand-pale text-neutral-dark border border-transparent hover:border-brand-primary"
                                                            : "bg-neutral-light/10 text-neutral-light cursor-not-allowed"
                                                    )}
                                                >
                                                    <span className="font-bold">{slot.time}</span>
                                                    {slot.urgency && slot.available && (
                                                        <span className="text-xs bg-brand-gold/20 text-brand-gold px-2 py-1 rounded-full font-bold flex items-center gap-1">
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
                                            <div className="text-center py-8 text-neutral-medium">
                                                <Calendar className="w-12 h-12 mx-auto mb-4 text-neutral-light" />
                                                <p>Não há horários disponíveis para esta data.</p>
                                                <p className="text-sm mt-2">Selecione outra data.</p>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="text-center py-8 text-neutral-medium">
                                        <Calendar className="w-12 h-12 mx-auto mb-4 text-neutral-light" />
                                        <p>Selecione uma data no calendário</p>
                                        <p className="text-sm mt-2">para ver os horários disponíveis</p>
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
                            className="bg-background rounded-[32px] border border-neutral-light/20 p-8 sm:p-12"
                        >
                            <button
                                type="button"
                                onClick={() => setStep('SELECT_TIME')}
                                className="flex items-center gap-1 text-sm text-neutral-medium hover:text-brand-primary mb-8"
                            >
                                <ChevronLeft className="w-4 h-4" />
                                Voltar para horários
                            </button>

                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-neutral-dark mb-2">Seus Dados</h2>
                                <p className="text-neutral-medium">
                                    Agendamento para <span className="font-bold text-brand-primary">{selectedDate && formatDate(selectedDate)}</span> às <span className="font-bold text-brand-primary">{selectedTime}</span>
                                </p>
                            </div>

                            <div className="space-y-8">
                                {/* Basic Info */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-2">
                                            Nome Completo *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-light" />
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full h-14 pl-[52px] pr-4 bg-background-subtle border border-neutral-light/30 rounded-2xl text-neutral-dark placeholder:text-neutral-light focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                                                placeholder="Seu nome"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-2">
                                            Email *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-light" />
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full h-14 pl-[52px] pr-4 bg-background-subtle border border-neutral-light/30 rounded-2xl text-neutral-dark placeholder:text-neutral-light focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                                                placeholder="seu@email.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-2">
                                        Telefone / WhatsApp *
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-light" />
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full h-14 pl-[52px] pr-4 bg-background-subtle border border-neutral-light/30 rounded-2xl text-neutral-dark placeholder:text-neutral-light focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                                            placeholder="(11) 99999-9999"
                                        />
                                    </div>
                                    <label className="flex items-center gap-2 mt-2 cursor-pointer">
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
                                    <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-4">
                                        Qual seu principal objetivo?
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {OBJECTIVES.map((obj) => {
                                            const Icon = obj.icon
                                            return (
                                                <button
                                                    key={obj.id}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, objective: obj.id })}
                                                    className={cn(
                                                        "p-4 rounded-2xl text-left flex items-start gap-3 transition-all border",
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
                                            className="w-full h-14 px-4 bg-background-subtle border border-neutral-light/30 rounded-2xl text-neutral-dark placeholder:text-neutral-light focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all mt-2"
                                            placeholder="Descreva seu objetivo..."
                                        />
                                    )}
                                </div>

                                {/* Patrimony */}
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-4">
                                        Patrimônio estimado
                                    </label>
                                    <select
                                        value={formData.patrimony}
                                        onChange={(e) => setFormData({ ...formData, patrimony: e.target.value })}
                                        className="w-full h-14 px-4 bg-background-subtle border border-neutral-light/30 rounded-2xl text-neutral-dark focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Selecione uma opção</option>
                                        {PATRIMONY_OPTIONS.map((opt) => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Existing testament */}
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-4">
                                        Já possui testamento em cartório?
                                    </label>
                                    <div className="flex gap-4">
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
                                        <div className="mt-4 p-4 bg-brand-pale rounded-2xl">
                                            <p className="text-sm text-brand-primary font-semibold mb-2">Deseja migrar para o digital?</p>
                                            <div className="flex gap-2">
                                                {['Sim, gostaria', 'Apenas entender'].map((opt) => (
                                                    <button
                                                        key={opt}
                                                        type="button"
                                                        onClick={() => setFormData({ ...formData, wantsMigration: opt })}
                                                        className={cn(
                                                            "flex-1 py-1 px-2 rounded-xl text-sm font-semibold transition-all",
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
                            className="bg-background rounded-[32px] border border-neutral-light/20 p-8 sm:p-12 text-center"
                        >
                            <div className="w-20 h-20 bg-functional-success rounded-full flex items-center justify-center mx-auto mb-8">
                                <Check className="w-10 h-10 text-white" />
                            </div>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-2">Consultoria Agendada!</h2>
                            <p className="text-neutral-medium mb-8 max-w-md mx-auto">
                                Você receberá um email de confirmação com o link da videochamada e instruções de preparação.
                            </p>

                            <div className="bg-background-subtle rounded-2xl p-8 mb-8 inline-block">
                                <div className="flex items-center gap-4 text-left">
                                    <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center">
                                        <Video className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-neutral-medium mb-1">Sua consultoria</p>
                                        <p className="text-lg font-bold text-neutral-dark">{selectedDate && formatDate(selectedDate)}</p>
                                        <p className="text-brand-primary font-bold">{selectedTime} (Horário de Brasília)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-brand-pale rounded-2xl p-4 mb-8">
                                <p className="text-sm font-bold text-brand-primary mb-2">📋 Prepare-se:</p>
                                <ul className="text-sm text-neutral-dark space-y-1 text-left max-w-sm mx-auto">
                                    <li>✓ Documento oficial com foto</li>
                                    <li>✓ Lista aproximada de bens</li>
                                    <li>✓ Suas dúvidas anotadas</li>
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/dashboard" className="btn-primary">
                                    Voltar ao Painel
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    )
}

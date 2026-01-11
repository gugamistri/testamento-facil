'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Plus, Users, User, Mail, Phone, Percent, Check, X, AlertCircle, Edit2, Trash2, Send, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface Beneficiary {
    id: string
    name: string
    cpf: string
    email: string
    phone: string
    relationship: string
    percentage: number
    status: 'pending' | 'validated'
    validatedAt?: string
}

const RELATIONSHIPS = [
    'Cônjuge',
    'Filho(a)',
    'Pai/Mãe',
    'Irmão(ã)',
    'Sobrinho(a)',
    'Neto(a)',
    'Amigo(a)',
    'Outro',
]

const mockBeneficiaries: Beneficiary[] = [
    {
        id: '1',
        name: 'Maria Silva Santos',
        cpf: '***.***.789-00',
        email: 'maria@email.com',
        phone: '(11) 99999-1111',
        relationship: 'Cônjuge',
        percentage: 50,
        status: 'validated',
        validatedAt: '15/03/2024',
    },
    {
        id: '2',
        name: 'João Silva Santos',
        cpf: '***.***.456-00',
        email: 'joao@email.com',
        phone: '(11) 99999-2222',
        relationship: 'Filho(a)',
        percentage: 25,
        status: 'validated',
        validatedAt: '18/03/2024',
    },
    {
        id: '3',
        name: 'Ana Paula Silva',
        cpf: '***.***.123-00',
        email: 'ana@email.com',
        phone: '(11) 99999-3333',
        relationship: 'Filho(a)',
        percentage: 25,
        status: 'pending',
    },
]

export default function BeneficiariesPage() {
    const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>(mockBeneficiaries)
    const [showModal, setShowModal] = useState(false)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        name: '',
        cpf: '',
        email: '',
        phone: '',
        relationship: '',
        percentage: 0,
    })

    const totalPercentage = beneficiaries.reduce((sum, b) => sum + b.percentage, 0)
    const validatedCount = beneficiaries.filter(b => b.status === 'validated').length

    const handleAddBeneficiary = () => {
        if (!formData.name || !formData.cpf || !formData.email) return

        const newBeneficiary: Beneficiary = {
            id: Date.now().toString(),
            ...formData,
            status: 'pending',
        }

        setBeneficiaries([...beneficiaries, newBeneficiary])
        setFormData({ name: '', cpf: '', email: '', phone: '', relationship: '', percentage: 0 })
        setShowModal(false)
    }

    const handleRemove = (id: string) => {
        setBeneficiaries(beneficiaries.filter(b => b.id !== id))
    }

    const handleResendInvite = (id: string) => {
        // Simulate resending invite
        alert('Convite reenviado com sucesso!')
    }

    return (
        <div className="min-h-screen bg-background-subtle p-lg sm:p-2xl">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-2xl">
                    <div className="flex items-center gap-lg">
                        <Link href="/dashboard" className="p-sm bg-background rounded-xl border border-neutral-light/20 hover:border-brand-primary transition-colors">
                            <ArrowLeft className="w-5 h-5 text-neutral-medium" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-neutral-dark">Beneficiários</h1>
                            <p className="text-sm text-neutral-medium">Gerencie quem receberá seu patrimônio</p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => setShowModal(true)}
                        className="btn-primary"
                    >
                        <Plus className="w-4 h-4" />
                        Adicionar Beneficiário
                    </button>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-lg mb-2xl">
                    <div className="bg-background rounded-2xl p-lg border border-neutral-light/20">
                        <div className="flex items-center gap-md mb-sm">
                            <div className="w-10 h-10 bg-brand-pale rounded-xl flex items-center justify-center">
                                <Users className="w-5 h-5 text-brand-primary" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-neutral-dark">{beneficiaries.length}</p>
                                <p className="text-xs text-neutral-medium">Total Cadastrados</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background rounded-2xl p-lg border border-neutral-light/20">
                        <div className="flex items-center gap-md mb-sm">
                            <div className="w-10 h-10 bg-functional-success/10 rounded-xl flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-functional-success" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-neutral-dark">{validatedCount}</p>
                                <p className="text-xs text-neutral-medium">Validados</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background rounded-2xl p-lg border border-neutral-light/20">
                        <div className="flex items-center gap-md mb-sm">
                            <div className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center",
                                totalPercentage === 100 ? "bg-functional-success/10" : "bg-functional-warning/10"
                            )}>
                                <Percent className={cn(
                                    "w-5 h-5",
                                    totalPercentage === 100 ? "text-functional-success" : "text-functional-warning"
                                )} />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-neutral-dark">{totalPercentage}%</p>
                                <p className="text-xs text-neutral-medium">Distribuído</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Warning if not 100% */}
                {totalPercentage !== 100 && (
                    <div className="bg-functional-warning/10 border border-functional-warning/30 rounded-2xl p-lg mb-xl flex items-start gap-md">
                        <AlertCircle className="w-5 h-5 text-functional-warning flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="font-bold text-functional-warning">Distribuição Incompleta</p>
                            <p className="text-sm text-neutral-dark">
                                {totalPercentage < 100
                                    ? `Faltam ${100 - totalPercentage}% para completar a distribuição.`
                                    : `Você excedeu ${totalPercentage - 100}% da distribuição permitida.`
                                }
                            </p>
                        </div>
                    </div>
                )}

                {/* Legitimate Heirs Warning */}
                <div className="bg-brand-pale rounded-2xl p-lg mb-xl flex items-start gap-md">
                    <AlertCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="font-bold text-brand-primary">Sobre a Legítima</p>
                        <p className="text-sm text-neutral-dark">
                            No Brasil, 50% do patrimônio (legítima) pertence obrigatoriamente aos herdeiros necessários
                            (descendentes, ascendentes e cônjuge). Apenas os outros 50% podem ser livremente distribuídos.
                        </p>
                    </div>
                </div>

                {/* Beneficiaries List */}
                <div className="space-y-md">
                    {beneficiaries.map((beneficiary) => (
                        <motion.div
                            key={beneficiary.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-background rounded-2xl border border-neutral-light/20 p-lg hover:border-brand-primary/30 transition-colors"
                        >
                            <div className="flex items-start justify-between gap-lg">
                                <div className="flex items-start gap-lg">
                                    <div className="w-12 h-12 bg-brand-pale rounded-full flex items-center justify-center">
                                        <User className="w-6 h-6 text-brand-primary" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-sm mb-xs">
                                            <h3 className="font-bold text-neutral-dark">{beneficiary.name}</h3>
                                            {beneficiary.status === 'validated' ? (
                                                <span className="px-sm py-2xs bg-functional-success/10 text-functional-success text-[10px] font-bold rounded-full uppercase flex items-center gap-2xs">
                                                    <Check className="w-3 h-3" />
                                                    Validado
                                                </span>
                                            ) : (
                                                <span className="px-sm py-2xs bg-functional-warning/10 text-functional-warning text-[10px] font-bold rounded-full uppercase flex items-center gap-2xs">
                                                    <Clock className="w-3 h-3" />
                                                    Aguardando
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex flex-wrap items-center gap-lg text-sm text-neutral-medium">
                                            <span>{beneficiary.relationship}</span>
                                            <span>CPF: {beneficiary.cpf}</span>
                                            <span className="flex items-center gap-xs">
                                                <Mail className="w-3 h-3" />
                                                {beneficiary.email}
                                            </span>
                                        </div>
                                        {beneficiary.status === 'validated' && beneficiary.validatedAt && (
                                            <p className="text-xs text-functional-success mt-xs">
                                                Validado em {beneficiary.validatedAt}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center gap-lg">
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-brand-primary">{beneficiary.percentage}%</p>
                                        <p className="text-xs text-neutral-medium">do patrimônio</p>
                                    </div>
                                    <div className="flex items-center gap-xs">
                                        {beneficiary.status === 'pending' && (
                                            <button
                                                type="button"
                                                onClick={() => handleResendInvite(beneficiary.id)}
                                                className="p-sm bg-background-subtle rounded-xl hover:bg-brand-pale transition-colors"
                                                title="Reenviar convite"
                                            >
                                                <Send className="w-4 h-4 text-brand-primary" />
                                            </button>
                                        )}
                                        <button
                                            type="button"
                                            className="p-sm bg-background-subtle rounded-xl hover:bg-brand-pale transition-colors"
                                            title="Editar"
                                        >
                                            <Edit2 className="w-4 h-4 text-neutral-medium" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleRemove(beneficiary.id)}
                                            className="p-sm bg-background-subtle rounded-xl hover:bg-functional-error/10 transition-colors"
                                            title="Remover"
                                        >
                                            <Trash2 className="w-4 h-4 text-functional-error" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {beneficiaries.length === 0 && (
                    <div className="bg-background rounded-[32px] border border-neutral-light/20 p-2xl text-center">
                        <div className="w-16 h-16 bg-brand-pale rounded-full flex items-center justify-center mx-auto mb-xl">
                            <Users className="w-8 h-8 text-brand-primary" />
                        </div>
                        <h2 className="text-xl font-bold text-neutral-dark mb-sm">Nenhum Beneficiário</h2>
                        <p className="text-neutral-medium max-w-md mx-auto mb-xl">
                            Adicione os beneficiários que receberão seu patrimônio. Eles serão notificados para validar seus dados.
                        </p>
                        <button
                            type="button"
                            onClick={() => setShowModal(true)}
                            className="btn-primary"
                        >
                            <Plus className="w-4 h-4" />
                            Adicionar Primeiro Beneficiário
                        </button>
                    </div>
                )}
            </div>

            {/* Add/Edit Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-neutral-dark/50 backdrop-blur-sm z-50 flex items-center justify-center p-lg"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-background rounded-[32px] p-xl sm:p-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between mb-xl">
                                <h2 className="text-xl font-bold text-neutral-dark">Novo Beneficiário</h2>
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="p-sm hover:bg-background-subtle rounded-xl transition-colors"
                                >
                                    <X className="w-5 h-5 text-neutral-medium" />
                                </button>
                            </div>

                            <div className="space-y-lg">
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-sm">
                                        Nome Completo *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full h-14 px-lg bg-background-subtle border border-neutral-light/30 rounded-2xl text-neutral-dark placeholder:text-neutral-light focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                                        placeholder="Nome do beneficiário"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-sm">
                                        CPF *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.cpf}
                                        onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                                        className="w-full h-14 px-lg bg-background-subtle border border-neutral-light/30 rounded-2xl text-neutral-dark placeholder:text-neutral-light focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                                        placeholder="000.000.000-00"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-md">
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-sm">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full h-14 px-lg bg-background-subtle border border-neutral-light/30 rounded-2xl text-neutral-dark placeholder:text-neutral-light focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                                            placeholder="email@exemplo.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-sm">
                                            Telefone
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full h-14 px-lg bg-background-subtle border border-neutral-light/30 rounded-2xl text-neutral-dark placeholder:text-neutral-light focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                                            placeholder="(11) 99999-9999"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-sm">
                                        Parentesco
                                    </label>
                                    <select
                                        value={formData.relationship}
                                        onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                                        className="w-full h-14 px-lg bg-background-subtle border border-neutral-light/30 rounded-2xl text-neutral-dark focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Selecione</option>
                                        {RELATIONSHIPS.map((rel) => (
                                            <option key={rel} value={rel}>{rel}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-sm">
                                        Percentual do Patrimônio
                                    </label>
                                    <div className="flex items-center gap-md">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={formData.percentage}
                                            onChange={(e) => setFormData({ ...formData, percentage: Number(e.target.value) })}
                                            className="flex-1"
                                        />
                                        <span className="text-xl font-bold text-brand-primary w-16 text-right">
                                            {formData.percentage}%
                                        </span>
                                    </div>
                                    {totalPercentage + formData.percentage > 100 && (
                                        <p className="text-xs text-functional-error mt-xs">
                                            ⚠️ Total excederá 100% ({totalPercentage + formData.percentage}%)
                                        </p>
                                    )}
                                </div>

                                <div className="flex gap-md pt-lg">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="btn-secondary flex-1"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleAddBeneficiary}
                                        disabled={!formData.name || !formData.cpf || !formData.email}
                                        className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Adicionar
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

'use client'

import React, { useState } from 'react'
import { AlertCircle, Check, Send, Upload } from 'lucide-react'
import { Input, Select } from '@/components/ui/form-elements'

interface SupportFormProps {
    role: 'CLIENT' | 'LAWYER' | 'PARTNER'
    defaultType?: string
}

export function SupportForm({ role, defaultType = 'general' }: SupportFormProps) {
    const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS'>('IDLE')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('SUBMITTING')

        // Simulating API call
        setTimeout(() => {
            setStatus('SUCCESS')
            // Reset after 3s
            setTimeout(() => setStatus('IDLE'), 3000)
        }, 1500)
    }

    if (status === 'SUCCESS') {
        return (
            <div className="bg-functional-success/10 border border-functional-success/20 rounded-2xl p-12 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-functional-success text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-functional-success/30">
                    <Check className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark mb-2">Solicitação Recebida!</h3>
                <p className="text-neutral-medium max-w-md mx-auto">
                    Nossa equipe de suporte premium analisará seu caso. O tempo médio de resposta para seu plano é de
                    <span className="font-bold text-brand-primary"> 2 horas úteis</span>.
                </p>
                <p className="text-xs text-neutral-medium mt-8 border-t border-functional-success/20 pt-4">
                    Ticket ID: #REQ-{Math.floor(Math.random() * 99999)}
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-[32px] border border-neutral-light/20 shadow-sm">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                    label="Tipo de Solicitação"
                    options={[
                        { value: 'general', label: 'Dúvida Geral' },
                        { value: 'technical', label: 'Problema Técnico' },
                        { value: 'billing', label: 'Financeiro / Pagamentos' },
                        ...(role === 'LAWYER' ? [{ value: 'no_show', label: 'Reportar No-Show (Cliente não compareceu)' }] : []),
                        ...(role === 'LAWYER' ? [{ value: 'validation', label: 'Dúvidas sobre Validação' }] : []),
                        ...(role === 'CLIENT' ? [{ value: 'reschedule', label: 'Reagendamento de Sessão' }] : []),
                    ]}
                    defaultValue={defaultType}
                />

                <Select
                    label="Prioridade"
                    options={[
                        { value: 'low', label: 'Baixa (Apenas Dúvida)' },
                        { value: 'medium', label: 'Normal' },
                        { value: 'high', label: 'Alta (Bloqueia meu trabalho)' },
                        { value: 'urgent', label: 'Crítica (Sessão em andamento)' },
                    ]}
                />
            </div>

            <Input
                label="Assunto"
                placeholder="Resumo breve do problema..."
            />

            <div className="space-y-2">
                <label className="block text-[13px] font-medium text-neutral-dark">
                    Descrição Detalhada
                </label>
                <textarea
                    className="w-full min-h-[160px] p-4 rounded-xl border-[1.5px] border-neutral-light bg-background text-neutral-dark placeholder:text-neutral-medium transition-all focus:outline-none focus:border-[2.5px] focus:border-brand-primary resize-y"
                    placeholder="Descreva o que aconteceu, incluindo mensagens de erro se houver..."
                />
            </div>

            <div className="border border-dashed border-neutral-light/50 rounded-xl p-8 text-center hover:bg-background-subtle transition-colors cursor-pointer group">
                <Upload className="w-8 h-8 text-neutral-light mx-auto mb-4 group-hover:text-brand-primary transition-colors" />
                <p className="text-sm font-medium text-neutral-dark">Anexar Arquivos ou Screenshots</p>
                <p className="text-xs text-neutral-medium">JPG, PNG ou PDF até 5MB</p>
            </div>

            {(role === 'LAWYER' || role === 'PARTNER') && (
                <div className="bg-brand-gold/10 p-4 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-brand-goldDark">
                        Como parceiro verificado, você tem prioridade na fila de atendimento.
                    </p>
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'SUBMITTING'}
                className="btn-primary w-full h-14 flex items-center justify-center gap-2 group"
            >
                {status === 'SUBMITTING' ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                    <>
                        Enviar Solicitação
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </button>
        </form>
    )
}

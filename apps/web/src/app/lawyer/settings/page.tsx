'use client'

import React from 'react'
import { Input, Select } from '@/components/ui/form-elements'
import { Check, Save } from 'lucide-react'

export default function LawyerSettingsPage() {
    return (
        <div className="space-y-xl max-w-4xl">
            <div className="flex flex-col gap-sm">
                <h1 className="text-3xl font-black text-neutral-dark tracking-tight">Configurações Profissionais</h1>
                <p className="text-neutral-medium">Mantenha seu perfil atualizado para atrair mais clientes.</p>
            </div>

            <form className="space-y-2xl">
                {/* Section 1: Professional Credentials */}
                <div className="bg-white p-xl rounded-card shadow-sm border border-neutral-light/20 space-y-lg">
                    <div className="flex items-center gap-md border-b border-neutral-light/10 pb-md">
                        <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                            <Check className="w-5 h-5 text-brand-primary" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-neutral-dark">Credenciais OAB</h2>
                            <p className="text-sm text-neutral-medium">Informações validadas junto ao cadastro nacional.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                        <Input
                            label="Número da OAB"
                            placeholder="000.000"
                            disabled
                            defaultValue="123.456"
                            helperText="Para alterar, entre em contato com o suporte."
                        />
                        <Select
                            label="Seccional (UF)"
                            options={[
                                { value: 'SP', label: 'São Paulo (OAB/SP)' },
                                { value: 'RJ', label: 'Rio de Janeiro (OAB/RJ)' },
                                { value: 'MG', label: 'Minas Gerais (OAB/MG)' },
                            ]}
                            disabled
                            defaultValue="SP"
                        />
                    </div>
                </div>

                {/* Section 2: Marketplace Profile */}
                <div className="bg-white p-xl rounded-card shadow-sm border border-neutral-light/20 space-y-lg">
                    <div className="flex items-center gap-md border-b border-neutral-light/10 pb-md">
                        <div className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center">
                            <Save className="w-5 h-5 text-accent-purple" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-neutral-dark">Perfil Público</h2>
                            <p className="text-sm text-neutral-medium">Como você aparece para os clientes no marketplace.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                        <div className="col-span-1 md:col-span-2 space-y-xs">
                            <label className="block text-[13px] font-medium text-neutral-dark">Biografia Profissional</label>
                            <textarea
                                className="w-full min-h-[120px] p-md rounded-[10px] border-[1.5px] border-neutral-light bg-background text-neutral-dark placeholder:text-neutral-medium transition-all focus:outline-none focus:border-[2.5px] focus:border-brand-primary resize-y"
                                placeholder="Descreva sua experiência, especializações e abordagem..."
                                defaultValue="Especialista em Direito Sucessório com mais de 15 anos de experiência..."
                            />
                            <p className="text-[12px] text-neutral-medium">Máximo 500 caracteres.</p>
                        </div>

                        <Input
                            label="Honorários por Sessão (R$)"
                            placeholder="0,00"
                            type="number"
                            defaultValue="450.00"
                            helperText="Valor para sessão de validação de 30min."
                        />

                        <div className="space-y-xs">
                            <label className="block text-[13px] font-medium text-neutral-dark">Especialidades</label>
                            <div className="flex flex-wrap gap-sm p-4 border-[1.5px] border-neutral-light rounded-[10px] bg-background">
                                {['Testamentos', 'Inventários', 'Planejamento Sucessório', 'Holdings'].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-bold rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end pt-md">
                    <button type="button" className="btn-primary flex items-center gap-sm">
                        <Save className="w-5 h-5" />
                        Salvar Alterações
                    </button>
                </div>
            </form>
        </div>
    )
}

'use client'

import Link from 'next/link'
import { ArrowLeft, Settings, User, Bell, Shield, CreditCard, Key } from 'lucide-react'

export default function SettingsPage() {
    const settingsCategories = [
        { id: 'profile', icon: <User className="w-5 h-5" />, label: 'Dados Pessoais', description: 'Nome, email, telefone' },
        { id: 'notifications', icon: <Bell className="w-5 h-5" />, label: 'Notificações', description: 'Email, SMS, WhatsApp' },
        { id: 'security', icon: <Shield className="w-5 h-5" />, label: 'Segurança', description: '2FA, senha, sessões' },
        { id: 'billing', icon: <CreditCard className="w-5 h-5" />, label: 'Plano e Pagamento', description: 'Fatura, upgrade, histórico' },
        { id: 'access', icon: <Key className="w-5 h-5" />, label: 'Acesso aos Dados', description: 'Exportar, excluir conta' },
    ]

    return (
        <div className="min-h-screen bg-background-subtle p-2xl">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-lg mb-2xl">
                    <Link href="/dashboard" className="p-sm bg-background rounded-xl border border-neutral-light/20 hover:border-brand-primary transition-colors">
                        <ArrowLeft className="w-5 h-5 text-neutral-medium" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-neutral-dark">Configurações</h1>
                        <p className="text-sm text-neutral-medium">Gerencie sua conta e preferências</p>
                    </div>
                </div>

                <div className="bg-background rounded-[32px] border border-neutral-light/20 p-xl">
                    <div className="space-y-sm">
                        {settingsCategories.map((category) => (
                            <button
                                key={category.id}
                                type="button"
                                className="w-full flex items-center gap-lg p-lg hover:bg-background-subtle rounded-2xl transition-colors text-left group"
                            >
                                <div className="w-12 h-12 bg-background-subtle rounded-xl flex items-center justify-center text-neutral-medium group-hover:text-brand-primary transition-colors">
                                    {category.icon}
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-neutral-dark group-hover:text-brand-primary transition-colors">{category.label}</p>
                                    <p className="text-sm text-neutral-medium">{category.description}</p>
                                </div>
                                <ArrowLeft className="w-4 h-4 text-neutral-light rotate-180" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

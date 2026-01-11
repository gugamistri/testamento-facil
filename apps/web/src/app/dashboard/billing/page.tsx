import { CreditCard, History } from 'lucide-react'
import React from 'react'

export default function BillingPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-neutral-dark">Pagamentos e Assinatura</h1>
                <p className="text-neutral-medium">Gerencie seu plano e métodos de pagamento</p>
            </div>

            <div className="border border-neutral-light rounded-xl p-8 flex flex-col items-center justify-center text-center bg-white min-h-[400px]">
                <div className="w-16 h-16 bg-background-subtle rounded-full flex items-center justify-center mb-4">
                    <CreditCard className="w-8 h-8 text-neutral-medium" />
                </div>
                <h3 className="text-lg font-bold text-neutral-dark mb-2">Módulo de Pagamentos</h3>
                <p className="text-neutral-medium max-w-sm mb-6">
                    Em breve você poderá gerenciar cartões de crédito, visualizar histórico de faturas e alterar seu plano de assinatura.
                </p>
                <div className="flex gap-4">
                    <span className="text-xs px-2 py-1 bg-brand-primary text-white rounded">Integração Stripe</span>
                    <span className="text-xs px-2 py-1 bg-brand-primary text-white rounded">Integração Pagar.me</span>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { Wallet, Landmark, History, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react'

export default function PartnerBankingPage() {
    // MOCK DATA
    const bankingInfo = {
        pixKey: '12.345.678/0001-90',
        pixType: 'CNPJ',
        bankName: 'Banco Inter',
        holderName: 'Silva Advocacia & Consultoria',
        lastPayout: '2025-12-05',
        nextPayout: '2026-02-05',
        balance: 150000 // cents
    }

    const payoutHistory = [
        { id: 'pay-102', date: '05/12/2025', amount: 210000, status: 'PAID', receipt: '#' },
        { id: 'pay-101', date: '05/11/2025', amount: 235000, status: 'PAID', receipt: '#' },
        { id: 'pay-100', date: '05/10/2025', amount: 165000, status: 'PAID', receipt: '#' },
    ]

    const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

    return (
        <div className="space-y-xl">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-black text-neutral-dark tracking-tight">Dados Bancários & Repasses</h1>
                <p className="text-neutral-medium">Gerencie como você recebe suas comissões.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
                {/* Left Column: Wallet & Settings */}
                <div className="lg:col-span-2 space-y-lg">
                    {/* Wallet Card */}
                    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-card p-xl text-white relative overflow-hidden shadow-xl">
                        <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-end gap-lg">
                            <div>
                                <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-xs">Saldo Disponível</p>
                                <h2 className="text-4xl font-black mb-lg">{formatter.format(bankingInfo.balance / 100)}</h2>

                                <div className="flex items-center gap-xs text-sm text-white/80 bg-white/10 px-md py-sm rounded-lg w-fit">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>Próximo repasse automático: <strong>{bankingInfo.nextPayout}</strong></span>
                                </div>
                            </div>
                            <button className="btn-primary bg-brand-primary hover:bg-brand-primary/90 text-white border-none shadow-lg">
                                Solicitar Antecipação
                            </button>
                        </div>
                    </div>

                    {/* Banking Form */}
                    <div className="bg-white rounded-card border border-neutral-light/20 p-xl">
                        <div className="flex items-center justify-between mb-lg">
                            <h3 className="font-bold text-neutral-dark flex items-center gap-2">
                                <Landmark className="w-5 h-5 text-brand-primary" />
                                Método de Recebimento (PIX)
                            </h3>
                            <span className="text-xs font-bold text-functional-success bg-functional-success/10 px-2 py-1 rounded-full flex items-center gap-1">
                                <CheckCircle className="w-3 h-3" /> Verificado
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-lg">
                            <div className="space-y-xs">
                                <label className="text-xs font-bold uppercase text-neutral-medium">Chave PIX</label>
                                <div className="p-md bg-background-subtle rounded-md border border-neutral-light/20 font-mono text-neutral-dark">
                                    {bankingInfo.pixKey}
                                </div>
                            </div>
                            <div className="space-y-xs">
                                <label className="text-xs font-bold uppercase text-neutral-medium">Titular</label>
                                <div className="p-md bg-background-subtle rounded-md border border-neutral-light/20 text-neutral-dark">
                                    {bankingInfo.holderName}
                                </div>
                            </div>
                            <div className="space-y-xs">
                                <label className="text-xs font-bold uppercase text-neutral-medium">Tipo de Chave</label>
                                <div className="p-md bg-background-subtle rounded-md border border-neutral-light/20 text-neutral-dark">
                                    {bankingInfo.pixType}
                                </div>
                            </div>
                            <div className="space-y-xs">
                                <label className="text-xs font-bold uppercase text-neutral-medium">Instituição</label>
                                <div className="p-md bg-background-subtle rounded-md border border-neutral-light/20 text-neutral-dark">
                                    {bankingInfo.bankName}
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-neutral-light/10 pt-lg flex justify-end">
                            <button className="text-sm font-bold text-brand-primary hover:text-brand-hover transition-colors">
                                Editar Dados Bancários
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column: History */}
                <div className="bg-white rounded-card border border-neutral-light/20 p-xl h-fit">
                    <h3 className="font-bold text-neutral-dark flex items-center gap-2 mb-lg">
                        <History className="w-5 h-5 text-neutral-medium" />
                        Histórico de Repasses
                    </h3>

                    <div className="space-y-md">
                        {payoutHistory.map(pay => (
                            <div key={pay.id} className="flex items-center justify-between p-md rounded-lg border border-neutral-light/10 hover:border-brand-primary/20 transition-all bg-background-subtle/30">
                                <div>
                                    <p className="font-bold text-neutral-dark">{formatter.format(pay.amount / 100)}</p>
                                    <p className="text-xs text-neutral-medium">{pay.date}</p>
                                </div>
                                <div className="text-right">
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-functional-success bg-functional-success/10 px-2 py-0.5 rounded-full mb-1">
                                        {pay.status}
                                    </span>
                                    <button className="text-xs text-brand-primary hover:underline">
                                        Comprovante
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full mt-lg py-sm text-xs font-bold text-neutral-medium hover:text-brand-primary flex items-center justify-center gap-1 transition-colors">
                        Ver todo o histórico <ArrowRight className="w-3 h-3" />
                    </button>
                </div>
            </div>
        </div>
    )
}

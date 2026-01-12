'use client'

import {
    TrendingUp,
    BarChart3,
    Calendar,
    Check,
    CheckCircle2,
    ChevronDown,
    ChevronRight,
    Clock,
    CreditCard,
    Download,
    FileText,
    HelpCircle,
    Info,
    Landmark,
    Mail,
    Pencil,
    Plus,
    Receipt,
    Shield,
    Trash2,
    Headphones,
    X,
} from 'lucide-react'
import Link from 'next/link'

// Mock data
const mockSubscription = {
    plan: 'Premium',
    status: 'active',
    price: 'R$ 1.000,00',
    cycle: 'Anual',
    startDate: '15 Jan 2025',
    nextBilling: '15 Fev 2026',
    autoRenew: true,
}

const mockStats = [
    {
        id: 1,
        label: 'Assinatura Anual',
        value: 'R$ 1.000',
        icon: CreditCard,
        iconBg: 'bg-brand-gold/10',
        iconColor: 'text-brand-gold',
        badge: 'ATIVO',
        badgeBg: 'bg-functional-success/10',
        badgeColor: 'text-functional-success',
        footer: 'Renovação automática',
    },
    {
        id: 2,
        label: 'Total Pago (Lifetime)',
        value: 'R$ 2.500',
        icon: Receipt,
        iconBg: 'bg-accent-emerald/10',
        iconColor: 'text-accent-emerald',
        showTrend: true,
        footer: 'Desde Jan 2025',
    },
    {
        id: 3,
        label: 'Próxima Cobrança',
        value: '15 Fev',
        icon: Clock,
        iconBg: 'bg-functional-info/10',
        iconColor: 'text-functional-info',
        badge: '30 DIAS',
        badgeBg: 'bg-brand-pale',
        badgeColor: 'text-brand-primary',
        footer: 'Cartão final ****4532',
    },
]

const mockPaymentMethods = [
    {
        id: 1,
        type: 'visa',
        last4: '4532',
        name: 'Carlos Silva',
        expiry: '08/2028',
        isPrimary: true,
        verified: true,
        secure3d: true,
    },
    {
        id: 2,
        type: 'mastercard',
        last4: '8921',
        name: 'Carlos Silva',
        expiry: '12/2027',
        isPrimary: false,
        verified: true,
    },
    {
        id: 3,
        type: 'pix',
        bank: 'Banco do Brasil',
        agency: '1234-5',
        account: '6789-0',
        isPrimary: false,
        verified: true,
        pixEnabled: true,
    },
]

const mockTransactions = [
    {
        id: 1,
        description: 'Assinatura Anual Premium',
        date: '15 Jan 2026',
        method: 'Visa ****4532',
        amount: 'R$ 1.000,00',
        status: 'approved',
    },
    {
        id: 2,
        description: 'Criação de Testamento',
        date: '10 Jan 2025',
        method: 'PIX',
        amount: 'R$ 1.500,00',
        status: 'approved',
    },
    {
        id: 3,
        description: 'Atualização de Documentos',
        date: '05 Dez 2025',
        method: 'Boleto',
        amount: 'R$ 150,00',
        status: 'pending',
    },
]

const mockInvoices = [
    { id: 1, number: 'NF-e #2026-001234', date: '15 Jan 2026', amount: 'R$ 1.000,00' },
    { id: 2, number: 'NF-e #2025-008921', date: '10 Jan 2025', amount: 'R$ 1.500,00' },
]

export default function BillingPage() {
    return (
        <div className="space-y-xl">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-neutral-dark">Gerenciamento de Pagamentos</h1>
                    <p className="text-neutral-medium">
                        Gerencie suas assinaturas, métodos de pagamento e histórico de transações
                    </p>
                </div>
                <button
                    type="button"
                    className="px-lg py-md bg-brand-primary text-white font-semibold rounded-button hover:bg-brand-hover transition-colors flex items-center gap-sm"
                >
                    <Plus className="w-5 h-5" />
                    Adicionar Método de Pagamento
                </button>
            </div>

            {/* Status Badges */}
            <div className="flex items-center gap-md">
                <div className="flex items-center gap-xs px-md py-sm bg-functional-success/10 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-functional-success" />
                    <span className="text-sm font-medium text-functional-success">Assinatura Ativa</span>
                </div>
                <div className="flex items-center gap-xs px-md py-sm bg-brand-pale rounded-lg">
                    <Calendar className="w-4 h-4 text-brand-primary" />
                    <span className="text-sm text-neutral-dark">
                        Próxima cobrança: <span className="font-semibold">15 Fev 2026</span>
                    </span>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                {mockStats.map((stat) => (
                    <div
                        key={stat.id}
                        className="bg-background-pure rounded-card p-xl border border-neutral-light"
                    >
                        <div className="flex items-center justify-between mb-md">
                            <div className={`w-12 h-12 ${stat.iconBg} rounded-xl flex items-center justify-center`}>
                                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                            </div>
                            {stat.badge && (
                                <span
                                    className={`px-sm py-2xs ${stat.badgeBg} ${stat.badgeColor} rounded-full text-xs font-semibold`}
                                >
                                    {stat.badge}
                                </span>
                            )}
                            {stat.showTrend && <TrendingUp className="w-5 h-5 text-functional-success" />}
                        </div>
                        <div className="text-2xl font-bold text-neutral-dark mb-xs">{stat.value}</div>
                        <div className="text-sm text-neutral-medium">{stat.label}</div>
                        <div className="mt-md pt-md border-t border-neutral-light">
                            <div className="text-xs text-neutral-medium">{stat.footer}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-xl">
                    {/* Payment Methods */}
                    <section className="bg-background-pure rounded-card p-xl border border-neutral-light">
                        <div className="flex items-center justify-between mb-lg">
                            <div>
                                <h2 className="text-xl font-bold text-neutral-dark mb-xs">Métodos de Pagamento</h2>
                                <p className="text-sm text-neutral-medium">
                                    Gerencie seus cartões e contas bancárias
                                </p>
                            </div>
                            <button
                                type="button"
                                className="px-md py-sm text-brand-primary font-semibold hover:bg-brand-pale rounded-button transition-colors flex items-center gap-xs"
                            >
                                <Plus className="w-4 h-4" />
                                Adicionar
                            </button>
                        </div>

                        <div className="space-y-md">
                            {mockPaymentMethods.map((pm) => (
                                <div
                                    key={pm.id}
                                    className={`rounded-xl p-lg border-2 ${pm.isPrimary
                                        ? 'border-brand-gold bg-brand-gold/5'
                                        : 'border-neutral-light hover:border-brand-primary'
                                        } transition-colors`}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start gap-md">
                                            <div
                                                className={`w-14 h-14 rounded-lg flex items-center justify-center ${pm.type === 'pix'
                                                    ? 'bg-gradient-to-br from-accent-emerald to-functional-success'
                                                    : 'bg-gradient-to-br from-brand-primary to-brand-hover'
                                                    }`}
                                            >
                                                {pm.type === 'pix' ? (
                                                    <Landmark className="w-6 h-6 text-white" />
                                                ) : (
                                                    <CreditCard className="w-6 h-6 text-white" />
                                                )}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-sm mb-xs">
                                                    <span className="text-lg font-bold text-neutral-dark">
                                                        {pm.type === 'pix'
                                                            ? 'Conta Bancária'
                                                            : `${pm.type === 'visa' ? 'Visa' : 'Mastercard'} •••• ${pm.last4}`}
                                                    </span>
                                                    {pm.isPrimary && (
                                                        <span className="px-sm py-2xs bg-brand-gold text-brand-primary rounded text-xs font-bold">
                                                            PRINCIPAL
                                                        </span>
                                                    )}
                                                    {pm.type === 'pix' && (
                                                        <span className="px-sm py-2xs bg-accent-emerald/10 text-accent-emerald rounded text-xs font-bold">
                                                            PIX
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="text-sm text-neutral-medium mb-xs">
                                                    {pm.type === 'pix' ? `${pm.bank} - Ag ${pm.agency}` : pm.name}
                                                </div>
                                                <div className="text-sm text-neutral-medium">
                                                    {pm.type === 'pix' ? `Conta •••• ${pm.account}` : `Expira em ${pm.expiry}`}
                                                </div>
                                                <div className="flex items-center gap-md mt-sm">
                                                    {pm.verified && (
                                                        <span className="flex items-center gap-2xs text-xs text-functional-success">
                                                            <CheckCircle2 className="w-3 h-3" />
                                                            Verificado
                                                        </span>
                                                    )}
                                                    {pm.secure3d && (
                                                        <span className="flex items-center gap-2xs text-xs text-functional-info">
                                                            <Shield className="w-3 h-3" />
                                                            3D Secure
                                                        </span>
                                                    )}
                                                    {pm.pixEnabled && (
                                                        <span className="flex items-center gap-2xs text-xs text-accent-emerald">
                                                            <Check className="w-3 h-3" />
                                                            PIX Habilitado
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-xs">
                                            {!pm.isPrimary && (
                                                <button
                                                    type="button"
                                                    className="px-md py-sm text-brand-primary font-semibold hover:bg-brand-pale rounded-button transition-colors text-sm"
                                                >
                                                    Tornar Principal
                                                </button>
                                            )}
                                            <button
                                                type="button"
                                                className="w-10 h-10 hover:bg-brand-pale rounded-lg flex items-center justify-center transition-colors"
                                            >
                                                <Pencil className="w-4 h-4 text-neutral-dark" />
                                            </button>
                                            <button
                                                type="button"
                                                className="w-10 h-10 hover:bg-functional-error/10 rounded-lg flex items-center justify-center transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4 text-functional-error" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Security Info */}
                        <div className="mt-lg p-md bg-functional-info/5 border border-functional-info/20 rounded-xl">
                            <div className="flex items-start gap-sm">
                                <Info className="w-5 h-5 text-functional-info flex-shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-sm font-semibold text-neutral-dark mb-xs">
                                        Pagamentos Seguros
                                    </div>
                                    <div className="text-sm text-neutral-medium">
                                        Todos os pagamentos são processados com criptografia SSL/TLS. Seus dados de
                                        cartão nunca são armazenados em nossos servidores.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Transaction History */}
                    <section className="bg-background-pure rounded-card p-xl border border-neutral-light">
                        <div className="flex items-center justify-between mb-lg">
                            <div>
                                <h2 className="text-xl font-bold text-neutral-dark mb-xs">
                                    Histórico de Transações
                                </h2>
                                <p className="text-sm text-neutral-medium">Todas as suas cobranças e pagamentos</p>
                            </div>
                            <div className="flex items-center gap-sm">
                                <button
                                    type="button"
                                    className="px-md py-sm text-neutral-dark hover:bg-background-subtle rounded-button transition-colors flex items-center gap-xs text-sm"
                                >
                                    <BarChart3 className="w-4 h-4" />
                                    Filtrar
                                </button>
                                <button
                                    type="button"
                                    className="px-md py-sm text-neutral-dark hover:bg-background-subtle rounded-button transition-colors flex items-center gap-xs text-sm"
                                >
                                    <Download className="w-4 h-4" />
                                    Exportar
                                </button>
                            </div>
                        </div>

                        <div className="space-y-sm">
                            {mockTransactions.map((tx) => (
                                <div
                                    key={tx.id}
                                    className={`flex items-center justify-between p-lg rounded-xl border transition-colors ${tx.status === 'failed'
                                        ? 'border-functional-error/20 bg-functional-error/5'
                                        : 'border-neutral-light hover:bg-background-subtle'
                                        }`}
                                >
                                    <div className="flex items-center gap-md">
                                        <div
                                            className={`w-12 h-12 rounded-lg flex items-center justify-center ${tx.status === 'approved'
                                                ? 'bg-functional-success/10'
                                                : tx.status === 'pending'
                                                    ? 'bg-functional-warning/10'
                                                    : 'bg-functional-error/10'
                                                }`}
                                        >
                                            {tx.status === 'approved' ? (
                                                <Check className="w-5 h-5 text-functional-success" />
                                            ) : tx.status === 'pending' ? (
                                                <Clock className="w-5 h-5 text-functional-warning" />
                                            ) : (
                                                <X className="w-5 h-5 text-functional-error" />
                                            )}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-neutral-dark mb-xs">{tx.description}</div>
                                            <div className="text-sm text-neutral-medium">
                                                {tx.date} • {tx.method}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold text-neutral-dark mb-xs">{tx.amount}</div>
                                        <div className="flex items-center gap-sm justify-end">
                                            <span
                                                className={`px-sm py-2xs rounded text-xs font-semibold ${tx.status === 'approved'
                                                    ? 'bg-functional-success/10 text-functional-success'
                                                    : tx.status === 'pending'
                                                        ? 'bg-functional-warning/10 text-functional-warning'
                                                        : 'bg-functional-error/10 text-functional-error'
                                                    }`}
                                            >
                                                {tx.status === 'approved'
                                                    ? 'APROVADO'
                                                    : tx.status === 'pending'
                                                        ? 'PENDENTE'
                                                        : 'FALHOU'}
                                            </span>
                                            <button
                                                type="button"
                                                className="text-brand-primary hover:text-brand-hover"
                                            >
                                                <Receipt className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-lg flex items-center justify-center">
                            <button
                                type="button"
                                className="px-lg py-md text-brand-primary font-semibold hover:bg-brand-pale rounded-button transition-colors flex items-center gap-sm"
                            >
                                Carregar Mais
                                <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                    </section>

                    {/* Invoices */}
                    <section className="bg-background-pure rounded-card p-xl border border-neutral-light">
                        <div className="flex items-center justify-between mb-lg">
                            <div>
                                <h2 className="text-xl font-bold text-neutral-dark mb-xs">Notas Fiscais</h2>
                                <p className="text-sm text-neutral-medium">
                                    Baixe suas notas fiscais e comprovantes
                                </p>
                            </div>
                        </div>

                        <div className="space-y-sm">
                            {mockInvoices.map((invoice) => (
                                <div
                                    key={invoice.id}
                                    className="flex items-center justify-between p-lg border border-neutral-light rounded-xl hover:bg-background-subtle transition-colors"
                                >
                                    <div className="flex items-center gap-md">
                                        <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                                            <FileText className="w-5 h-5 text-brand-primary" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-neutral-dark mb-xs">{invoice.number}</div>
                                            <div className="text-sm text-neutral-medium">
                                                Emitida em {invoice.date} • {invoice.amount}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-sm">
                                        <button
                                            type="button"
                                            className="px-md py-sm text-brand-primary font-semibold hover:bg-brand-pale rounded-button transition-colors flex items-center gap-xs text-sm"
                                        >
                                            <Download className="w-4 h-4" />
                                            Baixar PDF
                                        </button>
                                        <button
                                            type="button"
                                            className="px-md py-sm text-neutral-dark hover:bg-background-subtle rounded-button transition-colors flex items-center gap-xs text-sm"
                                        >
                                            <Mail className="w-4 h-4" />
                                            Enviar Email
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-xl">
                    {/* Subscription Details */}
                    <section className="bg-background-pure rounded-card p-xl border border-neutral-light">
                        <h3 className="text-xl font-bold text-neutral-dark mb-lg">Detalhes da Assinatura</h3>

                        <div className="space-y-md mb-lg">
                            <div className="flex items-center justify-between py-sm border-b border-neutral-light">
                                <span className="text-sm text-neutral-medium">Plano Atual</span>
                                <span className="font-semibold text-neutral-dark">{mockSubscription.plan}</span>
                            </div>
                            <div className="flex items-center justify-between py-sm border-b border-neutral-light">
                                <span className="text-sm text-neutral-medium">Status</span>
                                <span className="px-sm py-2xs bg-functional-success/10 text-functional-success rounded text-xs font-semibold">
                                    ATIVO
                                </span>
                            </div>
                            <div className="flex items-center justify-between py-sm border-b border-neutral-light">
                                <span className="text-sm text-neutral-medium">Valor Anual</span>
                                <span className="font-semibold text-neutral-dark">{mockSubscription.price}</span>
                            </div>
                            <div className="flex items-center justify-between py-sm border-b border-neutral-light">
                                <span className="text-sm text-neutral-medium">Ciclo de Cobrança</span>
                                <span className="font-semibold text-neutral-dark">{mockSubscription.cycle}</span>
                            </div>
                            <div className="flex items-center justify-between py-sm border-b border-neutral-light">
                                <span className="text-sm text-neutral-medium">Data de Início</span>
                                <span className="font-semibold text-neutral-dark">{mockSubscription.startDate}</span>
                            </div>
                            <div className="flex items-center justify-between py-sm">
                                <span className="text-sm text-neutral-medium">Próxima Renovação</span>
                                <span className="font-semibold text-neutral-dark">
                                    {mockSubscription.nextBilling}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-sm">
                            <button
                                type="button"
                                className="w-full py-md bg-brand-primary text-white font-semibold rounded-button hover:bg-brand-hover transition-colors"
                            >
                                Atualizar Plano
                            </button>
                            <button
                                type="button"
                                className="w-full py-md text-functional-error font-semibold hover:bg-functional-error/10 rounded-button transition-colors"
                            >
                                Cancelar Assinatura
                            </button>
                        </div>
                    </section>

                    {/* Security Badge */}
                    <section className="bg-accent-emerald/5 border border-accent-emerald/20 rounded-card p-lg">
                        <div className="flex items-start gap-md">
                            <div className="w-10 h-10 bg-accent-emerald/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Shield className="w-5 h-5 text-accent-emerald" />
                            </div>
                            <div>
                                <h4 className="font-bold text-neutral-dark mb-sm">Pagamentos 100% Seguros</h4>
                                <div className="text-sm text-neutral-medium space-y-xs">
                                    <div className="flex items-start gap-xs">
                                        <Check className="w-3 h-3 text-functional-success mt-0.5 flex-shrink-0" />
                                        <span>Criptografia SSL/TLS 256-bit</span>
                                    </div>
                                    <div className="flex items-start gap-xs">
                                        <Check className="w-3 h-3 text-functional-success mt-0.5 flex-shrink-0" />
                                        <span>PCI DSS Level 1 Compliant</span>
                                    </div>
                                    <div className="flex items-start gap-xs">
                                        <Check className="w-3 h-3 text-functional-success mt-0.5 flex-shrink-0" />
                                        <span>Processado por Stripe & Asaas</span>
                                    </div>
                                    <div className="flex items-start gap-xs">
                                        <Check className="w-3 h-3 text-functional-success mt-0.5 flex-shrink-0" />
                                        <span>Dados nunca armazenados</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Help Section */}
                    <section className="bg-background-pure rounded-card p-xl border border-neutral-light">
                        <h3 className="text-xl font-bold text-neutral-dark mb-md">Precisa de Ajuda?</h3>
                        <div className="space-y-sm">
                            <Link
                                href="#"
                                className="flex items-center justify-between p-sm hover:bg-background-subtle rounded-lg transition-colors group"
                            >
                                <div className="flex items-center gap-sm">
                                    <HelpCircle className="w-5 h-5 text-functional-info" />
                                    <span className="text-sm text-neutral-dark group-hover:text-brand-primary">
                                        Central de Ajuda
                                    </span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-neutral-light" />
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center justify-between p-sm hover:bg-background-subtle rounded-lg transition-colors group"
                            >
                                <div className="flex items-center gap-sm">
                                    <Headphones className="w-5 h-5 text-functional-success" />
                                    <span className="text-sm text-neutral-dark group-hover:text-brand-primary">
                                        Falar com Suporte
                                    </span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-neutral-light" />
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center justify-between p-sm hover:bg-background-subtle rounded-lg transition-colors group"
                            >
                                <div className="flex items-center gap-sm">
                                    <FileText className="w-5 h-5 text-brand-gold" />
                                    <span className="text-sm text-neutral-dark group-hover:text-brand-primary">
                                        Termos de Serviço
                                    </span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-neutral-light" />
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

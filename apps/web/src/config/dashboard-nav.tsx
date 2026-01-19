import {
    LayoutDashboard,
    FileText,
    Users,
    Calendar,
    CreditCard,
    FolderOpen,
    Gavel,
    FileCheck,
    Wallet,
    Briefcase,
    BarChart,
    Settings
} from 'lucide-react'
import React from 'react'

export type NavConfigItem = {
    label: string
    href: string
    icon: React.ReactNode
    exact?: boolean
}

export const CLIENT_NAV: NavConfigItem[] = [
    { label: 'Visão Geral', href: '/dashboard', icon: <LayoutDashboard className="w-5 h-5" />, exact: true },
    { label: 'Meus Testamentos', href: '/dashboard/testaments', icon: <FileText className="w-5 h-5" /> },
    { label: 'Beneficiários', href: '/dashboard/beneficiaries', icon: <Users className="w-5 h-5" /> },
    { label: 'Documentos', href: '/dashboard/documents', icon: <FolderOpen className="w-5 h-5" /> },
    { label: 'Consultas', href: '/dashboard/consultations', icon: <Calendar className="w-5 h-5" /> },
    { label: 'Pagamentos', href: '/dashboard/billing', icon: <CreditCard className="w-5 h-5" /> },
]

export const LAWYER_NAV: NavConfigItem[] = [
    { label: 'Painel Jurídico', href: '/lawyer', icon: <Gavel className="w-5 h-5" />, exact: true },
    { label: 'Minha Agenda', href: '/lawyer/schedule', icon: <Calendar className="w-5 h-5" /> },
    { label: 'Validações', href: '/lawyer/validations', icon: <FileCheck className="w-5 h-5" /> },
    { label: 'Financeiro', href: '/lawyer/billing', icon: <Wallet className="w-5 h-5" /> },
    { label: 'Configurações', href: '/lawyer/settings', icon: <Settings className="w-5 h-5" /> },
]

export const PARTNER_NAV: NavConfigItem[] = [
    { label: 'Painel Parceiro', href: '/partner', icon: <Briefcase className="w-5 h-5" />, exact: true },
    { label: 'Minhas Indicações', href: '/partner/referrals', icon: <Users className="w-5 h-5" /> },
    { label: 'Relatórios', href: '/partner/reports', icon: <BarChart className="w-5 h-5" /> },
    { label: 'Dados Bancários', href: '/partner/banking', icon: <Wallet className="w-5 h-5" /> },
]

export const ADMIN_NAV: NavConfigItem[] = [
    { label: 'Global Admin', href: '/admin', icon: <LayoutDashboard className="w-5 h-5" />, exact: true },
    { label: 'Advogados', href: '/admin/lawyers', icon: <Gavel className="w-5 h-5" /> },
    { label: 'Parceiros', href: '/admin/partners', icon: <Briefcase className="w-5 h-5" /> },
    { label: 'Auditoria', href: '/admin/audit', icon: <FileCheck className="w-5 h-5" /> },
]

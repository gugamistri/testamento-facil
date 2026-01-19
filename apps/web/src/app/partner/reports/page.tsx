import React from 'react'
import { BarChart, TrendingUp, Users, DollarSign, ArrowUpRight, ArrowDownRight, Calendar } from 'lucide-react'

export default function PartnerReportsPage() {
    // MOCK DATA for Reports
    const metrics = {
        totalRevenue: 4500000, // in cents (R$ 45.000,00)
        totalCommission: 900000, // in cents (R$ 9.000,00 - 20%)
        pendingCommission: 150000, // in cents (R$ 1.500,00)
        conversionRate: 12.5,
        totalClicks: 1240,
        totalSignups: 155
    }

    const monthlyPerformance = [
        { month: 'Janeiro 2026', referrals: 45, commission: 250000, status: 'Em andamento' },
        { month: 'Dezembro 2025', referrals: 38, commission: 210000, status: 'Pago' },
        { month: 'Novembro 2025', referrals: 42, commission: 235000, status: 'Pago' },
        { month: 'Outubro 2025', referrals: 30, commission: 165000, status: 'Pago' },
    ]

    const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

    return (
        <div className="space-y-xl">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-black text-neutral-dark tracking-tight">Relatórios de Desempenho</h1>
                <p className="text-neutral-medium">Acompanhe seus resultados e projeções financeiras.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
                <KPICard
                    title="Comissão Total"
                    value={formatter.format(metrics.totalCommission / 100)}
                    icon={<DollarSign className="w-5 h-5 text-white" />}
                    color="bg-functional-success"
                    trend="+15%"
                    trendUp={true}
                />
                <KPICard
                    title="A Receber"
                    value={formatter.format(metrics.pendingCommission / 100)}
                    icon={<ClockIcon className="w-5 h-5 text-white" />}
                    color="bg-brand-gold"
                    subtext="Previsão: 05/02"
                />
                <KPICard
                    title="Conversão"
                    value={`${metrics.conversionRate}%`}
                    icon={<TrendingUp className="w-5 h-5 text-white" />}
                    color="bg-accent-purple"
                    trend="+2.1%"
                    trendUp={true}
                />
                <KPICard
                    title="Lead / Visitante"
                    value={`${metrics.totalSignups} / ${metrics.totalClicks}`}
                    icon={<Users className="w-5 h-5 text-white" />}
                    color="bg-brand-primary"
                    subtext="CTR Global: 12.5%"
                />
            </div>

            {/* Main Charts Area (Placeholder for Chart.js/Recharts) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
                {/* Monthly Earnings Table */}
                <div className="lg:col-span-2 bg-white rounded-card border border-neutral-light/20 p-xl">
                    <div className="flex items-center justify-between mb-lg">
                        <h3 className="font-bold text-neutral-dark flex items-center gap-2">
                            <BarChart className="w-5 h-5 text-neutral-medium" />
                            Histórico Mensal
                        </h3>
                        <button className="text-xs font-bold text-brand-primary uppercase tracking-wider hover:underline">
                            Exportar CSV
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-background-subtle border-b border-neutral-light/20">
                                <tr>
                                    <th className="p-md font-bold text-neutral-medium">Mês</th>
                                    <th className="p-md font-bold text-neutral-medium text-center">Indicações</th>
                                    <th className="p-md font-bold text-neutral-medium text-right">Comissão</th>
                                    <th className="p-md font-bold text-neutral-medium text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-light/10">
                                {monthlyPerformance.map((row, i) => (
                                    <tr key={i} className="hover:bg-background-subtle/30">
                                        <td className="p-md font-medium text-neutral-dark">{row.month}</td>
                                        <td className="p-md text-center text-neutral-medium">{row.referrals}</td>
                                        <td className="p-md text-right font-bold text-neutral-dark">
                                            {formatter.format(row.commission / 100)}
                                        </td>
                                        <td className="p-md text-right">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${row.status === 'Pago'
                                                ? 'bg-functional-success/10 text-functional-success'
                                                : 'bg-brand-gold/10 text-brand-gold'
                                                }`}>
                                                {row.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Insight Widget */}
                <div className="bg-brand-primary text-white rounded-card p-xl flex flex-col justify-between relative overflow-hidden group">
                    {/* Decorative Elements */}
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <h3 className="font-bold text-lg mb-sm">Dica de Performance</h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-xl">
                            Parceiros que compartilham links no Linkedin têm uma taxa de conversão <strong>3x maior</strong>.
                        </p>
                    </div>

                    <button className="relative z-10 w-full bg-white text-brand-primary font-bold py-md rounded-lg shadow-lg hover:shadow-xl hover:bg-neutral-50 transition-all flex items-center justify-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Ver Materiais de Marketing
                    </button>
                </div>
            </div>
        </div>
    )
}

function KPICard({ title, value, icon, color, trend, trendUp, subtext }: any) {
    return (
        <div className="bg-white rounded-card border border-neutral-light/20 p-lg shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-md">
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-medium mb-xs">{title}</p>
                    <h4 className="text-2xl font-black text-neutral-dark">{value}</h4>
                </div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-sm ${color}`}>
                    {icon}
                </div>
            </div>
            {(trend || subtext) && (
                <div className="flex items-center gap-2 text-xs">
                    {trend && (
                        <span className={`font-bold flex items-center ${trendUp ? 'text-functional-success' : 'text-functional-error'}`}>
                            {trendUp ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                            {trend}
                        </span>
                    )}
                    {subtext && <span className="text-neutral-light font-medium">{subtext}</span>}
                </div>
            )}
        </div>
    )
}

function ClockIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    )
}

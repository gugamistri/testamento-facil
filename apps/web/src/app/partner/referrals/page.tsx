import { getPartnerReferrals } from '@/actions/referrals'
import { Check, Clock, X } from 'lucide-react'

export default async function ReferralsPage() {
    const referrals = await getPartnerReferrals()

    // Aggregate Stats
    const totalReferred = referrals.length
    const activeClients = referrals.filter((r: any) => r.clientSessions.length > 0).length
    const totalValueGenerated = referrals.reduce((acc: number, r: any) => {
        return acc + r.clientSessions.reduce((sum: number, s: any) => sum + (s.price || 0), 0)
    }, 0)

    const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

    return (
        <div className="space-y-xl">
            <div className="flex flex-col gap-sm">
                <h1 className="text-3xl font-black text-neutral-dark tracking-tight">Minhas Indicações</h1>
                <p className="text-neutral-medium">Gerencie leads e acompanhe conversões.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                <div className="bg-white p-lg rounded-card border border-neutral-light/20">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-medium mb-xs">Leads Totais</p>
                    <p className="text-3xl font-black text-neutral-dark">{totalReferred}</p>
                </div>
                <div className="bg-white p-lg rounded-card border border-neutral-light/20">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-medium mb-xs">Clientes Ativos</p>
                    <p className="text-3xl font-black text-brand-primary">{activeClients}</p>
                </div>
                <div className="bg-white p-lg rounded-card border border-neutral-light/20">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-medium mb-xs">Valor Gerado (GMV)</p>
                    <p className="text-3xl font-black text-functional-success">{formatter.format(totalValueGenerated / 100)}</p>
                </div>
            </div>

            {/* List */}
            <div className="bg-white rounded-card border border-neutral-light/20 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-background-subtle border-b border-neutral-light/20">
                            <tr>
                                <th className="p-md text-xs font-bold uppercase tracking-widest text-neutral-medium">Cliente</th>
                                <th className="p-md text-xs font-bold uppercase tracking-widest text-neutral-medium">Data Cadastro</th>
                                <th className="p-md text-xs font-bold uppercase tracking-widest text-neutral-medium">Status</th>
                                <th className="p-md text-xs font-bold uppercase tracking-widest text-neutral-medium text-right">Valor</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-light/10">
                            {referrals.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="p-xl text-center text-neutral-medium">Nenhuma indicação ainda.</td>
                                </tr>
                            ) : (
                                referrals.map((ref: any) => {
                                    const hasPaidSession = ref.clientSessions.some((s: any) => s.status !== 'CANCELLED')
                                    const totalSpent = ref.clientSessions.reduce((sum: number, s: any) => sum + (s.price || 0), 0)

                                    return (
                                        <tr key={ref.id} className="hover:bg-background-subtle/50 transition-colors">
                                            <td className="p-md">
                                                <p className="font-bold text-neutral-dark">{ref.name || 'Anônimo'}</p>
                                                <p className="text-xs text-neutral-light">{ref.email}</p>
                                            </td>
                                            <td className="p-md text-sm text-neutral-medium">
                                                {new Date(ref.createdAt).toLocaleDateString('pt-BR')}
                                            </td>
                                            <td className="p-md">
                                                {hasPaidSession ? (
                                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-functional-success/10 text-functional-success text-xs font-bold">
                                                        <Check className="w-3 h-3" /> Convertido
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-light/10 text-neutral-medium text-xs font-bold">
                                                        <Clock className="w-3 h-3" /> Pendente
                                                    </span>
                                                )}
                                            </td>
                                            <td className="p-md text-right font-mono text-sm text-neutral-dark">
                                                {formatter.format(totalSpent / 100)}
                                            </td>
                                        </tr>
                                    )
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

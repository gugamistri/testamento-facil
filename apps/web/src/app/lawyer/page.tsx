import { SignedIn, UserButton } from '@clerk/nextjs'

export default function LawyerDashboardPage() {
    return (
        <div className="space-y-xl">
            <div className="flex flex-col gap-sm">
                <h1 className="text-3xl font-black text-neutral-dark tracking-tight">Painel do Advogado</h1>
                <p className="text-neutral-medium">Gerencie suas validações e agenda.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                {/* Stats Cards Placeholders */}
                <div className="p-xl bg-white rounded-card shadow-sm border border-neutral-light/20">
                    <h3 className="text-sm font-bold text-neutral-medium uppercase tracking-widest mb-xs">Validações Pendentes</h3>
                    <p className="text-4xl font-black text-brand-primary">0</p>
                </div>
                <div className="p-xl bg-white rounded-card shadow-sm border border-neutral-light/20">
                    <h3 className="text-sm font-bold text-neutral-medium uppercase tracking-widest mb-xs">Próxima Sessão</h3>
                    <p className="text-lg font-bold text-neutral-dark">Nenhuma</p>
                </div>
                <div className="p-xl bg-white rounded-card shadow-sm border border-neutral-light/20">
                    <h3 className="text-sm font-bold text-neutral-medium uppercase tracking-widest mb-xs">Avaliação Média</h3>
                    <p className="text-4xl font-black text-functional-success">5.0</p>
                </div>
            </div>
        </div>
    )
}

import InviteCard from './InviteCard'

export default function PartnerDashboardPage() {
    // Mocked data for now, similar to Lawyer dashboard, until DB is fully connected
    const profile = { referralCode: 'PARTNER-DEMO-123' } // await getPartnerProfile()

    // Auto-create logic disabled for now to allow viewing the page without DB
    /* if (!profile) {
        profile = await createPartnerProfileShim()
    } */

    const referralCode = profile?.referralCode || 'PENDING'
    const shareUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/?ref=${referralCode}`

    return (
        <div className="space-y-xl">
            <div className="flex flex-col gap-sm">
                <h1 className="text-3xl font-black text-neutral-dark tracking-tight">Painel do Parceiro</h1>
                <p className="text-neutral-medium">Acompanhe suas indicações e impacto.</p>
            </div>

            {/* Invite Section */}
            <InviteCard code={referralCode} url={shareUrl} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
                <div className="p-xl bg-white rounded-card shadow-sm border border-neutral-light/20">
                    <h3 className="text-sm font-bold text-neutral-medium uppercase tracking-widest mb-xs">Total Indicações</h3>
                    <p className="text-4xl font-black text-accent-purple">0</p>
                </div>
                <div className="p-xl bg-white rounded-card shadow-sm border border-neutral-light/20">
                    <h3 className="text-sm font-bold text-neutral-medium uppercase tracking-widest mb-xs">Advogados Ativos</h3>
                    <p className="text-4xl font-black text-neutral-dark">0</p>
                </div>
            </div>
        </div>
    )
}

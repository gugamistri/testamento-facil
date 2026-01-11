'use client'

import Link from 'next/link'
import { ArrowLeft, Activity, Clock, Shield, User, FileText } from 'lucide-react'

export default function AuditLogPage() {
    const auditEntries = [
        { id: 1, action: 'Testamento criado', timestamp: '11/01/2026 08:32', icon: <FileText className="w-4 h-4" />, status: 'success' },
        { id: 2, action: 'Assinatura digital registrada', timestamp: '11/01/2026 08:45', icon: <Shield className="w-4 h-4" />, status: 'success' },
        { id: 3, action: 'Check-in de vida confirmado', timestamp: '10/01/2026 14:22', icon: <Activity className="w-4 h-4" />, status: 'success' },
        { id: 4, action: 'Beneficiário adicionado', timestamp: '09/01/2026 10:15', icon: <User className="w-4 h-4" />, status: 'info' },
    ]

    return (
        <div className="min-h-screen bg-background-subtle p-2xl">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-lg mb-2xl">
                    <Link href="/dashboard" className="p-sm bg-background rounded-xl border border-neutral-light/20 hover:border-brand-primary transition-colors">
                        <ArrowLeft className="w-5 h-5 text-neutral-medium" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-neutral-dark">Audit Log</h1>
                        <p className="text-sm text-neutral-medium">Histórico completo de atividades</p>
                    </div>
                </div>

                <div className="bg-background rounded-[32px] border border-neutral-light/20 p-2xl">
                    <div className="space-y-md">
                        {auditEntries.map((entry) => (
                            <div key={entry.id} className="flex items-center gap-lg p-lg bg-background-subtle rounded-2xl">
                                <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center text-brand-primary">
                                    {entry.icon}
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-neutral-dark">{entry.action}</p>
                                    <p className="text-xs text-neutral-medium flex items-center gap-xs">
                                        <Clock className="w-3 h-3" />
                                        {entry.timestamp}
                                    </p>
                                </div>
                                <span className="px-md py-xs bg-functional-success/10 text-functional-success text-xs font-bold rounded-full uppercase">
                                    ✓ Registrado
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

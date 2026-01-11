import { FileText, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function TestamentsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-neutral-dark">Meus Testamentos</h1>
                    <p className="text-neutral-medium">Gerencie suas versões e documentos legais</p>
                </div>
                <Link href="/dashboard/wizard">
                    <button className="px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors flex items-center gap-2 font-medium">
                        <Plus className="w-5 h-5" />
                        Novo Testamento
                    </button>
                </Link>
            </div>

            <div className="border border-neutral-light rounded-xl p-8 flex flex-col items-center justify-center text-center bg-white">
                <div className="w-16 h-16 bg-background-subtle rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-neutral-medium" />
                </div>
                <h3 className="text-lg font-bold text-neutral-dark mb-2">Histórico de Versões</h3>
                <p className="text-neutral-medium max-w-sm mb-6">
                    Aqui você poderá visualizar todas as versões anteriores do seu testamento e baixar cópias certificadas.
                </p>
                <span className="text-xs px-2 py-1 bg-functional-info text-white rounded">Em breve</span>
            </div>
        </div>
    )
}

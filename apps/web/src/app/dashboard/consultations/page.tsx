'use client'

import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Phone } from 'lucide-react'

export default function ConsultationsPage() {
    return (
        <div className="min-h-screen bg-background-subtle p-2xl">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-lg mb-2xl">
                    <Link href="/dashboard" className="p-sm bg-background rounded-xl border border-neutral-light/20 hover:border-brand-primary transition-colors">
                        <ArrowLeft className="w-5 h-5 text-neutral-medium" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-neutral-dark">Consultas</h1>
                        <p className="text-sm text-neutral-medium">Gerencie suas consultorias agendadas</p>
                    </div>
                </div>

                <div className="bg-background rounded-[32px] border border-neutral-light/20 p-2xl">
                    <div className="flex flex-col items-center text-center py-3xl">
                        <div className="w-16 h-16 bg-brand-pale rounded-full flex items-center justify-center mb-xl">
                            <Calendar className="w-8 h-8 text-brand-primary" />
                        </div>
                        <h2 className="text-xl font-bold text-neutral-dark mb-sm">Nenhuma Consultoria Agendada</h2>
                        <p className="text-neutral-medium max-w-md mb-xl">
                            Agende uma consultoria gratuita com um de nossos especialistas para tirar suas dúvidas sobre testamento digital.
                        </p>
                        <Link href="/schedule">
                            <button type="button" className="btn-primary">
                                <Clock className="w-4 h-4" />
                                Agendar Consultoria Gratuita
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

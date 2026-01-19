import { SupportForm } from '@/components/support/SupportForm'
import { AlertTriangle, BookOpen, ShieldCheck } from 'lucide-react'

export default function LawyerSupportPage() {
    return (
        <div className="space-y-xl max-w-5xl mx-auto">
            <div className="flex flex-col gap-sm">
                <h1 className="text-3xl font-black text-neutral-dark tracking-tight">Suporte ao Profissional</h1>
                <p className="text-neutral-medium">Reporte incidentes, dúvidas técnicas ou questões de conformidade.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
                {/* Main Form */}
                <div className="lg:col-span-2">
                    <SupportForm role="LAWYER" />
                </div>

                {/* Sidebar Info */}
                <div className="space-y-lg">
                    <div className="p-xl bg-neutral-dark rounded-card text-white shadow-xl">
                        <h3 className="text-lg font-bold mb-md flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-brand-gold" />
                            SLA Garantido
                        </h3>
                        <p className="text-sm text-white/60 mb-lg">
                            Como advogado verificado, suas solicitações têm prioridade máxima de atendimento.
                        </p>
                        <div className="space-y-xs text-sm">
                            <div className="flex justify-between border-b border-white/10 py-2">
                                <span>No-Show / Incidentes</span>
                                <span className="font-bold text-brand-gold">30 min</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 py-2">
                                <span>Técnico / Plataforma</span>
                                <span className="font-bold text-brand-gold">2 horas</span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span>Financeiro / Repasse</span>
                                <span className="font-bold text-white">24 horas</span>
                            </div>
                        </div>
                    </div>

                    <div className="border border-brand-primary/20 bg-brand-primary/5 p-xl rounded-card">
                        <h3 className="flex items-center gap-sm font-bold text-brand-primaryDark mb-md">
                            <BookOpen className="w-5 h-5" />
                            Base de Conhecimento
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Guia de Validação Forense",
                                "Protocolos de Gravação OAB",
                                "Resolução de Disputas",
                                "Configuração de Stripe Connect"
                            ].map((doc, i) => (
                                <li key={i}>
                                    <a href="#" className="flex items-center gap-2 text-sm text-neutral-dark hover:text-brand-primary transition-colors underline decoration-dotted">
                                        {doc}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

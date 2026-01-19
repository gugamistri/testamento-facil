import { SupportForm } from '@/components/support/SupportForm'
import { LifeBuoy, Mail, MessageCircle, Phone } from 'lucide-react'

export default function ClientSupportPage() {
    return (
        <div className="space-y-xl max-w-5xl mx-auto">
            <div className="text-center md:text-left">
                <h1 className="text-3xl font-black text-neutral-dark tracking-tight mb-2">Central de Ajuda</h1>
                <p className="text-neutral-medium">Estamos aqui para garantir sua segurança e tranquilidade.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
                {/* Main Form */}
                <div className="lg:col-span-2">
                    <SupportForm role="CLIENT" />
                </div>

                {/* Sidebar Info */}
                <div className="space-y-lg">
                    <div className="p-xl bg-brand-primary rounded-card text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                        <h3 className="text-lg font-bold mb-lg relative z-10">Canais Rápidos</h3>
                        <ul className="space-y-md relative z-10">
                            <li className="flex items-center gap-md">
                                <div className="p-2 rounded-lg bg-white/20">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase opacity-60">Emergência</p>
                                    <p className="text-sm font-bold">0800 123 4567</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-md">
                                <div className="p-2 rounded-lg bg-white/20">
                                    <MessageCircle className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase opacity-60">WhatsApp</p>
                                    <p className="text-sm font-bold">(11) 99999-9999</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-md">
                                <div className="p-2 rounded-lg bg-white/20">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase opacity-60">E-mail</p>
                                    <p className="text-sm font-bold">ajuda@trustvault.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-neutral-light/20 p-xl rounded-card shadow-sm">
                        <h3 className="flex items-center gap-sm font-bold text-neutral-dark mb-md">
                            <LifeBuoy className="w-5 h-5 text-brand-primary" />
                            FAQ Rápido
                        </h3>
                        <ul className="space-y-sm">
                            {[
                                "Como reagendar uma sessão?",
                                "O vídeo é salvo automaticamente?",
                                "Como baixar meu dossiê final?",
                                "Métodos de pagamento aceitos"
                            ].map((q, i) => (
                                <li key={i}>
                                    <a href="#" className="block p-3 rounded-lg bg-background-subtle hover:bg-neutral-light/10 text-sm text-neutral-medium hover:text-brand-primary transition-colors">
                                        {q}
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

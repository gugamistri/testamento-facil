'use client'

import { useState } from 'react'
import { useSession } from '@clerk/nextjs'
import Link from 'next/link'
import { ArrowLeft, User, Bell, Shield, CreditCard, Key, Activity, Phone, Mail, MessageCircle, Check, ChevronRight, Save, Terminal } from 'lucide-react'
import { updateUserRole } from '@/actions/dev-tools'
import { cn } from '@/lib/utils'

type SettingsTab = 'profile' | 'notifications' | 'monitoring' | 'security' | 'billing' | 'access' | 'developer'

export default function SettingsPage() {
    const { session } = useSession()
    const [activeTab, setActiveTab] = useState<SettingsTab>('profile')
    const [saved, setSaved] = useState(false)

    // Form states
    const [checkInFrequency, setCheckInFrequency] = useState('6')
    const [notifications, setNotifications] = useState({
        email: true,
        sms: true,
        whatsapp: false,
    })
    const [emergencyContacts, setEmergencyContacts] = useState([
        { name: 'Maria Silva', phone: '(11) 99999-1111', email: 'maria@email.com' },
    ])

    const tabs = [
        { id: 'profile', icon: User, label: 'Dados Pessoais' },
        { id: 'notifications', icon: Bell, label: 'Notificações' },
        { id: 'monitoring', icon: Activity, label: 'Monitoramento' },
        { id: 'security', icon: Shield, label: 'Segurança' },
        { id: 'billing', icon: CreditCard, label: 'Plano' },
        { id: 'access', icon: Key, label: 'Acesso' },
        { id: 'developer', icon: Terminal, label: 'Developer Zone' },
    ]

    const handleSave = () => {
        setSaved(true)
        setTimeout(() => setSaved(false), 2000)
    }

    return (
        <div className="min-h-screen bg-background-subtle p-lg sm:p-2xl">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-lg mb-2xl">
                    <Link href="/dashboard" className="p-sm bg-background rounded-xl border border-neutral-light/20 hover:border-brand-primary transition-colors">
                        <ArrowLeft className="w-5 h-5 text-neutral-medium" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-neutral-dark">Configurações</h1>
                        <p className="text-sm text-neutral-medium">Gerencie sua conta e preferências</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-xl">
                    {/* Sidebar */}
                    <div className="lg:w-64 flex-shrink-0">
                        <div className="bg-background rounded-2xl border border-neutral-light/20 p-sm">
                            {tabs.map((tab) => {
                                const Icon = tab.icon
                                return (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        onClick={() => setActiveTab(tab.id as SettingsTab)}
                                        className={cn(
                                            "w-full flex items-center gap-md p-md rounded-xl transition-colors text-left",
                                            activeTab === tab.id
                                                ? "bg-brand-primary text-white"
                                                : "text-neutral-medium hover:bg-background-subtle"
                                        )}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span className="font-semibold text-sm">{tab.label}</span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="bg-background rounded-[32px] border border-neutral-light/20 p-xl">

                            {/* Profile Tab */}
                            {activeTab === 'profile' && (
                                <div>
                                    <h2 className="text-xl font-bold text-neutral-dark mb-xl">Dados Pessoais</h2>
                                    <div className="space-y-lg">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
                                            <div>
                                                <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-sm">Nome</label>
                                                <input type="text" defaultValue="Gustavo Silva" className="settings-input" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-sm">Sobrenome</label>
                                                <input type="text" defaultValue="Santos" className="settings-input" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-sm">Email</label>
                                            <input type="email" defaultValue="gustavo@email.com" className="settings-input" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-sm">Telefone</label>
                                            <input type="tel" defaultValue="(11) 99999-9999" className="settings-input" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Notifications Tab */}
                            {activeTab === 'notifications' && (
                                <div>
                                    <h2 className="text-xl font-bold text-neutral-dark mb-xl">Preferências de Notificação</h2>
                                    <div className="space-y-md">
                                        {[
                                            { key: 'email', icon: Mail, label: 'Email', desc: 'Receber notificações por email' },
                                            { key: 'sms', icon: MessageCircle, label: 'SMS', desc: 'Receber notificações por SMS' },
                                            { key: 'whatsapp', icon: Phone, label: 'WhatsApp', desc: 'Receber notificações via WhatsApp' },
                                        ].map((item) => {
                                            const Icon = item.icon
                                            const isEnabled = notifications[item.key as keyof typeof notifications]
                                            return (
                                                <div key={item.key} className="flex items-center justify-between p-lg bg-background-subtle rounded-2xl">
                                                    <div className="flex items-center gap-lg">
                                                        <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center">
                                                            <Icon className="w-5 h-5 text-brand-primary" />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-neutral-dark">{item.label}</p>
                                                            <p className="text-sm text-neutral-medium">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => setNotifications({ ...notifications, [item.key]: !isEnabled })}
                                                        className={cn(
                                                            "w-12 h-7 rounded-full transition-colors relative",
                                                            isEnabled ? "bg-brand-primary" : "bg-neutral-light"
                                                        )}
                                                    >
                                                        <div className={cn(
                                                            "absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform",
                                                            isEnabled ? "right-1" : "left-1"
                                                        )} />
                                                    </button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Monitoring Tab */}
                            {activeTab === 'monitoring' && (
                                <div>
                                    <h2 className="text-xl font-bold text-neutral-dark mb-xl">Configurações de Monitoramento</h2>

                                    <div className="space-y-2xl">
                                        {/* Check-in Frequency */}
                                        <div>
                                            <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-md">
                                                Frequência de Confirmação de Vida
                                            </label>
                                            <div className="grid grid-cols-3 gap-md">
                                                {[
                                                    { value: '3', label: 'Trimestral', extra: '+R$ 100/ano' },
                                                    { value: '6', label: 'Semestral', extra: 'Padrão' },
                                                    { value: '12', label: 'Anual', extra: 'Menos seguro' },
                                                ].map((opt) => (
                                                    <button
                                                        key={opt.value}
                                                        type="button"
                                                        onClick={() => setCheckInFrequency(opt.value)}
                                                        className={cn(
                                                            "p-lg rounded-2xl text-center transition-all border",
                                                            checkInFrequency === opt.value
                                                                ? "bg-brand-pale border-brand-primary"
                                                                : "bg-background-subtle border-transparent hover:border-neutral-light"
                                                        )}
                                                    >
                                                        <p className={cn(
                                                            "font-bold",
                                                            checkInFrequency === opt.value ? "text-brand-primary" : "text-neutral-dark"
                                                        )}>{opt.label}</p>
                                                        <p className="text-xs text-neutral-medium">{opt.extra}</p>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Emergency Contacts */}
                                        <div>
                                            <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-md">
                                                Contatos de Emergência
                                            </label>
                                            <p className="text-sm text-neutral-medium mb-lg">
                                                Se você não responder em 14 dias, tentaremos contato com estas pessoas.
                                            </p>
                                            <div className="space-y-md">
                                                {emergencyContacts.map((contact, index) => (
                                                    <div key={index} className="flex items-center gap-lg p-lg bg-background-subtle rounded-2xl">
                                                        <div className="w-10 h-10 bg-brand-pale rounded-full flex items-center justify-center">
                                                            <User className="w-5 h-5 text-brand-primary" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="font-bold text-neutral-dark">{contact.name}</p>
                                                            <p className="text-sm text-neutral-medium">{contact.phone} • {contact.email}</p>
                                                        </div>
                                                        <ChevronRight className="w-4 h-4 text-neutral-light" />
                                                    </div>
                                                ))}
                                                <button type="button" className="w-full p-lg border-2 border-dashed border-neutral-light rounded-2xl text-neutral-medium hover:border-brand-primary hover:text-brand-primary transition-colors">
                                                    + Adicionar contato de emergência
                                                </button>
                                            </div>
                                        </div>

                                        <Link href="/dashboard/life-log" className="flex items-center justify-between p-lg bg-brand-pale rounded-2xl">
                                            <div className="flex items-center gap-lg">
                                                <Activity className="w-5 h-5 text-brand-primary" />
                                                <span className="font-bold text-brand-primary">Ver Histórico de Confirmações</span>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-brand-primary" />
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {/* Security Tab */}
                            {activeTab === 'security' && (
                                <div>
                                    <h2 className="text-xl font-bold text-neutral-dark mb-xl">Segurança</h2>
                                    <div className="space-y-md">
                                        <div className="flex items-center justify-between p-lg bg-background-subtle rounded-2xl">
                                            <div>
                                                <p className="font-bold text-neutral-dark">Autenticação de 2 Fatores</p>
                                                <p className="text-sm text-neutral-medium">Adicione uma camada extra de segurança</p>
                                            </div>
                                            <span className="px-md py-xs bg-functional-success/10 text-functional-success text-xs font-bold rounded-full">Ativo</span>
                                        </div>
                                        <button type="button" className="w-full flex items-center justify-between p-lg bg-background-subtle rounded-2xl hover:bg-brand-pale transition-colors">
                                            <span className="font-bold text-neutral-dark">Alterar Senha</span>
                                            <ChevronRight className="w-4 h-4 text-neutral-light" />
                                        </button>
                                        <button type="button" className="w-full flex items-center justify-between p-lg bg-background-subtle rounded-2xl hover:bg-brand-pale transition-colors">
                                            <span className="font-bold text-neutral-dark">Sessões Ativas</span>
                                            <ChevronRight className="w-4 h-4 text-neutral-light" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Billing Tab */}
                            {activeTab === 'billing' && (
                                <div>
                                    <h2 className="text-xl font-bold text-neutral-dark mb-xl">Plano e Pagamento</h2>
                                    <div className="bg-brand-pale rounded-2xl p-lg mb-xl">
                                        <div className="flex items-center justify-between mb-md">
                                            <span className="text-xs font-black uppercase tracking-widest text-brand-primary">Plano Atual</span>
                                            <span className="px-md py-xs bg-brand-primary text-white text-xs font-bold rounded-full">Essencial</span>
                                        </div>
                                        <p className="text-2xl font-bold text-neutral-dark">R$ 1.500 <span className="text-sm font-normal text-neutral-medium">+ R$ 1.000/ano</span></p>
                                        <p className="text-sm text-neutral-medium mt-xs">Próxima renovação: 01/03/2027</p>
                                    </div>
                                    <button type="button" className="btn-primary w-full">Fazer Upgrade</button>
                                </div>
                            )}

                            {/* Access Tab */}
                            {activeTab === 'access' && (
                                <div>
                                    <h2 className="text-xl font-bold text-neutral-dark mb-xl">Acesso aos Dados</h2>
                                    <div className="space-y-md">
                                        <button type="button" className="w-full flex items-center justify-between p-lg bg-background-subtle rounded-2xl hover:bg-brand-pale transition-colors">
                                            <span className="font-bold text-neutral-dark">Exportar meus dados</span>
                                            <ChevronRight className="w-4 h-4 text-neutral-light" />
                                        </button>
                                        <button type="button" className="w-full flex items-center justify-between p-lg bg-functional-error/5 rounded-2xl hover:bg-functional-error/10 transition-colors">
                                            <span className="font-bold text-functional-error">Excluir minha conta</span>
                                            <ChevronRight className="w-4 h-4 text-functional-error" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Developer Tab */}
                            {activeTab === 'developer' && (
                                <div>
                                    <h2 className="text-xl font-bold text-neutral-dark mb-xl">Developer Tools</h2>
                                    <p className="text-sm text-neutral-medium mb-lg">
                                        Use esta área para simular diferentes papéis de usuário e testar funcionalidades específicas.
                                        <br />
                                        <span className="text-xs text-functional-warning font-bold">Nota: Pode levar alguns segundos para a sessão atualizar.</span>
                                    </p>
                                    <div className="space-y-md">
                                        <div className="p-lg bg-neutral-900 rounded-2xl border border-neutral-800">
                                            <h3 className="text-white font-bold mb-md flex items-center gap-sm">
                                                <Terminal className="w-4 h-4 text-brand-primary" />
                                                Switch Role (Role-Based Access Control)
                                            </h3>
                                            <div className="grid grid-cols-2 gap-md">
                                                {[
                                                    { role: 'CLIENT', label: 'Cliente (Padrão)' },
                                                    { role: 'LAWYER', label: 'Advogado' },
                                                    { role: 'PARTNER', label: 'Parceiro' },
                                                    { role: 'ADMIN', label: 'Admin' }
                                                ].map((roleOption) => (
                                                    <button
                                                        key={roleOption.role}
                                                        onClick={async () => {
                                                            try {
                                                                const newRole = roleOption.role
                                                                document.body.style.cursor = 'wait'

                                                                // 1. Update on Server
                                                                await updateUserRole(newRole as any)

                                                                // 2. Force Session Refresh to get new Token with updated claims
                                                                if (session) {
                                                                    await session.touch() // Updates last active, can trigger token refresh
                                                                    await session.reload() // Reloads session data
                                                                }

                                                                // 3. Feedback & Real Reload
                                                                alert(`Role switched to ${newRole}. The page will now reload.`)
                                                                window.location.href = newRole === 'LAWYER' ? '/lawyer' : newRole === 'PARTNER' ? '/partner' : '/dashboard'
                                                            } catch (err) {
                                                                console.error(err)
                                                                alert('Error switching role. check console.')
                                                            } finally {
                                                                document.body.style.cursor = 'default'
                                                            }
                                                        }}
                                                        className="p-md rounded-xl bg-white/10 hover:bg-brand-primary/20 hover:border-brand-primary border border-white/5 text-white text-left transition-all"
                                                    >
                                                        <span className="text-xs font-mono opacity-50 block">{roleOption.role}</span>
                                                        <span className="font-bold">{roleOption.label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Save Button */}
                            <div className="mt-2xl pt-xl border-t border-neutral-light/20">
                                <button
                                    type="button"
                                    onClick={handleSave}
                                    className={cn(
                                        "btn-primary",
                                        saved && "bg-functional-success hover:bg-functional-success"
                                    )}
                                >
                                    {saved ? (
                                        <>
                                            <Check className="w-4 h-4" />
                                            Salvo!
                                        </>
                                    ) : (
                                        <>
                                            <Save className="w-4 h-4" />
                                            Salvar Alterações
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .settings-input {
                    width: 100%;
                    height: 56px;
                    padding: 0 16px;
                    background: var(--background-subtle, #F8F9FA);
                    border: 1px solid rgba(200, 200, 200, 0.3);
                    border-radius: 16px;
                    color: var(--neutral-dark, #1A1A2E);
                    outline: none;
                    transition: all 0.2s;
                }
                .settings-input:focus {
                    border-color: var(--brand-primary, #4F46E5);
                    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
                }
            `}</style>
        </div>
    )
}

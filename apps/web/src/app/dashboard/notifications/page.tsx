import { Bell, BellOff } from 'lucide-react'
import React from 'react'

export default function NotificationsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-neutral-dark">Central de Notificações</h1>
                <p className="text-neutral-medium">Fique por dentro das atualizações do seu processo</p>
            </div>

            <div className="border border-neutral-light rounded-xl p-8 flex flex-col items-center justify-center text-center bg-white min-h-[400px]">
                <div className="w-16 h-16 bg-background-subtle rounded-full flex items-center justify-center mb-4">
                    <Bell className="w-8 h-8 text-neutral-medium" />
                </div>
                <h3 className="text-lg font-bold text-neutral-dark mb-2">Sem novas notificações</h3>
                <p className="text-neutral-medium max-w-sm">
                    Você receberá alertas sobre prazos de validação, tentativas de acesso e novidades do sistema aqui.
                </p>
            </div>
        </div>
    )
}

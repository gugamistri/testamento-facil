'use client'

import { Bell, CheckCircle2, Clock, FileText, Info, Shield, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const mockNotifications = [
    {
        id: 1,
        type: 'success',
        title: 'Testamento assinado com sucesso',
        message: 'Seu testamento foi assinado digitalmente e registrado em blockchain.',
        time: '2 horas atrás',
        read: false,
        icon: CheckCircle2,
        iconColor: 'text-functional-success',
        iconBg: 'bg-functional-success/10',
    },
    {
        id: 2,
        type: 'info',
        title: 'Documento verificado',
        message: 'Sua certidão de casamento foi verificada e aprovada.',
        time: '5 horas atrás',
        read: false,
        icon: FileText,
        iconColor: 'text-functional-info',
        iconBg: 'bg-functional-info/10',
    },
    {
        id: 3,
        type: 'reminder',
        title: 'Próxima prova de vida',
        message: 'Lembrete: sua próxima prova de vida está agendada para 25/02/2026.',
        time: '1 dia atrás',
        read: true,
        icon: Clock,
        iconColor: 'text-functional-warning',
        iconBg: 'bg-functional-warning/10',
    },
    {
        id: 4,
        type: 'security',
        title: 'Novo acesso detectado',
        message: 'Login realizado em novo dispositivo em São Paulo, SP.',
        time: '2 dias atrás',
        read: true,
        icon: Shield,
        iconColor: 'text-brand-primary',
        iconBg: 'bg-brand-primary/10',
    },
]

export function NotificationDropdown() {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const unreadCount = mockNotifications.filter((n) => !n.read).length

    // Close on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Bell Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-sm rounded-lg hover:bg-background-subtle transition-colors"
            >
                <Bell className="w-5 h-5 text-neutral-medium hover:text-neutral-dark transition-colors" />
                {unreadCount > 0 && (
                    <div className="absolute top-0 right-0 w-4 h-4 bg-brand-primary rounded-full flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">{unreadCount}</span>
                    </div>
                )}
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute right-0 top-full mt-sm w-96 bg-background-pure rounded-card border border-neutral-light shadow-elevation z-50">
                    {/* Header */}
                    <div className="flex items-center justify-between p-md border-b border-neutral-light">
                        <h3 className="font-bold text-neutral-dark">Notificações</h3>
                        <div className="flex items-center gap-sm">
                            {unreadCount > 0 && (
                                <span className="px-sm py-2xs bg-brand-primary/10 text-brand-primary text-xs font-semibold rounded">
                                    {unreadCount} novas
                                </span>
                            )}
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="p-xs hover:bg-background-subtle rounded-lg transition-colors"
                            >
                                <X className="w-4 h-4 text-neutral-medium" />
                            </button>
                        </div>
                    </div>

                    {/* Notifications List */}
                    <div className="max-h-96 overflow-y-auto">
                        {mockNotifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`p-md border-b border-neutral-light last:border-b-0 hover:bg-background-subtle transition-colors cursor-pointer ${!notification.read ? 'bg-brand-pale/30' : ''
                                    }`}
                            >
                                <div className="flex items-start gap-md">
                                    <div
                                        className={`w-10 h-10 ${notification.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}
                                    >
                                        <notification.icon className={`w-5 h-5 ${notification.iconColor}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-sm">
                                            <h4 className="font-semibold text-neutral-dark text-sm truncate">
                                                {notification.title}
                                            </h4>
                                            {!notification.read && (
                                                <div className="w-2 h-2 bg-brand-primary rounded-full flex-shrink-0" />
                                            )}
                                        </div>
                                        <p className="text-sm text-neutral-medium mt-2xs line-clamp-2">
                                            {notification.message}
                                        </p>
                                        <span className="text-xs text-neutral-medium mt-xs block">
                                            {notification.time}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="p-md border-t border-neutral-light">
                        <button
                            type="button"
                            className="w-full py-sm text-brand-primary font-semibold text-sm hover:bg-brand-pale rounded-button transition-colors"
                        >
                            Marcar todas como lidas
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

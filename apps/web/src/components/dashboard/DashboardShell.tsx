'use client'

import { UserButton, useUser } from '@clerk/nextjs'
import {
    Menu,
    Settings,
    LifeBuoy
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { NotificationDropdown } from './NotificationDropdown'
import Image from 'next/image'
import { CLIENT_NAV, LAWYER_NAV, PARTNER_NAV, ADMIN_NAV, NavConfigItem } from '@/config/dashboard-nav'

interface DashboardShellProps {
    children: React.ReactNode
    role?: 'CLIENT' | 'LAWYER' | 'PARTNER' | 'ADMIN'
}

export function DashboardShell({ children, role = 'CLIENT' }: DashboardShellProps) {
    const { user } = useUser()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const navItems = role === 'LAWYER' ? LAWYER_NAV
        : role === 'PARTNER' ? PARTNER_NAV
            : role === 'ADMIN' ? ADMIN_NAV
                : CLIENT_NAV

    const planLabel = role === 'LAWYER' ? 'Profissional'
        : role === 'PARTNER' ? 'Parceiro Oficial'
            : role === 'ADMIN' ? 'Administrador'
                : 'Plano Essencial'

    return (
        <div className="min-h-screen bg-background-secondary">
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:flex flex-col w-72 h-screen bg-background-primary border-r border-border-primary fixed left-0 top-0 p-xl">
                <div className="flex items-center gap-sm mb-2xl px-md">
                    <Image
                        src="/images/logo_testamento-facil.png"
                        alt="Testamento Fácil"
                        width={180}
                        height={40}
                        className="h-10 w-auto"
                    />
                </div>

                <nav className="flex-1 space-y-sm overflow-y-auto pr-2">
                    {navItems.map((item) => (
                        <NavItem
                            key={item.href}
                            icon={item.icon}
                            label={item.label}
                            href={item.href}
                            exact={item.exact}
                        />
                    ))}
                </nav>

                <div className="pt-xl border-t border-border-primary space-y-sm">
                    {role === 'CLIENT' && (
                        <NavItem icon={<Settings className="w-5 h-5" />} label="Configurações" href="/dashboard/settings" />
                    )}
                    <NavItem
                        icon={<LifeBuoy className="w-5 h-5" />}
                        label="Ajuda & Suporte"
                        href={role === 'LAWYER' ? '/lawyer/support' : '/dashboard/support'}
                    />
                    <div className="p-md bg-background-secondary rounded-card flex items-center justify-between">
                        <div className="flex items-center gap-sm">
                            <UserButton afterSignOutUrl="/" />
                            <div className="flex flex-col overflow-hidden">
                                <span className="text-sm font-bold text-text-primary truncate">{user?.firstName || 'Usuário'}</span>
                                <span className="text-[10px] text-text-tertiary uppercase font-black tracking-widest">{planLabel}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:ml-72 flex-1">
                {/* Mobile Header */}
                <header className="lg:hidden h-16 bg-background-primary border-b border-border-primary px-lg flex items-center justify-between sticky top-0 z-40">
                    <div className="flex items-center gap-sm">
                        <Image
                            src="/images/logo_testamento-facil.png"
                            alt="Testamento Fácil"
                            width={140}
                            height={32}
                            className="h-8 w-auto"
                        />
                    </div>
                    <button type="button" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <Menu className="w-6 h-6 text-text-primary" />
                    </button>
                </header>

                {/* Mobile Sidebar Overlay */}
                {isSidebarOpen && (
                    <div className="fixed inset-0 z-50 lg:hidden">
                        <div className="absolute inset-0 bg-neutral-900/50" onClick={() => setIsSidebarOpen(false)} />
                        <aside className="absolute left-0 top-0 w-72 h-full bg-background-primary p-xl flex flex-col">
                            <div className="flex items-center justify-between mb-8">
                                <span className="font-bold text-lg text-text-primary">Menu</span>
                                <button onClick={() => setIsSidebarOpen(false)}>
                                    <Menu className="w-6 h-6 text-text-secondary" />
                                </button>
                            </div>
                            <nav className="space-y-sm">
                                {navItems.map((item) => (
                                    <NavItem
                                        key={item.href}
                                        icon={item.icon}
                                        label={item.label}
                                        href={item.href}
                                        exact={item.exact}
                                        onClick={() => setIsSidebarOpen(false)}
                                    />
                                ))}
                                {role === 'CLIENT' && (
                                    <NavItem
                                        icon={<Settings className="w-5 h-5" />}
                                        label="Configurações"
                                        href="/dashboard/settings"
                                        onClick={() => setIsSidebarOpen(false)}
                                    />
                                )}
                            </nav>
                        </aside>
                    </div>
                )}

                {/* Top Bar - Desktop */}
                <header className="hidden lg:flex h-20 bg-background-primary/80 backdrop-blur-md border-b border-border-primary px-2xl items-center justify-end sticky top-0 z-40">
                    <div className="flex items-center gap-xl">
                        <NotificationDropdown />
                        <div className="h-6 w-px bg-border-primary" />
                        <div className="flex items-center gap-sm">
                            <span className="text-xs font-semibold text-neutral-dark">Ajuda & Suporte</span>
                        </div>
                    </div>
                </header>

                {/* Content Injection */}
                <div className="p-lg sm:p-2xl max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}

function NavItem({ icon, label, href, exact = false, onClick }: { icon: React.ReactNode, label: string, href: string, exact?: boolean, onClick?: () => void }) {
    const pathname = usePathname()
    const isActive = exact ? pathname === href : pathname.startsWith(href)

    return (
        <Link href={href} onClick={onClick}>
            <div className={cn(
                "flex items-center gap-md px-md h-12 rounded-xl cursor-pointer transition-all",
                isActive ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20" : "text-neutral-medium hover:bg-background-subtle hover:text-neutral-dark"
            )}>
                {icon}
                <span className="text-sm font-bold tracking-tight">{label}</span>
            </div>
        </Link>
    )
}

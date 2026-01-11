'use client'

import { UserButton, useUser } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import { Plus, LayoutDashboard, FileText, Calendar, Shield, Settings, Menu, Bell, Download, ExternalLink, Activity } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { DigitalVault } from '@/components/dashboard/DigitalVault'
import { MonitoringStatus } from '@/components/dashboard/MonitoringStatus'
import { DeadMansSwitch } from '@/components/dashboard/DeadMansSwitch'
import { SecurityIncident } from '@/components/dashboard/SecurityIncident'
import { useWizardStore } from '@/store/useWizardStore'
import { cn } from '@/lib/utils'

export default function DashboardPage() {
  const { user } = useUser()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Simulate if a testament is active
  const hasActiveTestament = true // Mocked for Phase 6 & 7

  return (
    <div className="min-h-screen bg-background-subtle">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-72 h-screen bg-background border-r border-neutral-light/20 fixed left-0 top-0 p-xl">
        <div className="flex items-center gap-sm mb-2xl px-md">
          <div className="w-8 h-8 bg-brand-primary rounded-badge flex items-center justify-center">
            <span className="text-white font-black text-xs">T</span>
          </div>
          <span className="font-bold text-lg text-neutral-dark tracking-tight">
            Testamento <span className="text-brand-primary">Fácil</span>
          </span>
        </div>

        <nav className="flex-1 space-y-sm">
          <NavItem icon={<LayoutDashboard className="w-5 h-5" />} label="Painel Principal" href="/dashboard" active />
          <NavItem icon={<FileText className="w-5 h-5" />} label="Meus Testamentos" href="/wizard" />
          <NavItem icon={<Calendar className="w-5 h-5" />} label="Consultas" href="/dashboard/consultations" />
          <NavItem icon={<Activity className="w-5 h-5" />} label="Audit Log" href="/dashboard/audit" />
        </nav>

        <div className="pt-xl border-t border-neutral-light/20 space-y-sm">
          <NavItem icon={<Settings className="w-5 h-5" />} label="Configurações" href="/dashboard/settings" />
          <div className="p-md bg-background-subtle rounded-card flex items-center justify-between">
            <div className="flex items-center gap-sm">
              <UserButton afterSignOutUrl="/" />
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-bold text-neutral-dark truncate">{user?.firstName || 'Usuário'}</span>
                <span className="text-[10px] text-neutral-medium uppercase font-black tracking-widest">Plano Essencial</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="lg:ml-72 flex-1">
        {/* Mobile Header */}
        <header className="lg:hidden h-2xl bg-background border-b border-neutral-light/20 px-lg flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-sm">
            <div className="w-6 h-6 bg-brand-primary rounded-badge flex items-center justify-center">
              <span className="text-white font-black text-[10px]">T</span>
            </div>
            <span className="font-bold text-sm text-neutral-dark">Testamento Fácil</span>
          </div>
          <button type="button" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="w-6 h-6 text-neutral-dark" />
          </button>
        </header>

        {/* Top Bar - Desktop */}
        <header className="hidden lg:flex h-2xl bg-background/80 backdrop-blur-md border-b border-neutral-light/20 px-2xl items-center justify-between sticky top-0 z-40">
          <h1 className="text-sm font-black uppercase tracking-[0.2em] text-neutral-medium">Visão Geral</h1>
          <div className="flex items-center gap-xl">
            <div className="relative">
              <Bell className="w-5 h-5 text-neutral-medium hover:text-neutral-dark cursor-pointer transition-colors" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-brand-primary rounded-full border-2 border-white" />
            </div>
            <div className="h-6 w-px bg-neutral-light/30" />
            <div className="flex items-center gap-sm">
              <span className="text-xs font-semibold text-neutral-dark">Ajuda & Suporte</span>
            </div>
          </div>
        </header>

        {/* Content Scrollable */}
        <div className="p-lg sm:p-2xl max-w-6xl">
          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-lg mb-3xl">
            <div>
              <span className="text-brand-primary font-black text-xs uppercase tracking-widest mb-sm block">Seja bem-vindo</span>
              <h2 className="text-[32px] font-bold text-neutral-dark tracking-tighter">Olá, {user?.firstName}! 👋</h2>
            </div>
            {!hasActiveTestament && (
              <Link href="/wizard">
                <button type="button" className="btn-primary !h-14 !w-auto min-w-[280px] shadow-button">
                  Criar Novo Testamento
                  <Plus className="w-5 h-5" />
                </button>
              </Link>
            )}
          </div>

          {/* Main Grid content */}
          {hasActiveTestament ? (
            <div className="space-y-4xl">
              {/* Summary Top Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
                <SummaryCard
                  title="Status Geral"
                  value="✓ Ativo & Monitorado"
                  subtitle="Última sincronização: hoje às 03:42"
                  color="bg-functional-success"
                />
                <SummaryCard
                  title="Beneficiários"
                  value="4 Pessoas"
                  subtitle="100% Patrimônio distribuído"
                  color="bg-brand-primary"
                />
                <SummaryCard
                  title="Próxima Validação"
                  value="15/09/2024"
                  subtitle="Ciclo Dead Man's Switch"
                  color="bg-brand-gold"
                />
              </div>

              {/* Phase 6 Core: Digital Vault */}
              <DigitalVault />

              {/* Phase 7 Core: Monitoring & Triggers */}
              <div className="grid grid-cols-1 gap-2xl">
                <MonitoringStatus />
                <DeadMansSwitch />
                <SecurityIncident />
              </div>

              {/* Inventory Preview */}
              <section>
                <div className="flex items-center justify-between mb-lg">
                  <h3 className="text-xl font-bold text-neutral-dark">Seu Inventário</h3>
                  <button type="button" className="text-[13px] font-bold text-brand-primary hover:underline flex items-center gap-xs">
                    Gerenciar Bens
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-md text-sm">
                  <div className="p-xl bg-background rounded-[24px] border border-neutral-light/20 flex items-center justify-between group cursor-pointer hover:border-brand-primary transition-all">
                    <div className="flex items-center gap-lg">
                      <div className="w-12 h-12 bg-background-subtle rounded-xl flex items-center justify-center text-neutral-medium group-hover:text-brand-primary transition-colors">
                        <Download className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-neutral-dark group-hover:text-brand-primary">Testamento Fácil Completo (PDF)</p>
                        <p className="text-[12px] text-neutral-medium">Assinado por ICP-Brasil</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-light group-hover:text-brand-primary" />
                  </div>
                  <div className="p-xl bg-background rounded-[24px] border border-neutral-light/20 flex items-center justify-between group cursor-pointer hover:border-brand-primary transition-all">
                    <div className="flex items-center gap-lg">
                      <div className="w-12 h-12 bg-background-subtle rounded-xl flex items-center justify-center text-neutral-medium group-hover:text-brand-primary transition-colors">
                        <Download className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-neutral-dark group-hover:text-brand-primary">Certificado de Registro Blockchain</p>
                        <p className="text-[12px] text-neutral-medium">Hash: 0xab...f202</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-light group-hover:text-brand-primary" />
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <div className="p-3xl bg-background rounded-[32px] border-2 border-dashed border-neutral-light/50 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-background-subtle rounded-full flex items-center justify-center text-neutral-medium mb-lg">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-sm">Nenhum Testamento Ativo</h3>
              <p className="text-neutral-medium max-w-sm mb-xl">
                Inicie o processo para proteger seu patrimônio digital e físico agora mesmo.
              </p>
              <Link href="/wizard">
                <button type="button" className="btn-primary !w-auto px-2xl">Começar Agora</button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

function NavItem({ icon, label, active = false, href }: { icon: React.ReactNode, label: string, active?: boolean, href?: string }) {
  const content = (
    <div className={cn(
      "flex items-center gap-md px-md h-12 rounded-xl cursor-pointer transition-all",
      active ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20" : "text-neutral-medium hover:bg-background-subtle hover:text-neutral-dark"
    )}>
      {icon}
      <span className="text-sm font-bold tracking-tight">{label}</span>
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }
  return content
}

function SummaryCard({ title, value, subtitle, color }: { title: string, value: string, subtitle: string, color: string }) {
  return (
    <div className="bg-background p-xl rounded-[28px] border border-neutral-light/20 shadow-sm relative overflow-hidden group">
      <div className={cn("absolute top-0 left-0 w-1.5 h-full", color)} />
      <p className="text-[11px] font-black uppercase tracking-[0.1em] text-neutral-medium mb-xs">{title}</p>
      <p className="text-xl font-bold text-neutral-dark mb-xs group-hover:translate-x-1 transition-transform">{value}</p>
      <p className="text-[12px] text-neutral-medium leading-relaxed">{subtitle}</p>
    </div>
  )
}

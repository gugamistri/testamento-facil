'use client'

import { UserButton, useUser } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import { Plus, LayoutDashboard, FileText, Calendar, Shield, Settings, Menu, Bell, Download, ExternalLink, Activity, Users } from 'lucide-react'
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

  // Simulate if a testament is active
  const hasActiveTestament = true // Mocked for Phase 6 & 7

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-lg mb-3xl">
        <div>
          <span className="text-brand-primary font-black text-xs uppercase tracking-widest mb-sm block">Seja bem-vindo</span>
          <h2 className="text-[32px] font-bold text-neutral-dark tracking-tighter">Olá, {user?.firstName || 'Usuário'}! 👋</h2>
        </div>
        {!hasActiveTestament && (
          <Link href="/dashboard/wizard">
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
              value="15/02/2026"
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


          {/* News Widget - New Feature */}
          <div className="bg-white rounded-[24px] border border-neutral-light/20 p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-primary/10 rounded-lg">
                  <Activity className="w-5 h-5 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-neutral-dark">Novidades & Atualizações</h3>
              </div>
              <Link href="/dashboard/news" className="text-sm font-bold text-brand-primary hover:underline">
                Ver todas
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-background-subtle border border-neutral-light/10 hover:border-brand-primary/20 transition-all cursor-pointer">
                <span className="text-[10px] font-black uppercase tracking-wider text-neutral-medium mb-2 block">Jurídico</span>
                <h4 className="font-bold text-neutral-dark mb-2">Herança Digital: O que muda em 2026?</h4>
                <p className="text-sm text-neutral-medium line-clamp-2">Novas regulações sobre criptomoedas e contas sociais exigem atenção...</p>
              </div>
              <div className="p-4 rounded-xl bg-background-subtle border border-neutral-light/10 hover:border-brand-primary/20 transition-all cursor-pointer">
                <span className="text-[10px] font-black uppercase tracking-wider text-functional-success mb-2 block">Sistema</span>
                <h4 className="font-bold text-neutral-dark mb-2">Integração com Gov.br</h4>
                <p className="text-sm text-neutral-medium line-clamp-2">Em breve: login e validação biométrica usando sua conta Gov.br...</p>
              </div>
            </div>
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
          <Link href="/dashboard/wizard">
            <button type="button" className="btn-primary !w-auto px-2xl">Começar Agora</button>
          </Link>
        </div>
      )}
    </>
  )
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

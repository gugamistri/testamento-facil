'use client'

import { useUser } from '@clerk/nextjs'
import {
  Activity,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  ExternalLink,
  FileText,
  Plus,
  Shield,
  TrendingUp,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { DigitalVault } from '@/components/dashboard/DigitalVault'
import { MonitoringStatus } from '@/components/dashboard/MonitoringStatus'
import { DeadMansSwitch } from '@/components/dashboard/DeadMansSwitch'
import { SecurityIncident } from '@/components/dashboard/SecurityIncident'

export default function DashboardPage() {
  const { user } = useUser()

  // Simulate if a testament is active
  const hasActiveTestament = true

  return (
    <div className="space-y-xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-brand-primary mb-xs">Seja bem-vindo</p>
          <h1 className="text-2xl font-bold text-neutral-dark">
            Olá, {user?.firstName || 'Usuário'}! 👋
          </h1>
        </div>
        {!hasActiveTestament && (
          <Link href="/dashboard/wizard">
            <button
              type="button"
              className="px-lg py-md bg-brand-primary text-white font-semibold rounded-button hover:bg-brand-hover transition-colors flex items-center gap-sm"
            >
              <Plus className="w-5 h-5" />
              Criar Novo Testamento
            </button>
          </Link>
        )}
      </div>

      {hasActiveTestament ? (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            <div className="bg-background-pure rounded-card p-xl border border-neutral-light">
              <div className="flex items-center justify-between mb-md">
                <div className="w-12 h-12 bg-functional-success/10 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-functional-success" />
                </div>
                <span className="px-sm py-2xs bg-functional-success/10 text-functional-success rounded-full text-xs font-semibold">
                  ATIVO
                </span>
              </div>
              <div className="text-2xl font-bold text-neutral-dark mb-xs">Monitorado</div>
              <div className="text-sm text-neutral-medium">Última sincronização: hoje às 03:42</div>
            </div>

            <div className="bg-background-pure rounded-card p-xl border border-neutral-light">
              <div className="flex items-center justify-between mb-md">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-primary" />
                </div>
                <TrendingUp className="w-5 h-5 text-functional-success" />
              </div>
              <div className="text-2xl font-bold text-neutral-dark mb-xs">4 Beneficiários</div>
              <div className="text-sm text-neutral-medium">100% patrimônio distribuído</div>
            </div>

            <div className="bg-background-pure rounded-card p-xl border border-neutral-light">
              <div className="flex items-center justify-between mb-md">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-brand-gold" />
                </div>
                <span className="px-sm py-2xs bg-brand-pale text-brand-primary rounded-full text-xs font-semibold">
                  EM 34 DIAS
                </span>
              </div>
              <div className="text-2xl font-bold text-neutral-dark mb-xs">15 Fev 2026</div>
              <div className="text-sm text-neutral-medium">Próxima validação Dead Man's Switch</div>
            </div>
          </div>

          {/* Digital Vault */}
          <DigitalVault />

          {/* Monitoring Grid */}
          <div className="grid grid-cols-1 gap-xl">
            <MonitoringStatus />
            <DeadMansSwitch />
            <SecurityIncident />
          </div>

          {/* News & Updates */}
          <section className="bg-background-pure rounded-card p-xl border border-neutral-light">
            <div className="flex items-center justify-between mb-lg">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-brand-primary" />
                </div>
                <h2 className="text-xl font-bold text-neutral-dark">Novidades & Atualizações</h2>
              </div>
              <Link
                href="/dashboard/news"
                className="text-sm font-semibold text-brand-primary hover:text-brand-hover flex items-center gap-xs"
              >
                Ver todas
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="p-lg rounded-xl border border-neutral-light hover:border-brand-primary/50 transition-all cursor-pointer bg-background-subtle">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-medium mb-sm block">
                  Jurídico
                </span>
                <h4 className="font-bold text-neutral-dark mb-xs">
                  Herança Digital: O que muda em 2026?
                </h4>
                <p className="text-sm text-neutral-medium line-clamp-2">
                  Novas regulações sobre criptomoedas e contas sociais exigem atenção...
                </p>
              </div>
              <div className="p-lg rounded-xl border border-neutral-light hover:border-brand-primary/50 transition-all cursor-pointer bg-background-subtle">
                <span className="text-xs font-bold uppercase tracking-wider text-functional-success mb-sm block">
                  Sistema
                </span>
                <h4 className="font-bold text-neutral-dark mb-xs">Integração com Gov.br</h4>
                <p className="text-sm text-neutral-medium line-clamp-2">
                  Em breve: login e validação biométrica usando sua conta Gov.br...
                </p>
              </div>
            </div>
          </section>

          {/* Inventory Preview */}
          <section className="bg-background-pure rounded-card p-xl border border-neutral-light">
            <div className="flex items-center justify-between mb-lg">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 bg-accent-emerald/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-accent-emerald" />
                </div>
                <h2 className="text-xl font-bold text-neutral-dark">Seu Inventário</h2>
              </div>
              <Link
                href="/dashboard/documents"
                className="text-sm font-semibold text-brand-primary hover:text-brand-hover flex items-center gap-xs"
              >
                Gerenciar Bens
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="p-lg rounded-xl border border-neutral-light hover:border-brand-primary/50 transition-all cursor-pointer group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-md">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                      <Download className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-dark group-hover:text-brand-primary">
                        Testamento Digital Completo (PDF)
                      </p>
                      <p className="text-xs text-neutral-medium">Assinado por ICP-Brasil</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-light group-hover:text-brand-primary" />
                </div>
              </div>
              <div className="p-lg rounded-xl border border-neutral-light hover:border-brand-primary/50 transition-all cursor-pointer group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-md">
                    <div className="w-12 h-12 bg-accent-emerald/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-accent-emerald" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-dark group-hover:text-brand-primary">
                        Certificado de Registro Blockchain
                      </p>
                      <p className="text-xs text-neutral-medium">Hash: 0xab...f202</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-light group-hover:text-brand-primary" />
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="bg-background-pure rounded-card p-3xl border-2 border-dashed border-neutral-light flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-background-subtle rounded-full flex items-center justify-center mb-lg">
            <Shield className="w-10 h-10 text-neutral-medium" />
          </div>
          <h3 className="text-xl font-bold text-neutral-dark mb-sm">Nenhum Testamento Ativo</h3>
          <p className="text-neutral-medium max-w-sm mb-xl">
            Inicie o processo para proteger seu patrimônio digital e físico agora mesmo.
          </p>
          <Link href="/dashboard/wizard">
            <button
              type="button"
              className="px-xl py-md bg-brand-primary text-white font-semibold rounded-button hover:bg-brand-hover transition-colors"
            >
              Começar Agora
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

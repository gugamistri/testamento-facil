import { Shield, Users, FileText, Activity, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default async function AdminDashboardPage() {
  return (
    <div className="space-y-2xl">
      <div>
        <h1 className="text-3xl font-bold text-foreground tracking-tight">Painel Administrativo</h1>
        <p className="text-muted-foreground mt-xs">Gerencie usuários, testamentos e integrações.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
        <StatCard label="Total Usuários" value="--" />
        <StatCard label="Testamentos Ativos" value="--" />
        <StatCard label="Advogados" value="--" />
        <StatCard label="Parceiros" value="--" />
      </div>

      {/* Management Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        <ActionCard
          icon={<Users className="w-6 h-6" />}
          title="Gerenciar Usuários"
          description="Visualize, edite roles e gerencie usuários da plataforma."
          href="/admin/users"
          buttonLabel="Ver Usuários"
          variant="primary"
        />

        <ActionCard
          icon={<FileText className="w-6 h-6" />}
          title="Testamentos Pendentes"
          description="Revise e aprove testamentos aguardando validação."
          href="/admin/testamentos"
          buttonLabel="Ver Pendentes"
          variant="secondary"
        />

        <ActionCard
          icon={<Activity className="w-6 h-6" />}
          title="Monitoramento de APIs"
          description="Status das integrações (SERPRO, Blockchain, etc)."
          href="/admin/monitoring"
          buttonLabel="Ver Status"
          variant="success"
        />

        <ActionCard
          icon={<Shield className="w-6 h-6" />}
          title="Logs de Auditoria"
          description="Histórico de ações e acessos na plataforma."
          href="/admin/audit"
          buttonLabel="Ver Logs"
          variant="outline"
        />
      </div>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card rounded-card p-xl border border-border">
      <p className="text-muted-foreground text-sm">{label}</p>
      <p className="text-3xl font-bold text-foreground mt-xs">{value}</p>
    </div>
  )
}

function ActionCard({
  icon,
  title,
  description,
  href,
  buttonLabel,
  variant,
}: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  buttonLabel: string
  variant: 'primary' | 'secondary' | 'success' | 'outline'
}) {
  const buttonStyles = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
    success: 'bg-accent text-white hover:bg-accent/90',
    outline: 'border border-border text-foreground hover:bg-muted',
  }

  return (
    <div className="bg-card rounded-card p-xl border border-border">
      <div className="flex items-center gap-md mb-md text-muted-foreground">
        {icon}
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      </div>
      <p className="text-muted-foreground text-sm mb-lg">{description}</p>
      <Link
        href={href}
        className={`inline-flex items-center gap-xs py-sm px-lg rounded-lg font-medium text-sm transition-colors ${buttonStyles[variant]}`}
      >
        {buttonLabel}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}

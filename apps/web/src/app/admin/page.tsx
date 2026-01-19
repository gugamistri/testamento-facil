import { getAdminStats } from '@/actions/admin'
import { Users, Gavel, FileText, DollarSign, Activity, AlertCircle } from 'lucide-react'

export default async function AdminDashboardPage() {
  const stats = await getAdminStats()

  const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

  return (
    <div className="space-y-xl">
      <div className="flex flex-col gap-sm">
        <div className="flex items-center gap-2 bg-red-500/10 text-red-600 px-3 py-1 rounded-full w-fit text-xs font-bold uppercase tracking-widest border border-red-500/20">
          <AlertCircle className="w-3 h-3" />
          Área Restrita
        </div>
        <h1 className="text-3xl font-black text-neutral-dark tracking-tight">Painel Administrativo</h1>
        <p className="text-neutral-medium">Visão global da operação e moderação.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        <div className="bg-white p-xl rounded-card border border-neutral-light/20 shadow-sm">
          <div className="flex justify-between items-start mb-md">
            <div className="p-2 bg-brand-primary/10 rounded-lg">
              <Users className="w-5 h-5 text-brand-primary" />
            </div>
            <span className="text-xs font-bold text-functional-success bg-functional-success/10 px-2 py-0.5 rounded-full">+12%</span>
          </div>
          <p className="text-sm text-neutral-medium font-bold uppercase tracking-widest">Total Usuários</p>
          <p className="text-3xl font-black text-neutral-dark">{stats.totalUsers}</p>
        </div>

        <div className="bg-white p-xl rounded-card border border-neutral-light/20 shadow-sm">
          <div className="flex justify-between items-start mb-md">
            <div className="p-2 bg-accent-purple/10 rounded-lg">
              <Gavel className="w-5 h-5 text-accent-purple" />
            </div>
          </div>
          <p className="text-sm text-neutral-medium font-bold uppercase tracking-widest">Advogados</p>
          <p className="text-3xl font-black text-neutral-dark">{stats.totalLawyers}</p>
        </div>

        <div className="bg-white p-xl rounded-card border border-neutral-light/20 shadow-sm">
          <div className="flex justify-between items-start mb-md">
            <div className="p-2 bg-brand-gold/10 rounded-lg">
              <FileText className="w-5 h-5 text-brand-gold" />
            </div>
          </div>
          <p className="text-sm text-neutral-medium font-bold uppercase tracking-widest">Sessões Pendentes</p>
          <p className="text-3xl font-black text-neutral-dark">{stats.activeSessions}</p>
        </div>

        <div className="bg-white p-xl rounded-card border border-neutral-light/20 shadow-sm">
          <div className="flex justify-between items-start mb-md">
            <div className="p-2 bg-functional-success/10 rounded-lg">
              <DollarSign className="w-5 h-5 text-functional-success" />
            </div>
          </div>
          <p className="text-sm text-neutral-medium font-bold uppercase tracking-widest">Receita Total</p>
          <p className="text-3xl font-black text-neutral-dark">{formatter.format(stats.totalRevenue / 100)}</p>
        </div>
      </div>

      {/* Content Area split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
        {/* Recent Activity Feed */}
        <div className="lg:col-span-2 bg-white rounded-card border border-neutral-light/20 shadow-sm overflow-hidden">
          <div className="p-lg border-b border-neutral-light/10 flex justify-between items-center">
            <h3 className="font-bold text-neutral-dark flex items-center gap-2">
              <Activity className="w-4 h-4 text-brand-primary" />
              Log de Atividade Recente
            </h3>
            <button className="text-xs font-bold text-brand-primary hover:underline">Ver Audit Log Completo</button>
          </div>
          <div className="divide-y divide-neutral-light/10">
            {stats.recentActivity.length === 0 ? (
              <div className="p-xl text-center text-neutral-medium text-sm">Nenhuma atividade registrada.</div>
            ) : (
              stats.recentActivity.map((log: any) => (
                <div key={log.id} className="p-md flex gap-md items-start hover:bg-background-subtle transition-colors">
                  <div className="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-neutral-dark">{log.action}</p>
                    <p className="text-xs text-neutral-medium">{log.details}</p>
                    <p className="text-[10px] text-neutral-light mt-1 font-mono">
                      {log.timestamp.toLocaleString('pt-BR')}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quick Actions / Moderation Queue */}
        <div className="space-y-lg">
          <div className="bg-white rounded-card border border-neutral-light/20 shadow-sm p-lg">
            <h3 className="font-bold text-neutral-dark mb-md text-sm uppercase tracking-widest">Fila de Moderação</h3>

            <div className="space-y-md">
              <div className="p-md bg-background-subtle rounded-lg border border-neutral-light/10">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-neutral-dark">Review #9281</span>
                  <span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded">Denúncia</span>
                </div>
                <p className="text-xs text-neutral-medium line-clamp-2 italic">"O advogado não explicou nada sobre a..."</p>
                <div className="flex gap-2 mt-2">
                  <button className="flex-1 text-[10px] btn-secondary h-6">Ignorar</button>
                  <button className="flex-1 text-[10px] bg-red-500 text-white rounded h-6 font-bold">Banir</button>
                </div>
              </div>
              <div className="p-md bg-background-subtle rounded-lg border border-neutral-light/10">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-neutral-dark">Doc #1029</span>
                  <span className="text-[10px] bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded">Suspeito</span>
                </div>
                <p className="text-xs text-neutral-medium">Hash MD5 duplicado detectado.</p>
                <button className="w-full mt-2 text-[10px] btn-secondary h-6">Investigar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

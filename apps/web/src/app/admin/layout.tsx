import { auth } from '@clerk/nextjs/server'
import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import type { Role } from '@testamento/shared'
import { DEFAULT_ROLE, isAllowedRole } from '@testamento/shared'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, Users, FileText, Activity, Settings, Shield, ChevronRight } from 'lucide-react'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  // Check if user has ADMIN role
  const user = await currentUser()
  const userRole = (user?.publicMetadata as any)?.role || DEFAULT_ROLE

  if (!isAllowedRole(userRole, ['ADMIN'])) {
    redirect('/dashboard')
  }



  return (
    <div className="min-h-screen bg-background-dark flex">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-dark border-r border-white/10 flex flex-col fixed h-screen">
        <div className="p-xl border-b border-white/10">
          <Link href="/" className="flex items-center gap-sm">
            <div className="w-8 h-8 bg-brand-primary rounded-badge flex items-center justify-center">
              <span className="text-white font-black text-xs">T</span>
            </div>
            <span className="font-bold text-white">
              Testamento <span className="text-brand-primary">Admin</span>
            </span>
          </Link>
        </div>

        <nav className="flex-1 p-lg space-y-xs">
          <NavItem href="/admin" icon={<LayoutDashboard className="w-5 h-5" />} label="Dashboard" />
          <NavItem href="/admin/users" icon={<Users className="w-5 h-5" />} label="Usuários" />
          <NavItem href="/admin/testamentos" icon={<FileText className="w-5 h-5" />} label="Testamentos" />
          <NavItem href="/admin/monitoring" icon={<Activity className="w-5 h-5" />} label="Monitoramento" />
          <NavItem href="/admin/audit" icon={<Shield className="w-5 h-5" />} label="Auditoria" />
        </nav>

        <div className="p-lg border-t border-white/10">
          <div className="flex items-center gap-sm">
            <UserButton afterSignOutUrl="/" />
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-bold text-white truncate">{user?.firstName || 'Admin'}</span>
              <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Administrador</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Breadcrumbs Header */}
        <header className="h-16 bg-neutral-dark/50 backdrop-blur-md border-b border-white/10 px-2xl flex items-center sticky top-0 z-40">
          <div className="flex items-center gap-xs text-sm">
            <Link href="/admin" className="text-muted-foreground hover:text-foreground transition-colors">
              Admin
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">Dashboard</span>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-2xl">
          {children}
        </div>
      </main>
    </div>
  )
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-md px-md h-11 rounded-xl text-muted-foreground hover:text-foreground hover:bg-background/5 transition-all"
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  )
}

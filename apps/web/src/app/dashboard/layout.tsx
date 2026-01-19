import { DashboardShell } from '@/components/dashboard/DashboardShell'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const user = await currentUser()
    const role = (user?.publicMetadata as any)?.role

    return (
        <DashboardShell role={role} userRole={role}>
            {children}
        </DashboardShell>
    )
}

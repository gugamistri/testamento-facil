import { DashboardShell } from '@/components/dashboard/DashboardShell'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function LawyerLayout({ children }: { children: React.ReactNode }) {
    const user = await currentUser()
    const role = (user?.publicMetadata as any)?.role

    if (role !== 'LAWYER' && role !== 'ADMIN') {
        redirect('/dashboard')
    }

    return (
        <DashboardShell role="LAWYER">
            {children}
        </DashboardShell>
    )
}

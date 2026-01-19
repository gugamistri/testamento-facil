import { DashboardShell } from '@/components/dashboard/DashboardShell'
import React from 'react'

export default function LawyerLayout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardShell role="LAWYER">
            {children}
        </DashboardShell>
    )
}

'use server'

import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'

export async function getAdminStats() {
    const { userId, sessionClaims } = await auth()

    // Authorization Check (Simple role check)
    // In a real app, use a robust RBAC middleware or utility
    if (sessionClaims?.metadata?.role !== 'ADMIN') {
        // Return zeros or throw error. For MVP returning empty stats.
        return {
            totalUsers: 0,
            totalLawyers: 0,
            activeSessions: 0,
            totalRevenue: 0,
            recentActivity: []
        }
    }

    // Parallel Fetching
    const [userCount, lawyerCount, sessionCount, sessions] = await Promise.all([
        prisma.user.count(),
        prisma.lawyerProfile.count(),
        prisma.legalSession.count({ where: { status: 'PENDING' } }),
        prisma.legalSession.findMany({
            where: { status: 'COMPLETED' },
            select: { price: true }
        })
    ])

    const totalRevenue: number = sessions.reduce((acc: number, curr: { price: number | null }) => acc + (curr.price || 0), 0)

    // Mock Recent Activity (Audit Log) - Since we don't have a dedicated Audit Table yet
    // we will simulate it based on recent User creations for MVP
    const recentUsers = await prisma.user.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        select: { name: true, role: true, createdAt: true }
    })

    const recentActivity = recentUsers.map((u: { name: string | null; role: string; createdAt: Date }) => ({
        id: (u.name || 'User') + u.createdAt.getTime(),
        action: 'USER_REGISTERED',
        details: `Novo usuário ${u.name || 'Anônimo'} (${u.role}) registrado.`,
        timestamp: u.createdAt
    }))

    return {
        totalUsers: userCount,
        totalLawyers: lawyerCount,
        activeSessions: sessionCount,
        totalRevenue,
        recentActivity
    }
}

'use server'

import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'

export async function getPartnerReferrals() {
    const { userId } = await auth()
    if (!userId) return []

    // MOCK DATA: Bypassing DB connection due to Docker issues
    // In production, this would query prisma.user.findMany based on referredByCode
    console.warn('⚠️ USING MOCK DATA FOR REFERRALS')

    return [
        {
            id: 'mock-ref-1',
            name: 'Cliente Exemplo 1',
            email: 'cliente1@email.com',
            createdAt: new Date().toISOString(),
            clientSessions: [
                { price: 150000, status: 'COMPLETED', scheduledAt: new Date().toISOString() }
            ]
        },
        {
            id: 'mock-ref-2',
            name: 'Cliente Pendente',
            email: 'pendente@email.com',
            createdAt: new Date(Date.now() - 86400000).toISOString(),
            clientSessions: []
        }
    ]

    /* 
    // ORIGINAL LOGIC (Restore when DB is up)
    const user = await prisma.user.findUnique({
        where: { clerkId: userId },
        include: { partnerProfile: true }
    })

    if (!user || !user.partnerProfile) return []

    const referrals = await prisma.user.findMany({
        where: {
            referredByCode: user.partnerProfile.referralCode
        },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
            clientSessions: {
                select: {
                    price: true,
                    status: true,
                    scheduledAt: true
                }
            }
        },
        orderBy: { createdAt: 'desc' }
    })
    return referrals 
    */
}

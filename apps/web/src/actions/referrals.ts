'use server'

import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'

export async function getPartnerReferrals() {
    const { userId } = await auth()
    if (!userId) return []

    // 1. Get Partner Profile Code
    const user = await prisma.user.findUnique({
        where: { clerkId: userId },
        include: { partnerProfile: true }
    })

    if (!user || !user.partnerProfile) return []

    // 2. Find Users referred by this code
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
}

'use server'

import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'

export async function getPartnerProfile() {
    const { userId } = await auth()
    if (!userId) return null

    // Fetch partner profile via clerkId (since user.id is internal UUID, we need to map via Clerk ID)
    // Assuming User model has clerkId. Let's check schema again. Yes: `clerkId String @unique`.

    // First get internal user ID
    const user = await prisma.user.findUnique({
        where: { clerkId: userId },
        include: { partnerProfile: true }
    })

    if (!user || !user.partnerProfile) return null

    return user.partnerProfile
}

export async function createPartnerProfileShim() {
    // Helper for dev/demo: Create a profile if missing
    const { userId } = await auth()
    if (!userId) return null

    const user = await prisma.user.findUnique({ where: { clerkId: userId } })
    if (!user) return null

    // Check if exists
    const existing = await prisma.partnerProfile.findUnique({ where: { userId: user.id } })
    if (existing) return existing

    // Create
    return await prisma.partnerProfile.create({
        data: {
            userId: user.id,
            referralCode: `PARTNER-${Math.floor(Math.random() * 10000)}`,
            organization: 'Independente'
        }
    })
}

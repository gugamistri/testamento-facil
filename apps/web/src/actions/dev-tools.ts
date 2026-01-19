'use server'

import { auth, clerkClient } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

export async function updateUserRole(role: 'CLIENT' | 'LAWYER' | 'PARTNER' | 'ADMIN') {
    const session = await auth()
    const userId = session.userId

    if (!userId) {
        throw new Error('Not authenticated')
    }

    // Update Metadata in Clerk
    const client = await clerkClient()
    await client.users.updateUser(userId, {
        publicMetadata: {
            role: role
        }
    })

    // Revalidate to ensure UI updates
    revalidatePath('/')
    revalidatePath('/dashboard')
    revalidatePath('/lawyer')
    revalidatePath('/partner')

    return { success: true, role }
}

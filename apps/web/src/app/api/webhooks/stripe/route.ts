import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'
import Stripe from 'stripe'

export async function POST(req: Request) {
    const body = await req.text()
    const signature = (await headers()).get('Stripe-Signature') as string

    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    } catch (error: any) {
        return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
    }

    const session = event.data.object as Stripe.Checkout.Session

    if (event.type === 'checkout.session.completed') {
        const userId = session.metadata?.userId
        const lawyerId = session.metadata?.lawyerId

        if (!userId || !lawyerId) {
            return new NextResponse('Webhook Error: Missing metadata', { status: 400 })
        }

        // Logic to Unlock Scheduling or Pre-book
        // Here we create the Pending Session to be scheduled
        await prisma.legalSession.create({
            data: {
                clientId: userId,
                lawyerId: lawyerId,
                status: 'PENDING', // Pending scheduling
                price: session.amount_total || 0,
                stripePaymentId: session.id,
                scheduledAt: new Date(Date.now() + 1000 * 60 * 60 * 24), // Default to 24h from now (placeholder)
            }
        })
    }

    return new NextResponse(null, { status: 200 })
}

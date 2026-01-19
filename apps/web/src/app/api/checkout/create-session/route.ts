import { NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
    try {
        const { userId } = await auth()
        const user = await currentUser()

        if (!userId || !user) {
            return new NextResponse('Unauthorized', { status: 401 })
        }

        const { priceId, lawyerId } = await req.json()

        // Create Checkout Session
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            customer_email: user.emailAddresses[0].emailAddress,
            line_items: [
                {
                    price: priceId, // Price ID from Stripe Dashboard
                    quantity: 1,
                },
            ],
            payment_intent_data: {
                metadata: {
                    userId: userId,
                    lawyerId: lawyerId,
                },
            },
            metadata: {
                userId: userId,
                lawyerId: lawyerId
            },
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/consultations?success=true`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/consultations?canceled=true`,
        })

        return NextResponse.json({ url: session.url })
    } catch (error) {
        console.error('[STRIPE_ERROR]', error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}

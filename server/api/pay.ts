import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51MybulCVFy2ARuKJ2C4t1xaxHgiEiXXPNtk8q3QLUW5mIzpOSDHXbrIGPSAtN3U96TpgCW1rl1cPMP9o0Cra0tTQ00w1YIJWsl');

export default defineEventHandler(async(event) => {
    const body = await readBody(event) as any
    const url = 'http://localhost:3000'
    try{
        const session = await stripe.checkout.sessions.create({
            line_items: body.items,
            mode: 'payment',
            success_url: `${url}/succes`,
            cancel_url: `${url}/card?canceled=true`,
        });
        return session.url
    }catch(err){
        console.log(err)
    }
})

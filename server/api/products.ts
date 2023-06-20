import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51MybulCVFy2ARuKJ2C4t1xaxHgiEiXXPNtk8q3QLUW5mIzpOSDHXbrIGPSAtN3U96TpgCW1rl1cPMP9o0Cra0tTQ00w1YIJWsl');

export default defineEventHandler(async(event) => {
    try {
        const products = await stripe.products.list();
      
        // Fetch the prices for each product
        const productsWithPrices = await Promise.all(
          products.data.map(async (product: any) => {
            const prices = await stripe.prices.list({ product: product.id });
            return { ...product, price_euro: prices.data[0].unit_amount, quantity: 1 };
          })
        );
      
        return productsWithPrices;
      } catch (err) {
        console.log(err);
      }
})

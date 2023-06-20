<template>
    <div class="w-full h-screen bg-gray-200">
        <div v-for="(product, index) in store.products">
            {{ product.name }}
        </div>
        <button @click="submit">Checkout</button>
        <StripeCheckout ref="checkoutRef" mode="payment" :pk="publishableKey" :line-items="lineItems"
            :success-url="successURL" :cancel-url="cancelURL" @loading="(v: any) => loading = v" />
    </div>
</template>

<script lang="ts" setup>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import { useCardStore } from '@/store/card'

const store = useCardStore()

const publishableKey = ref('pk_test_51MybulCVFy2ARuKJxTpemXzJf3qPBCUZOO3dVttUCojoiQA8rtdc1TI4Ca96GpcQIgljL94wtU5zgeh3Cw1KlrlI00guPK9dL6')
const loading = ref(false);

const baseUrl = window.location.protocol + '//' + window.location.host;

const successURL = ref(`${baseUrl}/succes`)
const cancelURL = ref(`${baseUrl}/failed`)

const lineItems = ref([
    {
        price: 'price_1NBIJ2CVFy2ARuKJYJwjD3Qf', // The id of the one-time price you created in your Stripe dashboard
        quantity: 1,
    },
])


const checkoutRef = ref()

function submit() {
    checkoutRef.value.redirectToCheckout();
}

</script>

<style lang="scss" scoped></style>
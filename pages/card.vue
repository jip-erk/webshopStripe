<template>
    <div class="w-full m-auto">
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

const successURL = ref(`${window.location.href}succes`)
const cancelURL = ref(`${window.location.href}failed`)

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
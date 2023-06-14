<template>
    <!-- <div class="w-[200px] h-[100px] bg-black flex justify-center p-2"> -->
    <!-- <button @click="checkout" class=" bg-white px-2 w-full">chekout</button> -->
    <StripeCheckout ref="checkoutRef" mode="payment" :pk="publishableKey" :line-items="lineItems" :success-url="successURL"
        :cancel-url="cancelURL" @loading="(v: any) => loading = v" />
    <button @click="submit">Pay now!</button>
    <!-- </div>     -->
</template>

<script lang="ts" setup>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
const route = useRoute()

const publishableKey = ref('pk_test_51MybulCVFy2ARuKJxTpemXzJf3qPBCUZOO3dVttUCojoiQA8rtdc1TI4Ca96GpcQIgljL94wtU5zgeh3Cw1KlrlI00guPK9dL6')
const loading = ref(false);
const lineItems = ref([
    {
        price: 'price_1NBIJ2CVFy2ARuKJYJwjD3Qf', // The id of the one-time price you created in your Stripe dashboard
        quantity: 1,
    },
])

const successURL = ref(`${window.location.href}succes`)
const cancelURL = ref(`${window.location.href}failed`)
const checkoutRef = ref()

function submit() {
    checkoutRef.value.redirectToCheckout();
}
</script>

<style lang="scss" scoped></style>
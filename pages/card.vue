<template>
  <div class="w-full h-screen flex bg-gray-200">
    <div class="flex flex-col mt-5 gap-5 w-full">
      <CardProduct
        :product="product"
        v-for="(product, index) in store.products"
        :key="index"
      />
    </div>
    <div class="w-[400px] flex flex-col gap-2 p-5">
      <span class="font-bold">Total € {{ total / 100 }}</span>
      <button
        class="w-full bg-indigo-500 h-10 px-4 rounded-lg text-white font-medium"
        @click="submit"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCardStore } from "@/store/card";
import { loadStripe } from "@stripe/stripe-js";

const stripe = await loadStripe(
  "pk_test_51MybulCVFy2ARuKJxTpemXzJf3qPBCUZOO3dVttUCojoiQA8rtdc1TI4Ca96GpcQIgljL94wtU5zgeh3Cw1KlrlI00guPK9dL6"
);

const total = computed(() => {
  return store.products.reduce(
    (accumulator, product) =>
      accumulator + product.price_euro * product.quantity,
    0
  );
});

const store = useCardStore();

const submit = async () => {
  const lineItems = store.getLineItems();
  const data = await $fetch("/api/pay", {
    method: "POST",
    body: {
      items: lineItems,
    },
  });
  window.location = data;
};
</script>

<style lang="scss" scoped></style>

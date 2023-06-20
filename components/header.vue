<template>
  <div class="w-full px-12 max-h-20 bg-white">
    <div class="flex justify-between h-20 items-center">
      <NuxtLink to="/">
        <div class="text-2xl font-semibold">ComputerCentral</div>
      </NuxtLink>

      <NuxtLink to="/card" class="link">
        <div class="basket flex gap-2 px-3 py-2">
          <span class="font-mono text-2xl">{{ cardCount }}</span>
          <Icon name="material-symbols:shopping-cart-rounded" size="34" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCardStore } from "@/store/card";

const store = useCardStore();

const cardCount = computed(() => store.products.length);
</script>

<style lang="scss" scoped></style>

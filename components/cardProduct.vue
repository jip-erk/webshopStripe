<template>
  <div class="h-[120px] rounded-md p-2 flex items-center gap-2 mx-5 bg-white">
    <div
      class="min-h-[105px] min-w-[105px] rounded-md bg-gray-300 bg-cover bg-center"
      :style="{ 'background-image': 'url(' + product.images[0] + ')' }"
    />
    <div class="flex gap-2 w-full justify-between px-5">
      <div class="flex flex-col h-full justify-stretch">
        <h2 class="font-bold text-xl">{{ product.name }}</h2>
        <span class="font-semibold">€ {{ product.price_euro / 100 }}</span>
        <p>{{ product.description }}</p>
      </div>
      <div class="flex flex-col h-full justify-stretch items-end gap-4">
        <Icon
          @click="() => store.removeItem(product.id)"
          name="ic:baseline-delete"
          class="link p-1"
          size="40"
        />
        <input
          min="1"
          type="number"
          v-model="quantity"
          @change="store.updateQuantity(product.id, quantity)"
          class="w-[80px] h-[30px] px-3 bg-[#e8e8e8] outline-none rounded-lg"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCardStore } from "@/store/card";

const store = useCardStore();
const props = defineProps<{
  product: cardItem;
}>();

const quantity = ref(props.product.quantity);
</script>

<style lang="scss" scoped></style>

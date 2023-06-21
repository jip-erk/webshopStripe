<template>
  <div class="group relative bg-white  rounded-md  " v-if="localItem && item.images[0]">
    <!-- <div class="w-72 h-64 rounded-t-lg bg-gray-300 bg-cover bg-center"
      :style="{ 'background-image': 'url(' + item.images[0] + ')' }" /> -->
    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none lg:h-80">
      <img :src="item.images[0]" alt="Front of men&#039;s Basic Tee in black."
        class="h-full w-full object-cover object-center lg:h-full lg:w-full">
    </div>
    <div class="container w-full h-16 flex justify-between items-center font-medium text-xl">
      <p class="max-w-[200px]">{{ item.name }}</p>
      <p>€ {{ item.price_euro / 100 }}</p>
    </div>
    <div class="container w-full h-16 rounded-b-lg flex justify-end items-center">
      <input type="number" v-model="localItem.quantity" min="1"
        class="w-1/3 h-10 px-3 border border-black border-solid rounded-l-lg" />
      <button @click="addToCart" class="w-2/3 bg-indigo-500 h-10 px-4 rounded-r-lg text-white font-medium">
        Add to basket
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCardStore } from "@/store/card";

const store = useCardStore();

const localItem = ref<cardItem>();

const props = defineProps<{
  item: cardItem;
}>();

const addToCart = () => {
  if (!localItem.value) return;
  store.addToCard(...[localItem.value]);
};

onMounted(() => {
  localItem.value = props.item;
  localItem.value.quantity = 1;
});
</script>

<style lang="scss" scoped>
.container {
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
}
</style>

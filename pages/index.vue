<template>
  <div class="w-full px-5 bg-gray-200">
    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <Product :item="item" v-for="(item, index) in items" :key="index" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const items = ref<cardItem[]>([]);

onMounted(async () => {
  const data = (await $fetch("/api/products")) as cardItem[];
  items.value = data;
});
</script>

<style lang="scss" scoped></style>

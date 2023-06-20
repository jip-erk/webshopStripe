<template>
    <div class="w-[200px] h-[80px] flex gap-2">
        <img :src="product.poster_img" alt="posterImg">
        <div>
            <span>{{ product.name }}</span>
            <span>{{ product.price }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    product: cardItem
}>()
</script>

<style lang="scss" scoped></style>
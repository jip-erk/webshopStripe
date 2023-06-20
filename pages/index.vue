<template>
    <div class="w-full h-full  bg-gray-200">
        <div class="container">
            <div class="flex flex-wrap gap-14 py-20">
                <Product :item="item" v-for="(item, index) in items" :key="index" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const items = ref<cardItem[]>(products)
</script>

<style lang="scss" scoped></style>
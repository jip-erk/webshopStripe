<template>
    <div class="w-72 h-96 bg-white rounded-lg" v-if="localItem">
        <div class="w-72 h-64 rounded-t-lg bg-gray-300 bg-cover bg-center"
            :style="{ 'background-image': 'url(' + item.poster_img + ')' }" />
        <div class="container w-full h-16 flex justify-between items-center font-medium text-xl">
            <p>{{ item.name }}</p>
            <p>$ {{ item.price }}</p>
        </div>
        <div class="container w-full h-16 rounded-b-lg flex justify-end items-center">
            <input type="number" v-model="localItem.quantity"
                class="w-1/3 h-10 px-3 border border-black border-solid rounded-l-lg">
            <button @click="store.addToCard(localItem)"
                class="w-2/3 bg-indigo-500 h-10 px-4 rounded-r-lg text-white font-medium">Add to basket</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useCardStore } from '@/store/card'

const store = useCardStore()

const localItem = ref<cardItem>()

const props = defineProps<{
    item: cardItem
}>()

onMounted(() => {
    localItem.value = props.item
})
</script>

<style lang="scss" scoped>
.container {
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
}
</style>
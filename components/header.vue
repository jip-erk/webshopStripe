<template>
    <div class="w-full m-auto h-20 bg-white">
        <div class="w-100 px-12">
            <div class="flex justify-between h-20 items-center">
                <NuxtLink to="/">
                    <div class="text-2xl font-semibold">
                        Stripe Shop
                    </div>
                </NuxtLink>

                <NuxtLink to="/card" class="link">
                    <div class="basket flex gap-2 px-3 py-2">
                        <span class=" font-mono">{{ cardCount }}</span>
                        <Icon name="material-symbols:shopping-cart-rounded" size="24" />
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useCardStore } from '@/store/card'

const store = useCardStore()

const cardCount = computed(() => store.products.length)
</script>

<style lang="scss" scoped>
.link:hover {
    background-color: rgba(134, 134, 134, 0.232);
    border-radius: 5px;
}
</style>
<template>
    <div class="w-[200px] h-[100px] bg-black flex justify-center p-2">
        <button @click="checkout" class=" bg-white px-2 w-full">chekout</button>
    </div>    
</template>

<script lang="ts" setup>
function checkout() {
    $fetch('/api/checkout', {
        method: "POST",
        body: {
            name: 'yo',
        }
    })
}
</script>

<style lang="scss" scoped>

</style>
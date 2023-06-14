<template>
    <div class="w-72 h-96 bg-white rounded-lg">
        <div class="w-72 h-64 rounded-t-lg bg-gray-300">
            <img src="https://placehold.co/288x256" alt="" class="rounded-t-lg">
        </div>
        <div class="container w-full h-16 flex justify-between items-center font-medium text-xl">
            <p>Item Number 1</p>
            <p>$50</p>
        </div>
        <div class="container w-full h-16 rounded-b-lg flex justify-end items-center">
            <input type="number" placeholder="1" class="w-1/3 h-10 px-3 border border-black border-solid rounded-l-lg">
            <button class="w-2/3 bg-indigo-500 h-10 px-4 rounded-r-lg text-white font-medium">Add to basket</button>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
    .container{
        margin-left: 5%;
        margin-right: 5%;
        width: 90%;
    }
</style>
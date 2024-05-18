<template>
    <div class="container mx-auto mb-14 mt-16 cursor-pointer">
        <div class="opening-container flex justify-between items-center lg:h-[30vh]">
            <div class="p-5">
                <h1 class="text-2xl lg:text-6xl font-semibold text-[#f9d949]">Our Product</h1>
            </div>
            <div>
                <img src="../assets/frieren.png" class="hidden lg:flex absolute -top-16 right-0 w-[70vh] b-10 " alt="">
            </div>
        </div>
    </div>     
</template>

<script setup>
import { ref } from 'vue';

const isColored = ref(false);

const changeColor = () => {
    isColored.value = !isColored.value;
};
</script>
<template>
  <div class="container mx-auto mb-5 h-screen py-28">
    <div class="p-4 flex flex-col justify-center items-center">
      <h1 class="text-4xl lg:text-6xl font-semibold">
        Neo-<span class="text-accent">Kokeshi</span>
      </h1>
      <p class="text-xs opacity-40 mt-2 mb-5">
        This place make your favorite character become a toy.
      </p>
      <button class="btn-shop py-1 px-3 flex gap-x-2 h-15 items-center text-md" @click="data.scrollProducts">
        Get Started
        <Icon icon="mdi:cart" class="items-center"></Icon>
      </button>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { useShoppingStore } from "../stores";
const data= useShoppingStore();
</script>

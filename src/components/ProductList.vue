<template>
  <Opening data-aos="fade-up" />
  <div class="flex nav-border max-w-[500px] items-center px-2 mb-2 mx-auto">
    <Icon icon="bi:search" :style="{ fontSize: 20 }" class="icon ml-3" />
    <input type="text"
      class=" bg-transparent border opacity-60 rounded-lg border-none p-1 px-5 placeholder:text-[0.9rem]"
      placeholder="Search Product" v-model="data.searchQuery" @input="data.search" />
  </div>


  <div class="w-full justify-around card-container flex flex-wrap mb-5" id="shop" data-aos="fade-in">

    <ProductListItem v-if="data.searchQuery" v-for="product in data.searching" :key="product.id" :product="product"
      data-aos="fade-up" />
    <ProductListItem v-if="!data.searchQuery" v-for="product in data.products" :key="product.id" :product="product" />
  </div>
</template>
<script setup>

import ProductListItem from "./ProductListItem.vue";
import { Icon } from "@iconify/vue";
import Opening from "./Opening.vue";
import { useShoppingStore } from "../stores";
const data = useShoppingStore();
</script>
<style scoped>
@import "aos/dist/aos.css";
</style>

<template>
  <Opening data-aos="fade-up"/>
  <div class="w-full justify-around card-container flex flex-wrap mb-5" id="shop" data-aos="fade-in">
    <ProductListItem
      v-if="data.searchQuery"
      v-for="product in data.searching"
      :key="product.id"
      :product="product"
      data-aos="fade-up"
    />
    <ProductListItem
      v-if="!data.searchQuery"
      v-for="product in data.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
<script setup>

import ProductListItem from "./ProductListItem.vue";
import Opening from "./Opening.vue";
import { useShoppingStore } from "../stores";
const data = useShoppingStore();
</script>
<style scoped>
  @import "aos/dist/aos.css";
</style>

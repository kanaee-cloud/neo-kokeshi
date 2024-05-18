<template>
  <Opening />
  <div class="w-full justify-around card-container flex flex-wrap" id="shop">
    <ProductListItem
      v-if="data.searchQuery"
      v-for="product in data.searching"
      :key="product.id"
      :product="product"
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

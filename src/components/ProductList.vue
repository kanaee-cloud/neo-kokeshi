<template>
  <Starting v-if="!data.searchQuery" />
  <Ads v-if="!data.searchQuery" />
  <Opening v-if="!data.searchQuery" />
  <div class="justify-around card-container flex flex-wrap" id="shop">
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
import { useShoppingStore } from "../stores";
import Ads from "./Ads.vue";
import ProductListItem from "./ProductListItem.vue";
import Starting from "./Starting.vue";
import Opening from "./Opening.vue";

const data = useShoppingStore();
</script>

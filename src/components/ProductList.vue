<template>
  <Starting v-if="!data.searchQuery" />
  <Ads v-if="!data.searchQuery" />
  <div class="justify-around flex flex-wrap" id="avaiProducts">
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

const data = useShoppingStore();
</script>

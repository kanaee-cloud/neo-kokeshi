<template>
  <div class="card-container justify-around flex flex-wrap">
    <ProductListItem
      v-for="product in data.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
<script setup>
import ProductListItem from "./ProductListItem.vue";
import { useShoppingStore } from "../stores";

const data = useShoppingStore();
</script>

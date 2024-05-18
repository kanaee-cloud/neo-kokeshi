<template>
  <div class="mt-10">
    <Starting v-if="!data.searchQuery" />
    <Ads v-if="!data.searchQuery" />
  </div>
  <Footer />
</template>
<script setup>
import Ads from "../components/Ads.vue";
// import Content from '../components/Content.vue'
import ProductList from "../components/ProductList.vue";
import { useShoppingStore } from "../stores";
import Starting from "../components/Starting.vue";
import Footer from "../components/Footer.vue";
const data = useShoppingStore();
</script>

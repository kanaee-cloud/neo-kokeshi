<template>
  <div class="mt-10" data-aos="fade-up">
    <ProductList v-if="data.searchQuery" />
    <Starting v-if="!data.searchQuery" />
    <Ads v-if="!data.searchQuery" />
    <Option v-if="!data.searchQuery" />
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
import Option from "../components/Option.vue";
const data = useShoppingStore();
</script>
<style scoped>
@import "aos/dist/aos.css";
</style>

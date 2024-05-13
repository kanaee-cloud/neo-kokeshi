<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
// import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="container mx-auto">
    <Header />
    <!-- <Navbar  class=""/> -->
    <router-view></router-view>
    
  </div>
  <Footer />
</template>

<style scoped></style>

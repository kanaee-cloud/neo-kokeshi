<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <div class="container mx-auto">
      <Header />
    </div>
    
    <!-- <Navbar  class=""/> -->
    <router-view></router-view>
</template>

<style scoped></style>

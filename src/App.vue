<script setup>
    import Header from './components/Header.vue';
    // import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="container mx-auto">
    <Header />
    <!-- <Navbar  class=""/> -->
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>

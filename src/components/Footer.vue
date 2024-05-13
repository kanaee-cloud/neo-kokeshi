<template>
  <div class="gradient py-8">
    <div class="container mx-auto">
      <div class="items-center flex justify-center">
        <h1 class="text-[#f9d949] font-semibold text-4xl">Thanks!</h1>
      </div>
      <div class="flex justify-center gap-x-2 mt-5 mb-5 opacity-30">
        <div class="flex items-center gap-x-1"> 
          <Icon icon="mdi:github" :style="{ fontSize : 20}"/>
          <h1 class="text-sm">kanaee-cloud</h1>
        </div>
        <div class="flex items-center gap-x-1"> 
          <Icon icon="mdi:github" :style="{ fontSize : 20}"/>
          <h1 class="text-sm">ReyzuaWeh</h1>
        </div>
      </div>
      <hr class="opacity-30">
      <div class="mt-5 flex justify-center items-center gap-x-2">
        <img src="../assets/neo-kokeshi2.png" class="w-16">
        <h1 class="font-normal">Neo<span class="text-accent">-Kokeshi</span></h1>
      </div>
    
    </div>
  
  </div>
</template>
<script setup>
  import { Icon } from '@iconify/vue';
</script>
<style scoped> 
  .gradient{
    background: rgb(15,23,42);
    background: linear-gradient(180deg, rgba(15,23,42,0.6306897759103641) 0%, rgba(15,23,42,1) 57%);
  }
</style>
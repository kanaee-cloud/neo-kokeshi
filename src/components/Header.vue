<template>
  <header class="py-8">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <a
          href="/"
          class="font-bold font-primary text-[1rem] lg:text-[2rem] flex"
        >
          <img src="../assets/neo-kokeshi2.png" alt="" width="60" />
        </a>
        <div class="nav-border flex ml-10 px-4 gap-x-5 lg:static justify-between">
          <button @click="isSearchVisible = !isSearchVisible">
            <Icon icon="bi:search" :style="{ fontSize: 23 }" class="icon" />
          </button>
          <input
            type="text"
            class="bg-transparent border opacity-60 rounded-lg border-gray-600 p-1 px-2 placeholder:text-[0.9rem] w-32 lg:w-52"
            placeholder="Search Product"
            v-if="isSearchVisible"
            :class="{
              'fade-in': isSearchVisible,
              'fade-out': !isSearchVisible,
            }"
            v-model="data.searchQuery" @input="data.search"
          />
          <button>
            <router-link to="/cart"><Icon icon="mdi:cart" :style="{ fontSize: 24 }" class="icon"/></router-link>
          </button>
          <div class="dropdown-menu">
            <button @click="isDropdownVisible = !isDropdownVisible">
            <Icon icon="mingcute:down-line" :style="{ fontSize: 23 }" class="mt-2"/>
          </button>
          </div>
        </div>
      </div>
    </div>
        <p class="text-sm dropdown-text fade-in flex justify-end" v-if="isDropdownVisible" >There is {{ data.countCartItems }} item in your cart</p>
  </header>
</template>
<script setup>
import { useShoppingStore } from '../stores'
import { Icon } from "@iconify/vue";
import { ref } from "vue";
const isSearchVisible = ref(false);
const isDropdownVisible = ref(false);
const data = useShoppingStore();
</script>
<style scoped>
.fade-in {
  animation: fadeIn 0.5s ease forwards;
}

.fade-out {
  animation: fadeOut 0.5s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>

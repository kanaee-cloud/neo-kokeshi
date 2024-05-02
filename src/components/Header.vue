<template>
  <header class="py-8">
    <div class="container">
      <div class="flex justify-between items-center">
        <a
          href="/"
          class="font-bold font-primary text-[1rem] lg:text-[2rem] flex"
        >
          <img src="../assets/neo-kokeshi2.png" alt="" width="60" />
        </a>
        <div
          class="nav-border flex ml-10 px-4 py-2 gap-x-5 lg:static justify-between"
        >
          <button @click="isSearchVisible = !isSearchVisible">
            <Icon icon="bi:search" :style="{ fontSize: 23 }" class="icon" />
          </button>
          <input
            type="text"
            class="bg-transparent border opacity-60 rounded-lg border-none p-1 px-2 placeholder:text-[0.9rem] w-32 h-5 lg:w-52"
            placeholder="Search Product"
            v-if="isSearchVisible"
            :class="{
              'fade-in': isSearchVisible,
              'fade-out': !isSearchVisible,
            }"
            v-model="data.searchQuery"
            @input="data.search"
          />
          <router-link to="/cart">
            <button class="flex items-center">
              <Icon icon="mdi:cart" :style="{ fontSize: 24 }" class="icon" />
              <p v-if="data.countCartItems >= 1" class="red text-xs relative p-[2px] top-[-9px] left-[-5px] rounded-2xl">
                {{ data.countCartItems }}
              </p>
            </button>
          </router-link>
          <button>
            <Icon icon="mdi:hamburger-menu" :style="{ fontSize: 24}"/>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useShoppingStore } from "../stores";
const isSearchVisible = ref(false);
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

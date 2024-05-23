<template>
  <header class="py-8">
    <div class="container py-8 fixed top-0 z-50">
      <div class="flex justify-between items-center">
        <a
          href="/"
          class="font-bold font-primary text-[1rem] lg:text-[2rem] flex"
        >
          <img src="../assets/neo-kokeshi2.png" alt="" width="60" />
        </a>
        <div class="hidden lg:flex ">
         <nav class="nav-container p-4 px-5 text-sm space-x-10 items-center">
          <a href="#" :class="{ 'btn-active ' : activeSection === 'home'}" @click="navigateTo('home')">Home</a>
          <a href="#" :class="{ 'btn-active ' : activeSection === 'about'}" @click="navigateTo('about')">About</a>
          <a href="#" :class="{ 'btn-active ' : activeSection === 'contact'}" @click="navigateTo('contact')">Contact</a>
         </nav>
        </div>
        <div
          class="nav-border flex  px-4 py-2 gap-x-5 lg:static justify-between"
        >
          <button @click="isSearchVisible = !isSearchVisible">
            <Icon icon="bi:search" :style="{ fontSize: 23 }" class="icon" />
          </button>
          <input
            type="text"
            class="relative bg-transparent border opacity-60 rounded-lg border-none p-1 px-2 placeholder:text-[0.9rem] w-32 h-5 lg:w-52"
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
              <p
                v-if="data.countCartItems >= 1"
                class="red text-xs relative p-[2px] top-[-9px] left-[-5px] rounded-2xl"
              >
                {{ data.countCartItems }}
              </p>
            </button>
          </router-link>
          <button class="lg:hidden" @click="isOpen = !isOpen">
            <Icon icon="mdi:hamburger-menu" :style="{ fontSize : 25 }"/>
          </button>
        </div>
      </div>
    </div>
    <div class="lg:hidden responsive-nav-transition" :class="{ 'block': isOpen, 'hidden': !isOpen }">
      <nav class="px-2 pt-2 pb-4 right-0 fixed responsive-border w-3/4 h-screen z-50">
        <Icon icon="material-symbols:close" :style="{ fontSize:24 }" @click="isOpen = false"/>
        <a href="#" :class="{ 'block py-2 px-4 text-sm': true, 'text-blue-500': activeSection === 'home' }" @click="navigateTo('home'); isMobileMenuOpen = false">Home</a>
        <a href="#" :class="{ 'block py-2 px-4 text-sm': true, 'text-blue-500': activeSection === 'shop' }" @click="navigateTo('shop'); isMobileMenuOpen = false">Shop</a>
        <a href="#" :class="{ 'block py-2 px-4 text-sm': true, 'text-blue-500': activeSection === 'contact' }" @click="navigateTo('contact'); isMobileMenuOpen = false">Contact</a>
        <a href="#" class="block py-2 px-4 text-sm">Logout</a>
      </nav>
    </div>
  </header>
  
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useShoppingStore } from "../stores";
const isSearchVisible = ref(false);
const isOpen = ref(false);
const activeSection = ref('home');
const data = useShoppingStore();

const navigateTo = (section) => {
  activeSection.value = section;
  if (section === 'about') {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  } else if (section === 'contact') {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

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

.responsive-nav-transition {
  transition: transform 0.3s ease-in-out;
}
</style>

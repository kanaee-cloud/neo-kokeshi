<template>
  <header class="py-8">

    <div class="container py-8 fixed top-0 z-50">
      <div class="flex justify-between items-center">
        <a href="/" class="font-bold font-primary text-[1rem] lg:text-[2rem] flex">
          <img src="../assets/neo-kokeshi2.png" alt="" width="60" />
        </a>
        <div class="hidden p-2 lg:flex justify-between nav-container z-50 ">
          <nav class=" flex px-5 justify-center gap-x-10 text-sm items-center">
            <a href="#" :class="{ 'btn-active ': activeSection === 'home' }" @click="navigateTo('home')">
              Home
            </a>
            <a href="#" :class="{ 'btn-active ': activeSection === 'about' }" @click="navigateTo('about')">
              About
            </a>
            <a href="#" :class="{ 'btn-active ': activeSection === 'contact' }" @click="navigateTo('contact')">
              Contact
            </a>
          </nav>
        </div>
        <div class="nav-border flex  px-4 py-2 gap-x-5 lg:static justify-between">
          <button class="btn-follow text-sm">
            Follow Us
          </button>
          <button class="lg:flex" @click="isOpen = !isOpen">
            <Icon icon="mdi:hamburger-menu" :style="{ fontSize: 25 }" />
          </button>
        </div>
      </div>

    </div>
    <div class="flex responsive-nav-transition" :class="{ 'block': isOpen, 'hidden': !isOpen }">
      <nav class="px-2 pt-2 pb-4 right-0 fixed card-container w-1/4 h-screen z-50">
        <Icon icon="material-symbols:close" :style="{ fontSize: 24 }" @click="isOpen = false" />
        <div class="mt-5">
          <router-link to="/">
            <button class="flex items-center gap-x-2">
              <Icon icon="ic:round-home" :style="{ fontSize: 30 }" class="icon" />
              <p class="text-md">Home</p>
            </button>
          </router-link>
        <router-link to="/product">
            <button class="flex items-center gap-x-2">
              <Icon icon="ant-design:product-filled" :style="{ fontSize: 30 }" class="icon" />
              <p class="text-md">Product</p>
            </button>
          </router-link>
        <router-link to="/cart">
            <button class="flex items-center gap-x-2">
              <Icon icon="mdi:cart" :style="{ fontSize: 30 }" class="icon" />
              <p class="text-md">Cart</p>
              <p v-if="data.countCartItems >= 1"
                class="red text-sm rounded-2xl p-1 -py-1">
                {{ data.countCartItems }}
              </p>
            </button>
          </router-link>
        <router-link to="/blank">
            <button class="flex items-center gap-x-2">
              <Icon icon="material-symbols:logout" :style="{ fontSize: 30 }" class="icon" />
              <p class="text-md">Logout</p>
            </button>
          </router-link>
        </div>
        
        
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
<template>
  <div class="justify-around flex flex-wrap min-w-full bg-red">
    <ProductListItem 
      v-if="data.searchQuery" 
      v-for="product in data.searching" 
      :key="product.id" 
      :product="product" />
  </div>
  <div class="flex flex-col lg:flex-row gap-x-5 container mx-auto">
    <div class="card-container mt-10">
      <h1 class="text-accent font-semibold text-2xl">Your Cart</h1>
      <div 
        class="flex flex-col" 
        v-for="item in data.getCartItems" 
        :key="item.id">
        <div class="cart-item flex flex-row gap-x-5 mb-5">
          <img 
            :src="item.image" 
            alt="" 
            class="w-32 h-32 object-cover rounded-md" />
          <div class="flex justify-between ">
            <div class="p-5 py-8  ">
              <div class="flex gap-x-2">
                <button 
                  class="btn rounded-lg opacity-70" 
                  @click="data.tambahQty(item)">
                  <Icon icon="ic:baseline-plus" :style="{ fontSize: 18 }" class="items-center" />
                </button>
                <p class="py-0.5">{{ item.quantity }}</p>
                <button class="btn rounded-lg opacity-70" @click="data.kurangQty(item)">
                  <Icon icon="ic:baseline-minus" :style="{ fontSize: 18 }" />
                </button>
                <button @click="data.removeFromCart(item)">
                  <Icon icon="ph:trash" style="color: #ff0000" :style="{ fontSize: 25 }"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img v-if="data.cartItems.length == 0" src="../assets/cart.gif" class="w-[50vh] rounded-md mx-auto mt-10"
        alt="" />
      <h1 v-if="data.cartItems.length == 0" class="mt-5 text-md flex align-middle justify-center">
        Nooo... You haven't put anything here
      </h1>
    </div>
    <div v-if="data.cartItems.length != 0" class="card-container mt-10 lg:w-[75vh] h-screen">
      <h1 class="text-accent font-semibold text-lg">Confirm your order</h1>
      <div v-for="item in data.getCartItems" :key="item.id" class="p-4">
        <div class="flex justify-between">
          <h1 class="text-sm font-extralight">{{ item.name }} * <strong class="text-accent">{{ item.quantity }}</strong>
          </h1>
          <p class="text-sm text-green-500 font-semibold">
            ${{ item.price * item.quantity }}
          </p>
        </div>
      </div>
      <hr class="opacity-30 mx-2" />
      <div class="flex justify-between p-4">
        <h1>Total</h1>
        <h1 class="text-2xl">${{ data.buyingTotal }}</h1>
      </div>
      <router-link to="/transaction">
        <button class="btn-cart btn-sm w-full">Confirm</button>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import ProductListItem from "../components/ProductListItem.vue";
import { useShoppingStore } from "../stores";
const data = useShoppingStore();
</script>

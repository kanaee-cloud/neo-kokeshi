<template>
  <div class="card-container">
    <h1>Your Cart</h1>
    <div class="flex flex-col" v-for="item in data.getCartItems" :key="item.id">
      <div class="cart-item flex gap-x-5 mb-5">
        <img
          :src="item.image"
          alt=""
          width="110"
          class="w-52 h-48 object-cover rounded-md"
        />
        <div class="p-5 py-14 w-30 lg:w-full">
          <p class="text-[0.9rem]">{{ item.name }}</p>
          <p class="text-sm lg:text-md text-accent">{{ item.anime }}</p>
          <p class="text-sm">${{ item.price }}</p>
        </div>
        <div class="p-5 py-16 flex gap-x-2 lg:w-full">
          <Icon
            icon="mdi:location"
            :style="{ fontSize: 20 }"
            class="relative top-1.5"
            style="color: #ffea00"
          />
          <p class="text-[0.9rem]">{{ item.location }}</p>
        </div>
        <div class="p-5 gap-x-2 py-16 flex">
          <button
            class="border h-9 rounded-lg opacity-70"
            @click="data.tambahQty(item)"
          >
            <Icon
              icon="ic:baseline-plus"
              :style="{ fontSize: 18 }"
              class="items-center"
            />
          </button>
          <p class="mx-2 py-0.5">{{ item.quantity }}</p>
          <button
            class="border h-9 rounded-lg opacity-70"
            @click="data.kurangQty(item)"
          >
            <Icon icon="ic:baseline-minus" :style="{ fontSize: 18 }" />
          </button>
        </div>
        <div class="p-5 gap-x-2 py-16 flex flex-col w-full">
            <p class="text-sm opacity-30">Total price :</p>
            <p class="text-md text-green-500 font-extralight">${{ item.price * item.quantity }}</p>
        </div>
        <div class="p-5 gap-x-2 py-20 mx-2">
            <button
                @click="data.removeFromCart(item)"
            >
                <Icon icon="streamline:delete-1" style="color: #ff0000" />
            </button>
        </div>
      </div>
    </div>
    <h1 v-if="data.cartItems.length != 0" class="text-2xl flex justify-end">Total : {{data.buyingTotal}}</h1>
    <h1 v-if="data.cartItems.length == 0" class="mt-5 text-2xl flex align-middle justify-center">Nooo... You haven't put anything here</h1>
  </div>
</template>
<script setup>
import { useShoppingStore } from "../stores";
import { Icon } from "@iconify/vue";
const data = useShoppingStore();
</script>

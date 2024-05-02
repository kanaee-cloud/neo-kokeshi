<template>
  <div class="card m-3">
    <img
      :src="product.image"
      alt=""
      class="w-[30vh] h-48 object-cover rounded-md mb-4"
    />
    <hr class="opacity-30" />
    <div class="spec mt-2 flex justify-between">
      <h1 class="text-[0.9rem]">{{ product.name }}</h1>
      <button class="btn-cart btn-sm" @click="data.addToCart(product)">
        <Icon icon="mdi:cart" :style="{ fontSize: 20 }" />
      </button>
    </div>
    <p class="text-sm text-accent">{{ product.anime }}</p>
    <div class="flex justify-between mt-5">
      <p class="text-[1rem] flex gap-x-1.5">
        <Icon
          icon="material-symbols:star-rate"
          :style="{ fontSize: 25 }"
          style="color: #ffea00"
          class="mt-0.5"
        />
        {{ product.rate }}
      </p>
      <p class="text-md">${{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
import { useShoppingStore } from "../stores";
import { Icon } from "@iconify/vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const data = useShoppingStore();
</script>

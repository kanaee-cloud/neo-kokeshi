<template>
  <div class="detail-container">
    <div class="flex flex-col lg:flex-row">
      <div class="flex flex-col lg:mr-10 min-w-max">
        <img
          :src="data.selectedItem.image"
          alt=""
          class="w-[73vh] lg:w-full h-full lg:h-[70vh] mb-1 object-cover rounded-md"
        />
      </div>
      <div class="mt-4 lg:mt-0 rounded-md py-10 p-8">
        <p class="text-accent">
          {{ data.selectedItem.anime }}
        </p>
        <h1 class="text-4xl font-semibold pb-4" style="color: #f9d949">
          {{ data.selectedItem.name }}
        </h1>
        <hr class="opacity-30" />
        <p
          class="text-justify text-sm font-extralight opacity-50 mt-10"
          v-html="data.selectedItem.description"
        ></p>
        <div class="mt-10 flex justify-evenly">
          <div class="flex">
            $
            <p class="text-4xl">{{ data.selectedItem.price }}</p>
          </div>
          <div class="flex gap-x-2">
            <Icon
              icon="material-symbols:star-rate"
              :style="{ fontSize: 40 }"
              style="color: #ffea00"
              class="mt-0.5"
            />
            <div class="flex flex-col">
              <p class="text-xl">{{ data.selectedItem.rate }} / 5.0</p>
              <p class="text-xs opacity-30">(From 5.875 user)</p>
            </div>
            <div class="flex">
                <Icon
            icon="mdi:location"
            :style="{ fontSize: 30 }"
            style="color: #ffea00"
          />
          <p class="items-center">{{ data.selectedItem.location }}</p>
            </div>
          </div>
        </div>
        <div class="flex mt-16">
          <button
            class="btn-cart btn-sm w-full flex p-4 pt-1.5 justify-center"
            @click="data.addToCart(data.selectedItem)"
          >
            <icon icon="mdi:cart" :style="{ fontSize: 20 }"></icon>
            <p>Add to chart</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import router from "../router";
import { useShoppingStore } from "../stores";
const data = useShoppingStore();
if (data.selectedItem.id === undefined) {
  router.push("/");
}
</script>

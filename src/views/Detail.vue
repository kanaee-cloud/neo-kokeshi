<template>
    <div class="card-container wi">
        <div class="flex flex-row">
            <div class="flex flex-col mr-10 min-w-max">
                <img :src="data.selectedItem.image" alt="" class="w-52 h-48 mb-1 object-cover rounded-md">
                <div class="flex flex-row justify-center align-middle">
                    <Icon icon="material-symbols:star-rate" :style="{ fontSize: 25 }" style="color: #ffea00" class="mt-0.5"/>
                    {{data.selectedItem.rate}} || ${{data.selectedItem.price}}
                </div>
                <button class="btn-cart btn-sm flex pt-1.5 justify-center" @click="data.addToCart(data.selectedItem)">
                    <icon icon="mdi:cart" :style="{ fontSize: 20 }"></icon>
                    <p>Add to chart</p>
                </button>
            </div>
            <div class="w-full max-h-fit min-h-full rounded-md bg-zinc-500 bg-opacity-20 py-2 px-4">
                <h1 class="text-4xl pb-4" style="color: #F9D949;">{{data.selectedItem.name}}</h1>
                <p class="text-base text-justify" v-html="data.selectedItem.description"></p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import router from '../router';
import { useShoppingStore } from "../stores";
const data = useShoppingStore();
if(data.selectedItem.id === undefined){
    router.push("/");
}
</script>
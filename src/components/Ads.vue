<template>
  <div class="lg:flex mb-5 gap-x-4">
    <div class="swiper-container lg:w-[90vh] p-0">
      <div class="swiper-image">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            ><img
              src="../assets/ads-1.jpg"
              class="w-full h-full lg:h-[50vh] rounded-md"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="../assets/ads-2.jpg"
              class="w-full h-full lg:h-[50vh] rounded-md"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="../assets/ads-3.jpg"
              class="w-full h-full lg:h-[50vh] rounded-md"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="../assets/ads-4.jpg"
              class="w-full lg:h-[50vh] rounded-md"
              alt=""
          /></swiper-slide>
        </swiper>
      </div>
      <div class="p-4">
        <h1 class="text-accent font-semibold lg:text-[1.5rem]">
          Officialy New Product Launched!
        </h1>
        <div class="flex flex-col lg:flex-row gap-x-12 mt-5">
          <p class="text-sm flex flex-col">
            Gojo & Getou <span class="opacity-30 text-xs">Jujutsu Kaisen</span>
          </p>
          <p class="text-sm flex flex-col">
            Frieren <span class="opacity-30 text-xs">Sousou no frieren</span>
          </p>
        </div>
        <div class="flex flex-col lg:flex-row gap-x-10">
          <p class="text-sm flex flex-col">
            Kuro & Kenma<span class="opacity-30 text-xs">Haikyuu</span>
          </p>
          <p class="text-sm flex flex-col">
            Makima<span class="opacity-30 text-xs">Chainsaw-man</span>
          </p>
        </div>
      </div>
    </div>
    <div class="card-container mt-2 lg:mt-0">
      <h1 class="lg:text-[2rem] font-semibold text-[#F9D949]">
        Most Popular Product!
      </h1>
      <p class="text-sm font-light opacity-30">on Neo-Kokeshi</p>
      <div class="lg:flex flex-col">
        <img
          src="https://i.pinimg.com/originals/b7/90/16/b790164ba98ae10425b37bc7ba1a1c90.gif"
          alt=""
          class="mt-5 lg:w-55 lg:h-[45vh] rounded-md"
        />
        <div class="mt-5 flex justify-between">
          <h1 class="text-xl font-normal items-center pt-2">
            Frieren :
            <span class="font-medium text-accent"> Sousou no Frieren</span>
          </h1>
          <button class="btn btn-cart py-1 px-4">Buy Now!</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import { Icon } from '@iconify/vue';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Autoplay],
    };
  },
};
</script>

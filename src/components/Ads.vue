<template >
  <div class="lg:flex mb-5 gap-x-4 container mx-auto w-full">
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
      <div class="p-4 flex justify-between">
        <h1 class="text-[#f9d949] font-semibold lg:text-[1.5rem]">
         New Figure Launched!
        </h1>
        <button class="btn text-sm p-2 items-center" >
          Shop now!
        </button>
      </div>
    </div>
    
  </div>
</template>
<script>
// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Icon } from "@iconify/vue/dist/iconify.js";
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

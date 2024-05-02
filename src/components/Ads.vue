<template>
  <div class="lg:flex mb-5 gap-x-4">
    <div class="swiper-container lg:w-[90vh] p-0">
      <div class="swiper-image">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          :pagination="{ clickable: true }"
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
              class="w-full lg:h-[50vh] rounded-md"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="../assets/ads-3.jpg"
              class="w-full lg:h-[50vh] rounded-md"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="../assets/ads-4.jpg"
              class="w-full lg:h-[50vh]  rounded-md"
              alt=""
          /></swiper-slide>
        </swiper>
      </div>
      <div class="p-4">
        <h1 class="text-accent font-semibold lg:text-[1.5rem]">News Today!</h1>
        <p class="text-md">Neo-Kokeshi got Gundam License</p>
        <p class="text-xs opacity-30 mb-2">Uploaded by Meownyan</p>
        <p class="text-md">TOEIC Test in Japan Next Week</p>
        <p class="text-xs opacity-30">Uploaded by Meownyan</p>
      </div>
    </div>
    <div class="card-container mt-2 lg:mt-0">
        <h1 class="lg:text-[2rem] font-semibold">Welcome to <span class="text-[#F9D949]">Neo-Kokeshi!</span></h1>
    </div>
  </div>
</template>
<script>
// import Swiper core and required modules
import { Pagination } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

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
      modules: [Pagination],
    };
  },
};
</script>

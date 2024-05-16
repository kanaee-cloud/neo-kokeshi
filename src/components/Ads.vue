<template >
  <div class="lg:flex mb-5 gap-x-4 card-container w-full" id="about">
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
    <div class="product-container mt-2 lg:mt-0">
      <div class="p-5">
        <h1 class="lg:text-4xl font-semibold text-accent">What is Neo-Kokeshi?</h1>
        
        <div class="mt-5 lg:pr-10">
          <hr class="opacity-30" />
          <p class="text-justify text-sm mt-3 opacity-30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reiciendis quod hic sunt magnam debitis sequi a ipsa repellat dicta alias harum dolores eum dolor, saepe ut illum, doloribus quaerat.</p>
          <p class="text-justify text-sm mt-3 opacity-30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis sint, cupiditate blanditiis expedita ex esse laboriosam, ullam dolorum adipisci explicabo nesciunt rerum. Recusandae nisi suscipit pariatur vitae minima? Dolore.</p>
        </div>
        <div class="mt-10 flex gap-x-3 detail-container">
          <img src="../assets/asuka.jpg" class="lg:w-[150px] h-[150px] rounded-l-md">
          <div class="p-4">
            <h1 class="text-xs text-[#f9d949] font-semibold">Asuka Langley</h1>
            <p class="text-xs text-justify pr-5 opacity-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            <button class="btn text-sm mt-5 px-3">
              Github
            </button>
          </div>
        </div>
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

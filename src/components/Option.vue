<template>
  <div class="container mx-auto" id="contact">
    <h1 class="font-semibold text-4xl mx-auto items-center flex justify-center text-accent">Product Category</h1>
    <swiper 
        :effect="'coverflow'" 
        :grabCursor="true" 
        :centeredSlides="true" 
        :slidesPerView="'auto'" 
        :coverflowEffect="{
          rotate: 30,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        }" 
        :pagination="true" 
        :modules="modules" 
        class="mx-auto mb-5"
      >
        <swiper-slide class="relative group">
            <img src="../assets/gundam.jpg" alt="" class="swiper-container">
            <div class="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex justify-center items-center">
                <p class="text-[#f9d949] text-2xl font-semibold">Gundam</p>
            </div>
        </swiper-slide>
        <swiper-slide class="relative group">
            <img src="../assets/shounen.jpg" alt="" class="swiper-container">
            <div class="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex justify-center items-center">
                <p class="text-[#f9d949] text-2xl font-semibold">Shounen Jump</p>
            </div>
        </swiper-slide>
        <swiper-slide class="relative group">
            <img src="../assets/manga.jpg" alt="" class="swiper-container">
            <div class="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex justify-center items-center">
                <p class="text-[#f9d949] text-2xl font-semibold">Manga</p>
            </div>
        </swiper-slide>
      </swiper>
  </div>
      
</template>
<script>
// import Swiper core and required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Icon } from "@iconify/vue/dist/iconify.js";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import { Icon } from '@iconify/vue';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

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
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>
<style scoped>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 500px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
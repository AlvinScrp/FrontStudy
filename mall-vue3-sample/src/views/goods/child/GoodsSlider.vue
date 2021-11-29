<template>
    <swiper
        class="mySwiper"
        :loop="true"
        :autoplay="swiperOptions.autoplay"
        :pagination="swiperOptions.pagination"
    >
        <swiper-slide class="swiper-slide" v-for="(banner, index) in banners" :key="index">
            <img class="image" :src="banner.image" :alt="banner.title" />
        </swiper-slide>
    </swiper>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Autoplay, EffectCoverflow, EffectCube, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
SwiperCore.use([Autoplay, EffectCoverflow, EffectCube, Pagination])

const props = defineProps<{ banners?: { image: string, title: string | undefined }[] }>()

console.log(props, 'GoodsSlider')
const swiperOptions = {
    autoplay: { delay: 1500, disableOnInteraction: false },
    pagination: { clickable: false }
}
</script>
<style type="text/css">
</style>
<style scoped lang="less">
.swiper {
    --swiper-pagination-color: #ff6600;
    width: 100vw;
    height: 100vw;
}
.swiper-slide {
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    .image {
        width: 100%;
        height: 100%;
    }
}
</style>

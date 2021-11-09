<template>
    <div class="logistics">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="swiper-slide">Slide 1</swiper-slide>
            <swiper-slide class="swiper-slide">Slide 2</swiper-slide>
            <swiper-slide class="swiper-slide">Slide 3</swiper-slide>

        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    components: {
        Swiper,
        SwiperSlide
    },
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang='less' scoped>
.logistics {
    position: relative;
    height: 0.6rem;
    width: 3.75rem;
    .swiper {
        position: relative;
        width: 100%;
        height: 0.6rem;
        .swiper-slide {
            width: 100%;
            height: 0.6rem;
        }
    }
}
</style>

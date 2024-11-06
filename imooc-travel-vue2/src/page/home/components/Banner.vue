
<template>
  <swiper ref="mySwiper" class="swiper" :options="swiperOption">
    <swiper-slide v-for="imageUrl in swiperList" :key="imageUrl">
      <img class="swiper-image" :src="imageUrl" mode="aspectFill" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-pagination",
  title: "Pagination",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["swiperList"],
  data() {
    return {
      // swiperList: [
      //   "http://img1.qunarzz.com/piao/fusion/1805/77/f63bd04dd5319602.jpg_750x200_6ba8e0ca.jpg",
      //   "http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg",
      //   "http://img1.qunarzz.com/piao/fusion/1804/84/6334efc67b637902.jpg_750x200_598f99fc.jpg",
      // ],
      swiperOption: {
        loop: true,
        autoplay: { delay: 1500 },
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "banner-bullet",
          bulletActiveClass: "banner-bullet-active",
          clickable: true,
        },
      },
    };
  },
};
</script>

<style lang="scss" >
.swiper {
  height: 100px;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    background-color: white;

    .swiper-image {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .swiper-pagination {
    bottom: 6px; // 调整分页器位置
    text-align: center;

    .banner-bullet {
      width: 8px;
      height: 8px;
      display: inline-block;
      border-radius: 100%;
      background: #000;
      opacity: 0.3;
      margin: 0 3px;

      &-active {
        background-color: white; // 活跃状态颜色
        opacity: 1;
      }
    }
  }
}
</style>
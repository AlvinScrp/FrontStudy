<template>
  <section class="recommond">
    <div class="split"></div>
    <p class="label">为你推荐</p>
    <!-- <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        class="slide-item"
        v-for="(recommond, index) in recommonds"
        :key="index"
      >
        <img class="recommond-image" :src="recommond.imageUrl" alt="" />
        <p class="intro">{{ recommond.intro }}</p>
        <p class="price">
          <span class="sell-price">
            {{ formatPrice(recommond.sellPrice, true) }}
          </span>
          <span
            class="original-price"
            v-show="recommond.sellPrice < recommond.originalPrice"
          >
            {{ formatPrice(recommond.originalPrice, true) }}
          </span>
        </p>
      </swiper-slide>
    </swiper> -->
  </section>
</template>

<script>

export default {
  props: {
    recommonds: {
      type: Array,
      default() {
        return [
          {
            imageUrl:
              "https://staticimg.ngmm365.com/a88539d549d1208afbace1d04d6b08b1-w800_h800.jpg",
            intro: "Ddrops维生素D3滴剂婴儿版*2瓶15天+ ",
            sellPrice: 19200,
            originalPrice: 19900,
          },
          {
            imageUrl:
              "https://staticimg.ngmm365.com/5648b1b5bde466e49d6864650569bf0e-w1024_h1024.jpg",
            intro: "小小伞维生素D3 8ml/瓶 ",
            sellPrice: 9900,
            originalPrice: 12900,
          },
          {
            imageUrl:
              "https://staticimg.ngmm365.com/c290a216db6488ae6cc1c71c6b42d0aa-w800_h800.jpg",
            intro: "【2瓶】Ostelin奥斯特林维D滴剂 20ml 6m+ ",
            sellPrice: 6900,
            originalPrice: 69000,
          },
          {
            imageUrl:
              "https://staticimg.ngmm365.com/2e09cf34201c002335dcf1a7c9edb360-w800_h800.jpg",
            intro: "小澳特力软糖3g/粒×45粒/瓶 ",
            sellPrice: 3900,
            originalPrice: 4900,
          },
          {
            imageUrl:
              "https://staticimg.ngmm365.com/973dbe117f1957a7f7d8d0c30f03a8a5-w800_h800.jpg",
            intro: "D-CAL/迪巧小黄条婴幼儿液体钙 10ml*20条/盒",
            sellPrice: 19200,
            originalPrice: 19900,
          },
          {
            imageUrl:
              "https://staticimg.ngmm365.com/fa379563f8815b9d10ca5e437a5b9f5b-w800_h800.jpg",
            intro: " Swisse K2钙维生素D骨骼片 90片/瓶 ",
            sellPrice: 19900,
            originalPrice: 19900,
          },
        ];
      },
    },
  },
  components: {
    // Swiper,
    // SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3.5,
        spaceBetween: 15,
        freeMode: true,
      },
    };
  },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.swiper;
    // },
  },
  methods: {
    formatPrice(price, withDollar = false) {
      return (withDollar ? "¥" : "") + `${price / 100.0}`;
    },
  },
  mounted() {
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style lang="less" scoped>
.split {
  background-color: #f6f6f6;
  width: 100%;
  height: 0.15rem;
}
.label {
  margin: 0.1rem;
  font-size: 0.13rem;
  color: #666;
}
.swiper {
  margin-left: 0.1rem;

  .slide-item {
    display: inline-block;
    width: 100%;
    padding-bottom: 0.1rem;

    .recommond-image {
      display: inline-block;
      width: 93%;
      height: auto;
    }
    .intro {
      margin-top: 0.05rem;
      margin-right: 0.05rem;
      display: inline-block;
      font-size: 0.12rem;
      color: #333;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 0.12rem;
      overflow: hidden;
    }
    .price {
      margin-top: 0.12rem;
      font-size: 0.12rem;

      .sell-price {
        color: #ff2266;
      }
      .original-price {
        color: #666666;
        text-decoration: line-through;
      }
    }
  }
}
// .swiper-container {
//   width: 100%;
//   height: 100%;
// }

// .swiper-slide {
//   width: 60%;

// }
// .swiper-slide:nth-child(2n) {
//   width: 40%;
// }
// .swiper-slide:nth-child(3n) {
//   width: 20%;
// }

// .swiper-slide {
//   text-align: center;
//   font-size: 18px;
//   background: #fff;
//   height: 200px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .wrapper {
//   display: flex;
//   flex-wrap: nowrap;
//   width: 100rem;

.scroll-item {
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  margin: 0.1rem;
  background: yellow;
  color: black;
  // }
}
</style>
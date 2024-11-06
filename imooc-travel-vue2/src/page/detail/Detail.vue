<template>
  <div class="detail">
    <detail-header :scrollTop="scrollTop" class="header"></detail-header>
    <div class="body" @scroll="handleBodyScroll">
      <detail-banner class="banner" :product="product"></detail-banner>
      <!--
      <detail-info :product="product"></detail-info>
      <div class="space10 bg-gray top-line"></div>
      <detail-product-list
        :multyProducts="product.multyProducts"
        :currentProductId="product.productId"
      ></detail-product-list>
      <div class="space10 bg-gray"></div>
      <rating-header :comment="product.comment"></rating-header>
      <div class="bg-white">
        <div class="line-space-gray mrglf12"></div>
      </div>
      <rating-crowd :comment="product.comment"></rating-crowd>-->
      <rating-bd :comment="product.comment"></rating-bd>
      <div class="space10 bg-gray"></div>
      <intro-tabbar
        :tabs="introTabInfo.tabs"
        :selectedKey="introTabInfo.selectedKey"
        class="intro-tab"
      ></intro-tabbar>
      <detail-cost></detail-cost>
      <detail-schedule></detail-schedule>
      <detail-features></detail-features>
    </div>
    <detail-bottom class="bottom"></detail-bottom>

    <gallery
      v-if="showGallery"
      :imageUrls="gallery.images"
      :index="gallery.index"
    ></gallery>
  </div>
</template>

<script>
import DetailHeader from "./components/DetailHeader.vue";
import DetailBottom from "./components/DetailBottom.vue";
import DetailBanner from "./components/DetailBanner.vue";
import DetailInfo from "./components/DetailInfo.vue";
import DetailProductList from "./components/DetailProductList.vue";
import RatingHeader from "./components/RatingHeader.vue";
import RatingCrowd from "./components/RatingCrowd.vue";
import RatingBd from "./components/RatingBd.vue";
import IntroTabbar from "./components/IntroTabbar.vue";
import DetailCost from "./components/DetailCost.vue";
import DetailSchedule from "./components/DetailSchedule.vue";
import DetailFeatures from "./components/DetailFeatures.vue";
import Gallery from "@/components/Gallery.vue";
import axios from "axios";
export default {
  components: {
    DetailHeader,
    DetailBottom,
    DetailBanner,
    DetailInfo,
    // "detail-product-list":DetailProductList,
    DetailProductList,
    RatingHeader,
    RatingCrowd,
    RatingBd,
    Gallery,
    IntroTabbar,
    DetailCost,
    DetailSchedule,
    DetailFeatures,
  },
  props: ["id"],
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      scrollTop: 0,
      gallery: {
        images: [],
        index: 0,
      },
      product: {},
      introTabInfo: { tabs: [], selectedKey: "" },
    };
  },
  mounted() {
    this.loadDetailInfo(this.id);
  },
  methods: {
    async loadDetailInfo(id) {
      try {
        console.log("loadDetailInfo:", id);
        const response = await axios.get("/api/detail.json?id=" + id);
        this.product = { ...response.data.data };
        this.introTabInfo.tabs.splice(
          0,
          this.introTabInfo.tabs.length,
          ...[
            { key: "cost", name: "费用信息" },
            { key: "schedule", name: "行程安排" },
            { key: "features", name: "线路特色" },
          ]
        );
        this.introTabInfo.selectedKey = "cost";
        console.log(this.product);
      } catch (error) {
        console.error(error);
      }
    },
    handleBodyScroll(event) {
      this.scrollTop = event.target.scrollTop;
    },
  },
  computed: {
    showGallery() {
      return this.gallery.images && this.gallery.images.length > 0;
    },
  },
};
</script>
<style lang='scss' scoped>
.detail {
  position: relative;
  height: 100vh;
  width: 100%;

  .header {
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .body {
    overflow-y: scroll;
    height: 100vh;
    width: 100%;

    .banner {
      z-index: -1;
    }

    .body-item {
      height: 30vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .space10 {
    width: 100%;
    height: 10px;
  }

  .bg-white {
    background-color: white;
  }
  .bg-gray {
    background-color: #f5f5f5;
  }

  .line-space-gray {
    height: 1px;
    background-color: #f5f5f5;
  }
  .mrglf12 {
    margin-left: 12px;
    margin-right: 12px;
  }
  .top-line {
    border: solid #e0e0e0;
    border-width: 1px 0 0;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .intro-tab {
    position: sticky;
  }
}
</style>
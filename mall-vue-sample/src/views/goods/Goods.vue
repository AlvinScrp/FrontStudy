<template>
  <section class="goods" ref="goods">
    <goods-indicator
      class="indicator"
      ref="indicator"
      :style="{ opacity: indicatorOapcity }"
    ></goods-indicator>
    <section class="content">
      <goods-slider :banners="goodsSliderBanner"></goods-slider>
      <goods-activity :activity="goodsActivityInfo"></goods-activity>
      <goods-vip :vip="goodsVip"></goods-vip>
      <goods-intro-area :intro="goodsIntro"></goods-intro-area>
      <goods-resource-banner></goods-resource-banner>
      <goods-user-review></goods-user-review>
      <goods-recommend></goods-recommend>
      <goods-detail-area
        v-if="detailHtmlLoaded"
        :detailHtml="detailHtml"
      ></goods-detail-area>
    </section>
    <goods-bottom-option class="bottom-option"></goods-bottom-option>
  </section>
</template>

<script>
import * as detailHttp from "network/goodsDetail.js";
import GoodsIndicator from "./child/GoodsIndicator.vue";
// import ScrollView from "components/ScrollView.vue";
import GoodsSlider from "./child/GoodsSlider.vue";
import GoodsActivity from "./child/GoodsActivity.vue";
import GoodsVip from "./child/GoodsVip.vue";
import GoodsIntroArea from "./child/GoodsIntroArea.vue";
import GoodsResourceBanner from "./child/GoodsResourceBanner.vue";
import GoodsUserReview from "./child/GoodsUserReview.vue";
import GoodsDetailArea from "./child/GoodsDetailArea.vue";
import GoodsRecommend from "./child/GoodsRecommend.vue";
import GoodsBottomOption from "./child/GoodsBottomOption.vue";

export default {
  components: {
    GoodsIndicator,
    // ScrollView,
    GoodsSlider,
    GoodsActivity,
    GoodsVip,
    GoodsIntroArea,
    GoodsResourceBanner,
    GoodsUserReview,
    GoodsRecommend,
    GoodsDetailArea,
    GoodsBottomOption,
  },
  data() {
    return {
      goodsInfo: {},
      id: 20217,
      indicatorOapcity: 0.0,
      detailHtml: "",
      detailHtmlLoaded: false,
    };
  },

  methods: {
    loadGoodsDetail() {
      detailHttp
        .getGoodsDetail(this.id)
        .then((res) => {
          this.goodsInfo = res;
          console.log(this.goodsInfo);
        })
        .catch((err) => console.log(err));
      // .then()
      setTimeout(() => {
        detailHttp
          .getGoodsRichText(111)
          .then((richText) => {
            this.detailHtml = richText.data;
            this.detailHtmlLoaded = true;
          })
          .catch((err) => console.log(err));
      }, 200);
    },

    onContentScroll() {
      let scrollTop = this.$refs.goods.scrollTop;
      let opacity = (scrollTop / 200).toFixed(1);
      // console.log(`scrollTop:${scrollTop},opacity:${opacity}`);

      opacity = opacity > 1 ? 1 : opacity;
      if (opacity != this.indicatorOapcity) {
        this.indicatorOapcity = opacity;
      }
    },
  },
  computed: {
    goodsName() {
      // console.log(this.goodsInfo.name);
      return this.goodsInfo.name;
    },
    goodsSliderBanner() {
      var name = this.goodsInfo.name;
      console.log(`pictures: ${this.goodsInfo.pictures}`);
      if (this.goodsInfo.pictures) {
        return this.goodsInfo.pictures.map((pic) => ({
          image: pic,
          title: name,
        }));
      }
      return [];
    },
    goodsActivityInfo() {
      if (this.goodsInfo.activityId) {
        return {
          goodsId: this.goodsInfo.goodsId,
          v: this.goodsInfo.v,
          activityId: this.goodsInfo.activityId,
          activityBuyLimit: this.goodsInfo.activityBuyLimit,
          systemTime: this.goodsInfo.systemTime,
          activityFreeShipping: this.goodsInfo.activityFreeShipping,
          activityLabel: this.goodsInfo.activityLabel,
          activityStatus: this.goodsInfo.activityStatus,
          activityStartTime: this.goodsInfo.activityStartTime,
          activityEndTime: this.goodsInfo.activityEndTime,
          sellPrice: this.goodsInfo.sellPrice,
          originSellPrice: this.goodsInfo.priceMap.originSellPrice,
        };
      }
      return {};
    },
    goodsVip() {
      if (this.goodsInfo.id) {
        return {
          sellPrice: this.goodsInfo.sellPrice,
          memberPrice: this.goodsInfo.priceMap.memberPrice,
          discount: {
            forMember: 1400,
            forFirstOrder: 3000,
          },
          memberRightsUrl: "https://www.baidu.com",
        };
      }
      return {};
    },
    goodsIntro() {
      if (this.goodsInfo.id) {
        return {
          name: this.goodsInfo.name,
          subName: this.goodsInfo.subName,
          sales: this.goodsInfo.sales,
          labels: this.goodsInfo.labels,
          goodsTags: this.goodsInfo.goodsTags,
        };
      }
      return {};
    },
  },

  created() {
    this.id = this.$route.goodsId;
    this.loadGoodsDetail();
    console.log("goods.vue created");
  },
  updated() {
    console.log("goods.vue updated");
  },
  mounted() {
    window.vue = this;
    console.log("goods.vue mounted");
    this.$refs.goods.addEventListener("scroll", this.onContentScroll, true);
  },
  unmounted() {
    console.log("goods.vue unmounted");
    this.$refs.goods.removeEventListener("scroll", this.onContentScroll);
  },
};
</script>
<style lang="less" scoped>
.goods {
  width: 100vw;
  top: 0px;
  bottom: 0px;
  position: absolute;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #fff;

  .indicator {
    z-index: 9;
    position: fixed;
    width: 100vw;
  }

  .goodsInfo {
    word-break: break-all;
    width: 100vw;
  }

  .bottom-option {
    position: fixed;
    bottom: 0rem;
  }
}
.goods::-webkit-scrollbar {
  display: none;
}
</style>
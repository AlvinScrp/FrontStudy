<template>
  <div class="home">
    <tool-bar class="home-toolbar">
      <div slot="center">购物</div>
    </tool-bar>
    <home-goods-indicator
      class="top-goods-indicator"
      ref="topGoodsIndicator"
      v-show="showTopGoodsIndicator"
      :goodsTypeInfos="goodsTypeInfos"
      :currentGoodsType="currentGoodsType"
      @indicator-click="goodsIndicatorItemClick"
    ></home-goods-indicator>
    <scroll-view
      @scroll="onScroll"
      @scrollToEnd="onScrollToEnd"
      @beforeScrollStart="beforeScrollStart"
      class="scroll-view-wrraper"
      ref="scroll"
    >
      <!-- <home-slider :banners="banners"></home-slider> -->
      <home-recommend :recommends="recommends"></home-recommend>
      <home-goods-indicator
        ref="contentGoodsIndicator"
        :goodsTypeInfos="goodsTypeInfos"
        :currentGoodsType="currentGoodsType"
        @indicator-click="goodsIndicatorItemClick"
      ></home-goods-indicator>

      <goods-feed
        :goodsList="goodsOnShow"
        :currentGoodsType="currentGoodsType"
      ></goods-feed>
      <div class="home-goods-indicator-divider"></div>
    </scroll-view>
  </div>
</template>

<script>
// @ is an alias to /src

import { TOP_INSTANCE, POP, NEW, SELL } from "common/const.js";
import * as homeHttp from "network/home.js";
import ToolBar from "components/ToolBar.vue";
import ScrollView from "components/ScrollView.vue";
import HomeSlider from "./child/HomeSlider";
import HomeRecommend from "./child/HomeRecommend";
import HomeGoodsIndicator from "./child/HomeGoodsIndicator";
import GoodsFeed from "./child/GoodsFeed";

export default {
  name: "Home",
  components: {
    ToolBar,
    ScrollView,
    HomeSlider,
    HomeRecommend,
    HomeGoodsIndicator,
    GoodsFeed,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goodsTypeInfos: [
        { type: POP, label: "流行", index: 0 },
        { type: NEW, label: "最新", index: 1 },
        { type: SELL, label: "精选", index: 2 },
      ],
      goods: {
        [POP]: { page: 0, list: [] },
        [NEW]: { page: 0, list: [] },
        [SELL]: { page: 0, list: [] },
      },
      currentGoodsType: POP,
      showTopGoodsIndicator: false,
      tabOffsetTop: 0,
    };
  },
  computed: {
    goodsOnShow() {
      // console.log(
      //   `goodsOnShow:${this.currentGoodsType},${
      //     this.goods[this.currentGoodsType].list.length
      //   }`
      // );
      if (this.goods) {
        if (this.goods[this.currentGoodsType]) {
          return this.goods[this.currentGoodsType].list;
        }
      }
      return [];
    },
  },

  methods: {
    sayHi(message) {
      console.log(message);
    },
    goodsIndicatorItemClick(goodsTypeInfo) {
      // console.log(`goodsIndicatorItemClick: ${goodsTypeInfo.label}`);
      this.currentGoodsType = goodsTypeInfo.type;
      // console.log(this.goods[this.currentGoodsType].page);
      this.loadGoods(true);
    },
    loadHomeData() {
      homeHttp
        .getHomeMultiData()
        .then((res) => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
        .catch((err) => console.log(err));
    },
    loadGoods(refreshDom) {
      let goodsType = this.currentGoodsType;
      let page = this.goods[goodsType].page;
      homeHttp
        .getGoodsData(goodsType, page)
        .then((res) => {
          if (res) {
            this.goods[goodsType].page++;
            this.goods[goodsType].list.push(...res);
          }
          if (refreshDom) {
            setTimeout(() => {
              // this.$refs.scroll.finishedPullUp();
              this.$refs.scroll.refresh();
            }, 100);
          }
          // console.log(`goodslength: ${this.goods[goodsType].list.length}`);
        })
        .catch((err) => console.log(err));
    },

    beforeScrollStart() {
      this.tabOffsetTop = this.$refs.contentGoodsIndicator.$el.offsetTop;
      // console.log(`beforeScrollStart this.tabOffsetTop:${this.tabOffsetTop}`);
    },
    onScroll(position) {
      // console.log(`onScroll ${position.y}, this.tabOffsetTop:${this.tabOffsetTop}`);
      let show = position.y <= -this.tabOffsetTop;
      if (show != this.showTopGoodsIndicator) {
        this.showTopGoodsIndicator = show;
      }
    },
    onScrollToEnd() {
      this.loadGoods(true);
    },
  },
  created() {
    this.loadHomeData();
    this.loadGoods();
    this.showTopGoodsIndicator = false;
    console.log("home.vue created");
  },

  updated() {
    console.log("home.vue updated");
  },
  mounted() {
    console.log("home.vue mounted");
  },
  unmounted() {
    console.log("home.vue unmounted");
  },
};
</script>
<style>
.home {
  width: 100vw;
  top: 0px;
  bottom: 0px;
  position: absolute;
}
.home-toolbar {
  background-color: var(--color-tint);
  z-index: 9;
  color: white;
}
.home-goods-indicator-divider {
  height: 1vh;
  width: 100vw;
  background-color: #f6f6f6;
}
.scroll-view-wrraper {
  position: absolute;
  top: var(--toolbar-height);
  bottom: 0px;
  left: 0;
  right: 0;
}
.top-goods-indicator {
  z-index: 9;
}
</style>

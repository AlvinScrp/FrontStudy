<template>
  <div class="home">
    <!-- <home-header class="home-header"></home-header> -->
    <div class="home-header-space"></div>
    <banner :swiperList="swiperList"></banner>
    <grid :iconList="iconList" @item-click="goDetail"></grid>
    <recommend :hotList="hotList" @item-click="goDetail"></recommend>
    <weekend :weekendList="weekendList"></weekend>
    <div class="home-bottom"></div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import Grid from "./components/Grid.vue";
import Recommend from "./components/Recommend.vue";
import Weekend from "./components/Weekend.vue";
import axios from "axios";
import { mapState } from "vuex";
import actions from "@/shared/actions";
export default {
  name: "Home",
  components: { HomeHeader: Header, Banner, Grid, Recommend, Weekend },
  data() {
    return {
      lastRequestCity: "",
      city: "",
      swiperList: [],
      iconList: [],
      hotList: [],
      weekendList: [],
      scrollPosition: 0,
      token: "",
    };
  },
  mounted() {
    this.loadHomeInfo();

    actions.onGlobalStateChange(state => {
      const { token } = state;
      this.token = token;
      console.log("子应用 onGlobalStateChange token", this.token);
    }, true);
  },
  activated() {
    console.log("home activated");
    if (this.lastRequestCity !== this.globalCityName) {
      this.loadHomeInfo();
    }
  },

  computed: {
    ...mapState(["globalCityName"]),
  },
  methods: {
    async loadHomeInfo() {
      try {
        let cityName = this.globalCityName;
        console.log("loadHomeInfo", this.globalCityName);

        this.lastRequestCity = cityName;
        // const response = await axios.get("/api/index.json?city=" + cityName);
        const response = await axios.get("http://localhost:6600/static/moc/index.json");
        let { city, swiperList, iconList, hotList, weekendList } =
          response.data.data;

        setTimeout(() => {
          this.city = city;
          console.log(this.city);
        }, 200);

        this.swiperList = swiperList;
        this.iconList = iconList;
        this.hotList = hotList;
        this.weekendList = weekendList;
      } catch (error) {
        console.error("error fetch data", error);
      }
    },
    goDetail() {
      console.log("goDetail");
      this.$router.push("/detail");
    },
  },
};
</script>
<style lang='scss' scoped>
.home {
  height: 100%;
  width: 100%;
  background-color: white;

  .home-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  .home-header-space {
    width: 100%;
    height: 40px;
  }
}
.home-bottom {
  height: 50px;
}
</style>
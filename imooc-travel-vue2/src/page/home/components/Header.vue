<template>
  <div class="header">
    <i class="iconfont icon-back"></i>
    <!-- <div class="left"></div> -->
    <div class="search">
      <i class="iconfont icon-search"></i>
      <span class="search-text">请输入城市、景点、游玩主题</span>
    </div>
    <router-link style="text-decoration: none" to="/city">
      <div class="location">
        <span class="location-city">{{ globalCityName }}</span>
        <i class="iconfont icon-arrow-down"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["globalCityName"]),
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
@import "../../../assets/variables.scss";
.header {
  display: flex;
  align-items: center;
  // background-color: #0086f6;
  background-color: $bg-color;
  width: 100%;
  height: 40px;
}
// .left {
//   width: 40px;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;

// }
.icon-back {
  width: 40px;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  color: #fff;
  text-align: center;
  vertical-align: middle;
}
.search {
  padding-left: 6px;
  padding-right: 6px;
  height: 26px;
  display: flex;
  align-items: center;
  flex-grow: 1;
  background-color: #fff;
  border-radius: 4px;
  color: #999;
  font-size: 14px;

  .icon-search {
    font-size: 14px;
  }

  .search-text {
    margin-left: 6px;
  }
}

.location {
  font-size: 14px;
  color: #fff;
  padding-right: 12px;
  padding-left: 6px;
  display: flex;
  align-items: center;

  .location-city {
    font-weight: 700;
  }

  .icon-arrow-down {
    margin-left: 2px;
    font-size: 8px;
    width: 8px;
    height: 8px;
  }
}
</style>
<template>
  <div id="app" class="app" ref="app">
    <div class="router-container">
      <keep-alive exclude="Detail">
        <router-view></router-view>
      </keep-alive>
    </div>
    <app-tab-bar />
  </div>
</template>
<script>
import AppTabBar from "./views/app/AppTabBar.vue";

export default {
  name: "app",
  components: {
    AppTabBar,
  },
 
  created() {
    console.log("app.vue created ");
    // document.documentElement.style.overflow = "hidden";
    this.$router.afterEach((to, from) => {
      console.log(` inapp ${from.path}, ${to.path}`);
      
    });
  },
  updated() {
    console.log(` app.vue updated ${this.$router.currentRoute.path}`);

    if (this.$router.currentRoute.path === "/goods") {
      this.shwoTabBar = false;
    } else {
      this.shwoTabBar = true;
    }
  },
};
</script>

<style lang="less" scoped>
@import "assets/css/base.css";
@import "common/style.css";
.router-container {
  position: absolute;
  top: 0px;
  bottom: var(--tabbar-height);
}
.app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
 
}

</style>
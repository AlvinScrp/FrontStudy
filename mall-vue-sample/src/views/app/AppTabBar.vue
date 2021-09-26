<template>
  <div class="tab-bar" v-show="shwoTabBar">
    <tab-bar-item
      v-for="(tabItem, index) in appTabItems"
      v-bind:key="index"
      v-bind:tabItem="tabItem"
      v-bind:isActive="isActive(index)"
      v-on:click.native="clickItem(index)"
    ></tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from "../../components/TabBarItem.vue";

export default {
  components: { TabBarItem },
  data() {
    return {
      appTabItems: [
        {
          title: "Home",
          icon: "img/tabbar/home.svg",
          iconActive: "img/tabbar/home_active.svg",
        },
        {
          title: "Category",
          icon: "img/tabbar/category.svg",
          iconActive: "img/tabbar/category_active.svg",
        },
        {
          title: "Shopcart",
          icon: "img/tabbar/shopcart.svg",
          iconActive: "img/tabbar/shopcart_active.svg",
        },
        {
          title: "Profile",
          icon: "img/tabbar/profile.svg",
          iconActive: "img/tabbar/profile_active.svg",
        },
      ],
      paths: ["/home", "/category", "/shopcart", "/profile"],
      activeIndex: 0,
      shwoTabBar: true,
    };
  },
  methods: {
    clickItem: function (index) {
      console.log(`clickItem:${index}`);
      if (this.activeIndex != index) {
        this.$router.push(this.paths[index]);
      }
    },
    isActive(index) {
      // console.log(`invoke isActive ${index}`);
      return index == this.activeIndex;
    },
  },
  created() {
    // console.log("created AppTabBar.vue");
    this.$router.afterEach((to, from) => {
      // console.log(`inappbar ${from.path}, ${to.path}`);
      let index = this.paths.findIndex((path) => path === to.path);
      if (index >= 0) {
        this.activeIndex = index;
      }
      let show = index >= 0;
      if (show != this.shwoTabBar) {
        this.shwoTabBar = show;
      }
      // console.log(`inappbar  shwoTabBar:${this.shwoTabBar}`);
    });
  },
  updated() {
    // console.log("update  AppTabBar.vue");
  },
  // computed: {
  //   isActive(index) {
  //     return index == this.activeIndex;
  //   },
  // },
};
</script>
<style scoped>
.tab-bar {
  background-color: #f6f6f6;
  height: var(--tabbar-height);
  border-top: 1px solid #eee;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  text-align: center;
}
</style>
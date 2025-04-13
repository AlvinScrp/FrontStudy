<template>
  <div id="app">
    <div class="app-container">
      <div class="debug-info" v-if="isDebug">
        <p>当前环境: {{ env }}</p>
        <p>当前路由: {{ currentRoute }}</p>
        <p>路由组件: {{ routeComponents }}</p>
        <button @click="emitTest">emitTest</button>
    </div>
    <keep-alive>
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/city">City</router-link>
      <router-link to="/detail">Detail</router-link> -->
      <router-view v-if="isRouterReady" />
      <!-- <div v-else class="loading">路由加载中...</div> -->
    </keep-alive>
    </div>
  </div>
</template>

<script>
import Home from './page/home/Home.vue';

export default {
  name: 'App',
  components: {
    Home
  },
  data() {
    return {
      isDebug: true, // 设置为true显示调试信息
      isRouterReady: false,
      env: window.__POWERED_BY_QIANKUN__ ? 'qiankun' : '独立运行',
      currentRoute: '',
      routeComponents: []
    }
  },
  watch: {
    '$route': {
      handler(to) {
        this.currentRoute = to.path;
        this.routeComponents = to.matched.map(m => m.name || m.path);
        console.log('路由变化:', to);
        if(window.$wujie){
          window.$wujie?.bus.$emit("sub-route-change", "vue2", this.$route.path);
        }
      },
      immediate: true
    }
  },
  mounted() {
    // 检查运行环境
    // const isWujie = window.__POWERED_BY_WUJIE__;
    const isQiankun = window.__POWERED_BY_QIANKUN__;
    console.log('App mounted:', { /*isWujie,*/ isQiankun });

    console.log('App.vue mounted, 当前环境:', this.env);

    // 检查路由是否已初始化
    this.$nextTick(() => {
      this.isRouterReady = true;
      console.log('路由已初始化');
    });
  },
  methods:{
    emitTest(){
      if(window._QIANKUN_YD){
        window._QIANKUN_YD.event.emit('test', 'hello22222222');
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* 确保子应用内容可见 */
  min-height: 100px;
  /* border: 1px solid #eee; */
  /* padding: 10px; */
}

.debug-info {
  width: 100%;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  padding: 10px;
  margin-top: 40px;
  margin-bottom: 10px;
  text-align: left;
  font-size: 12px;
}

.loading {
  padding: 20px;
  color: #666;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* 添加样式隔离前缀 */
:root {
  --app-prefix: v2c9f8;
}

/* 使用CSS变量实现样式隔离 */
#app {
  --primary-color: #42b983;
  --text-color: #2c3e50;
}

/* 确保所有样式都在app作用域内 */
#app * {
  box-sizing: border-box;
}
</style>

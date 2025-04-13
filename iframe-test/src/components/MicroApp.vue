<template>
  <div class="micro-app">
    <h2>微前端示例</h2>

    <!-- 添加切换按钮 -->
    <div class="app-switcher">
      <button
        v-for="app in apps"
        :key="app.name"
        @click="switchApp(app)"
        :class="{ active: currentApp === app.name }"
      >
        {{ app.title }}
      </button>
    </div>

    <!-- 子应用容器 -->
    <div class="app-container" ref="container"></div>
  </div>
</template>

<script>
  import { startApp, destroyApp } from 'wujie'

  export default {
    name: 'MicroApp',
    data() {
      return {
        currentApp: null,
        apps: [
          {
            name: 'app1',
            title: '应用1',
            url: 'http://127.0.0.1:5500/public/subapp/index.html',
          },
          {
            name: 'app2',
            title: '应用2',
            url: 'http://localhost:8080',
          },
        ],
        app: null,
      }
    },
    mounted() {
      // 默认加载第一个应用
      if (this.apps.length > 0) {
        this.switchApp(this.apps[0])
      }
    },
    beforeDestroy() {
      if (this.app) {
        destroyApp(this.app)
      }
    },
    methods: {
      switchApp(appConfig) {
        // 如果有正在运行的应用，先销毁它
        if (this.app) {
          destroyApp(this.app)
        }

        // 启动新的应用
        this.app = startApp({
          name: appConfig.name,
          url: appConfig.url,
          el: this.$refs.container,
          props: {
            data: {
              message: '来自主应用的数据',
            },
          },
        })

        this.currentApp = appConfig.name
      },
    },
  }
</script>

<style scoped>
  .micro-app {
    /* padding: 20px; */
  }

  .app-switcher {
    margin-bottom: 20px;
  }

  .app-switcher button {
    margin-right: 10px;
    padding: 8px 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: white;
    cursor: pointer;
  }

  .app-switcher button.active {
    background: #42b983;
    color: white;
    border-color: #42b983;
  }

  .app-container {
    margin-top: 20px;
    border: 0;
    padding: 0;
    /* border: 1px solid #eee;
    border-radius: 4px; */
    overflow: scroll;
    /* height: 500px; */
  }
</style>

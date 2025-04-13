<template>
  <div id="app">
    <!-- 左侧菜单 -->
    <nav class="side-menu">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="{ active: currentTab === tab }"
        @click="switchTab(tab)"
      >
        {{ tab }}
      </button>
    </nav>
    <!-- 右侧内容区 -->
    <div class="content-area">
      <!-- <h1>以下为子应用内容：</h1> -->
      <div id="yd-container" v-show="currentTab === 'travel'"></div>
      <div id="xtx-container" v-show="currentTab === 'xtx'"></div>
      <router-view v-show="currentTab === 'home'"></router-view>
    </div>
  </div>
</template>

<script>
import actions from '@/shared/actions';
export default {
  name: 'App',
  data() {
    return {
      tabs: ['home', 'travel', 'xtx'],
      currentTab: '',
    };
  },
  mounted() {
    console.log('App mounted');
    window._QIANKUN_YD.event.on('test', (a, b) => {
      console.log('test', a, b);
    });
    this.$nextTick(() => {
      this.switchTab('home');
    });
    actions.onGlobalStateChange((state, prevState) => {
      console.log('主应用观察者：token prev:', prevState.token, 'now:', state.token);
    });
  },
  methods: {
    switchTab(tab) {
      this.currentTab = tab;
      // 根据当前 tab 更新路由
      const to = `/${tab}`;
      if (this.$route.path !== to) {
        this.$router.push(to);
      }
    },
  },
};
</script>

<style>
/* 设置根容器为 flex 布局 */
#app {
  display: flex;
  min-height: 100vh;
}

/* 左侧菜单样式 */
.side-menu {
  width: 100px;
  background-color: #f8f9fa;
  padding: 20px 0;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
}

/* 菜单按钮样式 */
.side-menu button {
  font-weight: bold;
  color: #2c3e50;
  background: none;
  border: none;
  width: 100px;
  padding: 15px 20px;
  cursor: pointer;
  font-size: 16px;
  text-align: left;
  transition: all 0.3s ease;
}

.side-menu button:hover {
  background-color: #f1f1f1;
}

.side-menu button.active {
  color: #42b983;
  background-color: #e8f5e9;
  border-left: 4px solid #42b983;
}

/* 右侧内容区样式 */
.content-area {
  flex: 1;
  padding: 20px;
}

/* 移除之前的按钮间距 */
nav button + button {
  margin-left: 0;
  margin-top: 5px;
}
</style>

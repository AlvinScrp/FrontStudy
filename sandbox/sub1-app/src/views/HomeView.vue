<template>
  <div class="home">
    <h1>This is an  sub1  home page  222</h1>
    <h2>{{ value }}</h2>
    <button @click="handleClick">set window flag</button>
    <h2 >这里获取的window是函数作用域中参数</h2>

    <p class="tip">import-html-entry将原先的js，运行在新构建的函数中(function(window, self, globalThis){;${scriptText}\n${sourceUrl}}).bind(window.proxy)(window.proxy, window.proxy, window.proxy);</p>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: null
    }
  },
  mounted() {

    console.log(window.__Alvin_SINGLE_SPA__)
    setTimeout(() => {
      console.log('window', window)
    this.value = window.aaaFlag
    }, 1500);

  },
  methods:{
    handleClick(){
      window.aaaFlag = '3333333333333'
      this.value = window.aaaFlag
    }
  }
}
</script>
<style lang='scss' scoped>
  .home {
    background-color: yellowgreen;
  }
  .tip{
    font-weight: bold;
    color: pink;
  }
</style>

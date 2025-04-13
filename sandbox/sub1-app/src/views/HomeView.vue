<template>
  <div class="home">
    <h1>This is an  sub1  home page</h1>
    <h2>{{ value }}</h2>
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
    console.log(window.__SINGLE_SPA__)
    this.value = window.__SINGLE_SPA__
  }
}
</script>

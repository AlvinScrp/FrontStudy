<template>
  <div id="app">
    <nav>
      <router-link to="/sub1">Sub1</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </nav>
    <div style="display: flex;justify-content: center;align-items: center;">
      <button @click="handleClick">get window flag</button>
      <h2>{{ windowFlag }}</h2>
    </div>

    <router-view/>
    <div class="sub-container" ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowFlag: window.aaaFlag
    }
  },
  methods:{
    handleClick(){
      this.windowFlag = window.aaaFlag
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
</style>

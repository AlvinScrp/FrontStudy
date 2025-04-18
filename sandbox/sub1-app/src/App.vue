<template>
  <div class="app" id="app">
    <nav>
      <router-link to="/">Sub1 Home</router-link> |
      <router-link to="/about">Sub1 About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: gray;
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

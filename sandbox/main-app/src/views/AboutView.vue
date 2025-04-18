<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
var abc ='kkkkk'
const abc2 = 'kkkkk2'
export default {
  name: 'AboutView',
  mounted() {
    console.log('AboutView mounted')
    console.log('abc',window.abc)
    console.log('abc2',window.abc2)
  }
}
</script>

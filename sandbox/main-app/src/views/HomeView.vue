<template>
  <div class="home">
    main Home
    <div id="homeSub"></div>
  </div>
</template>

<script>
import importHTML from 'import-html-entry';


export default {
  name: 'HomeView',
  mounted() {
    console.log('HomeView mounted')
    // importHTML('http://localhost:8080/index.html').then(module => {
    //   console.log(module)
    //   console.log('template',module.template)
    //   console.log('window',window)
    //   module.execScripts(window).then(res => {
    //     console.log('execScripts',res)
    //     const { mount ,unmount,bootstrap ,update} = res
    //     console.log('execScripts',mount)
    //     mount({domElement:document.getElementById('homeSub')})
    //     // res.mount(document.body)
    //   })
    //   module.getExternalScripts().then(res => {
    //     console.log('getExternalScripts',res)
    //   })
    //   module.getExternalStyleSheets().then(res => {
    //     console.log('getExternalStyleSheets',res)
    //   })
    // })
  }
}
</script>

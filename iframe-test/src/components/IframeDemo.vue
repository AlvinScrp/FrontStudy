<template>
  <div class="iframe-demo">
    <h2>Iframe 示例</h2>

    <div class="iframe-container">
      <h3>基本 iframe 示例</h3>
      <iframe
        src="/iframe-content.html"
        width="100%"
        frameborder="0"
        title="Basic iframe example"
      ></iframe>
    </div>

    <div class="iframe-container">
      <h3>带 sandbox 属性的 iframe</h3>
      <iframe
        src="/iframe-content.html"
        width="100%"
        sandbox="allow-scripts allow-same-origin"
        title="Sandboxed iframe example"
      ></iframe>
    </div>

    <div class="iframe-container">
      <h3>响应式 iframe</h3>
      <div class="responsive-iframe">
        <iframe
          src="/iframe-content.html"
          width="100%"
          frameborder="0"
          title="Responsive iframe example"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IframeDemo',
  }
</script>

<style scoped>
  .iframe-demo {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .iframe-container {
    margin-bottom: 30px;
  }

  .responsive-iframe {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 宽高比 */
    height: 0;
    overflow: hidden;
  }

  .responsive-iframe iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* height: 100%; */
  }

  h2 {
    color: #2c3e50;
    margin-bottom: 30px;
  }

  h3 {
    color: #42b983;
    margin-bottom: 15px;
  }
</style>

<template>
  <section class="resource-banner">
    <div class="split"></div>
    <div class="image-container">
      <img class="image" :src="imageUrl" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default:
        "https://staticimg.ngmm365.com/7e2bca937f5b06e6c6d6a5146de6d095-w1020_h180.png",
    },
    link: {
      type: String,
      default: "https://www.baidu.com",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.split {
  background-color: #f6f6f6;
  width: 100%;
  height: 0.15rem;
}
.image-container {
  overflow: hidden;
  background-color: white;
  padding: 0.1rem;

  .image {
   width: 100%;
   
  }
}
</style>
<template>
  <div>
    <div class="feature-title">线路特色</div>
    <img
      class="feature-image"
      v-for="(image, index) in features"
      :src="image"
      :key="index"
    />
  </div>
</template>

<script>
export default {
  props: {
    features: Array,
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.feature-title {
  background-color: white;
  line-height: 60px;
  vertical-align: middle;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
  color: #212121;
}
.feature-image {
  width: 100%;
}
</style>
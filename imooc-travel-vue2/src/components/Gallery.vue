<template>
  <div>
    {{ position }}
    <img class="image" v-for="image in images" :key="image" :src="image" />
  </div>
</template>

<script>
export default {
  components: {},
  props: ["imageUrls", "index"],
  data() {
    return {};
  },
  computed: {
    images() {
      return this.imageUrls;
    },
    position() {
      return this.index;
    },
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>
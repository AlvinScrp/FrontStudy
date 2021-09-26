<template>
  <indicator
    :items="items"
    @indicator-click="onItemClick"
    :currentIndex="currentIndex"
    :backgroundColor="backgroundColor"
  ></indicator>
</template>

<script>
import Indicator from "components/Indicator.vue";
export default {
  props: {},
  components: { Indicator },

  data() {
    return {
      items: [
        { label: "商品", index: 0 },
        { label: "评价", index: 1 },
        { label: "详情", index: 2 },
        { label: "推荐", index: 3 },
      ],
      currentIndex: 0,
      backgroundColor: "white",
    };
  },

  methods: {
    onItemClick(index) {
      this.$emit("indicator-click", index);
    },
  },
};
</script>
<style lang="less"  scoped>
</style>
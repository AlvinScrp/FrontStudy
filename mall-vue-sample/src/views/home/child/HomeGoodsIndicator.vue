<template>
  <indicator
    :items="itemsOnShow()"
    @indicator-click="onItemClick"
    :currentIndex="currentIndex()"
  ></indicator>
</template>

<script>
import Indicator from "components/Indicator.vue";
export default {
  props: {
    goodsTypeInfos: {
      type: Array,
    },
    currentGoodsType: {
      type: String,
      required: true,
      default: "pop",
    },
  },
  components: { Indicator },

  data() {
    return {};
  },

  methods: {
    currentIndex() {
      return  this.goodsTypeInfos.findIndex(
        (info) => info.type === this.currentGoodsType
      );
    },

    itemsOnShow() {
      let items = this.goodsTypeInfos.map((info) => ({ label: info.label }));
      return items;
    },
    onItemClick(index) {
      this.$emit("indicator-click", this.goodsTypeInfos[index]);
    },
  },
};
</script>
<style lang="less"  scoped>
</style>
<template>
  <div>
    <div class="goods-detail-area-top-split"></div>
    <div class="goods-detail-area-rich-text" v-html="detailHtml"></div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  props: {
    detailHtml: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      id: 111,
    };
  },
  methods: {},
  created() {
    console.log(`detail area created :${this.detailHtml}`);
  },
  // updated() {
  //   console.log(`detail area update ${this.detailHtml}`);
  // },
};
</script>
<style lang="less" >
.goods-detail-area-top-split {
  background-color: #f6f6f6;
  width: 100%;
  height: 0.15rem;
}
.goods-detail-area-rich-text {
  width: 100%;

  p {
    width: 100%;
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    img {
      width: 100%;
      height: auto;
      margin: 0;
      padding: 0;
      vertical-align: middle;
    }
  }
}
</style>
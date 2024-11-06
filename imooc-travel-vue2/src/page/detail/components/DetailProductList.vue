
<template>
  <div class="product-list-wrapper">
    <div class="count">
      <span>{{ countNum }}</span
      ><span>个套餐</span>
    </div>
    <div class="product-list">
      <product-item
        :productItemObj="item"
        :index="index"
        :currentProductId="currentProductId"
        v-for="(item, index) in multyProducts"
        :key="item.enSubId"
      >
      </product-item>
    </div>
    <div class="product-more">
      <span>更多套餐</span>
      <img
        src="https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/09/6d48c1c7-ce9d-49df-9ee5-c576fc8d45ed__0KB____size48x48.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  props: {
    multyProducts: Array,
    currentProductId: String,
  },
  components: { ProductItem },
  data() {
    return {};
  },
  computed: {
    countNum() {
      return this.multyProducts ? `${this.multyProducts.length}` : "";
    },
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.product-list-wrapper {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: white;
  display: flex;
  width: 100vw;
  flex-direction: row;
  position: relative;
  .count {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 2px;
    padding-right: 2px;
    font-size: 8px;
    height: 140px;
    text-align: center;
    background: #f0f9fa;
    border-radius: 0 4px 4px 0;
    color: #00bcd4;
    line-height: 1.4;
  }
  .product-list {
    margin-left: 8px;
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .product-more {
    height: 140px;
    font-size: 13px;
    display: flex;
    box-shadow: -10px 0 6px -4px rgba(0, 0, 0, 0.05);
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #00bcd4;
    font-weight: 500;
    z-index: 2;
    width: 80px;
    span {
      display: inline-block;
      width: 12px;
      line-height: 1.3;
    }
    img {
      width: 12px;
      height: 12px;
      padding: 1px;
      border-radius: 50%;
      background-color: #00bcd4;
    }
  }
}
</style>
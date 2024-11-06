<template>
  <div class="banner">
    <img class="image" :src="imageUrl" alt="" />
    <div class="bottom-info">
      <span>{{ productIdDesc }}</span>
      <div class="space"></div>
      <span>
        {{ imageIndicatorDesc }}
      </span>
      <img class="icon-image" :src="iconImage" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  components: {},
  data() {
    return {
      iconImage:
        "https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/08/d655cbf8-86b2-4143-a3ca-5f6ef0f799da__0KB____size48x48.png",
    };
  },
  computed: {
    imageUrl() {
      return this.product.imageInfos?.[0].bigUrl ?? "";
    },

    productIdDesc() {
      return `产品编号 ${this.product.productId}`;
    },
    imageIndicatorDesc() {
      if (this.product.imageInfos) {
        const imageIndex = 0;
        const imageCount = this.product.imageInfos.length;
        return `${imageIndex + 1}/${imageCount}`;
      }
      return "";
    },
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.banner {
  position: relative;

  .image {
    height: 250px;
  }
  .bottom-info {
    height: 30px;
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5) 85%);
    position: absolute;
    width: 100vw;
    padding-left: 3%;
    padding-right: 3%;
    bottom: 16px;
    font-size: 12px;
    color: white;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    .space {
      flex-grow: 1;
    }
    .icon-image {
      margin-left: 3px;
      width: 12px;
      height: 12px;
    }
  }
}
</style>
<template>
  <div class="vip">
    <span class="vip-pirce">
      <span class="price-label"
        ><span class="price-label-inner">黑卡价</span></span
      >
      <span class="price-value">{{ formatPrice(vip.memberPrice, true) }}</span>
    </span>

    <div class="vip-discount-info">
      <span class="discount-label">开卡本单预计可省</span>
      <span class="discount-value">{{ discountValue }}</span>
      <i class="iconfont mall-info"></i>
    </div>
    <div class="vip-empty"></div>
    <div class="vip-member-rights">
      <span class="member-rights-label">开卡福利</span>
      <i class="iconfont mall-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vip: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  computed: {
    discountValue() {
      if (this.vip.discount) {
        let value =
          this.vip.discount.forMember + this.vip.discount.forFirstOrder;
        return this.formatPrice(value, true);
      }
      return "";
    },
  },

  methods: {
    formatPrice(price, withDollar = false) {
      return (withDollar ? "¥" : "") + `${price / 100.0}`;
    },
  },
};
</script>
<style lang="less" scoped>
.vip {
  box-sizing: border-box;
  margin: 0.14rem 0.1rem 0rem 0.1rem;
  height: 0.36rem;
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 0.08rem 0 0.12rem;
  border-radius: 0.1rem;
  background-image: linear-gradient(
    149deg,
    rgba(255, 231, 187, 0.7),
    rgba(253, 240, 205, 0.7)
  );

  .vip-pirce {
    .price-label {
      background: linear-gradient(78deg, #5e5447, #302a22);
      border-radius: 0.09rem 0 0 0.09rem;
      font-family: "PingFangSC-Regular";
      padding: 0 0.03rem 0 0.05rem;
      line-height: 0.18rem;
      font-size: 0.1rem;
      height: 0.18rem;
      box-sizing: border-box;
      color: #fbe19d;
      display: inline-block;
      vertical-align: top;

      .price-label-inner {
        font-size: 0.12rem;
        transform: scale(0.83);
        transform-origin: 50% 50%;
        display: inline-block;
      }
    }
    .price-value {
      vertical-align: top;
      color: #7b591c;
      font-size: 0.12rem;
      background: linear-gradient(90deg, #ffe8a4, #e8bf79);
      font-weight: 500;
      display: inline-block;
      height: 0.18rem;
      border-radius: 0 0.09rem 0.09rem 0;
      line-height: 0.18rem;
      padding: 0 0.07rem 0 0.03rem;
      box-sizing: border-box;
    }
  }

  .vip-discount-info {
    margin-left: 0.1rem;
    position: relative;
    display: flex;
    color: #7b591c;
    font-weight: 400;
    height: 0.18rem;
    font-size: 0.12rem;
    align-items: center;

    .discount-value {
      margin-left: 0.02rem;
      font-size: 0.14rem;
      color: #ff5058;
      font-weight: 500;
    }
    i {
      margin-left: 0.02rem;
      color: grey;
    }
  }

  .vip-empty {
    flex-grow: 1;
  }

  .vip-member-rights {
    display: flex;
    color: #7b591c;
    font-weight: 400;
    font-size: 0.12rem;
    align-items: center;
  }
}
</style>
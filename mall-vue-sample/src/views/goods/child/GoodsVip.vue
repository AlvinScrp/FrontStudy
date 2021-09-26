<template>
  <div class="vip">
    <span class="vip-pirce" ref="vipPrice">
      <span class="price-label">黑卡价</span>
      <span class="price-value">{{ formatPrice(vip.memberPrice, true) }}</span>
    </span>

    <div class="vip-discount-info">
      <span class="discount-label">开卡本单预计可省</span>
      <span class="discount-value">{{ discountValue }}</span>
      <i class="icon-info"></i>
    </div>
    <div class="vip-empty"></div>
    <div class="vip-member-rights">
      <span class="member-rights-label">开卡福利</span>
      <i class="icon-circle-right"></i>
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
    return {
     
    };
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
    // memberPriceStr() {
    //   if (this.vip) {
    //     return this.vip.memberPrice;
    //   }
    //   return "";
    // },
  },

  methods: {
    formatPrice(price, withDollar = false) {
      return (withDollar ? "¥" : "") + `${price / 100.0}`;
    },
  },
  // mounted() {
  //   const boundClient = this.$refs.vipPrice.getBoundingClientRect();
  //   this.transform = `scale(${this.scale})`;
  //   let width = boundClient.width * this.scale;
  //   let height = boundClient.height * this.scale;
  //   console.log(`width:${width}`);
  //   this.styleObj = { width: width + "px", height: height + "px" };
  // },
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
    width: 1rem;
    display: inline-block;
    transform: scale(0.5);
    transform-origin: 0 50%;
    white-space: nowrap;
    // zoom:0.5;
    box-sizing: border-box;

    .price-label {
      background: linear-gradient(78deg, #5e5447, #302a22);
      border-radius: 0.18rem 0 0 0.18rem;
      font-family: "PingFangSC-Regular";
      padding: 0 0.08rem 0 0.12rem;
      padding-right: 0.1rem;
      line-height: 0.36rem;
      font-size: 0.2rem;
      height: 0.36rem;
      box-sizing: border-box;
      color: #fbe19d;
      display: inline-block;
    }
    .price-value {
      color: #7b591c;
      font-size: 0.24rem;
      background: linear-gradient(90deg, #ffe8a4, #e8bf79);
      font-weight: 500;
      display: inline-block;
      height: 0.36rem;
      border-radius: 0 0.18rem 0.18rem 0;
      line-height: 0.36rem;
      padding: 0 0.14rem 0 0.04rem;
      box-sizing: border-box;
      vertical-align: top;
    }
  }

  .vip-discount-info {
    position: relative;
    display: inline-block;
    color: #7b591c;
    font-weight: 400;
    height: 0.18rem;
    font-size: 0.12rem;

    .discount-label {
      vertical-align: middle;
      line-height: 0.18rem;
    }

    .discount-value {
      vertical-align: middle;
      margin-left: 0.02rem;
      font-size: 0.14rem;
      color: #ff5058;
      line-height: 0.18rem;
      font-weight: 500;
    }
    i {
      vertical-align: middle;
      margin-left: 0.02rem;
      color: grey;
      line-height: 0.18rem;
    }
  }

  .vip-empty {
    flex-grow: 1;
  }

  .vip-member-rights {
    display: inline-block;
    color: #7b591c;
    font-weight: 400;
    font-size: 0.12rem;

    .member-rights-label {
      line-height: 0.18rem;
      vertical-align: middle;
    }
    i {
      line-height: 0.18rem;
      margin-left: 0.02rem;
      vertical-align: middle;
    }
  }
}
</style>
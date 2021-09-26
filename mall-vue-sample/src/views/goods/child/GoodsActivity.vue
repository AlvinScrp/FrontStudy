<template>
  <div class="activity">
    <div class="left">
      <p>{{ activity.activityLabel }}</p>
      <p class="price-container">
        <span class="dollar">¥</span>
        <span class="sellPrice"
          >{{ formatPrice(activity.sellPrice) }}&nbsp;
        </span>
        <span class="originSellPrice"
          >{{ formatPrice(activity.originSellPrice, true) }}
        </span>
      </p>
    </div>
    <div class="right">
      <p class="count-down-title">距结束</p>
      <count-down :endTime="activity.activityEndTime"></count-down>
    </div>
  </div>
</template>

<script>
import CountDown from "components/CountDown.vue";
export default {
  components: { CountDown },
  props: {
    activity: {
      type: Object,
    },
  },
  data() {
    return {};
  },

  methods: {
    formatPrice(price, withDollar = false) {
      return (withDollar ? "¥" : "") + `${price / 100.0}`;
    },
  },
};
</script>
<style lang="less" scoped>
.activity {
  width: 100%;
  height: 0.5rem;
  box-sizing: border-box;
  background: linear-gradient(90deg, #f44, #f26);
  border-radius: 0.1rem;
  display: flex;
  position: relative;
  justify-content: space-between;
  padding-left: 0.15rem;
  padding-right: 0.15rem;
  padding-top: 0.07rem;
  color: white;
  font-size: 0.12rem;

  .price-container {
    position: relative;
    height: 0.25rem;
    .dollar {
      font-size: 0.12rem;
    }
    .sellPrice {
      font-size: 0.24rem;
      font-weight: 500;
    }
    .originSellPrice {
      height: 0.12rem;
      position: absolute;
      bottom: 0.02rem;
      display: inline-block;
      font-size: 0.12rem;
      color: #fff;
      opacity: 0.8;
      text-decoration: line-through;
    }
  }

  .count-down-title {
    text-align: right;
  }
}
</style>
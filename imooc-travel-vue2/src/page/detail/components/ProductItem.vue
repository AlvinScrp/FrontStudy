<template>
  <div
    class="product-item"
    :class="{
      'product-item-select': showSelect,
      'product-item-gradient': showGradient,
    }"
  >
    <div class="price-wrapper">
      <span class="unit">¥</span>
      <span class="price">{{ productItemObj.minPrice }}</span>
      <span class="start">起</span>
    </div>
    <div class="title-wrapper">
      <img class="title-tag" :src="levelIcon" alt="" />
      <span class="title-text">{{ nameDesc }}</span>
    </div>
    <div class="summary-item" v-for="(item, index) in summarys" :key="index">
      <span
        class="point"
        :class="{
          'point-select': showSelect,
        }"
      ></span>
      <span class="text"> {{ item }}</span>
    </div>
    <div v-if="showSelect" class="checkbox">
      <img
        src="https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/09/bbcf2a49-9b57-4584-8e37-72323256adb2__0KB____size48x23.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productItemObj: Object,
    currentProductId: String,
    index: Number,
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    showSelect() {
      return this.productItemObj && this.currentProductId
        ? this.productItemObj.enSubId === this.currentProductId
        : false;
    },
    showGradient() {
      return this.index === 0 && !this.showSelect;
    },
    levelIcon() {
      const level = this.productItemObj.productLeve;
      return level === 2
        ? "https://s.qunarzz.com/vacation_list_rn/list/star_2_v3.png"
        : "https://s.qunarzz.com/vacation_list_rn/list/star_3_v3.png";
    },
    nameDesc() {
      let result = "";
      const group = this.productItemObj.group;
      if (group && group.length > 0) {
        result += group;
        result += "·";
      }
      result += this.productItemObj.subTitle ?? "";
      return result;
    },
    summarys() {
      const array = [];
      const teamMaxPerson = this.productItemObj.teamMaxPerson;
      if (teamMaxPerson) {
        array.push("最多53人团");
      }
      const { hotelStandard, visitSpots } = this.productItemObj.summaryInfo;
      if (hotelStandard) {
        array.push(hotelStandard);
      }
      if (visitSpots) {
        array.push(visitSpots);
      }
      return array;
    },
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.product-item {
  padding: 6px;
  background-color: white;
  margin-right: 8px;
  position: relative;
  height: 50px;
  width: 130px;
  height: 140px;
  border: 0.5px solid hsla(189, 9%, 69%, 0.8);
  border-radius: 7px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: start;

  &-gradient {
    background-image: linear-gradient(180deg, #f1fdff, #fff 66%);
    border-radius: 7px;
    color: #2d4f56;
  }

  &-select {
    border: 0.5px solid #09d6eb;
    background: rgba(103, 234, 255, 0.06);
  }

  .price-wrapper {
    color: #ff8300;
    font-weight: 600;

    .unit {
      font-size: 12px;
    }
    .price {
      font-size: 16px;
    }
    .start {
      font-size: 12px;
    }
  }
  .title-wrapper {
    text-align: left;
    margin-top: 3px;

    .title-tag {
      height: 12px;
      margin-top: 2px;
      margin-right: 2px;
      display: inline-block;
      width: auto;
      object-fit: cover;
    }
    .title-text {
      line-height: 1.1;
      color: #212121;
      font-size: 13px;
      font-weight: 600;
    }
  }
  .summary-item {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    width: 100%;
    align-items: center;
    .point {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #212121;
      &-select {
        background-color: #09d6eb;
      }
    }
    .text {
      font-size: 12px;
      margin-left: 2px;
      flex-grow: 0;
      white-space: nowrap; /* 禁止换行 */
      overflow: hidden; /* 隐藏溢出内容 */
      text-overflow: ellipsis; /* 显示省略号 */
    }
  }
  .checkbox {
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 8px 0px 5px 0px;
    background-color: #09d6eb;
    height: 13px;
    padding: 2px 1px;
    img {
      width: 16px;
      height: 8px;
    }
  }
}
</style>
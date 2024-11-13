<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <div
      v-for="item in hotList"
      :key="item.id"
      @click="$emit('item-click')"
      class="hot-item"
    >
      <img class="hot-image" :src="item.imgUrl" alt="" />
      <div class="hot-right">
        <div class="hot-title">{{ item.title }}</div>
        <div class="hot-summury">{{ item.summury }}</div>
        <div class="hot-price">
          <div class="price">{{ item.price }}</div>
          <div class="price-end">起</div>
        </div>
      </div>
    </div>
    <div class="recommend-look-more">查看更多</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["hotList"],
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
@import "../../../assets/mixins.scss";
.recommend-title {
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  line-height: 40px;
  padding-left: 12px;
  text-align: start;
  background-color: #f5f5f5;
}
.hot-item {
  text-align: start;
  padding: 12px;
  display: flex;

  .hot-image {
    width: 72px;
    height: 72px;
  }
  .hot-right {
    margin-top: 2px;
    margin-left: 8px;

    .hot-title {
      font-size: 15px;
      color: black;
      font-weight: 500;
    }
    .hot-summury {
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      margin-top: 4px;
      color: #999;
      font-size: 12px;
      line-height: 14px;
      display: -webkit-box;
      line-clamp: 2;
      -webkit-line-clamp: 2; /* 限制为两行 */
      -webkit-box-orient: vertical;
    }
    .hot-price {
      display: flex;
      flex-direction: row;
      margin-top: 8px;
      align-items: baseline;
      .price {
        font-size: 16px;
        color: #ff4d18;
      }
      .price-end {
        margin-left: 2px;
        font-size: 12px;
        color: #999;
      }
    }
  }
}
.recommend-look-more {
  margin: 6px 24px 12px 24px;
  border: 1px solid #3498db;
  color: #3498db;
  border-radius: 6px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  vertical-align: middle;
}
</style>
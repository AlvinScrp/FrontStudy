<template>
  <div class="intro">
    <div class="name-container">
      <span class="name">{{ intro.name }}</span>
      <span class="sales">{{ fromatSales(intro.sales) }}</span>
    </div>
    <p class="sub-name">{{ intro.subName }}</p>
    <div class="tags">
      <span v-for="(tag, index) in intro.tags" :key="index">
        {{ tag.tagName }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    intro: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    fromatSales(value) {
      let valueStr =
        value > 10000 ? `${(value / 10000.0).toFixed(1)}万` : `${value}`;
      return `已售${valueStr}`;
    },
  },
};
</script>
<style lang="less" scoped>
.intro {
  margin-top: 0.12rem;
  margin-left: 0.1rem;

  .name-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    .name {
      display: inline-block;
      flex-flow: 1;

      height: 0.22rem;
      line-height: 0.22rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: #222;
      font-size: 0.17rem;
      font-weight: 700;
      font-family: "PingFangSC-Regular";
    }
    .sales {
      display: inline-block;
      margin-left: 0.1rem;
      line-height: 0.22rem;
      height: 0.22rem;
      border-radius: 0.1rem 0 0 0.1rem;
      white-space: nowrap;
      color: #ee8e93;
      font-size: 0.12rem;
      width: auto;
      vertical-align: middle;
      padding: 0 0.1rem 0 0.06rem;
      // background-color: green;
      background-color: rgba(255, 79, 88, 0.06);
    }
  }
  .sub-name {
    margin-top: 0.06rem;
    margin-right: 0.1rem;
    font-family: "PingFangSC-Regular";
    color: #666;
    font-size: 0.14rem;
  }
}

.tags {
  display: flex;
}
</style>
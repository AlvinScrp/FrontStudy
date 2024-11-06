<template>
  <div>
    <div class="icon-root">
      <div class="icon-wrraper" :style="wrraperStyleObj">
        <div class="icon" v-for="icon in iconList" :key="icon.title">
          <img class="icon-img" :src="icon.imgUrl" alt="" />
          <span class="icon-title">{{ icon.title }}</span>
        </div>
      </div>
    </div>
    <div class="tips">
      <div v-for="tip in tips" class="tip" :key="tip.text">
        <img class="tip-image" :src="tip.imageUrl" alt="" />
        <span class="tip-text">{{ tip.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["iconList"],
  data() {
    return {
      // icons: this.iconList,
      tips: [
        {
          text: "定位失败",
          imageUrl:
            "https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/06/6a9098d1-dd82-4f4c-ad8a-39c1dac3032f__0KB____size48x48.png",
        },
        {
          text: "5折泡温泉",
          imageUrl:
            "https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/06/d210261a-ca95-46d9-a506-9ef6298e1c3b__0KB____size48x48.png",
        },
      ],
    };
  },
  computed: {
    wrraperStyleObj: function () {
      let icons = this.iconList;
      let length = icons ? icons.length : 0;
      let width = length <= 8 ? "100%" : `${Math.ceil(length / 2) * 93}px`;
      return { width: width };
    },
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
@import "../../../assets/mixins.scss";

.icon-root {
  padding: 6px 1px;
  width: 100%;
  overflow-x: auto; /* 启用横向滚动 */
  white-space: nowrap; /* 防止项目换行 */
  scrollbar-width: none; /* 对 Firefox 隐藏滚动条 */
}
.icon-wrraper {
  display: flex;
  flex-direction: row;
  height: auto;
  flex-wrap: wrap;
}
.icon {
  width: 93px;
  height: 73px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  .icon-img {
    height: 40px;
    width: 40px;
  }
  .icon-title {
    text-align: center;
    width: 90%;
    @include ellipsis;
    margin-top: 6px;
    font-size: 13px;
  }
}
.tips {
  margin-top: 12px;
  border-top: 1px solid #f6f6f6;
  padding: 20px 0px;
  display: flex;
  height: 40px;
  width: 100%;
  align-items: center;
  .tip {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    .tip-image {
      align-items: center;
      width: 50%;
      width: 20px;
      height: 20px;
    }
    .tip-text {
      font-size: 14px;
      margin-top: 3px;
      margin-left: 3px;
      height: 100%;
      line-height: 100%;
      vertical-align: middle;
    }
  }
}
</style>
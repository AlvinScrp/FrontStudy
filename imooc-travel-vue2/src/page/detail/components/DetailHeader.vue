<template>
  <div class="detail-header" :class="[{ 'detail-header-fold': fold }]">
    <img
      class="icon"
      :class="[{ 'icon-fold': fold }]"
      :src="backImageUrl"
      alt=""
    />
    <div class="right">
      <img
        class="icon"
        :class="[{ 'icon-fold': fold }]"
        :src="cartImageUrl"
        alt=""
      />
      <img
        class="icon"
        :class="[{ 'icon-fold': fold }]"
        :src="moreImageUrl"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["scrollTop"],
  components: {},
  data() {
    return {
      backImageUrl:
        "https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/08/a58e80b2-df5a-49a0-a8f8-28aa2fcd9a9c__0KB____size48x48.png",
      cartImageUrl:
        "https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/08/36a666e9-98b3-430c-978f-07d89a3625f1__0KB____size48x48.png",
      moreImageUrl:
        "https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/08/5e69c19a-0217-4ab5-aa3d-733c2cbe23d0__0KB____size48x48.png",
    };
  },
  computed: {
    fold() {
      return this.scrollTop > 80;
    },
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
@import "../../../assets/variables.scss";
.detail-header {
  display: flex;
  align-items: center;
  background-color: transparent;
  width: 100%;
  height: 42px;
  padding-left: 6px;
  padding-right: 6px;
  justify-content: space-between;
  &-fold {
    background-color: $bg-color;
  }

  .icon {
    width: 32px;
    height: 32px;

    border-radius: 50%;
    padding: 3px;
    background: rgba(0, 0, 0, 0.5);

    &-fold {
      background-color: transparent;
    }
  }
  .right {
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
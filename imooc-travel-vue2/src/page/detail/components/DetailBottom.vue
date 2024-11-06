<template>
  <div class="detail-bottom">
    <div class="online-service">
      <img class="icon" :src="onlineImageUrl" />
      <div class="text">客服</div>
      <div class="edge">Hi~</div>
    </div>
    <div class="shop">
      <img class="icon" :src="shopImageUrl" />
      <div class="text">店铺</div>
    </div>
    <div class="add-cart">加入购物车</div>
    <div class="to-order">立即预订</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      onlineImageUrl:
        "https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/08/12c68571-74bb-40cc-9730-55b4b70e2f42__0KB____size48x48.png",
      shopImageUrl:
        "https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/08/0373533f-74ed-4929-b15a-1e8a82f8d214__0KB____size48x48.png",
    };
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.detail-bottom {
  height: 52px;
  display: flex;
  padding-right: 6px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;

  .online-service {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;

    .icon {
      width: 22px;
      height: 22px;
    }
    .text {
      margin-top: 6px;
      font-size: 12px;
      color: #333;
    }
    .edge {
      border-radius: 6px 6px 6px 0px;
      position: absolute;
      font-size: 9px;
      line-height: 12px;
      display: block;
      padding-left: 2px;
      padding-right: 2px;
      background-color: red;
      font-weight: 500;
      color: white;
      top: -4px;
      right: 4px;
    }
    &::after {
      content: "";
      width: 2px;
      height: auto;
      background-color: #eee;
      position: absolute;
      right: -1px; /* 使其紧贴右侧 */
      top: 4px;
      bottom: 4px;
    }
  }
  .shop {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .icon {
      width: 22px;
      height: 22px;
    }
    .text {
      margin-top: 6px;
      font-size: 12px;
      color: #333;
    }
  }
  .add-cart {
    border-radius: 6px;
    flex-grow: 0.4;
    background-color: #ffb10a;
    height: 42px;
    color: white;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .to-order {
    border-radius: 6px;
    margin-left: 8px;
    font-weight: 700;
    flex-grow: 1;
    background-image: linear-gradient(-135deg, #f84, #ff5d00);
    height: 42px;
    color: white;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
<template>
  <div class="info">
    <div class="price-ordernum">
      <div class="price-info" v-if="showPrice">
        <span class="normal-unit highlight">¥</span>
        <span class="normal-price highlight">{{ normalPrice }}</span>
        <span>起/人 儿童价</span>
        <span class="child-unit highlight">¥</span>
        <span class="child-price highlight">{{ childPrice }}</span>
        <span>起/人</span>
      </div>
      <div class="order-num">{{ orderNumDesc }}</div>
    </div>
    <div class="supplier-labels">
      <div
        class="supplier-label"
        v-for="(label, index) in supplierLabels"
        :key="index"
      >
        <img class="label-icon" v-if="label.icon" :src="label.icon" alt="" />
        <div class="label-text">{{ label.name }}</div>
      </div>
    </div>
    <div class="title-wrapper">
      <img
        class="title-tag"
        v-if="product.titleTag"
        :src="product.titleTag"
        alt=""
      />
      <span class="title-text">{{ product.productTitle }}</span>
    </div>
    <div class="activity-labels">
      <div class="activity-left">
        <div
          v-for="label in product.activityLabels"
          class="activity-label"
          :key="label.key"
        >
          {{ label.label }}
        </div>
      </div>
      <img
        src="https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/08/8af841a7-55f4-4ba9-987f-bf0242123706__0KB____size48x48.png"
        class="activity-more"
      />
    </div>
    <div v-if="showCustom" class="custom">
      <img class="icon" :src="product.custom.icon" alt="" />
      <div class="text">
        {{ product.custom.text }}
      </div>
      <div class="go">
        <span>去定制</span>
        <img
          class="arrow"
          src="https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/09/6d48c1c7-ce9d-49df-9ee5-c576fc8d45ed__0KB____size48x48.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    product: Object,
  },
  data() {
    return {};
  },
  computed: {
    showPrice() {
      return this.product.price?.normal != null;
    },
    normalPrice() {
      const p = this.product.price?.normal;
      return p ? p / 100 : "";
    },
    childPrice() {
      const p = this.product.price?.child;
      return p ? p / 100 : "";
    },
    orderNumDesc() {
      const num = this.product.orderNum;
      return num ? `${num}人出行` : "";
    },
    supplierLabels() {
      let labels = [];
      const supplier = this.product.supplier;
      if (supplier) {
        labels.push({
          icon: "https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/08/0373533f-74ed-4929-b15a-1e8a82f8d214__0KB____size48x48.png",
          name: supplier.shopName,
        });
      }
      let supplierLabels = this.product.supplierLabels;

      if (supplierLabels && supplierLabels.length > 0) {
        supplierLabels.forEach((label) => {
          labels.push({ name: label.name });
        });
      }

      return labels;
    },
    showCustom() {
      return this.product.custom && this.product.custom.enable;
    },
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.info {
  margin-top: -10px;
  padding-top: 10px;
  width: 100%;
  background-color: white;
  border-radius: 12px 12px 0px 0px;

  .price-ordernum {
    display: flex;
    padding-top: 6px;
    padding-left: 12px;
    padding-right: 12px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #9e9e9e;

    .price-info {
      font-size: 12px;
      font-weight: 500;
      .highlight {
        color: #ff8300;
        font-weight: 600;
      }
      .normal-unit {
        font-size: 14px;
      }
      .normal-price {
        font-size: 20px;
      }
    }
    .order-num {
      font-size: 11px;
    }
  }
  .supplier-labels {
    padding-top: 10px;
    display: flex;
    padding-left: 12px;
    padding-right: 12px;
    flex-direction: row;
    flex-wrap: nowrap;
    .supplier-label {
      background-color: #f5f6f7;
      border-radius: 6px;
      color: #212121;
      margin-right: 6px;
      font-size: 11px;
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 20px;
      padding-left: 6px;
      padding-right: 6px;
      .label-icon {
        margin-right: 2px;
        width: 12px;
        height: 12px;
      }
    }
  }
  .title-wrapper {
    margin: 12px 12px 0px 12px;
    font-size: 18px;
    text-align: left;
    .title-tag {
      height: 15px;
      margin-top: 4px;
      margin-right: 3px;
      display: inline-block;
      line-height: 30px;
      width: auto;
      object-fit: cover;
    }
    .title-text {
      color: #212121;
      line-height: 1.4;
    }
  }
  .activity-labels {
    margin-top: 12px;
    padding-left: 12px;
    padding-right: 8px;
    display: flex;
    border: solid #f5f6f7;
    border-width: 1px 0 0 0;
    flex-direction: row;
    align-items: center;
    .activity-left {
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      .activity-label {
        margin-right: 6px;
        border: 1px solid red;
        border-radius: 4px;
        padding: 2px 4px;
        font-size: 10px;
        color: red;
      }
    }
    .activity-more {
      padding: 4px;
      height: 34px;
      width: 34px;
    }
  }
  .custom {
    border: solid #f5f6f7;
    border-width: 1px 0 0;
    padding: 0 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    height: 35px;

    .icon {
      width: 36px;
    }
    .text {
      margin-top: 2px;
      font-size: 13px;
      margin-left: 12px;
      flex-grow: 1;
    }
    .go {
      border-radius: 9px;
      background-image: linear-gradient(148deg, #57e3cc, #36d3ff);
      padding: 4px 2px 4px 6px;
      color: white;
      font-size: 11px;
      font-weight: 600;

      .arrow {
        width: 10px;
        height: 10px;
      }
    }
  }
}
</style>
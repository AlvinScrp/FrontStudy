<template>
    <div class="indicator-container" :style="{backgroundColor:backgroundColor}">
        <div
            class="item"
            v-for="(item, index) in items"
            :key="index"
            :class="{ active: isActivate(index) }"
            @click="onItemClick(index)">
            <p>{{ item.label }}</p>
            <div class="item-line"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        backgroundColor: {
            type: String,
            default: '#f6f8fb'
        },
        items: {
            type: Array
        },
        currentIndex: {
            type: Number,
            required: true,
            default: 0
        }
    },
    data () {
        return {}
    },

    methods: {
        isActivate (index) {
            return index === this.currentIndex
        },
        onItemClick (index) {
            if (this.isActivate(index)) {
                return
            }
            this.$emit('indicator-click', index)
        }
    }
}
</script>
<style lang="less"  scoped>
.indicator-container {
  position: relative;
  display: flex;
  height: var(--indicator-height);
  background-color: #f6f8fb;

  .item {
    position: relative;
    height: 34px;
    padding-top: 4px;
    align-self: center;
    flex: 1;

    p {
      font-weight: 400;
      text-align: center;
      width: 100%;
      line-height: 24px;
      height: 24px;
      color: #333333;
      font-size: 14px;
    }

    .item-line {
      text-align: center;
      margin: 0 auto;
      width: 35px;
      height: 2px;
      background-color: transparent;
    }
  }
  .item.active {
    p {
      color: red;
      font-size: 15px;
      font-weight: 700;
    }
    .item-line {
      background-color: red;
    }
  }
}
// .home-goods-indicator-container
</style>

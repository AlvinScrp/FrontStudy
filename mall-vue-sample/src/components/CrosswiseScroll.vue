<template>
    <div
        class="crosswise-scroll"
        @DOMMouseScroll.prevent="mouseTranslate"
        @mousewheel="mouseTranslate">
        <div
            class="crosswise-content"
            ref="crosswiseContent"
            :style="'transform: translateX(' + translateX + 'px);'">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            translateX: 0, // 滚动的距离
            maxTranslateX: 0, // 最大滚动距离
            flag: false
        }
    },
    created () {
    // 计算最大滚动距离
    // this.$nextTick(() => {
    //   this.countMaxTranslateX();
    // });
    },
    mounted () {
        window.addEventListener('resize', this.countMaxTranslateX, false)
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.countMaxTranslateX, false)
    },
    methods: {
    // 鼠标滚轮滑动事件
        mouseTranslate (event) {
            // 没有最大滚动宽度进行计算
            if (!this.maxTranslateX) this.countMaxTranslateX()
            if (this.maxTranslateX <= 0) return
            const delta = event.deltaY || event.detail
            let x = this.translateX
            if (delta > 0) {
                x = Math.abs(x - 100) >= this.maxTranslateX
                    ? -this.maxTranslateX
                    : x - 100
            } else {
                x = x + 100 >= 0 ? 0 : x + 100
            }
            this.translateX = x
            console.log(this.translateX)
            if (
                this.translateX === 0 ||
        Math.abs(this.translateX) === this.maxTranslateX
            ) {
                clearTimeout(this.$timer)
                this.$timer = setTimeout(() => {
                    this.flag = true
                }, 300)
            } else {
                this.flag = false
            }
            if (!this.flag) event.preventDefault()
        },
        // 计算最大滚动距离
        countMaxTranslateX () {
            if (!this.crosswiseContent) {
                this.crosswiseContent = this.$refs.crosswiseContent
            }
            this.maxTranslateX = this.crosswiseContent.scrollWidth - this.crosswiseContent.offsetWidth
            if (Math.abs(this.translateX) >= this.maxTranslateX) {
                this.translateX = -this.maxTranslateX
            }
        }
    }
}
</script>
<style lang="less" scoped>
.crosswise-scroll {
  overflow-x: hidden;
  .crosswise-content {
    transition: transform 0.1s;
  }
}
</style>

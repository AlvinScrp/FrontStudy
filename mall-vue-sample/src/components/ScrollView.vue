<template>
    <div ref="wrapper" class="wrapper">
        <div id="inner_wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
// https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-api.html#%E4%BA%8B%E4%BB%B6
import BScroll from 'better-scroll'
import PullUp from '@better-scroll/pull-up'

BScroll.use(PullUp)

export default {
    props: {},
    data () {
        return {
            scroll: null
        }
    },
    watch: {
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
        data () {
            setTimeout(this.refresh(), 20)
        }
    },
    mounted () {
    // 保证在DOM渲染完毕后初始化better-scroll
        setTimeout(() => {
            this._initScroll()
        }, 100)
    },
    methods: {
        _initScroll () {
            if (!this.$refs.wrapper) {
                return
            }

            /**
      当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；
      当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；
      当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，
          而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
      如果没有设置该值，其默认值为 0，即不派发 scroll 事件。
       */
            console.log('_initScroll')
            // better-scroll的初始化
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType: 3,
                click: true,
                scrollX: false
            })
            this.scroll.on('beforeScrollStart', () => {
                this.$emit('beforeScrollStart')
            })

            this.scroll.on('scrollStart', () => {
                this.$emit('scrollStart')
            })

            this.scroll.on('scroll', (pos) => {
                // console.log(" emit scroll");
                this.$emit('scroll', pos)
            })
            this.scroll.on('scrollEnd', () => {
                // 滚动到底部
                if (this.scroll.y <= this.scroll.maxScrollY + 100) {
                    // console.log(" emit scrollToEnd");
                    this.$emit('scrollToEnd')
                }
            })

            // this.scroll.on("pullingUp", () => {
            //   this.$emit("scrollToEnd");
            // });
        },

        refresh () {
            // 代理better-scroll的refresh方法
            this.scroll && this.scroll.refresh()
        },
        finishedPullUp () {
            this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
        },
        scrollTo () {
            // 代理better-scroll的scrollTo方法
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        },
        scrollToElement () {
            // 代理better-scroll的scrollToElement方法
            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
        }
    }
}
</script>
<style scoped>
.wrapper {
  overflow: hidden;
}
/* .inner_wrapper{
   overflow: hidden;
} */
</style>

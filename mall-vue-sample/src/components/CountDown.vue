<template>
    <p class="count-down">
        <span class="number">{{ formatNumber(text.day) }}</span>
        <span class="number-split">:</span>
        <span class="number">{{ formatNumber(text.hour) }}</span>
        <span class="number-split">:</span>
        <span class="number">{{ formatNumber(text.minute) }}</span>
        <span class="number-split">:</span>
        <span class="number">{{ formatNumber(text.second) }}</span>
    </p>
</template>

<script>
export default {
    props: {
        endTime: {
            type: Number,
            required: true,
            default: 0
        }
    },
    data () {
        return {
            text: {}
        }
    },
    mounted () {
        setTimeout(() => this.startTimer())
    },
    methods: {
        startTimer () {
            this.stopTimer()
            this.playerTimer = window.setInterval(() => {
                const now = new Date().getTime()
                const time = (this.endTime - now) / 1000
                const day = time / 86400
                const hour = (time % 86400) / 3600
                const minute = (time % 3600) / 60
                const second = time % 60
                this.text = {
                    day, hour, minute, second
                }
                console.log(`${this.text}`)
            }, 1000)
        },
        stopTimer () {
            window.clearInterval(this.playerTimer)
        },
        formatNumber (number) {
            if (!number) return ''
            const value = Math.floor(number)
            return (value < 10 ? '0' : '') + value
        }
    }
    // watch: {
    //   leaveTime() {
    //     this.startTimer();
    //   },
    // },
}
</script>
<style lang="less" scoped>
.count-down {
  font-size: 0.13rem;
  margin-top: 0.03rem;
  .number {
    display: inline-block;
    padding: 0.03rem;
    box-sizing: border-box;
    border-radius: 0.03rem;
    border: 1px solid white;
  }
  .number-split{
     display: inline-block;
      padding: 0.02rem;
  }
}
</style>

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
      default: 0,
    },
  },
  data() {
    return {
      text: {},
    };
  },
  methods: {
    startTimer() {
      this.stopTimer();
      this.playerTimer = window.setInterval(() => {
        let now = new Date().getTime();
        let time = (this.endTime - now) / 1000;
        let day = time / 86400;
        let hour = (time % 86400) / 3600;
        let minute = (time % 3600) / 60;
        let second = time % 60;
        this.text = { day, hour, minute, second };
        console.log(`${this.text}`);
      }, 1000);
    },
    stopTimer() {
      window.clearInterval(this.playerTimer);
    },
    formatNumber(number) {
      if (!number) return "";
      let value = Math.floor(number);
      return (value < 10 ? "0" : "") + value;
    },
  },
  mounted() {
    setTimeout(() => this.startTimer());
  },
  // watch: {
  //   leaveTime() {
  //     this.startTimer();
  //   },
  // },
};
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
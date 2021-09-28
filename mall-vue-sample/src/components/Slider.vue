<template>
  <div class="slider-container">
    <div
      class="slider"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <a class="slider-item" v-for="(item, index) in items" :key="index">
        <img :src="item.image" :alt="item.title" />
      </a>
    </div>
    <div class="slider-indicator">
      <div
        v-for="(item, index) in slideCount"
        :key="index"
        :style="styleObject(index)"
        class="slider-indicator-item"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      slideCount: 0,
      sliderEl: {},
      sliderStyle: {},
      itemWidth: 0,
      isScrolling: false,
      touchStartX: 0,
      touchOffset: 0,
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    customStyle: {
      type: Object,
      required: true,
      default: {
        indicatorColor: "grey",
        indicatorColorActive: "black",
        size: 8,
      },
    },

    autoScroll: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    items() {
      //  console.log("slider.vue watch items");
      setTimeout(() => {
        this.injectSliderItem();
        this.startTimer();
      }, 100);
    },
  },

  mounted() {
    // console.log("slider.vue mounted");
    setTimeout(() => {
      this.injectSliderItem();
      this.startTimer();
    }, 100);
  },
  methods: {
    styleObject(index) {
      let isActivate = index === this.currentIndex - 1;
      let color = this.customStyle.indicatorColor;
      let colorActive = this.customStyle.indicatorColorActive;
      return {
        backgroundColor: isActivate ? colorActive : color,
        width: `${this.customStyle.size}px`,
        height: `${this.customStyle.size}px`,
        opacity: isActivate ? 0.75 : 0.2,
      };
    },
    injectSliderItem() {
      let sliderEl = document.querySelector(".slider");
      let sliderItemEls = sliderEl.getElementsByClassName("slider-item");
      this.slideCount = sliderItemEls.length;
      console.log(
        `injectSliderItem slideCount:${this.slideCount} items:${this.items}`
      );
      this.sliderEl = sliderEl;

      if (this.slideCount > 1) {
        let cloneFirst = sliderItemEls[0].cloneNode(true);
        let cloneLast = sliderItemEls[sliderItemEls.length - 1].cloneNode(true);
        sliderEl.insertBefore(cloneLast, sliderItemEls[0]);
        sliderEl.appendChild(cloneFirst);
        this.itemWidth = sliderItemEls[0].clientWidth;
        console.log(`this.itemWidth:${this.itemWidth}`);
        this.sliderStyle = sliderEl.style;
        this.currentIndex = 1;
        this.transform();
      }
    },
    startTimer() {
      if (!this.autoScroll) {
        return;
      }
      this.stopTimer();
      this.playerTimer = window.setInterval(() => {
        this.currentIndex++;
        this.isScrolling = true;
        this.transform(0, true, this.checkIndex);
      }, 3000);
    },
    stopTimer() {
      if (!this.autoScroll) {
        return;
      }
      window.clearInterval(this.playerTimer);
    },

    hadnleAnimEnd() {
      this.sliderEl.removeEventListener("transitionend", this.hadnleAnimEnd);
      console.log("hadnleAnimEnd");
      this.checkIndex();
      this.startTimer();
    },

    checkIndex() {
      if (this.currentIndex == this.slideCount + 1) {
        this.currentIndex = 1;
      }
      if (this.currentIndex == 0) {
        this.currentIndex = this.slideCount;
      }
      this.transform();
    },
    transform(offset = 0, isAnim = false, handleEnd) {
      let totalOffset = -this.currentIndex * this.itemWidth + offset;
      this.sliderStyle.transition = `transform ${isAnim ? 300 : 0}ms`;
      this.sliderStyle.transform = `translate3d(${totalOffset}px, 0, 0)`;
      if (handleEnd) {
        this.sliderEl.addEventListener("transitionend", handleEnd);
      }
    },
    touchStart(event) {
      if (this.scrolling) return;
      console.log("touchStart");
      this.stopTimer();
      this.touchStartX = event.touches[0].pageX;
    },
    touchMove(event) {
      if (this.scrolling) return;
      // this.stopTimer();
      console.log("touchMove");
      let currentX = event.touches[0].pageX;
      this.touchOffset = currentX - this.touchStartX;
      this.transform(this.touchOffset);
    },

    touchEnd(event) {
      console.log(`touchEnd Offset:${this.touchOffset}`);
      if (Math.abs(this.touchOffset) * 2 > this.itemWidth) {
        if (this.touchOffset < 0) {
          this.currentIndex++;
        } else {
          this.currentIndex--;
        }
      }

      this.transform(0, true, this.hadnleAnimEnd);
    },
  },
};
</script>
<style scoped>
.slider-container {
  position: relative;
  overflow: hidden;
}
.slider {
  display: flex;
  width: 100%;
}

.slider-item img {
  width: 100vw;
}

.slider-indicator {
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.slider-indicator-item {
  box-sizing: border-box;
  float: left;
  width: 8px;
  height: 8px;
  border-radius: 5px;
  margin: 4px;
  background-color: white;
  opacity: 0.2;
}
</style>
<template>
  <section class="review">
    <div class="split"></div>
    <div class="content">
      <div class="top-total">
        <span class="count">评价 {{ review.count }}</span>
        <span class="score">
          <span class="score-label">好评率</span>
          <span class="score-value">{{ goodScoreStr }}</span>
          <i class="score-icon iconfont mall-arrow-right"></i>
        </span>
      </div>
      <div class="intro">
        <div
          class="user-avatar"
          :style="imageBgStyle(this.review.topItem.userAvatar)"
        />
        <!--   -->
        <div class="intro-title">
          <span class="user-name">{{ review.topItem.userName }}</span>
          <div class="star">
            <div class="star-item" v-for="(item, index) in 5" :key="index">
              <i class="star-item-on" v-if="item <= review.topItem.star" />
              <i class="star-item-normal" v-else />
              <!-- <div class="start-item-on" /> -->
            </div>
          </div>
        </div>

        <span class="buy-info"
          >{{ review.topItem.buyTime }} {{ review.topItem.buyIntro }}
        </span>
      </div>
      <p class="text">{{ review.topItem.content }}</p>
      <div class="image-shows">
        <div
          class="image-item"
          v-for="(image, index) in review.topItem.images"
          :key="index"
          :style="imageBgStyle(image)"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      review: {
        count: 411,
        goodScore: 0.9608,
        topItem: {
          userName: "雯*****购",
          userAvatar:
            "https://staticimg.ngmm365.com/a865c02fb79e46e59e6e9e53495f2cc5.jpg",
          star: 4,
          buyTime: "2021-03-21",
          buyIntro: "幼儿D3滴剂 100滴*2瓶",
          content:
            " 已经开始食啦，大宝小宝张开嘴巴每人一滴，非常方便，助力宝宝长高高！！！支持年糕妈妈！！！ ",
          images: [
            "https://staticimg.ngmm365.com/1/6400627_1_de9404f60cb04bc89d148a423b951037-w3000_h4000.jpeg",
            "https://staticimg.ngmm365.com/1/6848125_1_ca00ee695df4426bbc3eb32674bd4ec0-w3024_h4032.jpeg",
            "https://staticimg.ngmm365.com/1/8207253_1_f60f29de57644b999cf6bb790dfcb7a7-w3468_h4624.jpeg",
            "https://staticimg.ngmm365.com/1/10010038_1_f42315d582e94c6dabb80bc50539ef4c-w3456_h4608.jpeg",
            "https://staticimg.ngmm365.com/1/10010038_1_bd5334eb63664bb09fe96aa7eecf0c71-w3456_h4608.jpeg",
          ],
        },
      },
    };
  },
  methods: {
    imageBgStyle(imageUrl) {
      return {
        background: `url(${imageUrl}) no-repeat`,
        backgroundSize: `100%`,
      };
    },
  },
  computed: {
    goodScoreStr() {
      return `${this.review.goodScore * 100.0}%`;
    },
  },
};
</script>
<style lang="less" scoped>
.split {
  background-color: #f6f6f6;
  width: 100%;
  height: 0.15rem;
}
.content {
  margin: 0.1rem;
}
.top-total {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .count,
  .score {
    display: inline-block;
    font-size: 0.13rem;
    font-family: "PingFangSC-Regular";
    font-weight: 400;
    color: #666;
    line-height: 0.14rem;
  }
  .score-value {
    margin-left: 0.05rem;
    color: red;
  }
  .score-icon {
    color: red;
    font-size: 0.12rem;
    font-weight: 700;
  }
}

.intro {
  margin-top: 0.1rem;
  position: relative;
  height: 0.5rem;
  .user-avatar {
    position: absolute;
    display: inline-block;
    width: 0.38rem;
    height: 0.38rem;
    border-radius: 50%;
  }

  .intro-title {
    position: absolute;
    display: flex;
    display: inline-block;
    left: 0.48rem;

    .user-name {
      display: inline-block;
      font-size: 0.14rem;
      margin-right: 0.1rem;
    }
    .star {
      display: inline-block;
      .star-item {
        display: inline-block;
        i {
          width: 0.13rem;
          height: 0.13rem;
          display: inline-block;
          margin-left: 0.015rem;
          margin-right: 0.015rem;
        }

        // .star-item-on {
        //   background: url("~assets/img/goods/icon_star_on.png") no-repeat center
        //     0;
        //   background-size: auto 100%;
        // }
        // .star-item-normal {
        //   background: url("~assets/img/goods/icon_star_normal.png") no-repeat
        //     center 0;
        //   background-size: auto 100%;
        // }
       
      }
    }
  }
  .buy-info {
    position: absolute;
    left: 0.48rem;
    top: 0.24rem;
    display: inline-block;
    font-size: 0.12rem;
    color: #999;
  }
}

.text {
  font-size: 0.12rem;
  color: #333;
  line-height: 0.2rem;
}
.image-shows {
  margin-top: 0.05rem;
  margin-left: -0.04rem;
  display: flex;
  flex-wrap: wrap;

  .image-item {
    width: 1.03rem;
    height: 1.03rem;
    border-radius: 0.03rem;
    margin: 0.04rem;
  }
}
</style>
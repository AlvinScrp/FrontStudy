<template>
  <div class="rating-crowd-list">
    <div class="crowd" v-for="(crowd, index) in crowdList" :key="index">
      <div class="title">{{ crowd.title }}</div>
      <div class="score">
        <div class="score-desc">{{ crowd.scoreDesc }}</div>
        <div class="score-bg"></div>
      </div>
      <div class="avg-score-desc">
        <img :src="crowd.moreThanAvgIcon" alt="" />
        <span>{{ crowd.avgScoreDesc }}</span>
      </div>
      <img :src="crowd.smileIcon" class="smile-icon" />
      <div class="line-space-gray"></div>
      <div v-for="(level2, index) in crowd.level2s" :key="index">
        <div class="level2-info">
          <span class="level2-title">{{ level2.title }}</span>
          <span class="level2-score">{{ level2.score }}</span>
        </div>
        <div class="level2-progressbar" :key="index">
          <div class="progress" :style="level2.progressStyleObj"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: Object,
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    crowdList() {
      const infos = this.comment?.commentCrowdInfo;
      if (!(infos && Array.isArray(infos) && infos.length > 0)) return [];
      const result = [];
      infos.forEach((info) => {
        let level2s = info.crowdRecordList.map((record) => {
          return {
            progressStyleObj: `width:${Math.ceil(record.l2Score * 10)}%`,
            score: record.l2Score.toFixed(1),
            title: record.level2,
          };
        });
        level2s.sort((a, b) => b.score - a.score);
        level2s = level2s.slice(0, 2);
        let isMore = info.score > info.avgScore;
        result.push({
          title: info.title,
          scoreDesc:
            `${info.score.toFixed(1)}` +
            (info.score > 9 ? " 非常满意" : " 棒棒哒"),
          smileIcon: isMore
            ? "https://s.qunarzz.com/vacation_react/detail/rating/icon1.png"
            : "https://s.qunarzz.com/vacation_react/detail/rating/icon2-1.png",
          moreThanAvgIcon: isMore
            ? "https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/10/48962853-d69f-4155-870e-453abfa58b97__1KB____size30x30.png"
            : "https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/10/dac0c2ef-7a5d-41b2-a4d8-873e0781ea89__0KB____size30x30.png",
          avgScoreDesc:
            (isMore ? "偏高" : "偏低") +
            " 行业平均" +
            `${Math.ceil(info.avgScore * 10) / 10}`,
          level2s: level2s,
        });
      });
      return result;
    },
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.rating-crowd-list {
  padding: 12px;
  background-image: linear-gradient(180deg, #fff, #f6f6f6 15%, #f6f6f6 98%);
  display: flex;
  justify-content: space-between;

  .crowd {
    border-radius: 4px;
    background-color: #fff;
    width: 112px;
    padding: 12px 8px;
    text-align: left;
    position: relative;
    .title {
      font-size: 14px;
      font-weight: 700;
      color: #212121;
    }
    .score {
      margin-top: 10px;
      position: relative;
      display: inline-block;
      .score-desc {
        position: relative;
        color: #00bcd4;
        font-weight: 600;
        font-size: 11px;
        z-index: 3;
      }
      .score-bg {
        background: #d9fcff;
        border-radius: 3px;
        bottom: -1px;
        height: 6px;
        left: 0;
        overflow: hidden;
        position: absolute;
        right: 0;
      }
    }

    .avg-score-desc {
      margin-top: 6px;
      display: flex;
      flex-direction: row;
      img {
        margin-top: 1px;
        width: 8px;
        height: 8px;
      }
      span {
        margin-left: 2px;
        color: #616161;
        font-size: 10px;
        font-weight: 300;
      }
    }
    .smile-icon {
      position: absolute;
      width: 26px;
      top: 6px;
      right: 6px;
    }
    .line-space-gray {
      height: 1px;
      margin-top: 6px;
      background-color: #f5f5f5;
    }
    .level2-info {
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 10px;
      .level2-title {
        color: #666;
      }
      .level2-score {
        color: #212121;
      }
    }
    .level2-progressbar {
      display: flex;
      margin-top: 2px;
      height: 5px;
      border-radius: 2px;
      background-color: #f2f2f2;
      position: relative;

      .progress {
        border-radius: 3px;
        background-color: #0edaee;
        position: absolute;
        width: 50%;
        height: 5px;
      }
    }
  }
}
</style>
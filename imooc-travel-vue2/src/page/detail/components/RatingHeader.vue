<template>
  <div class="rating-header">
    <div class="title-wrapper">
      <div class="title">当前套餐</div>
      <div v-if="commonentCountDesc" class="comment-more">
        <span>{{ commonentCountDesc }}</span>
        <img
          src="https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/09/925b8474-581f-4eb6-aea5-27abe8160cbd__0KB____size48x48.png"
          alt=""
        />
      </div>
    </div>
    <div class="rating-score">
      <div class="left">
        <div class="score">
          <span class="num"> {{ score.num }}</span>
          <span class="more-or-less-text">{{ score.moreLessText }}</span>
          <img
            src="https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/09/269e84f7-9003-4bf7-84bc-4c1c01a0c6e9__0KB____size30x30.png"
            class="more-or-less-arrow"
            :class="[{ reverse: score.isMoreThan }]"
          />
        </div>
        <div class="industry">{{ score.industryScoreDesc }}</div>
      </div>
      <div class="right">
        <div
          v-for="item in rateList"
          class="progress-wrapper"
          :key="item.level"
        >
          <img
            v-for="i in item.level"
            class="icon"
            :key="i"
            src="https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/09/9eec8d0e-554e-4d63-8fa5-6fc21db74296__0KB____size48x48.png"
          />
          <div class="progress-bar">
            <div class="progress" :style="item.styleObj"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="supplierScoreDesc" class="supplier-score">
      <img
        class="mouth-tag"
        src="https://ad-dapp-osscp.qunarzz.com/ad_dapp_oss_oper/07f1c017e6dde92f2d538a134b9e4770.png"
        alt=""
      />
      <span>{{ supplierScoreDesc }}</span>
    </div>
    <div class="commonent-tags">
      <div v-for="(text, index) in commonentTags" class="tag" :key="index">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: { type: Object },
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    commonentCountDesc() {
      const count = this.comment?.commonentCount ?? 0;
      console.log("comment", this.comment);
      return count > 0 ? `${count}条评价` : "";
    },
    score() {
      if (!this.comment) return {};
      const { overallRatings: current, industryAverage: avg } = this.comment;
      return {
        num: Math.ceil(current * 10) / 10,
        moreLessText: current > avg ? "较高" : "偏低",
        isMoreThan: current > avg,
        industryScoreDesc: `相似线路平均${Math.ceil(avg * 10) / 10}分`,
      };
    },
    rateList() {
      if (!this.comment) return [];
      let result = [5, 4, 3, 2, 1].map((index) => {
        return { level: index, styleObj: { width: "0%" } };
      });

      this.comment.commentRateList.forEach((item) => {
        let index = -1;
        if (item.key === "10") {
          index = 0;
        } else if (item.key === "8-9") {
          index = 1;
        } else if (item.key === "6-7") {
          index = 2;
        } else if (item.key === "3-5") {
          index = 3;
        } else if (item.key === "0-2") {
          index = 4;
        }
        if (index >= 0) {
          result[index].styleObj.width = `${item.rate}%`;
        }
      });

      return result;
    },
    supplierScoreDesc() {
      let info = this.comment?.supplierScoreInfo;
      return info && info.wordOfMouthSupplier
        ? `商家在该目的地服务好评率高于同业${info.percent}%`
        : "";
    },
    commonentTags() {
      if (!this.comment) return [];
      const result = [];
      const { ratingExcellent, numWithImages } = this.comment;
      if (ratingExcellent) {
        result.push(`非常满意(${ratingExcellent})`);
      }
      if (numWithImages) {
        result.push(`有图点评(${numWithImages})`);
      }
      return result;
    },
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.rating-header {
  background-color: white;
  padding: 12px 12px 0px 12px;
  display: flex;
  flex-direction: column;

  .title-wrapper {
    height: 30px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    .title {
      color: #111;
      font-weight: 600;
      font-size: 16px;
    }
    .comment-more {
      font-size: 13px;
      display: flex;
      flex-direction: row;
      img {
        width: 12px;
        height: 12px;
      }
    }
  }
  .rating-score {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left {
      flex-shrink: 0;
      margin-top: 12px;
      margin-right: 6px;
      display: flex;
      flex-direction: column;
      .score {
        align-items: end;
        display: flex;

        flex-direction: row;
        .num {
          font-weight: 700;
          color: black;
          font-size: 35px;
        }
        .more-or-less-text {
          color: #999;
          font-size: 12px;
          margin-left: 2px;
          margin-bottom: 1px;
          display: inline-block;
          line-height: 20px;
          height: 20px;
        }
        .more-or-less-arrow {
          width: 11px;
          height: 10px;
          margin-bottom: 6px;
          display: inline-block;
        }
        .reverse {
        }
      }
      .industry {
        margin-top: 6px;
        color: #999;
        font-size: 12px;
      }
    }
    .right {
      margin-top: 6px;
      .progress-wrapper {
        width: 237px;
        height: 12px;
        margin-bottom: 2px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        .icon {
          width: 11px;
          height: 11px;
          margin-right: 1px;
        }
        .progress-bar {
          display: flex;
          width: 175px;
          flex-grow: 0;
          height: 6px;

          border-radius: 3px;
          background-color: #f2f2f2;
          position: relative;

          .progress {
            border-radius: 3px;
            background-color: #0edaee;
            position: absolute;
            width: 50%;
            height: 6px;
          }
        }
      }
    }
  }
  .supplier-score {
    height: 28px;
    background-color: #fffaef;
    border-radius: 5px;
    display: flex;
    align-items: center;

    .mouth-tag {
      width: 78px;
      height: 21px;
      margin-right: 4px;
    }
    span {
      color: #212121;
      font-size: 12px;
    }
  }
  .commonent-tags {
    display: flex;
    flex-direction: row;
    height: 48px;
    align-items: center;

    .tag {
      background: #f0fbff;
      border-radius: 5px;
      color: #00bcd4;
      display: inline-block;
      font-size: 12px;
      line-height: 22px;
      padding-left: 12px;
      padding-right: 12px;
      margin-right: 5px;
    }
  }
}
</style>
<template>
  <div class="rating-bd">
    <div v-for="item in commonentList" class="rating-item" :key="item.id">
      <div class="title">
        <img :src="item.avatar" class="avatar" alt="" />
        <div class="title-right">
          <div class="name">
            {{ item.name }}
          </div>
          <div class="summary">{{ item.summary }}</div>
        </div>
      </div>
      <div class="score-info">
        <span>「&nbsp;</span>
        <div class="score-progress-bar">
          <div class="bg">
            <img
              v-for="item in 5"
              src="https://s.qunarzz.com/vacation_react/detail/cmt_star_gray_small.png"
              alt=""
              :key="item"
            />
          </div>
          <div class="progress" :style="item.progressStyleObj">
            <img
              v-for="item in 5"
              src="https://s.qunarzz.com/vacation_react/detail/cmt_star_ok_small.png"
              alt=""
              :key="item"
            />
          </div>
        </div>
        <span class="highlight">{{ item.scoreValue }}</span>
        <span>&nbsp;/&nbsp;</span>
        <span class="highlight">{{ item.scoreDesc }}</span>
        <span>&nbsp;」</span>
      </div>
      <div class="content">
        {{ item.content }}
      </div>
      <div class="labels">
        <div
          class="label"
          v-for="(label, index) in item.labelNames"
          :key="index"
        >
          {{ label }}
        </div>
      </div>
    </div>
    <div class="rating-more">
      <span class="rating-more-text"> 查看全部</span>
      <img
        class="rating-more-arrow"
        src="https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/10/f032b843-682d-4e6f-b263-d1c70b424f28__0KB____size48x48.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: {
    comment: Object,
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    commonentList() {
      let objs = this.comment?.mainCommentList;
      if (!objs) return [];

      return objs.map((obj) => {
        const tripDate = dayjs(obj.tripStartDate).format("YYYY-MM-DD");
        const createDate = dayjs(obj.createdTime).format("YYYY-MM-DD");
        return {
          id: obj.id,
          name: obj.commterId,
          avatar: obj.userAvatar,
          summary: `${tripDate}出行，${createDate}发表|${obj.ipLocation}`,
          scoreValue: `${obj.rating}分`,
          scoreDesc: obj.rating >= 9 ? "非常满意" : "满意",
          progressStyleObj: { width: `${(obj.rating * 100) / 10}%` },
          content: obj.content,
          labelNames: obj.labelNames,
        };
      });
    },
  },
};
</script>
<style lang='scss' scoped>
.rating-bd {
  display: flex;
  width: 100%;
  overflow-x: scroll;

  background-color: white;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  .rating-item {
    flex-shrink: 0;
    padding: 16px 12px;
    width: 307px;
    .title {
      display: flex;
      flex-direction: row;
      .avatar {
        height: 30px;
        width: 30px;
        border-radius: 50%;
      }

      .title-right {
        margin-left: 3px;
        text-align: left;

        .name {
          font-weight: 500;
          font-size: 13px;
        }
        .summary {
          margin-top: 5px;
          color: #999;
          font-size: 11px;
        }
      }
    }
    .score-info {
      font-size: 12px;
      color: #999;
      margin-top: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
      span {
        display: inline-block;
      }
      .highlight {
        font-weight: 700;
        color: #212121;
      }
      .score-progress-bar {
        position: relative;
        margin-left: 6px;
        margin-right: 6px;
        width: 70px;
        height: 12px;
        img {
          margin-right: 2px;
          width: 12px;
          height: 12px;
        }
        .bg {
          position: absolute;
          left: 0;
          overflow: hidden;
          top: 0;
        }
        .progress {
          display: flex;
          flex-direction: row;
          height: 12px;
          overflow: hidden;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }
    .content {
      text-align: left;
      margin-top: 18px;
      font-size: 13px;
      color: #212121;
    }
    .labels {
      margin-top: 12px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      .label {
        color: #333;
        margin-right: 6px;
        border-radius: 5px;
        background-color: #f5f5f5;
        font-size: 11px;
        padding: 4px 8px;
      }
    }
  }
  .rating-more {
    flex-shrink: 0;
    width: 38px;
    margin-top: 16px;
    margin-right: 12px;
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: 6px;
    .rating-more-text {
      color: #212121;
      line-height: 1.3;
      font-size: 12px;
      font-weight: 500;
      width: 15px;
    }
    .rating-more-arrow {
      margin-top: 6px;
      width: 12px;
      padding: 2px;
      height: 12px;
      background-color: #212121;
      border-radius: 50%;
    }
  }
}
</style>
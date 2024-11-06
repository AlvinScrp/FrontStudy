<template>
  <div>
    <div class="weekend-list-title">周末去哪儿</div>
    <div v-for="item in weekendList" :key="item.id" class="weekend-item">
      <img class="weekend-image" :src="item.imgUrl" alt="" />
      <div class="weekend-title">{{ item.title }}</div>
      <div class="weekend-summury">{{ item.desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["weekendList"],
  data() {
    return {
      // weekendList: [
      //   {
      //     id: "0001",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
      //     title: "北京温泉排行榜",
      //     desc: "细数北京温泉，温暖你的冬天",
      //   },
      //   {
      //     id: "0002",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
      //     title: "北京必游TOP10",
      //     desc: "来北京必去的景点非这些地方莫属",
      //   },
      //   {
      //     id: "0003",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
      //     title: "寻找北京的皇城范儿",
      //     desc: "数百年的宫廷庙宇，至今依旧威严霸气",
      //   },
      //   {
      //     id: "0004",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
      //     title: "学生最爱的博物馆",
      //     desc: "周末干嘛？北京很多博物馆已经免费开放啦",
      //   },
      //   {
      //     id: "0005",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg",
      //     title: "儿童剧场，孩子的乐园",
      //     desc: "带宝贝观看演出，近距离体验艺术的无穷魅力",
      //   },
      //   {
      //     id: "0006",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1505/7f/fa4eb0ca72409d.jpg_r_640x214_2f2a860e.jpg",
      //     title: "大连必游TOP10",
      //     desc: "爱上北方的碧海蓝天",
      //   },
      // ],
    };
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
@import "../../../assets/mixins.scss";
.weekend-list-title {
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  line-height: 40px;
  padding-left: 12px;
  text-align: start;
  background-color: #f5f5f5;
}
.weekend-item {
  margin-bottom: 24px;
  .weekend-image {
    width: 100%;
    height: 125px;
    object-fit: cover;
  }

  .weekend-title {
    margin-top: 8px;
    font-size: 15px;
    color: black;
    font-weight: 500;
  }
  .weekend-summury {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    margin-top: 6px;
    color: #999;
    font-size: 12px;
    line-height: 13px;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2; /* 限制为两行 */
    -webkit-box-orient: vertical;
  }
}
.weekend-look-more {
  margin: 6px 24px;
  border: 1px solid #3498db;
  color: #3498db;
  border-radius: 6px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  vertical-align: middle;
}
</style>
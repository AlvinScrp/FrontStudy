<template>
  <div>
    <div class="cost-item" v-for="(item, index) in costList" :key="index">
      <div class="item-title">{{ item.title }}</div>
      <div class="out">
        <div class="table-head">
          <div class="left box">类型</div>
          <div class="right box">说明</div>
        </div>
        <div class="table-items" v-for="(obj, index) in item.info" :key="index">
          <div class="table-item-key left box">{{ obj.key }}</div>
          <div class="table-item-texts right box">
            <div
              v-for="(text, index) in obj.value"
              :key="index"
              class="table-item-text"
            >
              {{ text }}
            </div>
          </div>
        </div>
      </div>

      <!-- <div v-html="item.htmlText" class="item-infos"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: { costDesc: Object },
  data() {
    return {};
  },

  computed: {
    costList() {
      if (!this.costDesc) return {};
      return [
        {
          title: "费用包含",
          htmlText: this.costDesc.costIncludeDesc,
          info: this.parseKVObjectListFromHtml(this.costDesc.costIncludeDesc),
        },
        {
          title: "费用不含",
          htmlText: this.costDesc.costIncludeDesc,
          info: this.parseKVObjectListFromHtml(this.costDesc.costExcludeDesc),
        },
        {
          title: "特殊人群",
          htmlText: this.costDesc.costIncludeDesc,
          info: [
            {
              key: "小孩",
              value: this.parseContentListFromHtml(this.costDesc.childDetail),
            },
            {
              key: "老人",
              value: this.parseContentListFromHtml(this.costDesc.elderDetail),
            },
          ],
        },
      ];
    },
  },
  methods: {
    parseKVObjectListFromHtml(htmlString) {
      const mappedTexts = [];
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, "text/html");
      const paragraphs = doc.querySelectorAll("p[data-oritext]");

      let currentKey = "";
      let currentValue = [];

      paragraphs.forEach((p) => {
        const oriText = p.getAttribute("data-oritext");
        if (oriText.startsWith("【") && oriText.endsWith("】")) {
          if (currentKey) {
            mappedTexts.push({ key: currentKey, value: currentValue });
          }
          currentKey = oriText.slice(1, -1);
          currentValue = [];
        } else {
          currentValue.push(oriText);
        }
      });

      if (currentKey) {
        mappedTexts.push({ key: currentKey, value: currentValue });
      }
      return mappedTexts;
    },
    parseContentListFromHtml(htmlString) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, "text/html");
      const paragraphs = doc.querySelectorAll("p[data-oritext]");

      let currentValue = [];
      paragraphs.forEach((p) => {
        const oriText = p.getAttribute("data-oritext");
        currentValue.push(oriText);
      });
      return currentValue;
    },
  },
};
</script>
<style lang='scss' scoped>
.cost-item {
  position: relative;
  background-color: white;
  padding: 12px;
  .item-title {
    height: 40px;
    font-size: 20px;
    font-weight: 700;
    color: #212121;
  }
  .table-head {
    position: relative;
    background-color: #f5f5f5;
    display: flex;
    color: #888888;
    flex-direction: row;
    align-items: center;
    font-size: 14px;

    div {
      height: 40px;
      line-height: 40px;
      text-align: center;
      vertical-align: middle;
    }
  }
  .table-items {
    position: relative;
    display: flex;
    flex-direction: row;

    .table-item-key {
      padding-top: 12px;
      text-align: center;
      color: #212121;
      font-size: 14px;
      font-weight: 700;
      line-height: 1.4;
    }
    .table-item-texts {
      padding: 12px;
      .table-item-text {
        text-align: start;
        color: #212121;
        font-size: 14px;
        line-height: 1.4;
      }
    }
  }
  .left {
    width: 80px;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .right {
    flex-grow: 1;
    flex-shrink: 1;
  }
  .box {
    position: relative;
    &::after {
      border: solid #e0e0e0;
      border-width: 1px 0 0 1px;
      content: "\0020";
      left: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      transform-origin: 0 0;
      z-index: 2;
    }
  }
  .out {
    position: relative;
    &::after {
      border: solid #e0e0e0;
      border-width: 0 1px 1px 0;
      content: "\0020";
      left: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      transform-origin: 0 0;
      z-index: 2;
    }
  }
}
</style>
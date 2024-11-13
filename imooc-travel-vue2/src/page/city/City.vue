<template>
  <div class="city">
    <div class="sticky-header">
      <div class="header">
        <i @click="handleBack" class="iconfont icon-back"></i>
        <div class="header-title">城市选择</div>
      </div>
      <div class="search-wrapper">
        <div class="search">
          <i class="iconfont icon-search"></i>
          <input
            class="search-input"
            v-model.trim="inputText"
            placeholder="输入城市名称或首字母"
          />
        </div>
      </div>
      <div class="current">当前：{{ current }}</div>
    </div>

    <div ref="city-list" class="city-list" @scroll="onScroll">
      <div
        :data-letter="name"
        v-for="(value, name) in cities"
        class="city-section"
        :key="name"
        :ref="'city-section-' + name"
      >
        <div class="city-letter">{{ name }}</div>
        <div
          v-for="city in value"
          class="city-list-item"
          @click="handleCityClick(city)"
          :key="city.id"
        >
          {{ city.name }}
        </div>
      </div>
    </div>
    <div class="city-indicator-wrapper">
      <div
        v-for="item in indicatorLetters"
        class="city-indicator"
        :class="[{ 'city-indicator-active': item.isActive }]"
        :key="item.letter"
        @click="onIndicatorClick(item.letter)"
      >
        {{ item.letter }}
      </div>
    </div>
    <div class="search-result" v-if="showSearchResult">
      <div
        v-for="city in searchResults"
        class="city-list-item city-list-item-search"
        @click="handleCityClick(city)"
        :key="city.id"
      >
        {{ city.name }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["current"],
  components: {},
  data() {
    return {
      hotCities: [],
      cities: {},
      currentLetter: "",
      indicatorLetters: [],
      inputText: "",
      flatCities: [],
      searchResults: [],
    };
  },
  mounted() {
    this.getCityInfo();
    console.log(this.current);
  },
  watch: {
    currentLetter: function (newLetter, oldLetter) {
      console.log("watch currentLetter", newLetter, oldLetter);
      let newItems = [...this.indicatorLetters];
      newItems.forEach((e) => (e.isActive = newLetter === e.letter));
      this.indicatorLetters.splice(0, newItems.length, ...newItems);
    },
    inputText: function (newText, oldText) {
      if (newText === oldText) {
        return;
      }
      console.log("inputText", newText);
      if (!newText || newText === "") {
        this.searchResults.splice(0, this.searchResults.length);
      } else {
        const newResults = this.flatCities.filter(
          (city) => city.name.includes(newText) || city.spell.includes(newText)
        );
        this.searchResults.splice(0, this.searchResults.length, ...newResults);
      }
    },
  },
  computed: {
    showSearchResult() {
      return this.searchResults && this.searchResults.length > 0;
    },
  },

  methods: {
    async getCityInfo() {
      try {
        let response = await axios.get("/api/city.json");
        let { hotCities, cities } = response.data.data;
        this.hotCities = hotCities;
        this.cities = cities;
        this.currentLetter = Object.keys(cities)[0];
        let curLetter = this.currentLetter;
        let indicators = this.indicatorLetters;
        let newIndicators = Object.keys(cities).map((letter) => {
          return { letter, isActive: letter === curLetter };
        });
        indicators.splice(0, indicators.length, ...newIndicators);

        let newFlatCities = Object.values(cities).flatMap((it) => it);
        this.flatCities.splice(0, newFlatCities.length, ...newFlatCities);
      } catch (error) {
        console.error("getCityInfo", error);
      }
    },

    onIndicatorClick(letter) {
      console.log("onIndicatorClick", letter);
      let ref = this.$refs["city-list"];
      let childRefs = this.$refs[`city-section-${letter}`];

      console.log(ref);
      console.log(childRefs);
      if (childRefs && childRefs[0]) {
        ref.scrollTop = childRefs[0].offsetTop;
      }
    },

    onScroll(event) {
      let scrollTop = event.target.scrollTop;
      let childNodes = event.target.childNodes;
      let scrollToLetter = null;
      for (let i = 0; i < childNodes.length; i++) {
        const node = childNodes[i];
        if (
          node.offsetTop <= scrollTop &&
          scrollTop < node.offsetTop + node.offsetHeight
        ) {
          scrollToLetter = node.getAttribute("data-letter");
          break;
        }
      }

      if (scrollToLetter) {
        let old = this.currentLetter;
        if (old !== scrollToLetter) {
          this.currentLetter = scrollToLetter;
        }
      }
    },
    handleCityClick(city) {
      console.log("handleCityClick", city);
      this.$store.commit("citychanged", city);
      this.$router.push("/");
    },
    handleBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang='scss' scoped>
@import "../../assets/variables.scss";
.city {
  color: black;
  background-color: #edf5f9;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  height: 100vh;
  .sticky-header {
    width: 100%;
    background-color: $bg-color;

    .header {
      display: flex;
      position: relative;
      align-items: center;

      width: 100%;
      height: 44px;

      .icon-back {
        width: 40px;
        height: 40px;
        font-size: 18px;
        line-height: 40px;
        color: #fff;
        text-align: center;
        vertical-align: middle;
      }

      .header-title {
        color: #fff;
        font-weight: 600;
        font-size: 18px;
        width: 295px;
        text-align: center;
        vertical-align: middle;
      }
    }
    .search-wrapper {
      width: 100%;
      padding: 0px 12px 12px 8px;

      .search {
        display: flex;
        height: 28px;
        align-items: center;
        background-color: white;
        border-radius: 16px;
        padding-left: 12px;
        padding-right: 12px;

        .icon-search {
          color: #cbdde6;
          font-size: 15px;
        }

        .search-input {
          color: #333;
          background: transparent;
          height: 28px;
          font-weight: 500;
          line-height: 28px;
          width: 300px;
          vertical-align: middle;
          margin-left: 6px;
          font-size: 15px;
          border: none;
          outline: none; /* 去除聚焦时的轮廓 */
        }
        ::placeholder {
          color: #cbdde6;
        }
      }
    }
    .current {
      height: 40px;
      font-size: 14px;
      width: 100%;
      background-color: #fff;
      display: flex;
      align-items: center;
      padding-left: 12px;
    }
  }

  .city-indicator-wrapper {
    position: absolute;
    top: 200px;
    right: 6px;
    z-index: 10;

    .city-indicator {
      color: #999;
      width: 36px;
      font-size: 15px;
      text-align: center;
      padding: 3px 0;
      &-active {
        font-size: 18px;
        font-weight: 500;
        color: $bg-color;
      }
    }
  }
  .city-list {
    position: relative;
    flex-grow: 1;
    overflow-y: auto;
    scrollbar-width: none;
    .city-letter {
      text-align: start;
      background-color: #edf5f9;
      position: sticky;
      top: 0;
      right: 0;
      left: 0;
      width: 100%;
      font-weight: 500;
      padding-left: 12px;
      color: #666;
      line-height: 20px;
      vertical-align: middle;
      font-size: 14px;
    }
  }
  .city-list-item {
    text-align: start;
    padding-left: 12px;
    background-color: #fff;
    height: 40px;
    line-height: 40px;
    vertical-align: middle;
    font-size: 14px;
  }
  .city-list-item-search {
    background-color: #edf5f9;
  }
  .search-result {
    background-color: white;
    position: absolute;
    left: 0;
    right: 0;
    top: 80px;
    overflow-y: auto;
    scrollbar-width: none;
    height: calc(100vh - 80px);
    width: 100%;

    z-index: 99;
  }
}
</style>
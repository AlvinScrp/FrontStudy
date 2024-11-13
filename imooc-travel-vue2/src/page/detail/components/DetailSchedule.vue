<template>
  <div class="schedule">
    <div class="schedule-title">{{ scheduleTitle }}</div>
    <div v-for="(tour, index) in tours" :key="index" class="schedule-tour">
      <div class="schedule-tour-left"></div>
      <div class="schedule-tour-right">
        <div class="tour-title-wrap">
          <img :src="tour.typeIcon" class="tour-title-icon" alt="" />
          <div class="tour-title">
            {{ tour.title }}
          </div>
        </div>
        <div class="tour-body">
          <div class="tour-content">{{ tour.content }}</div>
          <div v-if="tour.isVisit" class="tour-content">
            {{ tour.tourDesc }}
          </div>
          <div v-if="tour.location" class="tour-location">
            <img class="tour-location-image" :src="tour.location.image" />
            <div class="tour-location-right">
              <div class="tour-location-spot">{{ tour.location.spot }}</div>
              <div class="tour-location-address">
                {{ tour.location.address }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scheduleTitle: String,
    scheduleTours: Array,
  },
  components: {},
  data() {
    return {
      mealIcon:
        "https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/13/f9bc9e8d-3054-4338-bbfc-2bb82dcea34a__0KB____size48x48.png",
      visitIcon:
        "https://cdn.webuy.ai/base-service-webserver/78502005/assets/img/2024/11/13/927dacb0-6432-418f-a6a1-003f1196a915__0KB____size48x48.png",
    };
  },
  computed: {
    tours() {
      let result = [];
      if (this.scheduleTours) {
        this.scheduleTours.forEach((item) => {
          let typeDesc = "";
          if (item.type === "meal") {
            typeDesc =
              item.data.mtype === "breakfast"
                ? "早餐"
                : item.data.mtype === "lunch"
                ? "午餐"
                : item.data.mtype === "dinner"
                ? "晚餐"
                : "夜宵";
          } else if (item.type === "visit") {
            typeDesc = "景点";
          } else {
            typeDesc = "其他";
          }
          let content =
            item.type === "meal"
              ? "(敬请自理)"
              : item.type === "other"
              ? item.data.desc
              : item.type === "visit"
              ? item.data.description
              : "";

          let typeIcon = item.type === "meal" ? this.mealIcon : this.visitIcon;

          let tourDetails = item.data.tourDetails;
          console.log(tourDetails);

          let location = null;
          if (tourDetails) {
            location = {
              spot: tourDetails.tourSpot,
              address: tourDetails.tourAddress,
              image: tourDetails.tourImages,
            };
          }

          console.log(item.type, location);

          result.push({
            typeIcon: typeIcon,
            title: `${item.time} ${typeDesc}`,
            content: content,
            tourDesc: tourDetails?.tourDesc,
            isVisit: item.type === "visit",
            location: location,
          });
        });
      }
      return result;
    },
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.schedule {
  padding: 12px;
  background-color: white;
  .schedule-title {
    color: #212121;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .schedule-tour {
    line-height: 1.4;
    text-align: left;
    margin-top: 10px;

    .schedule-tour-right {
      .tour-title-wrap {
        display: flex;
        flex-direction: row;

        .tour-title-icon {
          width: 16px;
          height: 16px;
          margin-top: 2px;
          margin-left: 4px;
          margin-right: 10px;
        }
        .tour-title {
          color: #212121;
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 5px;
        }
      }
      .tour-body {
        padding-bottom: 10px;
        position: relative;
        &::after {
          border: solid #eee;
          border-width: 0 0 0 1px;
          content: "\0020";
          left: 10px;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          transform-origin: 0 0;
          z-index: 2;
        }
        .tour-content {
          padding-left: 30px;

          color: #616161;
          font-size: 14px;
          margin-bottom: 5px;
        }
        .tour-location {
          margin-left: 30px;
          height: 118px;
          background-color: #fafafa;
          width: 296px;
          display: flex;
          flex-direction: row;

          .tour-location-image {
            flex-grow: 0;
            width: 80px;
            height: 118px;
            object-fit: cover;
          }
          .tour-location-right {
            margin-top: 12px;
            margin-left: 12px;
            .tour-location-spot {
              color: #212121;
              font-size: 15px;
            }
            .tour-location-address {
              margin-top: 6px;
              color: #848484;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
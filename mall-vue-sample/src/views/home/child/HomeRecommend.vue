<template>
    <div class="recommend-container">
        <a
            class="recommend-item"
            v-for="(recommend, index) in recommends"
            :key="index"
            :href="recommend.link">
            <img :src="recommend.image" :alt="recommend.title" />
            <p>{{ recommend.title }}</p>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        recommends: {
            type: Array,
            required: true
        }
    },
    data () {
        return {}
    },
    methods: {}
}
</script>
<style scoped>
.recommend-container {
  display: flex;
  padding-top: 3vw;
  padding-left: 2vw;
  padding-bottom: 2vw;
}
.recommend-item {
  width: 24vw;
  text-align: center;
}
.recommend-item img {
  width: 21vw;
  height: 21vw;
}
.recommend-item p {
  padding-top: 2vw;
  font-size: 13px;
  color:#939393;
}
</style>

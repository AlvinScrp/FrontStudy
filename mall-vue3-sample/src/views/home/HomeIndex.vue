<template>
    <div class="home" ref="homeRef">
        <home-banner :banners="banners" />
        <home-recommend :recommends="recommends" />
        <van-sticky @change="stickyChange">
            <home-goods-indicator
                :goods-type-infos="goodsTypeInfos"
                :index="currentGoodsTypeIndex"
                @tabClick="onTabClick"
            />
        </van-sticky>
        <goods-feed :goods-type-index="currentGoodsTypeIndex" />
        <div class="home-goods-indicator-divider"></div>
    </div>
</template>

<script lang="ts"  setup>

import { onMounted, ref, watch, effect } from 'vue'

import { goodsTypeInfos } from '@/common/const'
import * as homeHttp from '@/network/home'
import { Banner, Recommend } from '@/common/bean'
import HomeBanner from '@/views/home/child/HomeBanner.vue'
import HomeRecommend from '@views/home/child/HomeRecommend.vue'
import HomeGoodsIndicator from '@views/home/child/HomeGoodsIndicator.vue'
import GoodsFeed from '@views/home/child/GoodsFeed.vue'
import { Sticky as VanSticky } from 'vant'
import 'swiper/css'

const homeRef = ref()
let isStickyFixed = false
let scrollTop = 0
let banners = ref<Banner[]>()
let recommends = ref<Recommend[]>()
let currentGoodsTypeIndex = ref(0)

const onTabClick = (index: number) => {
    if (isStickyFixed && homeRef.value) {
        homeRef.value.scrollTop = scrollTop
    }
    currentGoodsTypeIndex.value = index
}
const stickyChange =
    (isFixed: boolean) => {
        isStickyFixed = isFixed
        if (isFixed && scrollTop <= 0) {
            scrollTop = homeRef.value.scrollTop
        }
    }

onMounted(async () => {
    console.log('onMounted')
    let homeData = await homeHttp.getHomeMultiData()
    banners.value = homeData.banner.list
    recommends.value = homeData.recommend.list
})

</script>
<style lang="less" scoped>
.home {
    width: 100vw;
    top: 0px;
    bottom: var(--tabbar-height);
    position: absolute;
    overflow: scroll;
}
.home::-webkit-scrollbar {
    display: none;
}
</style>

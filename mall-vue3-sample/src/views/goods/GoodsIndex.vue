<template>
    <section class="goods" ref="goods">
        <div class="indicator" ref="indicatorContainer">
            <goods-indicator
                @tabClick="indictorClick"
                :active-index="activeIndex"
                :style="{ opacity: indicatorOapcity }"
            ></goods-indicator>
        </div>
        <section class="content">
            <goods-slider ref="slider" :banners="goodsSliderBanner"></goods-slider>
            <goods-activity v-if="goodsDetail" :goodsDetail="goodsDetail"></goods-activity>
            <goods-vip :vip="goodsVip"></goods-vip>
            <goods-intro-area v-if="goodsDetail" :goodsDetail="goodsDetail"></goods-intro-area>
            <goods-resource-banner></goods-resource-banner>
            <goods-user-review></goods-user-review>
            <goods-recommend></goods-recommend>
            <div ref="detailArea">
                <goods-detail-area :detailHtml="detailHtml"></goods-detail-area>
            </div>
        </section>
        <goods-bottom-option class="bottom-option"></goods-bottom-option>
    </section>
</template>

<script lang="ts" setup>
import * as detailHttp from '@/network/goodsDetail'
import GoodsIndicator from '@/views/goods/child/GoodsIndicator.vue'
import GoodsSlider from '@/views/goods/child/GoodsSlider.vue'
import GoodsActivity from '@/views/goods/child/GoodsActivity.vue'
import GoodsVip from '@/views/goods/child/GoodsVip.vue'
import GoodsIntroArea from '@/views/goods/child/GoodsIntroArea.vue'
import GoodsResourceBanner from '@/views/goods/child/GoodsResourceBanner.vue'
import GoodsUserReview from '@/views/goods/child/GoodsUserReview.vue'
import GoodsDetailArea from '@/views/goods/child/GoodsDetailArea.vue'
import GoodsRecommend from '@/views/goods/child/GoodsRecommend.vue'
import GoodsBottomOption from '@/views/goods/child/GoodsBottomOption.vue'
import { ref, computed, onMounted, ComputedRef, Ref, watchEffect, effect, watch } from 'vue'
import { GoodsDetailBean, GoodsVipBean } from '@/common/bean'
import { useScroll } from '@vueuse/core'
const id = ref(20117)
const detailHtml = ref('')
const detailHtmlLoaded = ref(false)
const goodsDetail = ref<GoodsDetailBean>()
const goodsSliderBanner = useBanner(goodsDetail)
const goodsVip = useVip(goodsDetail)
const goods = ref<HTMLElement | null>(null)
const indicatorContainer = ref<HTMLElement | null>(null)
const detailArea = ref<HTMLElement | null>(null)
console.log(this)
const { indicatorOapcity, indictorClick, activeIndex } = useIndicator(goods, indicatorContainer, detailArea)

onMounted(() => loadGoodsDetail())

async function loadGoodsDetail() {
    if (id.value) {
        goodsDetail.value = await detailHttp.getGoodsDetail(id.value)
        detailHtml.value = await detailHttp.getGoodsRichText(id.value, 300)
        detailHtmlLoaded.value = true
    }
}

function useBanner(goodsDetail: Ref<GoodsDetailBean | undefined>) {
    return computed(() => {
        const name = goodsDetail.value?.name || ''
        return goodsDetail.value?.pictures.map((pic) => ({ image: pic, title: name }))
    })
}
function useVip(goodsDetail: Ref<GoodsDetailBean | undefined>): ComputedRef<GoodsVipBean> {
    return computed(() => ({
        sellPrice: goodsDetail?.value?.sellPrice || 0,
        memberPrice: goodsDetail?.value?.priceMap.memberPrice || 0,
        discount: {
            forMember: 1400,
            forFirstOrder: 3000,
        },
        memberRightsUrl: 'https://www.baidu.com',
    }))
}
function useIndicator(goods: Ref<HTMLElement | null>, indicatorContainer: Ref<HTMLElement | null>, detailArea: Ref<HTMLElement | null>) {
    const { y } = useScroll(goods)
    const indicatorOapcity = computed(() => Math.min(y.value + 50, 200) / 200.0)
    const genTop = () => (detailArea?.value?.offsetTop ?? 0) - (indicatorContainer?.value?.offsetHeight ?? 0)
    const indictorClick = (index: number) => goods.value?.scrollTo(0, index == 1 ? genTop() : 0)
    const activeIndex = computed(() => y.value >= genTop() ? 1 : 0)
    return { indicatorOapcity, indictorClick, activeIndex }
}

</script>
<style lang="less" scoped>
.goods {
    width: 100vw;
    top: 0px;
    bottom: 0px;
    position: absolute;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #fff;

    .indicator {
        z-index: 9;
        position: fixed;
        width: 100vw;
    }

    .goodsInfo {
        word-break: break-all;
        width: 100vw;
    }

    .bottom-option {
        position: fixed;
        bottom: 0rem;
    }
}
.goods::-webkit-scrollbar {
    display: none;
}
</style>

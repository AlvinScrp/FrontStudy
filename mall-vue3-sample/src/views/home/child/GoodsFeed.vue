<template>
    <van-list :loading="loading" :finished="finished" finished-text="没有更多了xxx" @load="onLoad">
        <div class="goods-container" v-if="goodsOnShow && goodsOnShow.length > 0">
            <a
                class="goods-item"
                v-for="(goods, index) in goodsOnShow"
                :key="index"
                @click="itemClick(goods)"
            >
                <img :src="goods.image" />
                <p class="title1">{{ goods.title1 }}</p>
                <p class="title2">{{ goods.title2 }}</p>
                <div class="bottom">
                    <span class="price-container">
                        ￥
                        <span class="price">{{ priceFormat(goods) }}</span>
                    </span>
                    <img class="shopcart" src="@assets/img/common/icon_shopcart.png" />
                </div>
            </a>
        </div>
        <div v-else class="goods-empty"></div>
    </van-list>
</template>
<script lang="ts" setup>

import { Goods } from '@common/bean'
import { goodsTypeInfos } from '@/common/const'
import { useRouter } from 'vue-router'
import { defineProps, ref, withDefaults, computed, watchEffect } from 'vue'
import * as homeHttp from '@/network/home'
import { List as VanList } from 'vant'
const props = withDefaults(defineProps<{ goodsTypeIndex: number }>(), { goodsTypeIndex: 0 })

let goodsValue: Array<{ page: number, list: Goods[], finished: boolean }> = []
// eslint-disable-next-line @typescript-eslint/no-unused-vars
for (const _ in goodsTypeInfos) goodsValue.push({ page: 0, list: [], finished: false })
let goods = ref(goodsValue)
let goodsOnShow = computed(() => (goods.value[props.goodsTypeIndex].list))

const loading = ref(false)
const finished = ref(false)

let goodsTypeIndex = -1

const onLoad = () => {
    if (loading.value) return
    loading.value = true
    const index = props.goodsTypeIndex
    if (!goods.value[index].finished) {
        const type = goodsTypeInfos[index].type
        const page = goods.value[index].page
        console.log('onload', page)
        homeHttp.getGoodsData(type, page).then(res => {
            let goodsList = res
            console.log('onload result goodsList', goodsList)
            if (goodsList) {
                goods.value[index].page++
                goods.value[index].list.push(...goodsList)
            } else {
                finished.value = true
                goods.value[index].finished = true
            }
            console.log('onload result')
            loading.value = false

        })
    } else {
        loading.value = false
        finished.value = true
    }
}
watchEffect(() => {
    const newIndex = props.goodsTypeIndex
    console.log(`watchEffect props.goodsTypeIndex ${newIndex}`)
    finished.value = goods.value[newIndex].finished
    if (goodsTypeIndex != newIndex) {
        goodsTypeIndex = newIndex
        onLoad()
    }

})
const priceFormat = (goods: Goods) => `${goods.sellPrice / 100.0}`
const itemClick = (goods: Goods) => {
    // const router = useRouter()
    // router.push({ path: '/goods' })
    console.log('goods onclick', goods)
}
</script>
<style lang="less" scoped>
.goods-container {
    background-color: #f6f8fb;
    display: flex;
    flex-wrap: wrap;
    padding: 1vw 2vw;
    justify-content: space-between;
}
.goods-item {
    position: relative;
    box-sizing: border-box;
    background-color: white;
    width: 46vw;
    height: 69vw;
    margin: 1vw;
    // border: 5px  solid red;
    border-radius: 8px;

    img {
        width: 100%;
    }
    .title1 {
        margin: 3px 4px;
        font-size: 14px;
        line-height: 14px;
        color: #212121;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .title2 {
        margin: 6px 4px;
        font-size: 12px;
        line-height: 12px;
        color: #939393;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .bottom {
        position: relative;
        width: 100%;

        .price-container {
            margin-left: 8px;
            font-size: 10px;
            color: red;
            line-height: 34px;
            font-weight: 500;
            vertical-align: baseline;
        }
        .price {
            font-size: 16px;
        }
        .shopcart {
            position: absolute;
            right: 8px;
            width: 34px;
            height: 34px;
            padding: 5px;
        }
    }
}
.goods-empty {
    height: 1000px;
    width: 100vw;
}
</style>

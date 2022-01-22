<template>
    <div class="intro">
        <div class="name-container">
            <span class="name">{{ intro.name }}</span>
            <span class="sales">{{ fromatSales(intro.sales) }}</span>
        </div>
        <p class="sub-name">{{ intro.subName }}</p>
        <div class="labels">
            <span
                class="label"
                v-for="(label, index) in intro.labels"
                :key="index"
            >{{ label.labelName }}</span>
        </div>
        <div class="tags">
            <span class="tag" v-for="(goodsTag, index) in goodsTagsExtend" :key="index">
                <i class="iconfont mall-circle-right"></i>
                {{ goodsTag.tagName }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { GoodsDetailBean } from '@/common/bean'
import { defineProps, ref, computed } from 'vue'
const props = defineProps<{ goodsDetail: GoodsDetailBean }>()
const intro = ref(props.goodsDetail)
const goodsTagsExtend = computed(() => {
    const extendTags = [{ tagName: '假一赔十' }, { tagName: '权威检测' }]
    if (intro.value.goodsTags) extendTags.push(...intro.value.goodsTags)
    return extendTags
})

const fromatSales = (value: number) => {
    const valueStr = value > 10000 ? `${(value / 10000.0).toFixed(1)}万` : `${value}`
    return `已售${valueStr}`
}
</script>
<style lang="less" scoped>
.intro {
    margin-top: 0.12rem;

    .name-container {
        margin-left: 0.1rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        .name {
            display: inline-block;
            flex-flow: 1;

            height: 0.22rem;
            line-height: 0.22rem;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            color: #222;
            font-size: 0.17rem;
            font-weight: 700;
            font-family: "PingFangSC-Regular";
        }
        .sales {
            display: inline-block;
            margin-left: 0.1rem;
            line-height: 0.22rem;
            height: 0.22rem;
            border-radius: 0.1rem 0 0 0.1rem;
            white-space: nowrap;
            color: #ee8e93;
            font-size: 0.12rem;
            width: auto;
            vertical-align: middle;
            padding: 0 0.1rem 0 0.06rem;
            // background-color: green;
            background-color: rgba(255, 79, 88, 0.06);
        }
    }
    .sub-name {
        margin-left: 0.1rem;
        margin-top: 0.06rem;
        margin-right: 0.1rem;
        font-family: "PingFangSC-Regular";
        color: #666;
        font-size: 0.14rem;
    }

    .labels {
        display: flex;
        margin-top: 0.05rem;
        flex-wrap: wrap;

        .label {
            display: inline-block;
            border-radius: 0.12rem;
            line-height: 0.12rem;
            font-size: 0.12rem;
            height: 0.24rem;
            background-color: #f3f5f7;
            box-sizing: border-box;
            padding: 0.06rem 0.1rem;
            color: #999;
            margin: 0.03rem 0.05rem;
        }
    }
    .labels:after {
        content: "";
        height: 0.1rem;
        width: 100%;
        border-bottom: 0.01rem solid #f6f6f6;
    }

    .tags {
        display: flex;
        margin-top: 0.05rem;
        flex-wrap: wrap;

        .tag {
            color: #666;
            font-size: 0.12rem;
            display: inline-block;
            line-height: 0.2rem;
            box-sizing: border-box;
            height: 0.2rem;
            margin: 0.08rem 0.1rem;

            i {
                display: inline-block;
                font-size: 0.12rem;
                margin-right: 0.05rem;
                color: rgb(241, 98, 122);
                vertical-align: middle;
                margin-bottom: 0.02rem;
            }
        }
    }
}
</style>

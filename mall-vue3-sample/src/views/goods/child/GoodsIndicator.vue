<template>
    <van-tabs class="tabs" :active="activeIndex" @click-tab="tabClick">
        <van-tab :title="item.label" v-for="(item,index) in items" :key="index"></van-tab>
    </van-tabs>
</template>

<script lang="ts" setup>
import { Tab as VanTab, Tabs as VanTabs } from 'vant'
import { defineEmits, defineProps } from 'vue'
defineProps<{ activeIndex: number }>()
// const activeIndex = ref(props.activeIndex)
const items = [
    { label: '商品', index: 0 },
    // { label: '评价', index: 1 },
    { label: '详情', index: 1 },
    // { label: '推荐', index: 3 }
]
const emit = defineEmits<{ (e: 'tabClick', index: number): void }>()
const tabClick = (index: { name: number }) => emit('tabClick', index.name)
</script>
<style lang="less"  scoped>
</style>

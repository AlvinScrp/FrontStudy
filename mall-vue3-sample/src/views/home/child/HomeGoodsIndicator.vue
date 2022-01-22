<template>
    <van-tabs
        class="tabs"
        v-model:active="activeIndex"
        @click-tab="tabClick"
        sticky
        offset-top="100"
    >
        <van-tab :title="item.label" v-for="(item,index) in goodsTypeInfos" :key="index"></van-tab>
    </van-tabs>
</template>

<script lang="ts" setup>
import { Tab as VanTab, Tabs as VanTabs } from 'vant'
import { ref, defineProps, defineEmits } from 'vue'
const props = defineProps<{ goodsTypeInfos: { label: string }[], index: number }>()
console.log(props, 'props')
const activeIndex = ref(props.index)
const emit = defineEmits<{
    (e: 'tabClick', index: number): void
}>()
const tabClick = (index: { name: number }) => emit('tabClick', index.name)


</script>
<style lang="less"  scoped>
</style>

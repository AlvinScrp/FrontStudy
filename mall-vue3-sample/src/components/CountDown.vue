<template>
    <p class="count-down">
        <span class="number">{{ formatNumber(text.day) }}</span>
        <span class="number-split">:</span>
        <span class="number">{{ formatNumber(text.hour) }}</span>
        <span class="number-split">:</span>
        <span class="number">{{ formatNumber(text.minute) }}</span>
        <span class="number-split">:</span>
        <span class="number">{{ formatNumber(text.second) }}</span>
    </p>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, ref, onMounted } from 'vue'
import { useIntervalFn } from '@vueuse/core'

const props = withDefaults(defineProps<{ endTime: number }>(), { endTime: 0 })
const text = ref({ day: 0, hour: 0, minute: 0, second: 0 })
const { pause, resume: startTimer } = useIntervalFn(() => {
    const now = new Date().getTime()
    const time = (props.endTime - now) / 1000
    const day = time / 86400
    const hour = (time % 86400) / 3600
    const minute = (time % 3600) / 60
    const second = time % 60
    text.value = { day, hour, minute, second }
},
    1000)
const formatNumber = function (number: number) {
    if (!number) return ''
    const value = Math.floor(number)
    return (value < 10 ? '0' : '') + value
}
onMounted(() => startTimer())
</script>
<style lang="less" scoped>
.count-down {
    font-size: 0.13rem;
    margin-top: 0.03rem;
    .number {
        display: inline-block;
        padding: 0.03rem;
        box-sizing: border-box;
        border-radius: 0.03rem;
        border: 1px solid white;
    }
    .number-split {
        display: inline-block;
        padding: 0.02rem;
    }
}
</style>

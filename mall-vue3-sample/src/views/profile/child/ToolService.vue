<template>
    <div class="tools-wrap">
        <p class="title">工具与服务</p>
        <div class="split"></div>
        <div class="tools">
            <div v-for="(tool,index) in tools" :key="index" class="tool">
                <img class="tool-image" :src="tool.image" />
                <p class="tool-label">{{ tool.label }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ToolItemBean } from '@/common/bean'
import { profileData } from '@/network/profile'
import { ref } from '@vue/reactivity'
import { onMounted } from 'vue'
const tools = ref<ToolItemBean[]>()

onMounted(() => {
    setTimeout(() => {
        tools.value = profileData.tools
    }, 200)
})

</script>
<style lang='less' scoped>
.tools-wrap {
    position: relative;
    margin-top: 0.15rem;
    background-color: white;
    border-radius: 0.15rem;
    padding: 0.1rem 0.07rem;
    .title {
        margin-left: 0.15rem;
        color: #444;
        font-size: 0.14rem;
        font-weight: 600;
    }
    .split {
        margin-left: 0.15rem;
        margin-top: 0.12rem;
        height: 1px;
        background: #f2f2f2;
    }
    .tools {
        display: flex;
        flex-wrap: wrap;
        .tool {
            width: 0.9rem;
            display: flex;
            padding: 0.15rem 0;
            flex-direction: column;
            align-items: center;
            .tool-image {
                width: 0.35rem;
                height: 0.35rem;
            }
            .tool-label {
                margin-top: 0.1rem;
                font-size: 0.12rem;
            }
        }
    }
}
</style>

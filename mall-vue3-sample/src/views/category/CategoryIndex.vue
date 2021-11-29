<template>
    <div class="category">
        <div class="title">分类</div>
        <div class="body">
            <div class="tab">
                <div
                    class="tab-item"
                    :class="{ 'item-active': index === activeIndex }"
                    v-for="(tab,index) in tabs"
                    :key="index"
                    @click="activeIndex = index"
                >
                    <span class="tab-text">{{ tab }}</span>
                </div>
            </div>
            <div class="content">
                <div
                    class="branch-section"
                    v-for="(section,index) in branchSectionsOnShow"
                    :key="index"
                >
                    <div class="section-title">{{ section.title }}</div>
                    <div class="branch-container">
                        <div v-for="(branch,index) in section.branchs" :key="index" class="branch">
                            <img class="branch-image" :src="branch.image" alt />
                            <p class="branch-name">{{ branch.name }}</p>
                        </div>
                    </div>
                </div>
                <div style="height:100px;text-align:center;">-- 见底了 --</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { categoryData } from '@/network/category'
const tabs = ref<string[]>()
const activeIndex = ref(1)
const branchSectionsOnShow = computed(() => {
    const realIndex = activeIndex.value % categoryData.branchSectionsList.length
    return categoryData.branchSectionsList[realIndex]
})
onMounted(() => tabs.value = categoryData.tabs)
</script>
<style lang="less" scoped>
.category {
    width: 100vw;
    position: absolute;
    top: 0;
    bottom: var(--tabbar-height);
    flex-direction: column;

    .title {
        line-height: 0.42rem;
        width: 100%;
        height: 0.42rem;
        text-align: center;
        border-bottom: #eee 1px solid;
    }
    .body {
        position: absolute;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 3.75rem;
        height: 100%;
        background-color: #f8f8f8;

        .tab {
            overflow: scroll;
            width: 0.85rem;
            flex-shrink: 0;
            height: 100%;
            .tab-item {
                width: 100%;
                text-align: center;
                background-color: #f8f8f8;

                .tab-text {
                    line-height: 0.46rem;
                    font-size: 0.14rem;
                    color: 333px;
                }
            }
            .item-active {
                color: #e93b3d !important;
                background-color: white;
            }
        }
        .content {
            flex-shrink: 1;
            background-color: white;
            overflow: scroll;
            height: 100%;
            width: 100%;
            padding: 0.19rem 0.07rem 0 0.07rem;

            .section-title {
                font-size: 0.14rem;
                color: #333;
                font-weight: 700;
            }
            .branch-container {
                margin: 0.09rem 0 0;
                padding: 0.07rem 0.1rem 0;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                .branch {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 0.83rem;
                    height: 1.07rem;
                    .branch-image {
                        width: 0.7rem;
                        height: 0.7rem;
                    }
                    .branch-name {
                        margin-top: 0.02rem;
                        font-size: 0.12rem;
                    }
                }
            }
        }
        .tab::-webkit-scrollbar {
            display: none;
        }
        .content::-webkit-scrollbar {
            display: none;
        }
    }
}
</style>


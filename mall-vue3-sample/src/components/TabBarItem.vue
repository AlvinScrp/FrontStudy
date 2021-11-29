<template>
    <div class="tab-bar-item">
        <img class="image" v-show="isActive" :src="tabItem.iconActive" />
        <img class="image" v-show="!isActive" :src="tabItem.icon" />
        <p :class="{ active: isActive }">{{ tabItem.title }}</p>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        tabItem: {
            type: Object,
            default: () => ({ iconActive: '', icon: '', title: '' })
        },
        isActive: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {};
    }
};
</script>
<style lang="less" scoped>
.tab-bar-item {
    flex: 1;
    font-size: 0.12rem;
    color: #666;

    .image {
        margin-top: 0.04rem;
        margin-bottom: 0.02rem;
        width: 0.2rem;
        height: 0.2rem;
    }
}
.active {
    color: #d81e06;
}
</style>

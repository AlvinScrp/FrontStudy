<template>
    <div class="tab-bar-item">
        <img class="image" v-show="isActive" :src="tabItem.iconActive" />
        <img class="image" v-show="!isActive" :src="tabItem.icon" />
        <p :class="{ active: isActive }">{{ tabItem.title }}</p>
    </div>
</template>

<script>
export default {
    props: {
        tabItem: {},
        isActive: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {}
    }
}
</script>
<style scoped>
.tab-bar-item .image {
    width: 20px;
    height: 20px;
    margin-top: 6px;
    margin-bottom: 2px;
}
.tab-bar-item {
    flex: 1;
    font-size: 11px;
    color: #666;
}
.active {
    color: #d81e06;
}
</style>

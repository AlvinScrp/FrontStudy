<template>
    <div id="app" class="app" ref="app">
        <div class="router-container">
            <router-view v-slot="{ Component }">
                <keep-alive exclude="Detail">
                    <component :is="Component" />
                </keep-alive>
            </router-view>
        </div>
        <app-tab-bar />
    </div>
</template>

<script lang="ts" setup>
import AppTabBar from '@views/app/AppTabBar.vue'
</script>
<style src="@assets/css/base.css"></style>
<style lang="less" scoped>
.router-container {
    position: absolute;
    top: 0px;
    bottom: 0px;
}
.app {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
</style>

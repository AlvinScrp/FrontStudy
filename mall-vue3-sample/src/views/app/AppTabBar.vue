<template>
    <div class="tab-bar" v-show="shwoTabBar">
        <tab-bar-item
            v-for="(tabItem, index) in appTabItems"
            v-bind:key="index"
            v-bind:tabItem="tabItem"
            v-bind:isActive="isActive(index)"
            v-on:click="clickItem(index)"
        ></tab-bar-item>
    </div>
</template>

<script lang="ts">
import TabBarItem from '@components/TabBarItem.vue'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

// interface AppTabItem {
//     title: string;
//     icon: string;
//     iconActive: string;
//   }

export default defineComponent({
    components: { TabBarItem },
    setup() {
        const appTabItems = [
            {
                title: '首页',
                icon: 'img/tabbar/home.png',
                iconActive: 'img/tabbar/home_active.png'
            },
            {
                title: '分类',
                icon: 'img/tabbar/category.png',
                iconActive: 'img/tabbar/category_active.png'
            },
            {
                title: '购物车',
                icon: 'img/tabbar/shopcart.png',
                iconActive: 'img/tabbar/shopcart_active.png'
            },
            {
                title: '我的',
                icon: 'img/tabbar/profile.png',
                iconActive: 'img/tabbar/profile_active.png'
            }
        ]
        const paths = ['/home', '/category', '/shopcart', '/profile']

        let activeIndex = ref(0)
        let shwoTabBar = ref(true)
        const router = useRouter()
        router.afterEach((to, from) => {
            const index = paths.findIndex(path => path === to.path)
            if (index >= 0) {
                activeIndex.value = index
            }
            const show = to.path !== '/goods'
            if (show != shwoTabBar.value) {
                shwoTabBar.value = show
            }
        })
        let clickItem = (index: number) =>
            activeIndex.value === index || router.push(paths[index])
        let isActive = (index: number) => index === activeIndex.value
        return {
            appTabItems,
            shwoTabBar,
            clickItem,
            isActive
        }
    }
})
</script>
<style scoped>
.tab-bar {
    background-color: #f6f6f6;
    height: var(--tabbar-height);
    border-top: 1px solid #eee;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;
}
</style>

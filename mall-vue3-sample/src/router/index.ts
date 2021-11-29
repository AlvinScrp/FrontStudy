import HomeIndex from '@views/home/HomeIndex.vue'
import { createRouter, createWebHashHistory, Router } from 'vue-router'

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: HomeIndex
        },
        {
            path: '/category',
            name: 'Category',
            component: () => import('@views/category/CategoryIndex.vue')
        },
        {
            path: '/shopcart',
            name: 'Shopcart',
            component: () => import('@views/shopcart/ShopcartIndex.vue')
        },
        {
            path: '/profile',
            name: 'Profile',
            component: () => import('@views/profile/ProfileIndex.vue')
        },
        {
            path: '/goods',
            name: 'Goods',
            component: () => import('@views/goods/GoodsIndex.vue')
        }
    ]
})

export default router

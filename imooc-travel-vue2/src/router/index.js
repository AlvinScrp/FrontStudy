import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../page/home/Home.vue';
import CityView from '../page/city/City.vue';
import DetailView from '../page/detail/Detail.vue';

Vue.use(VueRouter);

// 添加路由名称，便于调试
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/city',
    name: 'city',
    component: CityView,
    props: route => ({ current: route.query.current })
  },
  {
    path: '/detail',
    name: 'detail',
    component: DetailView,
  }
];

// 根据运行环境设置不同的base和mode
// const isWujie = window.__POWERED_BY_WUJIE__;
const isQiankun = window.__POWERED_BY_QIANKUN__;

let base = '/';
let mode = 'history';

// if (isWujie) {
//   base = '/travel/';
// } else
if (isQiankun) {
  base = '/travel';
}

console.log('路由配置:', { base, mode,/* isWujie,*/ isQiankun });

const router = new VueRouter({
  mode,
  base,
  routes
});

// 添加全局前置守卫，用于调试
router.beforeEach((to, from, next) => {
  console.log('路由跳转:', { from: from.path, to: to.path });
  next();
});

export default router;

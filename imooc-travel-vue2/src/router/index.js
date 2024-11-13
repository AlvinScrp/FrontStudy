import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../page/home/Home.vue';
import CityView from '../page/city/City.vue';
import DetailView from '../page/detail/Detail.vue';

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/city',
    component: CityView,
    props: route => ({ current: route.query.current })
  },
  {
    path: '/detail',
    component: DetailView,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

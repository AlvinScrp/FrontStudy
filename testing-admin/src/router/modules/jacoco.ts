import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/jacoco/deploy-jobs',
  //   meta: { title: 'jacoco', icon: 'el-icon-document-copy' },
  // },
  {
    path: '/jacoco',
    component: Layout,
    redirect: '/jacoco/deploy-jobs',
    meta: { title: 'jacoco', icon: 'el-icon-document-copy' },
    alwayShow: true,
    children: [
      {
        path: 'deploy-jobs',
        component: createNameComponent(() => import('@/views/main/jacoco/deployJobs/deployJobList.vue')),
        meta: { title: '应用配置', cache: true, roles: ['admin', 'editor'] },
      },
      {
        path: 'services',
        component: createNameComponent(() => import('@/views/main/jacoco/services/serviceList.vue')),
        meta: { title: '服务管理', cache: true, roles: ['admin'] },
      },
      {
        hideMenu: false,
        path: 'cov-tasks',
        component: createNameComponent(() => import('@/views/main/jacoco/covTasks/covTaskList.vue')),
        meta: { title: '覆盖率任务', cache: false, roles: ['admin'] },
      },
    ],
  },
]

export default route

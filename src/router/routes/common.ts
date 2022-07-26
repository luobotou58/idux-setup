import { IduxLayout } from './../../layout/index'
import type { RouteRecordRaw } from 'vue-router'

const routeName = 'todolist'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/login/Index.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      title: '注册',
    },
    component: () => import('@/views/register/Index.vue'),
  },
  {
    path: '/other',
    name: 'other',
    meta: {
      title: '其他',
    },
    redirect: '/todolist/Index',
    component: IduxLayout,
    children: [
      {
        path: 'todolist',
        name: `${routeName}`,
        meta: {
          title: '待办事项',
          sort: 0,
          icon: 'tags',
        },
        component: () => import('@/views/todolist/Index.vue'),
      },
    ],
  },
]
export default routes

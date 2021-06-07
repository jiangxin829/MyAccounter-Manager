import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login')
  },
  {
    path: '/home',
    name: 'Home',
    component: Main,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/home')
      }
    ]
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Main,
    children: [
      {
        path: '/statistics',
        name: 'Statistics',
        component: () => import('../views/apps/statistics/statistics')
      }
    ]
  },
  {
    path: '/system',
    name: 'System',
    component: Main,
    children: [
      {
        path: '/user',
        name: 'User',
        component: () => import('../views/apps/system/user/user')
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import('../views/apps/system/setting/setting')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

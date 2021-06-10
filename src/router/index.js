import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import ParentView from '../views/parent-view'

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
    meta: {
      title: '主页'
    },
    component: Main,
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '主页'
        },
        component: () => import('../views/home/home')
      },
      {
        path: '/statistics',
        name: 'Statistics',
        meta: {
          title: '数据统计'
        },
        component: () => import('../views/apps/statistics/statistics')
      },
      {
        path: '/system',
        name: 'System',
        meta: {
          title: '系统管理'
        },
        component: ParentView,
        children: [
          {
            path: 'user',
            name: 'User',
            meta: {
              title: '用户管理"'
            },
            component: () => import('../views/apps/system/user/user')
          },
          {
            path: 'setting',
            name: 'Setting',
            meta: {
              title: '设置'
            },
            component: () => import('../views/apps/system/setting/setting')
          },
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(!sessionStorage.getItem('userName')) {
    if (to.path !== '/login') {
      next('/login')
    }
  }
  next()
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: '',
      component: () => import('./views/manage.vue'),
      children: [
        {
          path: '',
          name: '首页',
          component: () => import('./views/Home.vue')
        },
        {
          path: '/views/auth',
          name: '权限管理',
          component: () => import('./views/authManage.vue')
        },
        {
          path: '/views/role',
          name: '角色管理',
          component: () => import('./views/role.vue')
        },
        {
          path: '/views/menuManage',
          name: '菜单管理',
          component: () => import('./views/menuManage.vue')
        },
        {
          path: '/views/group',
          name: '分组管理',
          component: () => import('./views/group.vue')
        }
      ]
    }
  ]
})
// 路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = !!localStorage.elementUI
  if (to.path === '/Login') {
    next()
  } else {
    // 是否在登录状态下
    isLogin ? next() : next('/Login')
  }
})
export default router

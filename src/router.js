import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
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
          path: '/views/menu',
          name: '菜单管理',
          component: () => import('./views/menu.vue')
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

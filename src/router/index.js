import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/** note: submenu only apppear when children.length>=1
 *   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
 **/

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
 **/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  // {
  //   path: '/login',
  //   component: resolve => require(['../components/user/Login.vue'], resolve)
  // },
  // {
  //   path: '/home',
  //   component: resolve => require(['../components/Home.vue'], resolve),
  //   children:[
  //     {
  //       path: '/',
  //       component: resolve => require(['../components/Index.vue'], resolve)
  //     },
  //     {
  //       path: '/users',
  //       component: resolve => require(['../components/user/Users.vue'], resolve)
  //     },
  //     {
  //       path: '/user/info',
  //       component: resolve => require(['../components/user/UserInfo.vue'], resolve)
  //     }
  //   ]
  // },

  {
    path: '/vulnerability',
    component: Layout,
    name: 'vulnerability',
    meta: {
      title: 'vulnerability',
      icon: 'example'
    },
    children: [
      {
        path: 'vulnerability/vulnerabilityManagement',
        component: _import('vwn/vulnerability_management/VulnerabilityManagement'),
        name: 'vulnerabilityManagement',
        meta: {
          title: 'vulnerabilityManagement',
        }
      },
      { path: 'vulnerability/vulnerabilityBasic',   component: _import('vwn/vulnerability_management/VulnerabilityBasic'), name: 'vulnerabilityBasic', meta: { title: 'vulnerabilityBasic' }}
    ]
  },
  {
    path: '/dataServices',
    component: Layout,
    name: 'dataServices',
    meta: {
      title: 'vulnerability',
      icon: 'example'
    },
    children: [
      {
        path: 'vulnerability/vulnerabilityManagement',
        component: _import('vwn/vulnerability_management/VulnerabilityManagement'),
        name: 'vulnerabilityManagement',
        meta: {
          title: 'vulnerabilityManagement',
        }
      },
      { path: 'vulnerability/vulnerabilityBasic',   component: _import('vwn/vulnerability_management/VulnerabilityBasic'), name: 'vulnerabilityBasic', meta: { title: 'vulnerabilityBasic' }}
    ]
  },
  {
    path: '/specialTopicServices',
    component: Layout,
    name: 'specialTopicServices',
    meta: {
      title: 'specialTopicServices',
      icon: 'example'
    },
    children: [
      {
        path: 'vulnerability/vulnerabilityManagement',
        component: _import('vwn/vulnerability_management/VulnerabilityManagement'),
        name: 'vulnerabilityManagement',
        meta: {
          title: 'vulnerabilityManagement',
        }
      },
      { path: 'vulnerability/vulnerabilityBasic',   component: _import('vwn/vulnerability_management/VulnerabilityBasic'), name: 'vulnerabilityBasic', meta: { title: 'vulnerabilityBasic' }}
    ]
  },
  {
    path: '/foundationServices',
    component: Layout,
    name: 'foundationServices',
    meta: {
      title: 'foundationServices',
      icon: 'example'
    },
    children: [
      {
        path: 'vulnerability/vulnerabilityManagement',
        component: _import('vwn/vulnerability_management/VulnerabilityManagement'),
        name: 'vulnerabilityManagement',
        meta: {
          title: 'vulnerabilityManagement',
        }
      },
      { path: 'vulnerability/vulnerabilityBasic',   component: _import('vwn/vulnerability_management/VulnerabilityBasic'), name: 'vulnerabilityBasic', meta: { title: 'vulnerabilityBasic' }}
    ]
  },
  {
    path: '/customizedServices',
    component: Layout,
    name: 'customizedServices',
    meta: {
      title: 'customizedServices',
      icon: 'example'
    },
    children: [
      {
        path: 'vulnerability/vulnerabilityManagement',
        component: _import('vwn/vulnerability_management/VulnerabilityManagement'),
        name: 'vulnerabilityManagement',
        meta: {
          title: 'vulnerabilityManagement',
        }
      },
      { path: 'vulnerability/vulnerabilityBasic',   component: _import('vwn/vulnerability_management/VulnerabilityBasic'), name: 'vulnerabilityBasic', meta: { title: 'vulnerabilityBasic' }}
    ]
  },
  {
    path: '/platformServices',
    component: Layout,
    name: 'platformServices',
    meta: {
      title: 'platformServices',
      icon: 'example'
    },
    children: [
      {
        path: 'vulnerability/vulnerabilityManagement',
        component: _import('vwn/vulnerability_management/VulnerabilityManagement'),
        name: 'vulnerabilityManagement',
        meta: {
          title: 'vulnerabilityManagement',
        }
      },
      { path: 'vulnerability/vulnerabilityBasic',   component: _import('vwn/vulnerability_management/VulnerabilityBasic'), name: 'vulnerabilityBasic', meta: { title: 'vulnerabilityBasic' }}
    ]
  },
  {
    path: '/warning',
    component: Layout,
    name: 'warning_management',
    meta: {
      title: 'warning_management',
      icon: 'component'
    },
    children: [

      { path: 'warning_management/my_notification',   component: _import('vwn/my_warning/MyNotification'), name: 'my_notification', meta: { title: 'my_notification' }},
      {
        path: 'warning_management/warning_process',
        component: _import('vwn/my_warning/WarningProcess'),
        name: 'warning_process',
        meta: {
          title: 'warning_process',
        }
      },
    ]
  },


  { path: '*', redirect: '/404', hidden: true }
]

import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

import './styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import i18n from './lang' // Internationalization
import './icons' // icon
import './errorLog'// error log
import './permission' // permission control
import './mock' // simulation data

import * as filters from './filters' // global filters
//
// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import AxiosPlugin from './libs/AxiosPlugin'

Vue.use(AxiosPlugin)
Vue.use(ElementUI);
Vue.config.productionTip = false;

// //判断是否有token,没有则登陆
// router.beforeEach((to, from, next) => {
//   if (to.path != '/login') {
//     var token = sessionStorage.getItem('token');
//     if (token == null) {
//       next({path:'/login'});
//     } else {
//       //根据后台返回的路由进行判断是否合法
//       var routers = sessionStorage.getItem('routers');
//       var flag = false;
//       routers.split("_").forEach( v => {
//         if(v == to.path) {
//           flag = true;
//         }
//       });
//
//       if(flag) {
//         next();
//       } else {
//         next({path:'/home'});
//       }
//     }
//   } else {
//     next();
//   }
// })


Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})

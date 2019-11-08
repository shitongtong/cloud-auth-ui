// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './http/index'
import i18n from './i18n'


Vue.config.productionTip = false
// 使用element UI
Vue.use(ElementUI);
Vue.use(api);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,  //将i18n注入到vue实例中
  router,
  components: { App },
  template: '<App/>'
})

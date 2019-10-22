import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueI18n from 'vue-i18n'
import messages from './lan'
import feather from 'vue-icon'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueI18n)
Vue.use(feather)

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'zh', // 设置地区
  messages, // 设置地区信息
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

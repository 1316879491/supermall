import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css' 
import VueLazyLoad from 'vue-lazyload'

import toast from './components/common/toast/index'

Vue.use(animated)
Vue.use(toast)
Vue.use(VueLazyLoad)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

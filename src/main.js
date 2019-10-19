import Vue from 'vue'
import App from './App.vue'
import router from './router' //追加

//AdminLTE
import 'va/lib/css'
import 'va/lib/script'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

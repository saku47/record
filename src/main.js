import Vue from 'vue'
import App from './App.vue'

//AdminLTE
import 'va/lib/css'
import 'va/lib/script'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

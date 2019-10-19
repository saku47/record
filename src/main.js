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

new Vue({
  el: '.l-wrapper',

  data(){
    return {
      isModalActive: false,
    }
  },
  methods: {
   /**
   * clickイベントが発火されたタイミングで、 
   * オーバーレイコンテンツを表示するフラグを持つdata(isModalActive)を切り替える
   */
    openItem() {
      this.toggleModal();
    },
    /**
    * active状態を切り替える。
    */
    toggleModal() {
      this.isModalActive = ! this.isModalActive;
    },
  }
});
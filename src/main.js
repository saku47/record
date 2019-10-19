import Vue from 'vue'
import App from './App.vue'
import router from './router' //追加

//AdminLTE
import 'va/lib/css'
import 'va/lib/script'

//firebase
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDIfSePRt0r4UxphG0wsa9OiHeGWkLgCW4",
  authDomain: "record-f1998.firebaseapp.com",
  databaseURL: "https://record-f1998.firebaseio.com",
  projectId: "record-f1998",
  storageBucket: "record-f1998.appspot.com",
  messagingSenderId: "389008879070",
  appId: "1:389008879070:web:33d2edf0f5a0b1ba76c14f",
  measurementId: "G-Z76NDRQ2X4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
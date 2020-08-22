import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Global Variable

Vue.mixin({
  data: function() {
    return {
      bookShelf:'bookShelf',
    }
  }
})
// const STORAGE_KEY = 'book-storage';

new Vue({
  render: h => h(App),
}).$mount('#app')

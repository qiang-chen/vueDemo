import Vue from 'vue'

import index from './views/index.vue'

//引入store
import store from './store/index'

new Vue({
  el: '#app',
  store,
  render: h => h(index)
})

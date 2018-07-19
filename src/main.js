import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap-vue/dist/bootstrap-vue.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BaseIconLoading from './components/BaseIconLoading.vue'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('BaseIconLoading', BaseIconLoading)

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})

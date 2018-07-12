import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

Vue.use(BootstrapVue)

Vue.component('Header', Header)
Vue.component('Footer', Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})

import 'core-js/stable'
import Vue from 'vue'
import axios from 'axios'
//import CoreuiVuePro from '@coreui/vue-pro'
import CoreuiVuePro from '../node_modules/@coreui/vue-pro/src/index.js'
import App from './App'
import router from './router/index'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import i18n from './i18n.js'

const baseURL = 'http://192.241.131.11:11000/api/v1'

Vue.use(CoreuiVuePro)
Vue.prototype.$log = console.log.bind(console)
const token = localStorage.getItem('user-token')
if(token){
  axios.defaults.headers.common['Authorization'] = token
}
new Vue({
  el: '#app',
  router,
  store,
  //CIcon component documentation: https://coreui.io/vue/docs/components/icon
  icons,
  i18n,
  template: '<App/>',
  components: {
    App
  }
})

export default baseURL

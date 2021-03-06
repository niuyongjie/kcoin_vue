import Vue from 'vue'
import './plugins/axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(ElementUI, VueAxios, axios)

new Vue({
  render: h => h(App)
}).$mount('#app')

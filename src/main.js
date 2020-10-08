import Vue from 'vue'
import App from './App.vue'
import Unicon from 'vue-unicons'
import {uniTrophy} from 'vue-unicons/src/icons'

Vue.config.productionTip = false
Unicon.add([uniTrophy])
Vue.use(Unicon)

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'

Vue.config.productionTip = false

Vue.use(VueCompositionAPI)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

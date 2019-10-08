import Vue from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import "prismjs"
import "prismjs/themes/prism.css"
import Clipboard from 'v-clipboard'
 
Vue.use(Clipboard)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app")

import Vue from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import VueHighlightJS from "vue-highlight.js"

// Highlight.js languages
import css from "highlight.js/lib/languages/css"
import javascript from "highlight.js/lib/languages/javascript"
import vue from "vue-highlight.js/lib/languages/vue"

Vue.use(VueHighlightJS, {
  languages: {
    css,
    javascript,
    vue
  }
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app")

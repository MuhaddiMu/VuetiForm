import Vue from "vue"
import Vuetify from "vuetify/lib"
import "vuetify/dist/vuetify.min.css"

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true
  },
  icons: {
    iconfont: "mdi"
  }
})

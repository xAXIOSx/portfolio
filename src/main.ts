import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import "./scss/main.scss"
import "./scss/customClasses.scss"



loadFonts()

createApp(App)
  .use(createPinia())
  .use(vuetify)
  .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import baselayout from "@/plugins/app/_layout/baselayout"
import axios from 'axios'

import { IonicVue, IonGrid, IonRow } from '@ionic/vue'

//base-layout tu nebude, pouzit vue-layout


/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'

/* Theme variables */
// import './plugins/app/theme/variables.css'
import './plugins/app/theme/style.css'

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store)
  app.mount('#app')

import { registerIonicComponents } from '@/plugins/w/ionic/'

registerIonicComponents(app)

app.component('base-layout', baselayout)
app.component('IonGrid', IonGrid)
app.component('IonRow', IonRow)

//FIXME toto je nejaka kokotina co kazi display


  


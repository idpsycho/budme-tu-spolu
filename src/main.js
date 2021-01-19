import { createApp } from 'vue'
import App from './App.vue'
import baselayout from './components/baselayout.vue';
import router from './router';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

import { IonicVue } from '@ionic/vue';


/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import axios from 'axios';

const app = createApp(App)
  .use(IonicVue)
  .use(router)

app.component('base-layout', baselayout);

router.isReady().then(() => {
  axios.get('https://budme-tu-spolu-admin.hybridlab.dev/api/v1/campaign/tag/BEENTHERETOGETHER').then(response => { Storage.set({ key: 'CampaignData', value: JSON.stringify(response.data) }) });
  app.mount('#app');
});


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import WOW from 'wowjs';
import vuetify from '@/plugins/vuetify.js';
import 'vuetify/styles'; 
import '@mdi/font/css/materialdesignicons.css'; 

import '@/styles/index.scss';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify);
app.config.globalProperties.$wow = new WOW.WOW({
  live: false
});

app.mount('#app');
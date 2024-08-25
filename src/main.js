import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import WOW from 'wowjs';
import 'animate.css';

import vuetify from '@/plugins/vuetify.js';
import 'vuetify/styles'; 
import '@mdi/font/css/materialdesignicons.css'; 

import '@/styles/index.scss';

// Создание экземпляра приложения
const app = createApp(App);

// Инициализация WOW.js
app.config.globalProperties.$wow = new WOW.WOW({
  live: false
});

// Использование плагинов и других настроек
app.use(router);
app.use(store);
app.use(vuetify);

// Монтирование приложения
app.mount('#app');
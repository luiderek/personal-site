import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import AppLink from '@/components/AppLink.vue'

import './assets/main.css'

createApp(App)
  .component('AppLink', AppLink)
  .use(router)
  .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

// Import global CSS
import './assets/styles.css'

createApp(App).use(router).mount('#app')
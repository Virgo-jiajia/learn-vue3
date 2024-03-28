import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from './api/index'
import { createPinia } from 'pinia'
import './assets/css/common.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const pinia = createPinia()
const app = createApp(App)
app.config.globalProperties.$api = api

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.use(router)
// app.provide('$axios', axios)

app.mount('#app')

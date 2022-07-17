import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import store from './store'
import router from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import Paginate from "vuejs-paginate-next";

const app = createApp(App)

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

app.use(router)
app.use(store)
app.use(Paginate)
app.mount('#app')

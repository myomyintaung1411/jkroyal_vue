import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: '/login',
    meta: { title: 'Login' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: () => import('./views/Login.vue')
  },
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/:path(.*)', redirect:'/login' },
]

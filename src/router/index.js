import { isTemplateNode } from '@vue/compiler-core'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { rutaProtegida: true }
  
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isRutaProtegida = to.matched.some(item => item.meta.rutaProtegida)

  if (isRutaProtegida && store.state.token === null) {
    console.log('es prote');
    next('/')
  } else {
    console.log('no es prote');
    next()
  }


})

export default router

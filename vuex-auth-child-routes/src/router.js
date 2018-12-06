import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from './store'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isLogged = store.state.authModule.isLogged
  // Comprobación  para que el usuario no pueda acceder a la página de login si ya está logado (comprueba si la página requier autenticación)
  if (!requiresAuth && isLogged && to.path === '/login') {
    next('/secret')
  } else if (requiresAuth && !isLogged) {
    // Reenviía a la página de login si el usuario no está logado
    next('/login')
  } else {
    next()
  }
})

export default router

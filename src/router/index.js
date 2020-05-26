import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import NotFound from '@/components/NotFound'
import globals from '@/globals'
import mainRoutes from './MainRouter'
import projectRoutes from './ProjectRouter'
import squadsRoutes from './SquadRouter'
import inboxRouter from './InboxRouter'

Vue.use(Router)
Vue.use(Meta)

const ROUTES = [
  // Default route
  { path: '', redirect: '/login' }
]
  .concat(mainRoutes)
  .concat(projectRoutes)
  .concat(squadsRoutes)
  .concat(inboxRouter)

// 404 Not Found page
ROUTES.push({
  path: '*',
  component: NotFound
})

const router = new Router({
  base: '/',
  mode: 'history',
  routes: ROUTES
})

router.afterEach(() => {
  // Remove initial splash screen
  const splashScreen = document.querySelector('.app-splash-screen')
  if (splashScreen) {
    splashScreen.style.opacity = 0
    setTimeout(() =>
      splashScreen && splashScreen.parentNode && splashScreen.parentNode.removeChild(splashScreen)
      , 300)
  }

  // On small screens collapse sidenav
  if (window.layoutHelpers && window.layoutHelpers.isSmallScreen() && !window.layoutHelpers.isCollapsed()) {
    setTimeout(() => window.layoutHelpers.setCollapsed(true, true), 10)
  }

  // Scroll to top of the page
  globals().scrollTop(0, 0)
})

router.beforeEach((to, from, next) => {
  document.body.classList.add('app-loading')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (Vue.prototype.$user == null) {
      setTimeout(() => next({ name: 'login' }), 10)
    } else {
      setTimeout(() => next(), 10)
    }
  } else {
    setTimeout(() => next(), 10)
  }
})

export default router

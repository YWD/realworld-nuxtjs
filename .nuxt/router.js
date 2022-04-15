import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _216369fe = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _1aef08b3 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _432a5615 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _09d81556 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _0eaa7412 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _15949041 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _3c438ebc = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _216369fe,
    children: [{
      path: "",
      component: _1aef08b3,
      name: "home"
    }, {
      path: "login",
      component: _432a5615,
      name: "login"
    }, {
      path: "register",
      component: _432a5615,
      name: "register"
    }, {
      path: "profile/:username",
      component: _09d81556,
      name: "profile"
    }, {
      path: "profile/:username/favorites",
      component: _09d81556,
      name: "profile-favorites"
    }, {
      path: "settings",
      component: _0eaa7412,
      name: "settings"
    }, {
      path: "editor/:slug",
      component: _15949041,
      name: "editor-edit"
    }, {
      path: "editor",
      component: _15949041,
      name: "editor"
    }, {
      path: "article/:slug",
      component: _3c438ebc,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

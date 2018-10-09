import Vue from 'vue'
import iView from 'iview'
import VueRouter from 'vue-router'
import store from './vuex/index'
import Routers from './router'
import Util from './libs/util'
import App from './app.vue'
// 全局样式
import 'iview/dist/styles/iview.css'
import './styles/common.less'
import './styles/theme.less'

Vue.use(VueRouter)
Vue.use(iView, {
  size: 'large'
})
// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: Routers
}
const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  Util.title(to.meta.title)
  next()
})

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

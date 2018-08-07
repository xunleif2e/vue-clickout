import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'App',
      component: App
    }
  ]
})

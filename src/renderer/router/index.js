import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome-view',
      component: require('@/components/WelcomeView').default
    },
    {
      path: '/inspire',
      name: 'inspire',
      component: require('@/components/InspireView').default
    },
    {
      path: '/pages',
      name: 'index',
      component: require('@/components/pages/index').default
    },
    {
      path: '/pages/article',
      name: 'index',
      component: require('@/components/pages/article.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

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
      path: '/pages/article',
      name: 'article',
      component: require('@/components/pages/article.vue').default
    },
    {
      path: '/pages/videos',
      name: 'videos',
      component: require('@/components/pages/videos.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

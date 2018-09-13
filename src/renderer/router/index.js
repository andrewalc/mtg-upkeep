import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/search-error',
      name: 'search-error',
      component: require('@/components/SearchError').default
    },
    {
      path: '/search-result/:cardName',
      name: 'search-result',
      component: require('@/components/SearchResult').default,
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});

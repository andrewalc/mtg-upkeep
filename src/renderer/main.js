import Vue from 'vue';

import App from './App';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import VueResource from 'vue-resource';
import button from 'bootstrap-vue/es/components/button/button';

import container from 'bootstrap-vue/es/components/layout/container';
import row from 'bootstrap-vue/es/components/layout/row';
import col from 'bootstrap-vue/es/components/layout/col';

import navbar from 'bootstrap-vue/es/components/navbar/navbar';
import navbarnav from 'bootstrap-vue/es/components/navbar/navbar-nav';

import navform from 'bootstrap-vue/es/components/nav/nav-form';
import navitem from 'bootstrap-vue/es/components/nav/nav-item';

import forminput from 'bootstrap-vue/es/components/form-input/form-input';

import embed from 'bootstrap-vue/es/components/embed/embed';

import carousel from 'bootstrap-vue/es/components/carousel/carousel';
import carouselslide from 'bootstrap-vue/es/components/carousel/carousel-slide';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.component('b-button', button);
Vue.component('b-container', container);
Vue.component('b-row', row);
Vue.component('b-col', col);
Vue.component('b-navbar', navbar);
Vue.component('b-navbar-nav', navbarnav);
Vue.component('b-nav-form', navform);
Vue.component('b-nav-item', navitem);
Vue.component('b-form-input', forminput);
Vue.component('b-embed', embed);
Vue.component('b-carousel', carousel);
Vue.component('b-carousel-slide', carouselslide);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app');

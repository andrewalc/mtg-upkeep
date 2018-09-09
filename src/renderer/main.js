import Vue from 'vue';

import App from './App';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import jQuery from 'jquery';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(jQuery);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app');

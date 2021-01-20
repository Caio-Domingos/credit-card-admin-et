import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes,
  faPlus,
  faEdit,
  faUser,
  faCheck,
  faUpload,
  faExclamationCircle,
  faCreditCard,
  faArrowLeft,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

require('@/assets/bulma.scss');

library.add(
  faPlus,
  faTimes,
  faEdit,
  faUser,
  faCheck,
  faUpload,
  faExclamationCircle,
  faCreditCard,
  faArrowLeft,
  faDollarSign
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

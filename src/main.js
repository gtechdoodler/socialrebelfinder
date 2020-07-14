import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { LayoutPlugin, ModalPlugin, IconsPlugin } from 'bootstrap-vue';
import { store } from './store/index.js';
import 'vuelayers/lib/style.css'; // needs css-loader
import VueLayers from 'vuelayers';
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;

// Install required BootstrapVue plugins
Vue.use(LayoutPlugin);
Vue.use(ModalPlugin);
Vue.use(IconsPlugin);

// VueLayers map
Vue.use(VueLayers);

// Vuelidate for field validation
Vue.use(Vuelidate);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');

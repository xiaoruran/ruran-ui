import Vue from 'vue'
import App from './App.vue'
import '../components/css/card.scss';
import RCard from '../components/lib/card/src/index';

Vue.use(RCard);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import passwordInput from '../lib/index'

Vue.use(ElementUI);
Vue.use(passwordInput);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

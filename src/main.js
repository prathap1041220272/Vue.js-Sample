import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'

Vue.config.productionTip = false

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(new Date(value))).format('MM/DD/YY')
  }
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

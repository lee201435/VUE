// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const store = new Vuex.Store({
  state: {
    courselist: [],
  },
  mutations: {
    GETDATA(state, data){
      state.courselist = data
    }
  },
  actions: {}
});



Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  beforeMount: function () {
    var _this = this;

    axios.get('http://127.0.0.1:8000/api/v1/course/')
      .then(function (data) {
        _this.$store.commit('GETDATA', data.data.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
});

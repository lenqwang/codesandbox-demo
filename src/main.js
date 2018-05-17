// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import axios from "axios";
import App from "./App";
import Demo from "./components/demo";

Vue.config.productionTip = false;
Vue.use(Demo);

axios.defaults.baseURL =
  "https://easy-mock.com/mock/5af3e4cd7098da01bd921ef9/team";

Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});

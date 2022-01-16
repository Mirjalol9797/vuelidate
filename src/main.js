import Vue from "vue";
import App from "./App.vue";

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

import InputFacade from "vue-input-facade";
Vue.use(InputFacade);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

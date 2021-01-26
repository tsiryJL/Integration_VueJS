import Vue from "vue";
import App from "./App.vue";
/* Importing FontAwesome */
import { library } from "@fortawesome/fontawesome-svg-core";
/* -- Solid Icons */
import {
  faSearch,
  faArrowRight,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* -- Brand Icons */
import {
  faFacebookF,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
/* Importing BootstrapVue */
import { BootstrapVue } from "bootstrap-vue";
/* Importing BootstrapVue CSS */
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
/* Importing BootstrapVue JS */
import "core-js/stable";
import "regenerator-runtime/runtime";
import router from "./router";

library.add(
  faSearch,
  faArrowRight,
  faFacebookF,
  faTwitter,
  faInstagram,
  faAngleDown
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

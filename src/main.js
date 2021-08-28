import Vue from "vue";
import { ModalPlugin } from "bootstrap-vue";
import VueCompositionAPI from "@vue/composition-api";
import FeatherIcon from "@/components/base/feather-icon/FeatherIcon.vue";

import router from "./router";
import store from "./store";
import App from "./App.vue";

Vue.use(ModalPlugin);

// Composition API
Vue.use(VueCompositionAPI);

Vue.component(FeatherIcon.name, FeatherIcon);

// import core styles
require("@/scss/core.scss");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

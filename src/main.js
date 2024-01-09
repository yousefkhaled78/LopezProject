import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import VueImageZoomer from "vue-image-zoomer";
import "vue-image-zoomer/dist/style.css";

library.add(fas, far, fab);

createApp(App)
  .use(VueImageZoomer)
  .use(router)
  .component("fa", FontAwesomeIcon)
  .mount("#app");

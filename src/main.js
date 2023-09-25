import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faUserSecret,
  faTrash,
  faPen,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);
library.add(faTrash);
library.add(faPen);
library.add(faCheck);
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");

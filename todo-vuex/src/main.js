import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTrash);

createApp(App)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

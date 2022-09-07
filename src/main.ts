import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { storeKey } from "vuex";

createApp(App).use(router).use(store, storeKey).use(store).mount("#app");

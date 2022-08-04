import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import store from "./store";
import TheLoading from "./components/TheLoading.vue";

const app = createApp(App);
app.use(store);
app.use(PrimeVue);
app.use(router);
app.component("the-loading", TheLoading);
app.mount("#app");

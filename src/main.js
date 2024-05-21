import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import AOS from 'aos';
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);
app.use(AOS.init({
    duration: 2000,
    offset: 200
  }))
app.use(createPinia());
app.use(router);
app.mount("#app");

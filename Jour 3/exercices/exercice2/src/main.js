import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import bolderText from "../plugins/bolderText";

const app = createApp(App);

app.use(bolderText);

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import boldText from "./plugins/boldText";

const app = createApp(App);

app.use(boldText);

app.mount("#app");
 
import { createApp } from "vue";
import App from "./App.vue";
import { Row, Col } from "ant-design-vue";

const app = createApp(App);
app.use(Row).use(Col);
app.mount("#app");

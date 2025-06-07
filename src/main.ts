import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router"; // 默认查找对应 .ts/.js 文件

const app = createApp(App);
app.use(router);
app.mount("#app");

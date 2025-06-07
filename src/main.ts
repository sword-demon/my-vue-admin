import { createApp } from "vue";
import "./style.less";
import App from "./App.vue";
import router from "./router"; // 默认查找对应 .ts/.js 文件
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

// 注册所有的图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");

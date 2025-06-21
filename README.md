# Vue 3 + TypeScript + Vite

```bash
pnpm install

pnpm run dev
```

## 二 常规依赖安装

生产依赖

```bash
pnpm add vue-router@4 pinia element-plus
```

开发依赖

```bash
pnpm add -D less
```

创建项目目录结构

```bash
cd src

mkdir -p router store views utils
```

## 创建项目路由

`src/router/index.ts`

```typescript
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

## 配置@别名

```bash
pnpm add @types/node --save-dev
```

```ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

> 找不到模块“@/views/Home.vue”或其相应的类型声明

在`tsconfig.app.json`添加配置,在`compilerOptions`里面添加

```json
"baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
```

如果还未生效,可以重启下`vscode`

## 结构布局

```bash
cd src
mkdir -p layouts
```

一级路由: 主页和登录页面

## 单独安装 element-plus 的图标

```bash
pnpm add @element-plus/icons-vue
```

## 安装 mockjs 模拟后端接口

```bash
pnpm add mockjs -D
```

问题:

> 无法找到模块“mockjs”的声明文件

`vite-env.d.ts`

```ts
declare module "mockjs";
```

## 安装 axios

```bash
pnpm add axios
```

## useRouter 误区

必须在组件中使用,否则不会生效,否则拿不到路由对象

## 如果出现错误

```
无法找到模块"@/components/xxx/xxx.vue"的声明文件
```

可以在`vite-env.d.ts`里添加以下代码

```ts
declare module "*.vue" {
  import { ComponentOptions, type ComponentOptions } from "vue";
  const componentOptions: ComponentOptions;
  export default componentOptions;
}
```

## 安装 echarts

```bash
pnpm add echarts --save
```

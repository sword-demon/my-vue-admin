# 路由相关的

## 通过路由守卫来控制权限和跳转

```ts
import router from "./index";

// 路由前置守卫
router.beforeEach(() => {});
```

用户登录之后会有一个 token,如果有 token 代表登录了,没有的话就代表没有登录
这里无需管 token 的值是不是真的 token,因为每次都会携带 token 请求后端接口
后端接口会进行验证这个 token 合不合法

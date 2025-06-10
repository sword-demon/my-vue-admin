import router from "./index";
import { useUserStore } from "@/store/auth";

// 路由前置守卫
// to: 要去的页面
router.beforeEach((to) => {
  const userSore = useUserStore();

  const isLogin = userSore.token;
  if (!isLogin) {
    // 未登录
    // 如果你的是登录页,那么就不处理
    // 如果你去的是其他页面,重定向到登录页
    if (to.path !== "/login") {
      return { path: "/login" };
    }

    // 不做任何处理,可以直接放行
  } else {
    // 已经登录了,如果重新返回登录页,不允许再返回登录页
    if (to.path === "/login") {
      // 重定向到首页
      return { path: "/" };
    }
    // 去其他页面就放行,不需要写任何代码
  }
});

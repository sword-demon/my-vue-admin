import { defineStore } from "pinia";
import { loginApi } from "@/api/user";

interface LoginParams {
  username: string;
  password: string;
}

// 选项式
export const useUserStore = defineStore("user", {
  state: () => ({
    token: sessionStorage.getItem("token") || "", // 刷新的时候会从本地存储去取值
    // 返回的登录用户的角色权限信息
    roles: sessionStorage.getItem("roles")
      ? JSON.parse(sessionStorage.getItem("roles")!) // 这里断定它不会为空
      : [],
    // 返回的登录用户的账号
    username: sessionStorage.getItem("username") || "",
    // 返回登录的用户的有的权限菜单
    menu: sessionStorage.getItem("menu")
      ? JSON.parse(sessionStorage.getItem("menu")!)
      : [],
  }),
  actions: {
    async login(data: LoginParams) {
      try {
        const {
          data: {
            token,
            user: { username, roles },
            menulist,
          },
        } = await loginApi(data);
        console.log(token, username, roles, menulist);
        this.token = token;
        this.roles = roles;
        this.menu = menulist;
        this.username = username;

        // pinia 中的数据是响应式的
        // pinia 中取值存值消耗小,性能好,我们本地存储做一个备份

        sessionStorage.setItem("token", token);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("roles", JSON.stringify(roles));
        sessionStorage.setItem("menu", JSON.stringify(menulist));
      } catch (error) {
        console.log("error", error);
      }
    },
    logout() {
      this.token = "";
      this.roles = [];
      this.username = "";
      this.menu = [];

      sessionStorage.clear();
    },
  },
});

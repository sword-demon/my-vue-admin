import { defineStore } from "pinia";

// 选项式
export const useUserStore = defineStore("user", {
  state: () => ({
    token: null,
    // 返回的登录用户的角色权限信息
    roles: [],
    // 返回的登录用户的账号
    username: "",
    // 返回登录的用户的有的权限菜单
    menu: [],
  }),
  actions: {},
});

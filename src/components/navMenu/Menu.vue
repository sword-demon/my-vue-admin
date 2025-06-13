<template>
  <div class="logo">
    <img :src="logo" width="34px" height="34px" />
    <h1>动力港</h1>
  </div>
  <el-menu :router="true" :default-active="$route.path">
    <!-- 把每个数据穿进去 -->
    <menu-item
      v-for="item in menuList"
      :item="item"
      :key="item.url"
    ></menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import MenuItem from "./MenuItem.vue";
import { useUserStore } from "@/store/auth";
import logo from "@/assets/logo.png";
const userStore = useUserStore();

const menuList = userStore.menu;
console.log(menuList);
</script>

<style lang="less" scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 10px 0;
  img {
    margin-left: -10px;
  }
  h1 {
    color: #333;
    margin-left: 10px;
    font-size: 22px;
  }

  .el-menu {
    border-right: none;
  }
}
</style>

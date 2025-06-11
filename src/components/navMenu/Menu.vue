<template>
  <el-menu>
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
const userStore = useUserStore();

const menuList = userStore.menu;
console.log(menuList);
</script>

<style lang="less" scoped></style>

<template>
  <el-sub-menu v-if="item.children" :index="item.url">
    <template #title>
      <el-icon><location /></el-icon>
      <span>{{ item.name }}</span>
    </template>

    <!-- 递归 -->
    <my-menu
      v-for="child in item.children"
      :key="child.url"
      :item="child"
    ></my-menu>
  </el-sub-menu>
  <el-menu-item v-else :index="item.url">
    <el-icon><location /></el-icon>
    <span>{{ item.name }}</span>
  </el-menu-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { MenuItem as MenuItemType } from "@/types/user";

export default defineComponent({
  name: "MyMenu",
  props: {
    item: {
      type: Object as PropType<MenuItemType>, // item 类型
      required: true, // 必填属性
    },
  },
});
</script>

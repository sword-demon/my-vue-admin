<template>
  <el-sub-menu v-if="item.children" :index="item.url">
    <template #title>
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.name }}</span>
    </template>

    <!-- 递归 -->
    <my-menu
      v-for="child in item.children"
      :key="child.url"
      :item="child"
    ></my-menu>
  </el-sub-menu>
  <el-menu-item
    v-else
    :index="item.url"
    v-show="!(item.name == '订单详情')"
    @click="add(item.name, item.url, item.icon)"
  >
    <el-icon>
      <component :is="item.icon"></component>
    </el-icon>
    <span>{{ item.name }}</span>
  </el-menu-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { MenuItem as MenuItemType } from "@/types/user";
import { useTabsStore } from "@/store/tabs";

export default defineComponent({
  name: "MyMenu",
  props: {
    item: {
      type: Object as PropType<MenuItemType>, // item 类型
      required: true, // 必填属性
    },
  },
  setup() {
    const tabsStore = useTabsStore();
    // 方法不用响应式
    const { addTab } = tabsStore;
    const add = (name: string, url: string, icon: string) => {
      addTab(name, url, icon);
    };

    return {
      add,
    };
  },
});
</script>

<style lang="less" scoped>
// 菜单高亮样式
.is-active {
  background-color: rgb(34, 136, 255);
  color: #fff !important;
  div {
    span {
      color: #fff;
    }
  }
}

.el-menu-item:hover {
  background-color: rgb(34, 136, 255) !important;
  color: #fff !important;
}

// 样式穿透
::v-deep .el-sub-menu__title:hover {
  background-color: rgb(34, 136, 255) !important;
  color: #fff !important;
}
</style>

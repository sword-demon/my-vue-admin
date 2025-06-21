<template>
  <el-tabs
    v-model="currentTab.name"
    class="demo-tabs"
    @tab-click="handleClick"
    type="card"
    closable
    @tab-remove="remove"
  >
    <el-tab-pane
      v-for="item in tabs"
      :key="item.name"
      :label="item.name"
      :name="item.name"
    >
      <template #label>
        <span class="custom-tabs-label">
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>&nbsp;{{ item.name }}</span>
        </span>
      </template>
    </el-tab-pane>
  </el-tabs>

  <router-view></router-view>
</template>

<script lang="ts" setup>
import { useTabsStore } from "@/store/tabs";
import type { TabPaneName } from "element-plus";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();
const tabsStore = useTabsStore();
// 保持响应式
const { tabs, currentTab } = storeToRefs(tabsStore);

const { setCurrentTab } = tabsStore;

/**
 * 点击 tab 页签
 * @param tab 选中项
 * @param event 事件参数
 */
// The `const handleClick` function in the Vue script is a handler for when a tab is clicked in the
// `el-tabs` component. It takes two parameters: `tab` of type `TabsPaneContext` and `event` of type
// `Event`.
// 解构赋值出来一个 index 原先是 TabContext 里的对象 index
const handleClick = ({ index }: { index: number }) => {
  setCurrentTab(tabs.value[index].name, tabs.value[index].url); // 设置当前高亮
  // 设置路由跳转
  router.push(tabs.value[index].url);
};

const remove = (name: TabPaneName) => {
  console.log(name);
};
</script>

<style lang="less" scoped>
.demo-tabs {
  ::v-deep .is-active {
    background-color: rgb(34, 136, 255) !important;
    color: #fff !important;
  }
}
</style>

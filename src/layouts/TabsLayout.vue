<template>
  <el-tabs
    v-model="activeName"
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
import type { TabPaneName, TabsPaneContext } from "element-plus";
import { storeToRefs } from "pinia";
import { ref } from "vue";
const activeName = ref("first");

const tabsStore = useTabsStore();
// 保持响应式
const { tabs } = storeToRefs(tabsStore);

console.log(tabs.value);

/**
 * 点击 tab 页签
 * @param tab 选中项
 * @param event 事件参数
 */
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
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

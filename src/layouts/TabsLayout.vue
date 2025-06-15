<template>
  <el-tabs
    v-model="activeName"
    class="demo-tabs"
    @tab-click="handleClick"
    type="card"
    closable
    @tab-remove="remove"
  >
    <el-tab-pane label="User" name="first">
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><calendar /></el-icon>
          <span>用户</span>
        </span>
      </template>
    </el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import type { TabPaneName, TabsPaneContext } from "element-plus";
import { ref } from "vue";
const activeName = ref("first");

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

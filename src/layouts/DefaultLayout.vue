<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
// 左侧菜单栏宽度撑满屏幕
.el-aside {
  height: 100vh;
  background-color: white;
  box-shadow: 10px 0 8px -2px rgba(0, 0, 0, 0.2);
}

.el-header {
  padding: 0 !important;
}

// 添加固定高度,不能任由内容撑开
// 超出部分以滚动条的形式展示
.el-main {
  height: 80vh;
  overflow: auto;
}
</style>

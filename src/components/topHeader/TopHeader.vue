<template>
  <div class="header">
    <div class="personal">
      <el-badge :is-dot="info > 0" class="item">
        <el-icon><Bell /></el-icon>
      </el-badge>

      <el-avatar
        src="https://avatars.githubusercontent.com/u/30438483?v=4"
        class="ml mr"
      ></el-avatar>

      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          欢迎你, {{ username }}
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="User" command="user"
              >个人中心</el-dropdown-item
            >
            <el-dropdown-item icon="SwitchButton" command="logout"
              >登出</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useUserStore } from "@/store/auth";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const info = ref(5);
const userStore = useUserStore();
const router = useRouter();
const { username } = storeToRefs(userStore);

const handleCommand = (command: string) => {
  // console.log(command);
  if (command == "user") {
    router.push({ path: "/personal" });
  } else {
    // 清空 pinia 数据和本地存储的数据
    userStore.logout();
    // 跳转到首页
    router.push({ path: "/" });
  }
};
</script>

<style scoped lang="less">
.header {
  background-color: white;
  height: 60px;
  padding: 0 20px;

  .personal {
    float: right;
    display: flex;
    height: 60px;
    align-items: center;
    .item {
      margin-top: 10px;
    }
  }
}
</style>

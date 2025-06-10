<template>
  <div class="bg">
    <div class="login">
      <div class="logo">
        <img :src="logo" alt="" width="70px" height="70px" />
        <h1 class="ml">动力港能源管理平台</h1>
      </div>
      <el-form
        ref="ruleFormRef"
        style="max-width: 600px"
        :model="ruleForm"
        status-icon
        label-width="auto"
        class="mt"
        :rules="rules"
      >
        <el-form-item prop="username">
          <el-input
            v-model="ruleForm.username"
            type="password"
            autocomplete="off"
            placeholder="请输入用户名"
            prefix-icon="User"
            clearable
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="ruleForm.password"
            type="password"
            placeholder="请输入密码"
            autocomplete="off"
            prefix-icon="Lock"
            clearable
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from "@/assets/logo.png";
import { ref, reactive } from "vue";
import { useUserStore } from "@/store/auth";
import { useRouter } from "vue-router";

import type { FormInstance, FormRules } from "element-plus";

const userStore = useUserStore();
const router = useRouter();

// 定义表单对象实例
const ruleFormRef = ref<FormInstance>();

// 定义表单类型
interface RuleForm {
  username: string;
  password: string;
}

// 定义表单模型对象
const ruleForm = reactive<RuleForm>({
  username: "",
  password: "",
});

// 定义验证规则
const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: "请输入账号", trigger: "blur" },
    { min: 3, max: 8, message: "账号在 3~8 个字符范围", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 3, message: "密码至少输入 3 位", trigger: "blur" },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      // 校验通过
      // await 阻塞一下,等到登录操作完之后进行跳转,必须保证登录在跳转之前走完
      await userStore.login(ruleForm);
      // console.log("submit");
      // 跳转至首页
      router.push("/");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<style lang="less" scoped>
.bg {
  background-image: url("../assets/bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;

  .login {
    width: 500px;
    height: 300px;
    padding: 50px;
    box-shadow: 0 0 10px 10px #f4f4f4;
    text-align: center;
    position: absolute;
    top: 50%;
    margin-top: -300px;
    left: 10%;
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;
      h1 {
        color: rgb(14, 53, 148);
      }
    }
  }
}
</style>

<template>
  <el-card>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input v-model="formParams.input" placeholder="请输入站点名称/ID">
          <template #append>
            <el-select v-model="select" style="width: 115px">
              <el-option label="按名称查询" value="name"></el-option>
              <el-option label="按ID查询" value="id"></el-option>
            </el-select>
          </template>
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-select v-model="formParams.value" placeholder="充电状态状态">
          <el-option label="全部" :value="1"></el-option>
          <el-option label="使用中" :value="2"></el-option>
          <el-option label="空闲中" :value="3"></el-option>
          <el-option label="维护中" :value="4"></el-option>
          <el-option label="待维修" :value="5"></el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </el-col>
    </el-row>
  </el-card>

  <el-card class="mt">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-statistic title="累计充电量(度)" :value="268900"></el-statistic>
      </el-col>
      <el-col :span="6">
        <el-statistic title="累计充电次数(次)" :value="1389"></el-statistic>
      </el-col>
      <el-col :span="6">
        <el-statistic title="服务区域(个)" :value="88"></el-statistic>
      </el-col>
      <el-col :span="6">
        <el-statistic title="累计效益(元)" :value="5622178"></el-statistic>
      </el-col>
    </el-row>
  </el-card>

  <el-card class="mt">
    <el-button type="primary" icon="Plus">新增充电站</el-button>
  </el-card>

  <el-card class="mt"></el-card>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const select = ref("name"); // 默认查询选择项

const formParams = reactive({
  input: "",
  value: 1,
});
</script>

<style lang="less" scoped></style>

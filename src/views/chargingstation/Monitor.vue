<template>
  <el-card>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input
          v-model.trim="formParams.input"
          placeholder="请输入站点名称/ID"
          clearable
        >
          <template #append>
            <el-select v-model="select" style="width: 115px">
              <el-option label="按名称查询" value="name"></el-option>
              <el-option label="按ID查询" value="id"></el-option>
            </el-select>
          </template>
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-select
          v-model="formParams.value"
          placeholder="充电状态状态"
          @change="loadData"
          clearable
        >
          <el-option label="全部" :value="1"></el-option>
          <el-option label="使用中" :value="2"></el-option>
          <el-option label="空闲中" :value="3"></el-option>
          <el-option label="维护中" :value="4"></el-option>
          <el-option label="待维修" :value="5"></el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="loadData">查询</el-button>
        <el-button @click="handleReset">重置</el-button>
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

  <el-card class="mt">
    <el-table v-loading="loading" :data="tableData" style="width: 100%">
      <el-table-column type="index" label="序号" width="80" />
      <el-table-column prop="id" label="站点ID" />
      <el-table-column prop="name" label="站点名称" />
      <el-table-column prop="city" label="所属城市" />
      <el-table-column prop="fast" label="快充数" />
      <el-table-column prop="slow" label="慢充数" />
      <el-table-column prop="now" label="正在充电" />
      <el-table-column prop="fault" label="故障数" />
      <el-table-column prop="person" label="站点负责人" />
      <el-table-column prop="tel" label="负责人电话" />
      <el-table-column prop="status" label="充电站状态">
        <template #default="scope">
          <el-tag v-if="scope.row.status === 1" type="primary">全部</el-tag>
          <el-tag v-if="scope.row.status === 2" type="primary">使用中</el-tag>
          <el-tag v-if="scope.row.status === 3" type="success">空闲中</el-tag>
          <el-tag v-if="scope.row.status === 4" type="warning">维护中</el-tag>
          <el-tag v-if="scope.row.status === 5" type="danger">待维修</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" size="small" @click="edit(scope.row)"
            >编辑</el-button
          >
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="mt fr mb"
      v-model:current-page="pageInfo.page"
      v-model:page-size="pageInfo.pageSize"
      :page-sizes="[10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </el-card>
  <StationForm :dialog-visible="visible" @close="handleClose" />
</template>

<script setup lang="ts">
import { listApi } from "@/api/chargingstation";
import { ref, reactive, onMounted } from "vue";
import StationForm from "./components/StationForm.vue";
import type { RowType } from "@/types/station";

// 下拉选项默认值
const select = ref("name"); // 默认查询选择项

// 搜索参数
const formParams = reactive({
  input: "",
  value: 1,
});

// 控制表格加载属性
const loading = ref<boolean>(false);

const tableData = ref([]);
const count = ref<number>(0);

const pageInfo = reactive({
  page: 1,
  pageSize: 10,
});

const loadData = async () => {
  loading.value = true;
  // 结构返回的 data 里的 list 和 total 变量
  const {
    data: { list, total },
  } = await listApi({
    ...pageInfo,
    status: formParams.value,
    [select.value]: formParams.input, // 这里参数不确定,所以这么写
  });
  // console.log(list, total);
  loading.value = false;
  tableData.value = list;
  count.value = total;
};

const handleSizeChange = (size: number) => {
  pageInfo.pageSize = size;
  loadData();
};
const handleCurrentChange = (page: number) => {
  pageInfo.page = page;
  loadData();
};

const handleReset = () => {
  // 将参数回归默认状态值
  pageInfo.page = 1;
  pageInfo.pageSize = 10;
  formParams.input = "";
  formParams.value = 1;
  select.value = "name";
  loadData();
};

// 在页面挂载完毕后执行的内容
onMounted(() => {
  loadData();
});

// 控制弹窗属性
const visible = ref<boolean>(false);

const edit = (row: RowType) => {
  visible.value = true;
  console.log(row);
};

const handleClose = () => {
  visible.value = false;
};
</script>

<style lang="less" scoped></style>

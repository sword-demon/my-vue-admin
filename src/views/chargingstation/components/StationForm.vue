<template>
  <el-dialog
    v-model="props.dialogVisible"
    title="新增充电站"
    :before-close="handleClose"
  >
    <el-form label-width="120" :rules="rules" :model="ruleForm">
      <el-row>
        <el-col :span="12">
          <el-form-item label="站点名称" prop="name">
            <el-input
              v-model="ruleForm.name"
              clearable
              placeholder="请输入站点名称"
            />
          </el-form-item>
          <el-form-item label="站点id" prop="id">
            <el-input
              v-model="ruleForm.id"
              clearable
              placeholder="请输入站点id"
            />
          </el-form-item>
          <el-form-item label="所属城市" prop="city">
            <el-input
              v-model="ruleForm.city"
              clearable
              placeholder="请输入所属城市"
            />
          </el-form-item>
          <el-form-item label="站点负责人" prop="person">
            <el-input
              v-model="ruleForm.person"
              clearable
              placeholder="请输入站点负责人"
            />
          </el-form-item>
          <el-form-item label="负责人电话" prop="tel">
            <el-input
              v-model="ruleForm.tel"
              clearable
              placeholder="请输入负责人电话"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="快充数" prop="fast">
            <el-input
              v-model="ruleForm.fast"
              clearable
              placeholder="请输入快充数"
            />
          </el-form-item>
          <el-form-item label="慢充数" prop="slow">
            <el-input
              v-model="ruleForm.slow"
              clearable
              placeholder="请输入慢充数"
            />
          </el-form-item>
          <el-form-item label="充电站状态" prop="status">
            <el-select placeholder="充电站状态" v-model="ruleForm.status">
              <el-option label="全部" :value="1"></el-option>
              <el-option label="使用中" :value="2"></el-option>
              <el-option label="空闲中" :value="3"></el-option>
              <el-option label="维护中" :value="4"></el-option>
              <el-option label="待维修" :value="5"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="正在充电" prop="now">
            <el-input
              v-model="ruleForm.now"
              clearable
              placeholder="请输入正在充电"
            />
          </el-form-item>
          <el-form-item label="故障数" prop="fault">
            <el-input
              v-model="ruleForm.fault"
              clearable
              placeholder="请输入故障数"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary">确认</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import type { FormRules } from "element-plus";
import type { RowType } from "@/types/station";
import { reactive, ref } from "vue";

// 接收父组件传递的属性
const props = defineProps({
  dialogVisible: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const emit = defineEmits(["close"]);

const ruleForm = ref<RowType>({
  name: "",
  id: "",
  city: "",
  person: "",
  tel: "",
  fast: "",
  slow: "",
  status: 1,
  now: "",
  fault: "",
});
const rules = reactive<FormRules<RowType>>({
  name: [{ required: true, message: "请输入站点名称", trigger: "blur" }],
  id: [{ required: true, message: "请输入站点id", trigger: "blur" }],
  city: [{ required: true, message: "请输入所属城市", trigger: "blur" }],
  person: [{ required: true, message: "请输入站点负责人", trigger: "blur" }],
  tel: [{ required: true, message: "请输入负责人电话", trigger: "blur" }],
  fast: [{ required: true, message: "请输入快充数", trigger: "blur" }],
  slow: [{ required: true, message: "请输入慢充数", trigger: "blur" }],
  status: [{ required: true, message: "请选择充电站状态", trigger: "change" }],
  now: [{ required: true, message: "请输入正在充电", trigger: "blur" }],
  fault: [{ required: true, message: "请输入故障数", trigger: "blur" }],
});

const handleClose = () => {
  handleCancel();
};
const handleCancel = () => {
  emit("close"); // 通知父组件关闭弹窗
};
</script>

<style lang="less" scoped></style>

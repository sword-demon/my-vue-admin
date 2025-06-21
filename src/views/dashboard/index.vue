<template>
  <el-row>
    <el-col :span="18">
      <el-card>
        <div class="title">
          <h3>今日运行设备状态</h3>
          <p class="ml">更新时间: 2025-01-01 12:00:00</p>
          <el-icon color="#86909c" style="margin-left: 5px"
            ><Refresh
          /></el-icon>
        </div>
        <div class="equipment">
          <div class="item">
            <h4 class="mt mb">充电桩使用率</h4>
            <img :src="flash" alt="" class="mt mb" />
            <h1 class="mb">72 / 95</h1>
            <div class="statistic-card">
              <el-statistic :value="98500">
                <template #title>
                  <div style="display: inline-flex; align-items: center">
                    异常设备
                    <el-tooltip
                      effect="dark"
                      content="当前 9 台设备异常,请尽快处理"
                      placement="top"
                    >
                      <el-icon style="margin-left: 4px" :size="12">
                        <Warning />
                      </el-icon>
                    </el-tooltip>
                  </div>
                </template>
              </el-statistic>
              <div class="statistic-footer">
                <div class="footer-item">
                  <span>than yesterday</span>
                  <span class="green">
                    24%
                    <el-icon>
                      <CaretTop />
                    </el-icon>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <h4 class="mt mb">充电柜使用率</h4>
            <img :src="flash2" alt="" class="mt mb" />
            <h1 class="mb">72 / 95</h1>
            <div class="statistic-card">
              <el-statistic :value="22">
                <template #title>
                  <div style="display: inline-flex; align-items: center">
                    异常设备
                    <el-tooltip
                      effect="dark"
                      content="当前 9 台设备异常,请尽快处理"
                      placement="top"
                    >
                      <el-icon style="margin-left: 4px" :size="12">
                        <Warning />
                      </el-icon>
                    </el-tooltip>
                  </div>
                </template>
              </el-statistic>
              <div class="statistic-footer">
                <div class="footer-item">
                  <span>than yesterday</span>
                  <span class="red">
                    24%
                    <el-icon>
                      <CaretTop />
                    </el-icon>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <h4 class="mt mb">充电站使用率</h4>
            <img :src="flash3" alt="" class="mt mb" />
            <h1 class="mb">72 / 95</h1>
            <div class="statistic-card">
              <el-statistic :value="22">
                <template #title>
                  <div style="display: inline-flex; align-items: center">
                    异常设备
                    <el-tooltip
                      effect="dark"
                      content="当前 9 台设备异常,请尽快处理"
                      placement="top"
                    >
                      <el-icon style="margin-left: 4px" :size="12">
                        <Warning />
                      </el-icon>
                    </el-tooltip>
                  </div>
                </template>
              </el-statistic>
              <div class="statistic-footer">
                <div class="footer-item">
                  <span>than yesterday</span>
                  <span class="blue">
                    24%
                    <el-icon>
                      <CaretTop />
                    </el-icon>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-card>
      <el-card class="mt">
        <template #header>
          <div class="card-header">
            <h1>常用功能</h1>
          </div>
        </template>
        <div class="quick mt mb">
          <el-row>
            <el-col :span="4">
              <img :src="repair" alt="" />
              <p>设备维修</p>
            </el-col>
            <el-col :span="4">
              <img :src="progress" alt="" />
              <p>任务进度</p>
            </el-col>
            <el-col :span="4">
              <img :src="remain" alt="" />
              <p>代办事项</p>
            </el-col>
            <el-col :span="4">
              <img :src="total" alt="" />
              <p>营收占比</p>
            </el-col>
            <el-col :span="4">
              <img :src="money" alt="" />
              <p>营收统计</p>
            </el-col>
            <el-col :span="4">
              <img :src="daily" alt="" />
              <p>每日日报</p>
            </el-col>
          </el-row>
        </div>
      </el-card>

      <el-card class="mt">
        <template #header>
          <div class="card-header">
            <h1>能源统计</h1>
          </div>
        </template>

        <el-row>
          <el-col :span="6">
            <div ref="chartRef" style="width: 100%; height: 400px">1</div>
          </el-col>
          <el-col :span="18">
            <div ref="chartRef2" style="width: 100%; height: 400px">2</div>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
    <el-col :span="6">2</el-col>
  </el-row>
</template>

<script setup lang="ts">
import flash from "@/assets/flash.png";
import flash2 from "@/assets/flash2.png";
import flash3 from "@/assets/flash3.png";
import repair from "@/assets/repair.png";
import progress from "@/assets/progress.png";
import remain from "@/assets/remain.png";
import total from "@/assets/total.png";
import money from "@/assets/money.png";
import daily from "@/assets/daily.png";

import * as echarts from "echarts";
import { ref, onMounted } from "vue";

// vue3里不提倡操作 dom，所以不推荐使用 document.getElementById
// 使用 ref 来操作 dom
// 基于 dom 元素已经挂载完毕了,不能在 setup 里写了，要在 onMounted 里写

const chartRef = ref(null);
const chartRef2 = ref(null);

onMounted(() => {
  var myChart = echarts.init(chartRef.value);
  // 初始化的配置
  myChart.setOption({
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });

  var myChart2 = echarts.init(chartRef2.value);
  // 初始化的配置
  myChart2.setOption({
    title: {
      text: "ECharts 入门示例2",
    },
    tooltip: {},
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "line",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });

  const resizeChart = () => {
    myChart.resize();
    myChart2.resize();
  };

  // 添加事件监听窗口大小变化
  window.addEventListener("resize", resizeChart);
});
</script>

<style lang="less" scoped>
.title {
  display: flex;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  align-items: flex-end;
  margin-bottom: 20px;
  p {
    color: #86909c;
  }
}

.equipment {
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  .item {
    h1 {
      font-size: 36px;
    }
    ::deep(.el-statistic__content) {
      margin-top: 10px !important;
      margin-bottom: 10px;
    }
  }
}

.quick {
  margin-top: 30px;
  p {
    margin-top: 10px;
    color: #333;
  }
}
</style>

<template>
  <el-row :gutter="20">
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
    <el-col :span="6">
      <el-card>
        <template #header>
          <div class="card-header">
            <h1>设备总览</h1>
          </div>
        </template>
        <div ref="chartRef3" style="width: 100%; height: 240px"></div>
      </el-card>

      <el-card class="mt">
        <template #header>
          <div class="card-header">
            <h1>营收统计表</h1>
          </div>
        </template>

        <ul class="ranking-list">
          <li class="ranking-item">
            <span
              class="rank"
              style="background-color: rgb(103, 194, 58); color: #fff"
              >1</span
            >
            <span class="store-name">广州</span>
            <span class="sales">52,457</span>
            <span style="margin-left: 50px">
              24%
              <el-icon color="green"><CaretTop /></el-icon>
            </span>
          </li>

          <li class="ranking-item">
            <span
              class="rank"
              style="background-color: rgb(64, 158, 255); color: #fff"
              >2</span
            >
            <span class="store-name">上海</span>
            <span class="sales">323,234</span>
            <span style="margin-left: 50px">
              24%
              <el-icon color="red"><CaretBottom /></el-icon>
            </span>
          </li>

          <li class="ranking-item">
            <span
              class="rank"
              style="background-color: rgb(230, 162, 60); color: #fff"
              >3</span
            >
            <span class="store-name">佛山</span>
            <span class="sales">52,457</span>
            <span style="margin-left: 50px">
              24%
              <el-icon color="green"><CaretTop /></el-icon>
            </span>
          </li>

          <li class="ranking-item">
            <span class="rank">4</span>
            <span class="store-name">珠海</span>
            <span class="sales">17,540</span>
            <span style="margin-left: 50px">
              24%
              <el-icon color="green"><CaretTop /></el-icon>
            </span>
          </li>

          <li class="ranking-item">
            <span class="rank">5</span>
            <span class="store-name">深圳</span>
            <span class="sales">662,337</span>
            <span style="margin-left: 50px">
              24%
              <el-icon color="red"><CaretBottom /></el-icon>
            </span>
          </li>

          <li class="ranking-item">
            <span class="rank">6</span>
            <span class="store-name">厦门</span>
            <span class="sales">22,941</span>
            <span style="margin-left: 50px">
              24%
              <el-icon color="green"><CaretTop /></el-icon>
            </span>
          </li>

          <li class="ranking-item">
            <span class="rank">7</span>
            <span class="store-name">长沙</span>
            <span class="sales">565,221</span>
            <span style="margin-left: 50px">
              24%
              <el-icon color="green"><CaretTop /></el-icon>
            </span>
          </li>
        </ul>
      </el-card>

      <el-card class="mt">
        <template #header>
          <div class="card-header">
            <h1>故障报警</h1>
          </div>
        </template>
        <el-timeline style="max-width: 600px">
          <el-timeline-item
            :hollow="true"
            timestamp="2025/7/1"
            placement="top"
            type="danger"
          >
            <el-card>
              <h4>矿业北路通讯中断</h4>
            </el-card>
          </el-timeline-item>
          <el-timeline-item
            :hollow="true"
            timestamp="2025/7/2"
            placement="top"
            type="warning"
          >
            <el-card>
              <h4>黄河南路超出服务区</h4>
            </el-card>
          </el-timeline-item>
          <el-timeline-item
            :hollow="true"
            timestamp="2025/7/3"
            placement="top"
            type="danger"
          >
            <el-card>
              <h4>6 号机组服务异常</h4>
            </el-card>
          </el-timeline-item>

          <el-timeline-item
            :hollow="true"
            timestamp="2025/7/3"
            placement="top"
            type="success"
          >
            <el-card>
              <h4>7号机组服务正常</h4>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-card>
    </el-col>
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
import { ref, reactive } from "vue";
import { useChart } from "@/hooks/useChart";
import { chartDataApi, chartData2Api, chartData3Api } from "@/api/dashboard";

// 接口是异步调用的,无法保证这个执行完之后才执行 useChart
const setChartData = async () => {
  // 转成响应式的
  // 配置项放到函数内部
  const chartOptions: any = reactive({
    title: {
      text: "电量统计",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: [],
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
      ],
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value} kw",
      },
    },
    series: [
      {
        name: "",
        type: "line",
        data: [],
        smooth: true,
        lineStyle: {
          width: 5,
        },
        itemStyle: {
          color: "purple",
          shadowBlur: 10,
          shadowColor: "rgba(0, 255, 0, 0.5)",
        },
      },
      {
        name: "",
        type: "line",
        data: [],
        smooth: true,
        lineStyle: {
          width: 5,
        },
        itemStyle: {
          color: "skyblue",
          shadowBlur: 10,
          shadowColor: "rgba(0, 0, 255, 0.5)",
        },
      },
      {
        name: "",
        type: "line",
        data: [],
        smooth: true,
        lineStyle: {
          width: 5,
        },
        itemStyle: {
          color: "red",
          shadowBlur: 10,
          shadowColor: "rgba(0, 0, 255, 0.5)",
        },
      },
    ],
  });
  const res = await chartDataApi();
  chartOptions.legend.data = res.data.list.map((item: any) => item.name);
  for (let i = 0; i < res.data.list.length; i++) {
    chartOptions.series[i].name = res.data.list[i].name;
    chartOptions.series[i].data = res.data.list[i].data;
  }

  // 返回组件配置项
  return chartOptions;
};

// vue3里不提倡操作 dom，所以不推荐使用 document.getElementById
// 使用 ref 来操作 dom
// 基于 dom 元素已经挂载完毕了,不能在 setup 里写了，要在 onMounted 里写

const chartRef2 = ref(null);
useChart(chartRef2, setChartData);

const setPieChartData = async () => {
  // 转成响应式的
  // 配置项放到函数内部
  const chartOptions: any = reactive({
    tooltip: {
      trigger: "item",
      formatter: "{a}<br/>{b}:{c}",
    },
    legend: {
      top: "bottom",
    },
    series: [
      {
        name: "营收占比",
        type: "pie",
        radius: ["50%", "70%"],
        center: ["50%", "50%"],
        roseType: "area",
        emphasis: {
          label: {
            show: true,
            fontSize: "16",
            fontWeight: "bold",
          },
        },
        itemStyle: {
          borderRadius: 8,
        },
        data: [],
      },
    ],
    graphic: {
      type: "text",
      left: "center",
      top: "center",
      style: {
        text: "营收占比",
        fontSize: 24,
        fill: "#333",
      },
    },
  });
  const res = await chartData2Api();
  chartOptions.graphic.style.text = "营收占比";
  chartOptions.series[0].data = res.data.list;

  // 返回组件配置项
  return chartOptions;
};

// 饼图
const chartRef = ref(null);
useChart(chartRef, setPieChartData);

const setRadarChartData = async () => {
  // 转成响应式的
  // 配置项放到函数内部
  const chartOptions: any = reactive({
    title: {
      text: "设备总览",
    },
    radar: {
      indicator: [
        { name: "闲置数", max: 65 },
        { name: "使用数", max: 160 },
        { name: "故障数", max: 280 },
        { name: "维修数", max: 500 },
        { name: "更换数", max: 260 },
        { name: "报废数", max: 220 },
      ],
    },
    series: [
      {
        name: "设备总览",
        type: "radar",
        data: [
          {
            value: [],
            name: "设备总览",
          },
        ],
      },
    ],
  });
  const res = await chartData3Api();
  chartOptions.series[0].data[0].value = res.data.list;

  // 返回组件配置项
  return chartOptions;
};

// 雷达图
const chartRef3 = ref(null);
useChart(chartRef3, setRadarChartData);
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

.ranking-list {
  .ranking-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    .rank {
      display: inline-block;
      font-weight: bold;
      color: #666;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
    }
    .store-name {
      flex-grow: 1;
      padding: 0 10px;
    }
    .sales {
      color: #666;
    }
  }
  .ranking-item:nth-child(even) {
    background-color: rgb(253, 246, 236);
  }
}
</style>

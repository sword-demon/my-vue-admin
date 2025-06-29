import type { Ref } from "vue";
import * as echarts from "echarts";
import { onMounted, onBeforeUnmount, ref, markRaw } from "vue";

/**
 * 容器和配置项不一样
 * echarts 和 vue 的响应式有冲突
 */
export function useChart(
  chartRef: Ref<HTMLElement | null>,
  initialOptions: any
) {
  const chartInstance = ref<echarts.ECharts | null>(null);
  const chartOptions = ref(initialOptions); // 让它变成响应式的数据

  const initChart = () => {
    if (chartRef.value) {
      chartInstance.value = markRaw(echarts.init(chartRef.value)); // 取消 echart 的响应式
      chartInstance.value.setOption(chartOptions.value);
    }
  };

  const resizeChart = () => {
    chartInstance.value?.resize();
  };

  onMounted(() => {
    initChart();

    window.addEventListener("resize", resizeChart);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", resizeChart);
    // 释放内存
    if (chartInstance.value) {
      chartInstance.value.dispose(); // 释放图表所占用的资源
    }
  });
}

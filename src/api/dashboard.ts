import { get } from "@/utils/http";

const Api = {
  chartData: "/chartData",
  chartData2: "/chartData2",
};

function chartDataApi() {
  return get(Api.chartData);
}

function chartData2Api() {
  return get(Api.chartData2);
}

export { chartDataApi, chartData2Api };

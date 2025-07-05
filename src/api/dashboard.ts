import { get } from "@/utils/http";

const Api = {
  chartData: "/chartData",
  chartData2: "/chartData2",
  chartData3: "/chartData3",
};

function chartDataApi() {
  return get(Api.chartData);
}

function chartData2Api() {
  return get(Api.chartData2);
}

function chartData3Api() {
  return get(Api.chartData3);
}

export { chartDataApi, chartData2Api, chartData3Api };

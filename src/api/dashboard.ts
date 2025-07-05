import { get } from "@/utils/http";

const Api = {
  chartData: "/chartData",
};

function chartDataApi() {
  return get(Api.chartData);
}

export { chartDataApi };

import axios from "axios";
import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from "axios";
import { ElNotification } from "element-plus";

const service: AxiosInstance = axios.create({
  baseURL: "https://www.demo.com", // 学习的时候写死,后面要换成环境变量
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers.Authorization = "Bearer " + "无解的游戏";
    return config;
  },
  (error: AxiosError) => {
    ElNotification({
      title: "Error",
      message: error.message,
      type: "warning",
    });
    // 将错误抛出去
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response);
    // 必须 return,否则请求获取不到数据,会卡在这里
    return response;
  },
  (error: AxiosError) => {
    ElNotification({
      title: "Error",
      message: error.message,
      type: "error",
    });
    // 将错误抛出去
    return Promise.reject(error);
  }
);

export default service;

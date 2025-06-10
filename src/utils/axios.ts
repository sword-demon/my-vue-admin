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
    // 每个请求都得.data 所以这里直接返回到 data
    // 业务逻辑的判断提示还得从返回数据里根据后端提供的参数进行判断
    // 需要根据每个后端的对应的架构设计进行逻辑处理 code msg data 等参数内容,或者 status, result 等
    // 这里只要返回的 code 不是 200 就算错误进行提示
    if (response.data.code != 200) {
      ElNotification({
        title: "Warnning",
        message: response.data.message,
        type: "warning",
      });
    } else {
      return response.data;
    }
  },
  (error: AxiosError) => {
    // 这里报错是后端没有给你返回数据才会走这里
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

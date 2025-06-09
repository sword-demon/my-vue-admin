import service from "./axios";

// 声明响应的结果类型
interface ResponseData {
  code: number;
  data: any;
  message: string;
}

function get(url: string, params?: any): Promise<ResponseData> {
  return service.get(url, { params });
}

function post(url: string, data?: any): Promise<ResponseData> {
  return service.post(url, data);
}

export { get, post };

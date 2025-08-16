import { post } from "@/utils/http";

const Api = {
  List: "/stationList",
};

interface ListType {
  page: number;
  pageSize: number;
  name?: string;
  status?: number;
  id?: string;
}

function listApi(data: ListType) {
  return post(Api.List, data);
}

export { listApi };

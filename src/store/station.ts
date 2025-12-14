import type { RowType } from "@/types/station";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useStationStore = defineStore("station", () => {
  const rawData = ref<RowType>({
    name: "",
    id: "",
    city: "",
    fast: "",
    slow: "",
    status: 1,
    now: "",
    fault: "",
    person: "",
    tel: "",
  });

  const setRowData = (row: RowType) => {
    rawData.value = row;
  };

  return {
    rawData,
    setRowData,
  };
});

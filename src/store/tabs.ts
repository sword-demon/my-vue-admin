import { defineStore } from "pinia";
import { ref } from "vue";
import type { MenuItem } from "@/types/user";

/**
 * 使用组合式的方式来写
 */

export const useTabsStore = defineStore("tabs", () => {
  /**
   * tabs 的选项内容
   * 1. 名称
   * 2. 图标
   * 3. 路径
   *
   * 默认高亮是首页或者这里是数据看板
   * 可以用 MenuItem 类型,只是多了一个 children
   * MenuItem 的一个数组类型
   */
  const tabs = ref<MenuItem[]>([
    { name: "数据看板", icon: "DataLine", url: "/dashboard" },
  ]);

  // 当前默认的页签
  const currentTab = ref<{ name: string; url: string }>({
    name: "数据看板",
    url: "/dashboard",
  });

  // 每次点击页签要往 tabs 里添加记录
  // 注意不是无脑添加,当前的 tabs 里是否包含了当前点击的页签
  // 检测数组中是否包含指定数据
  /**
   * The `addTab` function in TypeScript checks if a tab with a specific URL already exists in an array
   * and adds it if it doesn't.
   * @param {string} name - The `name` parameter is a string that represents the name of the tab being
   * added to the array.
   * @param {string} url - The `url` parameter in the `addTab` function represents the URL of the tab
   * that you want to add to the tabs array.
   * @param {string} icon - The `icon` parameter in the `addTab` function is a string that represents
   * the icon associated with the tab being added. It is used to visually identify the tab within the
   * user interface.
   */
  const addTab = (name: string, url: string, icon: string) => {
    // 数组的 some 方法

    if (!tabs.value.some((tab) => tab.url === url)) {
      // 没有才往里面加
      tabs.value.push({ name, icon, url });
    }
  };

  const setCurrentTab = (name: string, url: string) => {
    currentTab.value = { name, url };
  };

  return {
    tabs,
    addTab,
    currentTab,
    setCurrentTab,
  };
});

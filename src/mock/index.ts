import Mock from "mockjs";

// mock 的代码不规范都行,只是用来模拟的

Mock.setup({
  timeout: "200-600", // 设置延迟时间
});

const domainPrefix = "https://www.demo.com";

// 管理员菜单数据
const menulist = [
  {
    name: "数据看板",
    url: "/dashboard",
    icon: "DataLine",
  },
  {
    name: "充电站管理",
    url: "/chargingstation",
    icon: "Lightning",
    children: [
      {
        name: "充电站监控",
        url: "/chargingstation/monitor",
        icon: "VideoCamera",
      },
      {
        name: "营收统计",
        url: "/chargingstation/revenue",
        icon: "DataAnalysis",
      },
      {
        name: "充电桩管理",
        url: "/chargingstation/fault",
        icon: "Warning",
      },
    ],
  },
  {
    name: "电子地图",
    url: "/map",
    icon: "MapLocation",
  },
  {
    name: "运营管理",
    url: "/operations",
    icon: "Files",
    children: [
      {
        name: "订单管理",
        url: "/operations/orders",
        icon: "DocumentCopy",
      },
      {
        name: "订单详情",
        url: "/operations/detail",
        icon: "Share",
      },
      {
        name: "计费管理",
        url: "/operations/total",
        icon: "Money",
      },
    ],
  },
  {
    name: "报警管理",
    url: "/alarm",
    icon: "Phone",
  },
  {
    name: "会员卡管理",
    url: "/equipment",
    icon: "Magnet",
  },
  {
    name: "招商管理",
    url: "/document",
    icon: "Document",
  },
  {
    name: "系统设置",
    url: "/system",
    icon: "Setting",
  },

  {
    name: "个人中心",
    url: "/personal",
    icon: "User",
  },
];
//运营专员的菜单
const menulist2 = [
  {
    name: "数据看板",
    url: "/dashboard",
    icon: "DataLine",
  },
  {
    name: "充电站管理",
    url: "/chargingstation",
    icon: "Lightning",
    children: [
      {
        name: "充电站监控",
        url: "/chargingstation/monitor",
        icon: "VideoCamera",
      },
      {
        name: "营收统计",
        url: "/chargingstation/revenue",
        icon: "DataAnalysis",
      },
      {
        name: "充电桩管理",
        url: "/chargingstation/fault",
        icon: "Warning",
      },
    ],
  },
  {
    name: "电子地图",
    url: "/map",
    icon: "MapLocation",
  },
  {
    name: "运营管理",
    url: "/operations",
    icon: "Files",
    children: [
      {
        name: "订单管理",
        url: "/operations/orders",
        icon: "DocumentCopy",
      },
      {
        name: "订单详情",
        url: "/operations/detail",
        icon: "Share",
      },
      {
        name: "计费管理",
        url: "/operations/total",
        icon: "Money",
      },
    ],
  },
  {
    name: "报警管理",
    url: "/alarm",
    icon: "Phone",
  },
  {
    name: "会员卡管理",
    url: "/equipment",
    icon: "Magnet",
  },
  {
    name: "个人中心",
    url: "/personal",
    icon: "User",
  },
];

// 登录接口
// 请求地址
// 请求方法
// 处理函数
Mock.mock(domainPrefix + "/login", "post", (options: any) => {
  // 将 body 的字符串内容转换成 json 对象
  // 解构赋值
  // 前端传值就必须传递 username 和 password
  const { username, password } = JSON.parse(options.body);
  // 因为是模拟的,所以没必要去比对用户名和密码是否匹配
  if (username === "admin" && password === "admin888") {
    // 就这样就认为是通过的就行
    return {
      code: 200,
      msg: "登录成功",
      data: {
        token: "dwqdqwdqwdqwdqwoniondownoqnudou123123n12lndqwodiqw",
        user: {
          username: "无解",
          roles: ["admin"],
        },
        menulist: menulist,
      },
    };
  } else if (username === "user" && password === "user666") {
    return {
      code: 200,
      msg: "登录成功",
      data: {
        token: "dwqdqwdqwdqwdqdownoqnudou123123n12lndqwodiqw",
        user: {
          username: "运营",
          roles: ["user"],
        },
        menulist: menulist2,
      },
    };
  } else {
    return {
      code: 401,
      msg: "用户名或密码错误",
    };
  }
});

// echart 图表接口,折线图
Mock.mock(domainPrefix + "/chartData", "get", () => {
  return {
    code: 200,
    message: "操作成功",
    data: {
      list: [
        { name: "充电量", data: [20, 20, 36, 10, 10, 20] },
        { name: "充电时长", data: [11, 22, 30, 13, 12, 19] },
        { name: "充电功率", data: [80, 30, 30, 50, 40, 19] },
      ],
    },
  };
});

// echarts 图表数据饼图接口
Mock.mock(domainPrefix + "/chartData2", "get", () => {
  return {
    code: 200,
    message: "操作成功",
    data: {
      list: [
        { value: 35, name: "充电桩" },
        { value: 30, name: "充电站" },
        { value: 25, name: "充电杆" },
      ],
    },
  };
});

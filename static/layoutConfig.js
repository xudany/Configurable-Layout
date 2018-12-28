let configData = {
  /**
   * 整体布局配置
   *
   * @type {Object}
   */
  "layoutConfig": {
    // 布局方式，可选参数：grid，absolute，默认为grid
    "layoutType": "absolute",
    // grid网格布局
    "gridLayoutConfig": {
      // 网格列数
      "colNum": 12,
      // 单行的高度
      "rowHeight": 16,
      // 网格中的最大行数
      "maxRows": 100,
      // 网格项目是否可拖动
      "isDraggable": false,
      // 网格项目是否可调整大小
      "isResizable": false,
      // 网格项目是否可以逆序排列
      "isMirrored": false,
      // 容器高度是否自适应内容
      "autoSize": false,
      // 网格布局是否垂直紧凑
      "verticalCompact": false,
      // 网格中元素的边距，第一个元素是水平边距，第二个元素是垂直边距
      "margin": [1, 1],
      // 网格布局是否使用 CSS transform 的属性
      "useCssTransforms": false,
      // 网格布局是否自适应窗口宽度
      "responsive": false,
      // 响应式布局定义的断点，设置列数更改的宽度
      "breakpoints": {
        "lg": 1200,
        "md": 996,
        "sm": 768,
        "xs": 480,
        "xxs": 0
      },
      // 定义每个断点的列数
      "cols": {
        "lg": 12,
        "md": 10,
        "sm": 6,
        "xs": 4,
        "xxs": 2
      }
    },
    /**
     * 布局中项目的配置
     *
     * @type {Object}
     */
    "gridItemConfig": {
      // 项目是否可拖动，null继承自父级
      "isDraggable": false,
      // 项目是否可调整大小，null继承自父级
      "isResizable": false,
      //项目样式
      "style": {
        "backgroundColor": "rgba(28,42,79,1)",
        "color": "white"
      }
    },
    /**
     * grid布局位置的配置
     *
     * @type {Object}
     * @property {number} x 项目的初始水平位置（放置在哪一列）
     * @property {number} y 项目的初始垂直位置（放置在哪一行）
     * @property {number} w 项目的初始宽度 最终的宽度为该值是乘以colWidth
     * @property {number} h 项目的初始高度 最终的宽度为该值是乘以rowHeight
     * @property {string} i 项目的唯一标识符
     * @property {string} component 项目渲染的组件
     * @property {string} url 项目渲染的组件所在路径
     * @property {string} name 项目名称
     *
     */
    // grid典型门字型结构
    // "layout": [
    //   {"x": 0, "y": 0, "w": 120, "h": 4, "i": "0", "component": "Mheader", "url": "components/Mheader", "name": "Header"},
    //   {"x": 0, "y": 1, "w": 2, "h": 53.5, "i": "1", "component": "Menu", "url": "components/Menu", "name": "LeftAside"},
    //   {"x": 2, "y": 1, "w": 8, "h": 53.5, "i": "2", "component": "Main", "url": "components/Main", "name": "Main"},
    //   {"x": 10, "y": 1, "w": 2, "h": 53.5, "i": "3", "component": "ChangeRouter", "url": "components/ChangeRouter", "name": "RightAside"}
    // ],
    // grid上中下结构
    // "layout": [
    //   {"x": 0, "y": 0, "w": 120, "h": 4, "i": "0", "component": "Mheader", "url": "components/Mheader", "name": "Header"},
    //   {"x": 0, "y": 1, "w": 120, "h": 50, "i": "1", "component": "Main", "url": "components/Main", "name": "Main"},
    //   {"x": 0, "y": 2, "w": 120, "h": 4, "i": "2", "component": "Mfooter", "url": "components/Mfooter", "name": "Footer"}
    // ],
    // grid上左中结构
    // "layout": [
    //   {"x": 0, "y": 0, "w": 120, "h": 4, "i": "0", "component": "Mheader", "url": "components/Mheader", "name": "Header"},
    //   {"x": 0, "y": 1, "w": 2, "h": 50, "i": "1", "component": "Menu", "url": "components/Menu", "name": "LeftAside"},
    //   {"x": 2, "y": 1, "w": 10, "h": 50, "i": "2", "component": "Main", "url": "components/Main", "name": "Main"}
    // ],
    /**
     * absolute布局位置的配置
     *
     * @type {Object}
     * @property {string} x 项目的初始水平位置（即css中的left）
     * @property {string} y 项目的初始垂直位置（即css中的top）
     * @property {string} w 项目的初始宽度
     * @property {string} h 项目的初始高度
     * @property {string} i 项目的唯一标识符
     * @property {string} component 项目渲染的组件
     * @property {string} url 项目渲染的组件所在路径
     * @property {string} name 项目名称
     *
     */
    // absolute典型门字型结构
    "layout": [
      {"x": "0", "y": "0", "w": "100%", "h": "7%", "i": "0", "component": "Mheader", "url": "components/Mheader", "name": "Header"},
      {"x": "0", "y": "7.3%", "w": "17%", "h": "92.7%", "i": "1", "component": "Menu", "url": "components/LeftAside", "name": "LeftAside"},
      {"x": "17.1%", "y": "7.3%", "w": "65.8%", "h": "92.7%", "i": "2", "component": "Main", "url": "components/Main", "name": "Main"},
      {"x": "83%", "y": "7.3%", "w": "17%", "h": "92.7%", "i": "3", "component": "ChangeRouter", "url": "components/RightAside", "name": "RightAside"}
    ],
    // absolute上中下结构
    // "layout": [
    //   {"x": "0", "y": "0", "w": "100%", "h": "7%", "i": "0", "component": "Mheader", "url": "components/Mheader", "name": "Header"},
    //   {"x": "0", "y": "7.3%", "w": "100%", "h": "83.9%", "i": "1", "component": "Main", "url": "components/Main", "name": "Main"},
    //   {"x": "0", "y": "91.4%", "w": "100%", "h": "8.6%", "i": "2", "component": "Mfooter", "url": "components/Mfooter", "name": "Footer"}
    // ],
    // absolute上左中结构
    // "layout": [
    //   {"x": "0", "y": "0", "w": "100%", "h": "7%", "i": "0", "component": "Mheader", "url": "components/Mheader", "name": "Header"},
    //   {"x": "0", "y": "7.3%", "w": "17%", "h": "92.7%", "i": "1", "component": "LeftAside", "url": "components/LeftAside", "name": "LeftAside"},
    //   {"x": "17.1%", "y": "7.3%", "w": "92.8%", "h": "92.7%", "i": "2", "component": "Main", "url": "components/Main", "name": "Main"}
    // ],
    /**
     * 路由配置
     *
     * @type {Object}
     */
    // 主路由配置
    "rootRouter": {
      // 路由名
      "name": "Home",
      // 组件名
      "component": "Home",
      // 对应的路由路径，可以为src文件下任意文件
      "url": "components/Home",
      //路由类型
      "type": "component"
    },
    // 次级路由配置
    "routerList": [
      {
        "name": "Main",
        "component": "Main",
        "url": "components/Main",
        "type": "component"
      },
      {
        "name": "Collection",
        "component": "Collection",
        "url": "components/Collection",
        "type": "component"
      },
      {
        "name": "LeftAside",
        "component": "LeftAside",
        "url": "components/LeftAside",
        "type": "component"
      },
      {
        "name": "RightAside",
        "component": "RightAside",
        "url": "components/RightAside",
        "type": "component"
      },
      {
        "name": "Mheader",
        "component": "Mheader",
        "url": "components/Mheader",
        "type": "component"
      },
    ]
  }
}

export default configData

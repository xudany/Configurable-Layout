<template>
  <absolute-layout
    :layout.sync="layoutConfig.layout"
    :col-num="layoutConfig.gridLayoutConfig.colNum"
    :row-height="layoutConfig.gridLayoutConfig.rowHeight"
    :max-rows="layoutConfig.gridLayoutConfig.maxRows"
    :is-draggable="layoutConfig.gridLayoutConfig.isDraggable"
    :is-resizable="layoutConfig.gridLayoutConfig.isResizable"
    :is-mirrored="layoutConfig.gridLayoutConfig.isMirrored"
    :auto-size="layoutConfig.gridLayoutConfig.autoSize"
    :vertical-compact="layoutConfig.gridLayoutConfig.verticalCompact"
    :use-css-transforms="layoutConfig.gridLayoutConfig.useCssTransforms"
    :responsive="layoutConfig.gridLayoutConfig.responsive"
    :breakpoints="layoutConfig.gridLayoutConfig.breakpoints"
    :cols="layoutConfig.gridLayoutConfig.cols"
    :margin="layoutConfig.gridLayoutConfig.margin"
  >

    <absolute-item v-for="item in layoutConfig.layout"
                   :key="item.i"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :is-draggable="layoutConfig.gridItemConfig.isDraggable"
                   :is-resizable="layoutConfig.gridItemConfig.isResizable"
                   :style="layoutConfig.gridItemConfig.style"

    >
      <!--{{item.name}}-->
      <component :is="item.component"></component>
    </absolute-item>

  </absolute-layout>

</template>

<script>
  import AbsoluteLayout from './AbsoluteLayout'
  import AbsoluteItem from './AbsoluteItem'
  import configData from '../../ConfigData/index'

  export default {
    name: "ConfigurableAbsoluteLayout",
    components: {
      AbsoluteLayout,
      AbsoluteItem
    },
    data() {
      return {
        /**
         * 整体布局配置
         *
         * @type {Object}
         */
        "layoutConfig": {
          // 网格布局
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
           * 布局位置的配置
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
           */
          // 典型门字型结构
          // "layout": [
          //   {"x": "0", "y": "0", "w": "100%", "h": "8%", "i": "0", "component": "Mheader", "url": "components/Mheader", "name": "Header"},
          //   {"x": "0", "y": "8.2%", "w": "100%", "h": "83%", "i": "1", "component": "Main", "url": "components/Main", "name": "Main"},
          //   {"x": "0", "y": "91.4%", "w": "100%", "h": "8.6%", "i": "2", "component": "Mfooter", "url": "components/Mfooter", "name": "Footer"}
          // ],
          // "layout": [
          //   {"x": "0", "y": "0", "w": "100%", "h": "8%", "i": "0", "component": "Mheader", "url": "components/Mheader", "name": "Header"},
          //   {"x": "0", "y": "8.2%", "w": "17%", "h": "91.8%", "i": "1", "component": "Menu", "url": "components/LeftAside", "name": "LeftAside"},
          //   {"x": "17.1%", "y": "8.2%", "w": "65.8%", "h": "91.8%", "i": "2", "component": "Main", "url": "components/Main", "name": "Main"},
          //   {"x": "83%", "y": "8.2%", "w": "17%", "h": "91.8%", "i": "3", "component": "ChangeRouter", "url": "components/RightAside", "name": "RightAside"}
          // ],
          "layout": [
            {"x": "0", "y": "0", "w": "100%", "h": "8%", "i": "0", "component": "Mheader", "url": "components/Mheader", "name": "Header"},
            {"x": "0", "y": "8.2%", "w": "17%", "h": "91.8%", "i": "1", "component": "LeftAside", "url": "components/LeftAside", "name": "LeftAside"},
            {"x": "17.1%", "y": "8.2%", "w": "92.8%", "h": "91.8%", "i": "2", "component": "Main", "url": "components/Main", "name": "Main"}
          ],
        },
      }
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {


        let layout = configData.layoutConfig.layout;

        let arr = [];

        layout.map((item) => {

          let newData =
            {
              ...item,
              // component: (resolve) => require(['./' + item.component + '.vue'], resolve)
              // component: (resolve) => require(['../../../' + item.component + '.vue'], resolve)
              component: () => import('@/' + item.url + '.vue')
              // component: this.getComponent(newArr, childRoutes, './components/' + item.name + '.vue')
            };
          arr.push(newData);

        });

        console.log('component:', arr);

        this.layoutConfig.layout = arr;


      },
    }
  }
</script>

<style scoped>

</style>

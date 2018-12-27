<template>
  <div>
    <grid-layout
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
      @layout-updated="layoutUpdatedEvent"
    >
      <grid-item v-for="item in layoutConfig.layout"
                 :key="item.i"
                 :x="item.x"
                 :y="item.y"
                 :w="item.w"
                 :h="item.h"
                 :i="item.i"
                 :is-draggable="layoutConfig.gridItemConfig.isDraggable"
                 :is-resizable="layoutConfig.gridItemConfig.isResizable"
                 @resized="resizedEvent"
                 @moved="movedEvent"
                 @resize=" resizeEvent "
                 @move=" moveEvent "
                 :style="layoutConfig.gridItemConfig.style"

      >
        {{item.name}}
        <component :is="item.component"></component>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
  import VueGridLayout from 'vue-grid-layout';
  import configData from '../../../static/layoutConfig'

  import axios from 'axios';


  export default {
    name: "ConfigurableGridLayout",
    components: {VueGridLayout},
    data() {
      return {
        // layoutConfig: configData,
        layoutConfig: {
          "gridLayoutConfig": {
            "colNum": configData.layoutConfig.gridLayoutConfig.colNum,
            "rowHeight": configData.layoutConfig.gridLayoutConfig.rowHeight,
            "maxRows": configData.layoutConfig.gridLayoutConfig.maxRows,
            "isDraggable": configData.layoutConfig.gridLayoutConfig.isDraggable,
            "isResizable": configData.layoutConfig.gridLayoutConfig.isResizable,
            "isMirrored": configData.layoutConfig.gridLayoutConfig.isMirrored,
            "autoSize": configData.layoutConfig.gridLayoutConfig.autoSize,
            "verticalCompact": configData.layoutConfig.gridLayoutConfig.verticalCompact,
            "margin": configData.layoutConfig.gridLayoutConfig.margin,
            "useCssTransforms": configData.layoutConfig.gridLayoutConfig.useCssTransforms,
            "responsive": configData.layoutConfig.gridLayoutConfig.responsive,
            "breakpoints": configData.layoutConfig.gridLayoutConfig.breakpoints,
            "cols": configData.layoutConfig.gridLayoutConfig.cols
          },
          "gridItemConfig": {
            "isDraggable": configData.layoutConfig.gridItemConfig.isDraggable,
            "isResizable": configData.layoutConfig.gridItemConfig.isResizable,
            "style": configData.layoutConfig.gridItemConfig.style
          },
          "layout": [
            {"x": 0, "y": 0, "w": 120, "h": 4, "i": "0", "component": "Mheader", "name": "Header"},
            {"x": 0, "y": 1, "w": 2, "h": 50, "i": "1", "component": "LeftAside", "name": "LeftAside"},
            {"x": 2, "y": 1, "w": 8, "h": 50, "i": "2", "component": "Main", "name": "Main"},
            {"x": 10, "y": 1, "w": 2, "h": 50, "i": "3", "component": "RightAside", "name": "RightAside"}
          ]
        },
        // layoutConfig: {
        //   "gridLayoutConfig": {
        //     "colNum": 12,
        //     "rowHeight": 16,
        //     "maxRows": 100,
        //     "isDraggable": false,
        //     "isResizable": false,
        //     "isMirrored": false,
        //     "autoSize": true,
        //     "verticalCompact": false,
        //     "margin": [1, 1],
        //     "useCssTransforms": true,
        //     "responsive": false,
        //     "breakpoints": {"lg": 1200, "md": 996, "sm": 768, "xs": 480, "xxs": 0},
        //     "cols": {"lg": 12, "md": 10, "sm": 6, "xs": 4, "xxs": 2}
        //   },
        //   "gridItemConfig": {
        //     "isDraggable": false,
        //     "isResizable": false,
        //     "style": {
        //       "backgroundColor": "grey"
        //     }
        //   },
        //   "layout": [
        //     {"x": 0, "y": 0, "w": 120, "h": 4, "i": "0", "component": "Mheader", "name": "Header"},
        //     {"x": 0, "y": 1, "w": 2, "h": 50, "i": "1", "component": "LeftAside", "name": "LeftAside"},
        //     {"x": 2, "y": 1, "w": 8, "h": 50, "i": "2", "component": "Main", "name": "Main"},
        //     {"x": 10, "y": 1, "w": 2, "h": 50, "i": "3", "component": "RightAside", "name": "RightAside"}
        //   ]
        // },
        layoutOne: [
          {"x": 0, "y": 0, "w": 120, "h": 4, "i": "0", "component": "Mheader", "name": "Header"},
          {"x": 0, "y": 1, "w": 2, "h": 50, "i": "1", "component": "LeftAside", "name": "LeftAside"},
          {"x": 2, "y": 1, "w": 8, "h": 50, "i": "2", "component": "Main", "name": "Main"},
          {"x": 10, "y": 1, "w": 2, "h": 50, "i": "3", "component": "RightAside", "name": "RightAside"}
        ],
        layoutTwo: [
          {"x": 0, "y": 0, "w": 120, "h": 4, "i": "0", "component": "Mheader", "name": "Header"},
          {"x": 0, "y": 1, "w": 120, "h": 50, "i": "1", "component": "Main", "name": "Main"},
          {"x": 0, "y": 2, "w": 120, "h": 4, "i": "2", "component": "Mfooter", "name": "Footer"}
        ],
        layoutThree: [
          {"x": 0, "y": 0, "w": 120, "h": 4, "i": "0", "component": "Mheader", "name": "Header"},
          {"x": 0, "y": 1, "w": 2, "h": 50, "i": "1", "component": "LeftAside", "name": "LeftAside"},
          {"x": 2, "y": 1, "w": 10, "h": 50, "i": "2", "component": "Main", "name": "Main"}
        ]
      }
    },
    created() {
      this.getData();
    },
    methods: {
      movedEvent: function (i, newX, newY) {
        console.log("MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
      },
      resizedEvent: function (i, newH, newW, newHPx, newWPx) {
        console.log("RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
      },
      getData() {

        // axios.get('../../static/layoutConfig.json')
        //   .then(function (response) {
        //
        //     this.layoutConfig = response.data.layoutConfig;
        //
        //     let layout = this.layoutConfig.layout;
        //
        //     let arr = [];
        //
        //     layout.map((item) => {
        //
        //       let newData =
        //         {
        //           ...item,
        //           // component: (resolve) => require(['./' + item.component + '.vue'], resolve)
        //           // component: (resolve) => require(['../../../' + item.component + '.vue'], resolve)
        //           component: () => import('@/components/' + item.component + '.vue')
        //           // component: this.getComponent(newArr, childRoutes, './components/' + item.name + '.vue')
        //         };
        //       arr.push(newData);
        //
        //     });
        //
        //     console.log('component:', arr);
        //
        //     this.layoutConfig.layout = arr;
        //
        //
        //   }.bind(this))
        //   .catch(function (error) {
        //     console.log(error);
        //   });

        let layout = configData.layoutConfig.layout;

        let arr = [];

        layout.map((item) => {

          let newData =
            {
              ...item,
              // component: (resolve) => require(['./' + item.component + '.vue'], resolve)
              // component: (resolve) => require(['../../../' + item.component + '.vue'], resolve)
              component: () => import('@/components/' + item.component + '.vue')
              // component: this.getComponent(newArr, childRoutes, './components/' + item.name + '.vue')
            };
          arr.push(newData);

        });

        console.log('component:', arr);

        this.layoutConfig.layout = arr;


      },

      // 布局完成更新并重新计算所有网格项的位置
      layoutUpdatedEvent(newLayout) {
        this.$emit("layoutUpdatedEvent", newLayout);
        console.log("Updated layout: ", newLayout)
      },

      // 每次移动一个项目并改变位置
      moveEvent(i, newX, newY) {
        this.$emit("moveEvent", i, newX, newY);
        console.log(" MOVE i = " + i + "，X = " + newX + "，Y = " + newY);
      },

      // 每次调整项目的大小并更改大小
      resizeEvent(i, newH, newW, newHPx, newWPx) {
        this.$emit("resizeEvent", i, newH, newW, newHPx, newWPx);
        console.log("RESIZE i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
      },

      // 每次项目完成移动并更改位置
      movedEvent(i, newX, newY) {
        this.$emit("movedEvent", i, newX, newY);
        console.log("MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
      },

      // 每次完成一个项目的大小调整和更改大小
      resizedEvent(i, newH, newW, newHPx, newWPx) {
        this.$emit("resizedEvent", i, newH, newW, newHPx, newWPx);
        console.log("RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
      },


    }
  }
</script>

<style>
  body {
    margin: 0;
  }
</style>

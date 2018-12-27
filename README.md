# Configurable-Layout

基于[vue-grid-layout](https://github.com/jbaysolutions/vue-grid-layout)

## 使用可配置布局

在项目工程首页引入使用

```javascript
<template>
  <configurable-grid-layout></configurable-grid-layout>
</template>

<script>
  import ConfigurableGridLayout from 'themeproject/lib/components/ConfigurableGridLayout';

  export default {
    components: {
      ConfigurableGridLayout
    }
  }
</script>
```



在static/layoutConfig.json中进行布局配置

```json
{
  "layoutConfig": {
    "gridLayoutConfig": {
      "colNum": 12,
      "rowHeight": 16,
      "isDraggable": false,
      "isResizable": false,
      "isMirrored": false,
      "verticalCompact": false,
      "margin": [1, 1],
      "useCssTransforms": true,
      "responsive": false
    },
    "gridItemConfig": {
      "isDraggable": false,
      "isResizable": false,
      "style": {
        "backgroundColor": "grey"
      }
    },
    "layout": [
      {"x": 0, "y": 0, "w": 120, "h": 4, "i": "0", "component": "Mheader", "name": "Header"},
      {"x": 0, "y": 1, "w": 2, "h": 50, "i": "1", "component": "Menu", "name": "LeftAside"},
      {"x": 2, "y": 1, "w": 8, "h": 50, "i": "2", "component": "Main", "name": "Main"},
      {"x": 10, "y": 1, "w": 2, "h": 50, "i": "3", "component": "ChangeRouter", "name": "RightAside"}
    ]
  }
}
```



### 配置文件说明

gridLayoutConfig对象里面的参数是对于最外层  <grid-layout> 的配置

#### gridLayoutConfig的属性

| 属性             | 类型    | 说明                                                         | 默认  |
| ---------------- | ------- | ------------------------------------------------------------ | ----- |
| colNum           | Number  | 网格的列数                                                   | 12    |
| rowHeight        | Number  | 单行的高度                                                   | 16    |
| isDraggable      | Boolean | 网格项目是否可拖动                                           | false |
| isResizable      | Boolean | 网格项目是否可调整大小                                       | false |
| isMirrored       | Boolean | 布局是否反转RTL / LTR                                        | false |
| verticalCompact  | Boolean | 布局是否垂直紧凑的                                           | false |
| margin           | Array   | 网格中元素的边距，第一个元素是水平边距，第二个元素是垂直边距 | [1,1] |
| useCssTransforms | Boolean | 是否使用CSS的transform属性                                   | true  |
| responsive       | Boolean | 布局是否响应窗口宽度                                         | false |



gridItemConfig对象里面的参数是对于 <grid-item> 的配置

#### gridItemConfig的属性

| 属性        | 类型    | 说明                   | 默认                            |
| ----------- | ------- | ---------------------- | ------------------------------- |
| isDraggable | Boolean | 网格项目是否可拖动     | false                           |
| isResizable | Boolean | 网格项目是否可调整大小 | false                           |
| style       | Object  | 网格项目是否可拖动     | {   "backgroundColor": "grey" } |



layout数组是对于网格布局排列的配置

#### layout的属性

| 属性      | 类型   | 说明                                         | 默认 |
| --------- | ------ | -------------------------------------------- | ---- |
| x         | Number | 项目的初始水平位置（应在哪个列中放置）       | -    |
| y         | Number | 项目的初始垂直位置（应该放置哪一行）         | -    |
| w         | Number | 项目的初始宽度，该值是一个数字乘以`colWidth` | -    |
| h         | Number | 项目的初始高度，该值是一个数字乘以 rowHeight | -    |
| i         | String | 项目的唯一标识符，必填                       | -    |
| component | String | 项目中要填充的组件                           | -    |
| name      | String | 项目的名称                                   | -    |





## 使用可配置路由

在项目routet/index.js文件中使用

```javascript
import {setRoute} from 'themeproject';

export default setRoute;
```



在项目的main.js 文件中修改

```javascript
import setRoute from './router';

async function initApp() {

  //设置路由
  let router = await setRoute();

  return new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  });
}

initApp();
```



在static/routerList.json中进行布局配置

```json
{
  "routerList": [
    {
      "name": "HelloWorld",
      "component": "HelloWorld",
      "url": "./HelloWorld.vue"
    },
    {
      "name": "Test",
      "component": "Test",
      "url": "./test/test.vue"
    }
  ]
}
```



### 配置文件说明

| 属性      | 类型   | 说明                   | 默认 |
| --------- | ------ | ---------------------- | ---- |
| name      | String | 路由的唯一标识符，必填 | -    |
| componnet | String | 路由所使用的component  | -    |
| url       | String | 路由的所在路径         | -    |



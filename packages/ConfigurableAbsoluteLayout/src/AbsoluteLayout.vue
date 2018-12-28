<template>
  <div ref="item" class="absolute-layout" :style="mergedStyle">
    <slot></slot>
  </div>
</template>

<script>
  import AbsoluteItem from './AbsoluteItem'

  export default {
    name: "AbsoluteLayout",
    components: {
      AbsoluteItem,
    },
    props: {
      autoSize: {
        type: Boolean,
        default: true
      },
      colNum: {
        type: Number,
        default: 12
      },
      rowHeight: {
        type: Number,
        default: 150
      },
      maxRows: {
        type: Number,
        default: Infinity
      },
      margin: {
        type: Array,
        default: function () {
          return [10, 10];
        }
      },
      isDraggable: {
        type: Boolean,
        default: true
      },
      isResizable: {
        type: Boolean,
        default: true
      },
      isMirrored: {
        type: Boolean,
        default: false
      },
      useCssTransforms: {
        type: Boolean,
        default: true
      },
      verticalCompact: {
        type: Boolean,
        default: true
      },
      layout: {
        type: Array,
        required: true,
      },
      responsive: {
        type: Boolean,
        default: false
      },
      breakpoints: {
        type: Object,
        default: function () {
          return {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}
        }
      },
      cols: {
        type: Object,
        default: function () {
          return {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}
        },
      },
    },
    data: function () {
      return {
        width: null,
        mergedStyle: {},
        lastLayoutLength: 0,
        isDragging: false,
        placeholder: {
          x: 0,
          y: 0,
          w: 0,
          h: 0,
          i: -1
        },
        layouts: {}, // array to store all layouts from different breakpoints
        lastBreakpoint: null, // store last active breakpoint
        originalLayout: null, // store original Layout
      };
    },
  }
</script>

<style scoped>
  .vue-grid-layout {
    position: relative;
    transition: height 200ms ease;
  }
</style>

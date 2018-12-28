<template>
  <component :is="component"></component>
</template>

<script>
  import ConfigurableGridLayout from '../../ConfigurableGridLayout/index.js'
  import ConfigurableAbsoluteLayout from '../../ConfigurableAbsoluteLayout/index.js'
  import configData from '../../../static/layoutConfig'

  export default {
    name: "ConfigurableLayout",
    component: {
      ConfigurableGridLayout,
      ConfigurableAbsoluteLayout
    },
    data() {
      return {}
    },
    created() {
      this.selectLayoutType(configData.layoutConfig.layoutType);
    },
    methods: {
      selectLayoutType(type) {
        switch (type) {
          case "grid":
            // this.component = () => import('../../ConfigurableGridLayout/src/ConfigurableGridLayout');
            this.component = 'ConfigurableGridLayout';
            break;
          case "absolute":
            // this.component = () => import('../../ConfigurableAbsoluteLayout/src/ConfigurableAbsoluteLayout');
            this.component = 'ConfigurableAbsoluteLayout';
            break;
          default:
            // this.component = () => import('../../ConfigurableGridLayout/src/ConfigurableGridLayout');
            this.component = 'ConfigurableGridLayout';
            break;
        }
      }
    }
  }
</script>

<style scoped>

</style>

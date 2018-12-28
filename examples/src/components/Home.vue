<template>
  <!--<configurable-grid-layout></configurable-grid-layout>-->
  <!--<configurable-absolute-layout></configurable-absolute-layout>-->
  <configurable-layout></configurable-layout>
</template>

<script>

  import ConfigurableLayout from "../../../packages/ConfigurableLayout/src/ConfigurableLayout";
  export default {
    name: "collection",
    components: {ConfigurableLayout}
  }
</script>

<style>
  body {
    background-color: black;
  }
</style>

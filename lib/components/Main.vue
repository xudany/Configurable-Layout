<template>
    <div :style="note">
    </div>
</template>

<script>
  export default {
    name: "Main",
    data() {
      return {
        note: {
          width: "100%",
          height: "50rem",
          backgroundImage: "url(" + require("../assets/logo.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        },
      }
    }
  }
</script>

<style scoped>

</style>

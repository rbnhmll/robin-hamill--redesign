<template>
  <header class="v-header">
    <div class="wrapper">
      <navigation/>
      <slot></slot>
    </div>
  </header>
</template>

<script>
import Navigation from "./Navigation.vue";

export default {
  name: "VHeader",
  components: {
    Navigation
  }
};
</script>


<style scoped lang="stylus">
@import '../assets/styles/_vars'
@import '../assets/styles/_mixins'
</style>

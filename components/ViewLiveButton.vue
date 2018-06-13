<template>
  <a :href="url" target="_blank">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "ViewLiveButton",
  props: ["url"],
  data() {
    return {};
  }
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/_vars'
@import '../assets/styles/_mixins'

a
  display inline-block
  text-align center
  min-width 220px
  text-decoration none
  padding 10px
  border-radius 50px
  color #fff
  background #045686
</style>

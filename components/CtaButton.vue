<template>
  <nuxt-link :to="url">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  name: "CtaButton",
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
  text-decoration none
  padding 1.5em 4em
  border-radius 50px
  background #fff
  color #3A8DF1
</style>

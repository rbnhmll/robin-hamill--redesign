<template>
    <nuxt-link :to="url">See More Projects</nuxt-link>
</template>

<script>
export default {
  name: "SeeMoreButton",
  props: ["url", "value"],
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
  display block
  text-align center
  padding 1rem
  border-radius 50px
  background $turquoise
  color $white
  width 340px
  font-size 2.4rem
  font-weight 600
  margin 11rem auto
</style>

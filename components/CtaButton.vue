<template>
  <nuxt-link :to="url">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: 'CtaButton',
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="stylus">
@import '~assets/styles/_vars'
@import '~assets/styles/_mixins'

a
  text-decoration none
  padding 1.8rem
  border-radius 50px
  background $white
  color $blue
  text-align center
  font-size 2.4rem
  font-weight bold
</style>

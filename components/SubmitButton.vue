<template>
  <input
    :value="value"
    type="submit"
  >
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    value: {
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

input[type=submit]
  text-decoration none
  padding 2rem
  border-radius 50px
  border none
  background $turquoise
  color $white
  width 470px
  font-size 2.4rem
  font-weight 600
</style>

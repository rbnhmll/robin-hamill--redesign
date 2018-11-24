<template>
  <h1>
    <nuxt-link to="/">
      <img
        v-if="$route.name === 'contact'"
        src="~/assets/images/logo.png"
        alt="Logo: Robin Hamill."
      >
      <img
        v-else
        src="~/assets/images/logo.png"
        alt="Logo: Robin Hamill."
      >
    </nuxt-link>
  </h1>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style scoped lang="stylus">
@import '~assets/styles/_vars'
@import '~assets/styles/_mixins'

h1
  margin 0

a
  display block

img
  max-height 35px
  display block
</style>

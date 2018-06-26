<template>
  <h1>
    <nuxt-link to="/">
      <img src="../assets/images/logo.png" alt="Logo: Robin Hamill.">
    </nuxt-link>
  </h1>
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/_vars'
@import '../assets/styles/_mixins'

img
  max-height 35px
  display block
</style>

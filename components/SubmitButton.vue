<template>
  <input type="submit" :value="value">
</template>

<script>
export default {
  name: "SubmitButton",
  props: ["value"],
  data() {
    return {};
  }
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/_vars'
@import '../assets/styles/_mixins'

input[type=submit]
  text-decoration none
  padding 1.5em 4em
  border-radius 50px
  border none
  background $turquoise
  color $white
  width 470px
</style>

<template>
  <section>
    <h3 class="h1">Current Projects</h3>
    <ul>
      <li>Billig Fitness</li>
      <li>Wantboard</li>
      <li>The Code</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "CurrentProjects"
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/_vars'
@import '../assets/styles/_mixins'

section
  text-align center

ul
  display flex
  justify-content center
  border-top 1px solid #E7E7E7
  border-bottom 1px solid #E7E7E7
  padding 55px 0
  list-style none
</style>

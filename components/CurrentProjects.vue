<template>
  <section>
    <h3 class="h1">Ongoing Projects</h3>
    <div class="icon-row">
      <div class="wrapper">
        <ul>
          <li>
            <a href="http://billigfitness.dk/" target="_blank">
              <img src="billigFitness.png" alt="Billig Fitness">
            </a>
          </li>
          <li>
            <a href="https://www.wantboard.ca/" target="_blank">
              <img src="wantboard.png" alt="Wantboard">
            </a>
          </li>
          <li>
            <a href="https://thecode.ca/" target="_blank">
              <img src="theCode.png" alt="The Code">
            </a>
          </li>
          <li>
            <a href="https://survivalstore.dk/" target="_blank">
              <img src="survivalstore.png" alt="Survival Store">
            </a>
          </li>
        </ul>
      </div>
    </div>
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
  margin 60px 0

.icon-row
  border-top 1px solid #979797
  border-bottom 1px solid #979797

ul
  display flex
  flex-wrap wrap
  justify-content space-around
  padding 45px 0
  margin 0
  list-style none

li
  margin 10px

a
  display inline-block

img
  height 30px
</style>

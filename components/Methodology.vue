<template>
  <section class="methodology">
    <div class="wrapper">
      <h2 class="h1">Methodology</h2>
      <div class="steps">
        <div
          v-for="(step, i) in steps"
          :class="['step', `step--${step.class}`]"
          :key="i"
        >
          <img
            :src="images(`./${step.image}`)"
            alt=""
          >
          <h4>{{ step.title }}</h4>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const images = require.context('~/assets/images', false, /\.png$/)

export default {
  name: 'Methodology',
  data() {
    return {
      images,
      steps: [
        {
          class: 'exploration',
          title: 'Exploration',
          image: 'exploration.png',
          description: `
            Together we invesigate the underlaying issues of your painpints in order to find for simplest and most effective approach.
          `
        },
        {
          class: 'development',
          title: 'Creation',
          image: 'development.png',
          description: `
            Carefully develop and deploy business-case specific solutions to better engage with your customers, and improve their shopping experience.
          `
        },
        {
          class: 'growth',
          title: 'Growth',
          image: 'growth.png',
          description: `
            Your customers stay on your site longer, buyt more, and return more often, making you one of their favorite retailers.
          `
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~assets/styles/_vars'
@import '~assets/styles/_mixins'

.methodology
  padding 5.5rem 0
  // background-image url('~assets/images/methodologyBackground.svg')
  background-size 60%
  background-repeat no-repeat
  background-position top right -10px
  // border-top 1px solid $borderColour

h4
  font-size 2.4rem
  color $blue
  margin-top 0

.steps
  margin-top 10rem
  display grid
  grid-gap 0 5rem
  grid-template-columns repeat(3, 1fr)
  grid-template-rows repeat(3, auto)

.step
  position relative
  box-shadow $shadow
  padding 2.5rem
  border-radius 25px
  background rgba($white, 0.75)

  img
    position absolute
    opacity 0.15
    left 0
    top 0
    max-width 15rem
    max-height 14.5rem
    transform translate(-40%, -40%)
    // z-index -1

  &--exploration
    grid-column 1 / span 1
    grid-row 1 / span 2

  &--development
    grid-column 2 / span 1
    grid-row 2 / span 2

  &--growth
    grid-column 3 / span 1
    grid-row 3 / span 2
</style>

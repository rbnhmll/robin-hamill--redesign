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
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus quod ea pariatur facilis nobis, assumenda voluptas iste sed totam suscipit quam. Nisi, aliquam?'
        },
        {
          class: 'development',
          title: 'Creation',
          image: 'development.png',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus quod ea pariatur facilis nobis, assumenda voluptas iste sed totam suscipit quam. Nisi, aliquam?'
        },
        {
          class: 'growth',
          title: 'Growth',
          image: 'growth.png',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus quod ea pariatur facilis nobis, assumenda voluptas iste sed totam suscipit quam. Nisi, aliquam?'
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
  padding 8.5rem 0
  background-image url('~assets/images/methodologyBackground.svg')
  background-size 100%
  background-repeat no-repeat
  background-position top right
  padding-bottom 16.5rem

h4
  font-size 2.4rem
  // font-weight 600
  color $blue
  margin-top 0

.steps
  margin-top 14.5rem
  display grid
  grid-gap 0 10rem
  grid-template-columns repeat(3, 1fr)
  grid-template-rows repeat(3, auto)

.step
  position relative

  img
    position absolute
    opacity 0.15
    left 0
    top 0
    max-width 15rem
    max-height 14.5rem
    transform translate(-50%, -50%)
    // z-index -1

  &--exploration
    grid-column 1 / span 1
    grid-row 1 / span 2

  &--development
    grid-column 2 / span 1
    grid-row 3 / span 1

  &--growth
    grid-column 3 / span 1
    grid-row 2 / span 2
</style>

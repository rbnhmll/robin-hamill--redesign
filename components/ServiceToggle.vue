<template>
  <fieldset>
    <input
      :id="service.id"
      :value="service.title"
      :name="service.name"
      :checked="selected === service.title"
      class="visuallyhidden"
      type="radio"
      @change="$emit('serviceEvent', service.title)"
    >
    <label :for="service.id">
      <div class="icon-wrapper">
        <img 
          :src="imgUrl" 
          :alt="service.name">
      </div>
      <span>{{ service.title }}</span>
    </label>
  </fieldset>
</template>

<script>
const images = require.context('~/assets/images', false, /\.png$/)

export default {
  name: 'ServiceToggle',
  props: {
    service: {
      type: Object,
      default: () => {}
    },
    selected: {
      type: String,
      default: ''
    }
  },
  computed: {
    imgUrl() {
      return images(`./${this.service.image}`)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~assets/styles/_vars'
@import '~assets/styles/_mixins'

fieldset
  border none
  padding 0

.icon-wrapper
  transition(box-shadow)
  display flex
  width 120px
  height 120px
  justify-content center
  align-items center
  border 1px solid $darkblue
  border-radius 5px

label
  transition(transform)
  display block
  text-align center
  cursor pointer
  font-family $secondaryfont
  font-style italic

  &:hover .icon-wrapper
    box-shadow 0 2px 5px 0 rgba($black, 0.5)

img
  max-height 100%
  max-width 100%

span
  transition(color)
  display block
  text-align center
  margin-top 10px

input:checked + label
  transform translateY(-1.5rem)

  .icon-wrapper
    box-shadow()

  span
    color $black
</style>

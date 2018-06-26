<template>
  <fieldset>
    <input class="visuallyhidden" type="radio" :name="service.name" :id="service.id" :value="service.name">
    <label :for="service.id">
      <div class="icon-wrapper">
        <img :src="imgUrl" :alt="service.name">
      </div>
      <span>
        {{ service.title }}
      </span>
    </label>
  </fieldset>
</template>

<script>
const images = require.context("~/assets/images", false, /\.png$/);

export default {
  name: "ServiceToggle",
  props: ["service"],
  computed: {
    imgUrl() {
      return images(`./${this.service.image}`);
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/_vars'
@import '../assets/styles/_mixins'

fieldset
  border none

.icon-wrapper
  display flex
  width 120px
  height 120px
  justify-content center
  align-items center
  border 1px solid $darkblue
  border-radius 5px
  transition box-shadow 0.35s ease

label
  display block
  text-align center
  transition transform 0.35s ease

img
  max-height 100%
  max-width 100%

span
  display block
  text-align center
  font-family 'Crimson Text', serif
  margin-top 10px

input:checked + label
  transform translateY(-1.5rem)

  .icon-wrapper
    box-shadow 0 2px 5px 0 rgba($black, 0.5)
</style>

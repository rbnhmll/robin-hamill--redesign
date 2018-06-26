<template>
  <section class="cta-banner">
    <div class="wrapper cta-banner__content">
      <h4 class="cta-banner__message">Let's chat about bringing your business to life.</h4>
      <cta-button
        class="cta-banner__button"
        url="/contact"
      >
        Get in Touch!
      </cta-button>
    </div>
  </section>
</template>

<script>
import CtaButton from "./CtaButton";

export default {
  name: "CtaBanner",
  components: {
    CtaButton
  }
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/_vars'
@import '../assets/styles/_mixins'

section
  background $blue
  background-image url('../assets/images/ctaBackground.svg')
  border-radius 150px 0 150px 0

.cta-banner__content
  padding 75px 0
  display grid
  grid-template-columns 1fr 380px
  grid-gap 100px
  justify-content space-between
  align-items center

.cta-banner__message
  color $white
  font-size 5.4rem
  margin 0
</style>

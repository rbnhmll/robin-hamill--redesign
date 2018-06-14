<template>
  <section class="cta-banner">
    <div class="wrapper">
      <h4>Let's chat about bringing your business to life.</h4>
      <cta-button
        url="/contact"
      >
        Get in touch!
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
  border-radius 150px 0 150px 0

.wrapper
  padding 100px 0
  display flex
  justify-content space-between

h4
  color $white
</style>

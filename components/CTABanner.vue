<template>
  <section>
    <div class="wrapper">
      <h4>Let's chat about bringing your business to life.</h4>
      <ButtonLink
        url="/contact"
        size="large"
      >
        Get in touch!
      </ButtonLink>
    </div>
  </section>
</template>

<script>
  import ButtonLink from './ButtonLink'

  export default {
    name: 'CTABanner',
    components: {
      ButtonLink
    }
  }
</script>

<style scoped lang="stylus">
  @import '../assets/styles/_vars'

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
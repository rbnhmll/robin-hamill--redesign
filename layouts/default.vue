<template>
  <div>
    <Vheader />
    <nuxt/>
    <Vfooter />
  </div>
</template>

<script>
  import Vheader from '../components/VHeader.vue'
  import Vfooter from '../components/VFooter.vue'

  export default {
    components: {
      Vheader,
      Vfooter
    }
  }
</script>

<style lang="stylus">
  @import '../assets/styles/global'

  .wrapper
    max-width 960px
    width 95%
    margin 0 auto
</style>

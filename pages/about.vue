<template>
  <div>
    <Vheader>
      <HeaderAbout></HeaderAbout>
    </Vheader>
    <CTABanner />
  </div>
</template>

<script>
  import Vheader from '~/components/VHeader'
  import HeaderAbout from '~/components/HeaderAbout'
  import CTABanner from '~/components/CTABanner'

  export default {
    name: 'About',
    components: {
      Vheader,
      HeaderAbout,
      CTABanner
    }
  }
</script>

<style scoped lang="stylus">
  @import '../assets/styles/_vars'
  @import '../assets/styles/_mixins'

</style>
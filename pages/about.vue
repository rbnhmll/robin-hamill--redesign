<template>
  <div>
    <v-header/>
    <header-about/>
    <cta-banner/>
  </div>
</template>

<script>
import VHeader from '~/components/VHeader'
import HeaderAbout from '~/components/HeaderAbout'
import CtaBanner from '~/components/CtaBanner'

export default {
  name: 'About',
  components: {
    VHeader,
    HeaderAbout,
    CtaBanner
  },
  head: {
    title: `Robin Hamill • About`
  }
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/_vars'
@import '../assets/styles/_mixins'
</style>

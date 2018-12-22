<template>
  <div :class="page">
    <nuxt/>
    <Vfooter/>
  </div>
</template>

<script>
import Vfooter from '~/components/VFooter.vue'

export default {
  components: {
    Vfooter
  },
  computed: {
    page() {
      return this.$route.name
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/styles/global'
</style>

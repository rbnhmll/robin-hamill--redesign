<template>
  <div>
    <nuxt/>
    <Vfooter />
  </div>
</template>

<script>
import Vfooter from "~/components/VFooter.vue";

export default {
  components: {
    Vfooter
  }
};
</script>

<style lang="stylus">
@import '../assets/styles/global'

.wrapper
  max-width 1000px
  width 95%
  margin 0 auto
</style>

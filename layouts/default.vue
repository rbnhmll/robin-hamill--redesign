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
</style>

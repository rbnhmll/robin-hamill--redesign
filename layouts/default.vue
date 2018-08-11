<template>
  <v-app>
    <div :class="page">
      <nuxt />
      <Vfooter />
    </div>
  </v-app>
</template>

<script>
import Vfooter from "~/components/VFooter.vue";

export default {
  components: {
    Vfooter
  },
  computed: {
    page() {
      return this.$route.name;
    }
  }
};
</script>

<style lang="stylus">
</style>

<template>
  <div>
    <v-header>
      <header-hero />
      <h2><a href="https://www.shopify.com/?ref=rbnhmll&utm_campaign=shopify%20landing%20page&utm_source=robinhamill.com">Sign up for Shopify</a></h2>
    </v-header>
    <cta-banner />
  </div>
</template>

<script>
import VHeader from '~/components/VHeader.vue'
import HeaderHero from '~/components/HeaderHero.vue'
import CtaBanner from '~/components/CtaBanner'

export default {
  components: {
    VHeader,
    HeaderHero,
    CtaBanner
  }
}
</script>

<style lang="stylus">
</style>

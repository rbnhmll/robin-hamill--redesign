<template>
  <header class="v-header">
    <div class="wrapper">
      <Navigation/>
      <HeaderHero />
    </div>
  </header>
</template>

<script>
  import Navigation from './Navigation.vue'
  import HeaderHero from './HeaderHero.vue'

  export default {
    name: 'VHeader',
    components: {
      Navigation,
      HeaderHero
    }
  }
</script>


<style scoped lang="stylus">
  @import '../assets/styles/_vars'
  @import '../assets/styles/_mixins'

</style>
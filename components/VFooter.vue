<template>
  <footer>
    <div class="wrapper">
      <Navigation />
      <div class="footer__bottom">
        <p>&copy; Robin Hamill {{ year }}</p>
        <SocialIcons />
      </div>
    </div>
  </footer>
</template>

<script>
  import Navigation from './Navigation';
  import SocialIcons from './SocialIcons';

  export default {
    name: 'VFooter',
    components: {
      Navigation,
      SocialIcons
    },
    computed: {
      year() {
        return (new Date()).getFullYear();
      }
    }
  }
</script>


<style scoped lang="stylus">
  @import '../assets/styles/_vars'
  @import '../assets/styles/_mixins'

  footer
    background $lightgrey
    padding 70px 0
  .footer__bottom
    display flex
    justify-content space-between
</style>
<template>
  <footer>
    <div class="wrapper">
      <navigation />
      <div class="footer__bottom">
        <p>&copy; robin hamill {{ year }}</p>
        <social-icons />
      </div>
    </div>
  </footer>
</template>

<script>
import Navigation from './Navigation'
import SocialIcons from './SocialIcons'

export default {
  name: 'VFooter',
  components: {
    Navigation,
    SocialIcons
  },
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>


<style scoped lang="stylus">
@import '~assets/styles/_vars'
@import '~assets/styles/_mixins'

footer
  background $lightgrey

.footer__bottom
  display flex
  align-items center
  justify-content space-between
  font-size 1.4rem
  color $darkgrey
  padding-bottom 2rem
</style>

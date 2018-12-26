<template>
  <section class="header-contact wrapper--mini">
    <h2 class="h1">Let's work together!</h2>
    <p>Get in touch with me if you would like to kickstart your next web-app or e-commerce store, brain-storm your big idea, or play Codenames. I like to drink coffee.</p>
    <SocialIcons 
      icon-colour="#fff" 
      border-colour="#fff"/>
  </section>
</template>

<script>
import SocialIcons from './SocialIcons'

export default {
  name: 'HeaderAbout',
  components: {
    SocialIcons
  }
}
</script>

<style scoped lang="stylus">
@import '~assets/styles/_vars'
@import '~assets/styles/_mixins'

.header-contact
  color $white
  text-align center
  padding-bottom 18rem

  .h1
    color $white
</style>

<template>
  <section class="header-contact">
    <h2>Let's wortk together!</h2>
    <p>Get in touch with me if you would like to kickstart your next web-app or e-commerce store, brain-storm your big idea, or play Codenames. I like to drink coffee.</p>
    <SocialIcons />
  </section>
</template>

<script>
import SocialIcons from "./SocialIcons";

export default {
  name: "HeaderAbout",
  components: {
    SocialIcons
  }
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/_vars'
@import '../assets/styles/_mixins'

.header-contact
  color $white
</style>

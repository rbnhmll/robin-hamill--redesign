<template>
  <footer>
    <div class="wrapper">
      <navigation />
      <div class="footer__bottom">
        <p>&copy; Robin Hamill {{ year }}</p>
        <social-icons />
      </div>
    </div>
  </footer>
</template>

<script>
import Navigation from "./Navigation";
import SocialIcons from "./SocialIcons";

export default {
  name: "VFooter",
  components: {
    Navigation,
    SocialIcons
  },
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>


<style scoped lang="stylus">
@import '../assets/styles/_vars'
@import '../assets/styles/_mixins'

footer
  background $lightgrey

.footer__bottom
  display flex
  justify-content space-between
</style>

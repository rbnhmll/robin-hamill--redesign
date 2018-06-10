<template>
  <footer>
    <div class="wrapper">
      <Navigation />
      <p>&copy; Robin Hamill {{ year }}</p>
      <SocialIcons />
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

</style>
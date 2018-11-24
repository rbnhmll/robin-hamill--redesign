<template>
  <section class="header-about">
    <div class="wrapper">
      <img
        src="~/assets/images/robinHeadshotSquare.jpg"
        alt="Robin Hamill headshot"
      >
      <h2 class="header-about__title">Hi, I'm Robin.</h2>
      <p>I'm an independent Shopify and web application developer in Toronto. I help online merchants create unique buying experience that drive sales.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeaderAbout'
}
</script>

<style scoped lang="stylus">
@import '~assets/styles/_vars'
@import '~assets/styles/_mixins'

.header-about
  .wrapper
    padding 5.5rem 0
    display grid
    align-items center
    grid-gap 6rem
    grid-template-columns 2fr 3fr 3fr

.header-about__title
  font-size 5.4rem
  color $darkblue
</style>

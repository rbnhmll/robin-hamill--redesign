<template>
  <section class="header-hero wrapper--medium">
    <h2 class="header-hero__title h1">Hi, I'm Robin.</h2>
    <p>I'm an independent Shopify and web application developer in Toronto. I build intuitive and functional web apps and e-commerce stores that engage users and solve problems.</p>
  </section>
</template>

<script>
export default {
  name: "HeaderHero"
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/_vars'
@import '../assets/styles/_mixins'

.header-hero
  text-align center

p
  font-size 2.4rem
</style>

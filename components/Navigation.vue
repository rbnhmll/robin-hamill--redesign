<template>
  <nav>
    <logo />
    <ul>
      <li
        v-for="page in pages"
        :key="page.name"
      >
        <nuxt-link :to="page.url" :class="page.class">{{ page.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import Logo from "./Logo";

export default {
  name: "navigation",
  props: ["tone"],
  components: {
    Logo
  },
  data() {
    return {
      pages: [
        {
          name: "Home",
          url: "/"
        },
        {
          name: "Projects",
          url: "/projects"
        },
        {
          name: "Personal Projects",
          url: "/personal"
        },
        {
          name: "About",
          url: "/about"
        },
        {
          name: "Contact",
          url: "/contact",
          class: "cta"
        }
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/_vars'
@import '../assets/styles/_mixins'

nav
  display flex
  justify-content space-between
  align-items center

ul
  display flex
  list-style none

  a
    padding 5px
    display inline-block
    color $darkblue

li
  flex-shrink 0

  a
    border-radius 20px
    padding 6px 20px

a.cta
  background $blue
  color $white

a.nuxt-link-exact-active
  color $turquoise
</style>

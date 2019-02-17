<template>
  <nav>
    <logo/>
    <ul>
      <li
        v-for="page in pages" 
        :key="page.name"
      >
        <nuxt-link
          :to="page.url" 
          :class="page.class">{{ page.name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import Logo from './Logo'

export default {
  name: 'Navigation',
  components: {
    Logo
  },
  data() {
    return {
      pages: [
        {
          name: 'Home',
          url: '/'
        },
        {
          name: 'Projects',
          url: '/projects'
        },
        {
          name: 'Personal Projects',
          url: '/personal'
        },
        {
          name: 'About',
          url: '/about'
        },
        {
          name: 'Contact',
          url: '/contact',
          class: 'cta'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~assets/styles/_vars'
@import '~assets/styles/_mixins'

nav
  display flex
  justify-content space-between
  align-items center
  padding 35px 0

ul
  display flex
  list-style none
  padding 0
  align-items center

li
  flex 1 0 auto

  &+li
    margin-left 3.2rem

  a
    border-radius 20px
    padding 5px
    display block
    color $darkblue

a.cta
  background $blue
  color $white
  padding 6px 20px

a.nuxt-link-exact-active
  color $turquoise
</style>

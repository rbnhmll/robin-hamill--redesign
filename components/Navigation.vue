<template>
  <nav>
    <logo />
    <ul>
      <li
        :class="page.class"
        v-for="page in pages"
        :key="page.name"
        v-isCurrentPage="page.url"
      >
        <a :href="page.url">{{ page.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import Logo from './Logo'

  export default {
    name: "navigation",
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
          },
        ]
      }
    },
    directives: {
      isCurrentPage: {
        bind: function (el, binding, vnode) {
          if (binding.value === window.location.pathname) {
            el.classList.add('active')
          }
        }
      }
    }
  }
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
      color: $darkblue
  li
    border-radius 20px
    a
      padding: 6px 20px
  li.cta
    background $blue
    a
      color $white
  li.active
    a
      color $turquoise
</style>
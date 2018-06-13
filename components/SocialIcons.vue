<template>
  <ul>
    <li v-for="icon in icons" :key="icon.name">
      <a :href="icon.url">{{ icon.name }}</a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'SocialIcons',
    data() {
      return {
        icons: [
          {
            name: 'Twitter',
            url: 'https://twitter.com/rbnhmll'
          },
          {
            name: 'Github',
            url: 'https://github.com/rbnhmll'
          },
          {
            name: 'Codepen',
            url: 'https://codepen.io/rbnhmll/'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
@import '../assets/styles/_vars'
@import '../assets/styles/_mixins'

ul
  display flex
  list-style none
</style>
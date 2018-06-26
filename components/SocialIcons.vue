<template>
  <ul>
    <li v-for="icon in icons" :key="icon.name">
      <a :href="icon.url" target="_blank">
        <font-awesome-icon :icon="icon.iconKey" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SocialIcons",
  data() {
    return {
      icons: [
        {
          name: "Twitter",
          iconKey: ["fab", "twitter"],
          url: "https://twitter.com/rbnhmll"
        },
        {
          name: "Github",
          iconKey: ["fab", "github"],
          url: "https://github.com/rbnhmll"
        },
        {
          name: "Codepen",
          iconKey: ["fab", "codepen"],
          url: "https://codepen.io/rbnhmll/"
        }
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/_vars'
@import '../assets/styles/_mixins'

ul
  display flex
  list-style none

li
  margin 0 0.5rem

a
  border-radius 50%
  display flex
  justify-content center
  align-items center
  color #7D8184
  border 2px solid #D8D8D8
  font-size 1.4rem
  width 3.2rem
  height 3.2rem
</style>

<template>
  <ul>
    <li v-for="icon in icons" :key="icon.name">
      <font-awesome-icon :icon="icon.iconKey" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "TechIcons",
  data() {
    return {
      icons: [
        {
          name: "Shopify",
          iconKey: ["fab", "twitter"]
        },
        {
          name: "Shopify Plus",
          iconKey: ["fab", "github"]
        },
        {
          name: "Vue",
          iconKey: ["fab", "codepen"]
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
  justify-content center
  list-style none
  margin 0
  padding 0
</style>

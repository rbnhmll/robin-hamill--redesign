<template>
  <a :href="url" :style="styles">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'ButtonLink',
    props: ['url', 'size'],
    data() {
      return {
        styles: {
          background: '#fff',
          color: '#3A8DF1'
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  a
    text-decoration none
    padding 1.5em 4em
    border-radius 50px
</style>
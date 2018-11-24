<template>
  <section class="wrapper">
    <ul>
      <project-item
        v-for="proj in projects"
        :proj="proj"
        :key="proj.sys.id"
      />
    </ul>
  </section>
</template>

<script>
import ProjectItem from '~/components/ProjectItem'

export default {
  name: 'ProjectLoop',
  components: { ProjectItem },
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="stylus">
ul
  padding 0
  margin 0
  list-style-type none
</style>

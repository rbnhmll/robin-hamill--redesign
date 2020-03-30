<template>
  <div class="wrapper">
    <section>
      <project-item
        v-for="proj in projects"
        :proj="proj"
        :key="proj.sys.id"
      />
    </section>
  </div>
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
section
  display grid
  grid-template-columns 1fr
  grid-gap 2rem
</style>

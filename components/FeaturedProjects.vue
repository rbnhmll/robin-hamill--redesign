<template>
  <section>
    <h2 class="h1">Featured Projects</h2>
    <project-loop :projects="projects" />
    <see-more-button url="/projects" />
  </section>
</template>

<script>
import ProjectLoop from '~/components/ProjectLoop.vue'
import SeeMoreButton from '~/components/SeeMoreButton.vue'

export default {
  name: 'FeaturedProjects',
  components: {
    ProjectLoop,
    SeeMoreButton
  },
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~assets/styles/_vars'
@import '~assets/styles/_mixins'

h2
  text-align center
</style>

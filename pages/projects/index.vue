<template>
  <div>
    <Vheader />
    <project-loop :projects="projects" />
  </div>
</template>

<script>
import client from '~/plugins/contentful'

import Vheader from '~/components/VHeader.vue'
import ProjectLoop from '~/components/ProjectLoop.vue'

export default {
  name: 'ProjectsIndex',
  components: {
    Vheader,
    ProjectLoop
  },
  asyncData() {
    return client
      .getEntries({
        content_type: 'projects'
      })
      .then(entry => {
        return {
          projects: entry.items
        }
      })
      .catch(err => console.log(err))
  },
  head: {
    title: `Robin Hamill • Projects`
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/styles/_vars'
@import '../../assets/styles/_mixins'
</style>

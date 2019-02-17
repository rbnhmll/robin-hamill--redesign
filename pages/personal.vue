<template>
  <div>
    <Vheader/>
    <project-loop :projects="projects"/>
  </div>
</template>

<script>
import client from '~/plugins/contentful'
import Vheader from '~/components/VHeader.vue'
import ProjectLoop from '~/components/ProjectLoop.vue'

export default {
  name: 'Personal',
  components: {
    Vheader,
    ProjectLoop
  },
  asyncData() {
    return client
      .getEntries({
        content_type: 'personalProject'
      })
      .then(entry => {
        return {
          projects: entry.items
        }
      })
      .catch(err => console.log(err))
  },
  head: {
    title: `Robin Hamill • Personal Projects`
  }
}
</script>

<style scoped lang="stylus">
ul
  list-style-type none
  margin 0
  padding 0
</style>

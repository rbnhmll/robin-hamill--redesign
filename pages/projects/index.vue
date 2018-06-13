<template>
  <div>
    <Vheader></Vheader>
    <h1>Projects Index</h1>
    <strong>Projects: </strong>
    <ul>
      <li v-for="proj in projects" :key="proj.sys.id">{{ proj.fields.title }}</li>
    </ul>
  </div>
</template>

<script>
import client from "~/plugins/contentful";

import Vheader from "~/components/VHeader.vue";

export default {
  name: "ProjectsIndex",
  asyncData() {
    return client
      .getEntries({
        content_type: "project"
      })
      .then(entry => {
        return {
          projects: entry.items
        };
      })
      .catch(err => console.log(err));
  },
  components: {
    Vheader
  }
};
</script>

<style scoped lang="stylus">
@import '../../assets/styles/_vars'
@import '../../assets/styles/_mixins'
</style>

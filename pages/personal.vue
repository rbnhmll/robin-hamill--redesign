<template>
  <div>
    <Vheader />
    <section class="wrapper">
      <strong>Personal Projects: </strong>
      <ul>
        <project-item
          v-for="proj in projects"
          :proj="proj"
          :key="proj.sys.id"
        />
      </ul>
    </section>
  </div>
</template>

<script>
import client from "~/plugins/contentful";

import Vheader from "../components/VHeader.vue";
import ProjectItem from "../components/ProjectItem.vue";

export default {
  name: "Personal",
  components: {
    Vheader,
    ProjectItem
  },
  asyncData() {
    return client
      .getEntries({
        content_type: "personalProject"
      })
      .then(entry => {
        return {
          projects: entry.items
        };
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped lang="stylus">
ul
  list-style-type none
  margin 0
  padding 0
</style>

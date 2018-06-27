<template>
  <div>
    <v-header>
      <header-hero />
    </v-header>
    <featured-projects :projects="projects" />
    <methodology />
    <cta-banner />
  </div>
</template>

<script>
import client from "~/plugins/contentful";

import VHeader from "~/components/VHeader.vue";
import HeaderHero from "~/components/HeaderHero.vue";
import CtaBanner from "~/components/CtaBanner";
import FeaturedProjects from "~/components/FeaturedProjects";
import CurrentProjects from "~/components/CurrentProjects";
import Methodology from "~/components/Methodology";

export default {
  components: {
    VHeader,
    HeaderHero,
    CtaBanner,
    FeaturedProjects,
    CurrentProjects,
    Methodology
  },
  asyncData() {
    return client
      .getEntries({
        content_type: "projects"
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

<style lang="stylus">
.container
  min-height 100vh
  display flex
  justify-content center
  align-items center
  text-align center

.title
  display block
  font-weight 300
  font-size 100px
  color #35495e
  letter-spacing 1px

.subtitle
  font-weight 300
  font-size 42px
  color #526488
  word-spacing 5px
  padding-bottom 15px

.links
  padding-top 15px
</style>

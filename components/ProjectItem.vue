<template>
  <li>
    <h2>{{ proj.fields.title }}</h2>
    <p>{{ proj.fields.description }}</p>
    <ViewLiveButton :url="proj.fields.url">
      View Live
    </ViewLiveButton>
  </li>
</template>

<script>
import ViewLiveButton from "./ViewLiveButton.vue";

export default {
  name: "ProjectItem",
  props: ["proj"]
};
</script>

<style scoped lang="stylus">
</style>

<template>
  <div>
    <h1>Projects/:_project</h1>
    <strong>Params project</strong>: {{ params.project }}
  </div>
</template>

<script>
  export default {
    name: '_project',
    data() {
      return {
        params: this.$route.params
      }
    }
  }
</script>

<style scoped>

</style>
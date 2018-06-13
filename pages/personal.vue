<template>
  <div>
    <Vheader></Vheader>
    <h1>Personal</h1>
    <strong>Projects: </strong>
    <ul>
      <li v-for="proj in projects" :key="proj.sys.id">{{ proj.fields.title }}</li>
    </ul>
  </div>
</template>

<script>
  import client from '~/plugins/contentful';

  import Vheader from '../components/VHeader.vue'
    

  export default {
    name: 'Personal',
    asyncData() {
      return client.getEntries({
        content_type: 'personalProject'
      })
      .then((entry) => {
        return {
          projects: entry.items
        }
      })
      .catch((err) => console.log(err))
    },
    components: {
      Vheader
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="stylus">

</style>
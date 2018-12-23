<template>
  <div>
    <Vheader/>

    <div class="wrapper">
      <h2>{{ proj.fields.title }}</h2>
      <p>{{ proj.fields.description }}</p>
      <view-live-button :url="proj.fields.url">View Live</view-live-button>
    </div>
  </div>
</template>

<script>
import client from '~/plugins/contentful'

import Vheader from '~/components/VHeader.vue'
import ViewLiveButton from '~/components/ViewLiveButton'

export default {
  name: 'ProjectsSlug',
  components: {
    Vheader,
    ViewLiveButton
  },
  asyncData({ params, error, payload }) {
    if (payload) {
      post: payload
    }
    return client
      .getEntries({
        content_type: 'projects',
        'fields.slug': params.slug
      })
      .then(entry => {
        return {
          proj: entry.items[0]
        }
      })
      .catch(err => console.log(err))
  },
  head() {
    return {
      title: `Case Study • ${this.proj.fields.title}`
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/styles/_vars'
@import '../../assets/styles/_mixins'
</style>

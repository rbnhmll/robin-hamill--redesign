<template>
  <article class="project">
    <div class="project__image">
      <img :src="projImage" 
           :alt="projImageAlt">
    </div>
    <div class="project__content">
      <h2 class="h2">{{ proj.fields.title }}</h2>
      <h3>{{ proj.fields.subTitle }}</h3>
      <p>{{ proj.fields.description }}</p>
      <view-live-button
        :url="proj.fields.url"
      >
        View Live
      </view-live-button>
      <case-study-button
        v-if="proj.fields.hasCaseStudy"
        :url="proj.fields.slug | sub('/projects/')"
      >
        View Case Study
      </case-study-button>
    </div>
  </article>
</template>

<script>
import ViewLiveButton from '~/components/ViewLiveButton'
import CaseStudyButton from '~/components/CaseStudyButton'

export default {
  name: 'ProjectItem',
  components: {
    ViewLiveButton,
    CaseStudyButton
  },
  props: {
    proj: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    projImage() {
      return this.proj.fields.previewImage.fields.file.url
    },
    projImageAlt() {
      return this.proj.fields.previewImage.fields.title
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~assets/styles/_vars'
  @import '~assets/styles/_mixins'

  .project
    display grid 
    grid-template-columns repeat(auto-fit, minmax(40rem, 1fr))
    grid-gap 2rem
    padding 3rem 0
    & + &
      border-top 1px solid $grey
    .h2
      margin-top 0
      margin-bottom 0.5em
</style>

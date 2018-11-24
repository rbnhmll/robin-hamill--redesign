<template>
  <li>
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
  </li>
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
  }
}
</script>

<style scoped lang="stylus">
</style>

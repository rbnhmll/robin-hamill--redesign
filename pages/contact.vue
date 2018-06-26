<template>
  <div>
    <Vheader>
      <HeaderContact />
    </Vheader>
    <ContactForm />
    <CurrentProjects />
  </div>
</template>

<script>
import Vheader from "~/components/VHeader";
import HeaderContact from "~/components/HeaderContact";
import ContactForm from "~/components/ContactForm";
import CurrentProjects from "~/components/CurrentProjects";

export default {
  name: "Contact",
  components: {
    Vheader,
    HeaderContact,
    ContactForm,
    CurrentProjects
  },
  head: {
    title: `Robin Hamill • Contact`
  }
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/_vars'
@import '../assets/styles/_mixins'

header
  // background-image url('~/assets/images/contactHeaderBackground.svg')
  // background-size contain
  background $blue

  nav
    a
      color $white
</style>

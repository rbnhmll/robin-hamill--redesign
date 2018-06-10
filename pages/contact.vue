<template>
  <main>
    <h1>Contact</h1>
    <ContactForm />
  </main>
</template>

<script>
  import ContactForm from '../components/ContactForm';

  export default {
    name: 'Contact',
    components: {
      ContactForm
    }
  }
</script>

<style scoped lang="stylus">
  @import '../assets/styles/_vars'
  @import '../assets/styles/_mixins'

</style>
<template>
  <div class="wrapper">
    <form>
      <fieldset>
        <legend>About You</legend>
        
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" name="First Name">

        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" name="Last Name">

        <label for="email">Enter Your Email</label>
        <input type="email" id="email" name="Email">

        <label for="tel">Phone Number</label>
        <input type="tel" id="tel" name="Telephone">

        <label for="description">Describe Your Project</label>
        <textarea name="Description" id="description"></textarea>
      </fieldset>
      
      <fieldset>
        <legend>Services Needed</legend>
        
        <label for="ecommerce">e-commerce</label>
        <input type="radio" name="Service" id="ecommerce" value="ecommerce">
        <label for="webApp">Web App</label>
        <input type="radio" name="Service" id="webApp" value="webApp">
        <label for="shopifyApp">Shopify App</label>
        <input type="radio" name="Service" id="shopifyApp" value="shopifyApp">
        <label for="static">Static Webpage</label>
        <input type="radio" name="Service" id="static" value="static">
        <label for="other">Other: </label>
        <input type="text" id="other" name="Service--other">

        <label for="timeline">Timeline</label>
        <input type="range" name="timeline" id="timeline">
        <label for="budget">Budget</label>
        <input type="range" name="budget" id="budget">
      </fieldset>
      <input type="submit" value="Send Message">
    </form>
  </div>
</template>

<script>
  export default {
    name: 'ContactForm'
  }
</script>

<style scoped lang="stylus">
@import '../assets/styles/_vars'
@import '../assets/styles/_mixins'
</style>
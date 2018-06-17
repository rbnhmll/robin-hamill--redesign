<template>
  <div class="wrapper">
    <form name="contact_form" method="POST" netlify>
      <fieldset class="about">
        <legend>About You</legend>
        <div class="form-group form-group--first-name">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" name="First Name">
        </div>        
        <div class="form-group form-group--last-name">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" name="Last Name">
        </div>
        <div class="form-group form-group--company-name">
          <label for="companyName">Company Name</label>
          <input type="text" id="companyName" name="Company Name">
        </div>        
        <div class="form-group form-group--email">
          <label for="email">Enter Your Email</label>
          <input type="email" id="email" name="Email">
        </div>
        <div class="form-group form-group--tel">
          <label for="tel">Phone Number</label>
          <input type="tel" id="tel" name="Telephone">
        </div>
        <div class="form-group form-group--description">
          <label for="description">Describe Your Project</label>
          <textarea name="Description" id="description"></textarea>
        </div>
      </fieldset>
      
      <fieldset class="services">
        <legend>Services Needed</legend>
        
        <input type="radio" name="Service" id="ecommerce" value="ecommerce">
        <label for="ecommerce">e-commerce</label>
        <input type="radio" name="Service" id="webApp" value="webApp">
        <label for="webApp">Web App</label>
        <input type="radio" name="Service" id="shopifyApp" value="shopifyApp">
        <label for="shopifyApp">Shopify App</label>
        <input type="radio" name="Service" id="static" value="static">
        <label for="static">Static Webpage</label>
        
        <label for="other">Other: </label>
        <input type="text" id="other" name="Service--other">
      </fieldset>

      <fieldset class="timeline">
        <legend>Timeline</legend>

        <label class="visuallyhidden" for="timeline">Timeline</label>
        <input type="range" name="timeline" id="timeline">
      </fieldset>

      <fieldset class="budget">
        <legend>Budget</legend>

        <label class="visuallyhidden" for="budget">Budget</label>
        <input type="range" name="budget" id="budget">
      </fieldset>
      <fieldset class="submit">
        <submit-button value="Send Message" />
      </fieldset>
    </form>
  </div>
</template>

<script>
import SubmitButton from "~/components/SubmitButton";

export default {
  name: "ContactForm",
  components: {
    SubmitButton
  }
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/_vars'
@import '../assets/styles/_mixins'

form
  border 1px solid #bada55
  display grid
  grid-template-columns 1fr 1fr
  grid-auto-rows auto

.about
  grid-column 1 / -1
  display grid
  grid-template-columns 3fr 3fr 1fr 3fr 3fr
  grid-template-areas 'first-name last-name . company-name company-name'

  .form-group--first-name
    grid-area first-name

  .form-group--last-name
    grid-area last-name

  .form-group--first-name
    grid-area company-name

.services
  grid-column 1 / -1

.timeline
  grid-column 1 / 2

.budget
  grid-column 2 / -1

.submit
  grid-column 1 / -1
  text-align center

fieldset
  // border none

legend
  color $darkblue
</style>

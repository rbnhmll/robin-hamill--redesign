<template>
  <div class="wrapper">
    <form name="contact_form" method="POST" netlify>
      <h3>About You</h3>
      <section class="about">
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
      </section>
      
      <h3>Services Needed</h3>
      <section class="services">
        
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
      </section>

      <h3>Timeline</h3>
      <section class="timeline">

        <label class="visuallyhidden" for="timeline">Timeline</label>
        <input type="range" name="timeline" id="timeline">
      </section>

      <h3>Budget</h3>
      <section class="budget">

        <label class="visuallyhidden" for="budget">Budget</label>
        <input type="range" name="budget" id="budget">
      </section>
      <section class="submit">
        <submit-button value="Send Message" />
      </section>
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
  display grid
  grid-template-columns 1fr 1fr
  grid-auto-rows auto
  grid-gap 40px

  h3
    color $darkblue

.form-group
  position relative

  label
    position absolute
    top 10px
    left 10px
    line-height 1
    font-size 1.2rem
    color #D2D2D2

  input, textarea
    width 100%
    border 1px solid $darkblue
    border-radius 5px
    padding 10px

.about
  grid-column 1 / -1
  display grid
  grid-template-columns 1fr 1fr 80px 1fr 1fr
  grid-gap 15px 10px

.form-group--first-name
  grid-column 1 / span 1

.form-group--last-name
  grid-column 2 / span 1

.form-group--email
  grid-column 1 / span 2

.form-group--company-name, .form-group--tel
  grid-column 4 / span 2

.form-group--description
  grid-column 1 / -1

textarea
  min-height 185px
  max-width 100%
  resize none
</style>

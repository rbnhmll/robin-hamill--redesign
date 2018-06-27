<template>
  <div class="wrapper">
    <form name="contact_form" method="POST" netlify>
      <section class="about">
        <h3>About You</h3>
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
      
      <section class="services">
        <h3>Services Needed</h3>
        
        <service-toggle
          v-for="service in services"
          :service="service"
          :key="service.id"
        />
        
        <input type="text" id="other" name="Service--other">
      </section>

      <section class="timeline">
        <h3>Timeline</h3>

        <label class="visuallyhidden" for="timeline">Timeline</label>
        <input type="range" name="timeline" id="timeline">
      </section>

      <section class="budget">
        <h3>Budget</h3>

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
import ServiceToggle from "~/components/ServiceToggle";

export default {
  name: "ContactForm",
  components: {
    SubmitButton,
    ServiceToggle
  },
  data() {
    return {
      services: [
        {
          name: "Service",
          title: "e-commerce",
          id: "ecommerce",
          image: "eCommerce.png"
        },
        {
          name: "Service",
          title: "Web App",
          id: "webApp",
          image: "webApp.png"
        },
        {
          name: "Service",
          title: "Shopify App",
          id: "shopifyApp",
          image: "shopify.png"
        },
        {
          name: "Service",
          title: "Static Webpage",
          id: "static",
          image: "staticWebpage.png"
        },
        {
          name: "Service",
          title: "Other",
          id: "other",
          image: "other.png"
        }
      ]
    };
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
  grid-gap 4rem

  h3
    color $darkblue
    font-size 1.7rem

.form-group
  position relative

  &--first-name
    grid-column 1 / span 1

  &--last-name
    grid-column 2 / span 1

  &--email
    grid-column 1 / span 2

  &--company-name, &--tel
    grid-column 4 / span 2

  &--description
    grid-column 1 / -1

  label
    position absolute
    top 1rem
    left 1rem
    line-height 1
    font-size 1.2rem

  input, textarea
    background $white
    width 100%
    border 1px solid $darkblue
    border-radius 0.5rem
    padding 1.5rem 1rem

  textarea
    min-height 185px
    max-width 100%
    resize none

.about
  grid-column 1 / -1
  display grid
  grid-template-columns 1fr 1fr 8rem 1fr 1fr
  grid-gap 1.5rem 1rem

.about, .services
  h3
    grid-column 1 / -1

.services
  grid-column 1 / -1
  display grid
  grid-template-columns repeat(5, 1fr) 2fr
  align-items flex-end
  grid-gap 0 28px

  input[type='text']
    margin-bottom 2.9rem
    border none
    border-bottom 1px solid $darkblue

.timeline
  grid-column 1 / span 1

.budget
  grid-column -1 / span -1

.timeline, .budget
  input[type='range']
    width 100%

.submit
  grid-column 1 / -1
  text-align center
</style>

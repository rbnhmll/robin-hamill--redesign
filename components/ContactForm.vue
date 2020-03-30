<template>
  <div class="wrapper">
    <form 
      name="contact_form" 
      method="POST" 
      netlify>
      <section class="about">
        <h3>About You</h3>
        <div class="form-group form-group--first-name">
          <input
            v-check-fill
            id="firstName"
            v-model="selections.firstName"
            type="text"
            name="First Name"
            required
          >
          <label for="firstName">First Name *</label>
        </div>
        <div class="form-group form-group--last-name">
          <input
            v-check-fill
            id="lastName"
            v-model="selections.lastName"
            ype="text"
            name="Last Name"
            required
          >
          <label for="lastName">Last Name *</label>
        </div>
        <div class="form-group form-group--company-name">
          <input
            v-check-fill
            id="companyName"
            v-model="selections.companyName"
            type="text"
            name="Company Name"
          >
          <label for="companyName">Company Name</label>
        </div>
        <div class="form-group form-group--email">
          <input
            v-check-fill
            id="email"
            v-model="selections.email"
            type="email"
            name="Email"
            required
          >
          <label for="email">Enter Your Email *</label>
        </div>
        <div class="form-group form-group--tel">
          <input 
            v-check-fill 
            id="tel" 
            v-model="selections.tel" 
            name="Telephone" 
            type="tel">
          <label for="tel">Phone Number</label>
        </div>
        <div class="form-group form-group--description">
          <textarea
            v-check-fill
            id="description"
            v-model="selections.description"
            name="Description"
            required
          />
          <label for="description">Describe Your Project *</label>
        </div>
      </section>

      <section class="services">
        <h3>Services Needed</h3>
        
        <service-toggle
          v-for="service in services"
          :service="service"
          :selected="selections.service"
          :key="service.id"
          @serviceEvent="checkService($event)"
        />

        <input
          id="other"
          ref="otherText"
          type="text"
          name="Service--other"
          @input="checkVal($event)"
        >
      </section>

      <RangeSlider
        id="timeline"
        :min="1"
        :max="12"
        :default-value="2"
        name="Timeline"
        unit-after="mo"
      />

      <RangeSlider
        id="budget"
        :min="budget.min"
        :max="budget.max"
        :step="500"
        :default-value="selections.budget"
        name="Budget"
        unit-before="$"
      />

      <section class="submit">
        <submit-button value="Send Message"/>
      </section>
    </form>
  </div>
</template>

<script>
import SubmitButton from '~/components/SubmitButton'
import ServiceToggle from '~/components/ServiceToggle'
import RangeSlider from '~/components/RangeSlider'

export default {
  name: 'ContactForm',
  components: {
    SubmitButton,
    ServiceToggle,
    RangeSlider
  },
  data() {
    return {
      timeline: [1, 12],
      budget: {
        min: 5000,
        max: 50000
      },
      selections: {
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        tel: '',
        description: '',
        service: '',
        timeline: 2,
        budget: 10000
      },
      services: [
        {
          name: 'Service',
          title: 'e-commerce',
          id: 'ecommerce',
          image: 'eCommerce.png'
        },
        {
          name: 'Service',
          title: 'Shopify App',
          id: 'shopifyApp',
          image: 'shopify.png'
        },
        {
          name: 'Service',
          title: 'Web App',
          id: 'webApp',
          image: 'webApp.png'
        },
        {
          name: 'Service',
          title: 'Static Webpage',
          id: 'static',
          image: 'staticWebpage.png'
        },
        {
          name: 'Service',
          title: 'Other',
          id: 'other',
          image: 'other.png'
        }
      ]
    }
  },
  methods: {
    checkService(event) {
      this.selections.service = event
      if (event === 'Other') {
        this.$refs.otherText.focus()
      }
    },
    checkVal(event) {
      console.log(event.target.value, this.selections.service)
      if (event.target.value !== '') {
        this.selections.service = 'Other'
      } else {
        this.selections.service = ''
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~assets/styles/_vars'
@import '~assets/styles/_mixins'

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
    padding 5px
    background $white
    transition(top)

  input, textarea
    background $white
    width 100%
    border 1px solid $darkblue
    border-radius 0.5rem
    padding 1.5rem 1rem

    &.filled, &:hover, &:focus, &:active
      & + label
        top -1rem

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

.submit
  grid-column 1 / -1
  text-align center
</style>

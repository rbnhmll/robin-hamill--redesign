import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faGithub,
  faCodepen
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faGithub, faCodepen)
Vue.component('font-awesome-icon', FontAwesomeIcon)

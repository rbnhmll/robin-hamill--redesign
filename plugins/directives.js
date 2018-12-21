import Vue from 'vue'

Vue.directive('check-fill', {
  update: el => {
    if (el.value !== '') {
      el.classList.add('filled')
    } else {
      el.classList.remove('filled')
    }
  }
})

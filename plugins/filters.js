import Vue from 'vue'

Vue.filter('slug', value => {
  return value
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
})

Vue.filter('sub', (value, path = '') => {
  return `${path}${value}`
})

Vue.filter('money', value => {
  return `$${value}`
})

Vue.filter('capitalize', value => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

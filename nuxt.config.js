const pkg = require('./package')
require('dotenv').config()
const client = require('./plugins/contentful')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Robin Hamill • Independent Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        name: 'keywords',
        content:
          'Robin, Hamill, Robin Hamill, Front End Development, Front End Developer, Web Application, Web Application Developer, Shopify, Shopify Developer, Consultant, Shopify Consultant, e-commerce, ecommerce, Full-stack Developer, Rails Developer,  Toronto, Developer, Dev'
      },
      {
        name: 'description',
        content: 'Independent Shopify and E-Commerce developer in Toronto'
      },
      {
        name: 'author',
        content: 'Robin Hamill'
      },
      {
        property: 'og:title',
        title: 'Robin Hamill • Independent Developer',
        content: 'Robin Hamill • Independent Developer'
      },
      {
        property: 'og:site_name',
        title: 'Robin Hamill • Independent Developer',
        content: 'Robin Hamill • Independent Developer'
      },
      {
        property: 'og:url',
        content: 'https://www.robinhamill.com/'
      },
      {
        property: 'og:description',
        content: 'Independent Shopify and E-Commerce developer in Toronto'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:site',
        content: 'https://www.robinhamill.com/'
      },
      {
        name: 'twitter:creator',
        content: '@rbnhmll'
      },
      {
        name: 'twitter:title',
        content: 'Robin Hamill'
      },
      {
        name: 'twitter:description',
        content: 'Independent Shopify and E-Commerce developer in Toronto'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#51D4C2' },

  /*
  ** Global CSS
  */
  css: ['~/assets/styles/global.styl'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/contentful',
    '~/plugins/filters',
    '~/plugins/font-awesome'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes() {
      return client
        .getEntries({
          content_type: 'projects'
        })
        .then(entries => {
          return entries.items.map(entry => {
            return {
              route: `projects/${entry.fields.slug}`,
              payload: entry
            }
          })
        })
    }
  }
}

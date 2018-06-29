require("dotenv").config();
const client = require("./plugins/contentful");

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Robin Hamill • Independent Developer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" },
      { name: "msapplication-square70x70logo", content: "/smalltile.png" },
      { name: "msapplication-square150x150logo", content: "/mediumtile.png" },
      { name: "msapplication-square310x310logo", content: "/largetile.png" }
    ],
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "shortcut icon",
        href: "/favicon.ico",
        type: "image/x-icon"
      },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/apple-touch-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/apple-touch-icon-60x60.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/apple-touch-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/apple-touch-icon-76x76.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/apple-touch-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/apple-touch-icon-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/apple-touch-icon-144x144.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/apple-touch-icon-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon-180x180.png"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-16x16.png",
        sizes: "16x16"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-32x32.png",
        sizes: "32x32"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-96x96.png",
        sizes: "96x96"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/android-chrome-192x192.png",
        sizes: "192x192"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Crimson+Text:400,400i|Source+Sans+Pro:200,400,600"
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#51D4C2" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  plugins: [
    "~/plugins/contentful",
    "~/plugins/filters",
    "~/plugins/font-awesome"
  ],
  modules: ["@nuxtjs/dotenv"],
  generate: {
    routes() {
      return client
        .getEntries({
          content_type: "projects"
        })
        .then(entries => {
          return entries.items.map(entry => {
            return {
              route: `projects/${entry.fields.slug}`,
              payload: entry
            };
          });
        });
    }
  }
};

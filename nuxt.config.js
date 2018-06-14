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
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Crimson+Text:400,400i|Source+Sans+Pro:400,600"
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
  plugins: ["~/plugins/contentful", "~/plugins/filters"],
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

// require('dotenv').config()
// const contentful = require('contentful')

// module.exports = contentful.createClient({
//   space: process.env.CTF_SPACE_ID,
//   accessToken: process.env.CTF_CD_ACCESS_TOKEN
// })

const contentful = require('contentful')
const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
}

// export `createClient` to use it in page components
module.exports = {
  createClient() {
    return contentful.createClient(config)
  }
}

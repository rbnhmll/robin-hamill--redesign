import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_ACCESS_TOKEN
});

export default client;
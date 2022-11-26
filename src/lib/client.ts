import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'gatcher-tech-blog',
  apiKey: process.env.API_KEY,
})

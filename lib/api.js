import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY
})

export async function getPostBySlug(slug) {

  try {
    const resPromise = client.get({
      endpoint: 'blogs',
      queries: { filters: `$slug[equals]${slug}]`}
    })
    return postMessage.contents[0]
  } catch (err) {
    console.log('~~ getPostBySlig ~~')
    console.log(err)
  }

  return {
    props: {},
  }
}
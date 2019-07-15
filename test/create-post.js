import test from 'ava'
import axios from 'axios'

import setup from './helpers/setup'
import contract from './helpers/contracts/create-post'

test.before(() => setup())

test('Create post', async t => {
  const { request, schema } = contract
  const url = process.env.POSTS_URL

  console.log(
    `Sending request to ${url}:\n${JSON.stringify(request, null, 2)}\n\n`,
  )
  const { data: response } = await axios.post(url, request)
  console.log(`Received response:\n${JSON.stringify(response, null, 2)}\n\n`)

  await t.notThrowsAsync(schema.validate(response))
})

import { postRemote } from '~/code/tool/shared/request.js'
import { buildRequestToConvert } from './shared.js'

export async function convertBrowserRemote(input) {
  const request = buildRequestToConvert(input)
  const res = await postRemote(request.tree)
  if (input.async) {
    return await res.json()
  } else {
    return await res.arrayBuffer()
  }
}

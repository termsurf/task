import assert from 'assert'
import { RequestOutputModel } from '../../type/index.js'
import { getConfig } from '../shared/config.js'

export const DEFAULT_REMOTE_TASK_PATH = `https://base.task.surf/v2`

export async function postRemote(input) {
  const remote = getConfig('remote')
  assert(typeof remote === 'string')

  return fetchWithTimeout(`${remote}${input.path}`, {
    method: 'POST',
    ...input.body,
  })
}

export function buildRemoteRequest(path: string, body: any) {
  return RequestOutputModel.parse({
    tree: {
      path,
      body,
    },
  })
}

export function isRemoteRequest(input) {
  return Boolean(input.remote)
}

export type FetchOptions = RequestInit & {
  timeout?: number
  controller?: AbortController
}

export async function fetchWithTimeout(
  resource: string,
  options: FetchOptions = {},
) {
  const { timeout = 20000 } = options

  const controller = options.controller || new AbortController()
  const id = setTimeout(() => controller.abort('timeout'), timeout)

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  })

  clearTimeout(id)

  return response
}

export async function requestMany(
  controller: AbortController,
  list: Array<Promise<Response>>,
) {
  return Promise.all(
    list.map((req, i) => {
      req.catch(e => {
        controller.abort(e)
      })
      return req
    }),
  )
}

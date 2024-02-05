import assert from 'assert'
import { RequestModel } from '../../type/index.js'
import { getConfig } from '../shared/config.js'
import { wait } from './timer.js'
import { saveRemoteFile } from '../node/file.js'
import kink from './kink.js'

export async function resolveWorkFile(
  request: any,
  outputPath: string,
) {
  const workResponse = await postRemote(request)
  const work = await workResponse.json()
  while (true) {
    await wait(1000)
    const stepResponse = await getRemote(`/work/${work.id}`)
    const step = await stepResponse.json()
    if (step.status === 'ready') {
      const remote = getConfig('remote')
      await saveRemoteFile(`${remote}/file/${step.fileId}`, outputPath)
      return
    } else if (step.status === 'error') {
      throw kink(step.key, step.link)
    }
  }
}

export async function resolveWorkFileAsArrayBuffer(request: any) {
  const workResponse = await postRemote(request)
  const work = await workResponse.json()
  while (true) {
    await wait(1000)
    const stepResponse = await getRemote(`/work/${work.id}`)
    const step = await stepResponse.json()
    if (step.status === 'ready') {
      const fileResponse = await getRemote(`/file/${step.fileId}`)
      const arrayBuffer = await fileResponse.arrayBuffer()
      return arrayBuffer
    } else if (step.status === 'error') {
      throw kink(step.key, step.link)
    }
  }
}

export async function postRemote(input) {
  const remote = getConfig('remote')
  assert(typeof remote === 'string')

  return fetchWithTimeout(`${remote}${input.path}`, {
    method: 'POST',
    ...input.body,
  })
}

export async function getRemote(input) {
  const remote = getConfig('remote')
  assert(typeof remote === 'string')

  return fetchWithTimeout(`${remote}${input.path}`, {
    method: 'GET',
  })
}

export function buildRemoteRequest(path: string, body: any) {
  return RequestModel.parse({
    path,
    body,
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

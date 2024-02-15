import assert from 'assert'
import { getConfig } from '../shared/config.js'
import Kink from '@termsurf/kink'

export type RequestBody = FormData | object

export type Request = {
  path: string
  method: string
  body: RequestBody
}

export async function checkRemote() {
  const res = await getRemote(`/check`)
  if (res.status >= 400) {
    const error = await res.json()
    throw new Kink(error)
  }
  const json = await res.json()
  return json
}

export async function postRemote(
  input: Request,
  controller?: AbortController,
) {
  const remote = getConfig('remote')
  assert(typeof remote === 'string')

  let body
  let headers: Record<string, string> = {}

  if (typeof input.body === 'string') {
    body = input.body
    headers['content-type'] = 'application/json'
  } else if (input.body instanceof FormData) {
    body = input.body
    // headers['content-type'] = 'multipart/form-data'
  } else {
    body = JSON.stringify(body)
    headers['content-type'] = 'application/json'
  }

  return fetchWithTimeout(`${remote}${input.path}`, {
    method: 'POST',
    headers,
    body,
    controller,
  })
}

export async function getRemote(
  path: string,
  controller?: AbortController,
) {
  const remote = getConfig('remote')
  assert(typeof remote === 'string')

  return fetchWithTimeout(`${remote}${path}`, {
    method: 'GET',
    controller,
  })
}

export function buildRemoteRequest(
  method: string,
  path: string,
  body: RequestBody,
): Request {
  return {
    method,
    path,
    body,
  }
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

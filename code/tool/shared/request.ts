import assert from 'assert'
import { EventIterator } from 'event-iterator'
import { getConfig } from '../shared/config.js'
import Kink from '@termsurf/kink'
import { wait } from './timer.js'

export type RequestBody = FormData | object

export type Request = {
  path: string
  method: string
  body: RequestBody
}

export type RequestProgress = {
  type: 'request-progress'
  request: Request
  percentComplete: number
}

export type RequestComplete = {
  type: 'request-complete'
  request: Request
  response: any
}

export type RequestFailure = {
  type: 'request-failure'
  request: Request
  response?: any
}

export type CallXhr = RequestProgress | RequestComplete | RequestFailure

export async function* callXhr(
  request: Request,
): EventIterator<CallXhr> {
  return new EventIterator<CallXhr>(({ push }) => {
    const xhr = new XMLHttpRequest()
    let body
    if (typeof request.body === 'string') {
      body = request.body
      xhr.setRequestHeader('content-type', 'application/json')
      xhr.responseType = 'json'
    } else if (request.body instanceof FormData) {
      body = request.body
      // headers['content-type'] = 'multipart/form-data'
    } else {
      body = JSON.stringify(body)
      xhr.setRequestHeader('content-type', 'application/json')
      xhr.responseType = 'json'
    }

    const isAsync = true

    xhr.open(request.method, request.path, isAsync)

    xhr.upload.addEventListener('progress', (e: ProgressEvent) => {
      const percentComplete = (e.loaded / e.total) * 100
      push({ type: 'request-progress', percentComplete, request })
    })

    xhr.addEventListener('load', function () {
      if (this.status == 200) {
        push({
          type: 'request-complete',
          request,
          response: xhr.response,
        })
      } else {
        push({
          type: 'request-failure',
          request,
          response: xhr.response,
        })
      }
    })

    xhr.addEventListener('error', function () {
      push({ type: 'request-failure', request, response: xhr.response })
    })

    xhr.send(body)
  })
}

export async function checkRemote(
  { maxAttempts = 10 }: { maxAttempts: number } = { maxAttempts: 10 },
) {
  let i = 1
  while (true) {
    const res = await getRemote(`/check`)
    if (res.status >= 400) {
      if (i === maxAttempts) {
        const error = await res.json()
        throw new Kink(error)
      } else {
        i++
        await wait(10000)
        continue
      }
    } else {
      const json = await res.json()
      return json
    }
  }
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

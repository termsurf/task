import assert from 'assert'
import Observable from 'zen-observable'
import { getConfig } from '../shared/config'
import Kink from '@termsurf/kink'
import { wait } from './timer'

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

export function callXhr(
  request: Request,
  signal?: AbortSignal,
): Observable<CallXhr> {
  return new Observable<CallXhr>(observer => {
    const xhr = new XMLHttpRequest()

    const isAsync = true

    xhr.open(request.method, request.path, isAsync)

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

    const handleAbort = () => {
      xhr.abort()

      signal?.removeEventListener('abort', handleAbort)
    }

    signal?.addEventListener('abort', handleAbort)

    xhr.upload.addEventListener('progress', (e: ProgressEvent) => {
      const percentComplete = (e.loaded / e.total) * 100
      observer.next({
        type: 'request-progress',
        percentComplete,
        request,
      })
    })

    xhr.addEventListener('load', function () {
      signal?.removeEventListener('abort', handleAbort)

      if (this.status == 200) {
        observer.next({
          type: 'request-complete',
          request,
          response: JSON.parse(xhr.response),
        })
      } else {
        observer.next({
          type: 'request-failure',
          request,
          response: JSON.parse(xhr.response),
        })
      }

      observer.complete()
    })

    xhr.addEventListener('error', function () {
      signal?.removeEventListener('abort', handleAbort)

      observer.next({
        type: 'request-failure',
        request,
        response: xhr.response,
      })
    })

    xhr.send(body)
  })
}

export async function checkRemote(
  {
    maxAttempts = 10,
    signal,
  }: { maxAttempts: number; signal?: AbortSignal } = {
    maxAttempts: 10,
  },
) {
  let i = 1
  while (true) {
    const res = await getRemote(`/check`, signal)
    if (res.status >= 400) {
      if (i === maxAttempts) {
        const error = await res.json()
        throw new Kink(error)
      } else {
        i++
        await wait(10000, signal)
        continue
      }
    } else {
      const json = await res.json()
      return json
    }
  }
}

export async function postRemote(input: Request, signal?: AbortSignal) {
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
    signal,
  })
}

export async function getRemote(path: string, signal?: AbortSignal) {
  const remote = getConfig('remote')
  assert(typeof remote === 'string')

  return fetchWithTimeout(`${remote}${path}`, {
    method: 'GET',
    signal,
  })
}

export function buildRemoteRequest(
  method: string,
  path: string,
  body: RequestBody,
): Request {
  return {
    method,
    path: `${getConfig('remote')}${path}`,
    body,
  }
}

export function isRemoteRequest(input) {
  return Boolean(input.remote)
}

export type FetchOptions = RequestInit & {
  timeout?: number
}

export async function fetchWithTimeout(
  resource: string,
  options: FetchOptions = {},
) {
  const { timeout = 20000 } = options

  const response = await fetch(resource, {
    ...options,
    signal: (AbortSignal as any).any(
      [options.signal, AbortSignal.timeout(timeout)].filter(x => x),
    ),
  })

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

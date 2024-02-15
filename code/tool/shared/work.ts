import Kink, { KinkMesh } from '@termsurf/kink'
import {
  CallXhr,
  Request,
  callXhr,
  fetchWithTimeout,
  getRemote,
  postRemote,
} from './request.js'
import { wait } from './timer.js'

export type WorkFile = {
  file: {
    path: string
  }
}

export type Work<T> = {
  id: string
  output?: T
  status: 'complete' | 'queued' | 'error'
}

export type Output<T> = {
  type: 'output'
  output: T
}

// export // The user aborted a request.
export async function* requestAndWaitForWorkToComplete<
  T extends object,
>(
  request: Request,
  controller?: AbortController,
): AsyncGenerator<CallXhr | Output<T>> {
  let work: Work<T> | undefined = undefined
  for await (const data of callXhr(request)) {
    yield data

    switch (data.type) {
      case 'request-complete':
        work = data.response as Work<T>
        break
      case 'request-failure':
        throw new Kink(data.response as KinkMesh)
    }
  }

  while (work) {
    if (work.status === 'complete') {
      yield { type: 'output', output: work.output as T }
    } else if (work.status === 'error') {
      throw new Kink(work.output as KinkMesh)
    }

    await wait(2000)
    const workResponse = await getRemote(`/work/${work.id}`, controller)

    if (workResponse.status >= 400) {
      const error = await workResponse.json()
      throw new Kink(error)
    }

    work = await workResponse.json()
  }
}

export async function resolveAsArrayBuffer(request: Request) {
  const response = await postRemote(request)
  return await response.arrayBuffer()
}

export async function* resolveWorkFileAsBlob(
  request: Request,
  controller?: AbortController,
): AsyncGenerator<CallXhr | Output<Blob>> {
  for await (const data of requestAndWaitForWorkToComplete<WorkFile>(
    request,
  )) {
    switch (data.type) {
      case 'output':
        const fileResponse = await fetchWithTimeout(
          data.output.file.path,
          {
            method: 'GET',
            controller,
          },
        )
        const arrayBuffer = await fileResponse.arrayBuffer()
        yield { type: 'output', output: new Blob([arrayBuffer]) }
        break
      default:
        yield data
        break
    }
  }
}

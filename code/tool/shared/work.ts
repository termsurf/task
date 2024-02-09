import Kink from '@termsurf/kink'
import {
  Request,
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

export async function requestAndWaitForWorkToComplete<T extends object>(
  request: Request,
  controller?: AbortController,
) {
  const workResponse = await postRemote(request, controller)
  const work = await workResponse.json()
  while (true) {
    await wait(1000)
    const stepResponse = await getRemote(`/work/${work.id}`, controller)
    const step = await stepResponse.json()
    if (step.status === 'ready') {
      return step.output as T
    } else if (step.status === 'error') {
      throw new Kink(step.output)
    }
  }
}

export async function resolveAsArrayBuffer(request: Request) {
  const response = await postRemote(request)
  return await response.arrayBuffer()
}

export async function resolveWorkFileAsBlob<T extends WorkFile>(
  request: Request,
  controller?: AbortController,
) {
  const output = await requestAndWaitForWorkToComplete<T>(request)
  const fileResponse = await fetchWithTimeout(output.file.path, {
    method: 'GET',
    controller,
  })
  const arrayBuffer = await fileResponse.arrayBuffer()
  return new Blob([arrayBuffer])
}

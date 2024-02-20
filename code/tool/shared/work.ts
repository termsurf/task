import Kink, { KinkMesh } from '@termsurf/kink'
import Observable from 'zen-observable'
import { RequestCycle, getRemote } from './request'
import { wait } from './timer'
import kink from './kink'

export type WorkFile = {
  file: {
    path: string
  }
}

export type WorkFileContent = {
  file: {
    content: Blob
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

export type Processing = {
  type: 'processing'
}

export type Ping = {
  type: 'ping'
}

export function handleWorkRequestComplete<T>(
  work: Work<T>,
  signal?: AbortSignal,
) {
  return new Observable<Output<T> | Processing | Ping>(observer => {
    const handleAbort = () => {
      signal?.removeEventListener('abort', handleAbort)
      observer.error(kink('abort_error', { link: signal?.reason }))
    }

    signal?.addEventListener('abort', handleAbort)
    signal?.throwIfAborted()

    if (work.status === 'complete') {
      observer.next({ type: 'output', output: work.output as T })
    } else if (work.status === 'error') {
      observer.error(new Kink(work.output as KinkMesh))
    }

    observer.next({ type: 'processing' })

    loop()
      .then(() => {
        observer.complete()
      })
      .catch(e => observer.error(e))

    return () => {
      signal?.removeEventListener('abort', handleAbort)
    }

    async function loop() {
      while (work) {
        await wait(2000, signal)

        const workResponse = await getRemote(`/work/${work.id}`, signal)

        if (workResponse.status >= 400) {
          const error = await workResponse.json()
          observer.error(new Kink(error))
        }

        work = await workResponse.json()

        if (work) {
          if (work.status === 'complete') {
            observer.next({ type: 'output', output: work.output as T })
            // observer.complete()
            return
          } else if (work.status === 'error') {
            observer.error(new Kink(work.output as KinkMesh))
          } else {
            observer.next({ type: 'ping' })
          }
        }
      }
    }
  })
}

export type WorkFileAsBlob =
  | RequestCycle
  | Output<WorkFileContent>
  | Processing
  | Ping

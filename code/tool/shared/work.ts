import Kink, { KinkMesh } from '@termsurf/kink'
import Observable from 'zen-observable'
import {
  CallXhr,
  Request,
  callXhr,
  fetchWithTimeout,
  getRemote,
  postRemote,
} from './request'
import { wait } from './timer'
import kink from './kink'

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

export type Processing = {
  type: 'processing'
}

export type Ping = {
  type: 'ping'
}

// export // The user aborted a request.
export function requestAndWaitForWorkToComplete<T extends object>(
  request: Request,
  signal?: AbortSignal,
): Observable<CallXhr | Output<T> | Processing | Ping> {
  return new Observable<CallXhr | Output<T> | Processing | Ping>(
    observer => {
      signal?.addEventListener('abort', handleAbort)
      signal?.throwIfAborted()

      const subscriptions: Array<ZenObservable.Subscription> = []
      const callXhrObserver = callXhr(request, signal)

      const callXhrSubscription = callXhrObserver.subscribe({
        next(data: CallXhr | Output<T> | Processing | Ping) {
          handle().catch(e => {
            observer.error(e)
            callXhrSubscription.unsubscribe()
          })

          async function handle() {
            observer.next(data)

            switch (data.type) {
              case 'request-complete': {
                const handleRequestObserver =
                  handleWorkRequestComplete<T>(
                    data.response as Work<T>,
                    signal,
                  )
                const handleRequestSubscription =
                  handleRequestObserver.subscribe({
                    next(
                      data: CallXhr | Output<T> | Processing | Ping,
                    ) {
                      try {
                        observer.next(data)
                      } catch (e) {
                        observer.error(e)
                        handleRequestSubscription.unsubscribe()
                      }
                    },
                    error: e => {
                      observer.error(e)
                    },
                    complete: () => {
                      removeSubscription(
                        subscriptions,
                        handleRequestSubscription,
                      )
                      observer.complete()
                    },
                  })
                subscriptions.push(handleRequestSubscription)
                break
              }
              case 'request-failure':
                observer.error(new Kink(data.response as KinkMesh))
                break
            }
          }
        },
        error: e => observer.error(e),
        complete: () => {},
      })

      subscriptions.push(callXhrSubscription)

      function handleAbort() {
        observer.error(kink('abort_error', { link: signal?.reason }))
      }

      function removeHandleAbort() {
        signal?.removeEventListener('abort', handleAbort)
      }

      return () => {
        removeHandleAbort()
        closeAllSubscriptions(subscriptions)
      }
    },
  )
}

function handleWorkRequestComplete<T>(
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

export async function resolveAsArrayBuffer(request: Request) {
  const response = await postRemote(request)
  return await response.arrayBuffer()
}

export type NativeOptions = {
  signal?: AbortSignal
}

export type WorkFileAsBlob = CallXhr | Output<Blob> | Processing | Ping

export function resolveWorkFileAsBlob(
  request: Request,
  native?: NativeOptions,
): Observable<WorkFileAsBlob> {
  const signal = native?.signal

  return new Observable(observer => {
    signal?.throwIfAborted()
    signal?.addEventListener('abort', handleAbort)

    const requestObserver = requestAndWaitForWorkToComplete<WorkFile>(
      request,
      signal,
    )

    const subscriptions: Array<ZenObservable.Subscription> = []

    const subscription = requestObserver.subscribe({
      next(data: CallXhr | Output<WorkFile> | Processing | Ping) {
        handle().catch(e => {
          observer.error(e)
          closeAllSubscriptions(subscriptions)
        })

        async function handle() {
          switch (data.type) {
            case 'output':
              const fileResponse = await fetchWithTimeout(
                data.output.file.path,
                {
                  method: 'GET',
                  signal,
                },
              )
              const arrayBuffer = await fileResponse.arrayBuffer()
              observer.next({
                type: 'output',
                output: new Blob([arrayBuffer]),
              })
              observer.complete()
              break
            default:
              observer.next(data)
              break
          }
        }
      },
      error: e => observer.error(e),
      complete: () => {},
    })

    subscriptions.push(subscription)

    function handleAbort() {
      removeHandleAbort()
      observer.error(kink('abort_error', { link: signal?.reason }))
    }

    function removeHandleAbort() {
      signal?.removeEventListener('abort', handleAbort)
    }

    return removeHandleAbort
  })
}

function closeAllSubscriptions(
  subscriptions: Array<ZenObservable.Subscription>,
) {
  subscriptions.forEach(subscription => subscription.unsubscribe())
  subscriptions.length = 0
}

function removeSubscription(
  subscriptions: Array<ZenObservable.Subscription>,
  subscription: ZenObservable.Subscription,
) {
  subscriptions.splice(subscriptions.indexOf(subscription), 1)
}

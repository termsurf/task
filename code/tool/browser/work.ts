import Observable from 'zen-observable'
import {
  Request,
  RequestCycle,
  fetchWithTimeout,
} from '../shared/request'
import { NativeOptions } from '~/code/tool/shared/request'
import {
  Output,
  Ping,
  Processing,
  Work,
  WorkFile,
  WorkFileAsBlob,
  handleWorkRequestComplete,
} from '~/code/tool/shared/work'
import Kink, { KinkMesh } from '@termsurf/kink'
import {
  closeAllSubscriptions,
  removeSubscription,
} from '../shared/observable'
import kink from '../shared/kink'

export function callXhrBrowser(
  request: Request,
  signal?: AbortSignal,
): Observable<RequestCycle> {
  return new Observable<RequestCycle>(observer => {
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

// export // The user aborted a request.
export function requestAndWaitForWorkToCompleteBrowser<
  T extends object,
>(
  request: Request,
  signal?: AbortSignal,
): Observable<RequestCycle | Output<T> | Processing | Ping> {
  return new Observable<RequestCycle | Output<T> | Processing | Ping>(
    observer => {
      signal?.addEventListener('abort', handleAbort)
      signal?.throwIfAborted()

      const subscriptions: Array<ZenObservable.Subscription> = []
      const callXhrObserver = callXhrBrowser(request, signal)

      const callXhrSubscription = callXhrObserver.subscribe({
        next(data: RequestCycle | Output<T> | Processing | Ping) {
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
                      data:
                        | RequestCycle
                        | Output<T>
                        | Processing
                        | Ping,
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

export function resolveWorkFileAsBlob(
  request: Request,
  native?: NativeOptions,
): Observable<WorkFileAsBlob> {
  const signal = native?.signal

  return new Observable(observer => {
    signal?.throwIfAborted()
    signal?.addEventListener('abort', handleAbort)

    const requestObserver =
      requestAndWaitForWorkToCompleteBrowser<WorkFile>(request, signal)

    const subscriptions: Array<ZenObservable.Subscription> = []

    const subscription = requestObserver.subscribe({
      next(data: RequestCycle | Output<WorkFile> | Processing | Ping) {
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
                output: {
                  file: {
                    content: new Blob([arrayBuffer]),
                  },
                },
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

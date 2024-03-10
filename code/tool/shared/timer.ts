export function wait(ms: number, signal?: AbortSignal) {
  return new Promise((res, rej) => {
    const timeout = setTimeout(res, ms)

    const handleAbort = () => {
      clearTimeout(timeout)

      signal?.removeEventListener('abort', handleAbort)

      rej(signal?.reason)
    }

    signal?.addEventListener('abort', handleAbort)
  })
}

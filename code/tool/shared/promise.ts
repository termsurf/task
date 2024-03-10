export function isPromise<T>(obj): obj is Promise<T> {
  return (
    obj &&
    typeof obj.then === 'function' &&
    obj[Symbol.toStringTag] === 'Promise'
  )
}

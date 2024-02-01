import { flatten, unflatten } from 'flat'

export function flattenObjectSafe(
  obj: object,
  delimiter: string = '.',
) {
  return flatten(obj, { delimiter, safe: true })
}

export function flattenObject(obj: object, delimiter: string = '.') {
  return flatten(obj, { delimiter })
}

export function unflattenObject(obj: object, delimiter: string = '.') {
  return unflatten(obj, { delimiter })
}

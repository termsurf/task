import { flatten, unflatten } from 'flat'
import _ from 'lodash'

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

export function unsetAll(obj, props: Array<Array<string>>) {
  props.forEach(path => {
    _.unset(obj, path)
  })
  return obj
}

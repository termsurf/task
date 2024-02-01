export type Input = {
  action: string
  object: Array<string>
  detail: Record<string, Array<Value>>
}

export type Value = string | boolean | number

export type Link = {
  line: Array<string>
  list?: boolean
  need?: boolean
  like?: string
}

export type Call = {
  task: string
  link: CallLinkMesh
  base: Array<string>
}

export type CallLinkMesh = Record<string, Array<Bond>>

export type Bond = string | boolean | number

export type Link = {
  line: Array<string>
  list?: boolean
  need?: boolean
  like?: string
}

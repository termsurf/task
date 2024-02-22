export type RequestBody = FormData | object

export type Update =
  | Execution
  | Download
  | Upload
  | Progress
  | Wait
  | Request
  | Response

export type Execution = {
  type: 'execution'
  name: string
}

export type Download = {
  type: 'download'
  path: Array<string>
}

export type Upload = {
  type: 'upload'
  path: Array<string>
}

export type Request = {
  type: 'request'
  path: string
  method: string
  body?: RequestBody
}

export type Progress = {
  type: 'progress'
  percentComplete?: number
  elapsedTime: number
  update: Update
}

export type Wait = {
  type: 'wait'
  update?: Update
}

export type Response = {
  type: 'response'
  data?: any
  code: number
}

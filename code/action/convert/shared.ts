import { serialize as serializeToFormData } from 'object-to-formdata'
import {
  FONT_FORMAT,
  FontFormat,
  ConvertApi,
} from '~/code/type/index.js'
import { buildRemoteRequest } from '~/code/tool/shared/request.js'
import { omitNested } from '~/code/tool/shared/object.js'

export async function convertArchive(source) {
  // const input = IOConvertArchive.parse(source)
  // const list = ConvertArchive(input)
  // for (const cmd of list) {
  //   await handleCommand(cmd)
  // }
}

export function buildRequestToConvert(input: ConvertApi) {
  return buildRemoteRequest(
    'POST',
    `/convert/${input.input.format}/${input.output.format}`,
    omitNested(input, [
      ['handle'],
      ['input', 'format'],
      ['output', 'format'],
    ]),
  )
}

export function buildFormDataRequestToConvert(input: ConvertApi) {
  const output = omitNested(input, [
    ['handle'],
    ['input', 'format'],
    ['output', 'format'],
  ])

  const formData = serializeToFormData(output)

  return buildRemoteRequest(
    'POST',
    `/convert/${input.input.format}/${input.output.format}`,
    formData,
  )
}

export type ConvertTest = {
  input: {
    format: string
  }
  output: {
    format: string
  }
}

export function testConvertInputOutput(
  input: any,
): input is ConvertTest {
  if (!('input' in input)) {
    return false
  }
  if (!('format' in input.input)) {
    return false
  }
  if (!('output' in input)) {
    return false
  }
  if (!('format' in input.output)) {
    return false
  }
  return true
}

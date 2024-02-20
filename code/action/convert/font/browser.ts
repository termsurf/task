import {
  ConvertFontWithFontForgeBrowserInput,
  ConvertFontWithFontForgeBrowserInputModel,
  ConvertFontWithFontForgeBrowserLocalInput,
  ConvertFontWithFontForgeBrowserOutputModel,
  ConvertFontWithFontForgeBrowserRemoteInput,
} from '~/code/type/index'
import { buildFormDataRequestToConvert } from '../shared'
import {
  NativeOptions,
  WorkFileAsBlob,
  resolveWorkFileAsBlob,
} from '~/code/tool/shared/work'
import kink from '~/code/tool/shared/kink'
import { testConvertFontWithFontForge } from './shared'
import Observable from 'zen-observable'

export function convertFontWithFontForgeBrowser(
  source: ConvertFontWithFontForgeBrowserInput,
  native?: NativeOptions,
): Observable<WorkFileAsBlob> {
  const input = ConvertFontWithFontForgeBrowserInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return convertFontWithFontForgeBrowserRemote(input, native)
    default:
      return convertFontWithFontForgeBrowserLocal(input, native)
  }
}

export function convertFontWithFontForgeBrowserRemote(
  input: ConvertFontWithFontForgeBrowserRemoteInput,
  native?: NativeOptions,
) {
  const request = buildFormDataRequestToConvert(input)
  return resolveWorkFileAsBlob(request, native)
}

export function convertFontWithFontForgeBrowserLocal(
  source: ConvertFontWithFontForgeBrowserLocalInput,
  native?: NativeOptions,
): Observable<WorkFileAsBlob> {
  throw kink('task_not_implemented', {
    task: 'convertFontWithFontForgeBrowserLocal',
  })
}

export function testConvertFontWithFontForgeBrowser(
  input: any,
): input is ConvertFontWithFontForgeBrowserInput {
  return testConvertFontWithFontForge(input)
}

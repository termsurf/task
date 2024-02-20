import {
  ConvertFontWithFontForgeBrowserInput,
  ConvertFontWithFontForgeBrowserInputModel,
  ConvertFontWithFontForgeBrowserLocalInput,
  ConvertFontWithFontForgeBrowserOutputModel,
  ConvertFontWithFontForgeBrowserRemoteInput,
} from '~/code/type/index'
import { buildFormDataRequestToConvert } from '../shared'
import { WorkFileAsBlob } from '~/code/tool/shared/work'
import { NativeOptions } from '~/code/tool/shared/request'
import kink from '~/code/tool/shared/kink'
import { testConvertFontWithFontForge } from './shared'
import Observable from 'zen-observable'
import { resolveWorkFileAsBlob } from '~/code/tool/browser/work'

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

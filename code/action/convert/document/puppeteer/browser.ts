import {
  ConvertTxtWithPuppeteerBrowserInput,
  ConvertTxtWithPuppeteerBrowserInputModel,
  ConvertTxtWithPuppeteerBrowserLocalInput,
  ConvertTxtWithPuppeteerBrowserOutputModel,
  ConvertTxtWithPuppeteerBrowserRemoteInput,
  ConvertMarkdownWithPuppeteerBrowserInput,
  ConvertMarkdownWithPuppeteerBrowserInputModel,
  ConvertMarkdownWithPuppeteerBrowserLocalInput,
  ConvertMarkdownWithPuppeteerBrowserOutputModel,
  ConvertMarkdownWithPuppeteerBrowserRemoteInput,
} from '~/code/type/index'
import { buildFormDataRequestToConvert } from '../../shared'
import {
  NativeOptions,
  WorkFileAsBlob,
  resolveWorkFileAsBlob,
} from '~/code/tool/shared/work'
import kink from '~/code/tool/shared/kink'
import Observable from 'zen-observable'

export function convertTxtWithPuppeteerBrowser(
  source: ConvertTxtWithPuppeteerBrowserInput,
  native?: NativeOptions,
): Observable<WorkFileAsBlob> {
  const input = ConvertTxtWithPuppeteerBrowserInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return convertTxtWithPuppeteerBrowserRemote(input, native)
    default:
      return convertTxtWithPuppeteerBrowserLocal(input, native)
  }
}

export function convertTxtWithPuppeteerBrowserRemote(
  input: ConvertTxtWithPuppeteerBrowserRemoteInput,
  native?: NativeOptions,
): Observable<WorkFileAsBlob> {
  const request = buildFormDataRequestToConvert(input)
  return resolveWorkFileAsBlob(request)
}

export function convertTxtWithPuppeteerBrowserLocal(
  input: ConvertTxtWithPuppeteerBrowserLocalInput,
  native?: NativeOptions,
): Observable<WorkFileAsBlob> {
  throw kink('task_not_implemented', {
    task: 'convertTxtWithPuppeteerBrowserLocal',
  })
}

export function convertMarkdownWithPuppeteerBrowser(
  source: ConvertMarkdownWithPuppeteerBrowserInput,
  native?: NativeOptions,
): Observable<WorkFileAsBlob> {
  const input =
    ConvertMarkdownWithPuppeteerBrowserInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return convertMarkdownWithPuppeteerBrowserRemote(input, native)
    default:
      return convertMarkdownWithPuppeteerBrowserLocal(input, native)
  }
}

export function convertMarkdownWithPuppeteerBrowserRemote(
  input: ConvertMarkdownWithPuppeteerBrowserRemoteInput,
  native?: NativeOptions,
) {
  const request = buildFormDataRequestToConvert(input)
  return resolveWorkFileAsBlob(request, native)
}

export function convertMarkdownWithPuppeteerBrowserLocal(
  input: ConvertMarkdownWithPuppeteerBrowserLocalInput,
  native?: NativeOptions,
): Observable<WorkFileAsBlob> {
  throw kink('task_not_implemented', {
    task: 'convertTxtWithPuppeteerBrowserLocal',
  })
}

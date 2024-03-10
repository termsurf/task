import {
  ConvertDocumentWithEnscriptBrowserInput,
  ConvertDocumentWithEnscriptBrowserInputResolver,
  ConvertDocumentWithEnscriptBrowserLocalInput,
  ConvertDocumentWithEnscriptBrowserOutputResolver,
  ConvertDocumentWithEnscriptBrowserRemoteInput,
} from '~/code/type/browser'
import { buildFormDataRequestToConvert } from '../../shared'
import kink from '~/code/tool/shared/kink'
import { resolveWorkFileAsBlob } from '~/code/tool/browser/work'
import { NativeOptions } from '~/code/tool/shared/request'

export async function convertDocumentWithEnscriptBrowser(
  source: ConvertDocumentWithEnscriptBrowserInput,
  native?: NativeOptions,
) {
  const input =
    ConvertDocumentWithEnscriptBrowserInputResolver().parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertDocumentWithEnscriptBrowserRemote(
        input,
        native,
      )
    default:
      return await convertDocumentWithEnscriptBrowserLocal(
        input,
        native,
      )
  }
}

export async function convertDocumentWithEnscriptBrowserRemote(
  input: ConvertDocumentWithEnscriptBrowserRemoteInput,
  native?: NativeOptions,
) {
  const request = buildFormDataRequestToConvert(input)
  const content = await resolveWorkFileAsBlob(request, native)

  return ConvertDocumentWithEnscriptBrowserOutputResolver().parse({
    file: {
      content,
    },
  })
}

export async function convertDocumentWithEnscriptBrowserLocal(
  input: ConvertDocumentWithEnscriptBrowserLocalInput,
  native?: NativeOptions,
) {
  throw kink('task_not_implemented', {
    task: 'convertDocumentWithEnscriptBrowserLocal',
  })
}

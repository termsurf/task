import {
  ConvertDocumentWithEnscriptBrowserInput,
  ConvertDocumentWithEnscriptBrowserInputModel,
  ConvertDocumentWithEnscriptBrowserLocalInput,
  ConvertDocumentWithEnscriptBrowserOutputModel,
  ConvertDocumentWithEnscriptBrowserRemoteInput,
} from '~/code/type/index.js'
import { buildFormDataRequestToConvert } from '../../shared.js'
import { resolveWorkFileAsBlob } from '~/code/tool/shared/work.js'
import kink from '~/code/tool/shared/kink.js'

export async function convertDocumentWithEnscriptBrowser(
  source: ConvertDocumentWithEnscriptBrowserInput,
) {
  const input =
    ConvertDocumentWithEnscriptBrowserInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertDocumentWithEnscriptBrowserRemote(input)
    default:
      return await convertDocumentWithEnscriptBrowserLocal(input)
  }
}

export async function convertDocumentWithEnscriptBrowserRemote(
  input: ConvertDocumentWithEnscriptBrowserRemoteInput,
) {
  const request = buildFormDataRequestToConvert(input)
  const content = await resolveWorkFileAsBlob(request)

  return ConvertDocumentWithEnscriptBrowserOutputModel.parse({
    file: {
      content,
    },
  })
}

export async function convertDocumentWithEnscriptBrowserLocal(
  input: ConvertDocumentWithEnscriptBrowserLocalInput,
) {
  throw kink('task_not_implemented', {
    task: 'convertDocumentWithEnscriptBrowserLocal',
  })
}

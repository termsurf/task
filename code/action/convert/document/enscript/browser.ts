import {
  ConvertDocumentWithEnscriptBrowserInput,
  ConvertDocumentWithEnscriptBrowserInputModel,
  ConvertDocumentWithEnscriptBrowserLocalInput,
  ConvertDocumentWithEnscriptBrowserOutputModel,
  ConvertDocumentWithEnscriptBrowserRemoteInput,
} from '~/code/type/index'
import { buildFormDataRequestToConvert } from '../../shared'
import { resolveWorkFileAsBlob } from '~/code/tool/shared/work'
import kink from '~/code/tool/shared/kink'

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

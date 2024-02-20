import {
  ConvertDocumentWithPandocBrowserInput,
  ConvertDocumentWithPandocBrowserInputModel,
  ConvertDocumentWithPandocBrowserLocalInput,
  ConvertDocumentWithPandocBrowserOutputModel,
  ConvertDocumentWithPandocBrowserRemoteInput,
} from '~/code/type/index'
import { buildFormDataRequestToConvert } from '../../shared'
import { resolveWorkFileAsBlob } from '~/code/tool/shared/work'
import kink from '~/code/tool/shared/kink'

export async function convertDocumentWithPandocBrowser(
  source: ConvertDocumentWithPandocBrowserInput,
) {
  const input = ConvertDocumentWithPandocBrowserInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertDocumentWithPandocBrowserRemote(input)
    default:
      return await convertDocumentWithPandocBrowserLocal(input)
  }
}

export async function convertDocumentWithPandocBrowserRemote(
  input: ConvertDocumentWithPandocBrowserRemoteInput,
) {
  const request = buildFormDataRequestToConvert(input)
  const content = await resolveWorkFileAsBlob(request)

  return ConvertDocumentWithPandocBrowserOutputModel.parse({
    file: {
      content,
    },
  })
}

export async function convertDocumentWithPandocBrowserLocal(
  input: ConvertDocumentWithPandocBrowserLocalInput,
) {
  throw kink('task_not_implemented', {
    task: 'convertDocumentWithPandocBrowserLocal',
  })
}

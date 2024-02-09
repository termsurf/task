import {
  ConvertDocumentWithPandocBrowserInput,
  ConvertDocumentWithPandocBrowserInputModel,
  ConvertDocumentWithPandocBrowserLocalInput,
  ConvertDocumentWithPandocBrowserOutputModel,
  ConvertDocumentWithPandocBrowserRemoteInput,
} from '~/code/type/index.js'
import { buildRequestToConvert } from '../../shared.js'
import { resolveWorkFileAsBlob } from '~/code/tool/shared/work.js'
import kink from '~/code/tool/shared/kink.js'

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
  const request = buildRequestToConvert(input)
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

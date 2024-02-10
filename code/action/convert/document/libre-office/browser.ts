import {
  ConvertDocumentWithLibreOfficeBrowserInput,
  ConvertDocumentWithLibreOfficeBrowserInputModel,
  ConvertDocumentWithLibreOfficeBrowserLocalInput,
  ConvertDocumentWithLibreOfficeBrowserOutputModel,
  ConvertDocumentWithLibreOfficeBrowserRemoteInput,
} from '~/code/type/index.js'
import { buildFormDataRequestToConvert } from '../../shared.js'
import { resolveWorkFileAsBlob } from '~/code/tool/shared/work.js'
import kink from '~/code/tool/shared/kink.js'

export async function convertDocumentWithLibreOfficeBrowser(
  source: ConvertDocumentWithLibreOfficeBrowserInput,
) {
  const input =
    ConvertDocumentWithLibreOfficeBrowserInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertDocumentWithLibreOfficeBrowserRemote(input)
    default:
      return await convertDocumentWithLibreOfficeBrowserLocal(input)
  }
}

export async function convertDocumentWithLibreOfficeBrowserRemote(
  input: ConvertDocumentWithLibreOfficeBrowserRemoteInput,
) {
  const request = buildFormDataRequestToConvert(input)
  const content = await resolveWorkFileAsBlob(request)

  return ConvertDocumentWithLibreOfficeBrowserOutputModel.parse({
    file: {
      content,
    },
  })
}

export async function convertDocumentWithLibreOfficeBrowserLocal(
  input: ConvertDocumentWithLibreOfficeBrowserLocalInput,
) {
  throw kink('task_not_implemented', {
    task: 'convertDocumentWithLibreOfficeBrowserLocal',
  })
}

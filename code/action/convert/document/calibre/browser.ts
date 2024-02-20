import {
  ConvertDocumentWithCalibreBrowserInput,
  ConvertDocumentWithCalibreBrowserInputModel,
  ConvertDocumentWithCalibreBrowserLocalInput,
  ConvertDocumentWithCalibreBrowserOutputModel,
  ConvertDocumentWithCalibreBrowserRemoteInput,
} from '~/code/type/index'
import { buildFormDataRequestToConvert } from '../../shared'
import { resolveWorkFileAsBlob } from '~/code/tool/shared/work'
import kink from '~/code/tool/shared/kink'

export async function convertDocumentWithCalibreBrowser(
  source: ConvertDocumentWithCalibreBrowserInput,
) {
  const input =
    ConvertDocumentWithCalibreBrowserInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertDocumentWithCalibreBrowserRemote(input)
    default:
      return await convertDocumentWithCalibreBrowserLocal(input)
  }
}

export async function convertDocumentWithCalibreBrowserRemote(
  input: ConvertDocumentWithCalibreBrowserRemoteInput,
) {
  const request = buildFormDataRequestToConvert(input)
  const content = await resolveWorkFileAsBlob(request)

  return ConvertDocumentWithCalibreBrowserOutputModel.parse({
    file: {
      content,
    },
  })
}

export async function convertDocumentWithCalibreBrowserLocal(
  input: ConvertDocumentWithCalibreBrowserLocalInput,
) {
  throw kink('task_not_implemented', {
    task: 'convertDocumentWithCalibreBrowserLocal',
  })
}

import {
  ConvertDocumentWithJupyterBrowserInput,
  ConvertDocumentWithJupyterBrowserInputModel,
  ConvertDocumentWithJupyterBrowserLocalInput,
  ConvertDocumentWithJupyterBrowserOutputModel,
  ConvertDocumentWithJupyterBrowserRemoteInput,
} from '~/code/type/index.js'
import { buildRequestToConvert } from '../../shared.js'
import { resolveWorkFileAsBlob } from '~/code/tool/shared/work.js'
import kink from '~/code/tool/shared/kink.js'

export async function convertDocumentWithJupyterBrowser(
  source: ConvertDocumentWithJupyterBrowserInput,
) {
  const input =
    ConvertDocumentWithJupyterBrowserInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertDocumentWithJupyterBrowserRemote(input)
    default:
      return await convertDocumentWithJupyterBrowserLocal(input)
  }
}

export async function convertDocumentWithJupyterBrowserRemote(
  input: ConvertDocumentWithJupyterBrowserRemoteInput,
) {
  const request = buildRequestToConvert(input)
  const content = await resolveWorkFileAsBlob(request)

  return ConvertDocumentWithJupyterBrowserOutputModel.parse({
    file: {
      content,
    },
  })
}

export async function convertDocumentWithJupyterBrowserLocal(
  input: ConvertDocumentWithJupyterBrowserLocalInput,
) {
  throw kink('task_not_implemented', {
    task: 'convertDocumentWithJupyterBrowserLocal',
  })
}

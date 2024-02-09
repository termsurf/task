import {
  ConvertImageWithInkscapeBrowserInput,
  ConvertImageWithInkscapeBrowserInputModel,
  ConvertImageWithInkscapeBrowserLocalInput,
  ConvertImageWithInkscapeBrowserOutputModel,
  ConvertImageWithInkscapeBrowserRemoteInput,
} from '~/code/type/index.js'
import { buildRequestToConvert } from '../../shared.js'
import { resolveWorkFileAsBlob } from '~/code/tool/shared/work.js'
import kink from '~/code/tool/shared/kink.js'

export async function convertImageWithInkscapeBrowser(
  source: ConvertImageWithInkscapeBrowserInput,
) {
  const input = ConvertImageWithInkscapeBrowserInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertImageWithInkscapeBrowserRemote(input)
    default:
      return await convertImageWithInkscapeBrowserLocal(input)
  }
}

export async function convertImageWithInkscapeBrowserRemote(
  input: ConvertImageWithInkscapeBrowserRemoteInput,
) {
  const request = buildRequestToConvert(input)
  const content = await resolveWorkFileAsBlob(request)

  return ConvertImageWithInkscapeBrowserOutputModel.parse({
    file: {
      content,
    },
  })
}

export async function convertImageWithInkscapeBrowserLocal(
  input: ConvertImageWithInkscapeBrowserLocalInput,
) {
  throw kink('task_not_implemented', {
    task: 'convertImageWithInkscapeBrowserLocal',
  })
}

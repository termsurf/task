import {
  ConvertImageWithInkscapeBrowserInput,
  ConvertImageWithInkscapeBrowserInputModel,
  ConvertImageWithInkscapeBrowserLocalInput,
  ConvertImageWithInkscapeBrowserOutputModel,
  ConvertImageWithInkscapeBrowserRemoteInput,
} from '~/code/type/index'
import { buildFormDataRequestToConvert } from '../../shared'
import { resolveWorkFileAsBlob } from '~/code/tool/shared/work'
import kink from '~/code/tool/shared/kink'
import { testConvertImageWithInkscape } from './shared'

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
  const request = buildFormDataRequestToConvert(input)
  const content = await resolveWorkFileAsBlob(request)

  return {
    file: {
      content,
    },
  }
}

export async function convertImageWithInkscapeBrowserLocal(
  input: ConvertImageWithInkscapeBrowserLocalInput,
) {
  throw kink('task_not_implemented', {
    task: 'convertImageWithInkscapeBrowserLocal',
  })
}

export function testConvertImageWithInkscapeBrowser(
  input: any,
): input is ConvertImageWithInkscapeBrowserInput {
  return testConvertImageWithInkscape(input)
}

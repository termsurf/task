import {
  ConvertFontWithFontForgeBrowserInput,
  ConvertFontWithFontForgeBrowserInputModel,
  ConvertFontWithFontForgeBrowserLocalInput,
  ConvertFontWithFontForgeBrowserOutputModel,
  ConvertFontWithFontForgeBrowserRemoteInput,
} from '~/code/type/index.js'
import { buildFormDataRequestToConvert } from '../shared.js'
import { resolveWorkFileAsBlob } from '~/code/tool/shared/work.js'
import kink from '~/code/tool/shared/kink.js'

export async function convertFontWithFontForgeBrowser(
  source: ConvertFontWithFontForgeBrowserInput,
) {
  const input = ConvertFontWithFontForgeBrowserInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertFontWithFontForgeBrowserRemote(input)
    default:
      return await convertFontWithFontForgeBrowserLocal(input)
  }
}

export async function convertFontWithFontForgeBrowserRemote(
  input: ConvertFontWithFontForgeBrowserRemoteInput,
) {
  const request = buildFormDataRequestToConvert(input)
  const content = await resolveWorkFileAsBlob(request)

  return ConvertFontWithFontForgeBrowserOutputModel.parse({
    file: {
      content,
    },
  })
}

export async function convertFontWithFontForgeBrowserLocal(
  input: ConvertFontWithFontForgeBrowserLocalInput,
) {
  throw kink('task_not_implemented', {
    task: 'convertFontWithFontForgeBrowserLocal',
  })
}

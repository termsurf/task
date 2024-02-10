import {
  ConvertImageWithImageMagickBrowserInput,
  ConvertImageWithImageMagickBrowserInputModel,
  ConvertImageWithImageMagickBrowserLocalInput,
  ConvertImageWithImageMagickBrowserOutputModel,
  ConvertImageWithImageMagickBrowserRemoteInput,
} from '~/code/type/index.js'
import { buildFormDataRequestToConvert } from '../../shared.js'
import { resolveWorkFileAsBlob } from '~/code/tool/shared/work.js'
import kink from '~/code/tool/shared/kink.js'

export async function convertImageWithImageMagickBrowser(
  source: ConvertImageWithImageMagickBrowserInput,
) {
  const input =
    ConvertImageWithImageMagickBrowserInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertImageWithImageMagickBrowserRemote(input)
    default:
      return await convertImageWithImageMagickBrowserLocal(input)
  }
}

export async function convertImageWithImageMagickBrowserRemote(
  input: ConvertImageWithImageMagickBrowserRemoteInput,
) {
  const request = buildFormDataRequestToConvert(input)
  const content = await resolveWorkFileAsBlob(request)

  return ConvertImageWithImageMagickBrowserOutputModel.parse({
    file: {
      content,
    },
  })
}

export async function convertImageWithImageMagickBrowserLocal(
  input: ConvertImageWithImageMagickBrowserLocalInput,
) {
  throw kink('task_not_implemented', {
    task: 'convertImageWithImageMagickBrowserLocal',
  })
}

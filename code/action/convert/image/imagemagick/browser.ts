import {
  ConvertImageWithImageMagickBrowserInput,
  ConvertImageWithImageMagickBrowserInputModel,
  ConvertImageWithImageMagickBrowserLocalInput,
  ConvertImageWithImageMagickBrowserOutputModel,
  ConvertImageWithImageMagickBrowserRemoteInput,
} from '~/code/type/index'
import { buildFormDataRequestToConvert } from '../../shared'
import kink from '~/code/tool/shared/kink'
import { testConvertImageWithImageMagick } from './shared'
import { resolveWorkFileAsBlob } from '~/code/tool/browser/work'

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

  return {
    file: {
      content,
    },
  }
}

export async function convertImageWithImageMagickBrowserLocal(
  input: ConvertImageWithImageMagickBrowserLocalInput,
) {
  throw kink('task_not_implemented', {
    task: 'convertImageWithImageMagickBrowserLocal',
  })
}

export function testConvertImageWithImageMagickBrowser(
  input: any,
): input is ConvertImageWithImageMagickBrowserInput {
  return testConvertImageWithImageMagick(input)
}

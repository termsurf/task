import {
  ConvertImageWithImageMagickBrowserInput,
  ConvertImageWithImageMagickBrowserInputModel,
  ConvertImageWithImageMagickBrowserLocalInput,
  ConvertImageWithImageMagickBrowserRemoteInput,
} from '~/code/type'
import { buildFormDataRequestToConvert } from '../../shared'
import kink from '~/code/tool/shared/kink'
import { testConvertImageWithImageMagick } from './shared'
import { resolveWorkFileAsBlob } from '~/code/tool/browser/work'
import { NativeOptions } from '~/code/tool/shared/request'

export async function convertImageWithImageMagickBrowser(
  source: ConvertImageWithImageMagickBrowserInput,
  native?: NativeOptions,
) {
  const input =
    ConvertImageWithImageMagickBrowserInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertImageWithImageMagickBrowserRemote(
        input,
        native,
      )
    default:
      return await convertImageWithImageMagickBrowserLocal(
        input,
        native,
      )
  }
}

export async function convertImageWithImageMagickBrowserRemote(
  input: ConvertImageWithImageMagickBrowserRemoteInput,
  native?: NativeOptions,
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
  native?: NativeOptions,
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

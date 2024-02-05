import {
  ConvertAiToSvgWithInkscapeBrowserInput,
  ConvertAiToSvgWithInkscapeBrowserInputModel,
  ConvertAiToSvgWithInkscapeBrowserOutputModel,
  ConvertImageWithImageMagickBrowserInput,
  ConvertImageWithImageMagickBrowserInputModel,
  ConvertImageWithImageMagickBrowserOutputModel,
} from '~/code/type/index.js'
import { buildRequestToConvert } from '../shared.js'
import { resolveWorkFileAsArrayBuffer } from '~/code/tool/shared/request.js'

export async function convertImageWithImageMagickBrowser(
  input: ConvertImageWithImageMagickBrowserInput,
) {
  const requestInput =
    ConvertImageWithImageMagickBrowserInputModel.parse(input)
  const request = buildRequestToConvert(requestInput)
  const content = await resolveWorkFileAsArrayBuffer(request)

  return ConvertImageWithImageMagickBrowserOutputModel.parse({
    output: {
      file: {
        content,
      },
    },
  })
}

export async function convertImageWithInkscapeBrowser(
  input: ConvertAiToSvgWithInkscapeBrowserInput,
) {
  const requestInput =
    ConvertAiToSvgWithInkscapeBrowserInputModel.parse(input)
  const request = buildRequestToConvert(requestInput)
  const content = await resolveWorkFileAsArrayBuffer(request)

  return ConvertAiToSvgWithInkscapeBrowserOutputModel.parse({
    output: {
      file: {
        content,
      },
    },
  })
}

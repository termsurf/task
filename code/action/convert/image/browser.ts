import {
  ConvertAiToSvgWithInkscapeBrowserInput,
  ConvertAiToSvgWithInkscapeBrowserInputModel,
  ConvertImageWithImageMagickBrowserInput,
  ConvertImageWithImageMagickBrowserInputModel,
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

  return {
    file: {
      content,
    },
  }
}

export async function convertImageWithInkscapeBrowser(
  input: ConvertAiToSvgWithInkscapeBrowserInput,
) {
  const requestInput =
    ConvertAiToSvgWithInkscapeBrowserInputModel.parse(input)
  const request = buildRequestToConvert(requestInput)
  const content = await resolveWorkFileAsArrayBuffer(request)

  return {
    file: {
      content,
    },
  }
}

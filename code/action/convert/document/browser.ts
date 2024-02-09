import {
  ConvertDocumentWithPandocBrowserInput,
  ConvertDocumentWithPandocBrowserInputModel,
  ConvertLatexToPngBrowserInput,
  ConvertLatexToPngBrowserInputModel,
} from '~/code/type/index.js'
import { buildFormDataRequestToConvert } from '../shared.js'
import { resolveAsArrayBuffer } from '~/code/tool/shared/request.js'

export async function convertDocumentWithPandocBrowser(
  source: ConvertDocumentWithPandocBrowserInput,
) {
  const input = ConvertDocumentWithPandocBrowserInputModel.parse(source)
}

export async function convertLatexToPngBrowser(
  source: ConvertLatexToPngBrowserInput,
) {
  const input = ConvertLatexToPngBrowserInputModel.parse(source)
  const request = buildFormDataRequestToConvert(input)
  const content = await resolveAsArrayBuffer(request)
  return content
}

// https://github.com/templeman/awesome-ipsum?tab=readme-ov-file

import {
  ConvertLatexWithPdfLatexBrowserInput,
  ConvertLatexWithPdfLatexBrowserInputModel,
  ConvertLatexWithPdfLatexBrowserLocalInput,
  ConvertLatexWithPdfLatexBrowserOutputModel,
  ConvertLatexWithPdfLatexBrowserRemoteInput,
} from '~/code/type/index'
import { buildFormDataRequestToConvert } from '../../shared'
import { resolveWorkFileAsBlob } from '~/code/tool/shared/work'
import kink from '~/code/tool/shared/kink'

export async function convertLatexWithPdfLatexBrowser(
  source: ConvertLatexWithPdfLatexBrowserInput,
) {
  const input = ConvertLatexWithPdfLatexBrowserInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertLatexWithPdfLatexBrowserRemote(input)
    default:
      return await convertLatexWithPdfLatexBrowserLocal(input)
  }
}

export async function convertLatexWithPdfLatexBrowserRemote(
  input: ConvertLatexWithPdfLatexBrowserRemoteInput,
) {
  const request = buildFormDataRequestToConvert(input)
  const content = await resolveWorkFileAsBlob(request)

  return ConvertLatexWithPdfLatexBrowserOutputModel.parse({
    file: {
      content,
    },
  })
}

export async function convertLatexWithPdfLatexBrowserLocal(
  input: ConvertLatexWithPdfLatexBrowserLocalInput,
) {
  throw kink('task_not_implemented', {
    task: 'convertLatexWithPdfLatexBrowserLocal',
  })
}

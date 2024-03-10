import {
  ConvertLatexWithPdfLatexBrowserInput,
  ConvertLatexWithPdfLatexBrowserInputResolver,
  ConvertLatexWithPdfLatexBrowserLocalInput,
  ConvertLatexWithPdfLatexBrowserOutputResolver,
  ConvertLatexWithPdfLatexBrowserRemoteInput,
} from '~/code/type/browser'
import { buildFormDataRequestToConvert } from '../../shared'
import kink from '~/code/tool/shared/kink'
import { resolveWorkFileAsBlob } from '~/code/tool/browser/work'
import { NativeOptions } from '~/code/tool/shared/request'

export async function convertLatexWithPdfLatexBrowser(
  source: ConvertLatexWithPdfLatexBrowserInput,
  native?: NativeOptions,
) {
  const input =
    ConvertLatexWithPdfLatexBrowserInputResolver().parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertLatexWithPdfLatexBrowserRemote(input, native)
    default:
      return await convertLatexWithPdfLatexBrowserLocal(input, native)
  }
}

export async function convertLatexWithPdfLatexBrowserRemote(
  input: ConvertLatexWithPdfLatexBrowserRemoteInput,
  native?: NativeOptions,
) {
  const request = buildFormDataRequestToConvert(input)
  const content = await resolveWorkFileAsBlob(request, native)

  return ConvertLatexWithPdfLatexBrowserOutputResolver().parse({
    file: {
      content,
    },
  })
}

export async function convertLatexWithPdfLatexBrowserLocal(
  input: ConvertLatexWithPdfLatexBrowserLocalInput,
  native?: NativeOptions,
) {
  throw kink('task_not_implemented', {
    task: 'convertLatexWithPdfLatexBrowserLocal',
  })
}

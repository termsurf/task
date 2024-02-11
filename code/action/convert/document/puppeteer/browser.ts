import {
  ConvertTxtWithPuppeteerBrowserInput,
  ConvertTxtWithPuppeteerBrowserInputModel,
  ConvertTxtWithPuppeteerBrowserLocalInput,
  ConvertTxtWithPuppeteerBrowserOutputModel,
  ConvertTxtWithPuppeteerBrowserRemoteInput,
  ConvertMarkdownWithPuppeteerBrowserInput,
  ConvertMarkdownWithPuppeteerBrowserInputModel,
  ConvertMarkdownWithPuppeteerBrowserLocalInput,
  ConvertMarkdownWithPuppeteerBrowserOutputModel,
  ConvertMarkdownWithPuppeteerBrowserRemoteInput,
} from '~/code/type/index.js'
import { buildFormDataRequestToConvert } from '../../shared.js'
import { resolveWorkFileAsBlob } from '~/code/tool/shared/work.js'
import kink from '~/code/tool/shared/kink.js'

export async function convertTxtWithPuppeteerBrowser(
  source: ConvertTxtWithPuppeteerBrowserInput,
) {
  const input = ConvertTxtWithPuppeteerBrowserInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertTxtWithPuppeteerBrowserRemote(input)
    default:
      return await convertTxtWithPuppeteerBrowserLocal(input)
  }
}

export async function convertTxtWithPuppeteerBrowserRemote(
  input: ConvertTxtWithPuppeteerBrowserRemoteInput,
) {
  const request = buildFormDataRequestToConvert(input)
  const content = await resolveWorkFileAsBlob(request)

  return ConvertTxtWithPuppeteerBrowserOutputModel.parse({
    file: {
      content,
    },
  })
}

export async function convertTxtWithPuppeteerBrowserLocal(
  input: ConvertTxtWithPuppeteerBrowserLocalInput,
) {
  throw kink('task_not_implemented', {
    task: 'convertTxtWithPuppeteerBrowserLocal',
  })
}

export async function convertMarkdownWithPuppeteerBrowser(
  source: ConvertMarkdownWithPuppeteerBrowserInput,
) {
  const input =
    ConvertMarkdownWithPuppeteerBrowserInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertMarkdownWithPuppeteerBrowserRemote(input)
    default:
      return await convertMarkdownWithPuppeteerBrowserLocal(input)
  }
}

export async function convertMarkdownWithPuppeteerBrowserRemote(
  input: ConvertMarkdownWithPuppeteerBrowserRemoteInput,
) {
  const request = buildFormDataRequestToConvert(input)
  const content = await resolveWorkFileAsBlob(request)

  return ConvertMarkdownWithPuppeteerBrowserOutputModel.parse({
    file: {
      content,
    },
  })
}

export async function convertMarkdownWithPuppeteerBrowserLocal(
  input: ConvertMarkdownWithPuppeteerBrowserLocalInput,
) {
  throw kink('task_not_implemented', {
    task: 'convertTxtWithPuppeteerBrowserLocal',
  })
}

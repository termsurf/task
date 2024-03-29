import {
  ConvertVideoWithFfmpegBrowserInput,
  ConvertVideoWithFfmpegBrowserInputResolver,
  ConvertVideoWithFfmpegBrowserLocalInput,
  ConvertVideoWithFfmpegBrowserOutputResolver,
  ConvertVideoWithFfmpegBrowserRemoteInput,
} from '~/code/type/browser'
import { buildFormDataRequestToConvert } from '../../shared'
import kink from '~/code/tool/shared/kink'
import { testConvertVideoWithFfmpeg } from './shared'
import { resolveWorkFileAsBlob } from '~/code/tool/browser/work'

export async function convertVideoWithFfmpegBrowser(
  source: ConvertVideoWithFfmpegBrowserInput,
) {
  const input =
    ConvertVideoWithFfmpegBrowserInputResolver().parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertVideoWithFfmpegBrowserRemote(input)
    default:
      return await convertVideoWithFfmpegBrowserLocal(input)
  }
}

export async function convertVideoWithFfmpegBrowserRemote(
  input: ConvertVideoWithFfmpegBrowserRemoteInput,
) {
  const request = buildFormDataRequestToConvert(input)
  const content = await resolveWorkFileAsBlob(request)

  return {
    file: {
      content,
    },
  }
}

export async function convertVideoWithFfmpegBrowserLocal(
  input: ConvertVideoWithFfmpegBrowserLocalInput,
) {
  throw kink('task_not_implemented', {
    task: 'convertVideoWithFfmpegBrowserLocal',
  })
}

export function testConvertVideoWithFfmpegBrowser(
  input,
): input is ConvertVideoWithFfmpegBrowserInput {
  return testConvertVideoWithFfmpeg(input)
}

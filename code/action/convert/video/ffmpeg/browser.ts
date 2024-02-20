import {
  ConvertVideoWithFfmpegBrowserInput,
  ConvertVideoWithFfmpegBrowserInputModel,
  ConvertVideoWithFfmpegBrowserLocalInput,
  ConvertVideoWithFfmpegBrowserOutputModel,
  ConvertVideoWithFfmpegBrowserRemoteInput,
} from '~/code/type/index.js'
import { buildFormDataRequestToConvert } from '../../shared.js'
import { resolveWorkFileAsBlob } from '~/code/tool/shared/work.js'
import kink from '~/code/tool/shared/kink.js'
import { testConvertVideoWithFfmpeg } from './shared.js'

export async function convertVideoWithFfmpegBrowser(
  source: ConvertVideoWithFfmpegBrowserInput,
) {
  const input = ConvertVideoWithFfmpegBrowserInputModel.parse(source)

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

  return ConvertVideoWithFfmpegBrowserOutputModel.parse({
    file: {
      content,
    },
  })
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

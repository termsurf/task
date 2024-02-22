import {
  ConvertArchiveBrowserInput,
  ConvertArchiveBrowserInputModel,
  ConvertArchiveBrowserLocalInput,
  ConvertArchiveBrowserOutputModel,
  ConvertArchiveBrowserRemoteInput,
} from '~/code/type/index'
import { buildFormDataRequestToConvert } from '../shared'
import kink from '~/code/tool/shared/kink'
import { resolveWorkFileAsBlob } from '~/code/tool/browser/work'
import { NativeOptions } from '~/code/tool/shared/request'

export async function convertArchiveBrowser(
  source: ConvertArchiveBrowserInput,
  native?: NativeOptions,
) {
  const input = ConvertArchiveBrowserInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertArchiveBrowserRemote(input, native)
    default:
      return await convertArchiveBrowserLocal(input, native)
  }
}

export async function convertArchiveBrowserRemote(
  input: ConvertArchiveBrowserRemoteInput,
  native?: NativeOptions,
) {
  const request = buildFormDataRequestToConvert(input)
  const content = await resolveWorkFileAsBlob(request, native)

  return ConvertArchiveBrowserOutputModel.parse({
    file: {
      content,
    },
  })
}

export async function convertArchiveBrowserLocal(
  input: ConvertArchiveBrowserLocalInput,
  native?: NativeOptions,
) {
  throw kink('task_not_implemented', {
    task: 'convertArchiveBrowserLocal',
  })
}

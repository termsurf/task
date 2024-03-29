import { buildFormDataRequestToFormat } from '../shared'
import {
  FormatKotlinBrowserInput,
  FormatKotlinBrowserInputResolver,
  FormatKotlinBrowserLocalInput,
  FormatKotlinBrowserRemoteInput,
} from '~/code/type/browser'
import kink from '~/code/tool/shared/kink'
import { resolveWorkFileAsBlob } from '~/code/tool/browser/work'
import { NativeOptions } from '~/code/tool/shared/request'
import { WorkFileAsBlob } from '~/code/action/browser'

export async function formatKotlinBrowser(
  source: FormatKotlinBrowserInput,
  native?: NativeOptions,
) {
  const input = FormatKotlinBrowserInputResolver().parse(source)

  switch (input.handle) {
    case 'remote':
      return await formatKotlinBrowserRemote(input, native)
    default:
      return await formatKotlinBrowserLocal(input, native)
  }
}

export async function formatKotlinBrowserRemote(
  input: FormatKotlinBrowserRemoteInput,
  native?: NativeOptions,
): Promise<WorkFileAsBlob> {
  const request = buildFormDataRequestToFormat(input)
  return await resolveWorkFileAsBlob(request)
}

export async function formatKotlinBrowserLocal(
  input: FormatKotlinBrowserLocalInput,
  native?: NativeOptions,
): Promise<WorkFileAsBlob> {
  throw kink('task_not_implemented', {
    task: 'formatKotlinBrowserLocal',
  })
}

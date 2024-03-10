import { buildFormDataRequestToFormat } from '../shared'
import {
  FormatSwiftBrowserInput,
  FormatSwiftBrowserInputResolver,
  FormatSwiftBrowserLocalInput,
  FormatSwiftBrowserRemoteInput,
} from '~/code/type/browser'
import kink from '~/code/tool/shared/kink'
import { resolveWorkFileAsBlob } from '~/code/tool/browser/work'
import { NativeOptions } from '~/code/tool/shared/request'
import { WorkFileAsBlob } from '~/code/action/browser'

export async function formatSwiftBrowser(
  source: FormatSwiftBrowserInput,
  native?: NativeOptions,
) {
  const input = FormatSwiftBrowserInputResolver().parse(source)

  switch (input.handle) {
    case 'remote':
      return await formatSwiftBrowserRemote(input, native)
    default:
      return await formatSwiftBrowserLocal(input, native)
  }
}

export async function formatSwiftBrowserRemote(
  input: FormatSwiftBrowserRemoteInput,
  native?: NativeOptions,
): Promise<WorkFileAsBlob> {
  const request = buildFormDataRequestToFormat(input)
  return await resolveWorkFileAsBlob(request)
}

export async function formatSwiftBrowserLocal(
  input: FormatSwiftBrowserLocalInput,
  native?: NativeOptions,
): Promise<WorkFileAsBlob> {
  throw kink('task_not_implemented', {
    task: 'formatSwiftBrowserLocal',
  })
}

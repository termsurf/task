import { buildFormDataRequestToFormat } from '../shared'
import {
  FormatCodeWithClangFormatBrowserInput,
  FormatCodeWithClangFormatBrowserInputResolver,
  FormatCodeWithClangFormatBrowserLocalInput,
  FormatCodeWithClangFormatBrowserRemoteInput,
} from '~/code/type/browser'
import kink from '~/code/tool/shared/kink'
import { resolveWorkFileAsBlob } from '~/code/tool/browser/work'
import { NativeOptions } from '~/code/tool/shared/request'
import { WorkFileAsBlob } from '~/code/action/browser'

export async function formatCodeWithClangFormatBrowser(
  source: FormatCodeWithClangFormatBrowserInput,
  native?: NativeOptions,
) {
  const input =
    FormatCodeWithClangFormatBrowserInputResolver().parse(source)

  switch (input.handle) {
    case 'remote':
      return await formatCodeWithClangFormatBrowserRemote(input, native)
    default:
      return await formatCodeWithClangFormatBrowserLocal(input, native)
  }
}

export async function formatCodeWithClangFormatBrowserRemote(
  input: FormatCodeWithClangFormatBrowserRemoteInput,
  native?: NativeOptions,
): Promise<WorkFileAsBlob> {
  const request = buildFormDataRequestToFormat(input)
  return await resolveWorkFileAsBlob(request)
}

export async function formatCodeWithClangFormatBrowserLocal(
  input: FormatCodeWithClangFormatBrowserLocalInput,
  native?: NativeOptions,
): Promise<WorkFileAsBlob> {
  throw kink('task_not_implemented', {
    task: 'formatCodeWithClangFormatBrowserLocal',
  })
}

import { buildFormDataRequestToFormat } from '../shared'
import {
  FormatPythonBrowserInput,
  FormatPythonBrowserInputResolver,
  FormatPythonBrowserLocalInput,
  FormatPythonBrowserRemoteInput,
} from '~/code/type/browser'
import kink from '~/code/tool/shared/kink'
import { resolveWorkFileAsBlob } from '~/code/tool/browser/work'
import { NativeOptions } from '~/code/tool/shared/request'
import { WorkFileAsBlob } from '~/code/action/browser'

export async function formatPythonBrowser(
  source: FormatPythonBrowserInput,
  native?: NativeOptions,
) {
  const input = FormatPythonBrowserInputResolver().parse(source)

  switch (input.handle) {
    case 'remote':
      return await formatPythonBrowserRemote(input, native)
    default:
      return await formatPythonBrowserLocal(input, native)
  }
}

export async function formatPythonBrowserRemote(
  input: FormatPythonBrowserRemoteInput,
  native?: NativeOptions,
): Promise<WorkFileAsBlob> {
  const request = buildFormDataRequestToFormat(input)
  return await resolveWorkFileAsBlob(request)
}

export async function formatPythonBrowserLocal(
  input: FormatPythonBrowserLocalInput,
  native?: NativeOptions,
): Promise<WorkFileAsBlob> {
  throw kink('task_not_implemented', {
    task: 'formatPythonBrowserLocal',
  })
}

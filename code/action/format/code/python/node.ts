import {
  FormatPythonNodeInput,
  FormatPythonNodeInputResolver,
  FormatPythonNodeLocalExternalInput,
  FormatPythonNodeLocalInternalInput,
  FormatPythonNodeRemoteInput,
  FormatPythonNodeClientInputResolver,
  FormatPythonNodeLocalInputResolver,
} from '~/code/type/node'
import { buildCommandToFormatPython } from '../command'
import { buildRequestToFormat } from '../shared'
import { runCommandSequence } from '~/code/tool/node/command'
import { NativeOptions } from '~/code/tool/shared/request'
import {
  resolveInputForFormatLocalExternalNode,
  resolveInputForFormatLocalInternalNode,
  resolveInputForFormatRemoteNode,
} from '../tool/node'
import { extend } from '~/code/tool/shared/object'
import { resolveWorkFileNode } from '~/code/tool/node/request'

export async function formatPythonNode(
  source: FormatPythonNodeInput,
  native?: NativeOptions,
) {
  const input = FormatPythonNodeInputResolver().parse(source)

  switch (input.handle) {
    case 'remote':
      return await formatPythonNodeRemote(input, native)
    case 'external':
      return await formatPythonNodeLocalExternal(input, native)
    default:
      return await formatPythonNodeLocalInternal(input, native)
  }
}

async function formatPythonNodeLocalExternal(
  source: FormatPythonNodeLocalExternalInput,
  native?: NativeOptions,
) {
  const input = await resolveInputForFormatLocalExternalNode(source)
  return await formatPythonNodeLocal(input, native)
}

async function formatPythonNodeLocalInternal(
  source: FormatPythonNodeLocalInternalInput,
  native?: NativeOptions,
) {
  const input = await resolveInputForFormatLocalInternalNode(source)
  return await formatPythonNodeLocal(input, native)
}

export async function formatPythonNodeRemote(
  source: FormatPythonNodeRemoteInput,
  native?: NativeOptions,
) {
  const input = await resolveInputForFormatRemoteNode(source)
  const clientInput = FormatPythonNodeClientInputResolver().parse(
    extend(input, { handle: 'client' }),
  )

  const request = buildRequestToFormat(clientInput)
  await resolveWorkFileNode(request, input.output.file.path)

  return {
    file: {
      path: input.output.file.path,
    },
  }
}

export async function formatPythonNodeLocal(
  source,
  native?: NativeOptions,
) {
  const input = FormatPythonNodeLocalInputResolver().parse(source)

  const sequence = buildCommandToFormatPython(input)
  await runCommandSequence(sequence)

  return {
    file: {
      path: input.output.file.path,
    },
  }
}

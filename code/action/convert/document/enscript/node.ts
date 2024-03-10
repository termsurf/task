import {
  ConvertDocumentWithEnscriptNodeInput,
  ConvertDocumentWithEnscriptNodeInputResolver,
  ConvertDocumentWithEnscriptNodeOutputResolver,
  ConvertDocumentWithEnscriptNodeLocalInternalInput,
  ConvertDocumentWithEnscriptNodeLocalExternalInput,
  ConvertDocumentWithEnscriptNodeLocalInputResolver,
  ConvertDocumentWithEnscriptNodeRemoteInput,
  ConvertDocumentWithEnscriptNodeClientInputResolver,
} from '~/code/type/node'
import { buildCommandToConvertDocumentWithEnscript } from '../command'
import { runCommandSequence } from '~/code/tool/node/command'
import {
  resolveInputForConvertLocalExternalNode,
  resolveInputForConvertLocalInternalNode,
  resolveInputForConvertRemoteNode,
} from '../../tool/node'
import { extend } from '~/code/tool/shared/object'
import { buildRequestToConvert } from '../../shared'
import { resolveWorkFileNode } from '~/code/tool/node/request'
import { NativeOptions } from '~/code/tool/shared/request'

export async function convertDocumentWithEnscriptNode(
  source: ConvertDocumentWithEnscriptNodeInput,
  native?: NativeOptions,
) {
  const input =
    ConvertDocumentWithEnscriptNodeInputResolver().parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertDocumentWithEnscriptNodeRemote(input, native)
    case 'external':
      return await convertDocumentWithEnscriptNodeLocalExternal(
        input,
        native,
      )
    default:
      return await convertDocumentWithEnscriptNodeLocalInternal(
        input,
        native,
      )
  }
}

async function convertDocumentWithEnscriptNodeLocalExternal(
  source: ConvertDocumentWithEnscriptNodeLocalExternalInput,
  native?: NativeOptions,
) {
  const input = await resolveInputForConvertLocalExternalNode(source)
  return await convertDocumentWithEnscriptNodeLocal(input, native)
}

async function convertDocumentWithEnscriptNodeLocalInternal(
  source: ConvertDocumentWithEnscriptNodeLocalInternalInput,
  native?: NativeOptions,
) {
  const input = await resolveInputForConvertLocalInternalNode(source)
  return await convertDocumentWithEnscriptNodeLocal(input, native)
}

export async function convertDocumentWithEnscriptNodeRemote(
  source: ConvertDocumentWithEnscriptNodeRemoteInput,
  native?: NativeOptions,
) {
  const input = await resolveInputForConvertRemoteNode(source)
  const clientInput =
    ConvertDocumentWithEnscriptNodeClientInputResolver().parse(
      extend(input, { handle: 'client' }),
    )

  const request = buildRequestToConvert(clientInput)
  await resolveWorkFileNode(request, input.output.file.path)

  return ConvertDocumentWithEnscriptNodeOutputResolver().parse({
    file: {
      path: input.output.file.path,
    },
  })
}

export async function convertDocumentWithEnscriptNodeLocal(
  input,
  native?: NativeOptions,
) {
  const localInput =
    ConvertDocumentWithEnscriptNodeLocalInputResolver().parse(input)

  const sequence =
    await buildCommandToConvertDocumentWithEnscript(localInput)

  await runCommandSequence(sequence)

  return ConvertDocumentWithEnscriptNodeOutputResolver().parse({
    file: {
      path: localInput.output.file.path,
    },
  })
}

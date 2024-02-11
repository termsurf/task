import {
  ConvertDocumentWithEnscriptNodeInput,
  ConvertDocumentWithEnscriptNodeInputModel,
  ConvertDocumentWithEnscriptNodeOutputModel,
  ConvertDocumentWithEnscriptNodeLocalInternalInput,
  ConvertDocumentWithEnscriptNodeLocalExternalInput,
  ConvertDocumentWithEnscriptNodeLocalInputModel,
  ConvertDocumentWithEnscriptNodeRemoteInput,
  ConvertDocumentWithEnscriptNodeClientInputModel,
} from '~/code/type/index.js'
import { buildCommandToConvertDocumentWithEnscript } from '../command.js'
import { runCommandSequence } from '~/code/tool/node/command.js'
import {
  resolveInputForConvertLocalExternalNode,
  resolveInputForConvertLocalInternalNode,
  resolveInputForConvertRemoteNode,
} from '../../tool/node.js'
import { extend } from '~/code/tool/shared/object.js'
import {
  buildFormDataRequestToConvert,
  buildRequestToConvert,
} from '../../shared.js'
import { resolveWorkFileNode } from '~/code/tool/node/request.js'

export async function convertDocumentWithEnscriptNode(
  source: ConvertDocumentWithEnscriptNodeInput,
) {
  const input = ConvertDocumentWithEnscriptNodeInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertDocumentWithEnscriptNodeRemote(input)
    case 'external':
      return await convertDocumentWithEnscriptNodeLocalExternal(input)
    default:
      return await convertDocumentWithEnscriptNodeLocalInternal(input)
  }
}

async function convertDocumentWithEnscriptNodeLocalExternal(
  source: ConvertDocumentWithEnscriptNodeLocalExternalInput,
) {
  const input = await resolveInputForConvertLocalExternalNode(source)
  return await convertDocumentWithEnscriptNodeLocal(input)
}

async function convertDocumentWithEnscriptNodeLocalInternal(
  source: ConvertDocumentWithEnscriptNodeLocalInternalInput,
) {
  const input = await resolveInputForConvertLocalInternalNode(source)
  return await convertDocumentWithEnscriptNodeLocal(input)
}

export async function convertDocumentWithEnscriptNodeRemote(
  source: ConvertDocumentWithEnscriptNodeRemoteInput,
) {
  const input = await resolveInputForConvertRemoteNode(source)
  const clientInput =
    ConvertDocumentWithEnscriptNodeClientInputModel.parse(
      extend(input, { handle: 'client' }),
    )

  const request = buildRequestToConvert(clientInput)
  await resolveWorkFileNode(request, input.output.file.path)

  return ConvertDocumentWithEnscriptNodeOutputModel.parse({
    file: {
      path: input.output.file.path,
    },
  })
}

export async function convertDocumentWithEnscriptNodeLocal(input) {
  const localInput =
    ConvertDocumentWithEnscriptNodeLocalInputModel.parse(input)

  const sequence =
    await buildCommandToConvertDocumentWithEnscript(localInput)

  await runCommandSequence(sequence)

  return ConvertDocumentWithEnscriptNodeOutputModel.parse({
    file: {
      path: localInput.output.file.path,
    },
  })
}
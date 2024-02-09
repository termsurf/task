import {
  ConvertDocumentWithPandocNodeInput,
  ConvertDocumentWithPandocNodeInputModel,
  ConvertDocumentWithPandocNodeOutputModel,
  ConvertDocumentWithPandocNodeLocalInternalInput,
  ConvertDocumentWithPandocNodeLocalExternalInput,
  ConvertDocumentWithPandocNodeLocalInputModel,
  ConvertDocumentWithPandocNodeRemoteInput,
  ConvertDocumentWithPandocNodeClientInputModel,
} from '~/code/type/index.js'
import { buildCommandToConvertDocumentWithPandoc } from '../command.js'
import { runCommandSequence } from '~/code/tool/node/command.js'
import {
  resolveInputForConvertLocalExternalNode,
  resolveInputForConvertLocalInternalNode,
  resolveInputForConvertRemoteNode,
} from '../../tool/node.js'
import { extend } from '~/code/tool/shared/object.js'
import { buildRequestToConvert } from '../../shared.js'
import { resolveWorkFileNode } from '~/code/tool/node/request.js'

export async function convertDocumentWithPandocNode(
  source: ConvertDocumentWithPandocNodeInput,
) {
  const input = ConvertDocumentWithPandocNodeInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertDocumentWithPandocNodeRemote(input)
    case 'external':
      return await convertDocumentWithPandocNodeLocalExternal(input)
    default:
      return await convertDocumentWithPandocNodeLocalInternal(input)
  }
}

async function convertDocumentWithPandocNodeLocalExternal(
  source: ConvertDocumentWithPandocNodeLocalExternalInput,
) {
  const input = await resolveInputForConvertLocalExternalNode(source)
  return await convertDocumentWithPandocNodeLocal(input)
}

async function convertDocumentWithPandocNodeLocalInternal(
  source: ConvertDocumentWithPandocNodeLocalInternalInput,
) {
  const input = await resolveInputForConvertLocalInternalNode(source)
  return await convertDocumentWithPandocNodeLocal(input)
}

export async function convertDocumentWithPandocNodeRemote(
  source: ConvertDocumentWithPandocNodeRemoteInput,
) {
  const input = await resolveInputForConvertRemoteNode(source)
  const clientInput =
    ConvertDocumentWithPandocNodeClientInputModel.parse(
      extend(input, { handle: 'client' }),
    )

  const request = buildRequestToConvert(clientInput)
  await resolveWorkFileNode(request, input.output.file.path)

  return ConvertDocumentWithPandocNodeOutputModel.parse({
    file: {
      path: input.output.file.path,
    },
  })
}

export async function convertDocumentWithPandocNodeLocal(input) {
  const localInput =
    ConvertDocumentWithPandocNodeLocalInputModel.parse(input)

  const sequence =
    await buildCommandToConvertDocumentWithPandoc(localInput)

  await runCommandSequence(sequence)

  return ConvertDocumentWithPandocNodeOutputModel.parse({
    file: {
      path: localInput.output.file.path,
    },
  })
}

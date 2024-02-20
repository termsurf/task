import {
  ConvertDocumentWithCalibreNodeInput,
  ConvertDocumentWithCalibreNodeInputModel,
  ConvertDocumentWithCalibreNodeOutputModel,
  ConvertDocumentWithCalibreNodeLocalInternalInput,
  ConvertDocumentWithCalibreNodeLocalExternalInput,
  ConvertDocumentWithCalibreNodeLocalInputModel,
  ConvertDocumentWithCalibreNodeRemoteInput,
  ConvertDocumentWithCalibreNodeClientInputModel,
} from '~/code/type/index'
import { buildCommandToConvertDocumentWithCalibre } from '../command'
import { runCommandSequence } from '~/code/tool/node/command'
import {
  resolveInputForConvertLocalExternalNode,
  resolveInputForConvertLocalInternalNode,
  resolveInputForConvertRemoteNode,
} from '../../tool/node'
import { extend } from '~/code/tool/shared/object'
import { buildRequestToConvert } from '../../shared'
import { resolveWorkFileNode } from '~/code/tool/node/request'

export async function convertDocumentWithCalibreNode(
  source: ConvertDocumentWithCalibreNodeInput,
) {
  const input = ConvertDocumentWithCalibreNodeInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertDocumentWithCalibreNodeRemote(input)
    case 'external':
      return await convertDocumentWithCalibreNodeLocalExternal(input)
    default:
      return await convertDocumentWithCalibreNodeLocalInternal(input)
  }
}

async function convertDocumentWithCalibreNodeLocalExternal(
  source: ConvertDocumentWithCalibreNodeLocalExternalInput,
) {
  const input = await resolveInputForConvertLocalExternalNode(source)
  return await convertDocumentWithCalibreNodeLocal(input)
}

async function convertDocumentWithCalibreNodeLocalInternal(
  source: ConvertDocumentWithCalibreNodeLocalInternalInput,
) {
  const input = await resolveInputForConvertLocalInternalNode(source)
  return await convertDocumentWithCalibreNodeLocal(input)
}

export async function convertDocumentWithCalibreNodeRemote(
  source: ConvertDocumentWithCalibreNodeRemoteInput,
) {
  const input = await resolveInputForConvertRemoteNode(source)
  const clientInput =
    ConvertDocumentWithCalibreNodeClientInputModel.parse(
      extend(input, { handle: 'client' }),
    )

  const request = buildRequestToConvert(clientInput)
  await resolveWorkFileNode(request, input.output.file.path)

  return ConvertDocumentWithCalibreNodeOutputModel.parse({
    file: {
      path: input.output.file.path,
    },
  })
}

export async function convertDocumentWithCalibreNodeLocal(input) {
  const localInput =
    ConvertDocumentWithCalibreNodeLocalInputModel.parse(input)

  const sequence =
    await buildCommandToConvertDocumentWithCalibre(localInput)

  await runCommandSequence(sequence)

  return ConvertDocumentWithCalibreNodeOutputModel.parse({
    file: {
      path: localInput.output.file.path,
    },
  })
}

import {
  ConvertImageWithImageMagickNodeInput,
  ConvertImageWithImageMagickNodeInputModel,
  ConvertImageWithImageMagickNodeOutputModel,
  ConvertImageWithImageMagickNodeLocalInternalInput,
  ConvertImageWithImageMagickNodeLocalExternalInput,
  ConvertImageWithImageMagickNodeLocalInputModel,
  ConvertImageWithImageMagickNodeRemoteInput,
  ConvertImageWithImageMagickNodeClientInputModel,
} from '~/code/type/index.js'
import { buildCommandToConvertImageWithImageMagick } from '../command.js'
import { runCommandSequence } from '~/code/tool/node/command.js'
import {
  resolveInputForConvertLocalExternalNode,
  resolveInputForConvertLocalInternalNode,
  resolveInputForConvertRemoteNode,
} from '../../tool/node.js'
import { extend } from '~/code/tool/shared/object.js'
import { buildRequestToConvert } from '../../shared.js'
import { resolveWorkFileNode } from '~/code/tool/node/request.js'

export async function convertImageWithImageMagickNode(
  source: ConvertImageWithImageMagickNodeInput,
) {
  const input = ConvertImageWithImageMagickNodeInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertImageWithImageMagickNodeRemote(input)
    case 'external':
      return await convertImageWithImageMagickNodeLocalExternal(input)
    default:
      return await convertImageWithImageMagickNodeLocalInternal(input)
  }
}

async function convertImageWithImageMagickNodeLocalExternal(
  source: ConvertImageWithImageMagickNodeLocalExternalInput,
) {
  const input = await resolveInputForConvertLocalExternalNode(source)
  return await convertImageWithImageMagickNodeLocal(input)
}

async function convertImageWithImageMagickNodeLocalInternal(
  source: ConvertImageWithImageMagickNodeLocalInternalInput,
) {
  const input = await resolveInputForConvertLocalInternalNode(source)
  return await convertImageWithImageMagickNodeLocal(input)
}

export async function convertImageWithImageMagickNodeRemote(
  source: ConvertImageWithImageMagickNodeRemoteInput,
) {
  const input = await resolveInputForConvertRemoteNode(source)
  const clientInput =
    ConvertImageWithImageMagickNodeClientInputModel.parse(
      extend(input, { handle: 'client' }),
    )

  const request = buildRequestToConvert(clientInput)
  await resolveWorkFileNode(request, input.output.file.path)

  return ConvertImageWithImageMagickNodeOutputModel.parse({
    file: {
      path: input.output.file.path,
    },
  })
}

export async function convertImageWithImageMagickNodeLocal(input) {
  const localInput =
    ConvertImageWithImageMagickNodeLocalInputModel.parse(input)

  const sequence =
    await buildCommandToConvertImageWithImageMagick(localInput)

  await runCommandSequence(sequence)

  return ConvertImageWithImageMagickNodeOutputModel.parse({
    file: {
      path: localInput.output.file.path,
    },
  })
}

import {
  ConvertImageWithInkscapeNodeInput,
  ConvertImageWithInkscapeNodeInputModel,
  ConvertImageWithInkscapeNodeOutputModel,
  ConvertImageWithInkscapeNodeLocalInternalInput,
  ConvertImageWithInkscapeNodeLocalExternalInput,
  ConvertImageWithInkscapeNodeLocalInputModel,
  ConvertImageWithInkscapeNodeRemoteInput,
  ConvertImageWithInkscapeNodeClientInputModel,
} from '~/code/type/index'
import { buildCommandToConvertImageWithInkscape } from '../command'
import { runCommandSequence } from '~/code/tool/node/command'
import {
  resolveInputForConvertLocalExternalNode,
  resolveInputForConvertLocalInternalNode,
  resolveInputForConvertRemoteNode,
} from '../../tool/node'
import { extend } from '~/code/tool/shared/object'
import { buildRequestToConvert } from '../../shared'
import { resolveWorkFileNode } from '~/code/tool/node/request'
import { testConvertImageWithInkscape } from './shared'

export async function convertImageWithInkscapeNode(
  source: ConvertImageWithInkscapeNodeInput,
) {
  const input = ConvertImageWithInkscapeNodeInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertImageWithInkscapeNodeRemote(input)
    case 'external':
      return await convertImageWithInkscapeNodeLocalExternal(input)
    default:
      return await convertImageWithInkscapeNodeLocalInternal(input)
  }
}

async function convertImageWithInkscapeNodeLocalExternal(
  source: ConvertImageWithInkscapeNodeLocalExternalInput,
) {
  const input = await resolveInputForConvertLocalExternalNode(source)
  return await convertImageWithInkscapeNodeLocal(input)
}

async function convertImageWithInkscapeNodeLocalInternal(
  source: ConvertImageWithInkscapeNodeLocalInternalInput,
) {
  const input = await resolveInputForConvertLocalInternalNode(source)
  return await convertImageWithInkscapeNodeLocal(input)
}

export async function convertImageWithInkscapeNodeRemote(
  source: ConvertImageWithInkscapeNodeRemoteInput,
) {
  const input = await resolveInputForConvertRemoteNode(source)
  const clientInput =
    ConvertImageWithInkscapeNodeClientInputModel.parse(
      extend(input, { handle: 'client' }),
    )

  const request = buildRequestToConvert(clientInput)
  await resolveWorkFileNode(request, input.output.file.path)

  return ConvertImageWithInkscapeNodeOutputModel.parse({
    file: {
      path: input.output.file.path,
    },
  })
}

export async function convertImageWithInkscapeNodeLocal(input) {
  const localInput =
    ConvertImageWithInkscapeNodeLocalInputModel.parse(input)

  const sequence =
    await buildCommandToConvertImageWithInkscape(localInput)

  await runCommandSequence(sequence)

  return ConvertImageWithInkscapeNodeOutputModel.parse({
    file: {
      path: localInput.output.file.path,
    },
  })
}

export function testConvertImageWithInkscapeNode(
  input: any,
): input is ConvertImageWithInkscapeNodeInput {
  return testConvertImageWithInkscape(input)
}

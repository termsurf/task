import {
  ConvertVideoWithFfmpegNodeInput,
  ConvertVideoWithFfmpegNodeInputModel,
  ConvertVideoWithFfmpegNodeOutputModel,
  ConvertVideoWithFfmpegNodeLocalInternalInput,
  ConvertVideoWithFfmpegNodeLocalExternalInput,
  ConvertVideoWithFfmpegNodeLocalInputModel,
  ConvertVideoWithFfmpegNodeRemoteInput,
  ConvertVideoWithFfmpegNodeClientInputModel,
} from '~/code/type'
import { buildCommandToConvertVideoWithFfmpeg } from '../command'
import { runCommandSequence } from '~/code/tool/node/command'
import {
  resolveInputForConvertLocalExternalNode,
  resolveInputForConvertLocalInternalNode,
  resolveInputForConvertRemoteNode,
} from '../../tool/node'
import { extend } from '~/code/tool/shared/object'
import { buildRequestToConvert } from '../../shared'
import { resolveWorkFileNode } from '~/code/tool/node/request'
import { testConvertVideoWithFfmpeg } from './shared'
import { NativeOptions } from '~/code/tool/shared/request'

export async function convertVideoWithFfmpegNode(
  source: ConvertVideoWithFfmpegNodeInput,
  native?: NativeOptions,
) {
  const input = ConvertVideoWithFfmpegNodeInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertVideoWithFfmpegNodeRemote(input, native)
    case 'external':
      return await convertVideoWithFfmpegNodeLocalExternal(
        input,
        native,
      )
    default:
      return await convertVideoWithFfmpegNodeLocalInternal(
        input,
        native,
      )
  }
}

async function convertVideoWithFfmpegNodeLocalExternal(
  source: ConvertVideoWithFfmpegNodeLocalExternalInput,
  native?: NativeOptions,
) {
  const input = await resolveInputForConvertLocalExternalNode(source)
  return await convertVideoWithFfmpegNodeLocal(input, native)
}

async function convertVideoWithFfmpegNodeLocalInternal(
  source: ConvertVideoWithFfmpegNodeLocalInternalInput,
  native?: NativeOptions,
) {
  const input = await resolveInputForConvertLocalInternalNode(source)
  return await convertVideoWithFfmpegNodeLocal(input, native)
}

export async function convertVideoWithFfmpegNodeRemote(
  source: ConvertVideoWithFfmpegNodeRemoteInput,
  native?: NativeOptions,
) {
  const input = await resolveInputForConvertRemoteNode(source)
  const clientInput = ConvertVideoWithFfmpegNodeClientInputModel.parse(
    extend(input, { handle: 'client' }),
  )

  const request = buildRequestToConvert(clientInput)
  await resolveWorkFileNode(request, input.output.file.path)

  return ConvertVideoWithFfmpegNodeOutputModel.parse({
    file: {
      path: input.output.file.path,
    },
  })
}

export async function convertVideoWithFfmpegNodeLocal(
  input,
  native?: NativeOptions,
) {
  const localInput =
    ConvertVideoWithFfmpegNodeLocalInputModel.parse(input)

  const sequence =
    await buildCommandToConvertVideoWithFfmpeg(localInput)

  await runCommandSequence(sequence)

  return ConvertVideoWithFfmpegNodeOutputModel.parse({
    file: {
      path: localInput.output.file.path,
    },
  })
}

export function testConvertVideoWithFfmpegNode(
  input,
): input is ConvertVideoWithFfmpegNodeInput {
  return testConvertVideoWithFfmpeg(input)
}

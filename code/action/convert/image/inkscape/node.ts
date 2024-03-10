import {
  ConvertImageWithInkscapeNodeInput,
  ConvertImageWithInkscapeNodeInputResolver,
  ConvertImageWithInkscapeNodeOutputResolver,
  ConvertImageWithInkscapeNodeLocalInternalInput,
  ConvertImageWithInkscapeNodeLocalExternalInput,
  ConvertImageWithInkscapeNodeLocalInputResolver,
  ConvertImageWithInkscapeNodeRemoteInput,
  ConvertImageWithInkscapeNodeClientInputResolver,
} from '~/code/type/node'
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
import { NativeOptions } from '~/code/tool/shared/request'

export async function convertImageWithInkscapeNode(
  source: ConvertImageWithInkscapeNodeInput,
  native?: NativeOptions,
) {
  const input =
    ConvertImageWithInkscapeNodeInputResolver().parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertImageWithInkscapeNodeRemote(input, native)
    case 'external':
      return await convertImageWithInkscapeNodeLocalExternal(
        input,
        native,
      )
    default:
      return await convertImageWithInkscapeNodeLocalInternal(
        input,
        native,
      )
  }
}

async function convertImageWithInkscapeNodeLocalExternal(
  source: ConvertImageWithInkscapeNodeLocalExternalInput,
  native?: NativeOptions,
) {
  const input = await resolveInputForConvertLocalExternalNode(source)
  return await convertImageWithInkscapeNodeLocal(input, native)
}

async function convertImageWithInkscapeNodeLocalInternal(
  source: ConvertImageWithInkscapeNodeLocalInternalInput,
  native?: NativeOptions,
) {
  const input = await resolveInputForConvertLocalInternalNode(source)
  return await convertImageWithInkscapeNodeLocal(input, native)
}

export async function convertImageWithInkscapeNodeRemote(
  source: ConvertImageWithInkscapeNodeRemoteInput,
  native?: NativeOptions,
) {
  const input = await resolveInputForConvertRemoteNode(source)
  const clientInput =
    ConvertImageWithInkscapeNodeClientInputResolver().parse(
      extend(input, { handle: 'client' }),
    )

  const request = buildRequestToConvert(clientInput)
  await resolveWorkFileNode(request, input.output.file.path)

  return ConvertImageWithInkscapeNodeOutputResolver().parse({
    file: {
      path: input.output.file.path,
    },
  })
}

export async function convertImageWithInkscapeNodeLocal(
  input,
  native?: NativeOptions,
) {
  const localInput =
    ConvertImageWithInkscapeNodeLocalInputResolver().parse(input)

  const sequence =
    await buildCommandToConvertImageWithInkscape(localInput)

  await runCommandSequence(sequence)

  return ConvertImageWithInkscapeNodeOutputResolver().parse({
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

import {
  ConvertFontWithFontForgeNodeInput,
  ConvertFontWithFontForgeNodeInputModel,
  ConvertFontWithFontForgeNodeOutputModel,
  ConvertFontWithFontForgeNodeLocalInternalInput,
  ConvertFontWithFontForgeNodeLocalExternalInput,
  ConvertFontWithFontForgeNodeLocalInputModel,
  ConvertFontWithFontForgeNodeRemoteInput,
  ConvertFontWithFontForgeNodeClientInputModel,
} from '~/code/type/index.js'
import {
  buildCommandToConvertFontWithFontForge,
  testConvertFontWithFontForge,
} from './shared.js'
import { runCommandSequence } from '~/code/tool/node/command.js'
import {
  resolveInputForConvertLocalExternalNode,
  resolveInputForConvertLocalInternalNode,
  resolveInputForConvertRemoteNode,
} from '../tool/node.js'
import { extend } from '~/code/tool/shared/object.js'
import { buildRequestToConvert } from '../shared.js'
import { resolveWorkFileNode } from '~/code/tool/node/request.js'

export async function convertFontWithFontForgeNode(
  source: ConvertFontWithFontForgeNodeInput,
) {
  const input = ConvertFontWithFontForgeNodeInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertFontWithFontForgeNodeRemote(input)
    case 'external':
      return await convertFontWithFontForgeNodeLocalExternal(input)
    default:
      return await convertFontWithFontForgeNodeLocalInternal(input)
  }
}

async function convertFontWithFontForgeNodeLocalExternal(
  source: ConvertFontWithFontForgeNodeLocalExternalInput,
) {
  const input = await resolveInputForConvertLocalExternalNode(source)
  return await convertFontWithFontForgeNodeLocal(input)
}

async function convertFontWithFontForgeNodeLocalInternal(
  source: ConvertFontWithFontForgeNodeLocalInternalInput,
) {
  const input = await resolveInputForConvertLocalInternalNode(source)
  return await convertFontWithFontForgeNodeLocal(input)
}

export async function convertFontWithFontForgeNodeRemote(
  source: ConvertFontWithFontForgeNodeRemoteInput,
) {
  const input = await resolveInputForConvertRemoteNode(source)
  const clientInput =
    ConvertFontWithFontForgeNodeClientInputModel.parse(
      extend(input, { handle: 'client' }),
    )

  const request = buildRequestToConvert(clientInput)
  await resolveWorkFileNode(request, input.output.file.path)

  return ConvertFontWithFontForgeNodeOutputModel.parse({
    file: {
      path: input.output.file.path,
    },
  })
}

export async function convertFontWithFontForgeNodeLocal(input) {
  const localInput =
    ConvertFontWithFontForgeNodeLocalInputModel.parse(input)

  const sequence =
    await buildCommandToConvertFontWithFontForge(localInput)

  await runCommandSequence(sequence)

  return ConvertFontWithFontForgeNodeOutputModel.parse({
    file: {
      path: localInput.output.file.path,
    },
  })
}

export function testConvertFontWithFontForgeNode(
  input: any,
): input is ConvertFontWithFontForgeNodeInput {
  return testConvertFontWithFontForge(input)
}

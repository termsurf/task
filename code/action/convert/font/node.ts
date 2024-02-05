import {
  ConvertFontWithFontForgeNodeCommandInputModel,
  ConvertFontWithFontForgeNodeInput,
  ConvertFontWithFontForgeNodeInputModel,
  ConvertFontWithFontForgeNodeOutputModel,
} from '~/code/type/index.js'
import { bindConvertLocal, bindConvertRemote } from '../tool/node.js'
import { buildCommandToConvertFontWithFontForge } from './shared.js'
import { runCommandSequence } from '~/code/tool/node/command.js'

export async function convertFontWithFontForgeNode(
  source: ConvertFontWithFontForgeNodeInput,
) {
  const input = ConvertFontWithFontForgeNodeInputModel.parse(source)

  if (input.remote) {
    const remoteInput = await bindConvertRemote(input)
    return await convertFontWithFontForgeNodeRemote(remoteInput)
  } else {
    const localInput = await bindConvertLocal(input)
    return await convertFontWithFontForgeNodeLocal(localInput)
  }
}

export async function convertFontWithFontForgeNodeLocal(
  input: ConvertFontWithFontForgeNodeInput,
) {
  const commandInput =
    ConvertFontWithFontForgeNodeCommandInputModel.parse(input)
  const sequence = await buildCommandToConvertFontWithFontForge(
    commandInput,
  )

  await runCommandSequence(sequence)

  return ConvertFontWithFontForgeNodeOutputModel.parse({
    output: {
      file: {
        path: input.output.file.path,
      },
    },
  })
}

export async function convertFontWithFontForgeNodeRemote(
  source: ConvertFontWithFontForgeNodeInput,
) {
  // const input =
  //   ConvertFontWithFontForgeNodeRemoteCallModel.parse(source)
  // const request = buildRequestToConvert(input)
  // return await postRemote(request)
}

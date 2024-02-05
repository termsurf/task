import {
  ConvertFontWithFontForgeNodeCall,
  ConvertFontWithFontForgeNodeCallModel,
  ConvertFontWithFontForgeNodeLocalCall,
  ConvertFontWithFontForgeNodeOutputResponseModel,
  ConvertFontWithFontForgeNodeRemoteCall,
  ConvertFontWithFontForgeNodeRemoteCallModel,
} from '~/code/type/index.js'
import { bindConvertLocal, bindConvertRemote } from '../tool/node.js'
import { buildRequestToConvert } from '../shared.js'
import { postRemote } from '~/code/tool/shared/request.js'
import {
  buildCommandToConvertFontWithFontForge,
  explainConvertFontWithFontForge,
} from './shared.js'
import { runCommandSequence } from '~/code/tool/node/command.js'

export async function convertFontWithFontForgeNode(
  source: ConvertFontWithFontForgeNodeCall,
) {
  const input = ConvertFontWithFontForgeNodeCallModel.parse(source)
  if (input.explain) {
    return await explainConvertFontWithFontForge(input)
  }

  if (input.remote) {
    const remoteInput = await bindConvertRemote(input)
    return await convertFontWithFontForgeNodeRemote(remoteInput)
  } else {
    const localInput = await bindConvertLocal(input)
    return await convertFontWithFontForgeNodeLocal(localInput)
  }
}

export async function convertFontWithFontForgeNodeLocal(
  input: ConvertFontWithFontForgeNodeLocalCall,
) {
  const sequence = await buildCommandToConvertFontWithFontForge(input)

  await runCommandSequence(sequence.tree)

  return ConvertFontWithFontForgeNodeOutputResponseModel.parse({
    output: {
      file: {
        path: input.output.file.path,
      },
    },
  })
}

export async function convertFontWithFontForgeNodeRemote(
  source: ConvertFontWithFontForgeNodeRemoteCall,
) {
  const input =
    ConvertFontWithFontForgeNodeRemoteCallModel.parse(source)
  const request = buildRequestToConvert(input)
  return await postRemote(request.tree)
}

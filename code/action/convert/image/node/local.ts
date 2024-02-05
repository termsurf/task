import {
  ConvertAiToSvgWithInkscapeNodeCommandInputModel,
  ConvertAiToSvgWithInkscapeNodeInput,
  ConvertAiToSvgWithInkscapeNodeOutputModel,
  ConvertImageWithImageMagickNodeCommandInputModel,
  ConvertImageWithImageMagickNodeInput,
  ConvertImageWithImageMagickNodeOutputModel,
} from '~/code/type/index.js'
import {
  buildCommandToConvertAIToSVGWithInkscape,
  buildCommandToConvertImageWithImageMagick,
} from '../command.js'
import { runCommandSequence } from '~/code/tool/node/command.js'

export async function convertImageWithImageMagickNodeLocal(
  input: ConvertImageWithImageMagickNodeInput,
) {
  const commandInput =
    ConvertImageWithImageMagickNodeCommandInputModel.parse(input)
  const sequence =
    buildCommandToConvertImageWithImageMagick(commandInput)

  await runCommandSequence(sequence)

  return ConvertImageWithImageMagickNodeOutputModel.parse({
    output: {
      file: {
        path: input.output.file.path,
      },
    },
  })
}

export async function convertImageWithInkscapeLocal(
  input: ConvertAiToSvgWithInkscapeNodeInput,
) {
  const commandInput =
    ConvertAiToSvgWithInkscapeNodeCommandInputModel.parse(input)
  const sequence = await buildCommandToConvertAIToSVGWithInkscape(
    commandInput,
  )
  await runCommandSequence(sequence)
  return ConvertAiToSvgWithInkscapeNodeOutputModel.parse({
    output: {
      file: {
        path: input.output.file.path,
      },
    },
  })
}

import {
  ConvertAiToSvgWithInkscapeNodeInput,
  ConvertAiToSvgWithInkscapeNodeLocalCommandInputModel,
  ConvertAiToSvgWithInkscapeNodeOutputModel,
  ConvertImageWithImageMagickNodeInput,
  ConvertImageWithImageMagickNodeLocalCommandInputModel,
  ConvertImageWithImageMagickNodeOutputModel,
} from '~/code/type/index.js'
import {
  buildCommandToConvertAIToSVGWithInkscape,
  buildCommandToConvertImageWithImageMagick,
} from '../command.js'
import { runCommandSequence } from '~/code/tool/node/command.js'

export async function convertImageWithImageMagickNodeLocalCommand(
  input: ConvertImageWithImageMagickNodeInput,
) {
  const commandInput =
    ConvertImageWithImageMagickNodeLocalCommandInputModel.parse(input)
  const sequence =
    buildCommandToConvertImageWithImageMagick(commandInput)

  await runCommandSequence(sequence)

  return ConvertImageWithImageMagickNodeOutputModel.parse({
    file: {
      path: commandInput.output.file.path,
    },
  })
}

export async function convertImageWithInkscapeLocalCommand(
  input: ConvertAiToSvgWithInkscapeNodeInput,
) {
  const commandInput =
    ConvertAiToSvgWithInkscapeNodeLocalCommandInputModel.parse(input)
  const sequence =
    await buildCommandToConvertAIToSVGWithInkscape(commandInput)
  await runCommandSequence(sequence)
  return ConvertAiToSvgWithInkscapeNodeOutputModel.parse({
    file: {
      path: commandInput.output.file.path,
    },
  })
}

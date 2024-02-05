import _ from 'lodash'
import fsp from 'fs/promises'
import {
  IMAGE_MAGICK_FORMAT,
  ImageMagickFormat,
  ConvertAiToSvgWithInkscape,
  VerifyImageWithImageMagick,
  ConvertImageWithImageMagickLocal,
  ConvertImageWithImageMagickLocalModel,
  CommandSequenceOutput,
  ConvertImageWithImageMagickResponse,
  ConvertImageWithImageMagickResponseModel,
} from '~/code/type/index.js'
import {
  buildCommandToConvertAIToSVGWithInkscape,
  buildCommandToConvertImageWithImageMagick,
  buildCommandToVerifyImageWithImageMagick,
} from './shared.js'
import { runCommandSequence } from '~/code/tool/node/command.js'
import { tmpName } from 'tmp-promise'
import assert from 'assert'

const IMAGEMAGICK_FORMAT_VARIANT_NAME: Record<string, Array<string>> = {
  jpeg: ['jpg'],
  jpg: ['jpeg'],
}

export async function convertImageWithImageMagickLocalWithInputContent(
  input: ConvertImageWithImageMagickLocal,
) {
  const tmpOutputFile = await tmpName()
  const buildInput = _.merge({}, input, {
    output: { file: { path: tmpOutputFile } },
  })
  const sequence = buildCommandToConvertImageWithImageMagick(buildInput)

  if (input.explain) {
    return sequence
  }

  await runCommandSequence(sequence.tree)

  const content = await fsp.readFile(tmpOutputFile)

  return ConvertImageWithImageMagickResponseModel.parse({
    output: {
      file: {
        content,
      },
    },
  })
}

export async function convertImageWithImageMagickLocalWithInputPath(
  input: ConvertImageWithImageMagickLocal,
) {
  assert('path' in input.output.file && input.output.file.path)

  const buildInput = _.merge({}, input, {
    output: { file: { path: input.output.file.path } },
  })
  const sequence = buildCommandToConvertImageWithImageMagick(buildInput)

  if (input.explain) {
    return sequence
  }

  await runCommandSequence(sequence.tree)

  return ConvertImageWithImageMagickResponseModel.parse({
    output: {
      file: {
        path: buildInput.output.file.path,
      },
    },
  })
}

export type ConvertImageWithImageMagickLocalOutput =
  | CommandSequenceOutput
  | ConvertImageWithImageMagickResponse

export async function convertImageWithImageMagickLocal(
  source: ConvertImageWithImageMagickLocal,
): Promise<ConvertImageWithImageMagickLocalOutput> {
  const input = ConvertImageWithImageMagickLocalModel.parse(source)

  if ('content' in input.output.file && input.output.file.content) {
    return await convertImageWithImageMagickLocalWithInputContent(input)
  }

  return await convertImageWithImageMagickLocalWithInputPath(input)
}

// https://unix.stackexchange.com/questions/189364/script-to-determine-if-apparent-image-files-are-real-image-files/189367#189367

// export async function convertSVGToPNG({ inputPath, outputPath }) {
//   const dir = path.dirname(outputPath)
//   fs.mkdir(dir, { recursive: true })
//   const svgexport = require('svgexport')
//   const opts = {
//     input: inputPath,
//     output: outputPath,
//   }
//   svgexport.render(opts)
// }

// export async function removeEXIFData({ inputPath }) {
//   const data = fs.readFileSync(inputPath).toString('binary')
//   const piexif = require('piexifjs')
//   const newData = piexif.remove(data)
//   fs.writeFileSync(inputPath, newData, 'binary')
// }

// export async function readImageDimensions({ inputPath }) {
//   const probe = require('probe-image-size')
//   const data = fs.readFileSync(inputPath)
//   const meta = probe.sync(data)
//   return {
//     width: meta.width,
//     height: meta.height,
//   }
// }

// optimize animated gif:
// gifsicle -O3 --colors 256 --lossy=30 -o output.gif input.gif
// pix_fmt rgb24

// https://exiv2.org/tags.html

export async function convertImageWithInkscape(
  input: ConvertAiToSvgWithInkscape,
) {
  const list = await buildCommandToConvertAIToSVGWithInkscape(input)
  for (const cmd of list) {
    await handleInkscapeCommand(cmd)
  }
  return input.output.file.path
}

export async function verifyImageWithImageMagick(
  input: VerifyImageWithImageMagick,
) {
  const [cmd] = await buildCommandToVerifyImageWithImageMagick(input)
  const data = (await handleIdentifyCommand(cmd!)) as unknown as {
    format: ImageMagickFormat
  }
  if (
    IMAGE_MAGICK_FORMAT.includes(data.format) &&
    isFormatMatch(data.format, input.input.format)
  ) {
    return true
  }
  return false
}

function isFormatMatch(a: string, b: string) {
  if (a === b) {
    return true
  }
  const v = IMAGEMAGICK_FORMAT_VARIANT_NAME[a]
  if (v) {
    for (const x of v) {
      if (x === b) {
        return true
      }
    }
  }
  return false
}

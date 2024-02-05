import { bindConvertLocal, bindConvertRemote } from '../tool/node.js'
import {
  ConvertAiToSvgWithInkscapeNodeCall,
  ConvertImageWithImageMagickNodeCall,
  ConvertImageWithImageMagickNodeRemoteCall,
} from '~/code/type/cast.js'
import {
  ConvertImageWithImageMagickNodeCallModel,
  ConvertImageWithImageMagickNodeRemoteCallModel,
} from '~/code/type/take.js'
import { explainConvertImageWithImageMagick } from './shared.js'
import _ from 'lodash'
import { postRemote } from '~/code/tool/shared/request.js'

import {
  IMAGE_MAGICK_FORMAT,
  ImageMagickFormat,
  VerifyImageWithImageMagick,
  ConvertImageWithImageMagickNodeLocalCallModel,
  ConvertImageWithImageMagickNodeLocalCall,
  ConvertImageWithImageMagickNodeOutputResponseModel,
} from '~/code/type/index.js'
import { runCommandSequence } from '~/code/tool/node/command.js'
import { buildRequestToConvert } from '../shared.js'
import {
  buildCommandToConvertAIToSVGWithInkscape,
  buildCommandToConvertImageWithImageMagick,
} from './command.js'

export async function convertImageWithImageMagickNode(
  source: ConvertImageWithImageMagickNodeCall,
) {
  const input = ConvertImageWithImageMagickNodeCallModel.parse(source)

  if (input.explain) {
    return await explainConvertImageWithImageMagick(input)
  }

  if (input.remote) {
    const remoteInput = await bindConvertRemote(input)
    return await convertImageWithImageMagickNodeRemote(remoteInput)
  } else {
    const localInput = await bindConvertLocal(input)
    return await convertImageWithImageMagickNodeLocal(localInput)
  }
}

export async function convertImageWithImageMagickNodeRemote(
  source: ConvertImageWithImageMagickNodeRemoteCall,
) {
  const input =
    ConvertImageWithImageMagickNodeRemoteCallModel.parse(source)
  const request = buildRequestToConvert(input)
  return await postRemote(request.tree)
}

const IMAGEMAGICK_FORMAT_VARIANT_NAME: Record<string, Array<string>> = {
  jpeg: ['jpg'],
  jpg: ['jpeg'],
}

export async function convertImageWithImageMagickNodeLocal(
  source: ConvertImageWithImageMagickNodeLocalCall,
) {
  const input =
    ConvertImageWithImageMagickNodeLocalCallModel.parse(source)
  const sequence = buildCommandToConvertImageWithImageMagick(input)

  await runCommandSequence(sequence.tree)

  return ConvertImageWithImageMagickNodeOutputResponseModel.parse({
    output: {
      file: {
        path: input.output.file.path,
      },
    },
  })
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

export async function convertImageWithInkscapeNode(
  input: ConvertAiToSvgWithInkscapeNodeCall,
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

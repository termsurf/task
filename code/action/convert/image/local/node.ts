import _ from 'lodash'
import {
  IMAGE_MAGICK_FORMAT,
  ImageMagickFormat,
  ConvertImageWithImageMagick,
  ConvertAiToSvgWithInkscape,
  VerifyImageWithImageMagick,
} from '~/code/type/index.js'
import {
  buildCommandToConvertAIToSVGWithInkscape,
  buildCommandToConvertImageWithImageMagick,
  buildCommandToVerifyImageWithImageMagick,
} from './shared.js'
import { Command } from '~/code/tool/command.js'
import { ChildProcessError, exec } from '~/code/tool/process.js'
import { handleIdentifyCommand } from '../../video/local/node.js'

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

export async function convertImageWithImageMagick(
  input: ConvertImageWithImageMagick,
) {
  const list = buildCommandToConvertImageWithImageMagick(input)
  for (const cmd of list) {
    console.log(cmd.link.join(' '))
    await handleConvertCommand(cmd)
  }
  return input.output.file.path
}

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

const IMAGEMAGICK_FORMAT_VARIANT_NAME: Record<string, Array<string>> = {
  jpeg: ['jpg'],
  jpg: ['jpeg'],
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

export async function handleConvertCommand(cmd: Command) {
  try {
    return await exec(cmd.link.join(' '))
  } catch (e) {
    if (e instanceof ChildProcessError) {
      if (e.data.stderr) {
        if (e.data.stderr.match(/^convert: unable to open image/i)) {
          // throw new Kink
          throw new Error(`Cannot process image.`)
        }
      }
    } else {
      throw new Error(`System error`)
    }
  }
}

export async function handleMogrifyCommand(cmd: Command) {
  return await exec(cmd.link.join(' '))
}

export async function handleInkscapeCommand(cmd: Command) {
  return await exec(cmd.link.join(' '))
}

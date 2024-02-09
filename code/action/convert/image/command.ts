import {
  IMAGE_MAGICK_COLOR_SPACE_CONTENT,
  IMAGE_MAGICK_COMPRESSION_CONTENT,
  ConvertImageWithImageMagickNodeCommandInput,
  ConvertImageWithImageMagickNodeCommandInputModel,
  ConvertAiToSvgWithInkscapeNodeCommandInput,
  ConvertAiToSvgWithInkscapeNodeCommandInputModel,
} from '~/code/type/index.js'
import {
  getCommand,
  buildCommandSequence,
} from '~/code/tool/shared/command.js'
import _ from 'lodash'
import { resolvePathRelativeToScope } from '~/code/tool/shared/file.js'

// export function BatchProcessImages() {
//   const cmd = [
//     `mogrify`,
//     `-format`,
//     `jpg`,
//     `-path`,
//     `./new_folder`,
//     `*.png`,
//   ]
//   return [cmd]
// }

export function buildCommandToConvertImageWithImageMagick(
  source: ConvertImageWithImageMagickNodeCommandInput,
) {
  const input =
    ConvertImageWithImageMagickNodeCommandInputModel.parse(source)

  const ip = resolvePathRelativeToScope(
    input.input.file.path,
    input.pathScope,
  )
  const op = resolvePathRelativeToScope(
    input.output.file.path,
    input.pathScope,
  )

  const cmd = getCommand(`convert`)

  const inputPath = ip.match(/\.cr2$/i) ? `cr2:${ip}` : ip

  cmd.link.push(`"${inputPath}"`)

  if (input.compare) {
    cmd.link.push(`-compare`)
  }

  if (input.colorMatrix) {
    cmd.link.push(
      `-color-matrix`,
      `"${input.colorMatrix.row}x${
        input.colorMatrix.column
      }: ${input.colorMatrix.value.join(' ')}"`,
    )
  }

  if (input.colorSpace) {
    cmd.link.push(
      `-colorspace`,
      IMAGE_MAGICK_COLOR_SPACE_CONTENT[input.colorSpace].head,
    )
  }

  if (input.compression) {
    cmd.link.push(
      `-compress`,
      IMAGE_MAGICK_COMPRESSION_CONTENT[input.compression]
        .head as string,
    )
  }
  if (input.colorCount) {
    cmd.link.push(`-colors`, String(input.colorCount))
  }

  if (input.density) {
    cmd.link.push(`-density`, String(input.density))
  }

  if (input.quality) {
    cmd.link.push(`-quality`, String(input.quality))
  }

  cmd.link.push(`"${op}"`)

  // const cmd = [
  //   `magick`,
  //   `-size`,
  //   `320x85`,
  //   `canvas:none`,
  //   `-font`,
  //   `Bookman-DemiItalic`,
  //   `-pointsize`,
  //   `72`,
  //   `-draw`,
  //   `"text`,
  //   `25,60`,
  //   `\'Magick\'"`,
  //   `-channel`,
  //   `RGBA`,
  //   `-blur`,
  //   `0x6`,
  //   `-fill`,
  //   `darkred`,
  //   `-stroke`,
  //   `magenta`,
  //   `-draw`,
  //   `"text`,
  //   `20,55`,
  //   `\'Magick\'"`,
  //   `fuzzy-magick.png`,
  // ]
  return buildCommandSequence(cmd)
}

// export async function replaceImageColorWithImageMagick(
//   input: ReplaceImageColorWithImageMagick,
// ) {
//   let cmd = getCommand(`convert`)
//   cmd.link.push(`"${inputPath}"`)
//   if (fuzz) {
//     cmd.link.push(`-fuzz`, `${fuzz}%`)
//   }
//   cmd.link.push(`-fill`, `"${endColor}"`, `-opaque`, `"${startColor}"`)
//   cmd.link.push(`"${outputPath}"`)

//   return [cmd]
// }

// export async function ResizeImageWithImageMagick(source) {
//   const { inputPath, outputPath, width, height, stretch, gravity } =
//     ResizeImageWithImageMagickModel.parse(source)

//   let scale: string = ''
//   if (width) {
//     if (height) {
//       scale += `${width}x${height}`
//     } else {
//       scale += `${width}x`
//     }
//   } else {
//     scale += `x${height}`
//   }
//   let resize = `${scale}${stretch ? '!' : ''}`
//   const cmd = [`convert`, `"${inputPath}"`, `-resize`, `${resize}`]
//   if (gravity) {
//     cmd.push(`-gravity`, `${gravity}`)
//   }
//   cmd.push(`"${outputPath}"`)

//   return [cmd]
// }

export async function buildCommandToConvertAIToSVGWithInkscape(
  source: ConvertAiToSvgWithInkscapeNodeCommandInput,
) {
  const input =
    ConvertAiToSvgWithInkscapeNodeCommandInputModel.parse(source)

  const inputPath = resolvePathRelativeToScope(
    input.input.file.path,
    input.pathScope,
  )
  const outputPath = resolvePathRelativeToScope(
    input.output.file.path,
    input.pathScope,
  )

  const cmd = getCommand(`inkscape`)

  cmd.link.push(
    `"${inputPath}"`,
    `-${process.platform === 'darwin' ? 'o' : 'l'}`,
    `"${outputPath}"`,
  )

  return buildCommandSequence(cmd)
}

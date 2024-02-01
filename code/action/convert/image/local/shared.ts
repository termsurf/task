import { YYYY_MM_DD_HH_MM_SS, toDayJs } from '~/code/tool/date.js'
import {
  ConvertAiToSvgWithInkscape,
  VerifyImageWithImageMagick,
  IMAGE_MAGICK_COLOR_SPACE_CONTENT,
  IMAGE_MAGICK_COMPRESSION_CONTENT,
  ConvertImageWithImageMagick,
  InspectMetadataFromImage,
  WriteMetadataToImage,
  RemoveImageMetadata,
} from '~/code/type/index.js'
import { getCommand } from '~/code/tool/command.js'
import _ from 'lodash'

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
  input: ConvertImageWithImageMagick,
) {
  const cmd = getCommand(`convert`)

  let inputPath = input.input.file.path.match(/\.cr2$/i)
    ? `cr2:${input.input.file.path}`
    : input.input.file.path

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

  cmd.link.push(`"${input.output.file.path}"`)

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
  return [cmd]
}

export function buildCommandToInspectMetadataFromImage(
  input: InspectMetadataFromImage,
) {
  const cmd = getCommand('exiftool')
  cmd.link.push(`"${input.input.file.path}"`)
  return [cmd]
}

export function buildCommandToWriteMetadataToImage(
  source: WriteMetadataToImage,
) {
  const {
    input,
    copyright,
    creator,
    license,
    keywords,
    artist,
    originalDate,
    allDates,
    creationDate,
    title,
    description,
  } = source
  const cmd = getCommand('exiftool')

  if (copyright) {
    cmd.link.push(
      `-rights`,
      `"${copyright}"`,
      `-CopyrightNotice`,
      `"${copyright}"`,
    )
  }

  if (artist) {
    cmd.link.push(`artist`, `"${artist}"`)
  }

  if (originalDate) {
    const od = YYYY_MM_DD_HH_MM_SS(toDayJs(originalDate))
    // 1986:11:05 12:00:00
    cmd.link.push(`-datetimeoriginal`, `"${od}"`)
  }

  if (creationDate) {
    // 1986:11:05 12:00:00
    const od = YYYY_MM_DD_HH_MM_SS(toDayJs(creationDate))
    cmd.link.push(`-createdate`, `"${od}"`)
  }

  if (allDates) {
    const d = YYYY_MM_DD_HH_MM_SS(toDayJs(allDates))
    cmd.link.push(`-AllDates`, d)
  }

  if (creator) {
    cmd.link.push(`-XMP-dc:Creator`, `"${creator}"`)
  }

  if (keywords) {
    cmd.link.push(
      `-sep`,
      `", "`,
      `-keywords`,
      `"${keywords.join(', ')}"`,
    )
    cmd.link.push(`XMP-xmp:Keywords`, `"${keywords.join(', ')}"`)
  }

  if (license) {
    cmd.link.push(
      `-XMP-dc:Rights`,
      `"${license}"`,
      `-xmp:usageterms`,
      `"${license}"`,
    )
  }

  if (title) {
    cmd.link.push(`-XMP-dc:Title`, `"${title}"`)
    cmd.link.push(`-XMP-xmp:Title`, `"${title}"`)
  }

  if (description) {
    cmd.link.push(`-XMP-dc:Description`, `"${description}"`)
    cmd.link.push(`-XMP-xmp:Description`, `"${description}"`)
  }

  cmd.link.push(`"${input.file.path}"`)

  return [cmd]
}

export function buildCommandToRemoveImageMetadata(
  input: RemoveImageMetadata,
) {
  const cmd = getCommand(`exiftool`)
  cmd.link.push(`-all=`, `"${input.input.file.path}"`)
  return [cmd]
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

export function buildCommandToGenerateGifWithGifsicle(input) {
  const cmd = getCommand('gifsicle')

  if (input.unoptimize) {
    cmd.link.push(`-U`)
  }

  if (input.width) {
    if (input.height) {
      cmd.link.push(`--resize`, `${input.width}x${input.height}`)
    } else {
      cmd.link.push(`--resize`, `${input.width}x_`)
    }
  } else if (input.height) {
    cmd.link.push(`--resize`, `_x${input.height}`)
  }

  return [cmd]
}

export async function buildCommandToConvertAIToSVGWithInkscape(
  input: ConvertAiToSvgWithInkscape,
) {
  const cmd = getCommand(`inkscape`)

  cmd.link.push(
    `"${input.input.file.path}"`,
    `-${process.platform === 'darwin' ? 'o' : 'l'}`,
    `"${input.output.file.path}"`,
  )

  return [cmd]
}

export async function buildCommandToVerifyImageWithImageMagick(
  input: VerifyImageWithImageMagick,
) {
  const cmd = getCommand(`identify`)
  cmd.link.push(`"${input.input.file.path}"`)
  return [cmd]
}

export type ExifMetadata = { name: string; bond: string | number }

export function parseImageMetadataFromExifTool(lines: Array<string>) {
  const metadata: Array<ExifMetadata> = []
  lines.forEach(line => {
    const pieces = line.split(': ')
    //Is this a line with a meta data pair on it?
    if (pieces.length == 2) {
      const name = _.camelCase((pieces[0] as string).trim())
      let bond: string | number = (pieces[1] as string).trim()
      const number = parseFloat(bond)
      if (!Number.isNaN(number)) {
        bond = number
      }
      metadata.push({ name, bond })
    }
  })
  return metadata
}

import {
  IMAGE_MAGICK_FORMAT,
  ImageMagickFormat,
  VerifyImageWithImageMagick,
} from '~/code/type'
import { buildCommandToVerifyImageWithImageMagick } from './command'
import { handleIdentifyCommand } from '../../convert/video/local/node'

const IMAGEMAGICK_FORMAT_VARIANT_NAME: Record<string, Array<string>> = {
  jpeg: ['jpg'],
  jpg: ['jpeg'],
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

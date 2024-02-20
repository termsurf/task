import {
  IMAGE_MAGICK_INPUT_FORMAT,
  IMAGE_MAGICK_OUTPUT_FORMAT,
  ImageMagickInputFormat,
  ImageMagickOutputFormat,
} from '~/code/type/cast'
import { testConvertInputOutput } from '../../shared'

export function testConvertImageWithImageMagick(input: any) {
  if (!testConvertInputOutput(input)) {
    return false
  }

  const {
    input: { format: a },
    output: { format: b },
  } = input

  if (a === b) {
    return false
  }
  if (
    !IMAGE_MAGICK_INPUT_FORMAT.includes(a as ImageMagickInputFormat)
  ) {
    return false
  }
  if (
    !IMAGE_MAGICK_OUTPUT_FORMAT.includes(b as ImageMagickOutputFormat)
  ) {
    return false
  }
  return true
}

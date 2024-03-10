import { getConfig } from '~/code/tool/shared/config'
import { ImageMagickFormat } from '../../browser'
import { testVerify } from '../shared'

export function testVerifyImageWithImageMagick(source) {
  if (!testVerify(source)) {
    return false
  }

  const { format: format } = source

  const IMAGE_MAGICK_FORMAT = getConfig('image-magick-format')

  if (!IMAGE_MAGICK_FORMAT.includes(format as ImageMagickFormat)) {
    return false
  }

  return true
}

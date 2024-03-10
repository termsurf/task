import _ from 'lodash'

import {
  ImageMagickChannel,
  ImageMagickColorSpace,
  ImageMagickCompression,
  ImageMagickFormat,
} from '~/code/type/shared/base/cast'

export type ImageMagickChannelContentValue = {
  head: string
}

export type ImageMagickChannelContent = Record<
  ImageMagickChannel,
  ImageMagickChannelContentValue
>
export type ImageMagickColorSpaceContentValue = {
  head: string
  note?: string
}

export type ImageMagickColorSpaceContent = Record<
  ImageMagickColorSpace,
  ImageMagickColorSpaceContentValue
>
export type ImageMagickCompressionContentValue = {
  head: string
}

export type ImageMagickCompressionContent = Record<
  ImageMagickCompression,
  ImageMagickCompressionContentValue
>
export type ImageMagickFormatContentValue = {
  head: string
  note?: string
  read?: boolean
  write?: boolean
  multiple?: boolean
  supportsBlob?: boolean
}

export type ImageMagickFormatContent = Record<
  ImageMagickFormat,
  ImageMagickFormatContentValue
>

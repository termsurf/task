import {
  CompressMp4WithFfmpeg,
  ConvertDocumentWithCalibre,
  CalibreInputFormat,
  CalibreOutputFormat,
  FfmpegFormat,
  ImageMagickInputFormat,
  ImageMagickOutputFormat,
  ConvertImageWithImageMagick,
} from '~/code/cast'

// // https://www.reddit.com/r/typescript/comments/199eutl/typescript_error_type_string_cannot_be_used_to/
export type ConvertFormat = {
  video: {
    input: FfmpegFormat
    output: FfmpegFormat
    extend: CompressMp4WithFfmpeg
  }
  image: {
    input: ImageMagickInputFormat
    output: ImageMagickOutputFormat
    extend: ConvertImageWithImageMagick
  }
  calibre: {
    input: CalibreInputFormat
    output: CalibreOutputFormat
    extend: ConvertDocumentWithCalibre
  }
}

export type ExtractBySubKey<
  L extends { input: string; output: string; extend: any },
  T extends string,
> = L extends unknown ? (T extends L['input'] ? L : never) : never

export type Values<T> = T[keyof T]

export type ConvertFormatList = Values<ConvertFormat>

export type ConvertInputFormat = ConvertFormatList['input']

export type ConvertOutputFormat<I extends ConvertInputFormat> =
  ExtractBySubKey<ConvertFormatList, I>

export type Convert<I extends ConvertInputFormat> = {
  input: {
    format: I
  }
  output: {
    format: ConvertOutputFormat<I>['output']
  }
} & ('extend' extends keyof ConvertOutputFormat<I>
  ? ConvertOutputFormat<I>['extend']
  : {})

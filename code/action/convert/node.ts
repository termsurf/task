/* eslint-disable react-hooks/rules-of-hooks */
import {
  ConvertImageWithImageMagickNodeCall,
  ExtractBySubKey,
  ImageMagickInputFormat,
  ImageMagickOutputFormat,
  Values,
} from '~/code/type/index.js'
import {
  convertDocumentWithCalibre,
  convertDocumentWithLibreOffice,
  convertDocumentWithPandoc,
} from '~/code/action/convert/document/node.js'
import { convertVideoWithFfmpeg } from '~/code/action/convert/video/local/node.js'
import {
  useConvertDocumentWithCalibre,
  useConvertDocumentWithLibreOffice,
  useConvertDocumentWithPandoc,
  useConvertFontWithFontForge,
  useConvertImageWithImageMagick,
  useConvertVideoWithFfmpeg,
} from './shared.js'
import { convertImageWithImageMagickNode } from './image/node.js'

// // https://www.reddit.com/r/typescript/comments/199eutl/typescript_error_type_string_cannot_be_used_to/
export type ConvertInput = {
  // video: {
  //   input: FfmpegFormat
  //   output: FfmpegFormat
  //   // extend: CompressMp4WithFfmpeg
  // }
  image: {
    input: ImageMagickInputFormat
    output: ImageMagickOutputFormat
    extend: ConvertImageWithImageMagickNodeCall
  }
  // calibre: {
  //   input: CalibreInputFormat
  //   output: CalibreOutputFormat
  //   extend: ConvertDocumentWithCalibre
  // }
}

export type ConvertInputList = Values<ConvertInput>

export type ConvertInputFormat = ConvertInputList['input']

export type ConvertOutputFormat<I extends ConvertInputFormat> =
  ExtractBySubKey<ConvertInputList, I>

export type Convert<I extends ConvertInputFormat> = {
  input: {
    format: I
  }
  output: {
    format: ConvertOutputFormat<I>['output']
  }
} & ConvertOutputFormat<I>['extend']

export async function convert<I extends ConvertInputFormat>(
  source: Convert<I>,
) {
  return await convertInternal(source)
}

export async function convertInternal(source) {
  if (
    useConvertImageWithImageMagick(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertImageWithImageMagickNode(source)
  }

  if (
    useConvertVideoWithFfmpeg(source.input.format, source.output.format)
  ) {
    return await convertVideoWithFfmpeg(source)
  }

  if (
    useConvertFontWithFontForge(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertFontWithFontForge(source)
  }

  if (
    useConvertDocumentWithCalibre(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertDocumentWithCalibre(source)
  }

  if (
    useConvertDocumentWithPandoc(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertDocumentWithPandoc(source)
  }

  if (
    useConvertDocumentWithLibreOffice(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertDocumentWithLibreOffice(source)
  }
}

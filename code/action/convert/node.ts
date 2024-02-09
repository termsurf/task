import {
  CalibreInputFormat,
  CalibreOutputFormat,
  ConvertDocumentWithCalibreNodeInput,
  ConvertDocumentWithLibreOfficeNodeInput,
  ConvertDocumentWithPandocNodeInput,
  ConvertFontWithFontForgeNodeInput,
  ConvertImageWithImageMagickNodeInput,
  ConvertLatexToPngInputFormat,
  ConvertLatexToPngNodeInput,
  ConvertLatexToPngOutputFormat,
  ExtractBySubKey,
  FontFormat,
  ImageMagickInputFormat,
  ImageMagickOutputFormat,
  LibreOfficeInputFormat,
  LibreOfficeOutputFormat,
  PandocInputFormat,
  PandocOutputFormat,
  Values,
} from '~/code/type/index.js'
import { convertInternal } from './node.internal.js'

export {
  useConvertDocumentWithCalibre,
  useConvertDocumentWithLibreOffice,
  useConvertDocumentWithPandoc,
  useConvertFontWithFontForge,
  useConvertImageWithImageMagick,
  useConvertImageWithInkscape,
  useConvertLatexToPng,
} from './shared.js'

export async function convert<I extends ConvertInputFormat>(
  source: Convert<I>,
) {
  return await convertInternal(source)
}

// // https://www.reddit.com/r/typescript/comments/199eutl/typescript_error_type_string_cannot_be_used_to/
export type ConvertInput = {
  // video: {
  //   input: FfmpegFormat
  //   output: FfmpegFormat
  //   // extend: CompressMp4WithFfmpeg
  // }
  convert_latex_to_png: {
    input: ConvertLatexToPngInputFormat
    output: ConvertLatexToPngOutputFormat
    extend: ConvertLatexToPngNodeInput
  }
  image: {
    input: ImageMagickInputFormat
    output: ImageMagickOutputFormat
    extend: ConvertImageWithImageMagickNodeInput
  }
  calibre: {
    input: CalibreInputFormat
    output: CalibreOutputFormat
    extend: ConvertDocumentWithCalibreNodeInput
  }
  pandoc: {
    input: PandocInputFormat
    output: PandocOutputFormat
    extend: ConvertDocumentWithPandocNodeInput
  }
  libreoffice: {
    input: LibreOfficeInputFormat
    output: LibreOfficeOutputFormat
    extend: ConvertDocumentWithLibreOfficeNodeInput
  }
  font: {
    input: FontFormat
    output: FontFormat
    extend: ConvertFontWithFontForgeNodeInput
  }
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
    format: Exclude<ConvertOutputFormat<I>['output'], I>
  }
} & ('extend' extends keyof ConvertOutputFormat<I>
  ? ConvertOutputFormat<I>['extend']
  : {})

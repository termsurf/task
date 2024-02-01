/* eslint-disable react-hooks/rules-of-hooks */
import {
  CALIBRE_INPUT_FORMAT,
  CALIBRE_OUTPUT_FORMAT,
  CalibreInputFormat,
  CalibreOutputFormat,
  ConvertDocumentWithCalibreModel,
  ConvertDocumentWithLibreOfficeModel,
  ConvertDocumentWithPandocModel,
  ConvertFontWithFontForgeModel,
  ConvertImageWithImageMagickModel,
  ConvertVideoWithFfmpegModel,
  FFMPEG_FORMAT,
  FONT_FORMAT,
  FfmpegFormat,
  FontFormat,
  IMAGE_MAGICK_INPUT_FORMAT,
  IMAGE_MAGICK_OUTPUT_FORMAT,
  ImageMagickInputFormat,
  ImageMagickOutputFormat,
  LIBRE_OFFICE_INPUT_FORMAT,
  LIBRE_OFFICE_OUTPUT_FORMAT,
  LibreOfficeInputFormat,
  LibreOfficeOutputFormat,
  PANDOC_INPUT_FORMAT,
  PANDOC_OUTPUT_FORMAT,
  PandocInputFormat,
  PandocOutputFormat,
} from '~/code/type/index.js'
import {
  Convert,
  ConvertInputFormat,
} from '~/code/type/call/convert.js'
import {
  convertDocumentWithCalibre,
  convertDocumentWithLibreOffice,
  convertDocumentWithPandoc,
} from '~/code/action/convert/document/local/node.js'
import { convertFontWithFontForge } from '~/code/action/convert/font/local/node.js'
import { convertImageWithImageMagick } from '~/code/action/convert/image/local/node.js'
import { convertVideoWithFfmpeg } from '~/code/action/convert/video/local/node.js'

// convert({
//   input: { format: 'epub', file: { path: 'foo.epub' } },
//   output: { format: 'mobi', file: { path: 'foo.mobi' } },
// })

export async function convert<I extends ConvertInputFormat>(
  props: Convert<I>,
) {
  if (
    useConvertImageWithImageMagick(
      props.input.format,
      props.output.format,
    )
  ) {
    const input = ConvertImageWithImageMagickModel.parse(props)
    return await convertImageWithImageMagick(input)
  }

  if (
    useConvertVideoWithFfmpeg(props.input.format, props.output.format)
  ) {
    const input = ConvertVideoWithFfmpegModel.parse(props)
    return await convertVideoWithFfmpeg(input)
  }

  if (
    useConvertFontWithFontForge(props.input.format, props.output.format)
  ) {
    const input = ConvertFontWithFontForgeModel.parse(props)
    return await convertFontWithFontForge(input)
  }

  if (
    useConvertDocumentWithCalibre(
      props.input.format,
      props.output.format,
    )
  ) {
    const input = ConvertDocumentWithCalibreModel.parse(props)
    return await convertDocumentWithCalibre(input)
  }

  if (
    useConvertDocumentWithPandoc(
      props.input.format,
      props.output.format,
    )
  ) {
    const input = ConvertDocumentWithPandocModel.parse(props)
    return await convertDocumentWithPandoc(input)
  }

  if (
    useConvertDocumentWithLibreOffice(
      props.input.format,
      props.output.format,
    )
  ) {
    const input = ConvertDocumentWithLibreOfficeModel.parse(props)
    return await convertDocumentWithLibreOffice(input)
  }
}

export function useConvertImageWithImageMagick(a: string, b: string) {
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

export function useConvertVideoWithFfmpeg(a: string, b: string) {
  if (a === b) {
    return false
  }
  if (!FFMPEG_FORMAT.includes(a as FfmpegFormat)) {
    return false
  }
  if (!FFMPEG_FORMAT.includes(b as FfmpegFormat)) {
    return false
  }
  return true
}

export function useConvertFontWithFontForge(a: string, b: string) {
  if (a === b) {
    return false
  }
  if (!FONT_FORMAT.includes(a as FontFormat)) {
    return false
  }
  if (!FONT_FORMAT.includes(b as FontFormat)) {
    return false
  }
  return true
}

export function useConvertDocumentWithCalibre(a: string, b: string) {
  if (a === b) {
    return false
  }
  if (!CALIBRE_INPUT_FORMAT.includes(a as CalibreInputFormat)) {
    return false
  }
  if (!CALIBRE_OUTPUT_FORMAT.includes(b as CalibreOutputFormat)) {
    return false
  }
  return true
}

export function useConvertDocumentWithPandoc(a: string, b: string) {
  if (a === b) {
    return false
  }
  if (!PANDOC_INPUT_FORMAT.includes(a as PandocInputFormat)) {
    return false
  }
  if (!PANDOC_OUTPUT_FORMAT.includes(b as PandocOutputFormat)) {
    return false
  }
  return true
}

export function useConvertDocumentWithLibreOffice(
  a: string,
  b: string,
) {
  if (a === b) {
    return false
  }
  if (
    !LIBRE_OFFICE_INPUT_FORMAT.includes(a as LibreOfficeInputFormat)
  ) {
    return false
  }
  if (
    !LIBRE_OFFICE_OUTPUT_FORMAT.includes(b as LibreOfficeOutputFormat)
  ) {
    return false
  }
  return true
}

export async function convertArchive(source) {
  // const input = IOConvertArchive.parse(source)
  // const list = ConvertArchive(input)
  // for (const cmd of list) {
  //   await handleCommand(cmd)
  // }
}

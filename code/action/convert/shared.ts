import { serialize as serializeToFormData } from 'object-to-formdata'
import {
  CALIBRE_INPUT_FORMAT,
  CALIBRE_OUTPUT_FORMAT,
  CalibreInputFormat,
  CalibreOutputFormat,
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
  ConvertFileBaseRemote,
  CONVERT_LATEX_TO_PNG_INPUT_FORMAT,
  CONVERT_LATEX_TO_PNG_OUTPUT_FORMAT,
  ConvertLatexToPngInputFormat,
  ConvertLatexToPngOutputFormat,
} from '~/code/type/index.js'
import { buildRemoteRequest } from '~/code/tool/shared/request.js'
import { omitNested } from '~/code/tool/shared/object.js'

export function useConvertLatexToPng(a: string, b: string) {
  if (a === b) {
    return false
  }
  if (
    !CONVERT_LATEX_TO_PNG_INPUT_FORMAT.includes(
      a as ConvertLatexToPngInputFormat,
    )
  ) {
    return false
  }
  if (
    !CONVERT_LATEX_TO_PNG_OUTPUT_FORMAT.includes(
      b as ConvertLatexToPngOutputFormat,
    )
  ) {
    return false
  }
  return true
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

export function useConvertImageWithInkscape(a: string, b: string) {
  if (a === b) {
    return false
  }
  if (a !== 'ai') {
    return false
  }
  if (b !== 'svg') {
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

export function buildRequestToConvert(input) {
  return buildRemoteRequest(
    `/convert/${input.input.format}/${input.output.format}`,
    omitNested(input, [
      ['handle'],
      ['input', 'format'],
      ['output', 'format'],
    ]),
  )
}

export function buildFormDataRequestToConvert(input) {
  const output = omitNested(input, [
    ['handle'],
    ['input', 'format'],
    ['output', 'format'],
  ])

  const formData = serializeToFormData(output)

  return buildRemoteRequest(
    `/convert/${input.input.format}/${input.output.format}`,
    formData,
  )
}

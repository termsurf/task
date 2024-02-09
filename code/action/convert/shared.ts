import { serialize as serializeToFormData } from 'object-to-formdata'
import {
  FFMPEG_FORMAT,
  FONT_FORMAT,
  FfmpegFormat,
  FontFormat,
  IMAGE_MAGICK_INPUT_FORMAT,
  IMAGE_MAGICK_OUTPUT_FORMAT,
  ImageMagickInputFormat,
  ImageMagickOutputFormat,
  ConvertApi,
} from '~/code/type/index.js'
import { buildRemoteRequest } from '~/code/tool/shared/request.js'
import { omitNested } from '~/code/tool/shared/object.js'

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

export async function convertArchive(source) {
  // const input = IOConvertArchive.parse(source)
  // const list = ConvertArchive(input)
  // for (const cmd of list) {
  //   await handleCommand(cmd)
  // }
}

export function buildRequestToConvert(input: ConvertApi) {
  return buildRemoteRequest(
    'POST',
    `/convert/${input.input.format}/${input.output.format}`,
    omitNested(input, [
      ['handle'],
      ['input', 'format'],
      ['output', 'format'],
    ]),
  )
}

export function buildFormDataRequestToConvert(input: ConvertApi) {
  const output = omitNested(input, [
    ['handle'],
    ['input', 'format'],
    ['output', 'format'],
  ])

  const formData = serializeToFormData(output)

  return buildRemoteRequest(
    'POST',
    `/convert/${input.input.format}/${input.output.format}`,
    formData,
  )
}

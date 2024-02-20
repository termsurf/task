import { FFMPEG_FORMAT, FfmpegFormat } from '~/code/type/cast.js'
import { testConvertInputOutput } from '../../shared.js'

export function testConvertVideoWithFfmpeg(input: any) {
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
  if (!FFMPEG_FORMAT.includes(a as FfmpegFormat)) {
    return false
  }
  if (!FFMPEG_FORMAT.includes(b as FfmpegFormat)) {
    return false
  }
  return true
}

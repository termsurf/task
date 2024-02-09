import _ from 'lodash'
import os from 'os'
import { tmpName } from 'tmp-promise'
import { convertImageWithImageMagickNodeLocal } from './node/local.js'

async function buildConvertInput(
  inputFormat: string,
  outputFormat: string,
  body: any,
) {
  const outputPath = await tmpName()
  const input = _.merge({}, body, {
    input: { format: inputFormat },
    output: { format: outputFormat, file: { path: outputPath } },
    pathScope: os.tmpdir(),
  })
  return input
}

export async function handleConvertImageWithImageMagick(
  inputFormat: string,
  outputFormat: string,
  body: any,
) {
  const input = await buildConvertInput(inputFormat, outputFormat, body)
  return await convertImageWithImageMagickNodeLocal(input)
}

export async function handleConvertAiToSvgWithInkscape(
  inputFormat: string,
  outputFormat: string,
  body: any,
) {
  const input = await buildConvertInput(inputFormat, outputFormat, body)
  return await convertImageWithImageMagickNodeLocal(input)
}

import _ from 'lodash'
import fsp from 'fs/promises'
import { omitNested } from '~/code/tool/shared/object'
import {
  ConvertImageWithImageMagickNodeInput,
  ConvertImageWithImageMagickNodeOutputModel,
  ConvertImageWithImageMagickNodeRemoteInputModel,
} from '~/code/type/index.js'
import { buildRequestToConvert } from '../../shared.js'
import { resolveWorkFile } from '~/code/tool/shared/request.js'
import { resolvePathRelativeToScope } from '~/code/tool/shared/file.js'

export async function convertImageWithImageMagickNodeRemote(
  input: ConvertImageWithImageMagickNodeInput,
) {
  const outputPath = resolvePathRelativeToScope(
    input.output.file.path,
    input.pathScope,
  )

  const remoteInput =
    ConvertImageWithImageMagickNodeRemoteInputModel.parse(
      omitNested(input, [
        ['remote'],
        ['output', 'file'],
        ['pathScope'],
      ]),
    )

  const request = buildRequestToConvert(remoteInput)
  await resolveWorkFile(request, outputPath)

  return ConvertImageWithImageMagickNodeOutputModel.parse({
    output: {
      file: {
        path: outputPath,
      },
    },
  })
}

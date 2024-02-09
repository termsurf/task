import _ from 'lodash'
import { omitNested } from '~/code/tool/shared/object.js'
import {
  ConvertImageWithImageMagickNodeClientInputModel,
  ConvertImageWithImageMagickNodeOutputModel,
  ConvertImageWithImageMagickNodeRemoteInput,
  ConvertImageWithImageMagickNodeRemoteInputModel,
} from '~/code/type/index.js'
import { buildRequestToConvert } from '../../shared.js'
import { resolveWorkFile } from '~/code/tool/node/request.js'
import { resolvePathRelativeToScope } from '~/code/tool/shared/file.js'
import {
  getFallbackFilePath,
  getScopeDirectory,
} from '~/code/tool/node/file.js'

export async function convertImageWithImageMagickNodeRemote(
  source: ConvertImageWithImageMagickNodeRemoteInput,
) {
  const input =
    ConvertImageWithImageMagickNodeRemoteInputModel.parse(source)

  const scope = getScopeDirectory(input.pathScope)
  const outputPath = resolvePathRelativeToScope(
    await getFallbackFilePath(
      input.output.file?.path,
      scope,
      source.output.format,
    ),
    scope,
  )

  const clientInput =
    ConvertImageWithImageMagickNodeClientInputModel.parse(
      _.merge({}, input, { handle: 'client' }),
    )

  const request = buildRequestToConvert(clientInput)
  await resolveWorkFile(request, outputPath)

  return ConvertImageWithImageMagickNodeOutputModel.parse({
    file: {
      path: outputPath,
    },
  })
}

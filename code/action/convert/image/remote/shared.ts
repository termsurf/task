import { ConvertImageWithImageMagickRemote } from '~/code/type/index.js'
import { bindConvertLocal } from '../../tool/node.js'
import {
  buildRemoteRequest,
  postRemote,
} from '~/code/tool/shared/request.js'

export async function convertImageWithImageMagickRemote(
  source: ConvertImageWithImageMagickRemote,
) {
  const input = await bindConvertLocal(source)
  const request = buildRequestToConvertImageWithImageMagick(input)
  return input.explain ? request : postRemote(request.tree)
}

export function buildRequestToConvertImageWithImageMagick(
  input: ConvertImageWithImageMagickRemote,
) {
  return buildRemoteRequest('/convert', input)
}

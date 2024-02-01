import { bindConvertLocal } from '~/code/action/convert/tool/shared.js'
import {
  ConvertImageWithImageMagick,
  ConvertImageWithImageMagickModel,
} from '~/code/type'

export async function convertImageWithImageMagick(
  source: ConvertImageWithImageMagick,
) {
  const input = ConvertImageWithImageMagickModel.parse(source)
  return input.surf
    ? convertImageWithImageMagickRemote(input)
    : convertImageWithImageMagickLocal(input)
}

export async function convertImageWithImageMagickRemote(
  source: ConvertImageWithImageMagick,
) {
  const input = await bindConvertLocal(source)
  const request = buildRequestToConvertImageWithImageMagickRemote(input)
  return input.note ? request : makeRequest(request)
}

export async function convertImageWithImageMagickLocal(
  source: ConvertImageWithImageMagick,
) {
  const input = await bindConvertLocal(source)
  const command = buildCommandToConvertImageWithImageMagickLocal(input)
  return input.note ? command : runCommand(command)
}

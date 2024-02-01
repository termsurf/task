import { bindConvertLocal } from '~/code/tool/shared'

export async function convertImageWithImageMagick(source) {
  const input = parse(source)
  return input.surf
    ? convertImageWithImageMagickRemote(input)
    : convertImageWithImageMagickLocal(input)
}

export async function convertImageWithImageMagickRemote(source) {
  const input = bindConvertLocal(source)
  const request = buildRequestToConvertImageWithImageMagickRemote(input)
  return input.show ? request : makeRequest(request)
}

export async function convertImageWithImageMagickLocal(source) {
  const input = bindConvertLocal(source)
  const command = buildCommandToConvertImageWithImageMagickLocal(input)
  return input.show ? command : runCommand(command)
}

import { bindConvertLocal, bindConvertRemote } from '../tool/node.js'
import {
  convertImageWithImageMagickNodeLocal,
  convertImageWithInkscapeLocal,
} from './node/local.js'
import { convertImageWithImageMagickNodeRemote } from './node/remote.js'
import _ from 'lodash'
import {
  ConvertAiToSvgWithInkscapeNodeInput,
  ConvertAiToSvgWithInkscapeNodeInputModel,
  ConvertImageWithImageMagickNodeInput,
  ConvertImageWithImageMagickNodeInputModel,
} from '~/code/type/index.js'
import kink from '~/code/tool/shared/kink.js'

export async function convertImageWithImageMagickNode(
  source: ConvertImageWithImageMagickNodeInput,
) {
  const input = ConvertImageWithImageMagickNodeInputModel.parse(source)

  if (input.remote) {
    const remoteInput = await bindConvertRemote(input)
    return await convertImageWithImageMagickNodeRemote(remoteInput)
  } else {
    const localInput = await bindConvertLocal(input)
    return await convertImageWithImageMagickNodeLocal(localInput)
  }
}

export async function convertImageWithInkscapeNode(
  source: ConvertAiToSvgWithInkscapeNodeInput,
) {
  const input = ConvertAiToSvgWithInkscapeNodeInputModel.parse(source)

  if (input.remote) {
    throw kink('function_todo', {
      name: 'convertImageWithInkscapeNodeRemote',
    })
  } else {
    const localInput = await bindConvertLocal(input)
    return await convertImageWithInkscapeLocal(localInput)
  }
}

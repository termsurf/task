import {
  bindConvertLocal,
  bindConvertLocalExternal,
  bindConvertRemote,
} from '../tool/node.js'
import {
  convertImageWithImageMagickNodeLocalCommand,
  convertImageWithInkscapeLocalCommand,
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

  switch (input.handle) {
    case 'remote': {
      const remoteInput = await bindConvertRemote(input)
      return await convertImageWithImageMagickNodeRemote(remoteInput)
    }
    case 'external': {
      const localInput = await bindConvertLocalExternal(input)
      return await convertImageWithImageMagickNodeLocalCommand(
        localInput,
      )
    }
  }
}

export async function convertImageWithInkscapeNode(
  source: ConvertAiToSvgWithInkscapeNodeInput,
) {
  const input = ConvertAiToSvgWithInkscapeNodeInputModel.parse(source)

  if (input.handle === 'remote') {
    throw kink('function_todo', {
      name: 'convertImageWithInkscapeNodeRemote',
    })
  } else {
    const localInput = await bindConvertLocal(input)
    return await convertImageWithInkscapeLocalCommand(localInput)
  }
}

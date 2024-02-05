import {
  ConvertImageWithImageMagick,
  ConvertImageWithImageMagickModel,
} from '~/code/type/index.js'
import { convertImageWithImageMagickRemote } from './remote/shared.js'
import { convertImageWithImageMagickLocal } from './local/node.js'
import { bindConvertLocal } from '../tool/node.js'

export async function convertImageWithImageMagick(
  source: ConvertImageWithImageMagick,
) {
  const input = ConvertImageWithImageMagickModel.parse(source)
  if (input.remote) {
    const i = input
    convertImageWithImageMagickRemote(i)
  } else {
    const i = await bindConvertLocal(input)
    return await convertImageWithImageMagickLocal(i)
  }
}

import {
  ImageMagickFormat,
  VerifyImageWithImageMagick,
} from '../browser'
import { Values } from '~/code/type/shared'
import {
  testVerifyImageWithImageMagickNode,
  verifyImageWithImageMagickNode,
} from './image/node'
import { VerifyExtension } from './shared'

export type VerifyOutput = boolean

export type VerifyInput = {
  image: {
    input: ImageMagickFormat
    extend: VerifyImageWithImageMagick
  }
}

export type VerifyInputList = Values<VerifyInput>

export type VerifyInputFormat = VerifyInputList['input']

export type VerifyImage<I extends ImageMagickFormat> = {
  input: {
    format: I
  }
} & VerifyExtension<VerifyInput['image']['extend']>

export async function verify(
  source: VerifyImage<VerifyInput['image']['input']>,
): Promise<VerifyOutput>
export async function verify(source) {
  if (testVerifyImageWithImageMagickNode(source)) {
    return await verifyImageWithImageMagickNode(source)
  }
}

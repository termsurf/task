import {
  ConvertDocumentWithCalibreNodeInput,
  ConvertDocumentWithLibreOfficeNodeInput,
  ConvertDocumentWithPandocNodeInput,
  ConvertImageWithImageMagickNodeInput,
  ConvertVideoWithFfmpegNodeInput,
} from '../browser.js'
import { testConvertImageWithImageMagickNode } from '../convert/image/node.js'
import { testConvertVideoWithFfmpegNode } from '../convert/video/ffmpeg/node.js'
import { Tool, Action, Object } from '../shared.js'
import { Test } from './shared.js'

export type TestAssertion = {
  'convert:ffmpeg:video': ConvertVideoWithFfmpegNodeInput
  'convert:image-magick:image': ConvertImageWithImageMagickNodeInput
  'convert:pandoc:document': ConvertDocumentWithPandocNodeInput
  'convert:libre-office:document': ConvertDocumentWithLibreOfficeNodeInput
  'convert:calibre:document': ConvertDocumentWithCalibreNodeInput
}

export type TestInput<
  T extends Tool,
  A extends Action,
  O extends Object,
  X extends `${A}:${T}:${O}` = `${A}:${T}:${O}`,
> = X extends keyof TestAssertion ? TestAssertion[X] : never

// const input = {}
// if (test({ tool: 'ffmpeg', type: 'video', action: 'convert' }, input))
//   input.input.format

export function test<
  T extends Tool,
  A extends Action,
  O extends Object,
>(test: Test<T, A, O>, input: any): input is TestInput<T, A, O> {
  switch (test.action) {
    case 'convert': {
      switch (test.tool) {
        case 'ffmpeg': {
          switch (test.type) {
            case 'video':
              return testConvertVideoWithFfmpegNode(input)
          }
          break
        }
        case 'image-magick':
          switch (test.type) {
            case 'image':
              return testConvertImageWithImageMagickNode(input)
          }
      }
      break
    }
  }
  return false
}

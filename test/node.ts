import test from 'tape'
import testConvertImageWithImageMagick from './convert/image/imagemagick/node'
import testConvertFontWithFontForge from './convert/font/fontforge/node'
import testConvertArchiveNode from './convert/archive/node'

import testGenerateString from './generate/string/node'

const LIST = [
  // testConvertImageWithImageMagick,
  // testConvertFontWithFontForge,
  // testConvertArchiveNode,
  testGenerateString,
]

LIST.forEach(plugin => plugin(test))

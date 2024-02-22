import test from 'tape'
import testConvertImageWithImageMagick from './convert/image/imagemagick/node'
import testConvertFontWithFontForge from './convert/font/fontforge/node'

const LIST = [
  testConvertImageWithImageMagick,
  testConvertFontWithFontForge,
]

LIST.forEach(plugin => plugin(test))

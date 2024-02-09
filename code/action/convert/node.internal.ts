import {
  convertDocumentWithCalibreNode,
  convertDocumentWithLibreOfficeNode,
  convertDocumentWithPandocNode,
} from './document/node.js'
import {
  supportConvertDocumentWithCalibre,
  supportConvertDocumentWithLibreOffice,
  supportConvertDocumentWithPandoc,
} from './document/shared.js'
import { convertFontWithFontForgeNode } from './font/node.js'
import {
  convertImageWithImageMagickNode,
  convertImageWithInkscapeNode,
} from './image/node.js'
import {
  useConvertFontWithFontForge,
  useConvertImageWithImageMagick,
  useConvertImageWithInkscape,
} from './shared.js'

export async function convertInternal(source) {
  // if (useConvertLatexToPng(source.input.format, source.output.format)) {
  //   return await convertLatexToPng(source)
  // }

  if (
    useConvertImageWithInkscape(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertImageWithInkscapeNode(source)
  }

  if (
    useConvertImageWithImageMagick(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertImageWithImageMagickNode(source)
  }

  // if (
  //   useConvertVideoWithFfmpeg(source.input.format, source.output.format)
  // ) {
  //   return await convertVideoWithFfmpeg(source)
  // }

  if (
    useConvertFontWithFontForge(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertFontWithFontForgeNode(source)
  }

  if (
    supportConvertDocumentWithCalibre(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertDocumentWithCalibreNode(source)
  }

  if (
    supportConvertDocumentWithPandoc(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertDocumentWithPandocNode(source)
  }

  if (
    supportConvertDocumentWithLibreOffice(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertDocumentWithLibreOfficeNode(source)
  }
}

import {
  convertDocumentWithCalibreNode,
  convertDocumentWithLibreOfficeNode,
  convertDocumentWithPandocNode,
  convertLatexToPng,
} from './document/node.js'
import { convertFontWithFontForgeNode } from './font/node.js'
import {
  convertImageWithImageMagickNode,
  convertImageWithInkscapeNode,
} from './image/node.js'
import {
  useConvertDocumentWithCalibre,
  useConvertDocumentWithLibreOffice,
  useConvertDocumentWithPandoc,
  useConvertFontWithFontForge,
  useConvertImageWithImageMagick,
  useConvertImageWithInkscape,
  useConvertLatexToPng,
} from './shared.js'

export async function convertInternal(source) {
  if (useConvertLatexToPng(source.input.format, source.output.format)) {
    return await convertLatexToPng(source)
  }

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
    useConvertDocumentWithCalibre(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertDocumentWithCalibreNode(source)
  }

  if (
    useConvertDocumentWithPandoc(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertDocumentWithPandocNode(source)
  }

  if (
    useConvertDocumentWithLibreOffice(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertDocumentWithLibreOfficeNode(source)
  }
}

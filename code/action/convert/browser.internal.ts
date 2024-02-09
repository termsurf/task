import { convertLatexToPngBrowser } from './document/browser.js'
import { convertImageWithImageMagickBrowser } from './image/browser.js'
import {
  useConvertImageWithImageMagick,
  useConvertLatexToPng,
} from './shared.js'

export async function convertInternal(source) {
  if (useConvertLatexToPng(source.input.format, source.output.format)) {
    return await convertLatexToPngBrowser(source)
  }

  if (
    useConvertImageWithImageMagick(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertImageWithImageMagickBrowser(source)
  }

  // if (
  //   useConvertVideoWithFfmpeg(source.input.format, source.output.format)
  // ) {
  //   return await convertVideoWithFfmpeg(source)
  // }

  // if (
  //   useConvertFontWithFontForge(
  //     source.input.format,
  //     source.output.format,
  //   )
  // ) {
  //   return await convertFontWithFontForgeNode(source)
  // }

  // if (
  //   useConvertDocumentWithCalibre(
  //     source.input.format,
  //     source.output.format,
  //   )
  // ) {
  //   return await convertDocumentWithCalibre(source)
  // }

  // if (
  //   useConvertDocumentWithPandoc(
  //     source.input.format,
  //     source.output.format,
  //   )
  // ) {
  //   return await convertDocumentWithPandoc(source)
  // }

  // if (
  //   useConvertDocumentWithLibreOffice(
  //     source.input.format,
  //     source.output.format,
  //   )
  // ) {
  //   return await convertDocumentWithLibreOffice(source)
  // }
}

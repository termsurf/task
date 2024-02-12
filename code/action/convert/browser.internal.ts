import {
  convertDocumentWithCalibreBrowser,
  convertDocumentWithLibreOfficeBrowser,
  convertDocumentWithPandocBrowser,
  convertTxtWithPuppeteerBrowser,
  convertMarkdownWithPuppeteerBrowser,
} from './document/browser.js'
import {
  supportConvertDocumentWithCalibre,
  supportConvertDocumentWithLibreOffice,
  supportConvertDocumentWithPandoc,
  supportConvertMarkdownWithPuppeteer,
  supportConvertTxtWithPuppeteer,
} from './document/shared.js'
import { convertFontWithFontForgeBrowser } from './font/browser.js'
import { convertImageWithImageMagickBrowser } from './image/browser.js'
import {
  useConvertFontWithFontForge,
  useConvertImageWithImageMagick,
} from './shared.js'

export async function convertInternal(source) {
  // if (useConvertLatexToPng(source.input.format, source.output.format)) {
  //   return await convertLatexToPngBrowser(source)
  // }

  if (
    supportConvertTxtWithPuppeteer(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertTxtWithPuppeteerBrowser(source)
  }

  if (
    supportConvertMarkdownWithPuppeteer(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertMarkdownWithPuppeteerBrowser(source)
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

  if (
    useConvertFontWithFontForge(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertFontWithFontForgeBrowser(source)
  }

  if (
    supportConvertDocumentWithCalibre(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertDocumentWithCalibreBrowser(source)
  }

  if (
    supportConvertDocumentWithPandoc(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertDocumentWithPandocBrowser(source)
  }

  if (
    supportConvertDocumentWithLibreOffice(
      source.input.format,
      source.output.format,
    )
  ) {
    return await convertDocumentWithLibreOfficeBrowser(source)
  }
}

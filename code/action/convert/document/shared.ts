import {
  CALIBRE_INPUT_FORMAT,
  CALIBRE_OUTPUT_FORMAT,
  CalibreInputFormat,
  CalibreOutputFormat,
  LIBRE_OFFICE_INPUT_FORMAT,
  LIBRE_OFFICE_OUTPUT_FORMAT,
  LibreOfficeInputFormat,
  LibreOfficeOutputFormat,
  PANDOC_INPUT_FORMAT,
  PANDOC_OUTPUT_FORMAT,
  PandocInputFormat,
  PandocOutputFormat,
  CONVERT_LATEX_TO_PNG_INPUT_FORMAT,
  CONVERT_LATEX_TO_PNG_OUTPUT_FORMAT,
  ConvertLatexToPngInputFormat,
  ConvertLatexToPngOutputFormat,
  PUPPETEER_OUTPUT_FORMAT,
  PuppeteerOutputFormat,
  ConvertMarkdownWithPuppeteerNodeInput,
} from '~/code/type/index'
import { testConvertInputOutput } from '../shared'

export function testConvertLatexToPng(input: any) {
  if (!testConvertInputOutput(input)) {
    return false
  }

  const {
    input: { format: a },
    output: { format: b },
  } = input

  if (a === b) {
    return false
  }
  if (
    !CONVERT_LATEX_TO_PNG_INPUT_FORMAT.includes(
      a as ConvertLatexToPngInputFormat,
    )
  ) {
    return false
  }
  if (
    !CONVERT_LATEX_TO_PNG_OUTPUT_FORMAT.includes(
      b as ConvertLatexToPngOutputFormat,
    )
  ) {
    return false
  }
  return true
}

export function testConvertMarkdownWithPuppeteer(
  input: any,
): input is ConvertMarkdownWithPuppeteerNodeInput {
  if (!testConvertInputOutput(input)) {
    return false
  }
  const {
    input: { format: a },
    output: { format: b },
  } = input

  if (a === b) {
    return false
  }
  if (a !== 'md') {
    return false
  }
  if (!PUPPETEER_OUTPUT_FORMAT.includes(b as PuppeteerOutputFormat)) {
    return false
  }
  return true
}

export function testConvertTxtWithPuppeteer(input: any) {
  if (!testConvertInputOutput(input)) {
    return false
  }
  const {
    input: { format: a },
    output: { format: b },
  } = input

  if (a === b) {
    return false
  }
  if (a !== 'txt') {
    return false
  }
  if (!PUPPETEER_OUTPUT_FORMAT.includes(b as PuppeteerOutputFormat)) {
    return false
  }
  return true
}

export function testConvertDocumentWithCalibre(input: any) {
  if (!testConvertInputOutput(input)) {
    return false
  }
  const {
    input: { format: a },
    output: { format: b },
  } = input

  if (a === b) {
    return false
  }
  if (!CALIBRE_INPUT_FORMAT.includes(a as CalibreInputFormat)) {
    return false
  }
  if (!CALIBRE_OUTPUT_FORMAT.includes(b as CalibreOutputFormat)) {
    return false
  }
  return true
}

export function testConvertDocumentWithPandoc(input: any) {
  if (!testConvertInputOutput(input)) {
    return false
  }
  const {
    input: { format: a },
    output: { format: b },
  } = input

  if (a === b) {
    return false
  }
  if (!PANDOC_INPUT_FORMAT.includes(a as PandocInputFormat)) {
    return false
  }
  if (!PANDOC_OUTPUT_FORMAT.includes(b as PandocOutputFormat)) {
    return false
  }
  return true
}

export function testConvertDocumentWithLibreOffice(input: any) {
  if (!testConvertInputOutput(input)) {
    return false
  }
  const {
    input: { format: a },
    output: { format: b },
  } = input

  if (a === b) {
    return false
  }
  if (
    !LIBRE_OFFICE_INPUT_FORMAT.includes(a as LibreOfficeInputFormat)
  ) {
    return false
  }
  if (
    !LIBRE_OFFICE_OUTPUT_FORMAT.includes(b as LibreOfficeOutputFormat)
  ) {
    return false
  }
  return true
}

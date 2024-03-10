import {
  CalibreInputFormat,
  CalibreOutputFormat,
  LibreOfficeInputFormat,
  LibreOfficeOutputFormat,
  PandocInputFormat,
  PandocOutputFormat,
  ConvertLatexToPngInputFormat,
  ConvertLatexToPngOutputFormat,
  PuppeteerOutputFormat,
} from '~/code/type/shared'
import { testConvertFileInputOutput } from '../shared'
import { getConfig } from '~/code/tool/shared/config'

export function testConvertLatexToPng(input: any) {
  if (!testConvertFileInputOutput(input)) {
    return false
  }

  const CONVERT_LATEX_TO_PNG_INPUT_FORMAT = getConfig(
    'convert-latex-to-png-input-format',
  )

  const CONVERT_LATEX_TO_PNG_OUTPUT_FORMAT = getConfig(
    'convert-latex-to-png-output-format',
  )

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

export function testConvertMarkdownWithPuppeteer(input: any) {
  if (!testConvertFileInputOutput(input)) {
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

  const PUPPETEER_OUTPUT_FORMAT = getConfig('puppeteer-output-format')
  if (!PUPPETEER_OUTPUT_FORMAT.includes(b as PuppeteerOutputFormat)) {
    return false
  }
  return true
}

export function testConvertTxtWithPuppeteer(input: any) {
  if (!testConvertFileInputOutput(input)) {
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
  const PUPPETEER_OUTPUT_FORMAT = getConfig('puppeteer-output-format')
  if (!PUPPETEER_OUTPUT_FORMAT.includes(b as PuppeteerOutputFormat)) {
    return false
  }
  return true
}

export function testConvertDocumentWithCalibre(input: any) {
  if (!testConvertFileInputOutput(input)) {
    return false
  }
  const {
    input: { format: a },
    output: { format: b },
  } = input

  if (a === b) {
    return false
  }
  const CALIBRE_INPUT_FORMAT = getConfig('calibre-input-format')
  const CALIBRE_OUTPUT_FORMAT = getConfig('calibre-output-format')

  if (!CALIBRE_INPUT_FORMAT.includes(a as CalibreInputFormat)) {
    return false
  }
  if (!CALIBRE_OUTPUT_FORMAT.includes(b as CalibreOutputFormat)) {
    return false
  }
  return true
}

export function testConvertDocumentWithPandoc(input: any) {
  if (!testConvertFileInputOutput(input)) {
    return false
  }
  const {
    input: { format: a },
    output: { format: b },
  } = input

  if (a === b) {
    return false
  }

  const PANDOC_INPUT_FORMAT = getConfig('pandoc-input-format')
  const PANDOC_OUTPUT_FORMAT = getConfig('pandoc-output-format')

  if (!PANDOC_INPUT_FORMAT.includes(a as PandocInputFormat)) {
    return false
  }
  if (!PANDOC_OUTPUT_FORMAT.includes(b as PandocOutputFormat)) {
    return false
  }
  return true
}

export function testConvertDocumentWithLibreOffice(input: any) {
  if (!testConvertFileInputOutput(input)) {
    return false
  }
  const {
    input: { format: a },
    output: { format: b },
  } = input

  if (a === b) {
    return false
  }

  const LIBRE_OFFICE_INPUT_FORMAT = getConfig(
    'libre-office-input-format',
  )
  const LIBRE_OFFICE_OUTPUT_FORMAT = getConfig(
    'libre-office-output-format',
  )

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

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
} from '~/code/type/index.js'

export function supportConvertDocument(a: string, b: string) {
  return (
    supportConvertLatexToPng(a, b) ||
    supportConvertDocumentWithCalibre(a, b) ||
    supportConvertDocumentWithPandoc(a, b) ||
    supportConvertDocumentWithLibreOffice(a, b)
  )
}

export function supportConvertLatexToPng(a: string, b: string) {
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

export function supportConvertDocumentWithCalibre(
  a: string,
  b: string,
) {
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

export function supportConvertDocumentWithPandoc(a: string, b: string) {
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

export function supportConvertDocumentWithLibreOffice(
  a: string,
  b: string,
) {
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

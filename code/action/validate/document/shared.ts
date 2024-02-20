import { PDFDocument } from 'pdf-lib'
import _sanitizeHtml from 'sanitize-html'
import {
  SanitizeHtmlFromContentModel,
  ValidatePdfWithData,
  SlicePdfWithData,
} from '~/code/type/index'

export async function validatePdfWithData(input: ValidatePdfWithData) {
  try {
    await PDFDocument.load(input.input.file.data as ArrayBuffer)
    return true
  } catch (e) {
    return false
  }
}
// https://github.com/Wandmalfarbe/pandoc-latex-template

// We found the best open source solution is LibreOffice (which was forked from OpenOffice.org, which itself was called Star Office before it was open sourced). It is much more actively developed than AbiWord, as another answer suggested.
// https://stackoverflow.com/a/21204653/169992
// https://github.com/AlJohri/docx2pdf
// https://askubuntu.com/questions/396825/convert-docx-to-pdf
// sudo apt-get install unoconv
// doc2pdf respondus-docx-sample-file.docx

export async function slicePdfWithData(input: SlicePdfWithData) {
  const readPdf = await PDFDocument.load(
    input.input.file.data as ArrayBuffer,
  )

  const writePdf = await PDFDocument.create()

  let indices: Array<number> = []
  let i = input.startPage
  while (i < input.endPage) {
    indices.push(i++)
  }

  let pages = await writePdf.copyPages(readPdf, indices)

  for (let i = 0, n = pages.length; i < n; i++) {
    let page = pages[i]
    writePdf.addPage(page)
  }

  let bytes = await writePdf.save()

  return bytes
}

export function sanitizeHTMLFromContent(source) {
  const input = SanitizeHtmlFromContentModel.parse(source)
  return _sanitizeHtml(input.input.content)
}

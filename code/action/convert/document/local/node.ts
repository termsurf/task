import {
  buildCommandToConvertDocumentWithLibreOffice,
  buildCommandToConvertDocumentWithCalibre,
  buildCommandToConvertLatexToPdfWithPdfLatex,
  buildCommandToConvertDocumentWithPandoc,
} from './shared.js'
import _ from 'lodash'
import path from 'node:path'
import __dirname from '~/code/tool/shared/directory.js'
// add stealth plugin and use defaults (all evasion techniques)

import {
  ConvertDocumentWithCalibre,
  ConvertDocumentWithCalibreModel,
  ConvertDocumentWithLibreOffice,
  ConvertDocumentWithLibreOfficeModel,
  ConvertDocumentWithPandoc,
  ConvertDocumentWithPandocModel,
  ConvertDocumentWithPuppeteer,
  ConvertDocumentWithPuppeteerModel,
  ConvertLatexToPdfWithPdfLatex,
  ConvertLatexToPdfWithPdfLatexModel,
} from '~/code/type/index.js'
import {
  getBrowser,
  inactivateBrowser,
} from '~/code/tool/node/browser.js'

// export async function readPDFMetadata({ inputPath }) {
//   const { PDFDocument } = require('pdf-lib')
//   const data = fs.readFileSync(inputPath).buffer
//   const pdfDoc = await PDFDocument.load(data, {
//     updateMetadata: false,
//   })

//   return {
//     title: pdfDoc.getTitle(),
//     author: pdfDoc.getAuthor(),
//     subject: pdfDoc.getSubject(),
//     creator: pdfDoc.getCreator(),
//     keywords: pdfDoc.getKeywords(),
//     producer: pdfDoc.getProducer(),
//     createdDate: pdfDoc.getCreationDate(),
//     updatedDate: pdfDoc.getModificationDate(),
//     pageCount: pdfDoc.getPages().length,
//   }
// }

// export async function updatePDFMetadata({
//   inputPath,
//   title,
//   author,
//   subject,
//   keywords,
//   producer,
//   creator,
//   createdDate,
//   updatedDate,
// }) {
//   const { PDFDocument } = require('pdf-lib')
//   const data = fs.readFileSync(inputPath).buffer
//   const pdfDoc = await PDFDocument.load(data)
//   if (title) {
//     pdfDoc.setTitle(title)
//   }
//   if (author) {
//     pdfDoc.setAuthor(author)
//   }
//   if (subject) {
//     pdfDoc.setSubject(subject)
//   }
//   if (keywords) {
//     pdfDoc.setKeywords(keywords)
//   }
//   if (producer) {
//     pdfDoc.setProducer(producer)
//   }
//   if (creator) {
//     pdfDoc.setCreator(creator)
//   }
//   if (createdDate) {
//     pdfDoc.setCreationDate(createdDate)
//   }
//   if (updatedDate) {
//     pdfDoc.setModificationDate(updatedDate)
//   }

//   const bytes = await pdfDoc.save()

//   fs.writeFileSync(inputPath, bytes)
// }

export async function convertDocumentWithPandoc(
  source: ConvertDocumentWithPandoc,
) {
  const input = ConvertDocumentWithPandocModel.parse(source)
  if (input.remote) {
  } else {
    const list = buildCommandToConvertDocumentWithPandoc(input)
    for (const cmd of list) {
      await handlePandocCommand(cmd.link)
    }
    return input.output.file.path
  }
}

export async function convertDocumentWithLibreOffice(
  source: ConvertDocumentWithLibreOffice,
) {
  const input = ConvertDocumentWithLibreOfficeModel.parse(source)
  const list = buildCommandToConvertDocumentWithLibreOffice(input)
  // const name =
  //   path.basename(
  //     input.input.file.path,
  //     path.extname(input.input.file.path),
  //   ) +
  //   '.' +
  //   input.output.format

  // for (const cmd of list) {
  //   await handleLibreOfficeCommand(cmd)
  // }
  // return path.join(input.output.directory.path, name)
}

export async function convertDocumentWithCalibre(
  source: ConvertDocumentWithCalibre,
) {
  const input = ConvertDocumentWithCalibreModel.parse(source)
  const list = buildCommandToConvertDocumentWithCalibre(input)
  for (const cmd of list) {
    await handleCalibreCommand(cmd)
  }
  return input.output.file?.path as string
}

export async function convertLatexToPdfWithPdfLatex(
  source: ConvertLatexToPdfWithPdfLatex,
) {
  const input = ConvertLatexToPdfWithPdfLatexModel.parse(source)
  const list = buildCommandToConvertLatexToPdfWithPdfLatex(input)
  for (const cmd of list) {
    await handlePdfLatexCommand(cmd)
  }
  const outputPath = path.join(
    input.output.directory.path,
    `${input.output.file.name}.pdf`,
  )
  return outputPath
}

export async function convertLatexToHtml() {
  // htlatex file.tex
}

export async function convertDocumentWithPuppeteer(
  source: ConvertDocumentWithPuppeteer,
) {
  const input = ConvertDocumentWithPuppeteerModel.parse(source)
  switch (input.output.format) {
    case 'png':
      return await convertHtmlToPngWithPuppeteer(input)
    case 'pdf':
      return await convertHtmlToPdfWithPuppeteer(input)
  }
}

export async function convertHtmlToPngWithPuppeteer(
  input: ConvertDocumentWithPuppeteer,
) {
  const b = await getBrowser(input.proxy ? `${input.proxy}` : undefined)
  const p = await b.newPage()
  await p.goto(`${input.input.file.path}`)
  await p.waitForNavigation({ waitUntil: input.waitUntil })
  const opts: Record<string, any> = {
    scale: 1,
    path: input.output.file.path,
    printBackground: true,
    preferCSSPageSize: true,
  }
  if (input.viewport?.width) {
    opts.width = input.viewport.width
  }
  if (input.viewport?.height) {
    opts.height = input.viewport.height
  }
  await p.screencast(opts)

  inactivateBrowser(b)
}

// inspectWebpage().then(data => console.log(data.fonts))

// https://stackoverflow.com/questions/1403087/how-can-i-convert-an-html-table-to-csv
// https://stackoverflow.com/questions/37498713/how-to-export-an-html-table-as-a-xlsx-file

export async function convertHtmlToPdfWithPuppeteer(
  input: ConvertDocumentWithPuppeteer,
) {
  const b = await getBrowser(input.proxy ? `${input.proxy}` : undefined)
  const p = await b.newPage()
  await p.goto(`${input.input.file.path}`)
  await p.waitForNavigation({ waitUntil: input.waitUntil })
  const opts: Record<string, any> = {
    scale: 1,
    path: input.output.file.path,
    printBackground: true,
    preferCSSPageSize: true,
  }
  if (input.viewport?.width) {
    opts.width = input.viewport.width
  }
  if (input.viewport?.height) {
    opts.height = input.viewport.height
  }
  await p.pdf(opts)

  inactivateBrowser(b)
}

// // function doit(type, fn) {
// //   var elt = document.getElementById('data-table')
// //   var wb = XLSX.utils.table_to_book(elt, { sheet: 'Sheet JS' })
// //   XLSX.writeFile(wb, fn || 'SheetJSTableExport.' + (type || 'xlsx'))
// // }

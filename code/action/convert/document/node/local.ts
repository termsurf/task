import {
  buildCommandToConvertDocumentWithLibreOffice,
  buildCommandToConvertDocumentWithCalibre,
  buildCommandToConvertDocumentWithPandoc,
  buildCommandToConvertLatexWithPdfLatex,
} from '../command.js'
import _ from 'lodash'
import path from 'node:path'
import __dirname from '~/code/tool/shared/directory.js'
// add stealth plugin and use defaults (all evasion techniques)

import {
  getBrowser,
  inactivateBrowser,
} from '~/code/tool/node/browser.js'
import { runCommandSequence } from '~/code/tool/node/command.js'
import {
  ConvertDocumentWithCalibreNodeInput,
  ConvertDocumentWithLibreOfficeNodeInput,
  ConvertDocumentWithPandocNodeInput,
  ConvertDocumentWithPuppeteerNodeInput,
  ConvertLatexWithPdfLatexNodeInput,
} from '~/code/type/cast.js'
import {
  ConvertDocumentWithCalibreNodeCommandInputModel,
  ConvertDocumentWithLibreOfficeNodeCommandInputModel,
  ConvertDocumentWithPandocNodeCommandInputModel,
  ConvertDocumentWithPuppeteerNodeInputModel,
  ConvertLatexWithPdfLatexNodeCommandInputModel,
} from '~/code/type/take.js'

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

export async function convertDocumentWithPandocLocal(
  input: ConvertDocumentWithPandocNodeInput,
) {
  const commandInput =
    ConvertDocumentWithPandocNodeCommandInputModel.parse(input)
  const sequence = buildCommandToConvertDocumentWithPandoc(commandInput)
  await runCommandSequence(sequence)
  return input.output.file.path
}

export async function convertDocumentWithLibreOfficeLocal(
  input: ConvertDocumentWithLibreOfficeNodeInput,
) {
  const commandInput =
    ConvertDocumentWithLibreOfficeNodeCommandInputModel.parse(input)
  const sequence =
    buildCommandToConvertDocumentWithLibreOffice(commandInput)
  const name =
    path.basename(
      commandInput.input.file.path,
      path.extname(commandInput.input.file.path),
    ) +
    '.' +
    commandInput.output.format
  const outputPath = path.join(input.output.directory.path, name)

  await runCommandSequence(sequence)

  return {
    output: {
      file: {
        path: outputPath,
      },
    },
  }
}

export async function convertDocumentWithCalibreLocal(
  input: ConvertDocumentWithCalibreNodeInput,
) {
  const commandInput =
    ConvertDocumentWithCalibreNodeCommandInputModel.parse(input)
  const sequence =
    buildCommandToConvertDocumentWithCalibre(commandInput)
  await runCommandSequence(sequence)
  return {
    output: {
      file: {
        path: input.output.file.path,
      },
    },
  }
}

export async function convertLatexWithPdfLatexLocal(
  input: ConvertLatexWithPdfLatexNodeInput,
) {
  const commandInput =
    ConvertLatexWithPdfLatexNodeCommandInputModel.parse(input)
  const sequence = buildCommandToConvertLatexWithPdfLatex(commandInput)
  await runCommandSequence(sequence)
  const outputPath = path.join(
    input.output.directory.path,
    `document.pdf`,
  )
  return {
    output: {
      file: {
        path: outputPath,
      },
    },
  }
}

export async function convertLatexToHtml() {
  // htlatex file.tex
}

export async function convertDocumentWithPuppeteer(
  source: ConvertDocumentWithPuppeteerNodeInput,
) {
  const input = ConvertDocumentWithPuppeteerNodeInputModel.parse(source)
  switch (input.output.format) {
    case 'png':
      return await convertHtmlToPngWithPuppeteer(input)
    case 'pdf':
      return await convertHtmlToPdfWithPuppeteer(input)
  }
}

export async function convertHtmlToPngWithPuppeteer(
  input: ConvertDocumentWithPuppeteerNodeInput,
) {
  // const b = await getBrowser(input.proxy ? `${input.proxy}` : undefined)
  // const p = await b.newPage()
  // await p.goto(`${input.input.file.path}`)
  // await p.waitForNavigation({ waitUntil: input.waitUntil })
  // const opts: Record<string, any> = {
  //   scale: 1,
  //   path: input.output.file.path,
  //   printBackground: true,
  //   preferCSSPageSize: true,
  // }
  // if (input.viewport?.width) {
  //   opts.width = input.viewport.width
  // }
  // if (input.viewport?.height) {
  //   opts.height = input.viewport.height
  // }
  // await p.screencast(opts)
  // inactivateBrowser(b)
}

// inspectWebpage().then(data => console.log(data.fonts))

// https://stackoverflow.com/questions/1403087/how-can-i-convert-an-html-table-to-csv
// https://stackoverflow.com/questions/37498713/how-to-export-an-html-table-as-a-xlsx-file

export async function convertHtmlToPdfWithPuppeteer(
  input: ConvertDocumentWithPuppeteerNodeInput,
) {
  // const b = await getBrowser(input.proxy ? `${input.proxy}` : undefined)
  // const p = await b.newPage()
  // await p.goto(`${input.input.file.path}`)
  // await p.waitForNavigation({ waitUntil: input.waitUntil })
  // const opts: Record<string, any> = {
  //   scale: 1,
  //   path: input.output.file.path,
  //   printBackground: true,
  //   preferCSSPageSize: true,
  // }
  // if (input.viewport?.width) {
  //   opts.width = input.viewport.width
  // }
  // if (input.viewport?.height) {
  //   opts.height = input.viewport.height
  // }
  // await p.pdf(opts)
  // inactivateBrowser(b)
}

// // function doit(type, fn) {
// //   var elt = document.getElementById('data-table')
// //   var wb = XLSX.utils.table_to_book(elt, { sheet: 'Sheet JS' })
// //   XLSX.writeFile(wb, fn || 'SheetJSTableExport.' + (type || 'xlsx'))
// // }

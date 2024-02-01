import fsp from 'node:fs/promises'
import {
  buildCommandToConvertDocumentWithLibreOffice,
  buildCommandToConvertDocumentWithCalibre,
  buildCommandToConvertLatexToPdfWithPdfLatex,
  buildCommandToConvertDocumentWithPandoc,
} from './shared.js'
import _ from 'lodash'
import path from 'node:path'

import fs from 'fs'
import __dirname from '~/code/tool/directory.js'
// add stealth plugin and use defaults (all evasion techniques)

import {
  ConvertHtmlToPngWithPuppeteer,
  ConvertHtmlToPngWithPuppeteerModel,
  ConvertDocumentWithCalibre,
  ConvertDocumentWithLibreOffice,
  ConvertDocumentWithPandoc,
  ConvertLatexToPdfWithPdfLatex,
} from '~/code/type/index.js'
import { Command, CommandCall } from '~/code/tool/command.js'
import { ChildProcessError, exec } from '~/code/tool/process.js'
import kink from '~/code/tool/kink.js'
import { getBrowser, inactivateBrowser } from '~/code/tool/browser.js'
import { wait } from '~/code/tool/timer.js'

// export async function splitPDF({ inputPath, outputDirectory }) {
//   let indices = []
//   let startPage = []
//   const data = fs.readFileSync(inputPath).buffer
//   const readPdf = await PDFDocument.load(data)
//   let endPage = readPdf.getPages().length
//   while (startPage < endPage) {
//     indices.push(startPage++)
//   }

//   fs.mkdir(outputDirectory, { recursive: true })

//   for (let i = 0, n = indices.length; i < n; i++) {
//     const index = indices[i]
//     const writePdf = await PDFDocument.create()
//     const [page] = await writePdf.copyPages(readPdf, [index])
//     writePdf.addPage(page)
//     const bytes = await writePdf.save()
//     fs.writeFileSync(
//       path.resolve(`${outputDirectory}/${i + 1}.pdf`),
//       bytes,
//     )
//   }
// }

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
  input: ConvertDocumentWithPandoc,
) {
  const list = buildCommandToConvertDocumentWithPandoc(input)
  for (const cmd of list) {
    await handlePandocCommand(cmd.link)
  }
  return input.output.file.path
}

export async function convertDocumentWithLibreOffice(
  input: ConvertDocumentWithLibreOffice,
) {
  const list = buildCommandToConvertDocumentWithLibreOffice(input)
  const name =
    path.basename(
      input.input.file.path,
      path.extname(input.input.file.path),
    ) +
    '.' +
    input.output.format

  for (const cmd of list) {
    await handleLibreOfficeCommand(cmd)
  }
  return path.join(input.output.directory.path, name)
}

export async function convertDocumentWithCalibre(
  input: ConvertDocumentWithCalibre,
) {
  const list = buildCommandToConvertDocumentWithCalibre(input)
  for (const cmd of list) {
    await handleCalibreCommand(cmd)
  }
  return input.output.file?.path as string
}

export async function convertLatexToPdfWithPdfLatex(
  input: ConvertLatexToPdfWithPdfLatex,
) {
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

export async function handleCalibreCommand(cmd: Command) {
  await exec(cmd.link.join(' '))
}

export async function handleLibreOfficeCommand(cmd: Command) {
  await exec(cmd.link.join(' '))
}

// https://html-validate.org/dev/running-in-browser.html
// https://github.com/apostrophecms/sanitize-html

export async function handlePdfLatexCommand(cmd: Command) {
  try {
    await exec(cmd.link.join(' '))
  } catch (e) {
    if (e instanceof ChildProcessError) {
      const message = e.data.stdout && parseLatexError(e.data.stdout)
      const error = new Error(message ?? e.data.error.message)
      throw error
    }
  }
}

function parseLatexError(text: string) {
  let lines = text.trim().split('\n')
  let firstErrorFound = false
  let lastErrorFound = false
  let message: Array<string> = []

  let newLineCount = 0

  lines.forEach(line => {
    if (line.match(/^\!/)) {
      if (firstErrorFound) {
        lastErrorFound = true
      }
      firstErrorFound = true
    }

    if (lastErrorFound) {
      return
    }

    if (firstErrorFound) {
      // don't have more than 2 new lines in a row.
      if (line.match(/^\s*$/)) {
        newLineCount++

        if (newLineCount > 1) {
          return
        }
      } else {
        newLineCount = 0
      }

      if (line.match(/See the LaTeX manual/i)) {
        return
      }

      if (line.match(/Type\s+H <return>\s+for immediate help/i)) {
        return
      }

      if (line.match(/^\s+\.\.\.\s*/)) {
        return
      }

      message.push(line.replace(/^\!\s+/, '').replace(/\s*$/, ''))
    }
  })

  return message.join('\n').replace(/\n\n+/gm, '\n\n')
}

export async function convertHTMLToPNG(
  source: ConvertHtmlToPngWithPuppeteer,
) {
  const { input, output, viewport, proxy, waitUntil } =
    ConvertHtmlToPngWithPuppeteerModel.parse(source)

  const b = await getBrowser(proxy ? `${proxy}` : undefined)
  const p = await b.newPage()
  await p.goto(`${input.file.path}`)
  await p.waitForNavigation({ waitUntil })
  const opts: Record<string, any> = {
    scale: 1,
    path: output.file.path,
    printBackground: true,
    preferCSSPageSize: true,
  }
  if (viewport?.width) {
    opts.width = viewport.width
  }
  if (viewport?.height) {
    opts.height = viewport.height
  }
  await p.screencast(opts)

  inactivateBrowser(b)
}

// inspectWebpage().then(data => console.log(data.fonts))

export async function inspectWebpage(source) {
  const b = await getBrowser(undefined)
  let data
  try {
    const p = await b.newPage()
    const requests: Array<any> = []
    const hosts = {}
    const session = await p.target().createCDPSession()
    await session.send('DOM.enable')
    await session.send('CSS.enable')
    const fonts = {}
    session.on('CSS.fontsUpdated', event => {
      if (event.font) {
        fonts[event.font.platformFontFamily] = event.font
      }
      // event will be received when browser updates fonts on the page due to webfont loading.
    })
    p.on('requestfinished', async request => {
      const response = request.response()
      const url = new URL(request.url())
      const host = `${url.protocol}//${url.hostname}`
      hosts[host] = true

      const responseHeaders = response?.headers()

      const information = {
        url: request.url(),
        method: request.method(),
        requestHeaders: request.headers(),
        requestPostData: request.postData(),
        responseHeaders: responseHeaders,
      }
      requests.push(information)
    })

    await p.goto('https://www.npmjs.com/package/lite-meta-scraper')
    const cookies = await p.cookies()
    const scriptList = fs.readFileSync(
      `${__dirname}/node/puppeteer/theme.js`,
      'utf-8',
    )
    // await p.waitForNavigation({ waitUntil: 'load' })
    await p.evaluate(scriptList)

    await wait(1000)

    data = (await p.evaluate('task.getWebpageData()')) as Record<
      string,
      any
    >
    data.requests = requests
    data.hosts = Object.keys(hosts).sort()
    data.cookies = cookies
    data.fonts = Object.values(fonts)
  } catch (e) {
  } finally {
    await b.close()
  }
  return data
}

// https://stackoverflow.com/questions/1403087/how-can-i-convert-an-html-table-to-csv
// https://stackoverflow.com/questions/37498713/how-to-export-an-html-table-as-a-xlsx-file

// export async function convertHTMLToPDF(source: ConvertHtmlToPdf) {
//   const {
//     inputPath,
//     outputPath,
//     viewportWidth,
//     viewportHeight,
//     proxy,
//     waitUntil,
//   } = ConvertHtmlToPdfModel.parse(source)

//   const b = await getBrowser(proxy ? `${proxy}` : undefined)
//   const p = await b.newPage()
//   await p.goto(`${inputPath}`)
//   await p.waitForNavigation({ waitUntil })
//   const opts: Record<string, any> = {
//     scale: 1,
//     path: outputPath,
//     printBackground: true,
//     preferCSSPageSize: true,
//   }
//   if (viewportWidth) {
//     opts.width = viewportWidth
//   }
//   if (viewportHeight) {
//     opts.height = viewportHeight
//   }
//   await p.pdf(opts)
//   const item = CACHE.find(x => x.browser === b)

//   if (item) {
//     item.active = false
//   }
// }

// // function doit(type, fn) {
// //   var elt = document.getElementById('data-table')
// //   var wb = XLSX.utils.table_to_book(elt, { sheet: 'Sheet JS' })
// //   XLSX.writeFile(wb, fn || 'SheetJSTableExport.' + (type || 'xlsx'))
// // }

export async function handleExiftoolCommand(cmd: CommandCall) {
  return await exec(cmd.join(' '))
}

export async function handleEbookConvertCommand(cmd: CommandCall) {
  return await exec(cmd.join(' '))
}

export async function handleSofficeCommand(cmd: CommandCall) {
  return await exec(cmd.join(' '))
}

export async function handleJupyterCommand(cmd: CommandCall) {
  return await exec(cmd.join(' '))
}

export async function handleDocx2pdfCommand(cmd: CommandCall) {
  return await exec(cmd.join(' '))
}

export async function handleUnoconvCommand(cmd: CommandCall) {
  return await exec(cmd.join(' '))
}

export async function handlePandocCommand(cmd: CommandCall) {
  try {
    return await exec(cmd.join(' '))
  } catch (e) {
    if (e instanceof Error) {
      if (e instanceof ChildProcessError) {
        if (
          e.data.stderr?.match(
            /pandoc: (.+): withBinaryFile: does not exist \(No such file or directory\)/,
          )
        ) {
          throw kink('file_missing_error', { path: RegExp.$1 })
        }
      }
    }
    throw e
  }
}

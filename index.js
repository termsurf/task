#!/usr/bin/env node
const latex = require('node-latex')
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib')
const fs = require('fs')

start()

async function start() {
  const input = parse()

  switch (input.action) {
    case 'build':
      if (input.object[0]) {
        if (input.object[0].match(/\.tex$/)) {
          await buildLatex(input.object[0], input.detail.o || input.detail.output)
        }
      }
      break
    case 'slice':
      if (input.object[0]) {
        if (input.object[0].match(/\.pdf$/)) {
          await slicePDF(input.object[0],
            (input.detail.o && input.detail.o[0]) || (input.detail.output && input.detail.output[0]),
            parseInt((input.detail.s && input.detail.s[0]) || (input.detail.start && input.detail.start[0])),
            parseInt((input.detail.f && input.detail.f[0]) || (input.detail.end && input.detail.end[0])))
        }
      }
      break
    case 'split':
      if (input.object[0]) {
        if (input.object[0].match(/\.pdf$/)) {
          await splitPDF(input.object[0],
            (input.detail.o && input.detail.o[0]) || (input.detail.output && input.detail.output[0]))
        }
      }
      break
  }
}

async function buildLatex(inputPath, outputPath) {
  return new Promise((res, rej) => {
    const input = fs.createReadStream(inputPath)
    const output = fs.createWriteStream(outputPath)
    const pdf = latex(input, { cmd: 'xetex' })

    pdf.pipe(output)
    pdf.on('error', err => rej(err))
    pdf.on('finish', () => res())
  })
}

async function slicePDF(inputPath, outputPath, startPage, endPage) {
  const readPdf = await PDFDocument.load(fs.readFileSync(inputPath))
  const writePdf = await PDFDocument.create()
  let indices = []
  while (startPage < endPage) {
    indices.push(startPage++)
  }

  let pages = await writePdf.copyPages(readPdf, indices)

  for (let i = 0, n = pages.length; i < n; i++) {
    let page = pages[i]
    writePdf.addPage(page)
  }

  let bytes = await writePdf.save()

  fs.writeFileSync(outputPath, bytes)
}

async function splitPDF(inputPath, outputPath) {
  const readPdf = await PDFDocument.load(fs.readFileSync(inputPath))
  let indices = []
  let startPage = []
  let endPage = readPdf.getPages().length
  while (startPage <= endPage) {
    indices.push(startPage++)
  }

  for (let i = 0, n = indices.length; i < n; i++) {
    const index = indices[i]
    const writePdf = await PDFDocument.create()
    const [page] = await writePdf.copyPages(readPdf, [index])
    writePdf.addPage(page)
    const bytes = await writePdf.save()
    fs.writeFileSync(`${outputPath}/${i + 1}.pdf`, bytes)
  }
}

function parse() {
  let i = 2
  const input = {
    action: process.argv[i++],
    object: [],
    detail: {}
  }

  while (i < process.argv.length) {
    const item = process.argv[i++]
    if (item.match(/^-+/)) {
      const name = item.replace(/^-+/, '')
      const value = process.argv[i++]
      input.detail[name] = input.detail[name] || []
      input.detail[name].push(value)
    } else {
      input.object.push(item)
    }
  }

  return input
}

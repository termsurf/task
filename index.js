#!/usr/bin/env node
const latex = require('node-latex')
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib')
const fs = require('fs')
const svgexport = require('svgexport')
const dirname = require('path').dirname
const mkdirp = require('mkdirp')
const fg = require('fast-glob')
const Puppeteer = require('puppeteer')
const path = require('path')

start()

async function start() {
  const input = parse()

  switch (input.action) {
    case 'rename':
      if (input.object[0] === 'file') {
        await renameFiles(
          (input.detail.p || []).concat(input.detail.pattern || []),
          (input.detail.i && input.detail.i[0]) || (input.detail.input && input.detail.input[0]),
          (input.detail.o && input.detail.o[0]) || (input.detail.output && input.detail.output[0])
        )
      }
      break
    case 'convert':
      if (input.object[0]) {
        if (input.object[0].match(/\.svg$/)) {
          await convertSVG(input.object[0], (input.detail.o && input.detail.o[0]) || (input.detail.output && input.detail.output[0]))
        } else if (input.object[0].match(/\.html/)) {
          await convertHTML(input.object[0],
            (input.detail.o && input.detail.o[0]) || (input.detail.output && input.detail.output[0]),
            (input.detail.w && input.detail.w[0]) || (input.detail.width && input.detail.width[0]),
            (input.detail.h && input.detail.h[0]) || (input.detail.height && input.detail.height[0])
          )
        }
      }
      break
    case 'build':
      if (input.object[0]) {
        if (input.object[0].match(/\.tex$/)) {
          await buildLatex(input.object[0], (input.detail.o && input.detail.o[0]) || (input.detail.output && input.detail.output[0]))
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

async function renameFiles(inputPatterns, inputMatch, outputMatch) {
  const inputRegExp = new RegExp(inputMatch, 'i')
  const entries = fg.sync(inputPatterns, { dot: true, globstar: true })
  for (let i = 0, n = entries.length; i < n; i++) {
    const inputEntry = entries[i]
    const outputEntry = inputEntry.replace(inputRegExp, outputMatch)
    const outputDir = dirname(outputEntry)
    mkdirp.sync(outputDir)
    await moveFile(inputEntry, outputEntry)
  }
}

async function convertHTML(inputPath, outputPath, width, height) {
  if (outputPath.match(/\.pdf$/)) {
    await convertHTMLToPDF(inputPath, outputPath, width, height)
  }
}

async function convertHTMLToPDF(inputPath, outputPath, width, height) {
  const b = await Puppeteer.launch()
  const p = await b.newPage()
  const absolutePath = path.resolve(inputPath)
  await p.goto(`file://${absolutePath}`)
  const opts = {
    scale: 1,
    path: outputPath,
    printBackground: true,
    preferCSSPageSize: true
  }
  if (width) {
    opts.width = width
  }
  if (height) {
    opts.height = height
  }
  await p.pdf(opts)
  await b.close()
}

async function convertSVG(inputPath, outputPath) {
  if (outputPath.match(/\.png$/)) {
    await convertSVGToPNG(inputPath, outputPath)
  }
}

async function convertSVGToPNG(inputPath, outputPath) {
  const dir = dirname(outputPath)
  mkdirp.sync(dir)
  const opts = {
    input: inputPath,
    output: outputPath
  }
  svgexport.render(opts)
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

  const dir = dirname(outputPath)
  mkdirp.sync(dir)
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

  mkdirp.sync(outputPath)

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

async function moveFile(oldPath, newPath) {
  return new Promise((res, rej) => {
    fs.rename(oldPath, newPath, function (err) {
      if (err) {
        if (err.code === 'EXDEV') {
          copy()
        } else {
          rej(err)
        }
        return
      }
      res()
    })

    function copy() {
      var readStream = fs.createReadStream(oldPath)
      var writeStream = fs.createWriteStream(newPath)

      readStream.on('error', (err) => rej(err))
      writeStream.on('error', (err) => rej(err))

      readStream.on('close', function () {
          fs.unlink(oldPath, () => res())
      })

      readStream.pipe(writeStream)
    }
  })
}

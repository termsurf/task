
const { PDFDocument } = require('pdf-lib')
const child_process = require('child_process')
const mkdirp = require('mkdirp')
const path = require('path')
const fs = require('fs')

const force = {
  removeAudio,
  renameFileList,
  convertMP4ToGif,
  convertTTFToWoff2,
  convertTTFToOTF,
  convertTTFToEOT,
  convertTTFToSDF,
  convertHTMLToPDF,
  convertSVGToPNG,
  buildLatex,
  slicePDF,
  splitPDF,
  createZip,
  compressMP4,
  readPDFMetadata,
  updatePDFMetadata,
  createTunnel,
  readImageMetadata
}

module.exports = force

async function removeAudio({ inputPath, outputPath }) {
  await assertCommand('ffmpeg')
  child_process.execSync(`ffmpeg -y -loglevel warning -hide_banner -nostats -i "${inputPath}" -c copy -an "${outputPath}"`)
}

async function createZip({ inputDirectory, outputPath }) {
  // https://github.com/ksoichiro/node-archiver-zip-encryptable
  const archiver = require('archiver')
  const archive = archiver('zip', { zlib: { level: 9 }})
  const stream = fs.createWriteStream(outputPath)

  return new Promise((resolve, reject) => {
    archive
      .directory(inputDirectory, false)
      .on('error', err => reject(err))
      .pipe(stream)

    stream.on('close', () => resolve())
    archive.finalize()
  })
}

async function compressMP4({ inputPath, outputPath }) {
  child_process.execSync(`ffmpeg -y -i ${inputPath} -vcodec h264 -acodec aac ${outputPath}`)
}

async function renameFileList({ inputPatternList, startMatch, endMatch }) {
  const fg = require('fast-glob')
  const inputRegExp = new RegExp(startMatch, 'i')
  const entries = fg.sync(inputPatternList, { dot: true, globstar: true })
  for (let i = 0, n = entries.length; i < n; i++) {
    const inputEntry = entries[i]
    const outputEntry = inputEntry.replace(inputRegExp, endMatch)
    const outputDir = path.dirname(outputEntry)
    mkdirp.sync(outputDir)
    await moveFile(inputEntry, outputEntry)
  }
}

async function convertMP4ToGif({ inputPath, outputPath, fps, width, startTime, endTime }) {
  await assertCommand('ffmpeg')
  fps = fps || 10
  width = width ? String(width).replace(/px/, '') : 512
  let cmd = [`ffmpeg -y -loglevel warning -hide_banner -nostats -i ${inputPath}`]
  if (startTime) {
    cmd.push(`-ss ${startTime}`)
  }
  if (endTime) {
    cmd.push(`-to ${endTime}`)
  }
  cmd.push(`-vf "fps=${fps},scale=${width}:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 ${outputPath}`)

  child_process.execSync(cmd.join(' '))
}

async function convertTTFToWoff2({ inputPath, outputPath }) {
  const input = fs.readFileSync(inputPath)
  const ttf2woff2 = require('ttf2woff2')
  fs.writeFileSync(outputPath, ttf2woff2(input))
}

async function convertTTFToOTF({ inputPath, outputPath }) {
  await assertCommand('fontforge')
  child_process.execSync(`fontforge -lang=ff -c 'Open($1); Generate($2)' "${inputPath}" "${outputPath}"`, { stdio: 'ignore' })
}

async function convertTTFToEOT({ inputPath, outputPath }) {
  await assertCommand('fontforge')
  child_process.execSync(`fontforge -lang=ff -c 'Open($1); Generate($2)' "${inputPath}" "${outputPath}"`, { stdio: 'ignore' })
}

async function convertTTFToSDF({ inputPath, outputPath }) {
  await assertCommand('fontforge')
  child_process.execSync(`fontforge -lang=ff -c 'Open($1); Generate($2)' "${inputPath}" "${outputPath}"`, { stdio: 'ignore' })
}

async function convertHTMLToPDF({ inputPath, outputPath, viewportWidth, viewportHeight }) {
  const Puppeteer = require('puppeteer')
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
  if (viewportWidth) {
    opts.width = viewportWidth
  }
  if (viewportHeight) {
    opts.height = viewportHeight
  }
  await p.pdf(opts)
  await b.close()
}

async function convertSVGToPNG({ inputPath, outputPath }) {
  const dir = path.dirname(outputPath)
  mkdirp.sync(dir)
  const svgexport = require('svgexport')
  const opts = {
    input: inputPath,
    output: outputPath
  }
  svgexport.render(opts)
}

async function buildLatex(input) {
  await assertCommand('xetex')

  const latex = require('node-latex')

  return new Promise((res, rej) => {
    const inputStream = fs.createReadStream(input.inputPath)
    const outputStream = fs.createWriteStream(input.outputPath)
    const pdf = latex(inputStream, { cmd: 'xetex' })

    pdf.pipe(outputStream)
    pdf.on('error', err => rej(err))
    pdf.on('finish', () => res())
  })
}

async function createTunnel({ port }) {
  const ngrok = require('ngrok')
  const url = await ngrok.connect(port)
  return url
}

async function slicePDF({ inputPath, outputPath, startPage, endPage }) {
  const { PDFDocument } = require('pdf-lib')
  const readPdf = await PDFDocument.load(fs.readFileSync(inputPath).buffer)
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

  const dir = path.dirname(outputPath)
  mkdirp.sync(dir)
  fs.writeFileSync(outputPath, bytes)
}

async function splitPDF({ inputPath, outputDirectory }) {
  let indices = []
  let startPage = []
  const data = fs.readFileSync(inputPath).buffer
  const readPdf = await PDFDocument.load(data)
  let endPage = readPdf.getPages().length
  while (startPage < endPage) {
    indices.push(startPage++)
  }

  mkdirp.sync(outputDirectory)

  for (let i = 0, n = indices.length; i < n; i++) {
    const index = indices[i]
    const writePdf = await PDFDocument.create()
    const [page] = await writePdf.copyPages(readPdf, [index])
    writePdf.addPage(page)
    const bytes = await writePdf.save()
    fs.writeFileSync(`${outputDirectory}/${i + 1}.pdf`, bytes)
  }
}

async function readPDFMetadata({ inputPath }) {
  const { PDFDocument } = require('pdf-lib')
  const data = fs.readFileSync(inputPath).buffer
  const pdfDoc = await PDFDocument.load(data, {
    updateMetadata: false
  })

  return {
    title: pdfDoc.getTitle(),
    author: pdfDoc.getAuthor(),
    subject: pdfDoc.getSubject(),
    creator: pdfDoc.getCreator(),
    keywords: pdfDoc.getKeywords(),
    producer: pdfDoc.getProducer(),
    createdDate: pdfDoc.getCreationDate(),
    updatedDate: pdfDoc.getModificationDate(),
    pageCount: pdfDoc.getPages().length
  }
}

async function readImageMetadata({ inputPath }) {
  const gm = require('gm')

  return new Promise((res, rej) => {
    gm(inputPath).size(function(err, size) {
      if (err) return rej(err)
      res({ size })
    })
  })
}

async function updatePDFMetadata({
  inputPath,
  title,
  author,
  subject,
  keywords,
  producer,
  creator,
  createdDate,
  updatedDate
}) {
  const { PDFDocument } = require('pdf-lib')
  const data = fs.readFileSync(inputPath).buffer
  const pdfDoc = await PDFDocument.load(data)
  if (title) pdfDoc.setTitle(title)
  if (author) pdfDoc.setAuthor(author)
  if (subject) pdfDoc.setSubject(subject)
  if (keywords) pdfDoc.setKeywords(keywords)
  if (producer) pdfDoc.setProducer(producer)
  if (creator) pdfDoc.setCreator(creator)
  if (createdDate) pdfDoc.setCreationDate(createdDate)
  if (updatedDate) pdfDoc.setModificationDate(updatedDate)

  const bytes = await pdfDoc.save()

  fs.writeFileSync(inputPath, bytes)
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

async function assertCommand(name) {
  if (!child_process.execSync(`which ${name}`)) {
    switch (process.platform) {
      case 'darwin':
        console.log(`brew install ${name}`)
        break
      default:
        console.log(`install ${name}`)
        break
    }
  }
}


const { PDFDocument } = require('pdf-lib')
const child_process = require('child_process')
const mkdirp = require('mkdirp')
const path = require('path')
const fs = require('fs')

const CONVERT = process.platform === 'win32'
  ? 'D:\\a\\stone\\stone\\convert.exe'
  : 'convert'

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
  readImageMetadata,
  removeEXIFData,
  convertJPGToPNG,
  convertPNGToJPG,
  resizeImage,
  replaceImageColor,
  convertFLACToMp3,
  addAudioToVideo,
  convertDOCXToPDF,
  convertDOCXToTXT,
  unpackRAR,
  createRAR,
  convertTIFFToPNG
}

module.exports = force

async function removeAudio({ inputPath, outputPath }) {
  child_process.execSync(`ffmpeg -y -loglevel warning -hide_banner -nostats -i "${inputPath}" -c copy -an "${outputPath}"`)
}

async function replaceImageColor({
  inputPath,
  outputPath,
  startColor,
  endColor,
  fuzz
}) {
  let cmd = [`${CONVERT} "${path.resolve(inputPath)}"`]
  if (fuzz) cmd.push(`-fuzz ${fuzz}%`)
  cmd.push(`-fill "${endColor}" -opaque "${startColor}"`)
  cmd.push(`"${path.resolve(outputPath)}"`)

  child_process.execSync(cmd.join(' '))
}

async function addAudioToVideo({ inputVideoPath, inputAudioPath, outputPath, fit }) {
  child_process.execSync(`ffmpeg -i "${path.resolve(inputVideoPath)}" -i "${path.resolve(inputAudioPath)}" ${fit ? '-shortest ' : ''}-c copy -map 0:v:0 -map 1:a:0 "${path.resolve(outputPath)}"`)
}

async function resizeImage({
  inputPath,
  outputPath,
  width,
  height,
  force
}) {
  let scale = [width ? width : '', height ? height : ''].join('x')
  let resize = `${scale}${force ? '!' : ''}`
  child_process.execSync(`${CONVERT} "${path.resolve(inputPath)}" -resize ${resize} "${path.resolve(outputPath)}"`)
}

async function unpack7z({ inputPath, outputDirectory }) {
  child_process.execSync(`7z x ${inputPath} -o ${outputDirectory}`)
}

async function create7z({ inputDirectory, outputPath }) {
  child_process.execSync(`7z a ${outputPath} ${inputDirectory}`)
}

async function convertAIToSVG({ inputPath, outputPath }) {
  child_process.execSync(`inkscape -f "${inputPath}" -l "${outputPath}"`)
}

async function convertPSDToPNG({ inputPath, outputPath }) {
  const PSD = require('psd')
  const psd = PSD.fromFile(inputPath)
  await psd.image.saveAsPng(outputPath)
}

async function convertTIFFToPNG({ inputPath, outputPath }) {
  child_process.execSync(`${CONVERT} ${inputPath} ${outputPath}`)
}

async function convertPNGToICO({ inputPath, outputPath }) {
  child_process.execSync(`${CONVERT} ${inputPath} ${outputPath}`)
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
  child_process.execSync(`ffmpeg -y -i "${path.resolve(inputPath)}" -vcodec h264 -acodec aac "${path.resolve(outputPath)}"`)
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
  fps = fps || 10
  width = width ? String(width).replace(/px/, '') : 512
  let cmd = [`ffmpeg -y -loglevel warning -hide_banner -nostats -i "${path.resolve(inputPath)}"`]
  if (startTime) {
    cmd.push(`-ss ${startTime}`)
  }
  if (endTime) {
    cmd.push(`-to ${endTime}`)
  }
  cmd.push(`-vf "fps=${fps},scale=${width}:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 "${path.resolve(outputPath)}"`)

  child_process.execSync(cmd.join(' '))
}

async function convertTTFToWoff2({ inputPath, outputPath }) {
  const input = fs.readFileSync(inputPath)
  const ttf2woff2 = require('ttf2woff2')
  fs.writeFileSync(outputPath, ttf2woff2(input))
}

async function convertDOCXToPDF({ inputPath, outputPath }) {
  const libre = require('libreoffice-convert')
  const file = fs.readFileSync(inputPath)
  const ext = path.extname(outputPath)
  return new Promise((res, rej) => {
    libre.convert(file, ext, undefined, (err, output) => {
      if (err) {
        return rej(err)
      }

      fs.writeFileSync(outputPath, output)
      res()
    })
  })
}

async function convertDOCXToTXT({ inputPath, outputPath }) {
  const libre = require('libreoffice-convert')
  const file = fs.readFileSync(inputPath)
  const ext = path.extname(outputPath)
  return new Promise((res, rej) => {
    libre.convert(file, ext, undefined, (err, output) => {
      if (err) {
        return rej(err)
      }

      fs.writeFileSync(outputPath, output)
      res()
    })
  })
}

async function createRAR({ inputDirectory, outputPath }) {
  child_process.execSync(`rar a "${path.resolve(outputPath)}" "${path.resolve(inputDirectory)}"`)
}

async function unpackRAR({ inputPath, outputDirectory }) {
  const Unrar = require('unrar')
  archive = new Unrar(inputPath)
  return new Promise((res, rej) => {
    archive.list(function(err, entries) {
      for (var i = 0; i < entries.length; i++) {
        var name = entries[i].name
        var type = entries[i].type
        if (type !== 'File') {
          fs.mkdirSync(name)
        }
      }

      for (var i = 0; i < entries.length; i++) {
        var name = entries[i].name
        var type = entries[i].type
        if (type !== 'File') {
          continue
        }

        var stream = archive.stream(name)
        try {
          fs.writeFileSync(name, stream)
        } catch (e) {
          return rej(e)
        }
      }

      res()
    })
  })
}

async function convertTTFToOTF({ inputPath, outputPath }) {
  child_process.execSync(`fontforge -lang=ff -c 'Open($1); Generate($2)' "${path.resolve(inputPath)}" "${path.resolve(outputPath)}"`, { stdio: 'ignore' })
}

async function convertTTFToEOT({ inputPath, outputPath }) {
  child_process.execSync(`fontforge -lang=ff -c 'Open($1); Generate($2)' "${path.resolve(inputPath)}" "${path.resolve(outputPath)}"`, { stdio: 'ignore' })
}

async function convertTTFToSDF({ inputPath, outputPath }) {
  child_process.execSync(`fontforge -lang=ff -c 'Open($1); Generate($2)' "${path.resolve(inputPath)}" "${path.resolve(outputPath)}"`, { stdio: 'ignore' })
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
    fs.writeFileSync(path.resolve(`${outputDirectory}/${i + 1}.pdf`), bytes)
  }
}

async function removeEXIFData({ inputPath }) {
  const data = fs.readFileSync(inputPath).toString('binary')
  const piexif = require('piexifjs')
  const newData = piexif.remove(data)
  fs.writeFileSync(inputPath, newData, 'binary')
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

async function convertFLACToMp3({ inputPath, outputPath }) {
  child_process.execSync(`ffmpeg -i "${path.resolve(inputPath)}" -ab 320k -map_metadata 0 -id3v2_version 3 "${path.resolve(outputPath)}"`)
}

async function convertPNGToJPG({ inputPath, outputPath }) {
  child_process.execSync(`${CONVERT} "${path.resolve(inputPath)}" "${path.resolve(outputPath)}"`)
}

async function convertJPGToPNG({ inputPath, outputPath }) {
  child_process.execSync(`${CONVERT} "${path.resolve(inputPath)}" "${path.resolve(outputPath)}"`)
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


const force = require('./force')

const chart = {
  compress,
  convert,
  replace,
  create,
  remove,
  rename,
  resize,
  update,
  upload,
  build,
  slice,
  split,
  read,
  add
}

module.exports = chart

async function add(input) {
  const type = fetchInput(input, 't', 'type')[0] || input.object[0]
  if (type === 'audio') {
    await addAudioToVideo(input)
  }
}

async function read(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  if (inputPath.match(/\.pdf/)) {
    const data = await force.readPDFMetadata({
      inputPath
    })
    const chalk = require('chalk')

    console.log(`
  ${chalk.gray('title:')} ${data.title}
  ${chalk.gray('author:')} ${data.author}
  ${chalk.gray('subject:')} ${data.subject}
  ${chalk.gray('creator:')} ${data.creator}
  ${chalk.gray('keywords:')} ${data.keywords}
  ${chalk.gray('producer:')} ${data.producer}
  ${chalk.gray('creation date:')} ${data.createdDate}
  ${chalk.gray('modification date:')} ${data.updatedDate}
  ${chalk.gray('page count:')} ${data.pageCount}
`)
  } else if (inputPath.match(/\.(?:gif|jpg|jpeg|png)/i)) {
    await readImageMetadata(inputPath, input)
  }
}

async function build(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]

  if (inputPath.match(/\.tex$/i)) {
    await buildLatex(inputPath, input)
  }
}

async function create(input) {
  const outputPath = fetchInput(input, 'o', 'output')[0] || input.object[0]
  if (outputPath.match(/\.zip$/i)) {
    await createZip(outputPath, input)
  } else if (outputPath.match(/\.rar$/i)) {
    await createRAR(outputPath, input)
  } else if (outputPath === 'tunnel') {
    await createTunnel(input)
  }
}

async function remove(input) {
  const type = fetchInput(input, 't', 'type')[0] || input.object[0]
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[1]
  if (type === 'audio') {
    await removeAudio(inputPath, input)
  } else if (type === 'exif') {
    await force.removeEXIFData({
      inputPath
    })
  }
}

async function resize(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  if (inputPath.match(/\.(?:jpe?g|png|tiff?)$/)) {
    await resizeImage(inputPath, input)
  }
}

async function rename(input) {
  const type = fetchInput(input, 't', 'type')[0]
  if (type === 'f' || type === 'file') {
    await renameFileList(input)
  }
}

async function update(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  if (inputPath.match(/\.pdf/)) {
    await updatePDFMetadata(inputPath, input)
  }
}

async function upload(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  const isPublic = fetchInput(input, 'p', 'public')[0]
  const array = new Array(100)
  array[0] = randomIntFromInterval(1, 9)
  let i = 1
  while (i < array.length) {
    array[i] = randomIntFromInterval(0, 9)
    i++
  }
  const id = array.join('')
  await force.uploadGoogleCloudStorageItem({
    id,
    inputPath,
    isPublic
  })
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

async function slice(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  if (inputPath.match(/\.pdf$/)) {
    await slicePDF(inputPath, input)
  }
}

async function split(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  if (inputPath.match(/\.pdf$/)) {
    await splitPDF(inputPath, input)
  }
}

async function convert(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  if (inputPath.match(/\.svg$/i)) {
    await convertSVG(inputPath, input)
  } else if (inputPath.match(/\.html$/i)) {
    await convertHTML(inputPath, input)
  } else if (inputPath.match(/\.ttf$/i)) {
    await convertTTF(inputPath, input)
  } else if (inputPath.match(/\.mp4$/i)) {
    await convertMP4(inputPath, input)
  } else if (inputPath.match(/\.png$/i)) {
    await convertPNG(inputPath, input)
  } else if (inputPath.match(/\.jpe?g$/i)) {
    await convertJPG(inputPath, input)
  } else if (inputPath.match(/\.flac$/i)) {
    await convertFLAC(inputPath, input)
  } else if (inputPath.match(/\.docx$/i)) {
    await convertDOCX(inputPath, input)
  } else if (inputPath.match(/\.psd$/i)) {
    await convertPSD(inputPath, input)
  } else if (inputPath.match(/\.ai$/i)) {
    await convertAI(inputPath, input)
  } else if (inputPath.match(/\.cr2$/i)) {
    await convertCR2(inputPath, input)
  }
}

async function replace(input) {
  const type = fetchInput(input, 't', 'type')[0] || input.object[0]
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[1]
  if (type === 'color' && inputPath.match(/\.(?:jpe?g|png|tiff?)$/)) {
    await replaceImageColor(inputPath, input)
  }
}

async function compress(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  if (inputPath.match(/\.mp4$/)) {
    await compressMP4(inputPath, input)
  }
}

async function createRAR(outputPath, input) {
  const inputDirectory = fetchInput(input, 'i', 'input')[0]
  await force.createRAR({
    outputPath,
    inputDirectory
  })
}

async function replaceImageColor(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  const startColor = fetchInput(input, 's', 'start')[0]
  const endColor = fetchInput(input, 'e', 'end')[0]
  const fuzz = fetchInput(input, 'z', 'fuzz')[0]
  await force.replaceImageColor({
    inputPath,
    outputPath,
    startColor,
    endColor,
    fuzz
  })
}

async function compressMP4(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  await force.compressMP4({
    inputPath,
    outputPath
  })
}

async function resizeImage(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  let width = fetchInput(input, 'w', 'width')[0]
  let height = fetchInput(input, 'h', 'height')[0]
  let f = fetchInput(input, 'f', 'force')[0]
  await force.resizeImage({
    inputPath,
    outputPath,
    width,
    height,
    force: f
  })
}

async function addAudioToVideo(input) {
  const inputVideoPath = fetchInput(input, 'iv', 'input-video')[0]
  const inputAudioPath = fetchInput(input, 'ia', 'input-audio')[0]
  const outputPath = fetchInput(input, 'o', 'output')[0]
  const fit = fetchInput(input, 'f', 'fit')[0]
  await force.addAudioToVideo({
    inputVideoPath,
    inputAudioPath,
    outputPath,
    fit
  })
}

async function convertPSD(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.png$/i)) {
    await force.convertPSDToPNG({
      inputPath,
      outputPath
    })
  }
}

async function convertCR2(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.jpe?g$/i)) {
    await force.convertCR2ToJPG({
      inputPath,
      outputPath
    })
  }
}

async function convertAI(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.svg$/i)) {
    await force.convertAIToSVG({
      inputPath,
      outputPath
    })
  }
}

async function convertDOCX(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.pdf$/i)) {
    await convertDOCXToPDF(inputPath, outputPath)
  } else if (outputPath.match(/\.txt$/i)) {
    await force.convertDOCXToTXT({ inputPath, outputPath })
  }
}

async function convertDOCXToPDF(inputPath, outputPath) {
  await force.convertDOCXToPDF({
    inputPath,
    outputPath
  })
}

async function readImageMetadata(inputPath, input) {
  const size = fetchInput(input, 's', 'size')[0]
  const data = await force.readImageMetadata({
    inputPath
  })

  console.log(`
  ${data.width}x${data.height}
`)
}

async function updatePDFMetadata(inputPath, input) {
  const outputDirectory = fetchInput(input, 'o', 'output')[0]
  const title = fetchInput(input, 't', 'title')[0]
  const author = fetchInput(input, 'a', 'author')[0]
  const subject = fetchInput(input, 's', 'subject')[0]
  const keywords = fetchInput(input, 'k', 'keyword')
  const producer = fetchInput(input, 'p', 'producer')[0]
  const creator = fetchInput(input, 'c', 'creator')[0]
  const createdDate = fetchInput(input, 't0', 'created-date')[0]
  const updatedDate = fetchInput(input, 'tn', 'updated-date')[0]
  await force.updatePDFMetadata({
    inputPath,
    title,
    author,
    subject,
    keywords,
    producer,
    creator,
    createdDate: createdDate && new Date(createdDate),
    updatedDate: updatedDate && new Date(updatedDate)
  })
}

async function createTunnel(input) {
  const port = input.object[1]
  const url = await force.createTunnel({
    port
  })
  console.log(`
  ${url}
`)
}

async function createZip(outputPath, input) {
  const inputDirectory = fetchInput(input, 'i', 'input')[0]
  await force.createZip({
    outputPath,
    inputDirectory
  })
}

async function splitPDF(inputPath, input) {
  const outputDirectory = fetchInput(input, 'o', 'output')[0]
  await force.splitPDF({
    inputPath,
    outputDirectory
  })
}

async function slicePDF(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  const startPage = fetchInput(input, 's', 'start')[0]
  const endPage = fetchInput(input, 'e', 'end')[0]
  await force.slicePDF({
    inputPath,
    outputPath,
    startPage,
    endPage
  })
}

async function buildLatex(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  await force.buildLatex({
    inputPath,
    outputPath
  })
}

async function renameFileList(input) {
  const inputPatternList = fetchInput(input, 'p', 'pattern')
  const startMatch = fetchInput(input, 's', 'start')[0]
  const endMatch = fetchInput(input, 'e', 'end')[0]
  await force.renameFileList({
    inputPatternList,
    startMatch,
    endMatch
  })
}

async function removeAudio(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  await force.removeAudio({
    inputPath,
    outputPath
  })
}

async function convertFLAC(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.mp3$/i)) {
    await force.convertFLACToMp3({
      inputPath,
      outputPath
    })
  }
}

async function convertMP4(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  const fps = fetchInput(input, 'fps')[0]
  const startTime = fetchInput(input, 's', 'start')[0]
  const endTime = fetchInput(input, 'e', 'end')[0]
  const width = fetchInput(input, 'w', 'width')[0]
  const height = fetchInput(input, 'h', 'height')[0]
  if (outputPath.match(/\.gif$/)) {
    await force.convertMP4ToGif({
      inputPath,
      outputPath,
      fps,
      startTime,
      endTime,
      width,
      height
    })
  }
}

async function convertSVG(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.png$/)) {
    await force.convertSVGToPNG({
      inputPath,
      outputPath
    })
  }
}

async function convertPNG(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.jpe?g$/)) {
    await force.convertPNGToJPG({
      inputPath,
      outputPath
    })
  }
}

async function convertJPG(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.png$/)) {
    await force.convertJPGToPNG({
      inputPath,
      outputPath
    })
  }
}

async function convertTTF(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.woff2$/)) {
    await force.convertTTFToWoff2({
      inputPath,
      outputPath
    })
  } else if (outputPath.match(/\.otf$/)) {
    await force.convertTTFToOTF({
      inputPath,
      outputPath
    })
  } else if (outputPath.match(/\.eot$/)) {
    await force.convertTTFToEOT({
      inputPath,
      outputPath
    })
  } else if (outputPath.match(/\.sdf$/)) {
    await force.convertTTFToSDF({
      inputPath,
      outputPath
    })
  }
}

async function convertHTML(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.pdf$/)) {
    const viewportWidth = fetchInput(input, 'w', 'width')[0]
    const viewportHeight = fetchInput(input, 'h', 'height')[0]
    await force.convertHTMLToPDF({
      inputPath,
      outputPath,
      viewportWidth,
      viewportHeight
    })
  }
}

function fetchInput(input, ...options) {
  let arr = []
  options.forEach(option => {
    if (input.detail[option]) {
      arr.push.apply(arr, input.detail[option])
    }
  })
  return arr
}

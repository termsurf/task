
const force = require('./force')

const chart = {
  compress,
  convert,
  create,
  remove,
  rename,
  update,
  build,
  slice,
  split,
  read
}

module.exports = chart

async function read(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  if (inputPath.match(/\.pdf/)) {
    await force.readPDFMetadata({
      inputPath
    })
  }
}

async function build(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]

  if (inputPath.match(/\.tex$/)) {
    await buildLatex(inputPath, input)
  }
}

async function create(input) {
  const outputPath = fetchInput(input, 'o', 'output')[0] || input.object[0]
  if (outputPath.match(/\.zip$/)) {
    await createZip(outputPath, input)
  }
}

async function remove(input) {
  const type = fetchInput(input, 't', 'type')[0]
  if (type === 'audio') {
    await removeAudio(input)
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
  if (inputPath.match(/\.svg$/)) {
    await convertSVG(inputPath, input)
  } else if (inputPath.match(/\.html$/)) {
    await convertHTML(inputPath, input)
  } else if (inputPath.match(/\.ttf$/)) {
    await convertTTF(inputPath, input)
  } else if (inputPath.match(/\.mp4$/)) {
    await convertMP4(inputPath, input)
  }
}

async function compress(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  if (inputPath.match(/\.mp4$/)) {
    await compressMP4(inputPath, input)
  }
}

async function compressMP4(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  await force.compressMP4({
    inputPath,
    outputPath
  })
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

async function removeAudio(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  const outputPath = fetchInput(input, 'o', 'output')[0]
  await force.removeAudio({
    inputPath,
    outputPath
  })
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

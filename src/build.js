
module.exports = {
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

function add(input) {
  const type = fetchInput(input, 't', 'type')[0] || input.object[0]
  if (type === 'audio') {
    return {
      force: 'addAudioToVideo',
      state: addAudioToVideo(input)
    }
  }
}

function read(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  if (inputPath.match(/\.pdf/)) {
    return {
      force: 'readPDFMetadata',
      state: { inputPath }
    }
  } else if (inputPath.match(/\.(?:gif|jpg|jpeg|png)/i)) {
    return {
      force: 'readImageMetadata',
      state: readImageMetadata(inputPath, input)
    }
  }
}

function build(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]

  if (inputPath.match(/\.tex$/i)) {
    return {
      force: 'buildLatex',
      state: buildLatex(inputPath, input)
    }
  }
}

function create(input) {
  const outputPath = fetchInput(input, 'o', 'output')[0] || input.object[0]
  if (outputPath.match(/\.zip$/i)) {
    return {
      force: 'createZip',
      state: createZip(outputPath, input)
    }
  } else if (outputPath.match(/\.rar$/i)) {
    return {
      force: 'createRAR',
      state: createRAR(outputPath, input)
    }
  } else if (outputPath === 'tunnel') {
    return {
      force: 'createTunnel',
      state: createTunnel(input)
    }
  }
}

function remove(input) {
  const type = fetchInput(input, 't', 'type')[0] || input.object[0]
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[1]
  if (type === 'audio') {
    return {
      force: 'removeAudio',
      state: removeAudio(inputPath, input)
    }
  } else if (type === 'exif') {
    return {
      force: 'removeEXIFData',
      state: removeEXIFData(inputPath)
    }
  }
}

function resize(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  if (inputPath.match(/\.(?:jpe?g|png|tiff?)$/)) {
    return {
      force: 'resizeImage',
      state: resizeImage(inputPath, input)
    }
  }
}

function rename(input) {
  const type = fetchInput(input, 't', 'type')[0]
  if (type === 'f' || type === 'file') {
    return {
      force: 'renameFileList',
      state: renameFileList(input)
    }
  }
}

function update(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  if (inputPath.match(/\.pdf/)) {
    return {
      force: 'updatePDFMetadata',
      state: updatePDFMetadata(inputPath, input)
    }
  }
}

function upload(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  const isPublic = fetchInput(input, 'p', 'public')[0]
}

function slice(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  if (inputPath.match(/\.pdf$/)) {
    return {
      force: 'slicePDF',
      state: slicePDF(inputPath, input)
    }
  }
}

function split(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  if (inputPath.match(/\.pdf$/)) {
    return {
      force: 'splitPDF',
      state: splitPDF(inputPath, input)
    }
  }
}

function convert(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  if (inputPath.match(/\.svg$/i)) {
    return convertSVG(inputPath, input)
  } else if (inputPath.match(/\.html$/i)) {
    return convertHTML(inputPath, input)
  } else if (inputPath.match(/\.ttf$/i)) {
    return convertTTF(inputPath, input)
  } else if (inputPath.match(/\.mp4$/i)) {
    return convertMP4(inputPath, input)
  } else if (inputPath.match(/\.png$/i)) {
    return convertPNG(inputPath, input)
  } else if (inputPath.match(/\.jpe?g$/i)) {
    return convertJPG(inputPath, input)
  } else if (inputPath.match(/\.flac$/i)) {
    return convertFLAC(inputPath, input)
  } else if (inputPath.match(/\.docx$/i)) {
    return convertDOCX(inputPath, input)
  } else if (inputPath.match(/\.psd$/i)) {
    return convertPSD(inputPath, input)
  } else if (inputPath.match(/\.ai$/i)) {
    return convertAI(inputPath, input)
  } else if (inputPath.match(/\.cr2$/i)) {
    return convertCR2(inputPath, input)
  }
}

function replace(input) {
  const type = fetchInput(input, 't', 'type')[0] || input.object[0]
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[1]
  if (type === 'color' && inputPath.match(/\.(?:jpe?g|png|tiff?)$/)) {
    return {
      force: 'replaceImageColor',
      state: replaceImageColor(inputPath, input)
    }
  }
}

function compress(input) {
  const inputPath = fetchInput(input, 'i', 'input')[0] || input.object[0]
  if (inputPath.match(/\.mp4$/)) {
    return {
      force: 'compressMP4',
      state: compressMP4(inputPath, input)
    }
  }
}

function createRAR(outputPath, input) {
  const inputDirectory = fetchInput(input, 'i', 'input')[0]
  return {
    outputPath,
    inputDirectory
  }
}

function replaceImageColor(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  const startColor = fetchInput(input, 's', 'start')[0]
  const endColor = fetchInput(input, 'e', 'end')[0]
  const fuzz = fetchInput(input, 'z', 'fuzz')[0]
  return {
    inputPath,
    outputPath,
    startColor,
    endColor,
    fuzz
  }
}

function compressMP4(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  return {
    inputPath,
    outputPath
  }
}

function resizeImage(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  let width = fetchInput(input, 'w', 'width')[0]
  let height = fetchInput(input, 'h', 'height')[0]
  let f = fetchInput(input, 'f', 'force')[0]
  return {
    inputPath,
    outputPath,
    width,
    height,
    force: f
  }
}

function addAudioToVideo(input) {
  const inputVideoPath = fetchInput(input, 'iv', 'input-video')[0]
  const inputAudioPath = fetchInput(input, 'ia', 'input-audio')[0]
  const outputPath = fetchInput(input, 'o', 'output')[0]
  const fit = fetchInput(input, 'f', 'fit')[0]
  return {
    inputVideoPath,
    inputAudioPath,
    outputPath,
    fit
  }
}

function convertPSD(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.png$/i)) {
    return {
      force: 'convertPSDToPNG',
      state: {
        inputPath,
        outputPath
      }
    }
  }
}

function convertCR2(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.jpe?g$/i)) {
    return {
      force: 'convertCR2ToJPG',
      state: {
        inputPath,
        outputPath
      }
    }
  }
}

function convertAI(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.svg$/i)) {
    return {
      force: 'convertAIToSVG',
      state: {
        inputPath,
        outputPath
      }
    }
  }
}

function convertDOCX(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.pdf$/i)) {
    return {
      force: 'convertDOCXToPDF',
      state: convertDOCXToPDF(inputPath, outputPath)
    }
  } else if (outputPath.match(/\.txt$/i)) {
    return {
      force: 'convertDOCXToTXT',
      state: { inputPath, outputPath }
    }
  }
}

function convertDOCXToPDF(inputPath, outputPath) {
  return {
    inputPath,
    outputPath
  }
}

function readImageMetadata(inputPath, input) {
  const size = fetchInput(input, 's', 'size')[0]
  return {
    inputPath,
    size
  }
}

function updatePDFMetadata(inputPath, input) {
  const outputDirectory = fetchInput(input, 'o', 'output')[0]
  const title = fetchInput(input, 't', 'title')[0]
  const author = fetchInput(input, 'a', 'author')[0]
  const subject = fetchInput(input, 's', 'subject')[0]
  const keywords = fetchInput(input, 'k', 'keyword')
  const producer = fetchInput(input, 'p', 'producer')[0]
  const creator = fetchInput(input, 'c', 'creator')[0]
  const createdDate = fetchInput(input, 't0', 'created-date')[0]
  const updatedDate = fetchInput(input, 'tn', 'updated-date')[0]
  return {
    inputPath,
    title,
    author,
    subject,
    keywords,
    producer,
    creator,
    createdDate: createdDate && new Date(createdDate),
    updatedDate: updatedDate && new Date(updatedDate)
  }
}

function createTunnel(input) {
  const port = input.object[1]
  return {
    port
  }
}

function createZip(outputPath, input) {
  const inputDirectory = fetchInput(input, 'i', 'input')[0]
  return {
    outputPath,
    inputDirectory
  }
}

function splitPDF(inputPath, input) {
  const outputDirectory = fetchInput(input, 'o', 'output')[0]
  return {
    inputPath,
    outputDirectory
  }
}

function slicePDF(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  const startPage = fetchInput(input, 's', 'start')[0]
  const endPage = fetchInput(input, 'e', 'end')[0]
  return {
    inputPath,
    outputPath,
    startPage,
    endPage
  }
}

function buildLatex(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  return {
    inputPath,
    outputPath
  }
}

function renameFileList(input) {
  const inputPatternList = fetchInput(input, 'p', 'pattern')
  const startMatch = fetchInput(input, 's', 'start')[0]
  const endMatch = fetchInput(input, 'e', 'end')[0]
  return {
    inputPatternList,
    startMatch,
    endMatch
  }
}

function removeAudio(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  return {
    inputPath,
    outputPath
  }
}

function convertFLAC(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.mp3$/i)) {
    return {
      force: 'convertFLACToMp3',
      state: convertFLACToMp3(inputPath, outputPath)
    }
  }
}

function convertFLACToMp3(inputPath, outputPath) {
  return {
    inputPath,
    outputPath
  }
}

function convertMP4(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  const fps = fetchInput(input, 'fps')[0]
  const startTime = fetchInput(input, 's', 'start')[0]
  const endTime = fetchInput(input, 'e', 'end')[0]
  const width = fetchInput(input, 'w', 'width')[0]
  const height = fetchInput(input, 'h', 'height')[0]
  if (outputPath.match(/\.gif$/)) {
    return {
      force: 'convertMP4ToGif',
      state: {
        inputPath,
        outputPath,
        fps,
        startTime,
        endTime,
        width,
        height
      }
    }
  }
}

function convertSVG(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.png$/)) {
    return {
      force: 'convertSVGToPNG',
      state: {
        inputPath,
        outputPath
      }
    }
  }
}

function convertPNG(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.jpe?g$/)) {
    return {
      force: 'convertPNGToJPG',
      state: {
        inputPath,
        outputPath
      }
    }
  }
}

function convertJPG(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.png$/)) {
    return {
      force: 'convertJPGToPNG',
      state: {
        inputPath,
        outputPath
      }
    }
  }
}

function convertTTF(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.woff2$/)) {
    return {
      force: 'convertTTFToWoff2',
      state: {
        inputPath,
        outputPath
      }
    }
  } else if (outputPath.match(/\.otf$/)) {
    return {
      force: 'convertTTFToOTF',
      state: {
        inputPath,
        outputPath
      }
    }
  } else if (outputPath.match(/\.eot$/)) {
    return {
      force: 'convertTTFToEOT',
      state: {
        inputPath,
        outputPath
      }
    }
  } else if (outputPath.match(/\.sdf$/)) {
    return {
      force: 'convertTTFToSDF',
      state: {
        inputPath,
        outputPath
      }
    }
  }
}

function convertHTML(inputPath, input) {
  const outputPath = fetchInput(input, 'o', 'output')[0]
  if (outputPath.match(/\.pdf$/)) {
    const viewportWidth = fetchInput(input, 'w', 'width')[0]
    const viewportHeight = fetchInput(input, 'h', 'height')[0]
    return {
      force: 'convertHTMLToPDF',
      state: {
        inputPath,
        outputPath,
        viewportWidth,
        viewportHeight
      }
    }
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

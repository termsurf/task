
const force = require('./force')
const mouse = require('./mount')

const chart = {
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
  convertTIFFToPNG,
  convertPSDToPNG,
  convertAIToSVG,
  convertCR2ToJPG,
  uploadGoogleCloudStorageItem
}

module.exports = chart

async function removeEXIFData(state) {
  await force.removeEXIFData(state)
}

async function unpackRAR(state) {
  await force.unpackRAR(state)
}

async function convertTIFFToPNG(state) {
  await force.convertTIFFToPNG(state)
}

async function uploadGoogleCloudStorageItem(state) {
  await force.uploadGoogleCloudStorageItem(state)
}

async function readPDFMetadata(state) {
  const data = await force.readPDFMetadata(state)
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
}

async function createRAR(state) {
  await force.createRAR(state)
}

async function replaceImageColor(state) {
  await force.replaceImageColor(state)
}

async function compressMP4(state) {
  await force.compressMP4(state)
}

async function resizeImage(state) {
  await force.resizeImage(state)
}

async function addAudioToVideo(state) {
  await force.addAudioToVideo(state)
}

async function convertPSDToPNG(state) {
  await force.convertPSDToPNG(state)
}

async function convertCR2ToJPG(state) {
  await force.convertCR2ToJPG(state)
}

async function convertAIToSVG(state) {
  await force.convertAIToSVG(state)
}

async function convertDOCXToTXT(state) {
  await force.convertDOCXToTXT(state)
}

async function convertDOCXToPDF(state) {
  await force.convertDOCXToPDF(state)
}

async function readImageMetadata(state) {
  const data = await force.readImageMetadata(state)

  console.log(`
  ${data.width}x${data.height}
`)
}

async function updatePDFMetadata(state) {
  await force.updatePDFMetadata(state)
}

async function createTunnel(state) {
  const url = await force.createTunnel(state)
  console.log(`
  ${url}
`)
}

async function createZip(state) {
  await force.createZip(state)
}

async function splitPDF(state) {
  await force.splitPDF(state)
}

async function slicePDF(state) {
  await force.slicePDF(state)
}

async function buildLatex(state) {
  await force.buildLatex(state)
}

async function renameFileList(state) {
  await force.renameFileList(state)
}

async function removeAudio(state) {
  await force.removeAudio(state)
}

async function convertFLACToMp3(state) {
  await force.convertFLACToMp3(state)
}

async function convertMP4ToGif(state) {
  await force.convertMP4ToGif(state)
}

async function convertSVGToPNG(state) {
  await force.convertSVGToPNG(state)
}

async function convertPNGToJPG(state) {
  await force.convertPNGToJPG(state)
}

async function convertJPGToPNG(state) {
  await force.convertJPGToPNG(state)
}

async function convertTTFToWoff2(state) {
  await force.convertTTFToWoff2(state)
}

async function convertTTFToOTF(state) {
  await force.convertTTFToOTF(state)
}

async function convertTTFToEOT(state) {
  await force.convertTTFToEOT(state)
}

async function convertTTFToSDF(state) {
  await force.convertTTFToSDF(state)
}

async function convertHTMLToPDF(state) {
  await force.convertHTMLToPDF(state)
}

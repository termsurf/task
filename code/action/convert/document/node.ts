export * from './calibre/node.js'
export * from './libre-office/node.js'
export * from './pandoc/node.js'
export * from './pdflatex/node.js'
export * from './jupyter/node.js'
export * from './puppeteer/node.js'

// export async function convertLatexToPng(
//   source: ConvertLatexToPngNodeInput,
// ) {
//   const input = ConvertLatexToPngNodeInputModel.parse(source)

//   if (input.handle === 'remote') {
//     // const remoteInput = await resolveInputForConvertRemoteNode(input)
//     // return await convertDocumentWithPandocRemote(remoteInput)
//     return
//   }

//   const localInput = await resolveInputForConvertLocalNode(input)
//   return await convertLatexToPngLocal(localInput)
// }

// export async function convertLatexToPngLocal(
//   input: ConvertLatexToPngNodeLocalInternalInput,
// ) {
//   const outputDirectory = tmpdir() // TODO make better
//   const pdfLatexInput = _.merge({}, input, {
//     output: {
//       format: 'pdf' as const,
//       directory: {
//         path: outputDirectory,
//       },
//     },
//   })
//   const pdfOutput = await convertLatexWithPdfLatexLocal(pdfLatexInput)

//   const pdfCropInput = _.merge({}, input, {
//     input: {
//       file: {
//         path: pdfOutput.output.file.path,
//       },
//     },
//   })

//   return await cropPdfWithPdfCropNode(pdfCropInput)
// }

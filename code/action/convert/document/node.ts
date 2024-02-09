import {
  ConvertDocumentWithCalibreNodeInput,
  ConvertDocumentWithCalibreNodeInputModel,
  ConvertDocumentWithLibreOfficeNodeInput,
  ConvertDocumentWithLibreOfficeNodeInputModel,
  ConvertDocumentWithPandocNodeInput,
  ConvertDocumentWithPandocNodeInputModel,
  ConvertLatexToPngNodeInput,
  ConvertLatexToPngNodeInputModel,
  ConvertLatexToPngNodeLocalInternalInput,
  ConvertLatexWithPdfLatexNodeInput,
  ConvertLatexWithPdfLatexNodeInputModel,
} from '~/code/type/index.js'
import {
  convertDocumentWithCalibreLocal,
  convertDocumentWithLibreOfficeLocal,
  convertDocumentWithPandocLocal,
  convertLatexWithPdfLatexLocal,
} from './node/local.js'
import { bindConvertLocal, bindConvertRemote } from '../tool/node.js'
import { convertDocumentWithPandocRemote } from './node/remote.js'
import { tmpdir } from 'os'
import _ from 'lodash'
import { cropPdfWithPdfCropNode } from '../../crop/document/node.js'

export async function convertDocumentWithPandocNode(
  source: ConvertDocumentWithPandocNodeInput,
) {
  const input = ConvertDocumentWithPandocNodeInputModel.parse(source)

  if (input.handle === 'remote') {
    const remoteInput = await bindConvertRemote(input)
    return await convertDocumentWithPandocRemote(remoteInput)
  }

  const localInput = await bindConvertLocal(input)
  return await convertDocumentWithPandocLocal(localInput)
}

export async function convertDocumentWithCalibreNode(
  source: ConvertDocumentWithCalibreNodeInput,
) {
  const input = ConvertDocumentWithCalibreNodeInputModel.parse(source)

  if (input.handle === 'remote') {
    // const remoteInput = await bindConvertRemote(input)
    // return await convertDocumentWithPandocRemote(remoteInput)
    return
  }

  const localInput = await bindConvertLocal(input)
  return await convertDocumentWithCalibreLocal(localInput)
}

export async function convertDocumentWithLibreOfficeNode(
  source: ConvertDocumentWithLibreOfficeNodeInput,
) {
  const input =
    ConvertDocumentWithLibreOfficeNodeInputModel.parse(source)

  if (input.handle === 'remote') {
    // const remoteInput = await bindConvertRemote(input)
    // return await convertDocumentWithPandocRemote(remoteInput)
    return
  }

  const localInput = await bindConvertLocal(input)
  return await convertDocumentWithLibreOfficeLocal(localInput)
}

export async function convertLatexWithPdfLatexNode(
  source: ConvertLatexWithPdfLatexNodeInput,
) {
  const input = ConvertLatexWithPdfLatexNodeInputModel.parse(source)

  if (input.handle === 'remote') {
    // const remoteInput = await bindConvertRemote(input)
    // return await convertDocumentWithPandocRemote(remoteInput)
    return
  }

  const localInput = await bindConvertLocal(input)
  return await convertLatexWithPdfLatexLocal(localInput)
}

// export async function convertLatexToPng(
//   source: ConvertLatexToPngNodeInput,
// ) {
//   const input = ConvertLatexToPngNodeInputModel.parse(source)

//   if (input.handle === 'remote') {
//     // const remoteInput = await bindConvertRemote(input)
//     // return await convertDocumentWithPandocRemote(remoteInput)
//     return
//   }

//   const localInput = await bindConvertLocal(input)
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

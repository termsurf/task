import {
  ConvertDocumentWithCalibreNodeInput,
  ConvertDocumentWithCalibreNodeInputModel,
  ConvertDocumentWithLibreOfficeNodeInput,
  ConvertDocumentWithLibreOfficeNodeInputModel,
  ConvertDocumentWithPandocNodeInput,
  ConvertDocumentWithPandocNodeInputModel,
} from '~/code/type/index.js'
import {
  convertDocumentWithCalibreLocal,
  convertDocumentWithLibreOfficeLocal,
  convertDocumentWithPandocLocal,
} from './node/local.js'
import { bindConvertLocal, bindConvertRemote } from '../tool/node.js'
import { convertDocumentWithPandocRemote } from './node/remote.js'

export async function convertDocumentWithPandocNode(
  source: ConvertDocumentWithPandocNodeInput,
) {
  const input = ConvertDocumentWithPandocNodeInputModel.parse(source)

  if (input.remote) {
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

  if (input.remote) {
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

  if (input.remote) {
    // const remoteInput = await bindConvertRemote(input)
    // return await convertDocumentWithPandocRemote(remoteInput)
    return
  }

  const localInput = await bindConvertLocal(input)
  return await convertDocumentWithLibreOfficeLocal(localInput)
}

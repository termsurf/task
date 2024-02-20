import {
  ConvertDocumentWithLibreOfficeNodeInput,
  ConvertDocumentWithLibreOfficeNodeInputModel,
  ConvertDocumentWithLibreOfficeNodeOutputModel,
  ConvertDocumentWithLibreOfficeNodeLocalInternalInput,
  ConvertDocumentWithLibreOfficeNodeLocalExternalInput,
  ConvertDocumentWithLibreOfficeNodeLocalInputModel,
  ConvertDocumentWithLibreOfficeNodeRemoteInput,
  ConvertDocumentWithLibreOfficeNodeClientInputModel,
} from '~/code/type/index'
import { buildCommandToConvertDocumentWithLibreOffice } from '../command'
import { runCommandSequence } from '~/code/tool/node/command'
import {
  resolveInputForConvertLocalExternalNode,
  resolveInputForConvertLocalInternalNode,
  resolveInputForConvertRemoteNode,
} from '../../tool/node'
import { extend } from '~/code/tool/shared/object'
import { buildRequestToConvert } from '../../shared'
import { resolveWorkFileNode } from '~/code/tool/node/request'
import path from 'path'
import { replaceFileExtension } from '~/code/tool/shared/screen'

export async function convertDocumentWithLibreOfficeNode(
  source: ConvertDocumentWithLibreOfficeNodeInput,
) {
  const input =
    ConvertDocumentWithLibreOfficeNodeInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertDocumentWithLibreOfficeNodeRemote(input)
    case 'external':
      return await convertDocumentWithLibreOfficeNodeLocalExternal(
        input,
      )
    default:
      return await convertDocumentWithLibreOfficeNodeLocalInternal(
        input,
      )
  }
}

async function convertDocumentWithLibreOfficeNodeLocalExternal(
  source: ConvertDocumentWithLibreOfficeNodeLocalExternalInput,
) {
  const input = await resolveInputForConvertLocalExternalNode(source)
  return await convertDocumentWithLibreOfficeNodeLocal(input)
}

async function convertDocumentWithLibreOfficeNodeLocalInternal(
  source: ConvertDocumentWithLibreOfficeNodeLocalInternalInput,
) {
  const input = await resolveInputForConvertLocalInternalNode(source)
  return await convertDocumentWithLibreOfficeNodeLocal(input)
}

export async function convertDocumentWithLibreOfficeNodeRemote(
  source: ConvertDocumentWithLibreOfficeNodeRemoteInput,
) {
  const input = await resolveInputForConvertRemoteNode(source)
  const clientInput =
    ConvertDocumentWithLibreOfficeNodeClientInputModel.parse(
      extend(input, { handle: 'client' }),
    )

  const request = buildRequestToConvert(clientInput)
  await resolveWorkFileNode(request, input.output.file.path)

  return ConvertDocumentWithLibreOfficeNodeOutputModel.parse({
    file: {
      path: input.output.file.path,
    },
  })
}

export async function convertDocumentWithLibreOfficeNodeLocal(input) {
  const localInput =
    ConvertDocumentWithLibreOfficeNodeLocalInputModel.parse(input)

  const name = replaceFileExtension(
    localInput.input.file.path,
    localInput.input.format,
  )
  const outputPath = path.join(localInput.output.directory.path, name)

  const sequence =
    await buildCommandToConvertDocumentWithLibreOffice(localInput)

  await runCommandSequence(sequence)

  return ConvertDocumentWithLibreOfficeNodeOutputModel.parse({
    file: {
      path: outputPath,
    },
  })
}

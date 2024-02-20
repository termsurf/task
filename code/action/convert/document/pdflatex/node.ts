import {
  ConvertLatexWithPdfLatexNodeInput,
  ConvertLatexWithPdfLatexNodeInputModel,
  ConvertLatexWithPdfLatexNodeOutputModel,
  ConvertLatexWithPdfLatexNodeLocalInternalInput,
  ConvertLatexWithPdfLatexNodeLocalExternalInput,
  ConvertLatexWithPdfLatexNodeLocalInputModel,
  ConvertLatexWithPdfLatexNodeRemoteInput,
  ConvertLatexWithPdfLatexNodeClientInputModel,
} from '~/code/type/index'
import { buildCommandToConvertLatexWithPdfLatex } from '../command'
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

export async function convertLatexWithPdfLatexNode(
  source: ConvertLatexWithPdfLatexNodeInput,
) {
  const input = ConvertLatexWithPdfLatexNodeInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertLatexWithPdfLatexNodeRemote(input)
    case 'external':
      return await convertLatexWithPdfLatexNodeLocalExternal(input)
    default:
      return await convertLatexWithPdfLatexNodeLocalInternal(input)
  }
}

async function convertLatexWithPdfLatexNodeLocalExternal(
  source: ConvertLatexWithPdfLatexNodeLocalExternalInput,
) {
  const input = await resolveInputForConvertLocalExternalNode(source)
  return await convertLatexWithPdfLatexNodeLocal(input)
}

async function convertLatexWithPdfLatexNodeLocalInternal(
  source: ConvertLatexWithPdfLatexNodeLocalInternalInput,
) {
  const input = await resolveInputForConvertLocalInternalNode(source)
  return await convertLatexWithPdfLatexNodeLocal(input)
}

export async function convertLatexWithPdfLatexNodeRemote(
  source: ConvertLatexWithPdfLatexNodeRemoteInput,
) {
  const input = await resolveInputForConvertRemoteNode(source)
  const clientInput =
    ConvertLatexWithPdfLatexNodeClientInputModel.parse(
      extend(input, { handle: 'client' }),
    )

  const request = buildRequestToConvert(clientInput)
  await resolveWorkFileNode(request, input.output.file.path)

  return ConvertLatexWithPdfLatexNodeOutputModel.parse({
    file: {
      path: input.output.file.path,
    },
  })
}

export async function convertLatexWithPdfLatexNodeLocal(input) {
  const localInput =
    ConvertLatexWithPdfLatexNodeLocalInputModel.parse(input)

  const sequence =
    await buildCommandToConvertLatexWithPdfLatex(localInput)

  const outputPath = path.join(
    localInput.output.directory.path,
    'document.pdf',
  )

  await runCommandSequence(sequence)

  return ConvertLatexWithPdfLatexNodeOutputModel.parse({
    file: {
      path: outputPath,
    },
  })
}

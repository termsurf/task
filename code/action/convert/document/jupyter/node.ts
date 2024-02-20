import {
  ConvertDocumentWithJupyterNodeInput,
  ConvertDocumentWithJupyterNodeInputModel,
  ConvertDocumentWithJupyterNodeOutputModel,
  ConvertDocumentWithJupyterNodeLocalInternalInput,
  ConvertDocumentWithJupyterNodeLocalExternalInput,
  ConvertDocumentWithJupyterNodeLocalInputModel,
  ConvertDocumentWithJupyterNodeRemoteInput,
  ConvertDocumentWithJupyterNodeClientInputModel,
} from '~/code/type/index'
import { buildCommandToConvertDocumentWithJupyter } from '../command'
import { runCommandSequence } from '~/code/tool/node/command'
import {
  resolveInputForConvertLocalExternalNode,
  resolveInputForConvertLocalInternalNode,
  resolveInputForConvertRemoteNode,
} from '../../tool/node'
import { extend } from '~/code/tool/shared/object'
import {
  buildFormDataRequestToConvert,
  buildRequestToConvert,
} from '../../shared'
import { resolveWorkFileNode } from '~/code/tool/node/request'

export async function convertDocumentWithJupyterNode(
  source: ConvertDocumentWithJupyterNodeInput,
) {
  const input = ConvertDocumentWithJupyterNodeInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertDocumentWithJupyterNodeRemote(input)
    case 'external':
      return await convertDocumentWithJupyterNodeLocalExternal(input)
    default:
      return await convertDocumentWithJupyterNodeLocalInternal(input)
  }
}

async function convertDocumentWithJupyterNodeLocalExternal(
  source: ConvertDocumentWithJupyterNodeLocalExternalInput,
) {
  const input = await resolveInputForConvertLocalExternalNode(source)
  return await convertDocumentWithJupyterNodeLocal(input)
}

async function convertDocumentWithJupyterNodeLocalInternal(
  source: ConvertDocumentWithJupyterNodeLocalInternalInput,
) {
  const input = await resolveInputForConvertLocalInternalNode(source)
  return await convertDocumentWithJupyterNodeLocal(input)
}

export async function convertDocumentWithJupyterNodeRemote(
  source: ConvertDocumentWithJupyterNodeRemoteInput,
) {
  const input = await resolveInputForConvertRemoteNode(source)
  const clientInput =
    ConvertDocumentWithJupyterNodeClientInputModel.parse(
      extend(input, { handle: 'client' }),
    )

  const request = buildRequestToConvert(clientInput)
  await resolveWorkFileNode(request, input.output.file.path)

  return ConvertDocumentWithJupyterNodeOutputModel.parse({
    file: {
      path: input.output.file.path,
    },
  })
}

export async function convertDocumentWithJupyterNodeLocal(input) {
  const localInput =
    ConvertDocumentWithJupyterNodeLocalInputModel.parse(input)

  const sequence =
    await buildCommandToConvertDocumentWithJupyter(localInput)

  await runCommandSequence(sequence)

  return ConvertDocumentWithJupyterNodeOutputModel.parse({
    file: {
      path: localInput.output.file.path,
    },
  })
}

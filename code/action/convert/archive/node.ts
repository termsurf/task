import {
  ConvertArchiveNodeInput,
  ConvertArchiveNodeInputModel,
  ConvertArchiveNodeOutputModel,
  ConvertArchiveNodeLocalInternalInput,
  ConvertArchiveNodeLocalExternalInput,
  ConvertArchiveNodeRemoteInput,
  ConvertArchiveNodeClientInputModel,
  ExtractWithUnarchiverModel,
  ArchiveModel,
} from '~/code/type'
import { runCommandSequence } from '~/code/tool/node/command'
import {
  resolveInputForConvertLocalExternalNode,
  resolveInputForConvertLocalInternalNode,
  resolveInputForConvertRemoteNode,
} from '../tool/node'
import { extend } from '~/code/tool/shared/object'
import { buildRequestToConvert } from '../shared'
import { resolveWorkFileNode } from '~/code/tool/node/request'
import { NativeOptions } from '~/code/tool/shared/request'
import { buildCommandToExtractWithUnarchiver } from '../../extract/archive/command'
import {
  generateTemporaryDirectoryPath,
  removeDirectory,
} from '~/code/tool/node/file'
import _ from 'lodash'
import {
  buildCommandToArchiveWithRar,
  buildCommandToArchiveWithZip,
} from '../../archive/command'
import kink from '~/code/tool/shared/kink'

export async function convertArchiveNode(
  source: ConvertArchiveNodeInput,
  native?: NativeOptions,
) {
  const input = ConvertArchiveNodeInputModel.parse(source)

  switch (input.handle) {
    case 'remote':
      return await convertArchiveNodeRemote(input, native)
    case 'external':
      return await convertArchiveNodeLocalExternal(input, native)
    default:
      return await convertArchiveNodeLocalInternal(input, native)
  }
}

async function convertArchiveNodeLocalExternal(
  source: ConvertArchiveNodeLocalExternalInput,
  native?: NativeOptions,
) {
  const input = await resolveInputForConvertLocalExternalNode(source)
  return await convertArchiveNodeLocal(input, native)
}

async function convertArchiveNodeLocalInternal(
  source: ConvertArchiveNodeLocalInternalInput,
  native?: NativeOptions,
) {
  const input = await resolveInputForConvertLocalInternalNode(source)
  return await convertArchiveNodeLocal(input, native)
}

export async function convertArchiveNodeRemote(
  source: ConvertArchiveNodeRemoteInput,
  native?: NativeOptions,
) {
  const input = await resolveInputForConvertRemoteNode(source)
  const clientInput = ConvertArchiveNodeClientInputModel.parse(
    extend(input, { handle: 'client' }),
  )

  const request = buildRequestToConvert(clientInput)
  await resolveWorkFileNode(request, input.output.file.path)

  return ConvertArchiveNodeOutputModel.parse({
    file: {
      path: input.output.file.path,
    },
  })
}

export async function convertArchiveNodeLocal(
  input,
  native?: NativeOptions,
) {
  const onUpdate = native?.onUpdate

  const directory = await generateTemporaryDirectoryPath()
  const unarchiveInput = ExtractWithUnarchiverModel.parse(
    _.merge(input, {
      input: {
        directory: {
          path: directory,
        },
      },
    }),
  )

  const unarchiveSequence =
    await buildCommandToExtractWithUnarchiver(unarchiveInput)
  await runCommandSequence(unarchiveSequence)

  const archiveInput = ArchiveModel.parse(
    _.merge(input, {
      input: {
        path: directory,
      },
    }),
  )

  switch (archiveInput.output.format) {
    case 'zip': {
      const archiveSequence =
        await buildCommandToArchiveWithZip(archiveInput)
      await runCommandSequence(archiveSequence)
      break
    }
    case 'rar': {
      const archiveSequence =
        await buildCommandToArchiveWithRar(archiveInput)
      await runCommandSequence(archiveSequence)
      break
    }
    default:
      throw kink('task_not_implemented')
  }

  await removeDirectory(directory)

  return {
    file: {
      path: archiveInput.output.file.path,
    },
  }
}

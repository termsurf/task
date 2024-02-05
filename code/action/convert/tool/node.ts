import _ from 'lodash'
import {
  loadAllFilesForRemoteUpload,
  saveAllRemoteFilesLocally,
} from '~/code/tool/node/file'
import {
  FileLink,
  addLocalFilesToList,
  addRemoteFilesToList,
} from '~/code/tool/shared/file'
import { unsetAll } from '~/code/tool/shared/object'

// https://www.npmjs.com/package/ftp
export async function bindConvertLocal(input) {
  const through = _.cloneDeep(input)
  const files: Array<FileLink> = []

  if (input.input.file.path) {
    addRemoteFilesToList(files, input.input.file.path, [
      'input',
      'file',
      'path',
    ])
  }

  if (files.length) {
    const fileThrough = await saveAllRemoteFilesLocally(files)
    unsetAll(through, [['input', 'file', 'path']])
    _.merge(through, fileThrough)
  }

  unsetAll(through, [['remote']])

  return through
}

export async function bindConvertRemote(input) {
  const through = _.cloneDeep(input)
  const files: Array<FileLink> = []

  if (input.input.file.path) {
    addLocalFilesToList(files, input.input.file.path, [
      'input',
      'file',
      'content',
    ])
  }

  if (files.length) {
    const fileThrough = await loadAllFilesForRemoteUpload(files)
    _.merge(through, fileThrough)
    unsetAll(through, [['input', 'file', 'path']])
  }

  unsetAll(through, [['remote']])

  return through
}
